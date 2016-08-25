const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('autotron-compress-js', () => {
  pump([
        gulp.src(autotronPaths.compressedJsSrc),
        uglify(),
        gulp.dest(autotronPaths.compressedJsDist)
    ],
  );
});
