const path = require('path');
const requireDir = require('require-dir');
const appRoot = require('app-root-path');

global.gulp = require('gulp');
global.autotronPaths = require(appRoot + "/autotron.json");

global.autotronLoadTasks = () => {
  return requireDir('./gulp-tasks');
}

module.exports = autotronLoadTasks();
