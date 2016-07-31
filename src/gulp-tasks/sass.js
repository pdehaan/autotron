const argv = require('yargs').argv;
const cleancss = require('gulp-cleancss');
const fingerprint = Math.random().toString(36).substring(9);
const gulpif = require('gulp-if');
const ifElse = require('gulp-if-else');
const pump = require('pump');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('autotron-sass', () => {
    pump([
        gulp.src(autotronPaths.sassSrc),
        sourcemaps.init(),
        sass(),
        ifElse(argv.production === true, () => {
            return cleancss();
          }, () => {
            return sourcemaps.write('.');
          }),
        gulpif(argv.production, rename({
          suffix: "." + fingerprint
        })),
        gulp.dest(autotronPaths.sassDist)
      ]
    );
});
