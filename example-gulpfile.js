const gulp = require('gulp');
const autotron = require('autotron');

gulp.task('less', ['autotron-less']);
gulp.task('sass', ['autotron-sass']);
gulp.task('browserify', ['autotron-browserify']);
gulp.task('compress-js', ['autotron-compress-js']);
gulp.task('build-static-pages', ['autotron-build-static-pages']);
gulp.task('webserver', ['autotron-webserver']);
gulp.task('sitemap', ['autotron-sitemap']);
gulp.task('revise', ['autotron-revise']);
gulp.task('replace', ['autotron-revreplace']);
