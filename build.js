'use strict'

const ecadoc = require('./ecadoc.json')
const pack = require('./package.json')
const execSync = require('child_process').execSync
const mkdirp = require('mkdirp')
const chalk = require('chalk')
const fs = require('fs')

console.log(chalk.green('Starting artifacts building...'))

try {
  let bookFileName = ecadoc.id
  let bookVersion = pack.version
  let publicPath = `artifacts/public/${bookVersion}`
  let downloadPath = `artifacts/download/${bookVersion}`
  mkdirp.sync(publicPath)
  mkdirp.sync(downloadPath)

  console.log(chalk.blue('Building gitbook static site'))
  execSync(`gitbook build ./ ${publicPath}`, {
    stdio: [0, 1, 2]
  })

  console.log(chalk.blue('Building book pdf'))
  execSync(`gitbook pdf ./ ${downloadPath}/${bookFileName}.pdf`, {
    stdio: [0, 1, 2]
  })

  console.log(chalk.blue('Copying ecadoc.json, SHORT.md and README.md files in artifacts'))
  fs.writeFileSync('artifacts/ecadoc.json', fs.readFileSync('ecadoc.json', 'UTF8'), 'UTF8')
  fs.writeFileSync('artifacts/SHORT.md', fs.readFileSync('SHORT.md', 'UTF8'), 'UTF8')
  fs.writeFileSync('artifacts/README.md', fs.readFileSync('README.md', 'UTF8'), 'UTF8')

  console.log(chalk.green('Done!'))
} catch (e) {
  console.error(chalk.red('An error occured', e))
}
