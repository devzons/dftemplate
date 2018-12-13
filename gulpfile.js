const gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoPrefixer = require('autoprefixer'),
  cssVars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  plumber = require('gulp-plumber'),
  mixins = require('postcss-mixins'),
  browserSync = require('browser-sync').create();

require('./gulp/tasks/sprites.js');

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssVars, nested, autoPrefixer]))
    .pipe(plumber())
    .pipe(gulp.dest('./app/temp/styles'))
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  gulp.watch('./app/index.html').on('change', browserSync.reload);
  gulp.watch('./app/assets/styles/**/*.css').on('change', gulp.series('styles'));
});
