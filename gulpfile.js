'use strict'

const gulp = require('gulp')
const watch = require('gulp-watch')
const shell = require('gulp-shell')

gulp.task('images', function () {
  return watch('images')
        .pipe(shell(['npm run optimize:images']))
})

gulp.task('serve', shell.task('gitbook serve'))

gulp.task('default', ['serve', 'images'])
