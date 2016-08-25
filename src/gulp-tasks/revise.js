const rev = require("gulp-rev");

gulp.task("autotron-revise", function(){
  return gulp.src(["dist/**/*.css", "dist/**/*.js"])
    .pipe(rev())
    .pipe(gulp.dest(autotronPaths.revisionRoot))
    .pipe(rev.manifest())
    .pipe(gulp.dest("."))
})
