const sitemap = require('gulp-sitemap');
 
gulp.task('autotron-sitemap', () => {
  gulp.src(autotronPaths.sitemapSrcDir + '/**/*.html', {
    read: false
  })
  .pipe(sitemap({
    siteUrl: autotronPaths.sitemapUrl
  }))
  .pipe(gulp.dest(autotronPaths.sitemapDistDir));
});
