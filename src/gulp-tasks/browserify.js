const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify = require('babelify');

gulp.task('autotron-browserify', () => {
  return browserify(autotronPaths.jsSrc, {
    transform: [babelify]
  })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(autotronPaths.jsDist))
});
