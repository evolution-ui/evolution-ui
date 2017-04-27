//Part 1 - incorporate plugins

//foundational plugins
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

// other plugins/utilities that cannot be loaded using `gulp-load-plugins`
var gulpUtil = require('gulp-util');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');
var child = require('child_process');
var flatten = require('gulp-flatten');
var frontMatter = require("gulp-front-matter");
var insert = require('gulp-insert');


var prepend = '<!doctype html><html class="no-js" lang="en-us"><head><!-- THIS IS THE COMPONENT TEMPLATE FILE; DO NOT OVERWRITE ITS CONTENT! IT SERVES YOU FOR THE DEVELOPMENT PURPOSE COPY THE CONTENT OF THIS FILE INTO A NEW FILE NEWLY CREATED FILE SHOULD HAVE THE NAME OF YOUR COMPONENT ADD MINIMUM HTML REQUIRED BY YOUR COMPONENT TO WORK EDIT SECTIONS BETWEEN CURLY BRACES APPROPRIATELY DO NOT CHANGE LINKS TO main.css AND main.js FILES AFTER YOU CREATE COMPONENT FILE, REMOVE THIS WHOLE COMMENT SECTION --><meta charset="utf-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><meta name="author" content="{{YOUR NAME HERE}}"><title>{{NAME OF YOUR COMPONENT}}</title><meta name="description" content="{{DESCRIBE THIS PAGE HERE}}"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400,700" rel="stylesheet"><link href="../../styles/main.css" rel="stylesheet"></head><body>';

var append = '<script type="text/javascript" src="../../scripts/app.js"></script></body></html>';



//paths to source files
var paths = {
  styles: [
    'src/gulpTest/*.scss'
  ],
  scripts: [
    'src/gulpTest/*.js'
  ],
  html: [
    "./*.html"
  ]
};


//Part 2 - create and configure tasks

//individual tasks

gulp.task('clean:dist', function () {
  return del.sync('dist');
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task('deploy', function () {
  return gulp.src("dist/**/*")
    .pipe(plugins.ghPages());
});

// Test task runner - should not be used for prod
gulp.task('uglify-js', function () {
  return gulp.src("src/gulpTest/*.js")
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/gulpTest/app.js'));
});

// Test task runner - should not be used for prod
gulp.task("sass", function () {
  return gulp.src('src/gulpTest/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('dist/gulpTest/'))
    .pipe(plugins.browserSync.stream());
});

gulp.task('jekyll', function () {
     require('child_process')
        .spawn('jekyll', ['serve','-w', "-incremental"], {stdio: 'inherit', cwd: './docs/' });
});

gulp.task("copy:html", function () {
  gulp.src(paths.html)
    .pipe(gulp.dest("dist/gulpTest/"));
});

gulp.task('lint', function () {
  return gulp.src(paths.scripts)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError());
});

//composite tasks
gulp.task('babel-transpile', ['lint'], function () {
  return gulp.src(paths.scripts)
    .pipe(plugins.babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('src/gulpTest/transpiled'));
});

gulp.task("scripts", ['babel-transpile'], function () {
  return gulp.src('src/gulpTest/transpiled/*.js')
    .pipe(plugins.concat("app.js"))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/gulpTest/'))
    .on('end', function () {
      gulpUtil.log('Scripts built');
    });
});

gulp.task('styles', function () {
  return gulp.src(paths.styles)
    .pipe(plugins.sass({style: 'compressed'}))
    .pipe(plugins.autoprefixer('last 3 versions'))
    .pipe(plugins.concat('app.css'))
    .pipe(plugins.cssmin())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/gulpTest/'))
    .on('end', function () {
      gulpUtil.log('Styles built');
    });
});

gulp.task('images', function () {
  gulp.src(['src/gulpTest/*.jpeg', 'src/gulpTest/*.jpg'])
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('dist/gulpTest'))
    .on('end', function () {
      gulpUtil.log('Images processed');
    });
});

//try to inject html from src/components into matching files in docs/components
gulp.task("frontMatterTest", function() {
  gulp.src("./docs/_components/*.html")
  .pipe(frontMatter({ // optional configuration
        property: 'frontMatter', // property added to file object
                                 // also works with deep property selectors
                                 // e.g., 'data.foo.bar'
        remove: true // should we remove front-matter header?
      }))
  .pipe(gulp.dest("./docs/component_test/"));
});

gulp.task("htmlWrapper", function() {
  gulp.src("./docs/component_test/*.html")
  .pipe(insert.append(append))
  .pipe(insert.prepend(prepend))
  .pipe(gulp.dest("./docs/component_test/htmlWrapped/"));
});

//master build task
gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ["scripts", "styles", "images"],
    callback
  );
});


//Part 3 - watch task
//watch scripts and styles for changes and process
gulp.task('watch', ['browserSync', "styles", "scripts"], function () {
  gulp.watch(paths.styles, ['styles', browserSync.reload]);
  gulp.watch(paths.html, browserSync.reload);
  gulp.watch(paths.scripts, ['scripts', browserSync.reload]);
});


//Part 4 - default task
//default task
gulp.task('default', ['watch']);
