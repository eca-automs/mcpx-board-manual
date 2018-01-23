'use strict'

const gulp = require('gulp')
const watch = require('gulp-watch')
const shell = require('gulp-shell')
const sequence = require('gulp-sequence')
const mkdirp = require('mkdirp')
const gulpfile = require('./optimize')
const path = require('path')
const chalk = require('chalk')

gulp.task('watch:png', function () {
  return watch('./assets/images/*.png', {
    read: false
  }, (file) => {
    if (file.event === 'add' || file.event === 'change') {
      let message = file.event === 'add' ? chalk.green(`File ${file.path} added.`) : chalk.yellow(`File ${file.path} changed.`)
      console.log(message)
      gulp.src(file.path)
         .pipe(gulp.dest('./book/dist/images'))
         .pipe(shell([`optipng -o7 "./book/dist/images/${path.basename(file.path)}"`]))
    } else if (file.event === 'unlink') {
      console.log(chalk.red(`File ${file.path} removed.`))
      gulp.src(`./book/dist/images/${path.basename(file.path)}`)
         .pipe(shell([`rm -v "<%= file.path %>"`]))
    }
  })
})

gulp.task('watch:jpeg', function () {
  return watch(['./assets/images/*.jpeg', './assets/images/*.jpg'], {
    read: false
  }, (file) => {
    if (file.event === 'add' || file.event === 'change') {
      let message = file.event === 'add' ? chalk.green(`File ${file.path} added.`) : chalk.yellow(`File ${file.path} changed.`)
      console.log(message)
      gulp.src(file.path)
         .pipe(gulp.dest('./book/dist/images'))
         .pipe(shell([`jpegoptim -o --size=15% "${file.path}" -d "./book/dist/images"`]))
    } else if (file.event === 'unlink') {
      console.log(chalk.red(`File ${file.path} removed.`))
      gulp.src(`./book/dist/images/${path.basename(file.path)}`)
         .pipe(shell([`rm -v "<%= file.path %>"`]))
    }
  })
})

gulp.task('watch', ['watch:png', 'watch:jpeg'])

gulp.task('install', sequence('optimize', shell.task(['gitbook install'], { cwd: './book' })))

gulp.task('serve', sequence('install', shell.task('gitbook serve', { cwd: './book' })))

gulp.task('default', ['serve', 'watch'])
