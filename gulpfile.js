var gulp = require('gulp'),
    react = require('gulp-react');


gulp.task('default', function(){
  return gulp.src('template.jsx')
             .pipe(react())
             .pipe(gulp.dest('dist'));
});