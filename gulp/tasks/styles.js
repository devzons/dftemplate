const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoPrefixer = require('autoprefixer'),
  cssVars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  plumber = require('gulp-plumber'),
  mixins = require('postcss-mixins');

// gulp style
gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, nested, autoPrefixer]))
    .pipe(plumber())
    .pipe(gulp.dest('./app/temp/styles'))
    .pipe(browserSync.stream());
});