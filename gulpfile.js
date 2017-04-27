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

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gulpUtil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task("copy:html", function () {
  gulp.src(paths.html)
    .pipe(gulp.dest("dist/gulpTest/"));
});

gulp.task('lint', function () {
  return gulp.src(paths.scripts)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError())
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
