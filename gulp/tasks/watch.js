const gulp = require('gulp'), 
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

// gulp watch
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