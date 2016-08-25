const source = require('vinyl-source-stream');
const browserify = require('browserify');
const babelify = require('babelify');

gulp.task('autotron-browserify', () => {
  return browserify(autotronPaths.jsSrc, {
    transform: [babelify]
  })
    .bundle()
    .pipe(source(autotronPaths.compiledJsFileName))
    .pipe(gulp.dest(autotronPaths.jsDist))
});
