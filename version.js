'use strict'

const gulp = require('gulp')
const je = require('gulp-json-editor')
const pack = require('./package.json')

gulp.task('default', () => {
  gulp.src('./book/book.json')
      .pipe(je({
        variables: {
          version: pack.version
        }
      }))
      .pipe(gulp.dest('./book'))
})
