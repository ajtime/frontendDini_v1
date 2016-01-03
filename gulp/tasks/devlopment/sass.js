//sass
var bs              = require ('browser-sync');
var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var cssmin          = require('gulp-cssmin');
var sass            = require('gulp-sass');
var handleErrors    = require('../../util/handleErrors');
var plumber         = require('gulp-plumber');
var sourcemaps      = require('gulp-sourcemaps');
var gulpFilter      = require('gulp-filter');
var gulpif          = require('gulp-if');
var prefix = require('gulp-autoprefixer');

var config          = require('../../config').sass;

var configTest = {
    src:  'src/sass/**/*.scss',
    dest: 'dist/assets/css',
    options: {
      noCache: true,
      compass: false,
      //bundleExec: true,
      //require: 'susy',
      sourcemap: true,
      sourcemapPath: '../../_assets/sass'
    }
  };

gulp.task('styles', function () {
  
  var filter = gulpFilter(['*.css', '!*.map']);

  bs.notify('Compiling Styles');
  //return gulp.src(config.styles.src)
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(sass(config.options))

    .pipe(prefix('last 3 versions, Firefox ESR'))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    //.on('error', handleErrors)
    .pipe(sourcemaps.write('.', { includeContent: false }))
    .pipe(filter.restore()) // Restore original files
    //.pipe(gulp.dest(config.styles.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(gulpif(bs.active, bs.reload({ stream: true })));

});
