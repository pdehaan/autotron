const webserver = require('gulp-webserver');

gulp.task('autotron-webserver', () => {
  gulp.src(autotronPaths.webserverRoot)
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
