var childProcess = require('child_process');
var del = require('del');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', ['minify-js', 'jekyll']);

gulp.task('minify-js', function () {

  gulp.src(['./scripts/*.js', '!./scripts/*.min.js'])
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./scripts/'));

});

gulp.task('jekyll', function() {

  var jekyll = childProcess.exec('bundle exec jekyll serve');
  jekyll.stdout.on('data', function(data) {
    console.log(data);
  });

});
