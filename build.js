'use strict'

const gulp = require('gulp')
const sequence = require('gulp-sequence')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const pack = require('./package.json')
const exec = util.promisify(require('child_process').exec)
const fs = require('fs')
const writeFile = util.promisify(fs.writeFile)
const mkdirp = util.promisify(require('mkdirp'))
const ecadoc = require('./ecadoc/ecadoc.json')
const gulpfile = require('./optimize')

let bookFileName = ecadoc.id
let bookVersion = pack.version
let publicPath = `./artifacts/public/${bookVersion}`
let downloadPath = `./artifacts/download/${bookVersion}`

gulp.task('pre:build', async () => {
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

gulp.task('ecadoc', async () => {
  console.log(chalk.blue('Copying ecadoc.json, SHORT.md and README.md files in artifacts'))
  await writeFile('artifacts/ecadoc.json', fs.readFileSync('./ecadoc/ecadoc.json', 'UTF8'), 'UTF8')
  await writeFile('artifacts/SHORT.md', fs.readFileSync('./ecadoc/SHORT.md', 'UTF8'), 'UTF8')
  await writeFile('artifacts/README.md', fs.readFileSync('./ecadoc/README.md', 'UTF8'), 'UTF8')
})

gulp.task('build', ['book', 'pdf', 'ecadoc'])
gulp.task('default', sequence('optimize', 'pre:build', 'build'))
