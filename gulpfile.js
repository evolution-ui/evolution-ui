var gulp = require('gulp');
var uglify = require('gulp-uglify');



gulp.task('default', function () {
  console.log('gulp has run!');
});


gulp.task('uglify-js', function () {
  return gulp.src("./src/gulpTest/*.js")
  .pipe(uglify())
  .pipe(gulp.dest('./dist/gulpTest/app.js'));
});


