'use strict';

var gulp = require('gulp');
var bsfy = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webserver = require( 'gulp-webserver' );

gulp.task('compile-js', function () {
  return bsfy('./src/main.js', {debug:true})
    .transform(babelify, {
      presets: ['es2015'],
      plugins: ['transform-class-properties']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
  return gulp.watch('./src/*.js', ['compile-js']);
});

gulp.task('serve', function () {
  return gulp.src('./')
    .pipe(webserver({
      proxies:[{
        source: '/api',
        target: 'https://api.forecast.io/forecast/060cce0e4778aaf8edb0b4b68b80d61c' 
      }]
    }))
})

gulp.task('default', ['compile-js']);