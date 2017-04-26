//Part 1 - incorporate plugins

//foundational plugins
var gulp = require('gulp');
var gulpUtil = require('gulp-util');

//script plugins
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');
var babel = require('gulp-babel');

//style plugins
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');

//other general plugins
var concat = require('gulp-concat');
var ghPages = require('gulp-gh-pages');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
var child = require('child_process');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');


//paths to source files
var paths = {
    styles: [
        './src/gulpTest/*.scss'
    ],
    scripts: [
        './src/gulpTest/*.js'
    ],
    html: [
        "./*.html"
    ]
};




//Part 2 - create and configure tasks


//individual tasks

gulp.task('clean:dist', function() {
  return del.sync('./dist/gulpTest/*');
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('eslint', function () {
  return gulp.src(['src/gulpTest/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('deploy', function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy());
});

gulp.task('uglify-js', function () {
    return gulp.src("./src/gulpTest/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('./dist/gulpTest/app.js'));
});

gulp.task("sass", function() {
    return gulp.src('./src/gulpTest/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/gulpTest/'))
        .pipe(browserSync.stream());
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

gulp.task("copyHTML", function() {
   gulp.src(paths.html)
  .pipe(gulp.dest("./dist/gulpTest/"));
});


//composite tasks

gulp.task('babel-transpile', ['eslint'],  function () {
  return gulp.src('src/gulpTest/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('src/gulpTest/transpiled'));
});

gulp.task("scripts", ['babel-transpile'], function() {
    return gulp.src('src/gulpTest/transpiled/*.js')
        .pipe(concat("app.js"))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/gulpTest/'))
        .on('end', function(){ gulpUtil.log('Scripts built'); });
});

gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(sass({ style: 'compressed' }))
        .pipe(autoprefixer('last 3 versions'))
        .pipe(concat('app.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/gulpTest/'))
        .on('end', function(){ gulpUtil.log('Styles built'); });
});

gulp.task('images', function() {
    gulp.src(['src/gulpTest/*.jpeg', 'src/gulpTest/*.jpg'])
        .pipe(imagemin())
        .pipe(gulp.dest('dist/gulpTest'))
        .on('end', function(){ gulpUtil.log('Images processed'); });
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
gulp.task('watch', ['browserSync', "styles", "scripts"], function() {
    gulp.watch(paths.styles, ['styles', browserSync.reload]);
    gulp.watch(paths.html, browserSync.reload);
    gulp.watch(paths.scripts, ['scripts', browserSync.reload]);
});




//Part 4 - default task
//default task
gulp.task('default', function () {
  console.log('gulp has run!');
});
