var childProcess = require('child_process');
var cssmin = require('gulp-cssmin');
var del = require('del');
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('default', ['process-css', 'minify-js', 'jekyll']);

gulp.task('process-css', function() {

  return gulp.src('./style/main.scss')
    .pipe(sass())
    .pipe(postcss([ require('autoprefixer') ]))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./style/'));

});

gulp.task('minify-js', function () {

  gulp.src(['./scripts/*.js', '!./scripts/*.min.js'])
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./scripts/'));

});

gulp.task('jekyll', function() {

  var jekyll = childProcess.exec('bundle exec jekyll serve');
  jekyll.stdout.on('data', function(data) {
    console.log(data);
  });

});
