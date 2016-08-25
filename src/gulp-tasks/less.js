const argv = require('yargs').argv;
const cleancss = require('gulp-cleancss');
const gulpif = require('gulp-if');
const ifElse = require('gulp-if-else');
const less = require('gulp-less');
const pump = require('pump');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('autotron-less', () => {
    pump([
        gulp.src(autotronPaths.lessSrc),
        sourcemaps.init(),
        less(),
        ifElse(argv.production === true, () => {
            return cleancss();
          }, () => {
            return sourcemaps.write('.');
          }),
        gulp.dest(autotronPaths.lessDist)
      ]
    );
});
