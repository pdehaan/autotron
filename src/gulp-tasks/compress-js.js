const uglify = require('gulp-uglify');
const pump = require('pump');
const fingerprint = Math.random().toString(36).substring(9);
const rename = require('gulp-rename');

gulp.task('autotron-compress-js', (cb) => {
  pump([
        gulp.src(autotronPaths.compressedJsSrc),
        uglify(),
        rename({
          basename: "main-bundle",
          suffix: "." + fingerprint
        }),
        gulp.dest(autotronPaths.compressedJsDist)
    ],
    cb
  );
});
