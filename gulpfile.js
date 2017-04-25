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

//other general plugins
var concat = require('gulp-concat');
var ghPages = require('gulp-gh-pages');
var imagemin = require('gulp-imagemin');



//paths to source files
var paths = {
    styles: [
        './src/gulpTest/*.scss'
    ],
    scripts: [
        './src/gulpTest/*.js'
    ]
};




//Part 2 - create and configure tasks
//tasks

gulp.task('eslint', function () {
  return gulp.src(['src/gulpTest/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
});

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
        .pipe(gulp.dest('./dist/gulpTest/'))
        .on('end', function(){ gulpUtil.log('Scripts built'); });
});


gulp.task('styles', function() {
    return gulp.src(paths.styles)
        .pipe(sass({ style: 'compressed' }))
        .pipe(concat('app.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/gulpTest/'))
        .on('end', function(){ gulpUtil.log('Styles built'); });
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
        .pipe(gulp.dest('./dist/gulpTest/'));
});


gulp.task('images', function() {
    gulp.src(['src/gulpTest/*.jpeg', 'src/gulpTest/*.jpg'])
        .pipe(imagemin())
        .pipe(gulp.dest('dist/gulpTest'))
        .on('end', function(){ gulpUtil.log('Images processed'); });
});


//master minify task
gulp.task('process-all', ["scripts", "styles", "images"]);




//Part 3 - watch task
//watch scripts and styles for changes and process
gulp.task('watch', function() {
    gulp.watch(paths.styles, ['styles']);
    gulp.watch(paths.scripts.js, ['scripts']);
});




//Part 4 - default task
//default task
gulp.task('default', function () {
  console.log('gulp has run!');
});
