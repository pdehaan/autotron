const revReplace = require("gulp-rev-replace");

gulp.task("autotron-revreplace", ["autotron-revise"], function(){
  var manifest = gulp.src("./rev-manifest.json");
 
  return gulp.src("./dist/**/*.html")
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(autotronPaths.revisionRoot));
});
