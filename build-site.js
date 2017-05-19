/**
 * Will build the folder structure of the published book.
 * The folder structure supports:
 * * multi language
 * * version history
 * * pdf download
 * The structure should be like
 * @example
 * ```
 * site/
 * ├── latest --> linked to 0.0.2
 * ├── pdf
 * │   ├── latest --> linked to 0.0.2
 * │   ├── 0.0.1
 * │   │   ├── book-name_en.pdf
 * │   │   └── book-name_it.pdf
 * │   └── 0.0.2
 * │       ├── book-name_en.pdf
 * │       └── book-name_it.pdf
 * ├── 0.0.1
 * └── 0.0.2
 * ```
 */

'use strict'

const semver = require('semver')
const fs = require('fs')
const path = require('path')
const tempDir = './temp'
const siteDir = './site'
const execAsync = require('child_process').exec
const spawnAsync = require('child_process').spawn
const glob = require('glob')
const async = require('async')
const mkdirp = require('mkdirp')
const chalk = require('chalk')
const os = require('os')

/**
 * Builds the gitbook site.
 * @param  {Function} cb - callback
 */
function buildSite (cb) {
  /**
   * Site url.
   * @type {String}
   */
  let url = process.env.BOOK_URL || 'http://localhost:8080'
  let bookFileName = process.env.BOOK_FILE_NAME || 'book'
  /**
   * String that will be substituted with the site url in the book.json files.
   * @type {String}
   */
  let bookUrlTag = '{{ BOOK_URL }}'

  /**
   * String that will be substituted with the base url path for pdf download.
   * @type {String}
   */
  let bookPdfUrlTag = '{{ BOOK_PDF_URL }}'
  let bookFileNameTag = '{{ BOOK_FILE_NAME }}'
  /**
   * The configuration options of the versions plugin (it is stored only in the root book.json file)
   * @type {Object}
   */
  let pluginVersionsOptions = {
    gitbookConfigURL: null,
    options: []
  }

  /**
   * Creates the temporary folder to store tar archives of the different book releases.
   * @param  {Function} cb - callback
   */
  function _makeTemp (cb) {
    fs.mkdir(tempDir, (err) => {
      return err ? cb(err) : cb()
    })
  }

  /**
   * Removes the old site folder.
   * @param  {Function} cb -  callback
   * @return {[type]}      [description]
   */
  function _cleanUpSiteData (cb) {
    let cmd = `rm -rf ${path.join(__dirname, siteDir)}`
    execAsync(cmd, function _onSiteDataCleaned (err) {
      if (err) {
        if (err.code !== 'ENOENT') return cb(err)
      }
      return cb()
    })
  }

  /**
   * Removes the temp directory containing the books archives.
   * @param  {Function} cb - callback
   */
  function _cleanUpTempData (cb) {
    let cmd = `rm -rf ${path.join(__dirname, tempDir)}`
    execAsync(cmd, function _onRmTempDir (err) {
      if (err) {
        if (err.code !== 'ENOENT') return cb(err)
      }
      return cb()
    })
  }

  /**
   * Called at startup. Will clean the old site and temp data (if present).
   * @param  {Function} cb - callback
   */
  function _onStart (cb) {
    function _makeSiteDir (cb) {
      fs.mkdir(siteDir, (err) => {
        if (err) {
          if (err.code !== 'EEXIST') return cb(err)
          _cleanUpSiteData((err) => {
            return err ? cb(err) : _onStart(cb)
          })
        } else {
          return cb()
        }
      })
    }
    async.series([
      _makeSiteDir,
      _cleanUpTempData
    ], function _onStarted (err, res) {
      return err ? cb(err) : cb()
    })
  }

  /**
   * Gets the book releases and makes tar archives for each one in the temp directory.
   * @param  {Function} cb - callback
   */
  function _getReleases (cb) {
    function _getReleasesArchives (releases, cb) {
      async.eachLimit(releases, os.cpus().length, _getReleaseFiles, function _onGotReleasesArchives (err, res) {
        return err ? cb(err) : cb(null, releases)
      })
    }

    function _getReleaseFiles (release, cb) {
      let gitArchive = `git archive --prefix=${release}/ ${release} -o ${path.join(path.resolve(tempDir), release)}.tar`
      let options = {}
      execAsync(gitArchive, options, (err, stdout, stderr) => {
        return err ? cb(err) : cb()
      })
    }

    function _getReleaseTags (cb) {
      let gitTag = `git tag`
      let options = {
        cwd: path.resolve(tempDir)
      }
      let releases = []
      execAsync(gitTag, options, (err, stdout, stderr) => {
        if (err) return cb(err)
        let tags = stdout.split('\n').filter(line => line !== '')
        if (!tags.length) return cb(new Error('No tags found.'))
        releases = tags.filter(item => semver.valid(item)).sort((a, b) => {
          let a1 = semver.clean(a)
          let b1 = semver.clean(b)
          return semver.gt(b1, a1)
        })
        if (!releases.length) return cb(new Error('No releases found.'))
        return cb(null, releases)
      })
    }

    let funcs = [
      _getReleaseTags,
      _getReleasesArchives
    ]
    async.waterfall(funcs, function _onGotReleases (err, releases) {
      return err ? cb(err) : cb(null, releases)
    })
  }

  function _buildBooks (releases, cb) {
    /**
     * Builds a single book release.
     * @param  {String}   release - the release string
     * @param  {Function} cb      - callback
     */
    function _buildBook (release, cb) {
      let r = semver.clean(release)
      let currentPdfFilePath = null

      function _untarArchive (cb) {
        let tar = `tar -xf ${release}.tar`
        let options = {
          cwd: path.resolve(tempDir)
        }
        execAsync(tar, options, function _onExtracted (err, stdout, stderr) {
          return err ? cb(err) : cb()
        })
      }

      function _compileBookJsonFiles (cb) {
        function _compileBookJson (file, cb) {
          let fileContent = null
          let bookJson = null

          function _readFile (cb) {
            fs.readFile(file, 'UTF8', (err, data) => {
              fileContent = data
              return err ? cb(err) : cb()
            })
          }

          function _compileData (cb) {
            let bookUrl = `${url}`

            try {
              bookJson = JSON.parse(fileContent)
            } catch (e) {
              return cb(e)
            }
            if (!bookJson.plugins) {
              let pdfUrl = `/pdf/${r}`
              bookJson.pluginsConfig.downloadpdf.base = bookJson.pluginsConfig.downloadpdf.base.replace(bookPdfUrlTag, pdfUrl)
              bookJson.pluginsConfig.downloadpdf.base = bookJson.pluginsConfig.downloadpdf.base.replace(bookFileNameTag, bookFileName)
              currentPdfFilePath = '{{ BOOK_PDF_URL }}/{{ BOOK_FILE_NAME }}.pdf'.replace(bookPdfUrlTag, pdfUrl)
              currentPdfFilePath = currentPdfFilePath.replace(bookFileNameTag, bookFileName)
            } else {
              !pluginVersionsOptions.gitbookConfigURL && (pluginVersionsOptions.gitbookConfigURL = bookJson.pluginsConfig.versions.gitbookConfigURL.replace(bookUrlTag, bookUrl))
              bookJson.pluginsConfig.versions.gitbookConfigURL = pluginVersionsOptions.gitbookConfigURL
              bookJson.pluginsConfig.versions.options = [
                {
                  value: `/${r}/`,
                  text: r
                }
              ]
            }
            let newContent
            try {
              newContent = JSON.stringify(bookJson, null, '  ')
            } catch (e) {
              return cb(e)
            }
            fs.writeFile(file, newContent, 'UTF8', (err) => {
              return err ? cb(err) : cb()
            })
          }

          let funcs = [
            _readFile,
            _compileData
          ]
          async.series(funcs, (err, res) => {
            return err ? cb(err) : cb(null, file)
          })
        }

        let options = {
          cwd: path.resolve(tempDir),
          absolute: true
        }
        glob(`**/${release}/**/book.json`, options, (err, files) => {
          if (err) return cb(err)
          async.eachSeries(files, _compileBookJson, function _onBookJsonFilesCompiled (err, res) {
            return err ? cb(err) : cb()
          })
        })
      }

      function _gitbookInstall (cb) {
        let args = ['install']
        let options = {
          cwd: path.resolve(path.join(tempDir, release))
        }
        let gb = spawnAsync('gitbook', args, options)
        gb.on('error', function _onGitbookError (err) {
          return cb(err)
        })
        gb.stdout.on('data', (data) => {
          console.log(data.toString())
        })
        gb.on('close', (code) => {
          return code !== 0 ? cb(new Error(`Gitbook install had errors`)) : cb()
        })
      }

      function _gitbookSite (cb) {
        let dest = path.join('../../', siteDir, r)
        let args = ['build', '.', `${dest}`]
        let options = {
          cwd: path.resolve(path.join(tempDir, release))
        }
        let gb = spawnAsync('gitbook', args, options)
        gb.on('error', function _onGitbookError (err) {
          return cb(err)
        })
        gb.stdout.on('data', (data) => {
          console.log(data.toString())
        })
        gb.on('close', (code) => {
          return code !== 0 ? cb(new Error(`Gitbook build had errors`)) : cb()
        })
      }

      function _gitbookPdf (cb) {
        function _makeDir (cb) {
          mkdirp(path.join(siteDir, 'pdf', r), (err) => {
            return err ? cb(err) : cb()
          })
        }
        function _genPdf (cb) {
          let dest = path.join('../../', siteDir, currentPdfFilePath)
          let args = ['pdf', '.', `${dest}`]
          let options = {
            cwd: path.resolve(path.join(tempDir, release))
          }
          let gb = spawnAsync('gitbook', args, options)
          let errs = []
          gb.on('error', function _onGitbookError (err) {
            errs.push(err)
          })
          gb.stdout.on('data', (data) => {
            console.log(data.toString())
          })
          gb.on('close', (code) => {
            console.log(`Gitbook build exited with code ${code}`)
            return code !== 0 ? cb(errs) : cb()
          })
        }

        async.series([
          _makeDir,
          _genPdf
        ], function _onPdfGenerated (err, res) {
          return err ? cb(err) : cb()
        })
      }

      let funcs = [
        _untarArchive,
        _compileBookJsonFiles,
        _gitbookInstall,
        _gitbookSite,
        _gitbookPdf
      ]
      async.series(funcs, function _onBookBuilt (err, res) {
        return err ? cb(err) : cb(null, release)
      })
    }

    function _symLinkLatestRelease (cb) {
      let latestRelease = path.resolve(path.join(siteDir, semver.clean(releases[0])))
      let latest = path.resolve(path.join(siteDir, 'latest'))
      fs.symlink(latestRelease, latest, (err) => {
        return err ? cb(err) : cb()
      })
    }

    function _publishRootBookJsonFile (cb) {
      let source = path.resolve(path.join(tempDir, releases[0], 'book.json'))
      let dest = path.resolve(path.join(siteDir, 'book.json'))
      function _getBookJson (cb) {
        fs.readFile(source, 'UTF8', (err, data) => {
          return err ? cb(err) : cb(null, data)
        })
      }
      function _publishFile (data, cb) {
        let bookJson
        let bookJsonContent
        try {
          bookJson = JSON.parse(data)
          releases.forEach((release) => {
            let r = semver.clean(release)
            pluginVersionsOptions.options.push({
              text: `${r}`,
              value: `/${r}/`
            })
          })
          bookJson.pluginsConfig.versions = pluginVersionsOptions
          bookJsonContent = JSON.stringify(bookJson, null, '  ')
        } catch (err) {
          return cb(err)
        }
        fs.writeFile(dest, bookJsonContent, 'UTF8', (err) => {
          return err ? cb(err) : cb()
        })
      }

      let funcs = [
        _getBookJson,
        _publishFile
      ]
      async.waterfall(funcs, function _onBookJsonPublished (err, res) {
        return err ? cb(err) : cb()
      })
    }

    async.eachLimit(releases, os.cpus().length, _buildBook, function _onBooksBuilt (err) {
      if (err) return cb(err)
      async.series([
        _symLinkLatestRelease,
        _publishRootBookJsonFile
      ], function _onLastTouch (err, res) {
        return err ? cb(err) : cb()
      })
    })
  }

  /**
   * Build site sequence.
   * @type {Function[]}
   */
  let funcs = [
    _onStart,
    _makeTemp,
    _getReleases,
    _buildBooks
  ]
  async.waterfall(funcs, function _onSiteBuilt (err, res) {
    let errs = []
    if (err) errs.push(err)
    _cleanUpTempData(function _onTempDataWiped (err) {
      if (err) errs.push(err)
      return errs.length ? cb(errs) : cb()
    })
  })
}

console.log(chalk.green('Starting building site...'))
console.time('Build took')
buildSite(function _onSiteBuilt (err) {
  if (err) {
    console.timeEnd('Build took')
    console.error(chalk.red(`An error occurred building the site: ${err}`))
  } else {
    console.timeEnd('Build took')
    console.log(chalk.green('Site built!'))
  }
})
