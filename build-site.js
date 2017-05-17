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
 * ├── latest
 * ├── pdf
 * │   ├── latest
 * │   │   ├── book-name_en.pdf
 * │   │   └── book-name_it.pdf
 * │   ├── v0.0.1
 * │   │   ├── book-name_en.pdf
 * │   │   └── book-name_it.pdf
 * │   └── v0.0.2
 * │       ├── book-name_en.pdf
 * │       └── book-name_it.pdf
 * ├── v0.0.1
 * └── v0.0.2
 * ```
 */

'use strict'

const Nodegit = require('nodegit')
const semver = require('semver')
const fs = require('fs')
const path = require('path')
const tempDir = './temp'
const siteDir = './site'
const exec = require('child_process').execSync

let releases = []
let workingRepo = null

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
    Nodegit.Clone.clone(__dirname, path.resolve(__dirname, 'temp')).then(function (repository) {
      workingRepo = repository
      /**
       * get the tags
       */
      return Nodegit.Tag.list(workingRepo)
    }).then((tags) => {
      /**
       * release tags
       * @type {Array}
       */
      let releases = tags.filter(item => semver.valid(item)).sort((a, b) => {
        let a1 = semver.clean(a)
        let b1 = semver.clean(b)
        return semver.gt(b1, a1)
      }).map((item) => {
        return semver.clean(item)
      })
      return Promise.resolve(releases)
    }).then((releases) => {
      return buildBooks(releases)
    }).then(() => {
      resolve()
    }).catch((err) => {
      reject(err)
    })
  })
}

function buildBooks (releases) {
  console.log(releases)
  return new Promise((resolve, reject) => {
    resolve()
  })
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
