'use strict'

const gulp = require('gulp')
const mkdirp = require('mkdirp')
const sequence = require('gulp-sequence')
const shell = require('gulp-shell')

mkdirp.sync('./book/dist/images')
mkdirp.sync('./assets/images')

gulp.task('optimize:jpeg', function () {
  return gulp.src(['./assets/images/*.jpeg', './assets/images/*.jpg'])
              .pipe(shell([`jpegoptim -o --size=15% "<%= file.path %>" -d ./book/dist/images`]))
})

gulp.task('optimize:png', function () {
  return gulp.src(['assets/images/*.png'])
              .pipe(gulp.dest('./book/dist/images'))
              .pipe(shell(['optipng -o7 "<%= file.path %>"']))
})

gulp.task('optimize', sequence('optimize:png', 'optimize:jpeg'))
