var gulp = require('gulp'),
    react = require('gulp-react');


gulp.task('default', function(){
  return gulp.src('app.jsx')
             .pipe(react())
             .pipe(gulp.dest('dist'));
});