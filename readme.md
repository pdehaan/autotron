# AutoTron

A hackable modular task management framework for [gulp.js](http://gulpjs.com/).

[![NPM](https://nodei.co/npm/autotron.png?downloads=true&downloadRank=true)](https://nodei.co/npm/autotron/)

## Features

AutoTron ships with tasks for processing/minifying Less and Sass, using Browserify with Babelify/Uglify on .js files, building static html pages from Handlebars templates, creating a sitemap.xml file and launching a simple webserver with auto-reload.

You can add/change/configure any task you choose and use the API to keep your gulpfile streamlined. To contribute a task to the core package, see the customizing/contributing section below.

## Usage

Install gulp, autotron and babel-preset-es2015 packages via npm:

```sh
npm install --save-dev gulp autotron babel-preset-es2015
```

Copy the example gulp and .babelrc files included in the module to your project root or just copy/paste the contents to suit your needs:

```sh
mv ./node_modules/autotron/example-gulpfile.js /your/project/root/gulpfile.js
mv ./node_modules/autotron/.babelrc /your/project/root/.babelrc
```

## Customizing/Contributing

Add your own tasks to the ```/dist``` folder to access the API. To request a permanent addition please fork the project on Github and add tasks to the ```/src``` folder and paths to ```/config.json```. 'gulp' is included as a project global so no need to require it in the task file.

## License

[MIT](https://opensource.org/licenses/MIT) - :heart: - Contributions welcome.
