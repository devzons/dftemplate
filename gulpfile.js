const gulp = require('gulp'),
  watch = require('gulp-watch'),
  postcss = require('gulp-postcss'),
  autoPrefixer = require('autoprefixer'),
  cssVars = require('postcss-simple-vars'),
  nested = require('postcss-nested'),
  cssImport = require('postcss-import'),
  browserSync = require('browser-sync').create();

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, cssVars, nested, autoPrefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
    .pipe(browserSync.stream());
});

gulp.task('watch', () => {
  browserSync.init({
    notify: false,
    server: "app"
  });

  gulp.watch('./app/index.html').on('change', browserSync.reload);
  gulp.watch('./app/assets/styles/**/*.css').on('change', gulp.series('styles'));
});
