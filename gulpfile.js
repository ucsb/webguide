var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['minify-js']);

gulp.task('minify-js', function () {

  gulp.src(['./scripts/*.js', '!./scripts/*.min.js'])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./scripts/'));

});
