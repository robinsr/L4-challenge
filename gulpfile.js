'use strict';

var gulp = require('gulp');
var bsfy = require('browserify');
var babelify = require('babelify');
var webserver = require( 'gulp-webserver' );
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var less = require('gulp-less');

gulp.task('compile-js', function () {
  return bsfy('./src/main.js', {debug:false})
    .transform(babelify, {
      presets: ['es2015']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task('compile-less', function () {
  return gulp.src('./src/main.less')
    .pipe(less({
      compress: true
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('default', ['compile-js', 'compile-less']);

gulp.task('watch', function () {
  return gulp.watch('./src/*.{js,less}', ['default']);
});

gulp.task('serve', function () {
  return gulp.src('./')
    .pipe(webserver({
      proxies:[{
        source: '/api',
        target: 'https://api.forecast.io/forecast/060cce0e4778aaf8edb0b4b68b80d61c' 
      }]
    }));
});
