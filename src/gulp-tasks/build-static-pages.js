const del = require('del');
const fs = require('fs');
const changed = require('gulp-changed');
const path = require('path');
const rename = require('gulp-rename');
const tap = require('gulp-tap');
const handlebars = require('handlebars');
const vinylPaths = require('vinyl-paths');

gulp.task('autotron-build-static-pages', () => {
  return gulp.src(autotronPaths.staticPagesSrc + '/*.hbs')
  .pipe(tap(function (file) {
    let partialsDir = autotronPaths.staticPartialsSrc;
    let filenames = fs.readdirSync(partialsDir);
    filenames.forEach(function (filename) {
      let matches = /^([^.]+).hbs$/.exec(filename);
      if (!matches) {
        return;
      }
      let name = matches[1];
      let template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
      handlebars.registerPartial(name, template);
    });
    let template = handlebars.compile(file.contents.toString());
    let data = {
      contents: file.contents.toString()
    };
    let html = template(data);
    file.contents = new Buffer(html, "utf-8");
  }))
  .pipe(rename(function (path) {
    path.extname = ".html";
  })).pipe(gulp.dest(autotronPaths.staticPagesDist));
});
