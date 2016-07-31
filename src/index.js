const path = require('path');
const requireDir = require('require-dir');

global.gulp = require('gulp');
global.autotronPaths = require(path.resolve( __dirname, "../config.json" ) );

global.autotronLoadTasks = () => {
  return requireDir('./gulp-tasks');
}

module.exports = autotronLoadTasks();
