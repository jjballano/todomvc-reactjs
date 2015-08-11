var gulp = require('gulp');
var react = require('gulp-react');
var install = require("gulp-install");
var del = require('del');
var browserify = require('gulp-browserify');

gulp.task('clean', function(done) {
  del(['dist'], done);
});

gulp.task('copy', function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('compile', function () {
    gulp.src(['./src/**/*.jsx'], {read: false})
      .pipe(browserify({
        debug: true,
        transform: ['reactify'],
        extensions: ['.jsx']
      }))
      .on('prebundle', function(bundler){
        bundler.require('react');
      })
      .pipe(react())
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy', 'compile']);