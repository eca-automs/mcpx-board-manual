'use strict'

const gulp = require('gulp')
const sequence = require('gulp-sequence')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const pack = require('./package.json')
const exec = util.promisify(require('child_process').exec)
const mkdirp = util.promisify(require('mkdirp'))
const ecadoc = require('./ecadoc/ecadoc.json')
require('./optimize')

let bookFileName = ecadoc.id
let bookVersion = pack.version
let publicPath = `./ecadoc/public/${bookVersion}`
let downloadPath = `./ecadoc/download/${bookVersion}`

gulp.task('pre:build', async () => {
  await exec('gitbook install', {cwd: './book'})
  await mkdirp(publicPath)
  await mkdirp(downloadPath)
})

gulp.task('book', async () => {
  console.log(chalk.blue('Building gitbook static site'))
  let book = path.join(process.cwd(), `${publicPath}`)
  await exec(`gitbook build ./ ${book}`, { cwd: './book' })
})

gulp.task('pdf', async () => {
  console.log(chalk.blue('Building book pdf'))
  let pdf = path.join(process.cwd(), downloadPath, `${bookFileName}.pdf`)
  await exec(`gitbook pdf ./ ${pdf}`, { cwd: './book' })
})

gulp.task('build', ['book', 'pdf'])
gulp.task('default', sequence('optimize', 'pre:build', 'build'))
