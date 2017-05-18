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
const exec = require('child_process').execSync
const execAsync = require('child_process').exec
const spawnAsync = require('child_process').spawn
const glob = require('glob')
const async = require('async')

let url = process.env.BOOK_URL || 'localhost:8080'
let bookUrlTag = '{{ BOOK_URL }}'
let bookPdfUrlTag = '{{ BOOK_PDF_URL }}'
let pluginVersionsOptions = {
  gitbookConfigURL: null,
  options: []
}

function onStart () {
  try {
    /** make the site root directory */
    fs.mkdirSync(siteDir)
  } catch (e) {
    if (e.code !== 'EEXIST') throw e
    cleanUpSiteData()
    onStart()
  }
}

function buildSite () {
  return new Promise((resolve, reject) => {
    onStart()
    /**
     * clean the old clone if present
     */
    cleanUpRepoData()
    /**
     * clone the repo in the repo
     */
    cloneRepo().then(() => {
      return getReleases()
    }).then((releases) => {
      return buildBooks(releases)
    }).then(resolve).catch(reject)
  })
}

function cloneRepo () {
  let gitClone = `git clone ./ ${tempDir}`
  return new Promise((resolve, reject) => {
    execAsync(gitClone, (err, stdout, stderr) => {
      return err ? reject(err) : resolve()
    })
  })
}

function getReleases () {
  return new Promise((resolve, reject) => {
    let gitTag = `git tag`
    let options = {
      cwd: path.resolve(tempDir)
    }
    execAsync(gitTag, options, (err, stdout, stderr) => {
      if (err) reject(err)
      let tags = stdout.split('\n').filter(line => line !== '')
      let releases = tags.filter(item => semver.valid(item)).sort((a, b) => {
        let a1 = semver.clean(a)
        let b1 = semver.clean(b)
        return semver.gt(b1, a1)
      })
      resolve(releases)
    })
  })
}

function checkoutRelease (release) {
  let gitCheckout = `git checkout ${release}`
  let options = {
    cwd: path.resolve(tempDir)
  }
  return new Promise((resolve, reject) => {
    execAsync(gitCheckout, options, (err, stdout, stderr) => {
      return err ? reject(err) : resolve(release)
    })
  })
}

function buildBook (release) {
  let r = semver.clean(release)

  function _compileBookJsonFiles () {
    function _compileBookJson (file) {
      console.log('compil')
      return new Promise((resolve, reject) => {
        let funcs = []

        funcs.push(function _readFile (cb) {
          fs.readFile(file, 'UTF8', (err, data) => {
            return err ? cb(err) : cb(null, data)
          })
        })

        funcs.push(function _compileData (fileContent, cb) {
          console.log('c data', fileContent)
          let bookUrl = `${url}`
          /**
           * If the name contains a slash it means it is a file inside a language folder,
           * so i  just compile the download pdf link, otherwise it is the main book.json file.
           */
          if (/\//.test(file)) {
            let pdfUrl = `${url}/pdf/${r}`
            let newContent = fileContent.replace(bookPdfUrlTag, pdfUrl)
            fs.writeFile(file, newContent, 'UTF8', (err) => {
              return err ? cb(err) : cb(null, file)
            })
          } else {
            try {
              let bookJson = JSON.parse(fileContent)
              pluginVersionsOptions.gitbookConfigURL = bookJson.versions.gitbookConfigURL.replace(bookUrl, url)
              pluginVersionsOptions.options.push({
                value: `/${r}/`,
                text: release
              })
              bookJson.versions = pluginVersionsOptions
              console.log('askljdfalsdhf', bookJson)
              return cb()
            } catch (e) {
              return cb(e)
            }
          }
        })

        async.waterfall(funcs, (err, res) => {
          err ? reject(err) : resolve()
        })
      })
    }

    return new Promise((resolve, reject) => {
      let options = {
        cwd: path.resolve(tempDir),
        absolute: true
      }
      let ps = []
      glob('**/book.json', options, (err, files) => {
        reject(err)
        files.forEach((file) => {
          console.log(file)
          ps.push(_compileBookJson(file))
        })
        Promise.all(ps).then(resolve).catch(reject)
      })
    })
  }

  function _gitbookInstall () {
    return new Promise((resolve, reject) => {
      let args = ['install']
      let options = {
        cwd: path.resolve(tempDir)
      }
      let gb = spawnAsync('gitbook', args, options)
      gb.on('error', reject)
      gb.stdout.on('data', (data) => {
        console.log(data.toString())
      })
      gb.on('close', (code) => {
        console.log(`Gitbook install exited with code ${code}`)
        return code !== 0 ? reject(new Error(`Gitbook install had errors`)) : resolve()
      })
    })
  }

  function _gitbookSite () {
    return new Promise((resolve, reject) => {
      let dest = path.join('../', siteDir, r)
      let args = ['build', '.', `${dest}`]
      let options = {
        cwd: path.resolve(tempDir)
      }
      let gb = spawnAsync('gitbook', args, options)
      gb.on('error', reject)
      gb.stdout.on('data', (data) => {
        console.log(data.toString())
      })
      gb.on('close', (code) => {
        console.log(`Gitbook build exited with code ${code}`)
        return code !== 0 ? reject(new Error(`Gitbook build had errors`)) : resolve()
      })
    })
  }

  function _gitbookPdf () {
    return new Promise((resolve, reject) => {
      let dest = path.join('../', siteDir, 'pdf', r)
      let args = ['pdf', '.', `${dest}`]
      let options = {
        cwd: path.resolve(tempDir)
      }
      let gb = spawnAsync('gitbook', args, options)
      gb.on('error', reject)
      gb.stdout.on('data', (data) => {
        console.log(data.toString())
      })
      gb.on('close', (code) => {
        console.log(`Gitbook build exited with code ${code}`)
        return code !== 0 ? reject(new Error(`Gitbook build had errors`)) : resolve()
      })
    })
  }

  return checkoutRelease(release).then(() => {
    return _compileBookJsonFiles()
  }).then(() => {
    return _gitbookInstall()
  }).then(() => {
    return _gitbookSite()
  })
}

function buildBooks (releases) {
  let p = Promise.resolve()
  releases.forEach((release, index, array) => {
    p = p.then(() => {
      return buildBook(release)
    })
  })
  return p
}

function cleanUpSiteData () {
  try {
    let cmd = `rm -rf ${path.join(__dirname, siteDir)}`
    exec(cmd)
  } catch (e) {
    if (e.code !== 'ENOENT') throw e
  }
}

function cleanUpRepoData () {
  try {
    let cmd = `rm -rf ${path.join(__dirname, tempDir)}`
    exec(cmd)
  } catch (e) {
    if (e.code !== 'ENOENT') throw e
  }
}

buildSite().then((result) => {
  cleanUpRepoData()
}).catch((err) => {
  console.error(err)
  cleanUpRepoData()
})
