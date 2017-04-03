// Load plugins
var gulp = require('gulp'),
  plugins = require('gulp-load-plugins')(),
  bs = require('browser-sync'),
  reload = bs.reload,
  del = require('del'),
  minimist = require('minimist'),
  webpack = require('webpack'),
  shell = require('gulp-shell')

var knownOptions = {
  string: ['env', 'bump'],
  default: {
    env: process.env.NODE_ENV || 'dev',
    bump: 'patch'
  }
}

var options = minimist(process.argv.slice(2), knownOptions),
  development = options.env === 'dev'

var browsers = development ? 'last 1 chrome version' : ['>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 9'],
  outputPath = development ? 'public' : 'dist'

gulp.task('styles', function () {
  return plugins.rubySass('assets/stylesheets/main.scss', {
    style: 'expanded',
    sourcemap: true,
    emitCompileError: !development,
    stopOnError: !development
  })
    .pipe(plugins.autoprefixer(browsers))
    .pipe(plugins.if(!development, plugins.cssnano()))
    .pipe(plugins.if(development, plugins.sourcemaps.write()))
    .pipe(gulp.dest(outputPath + '/styles'))
    .pipe(gulp.dest('docs/assets/evolution-ui/styles'))
    .pipe(plugins.notify({message: 'Styles task complete'}))
})

gulp.task('eslint', function () {
  return gulp.src(['assets/scripts/evolution/**/*.js', '!node_modules/**'])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError())
})

gulp.task('scripts', function () {
  return gulp.src('assets/scripts/app.js')
    .pipe(plugins.webpack(require('./webpack.config.js')(options.env), webpack))
    .pipe(gulp.dest(outputPath + '/scripts'))
    .pipe(gulp.dest('docs/assets/evolution-ui/scripts'))
})

gulp.task('html', function () {
  return gulp.src('index.html')
    .pipe(plugins.if(!development, plugins.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(outputPath))
})

gulp.task('html-temp', function () {
  return gulp.src('./assets/html/**/*.html')
    .pipe(plugins.if(!development, plugins.htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(outputPath + '/temp'))
})

gulp.task('audio', function () {
  return gulp.src('./assets/audio/**/*')
    .pipe(gulp.dest(outputPath + '/audio'))
})

gulp.task('images', function () {
  return gulp.src('./assets/images/**/*')
    .pipe(plugins.if(!development, plugins.cache(plugins.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))))
    .pipe(gulp.dest(outputPath + '/images'))
})

gulp.task('clean', function () {
  return del(['dist/', 'public/', 'docs/assets/evolution-ui/'])
})

gulp.task('jekyll', shell.task([
  'jekyll build --source=docs/ --destination=docs/_site --config=docs/_config.yml,docs/_config.prod.yml'
]))

gulp.task('jekyll-serve', shell.task([
  'jekyll serve --source=docs/ --destination=docs/_site'
]))

// gulp.task('test', function () {
//   return gulp.src('test/**/*.test.js')
//     .pipe(plugins.tape({
//         bail: true,
//         reporter: tapdiff()
//       })
//     )
// })

function devInit (cb) {
  plugins.sequence('clean', ['images', 'audio', 'scripts'], ['html', 'html-temp', 'styles'], cb)
}

function buildInit (cb) {
  plugins.sequence('clean', 'eslint', ['images', 'audio', 'scripts'], ['html', 'html-temp', 'styles'], cb)
}

function docsInit(cb) {
  plugins.sequence('clean', 'styles', 'scripts', 'jekyll-serve', cb)
}

function docsBuild(cb) {
  plugins.sequence('clean', 'styles', 'scripts', 'jekyll', cb)
}

gulp.task('dev-init', devInit)

gulp.task('build-init', buildInit)

gulp.task('start-docs', docsInit)

gulp.task('build-docs', docsBuild)

function devel () {

  gulp.watch('index.html', ['html'])
  gulp.watch('./assets/html/**/*.html', ['html-temp'])
  gulp.watch('./assets/stylesheets/**/*.scss', ['styles'])
  gulp.watch('./assets/scripts/**/*.js', ['scripts'])
  gulp.watch('./assets/images/**/*', ['images'])
  gulp.watch('./assets/audio/**/*', ['audio'])

  bs({
    server: 'public',
    open: false,
    // browser: 'google-chrome-stable'
  })

  gulp.watch(['public/**/*.html', 'public/styles/**/*.css', 'public/scripts/**/*.js', 'public/images/**/*'], reload)
}

gulp.task('dev', ['dev-init'], devel)

gulp.task('rev', ['build-init'], function () {
  return gulp.src(['dist/**/*', '!dist/**/*.html'])
    .pipe(plugins.rev())
    .pipe(plugins.revDeleteOriginal())
    .pipe(gulp.dest('dist'))
    .pipe(plugins.rev.manifest())
    .pipe(gulp.dest('dist'))
})

gulp.task('rev-replace', ['rev'], function () {
  var manifest = gulp.src('./dist/rev-manifest.json')

  return gulp.src('dist/**/*+(html|css|js)')
    .pipe(plugins.revReplace({manifest: manifest}))
    .pipe(gulp.dest('dist'))
})

gulp.task('build', ['rev-replace'], function () {
  bs({
    server: 'dist',
    open: false,
    // browser: 'google-chrome-stable'
  })
})

gulp.task('sassdoc', function () {
  bs({
    server: 'assets/sassdoc',
    // browser: 'google-chrome-stable'
  })
})

gulp.task('deploy', ['rev-replace'], function () {
  gulp.src('./package.json')
    .pipe(plugins.bump({type: options.bump}))
    .pipe(gulp.dest('./'))

  // return gulp.src(['./dist/**/*', '!./dist/rev-manifest.json'])
  //   .pipe(plugins.ghPages())
})

gulp.task('deploy-docs', ['build-docs'], function () {
  return gulp.src('./docs/_site/**/*')
    .pipe(plugins.ghPages())
})

gulp.task('default', devel)
