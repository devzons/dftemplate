const gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoPrefixer = require('autoprefixer'),
  cssVars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import');

gulp.task('default', () => {
  console.log("Create gulp task");
});

gulp.task('html', () => {
  console.log("html is running");
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, nested, autoPrefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {
  gulp.watch('./app/index.html').on('change', gulp.series('html'));
  gulp.watch('./app/assets/styles/**/*.css').on('change', gulp.series('styles'));
});