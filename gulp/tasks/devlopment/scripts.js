var watchify = require('watchify');
var browserify = require('browserify');
var bs  = require('browser-sync');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var bundleLogger = require('../../util/bundleLogger');
var handleErrors = require('../../util/handleErrors');
var uglify = require('gulp-uglify');
//var babelify = require('babelify');
var bfvars  = require('../../config').browserifyconfig;


var bfOpts = assign({}, watchify.args, bfvars);
//var bfOpts = assign({}, watchify.args, config);
var bf = watchify(browserify(bfOpts)); 
var bundleQueue = bfvars.length;

gulp.task('scripts', bundle); // this task for browsersync active developing
bf.on('update', bundle); // on any dep update, runs the bundler
bf.on('log', gutil.log); // output build logs to terminal


function bundle(callback) {
    
    bundleLogger.start(bfvars.entries);
    return bf.bundle()

        .pipe(source(bfvars.outputName))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // use sourcemaps to find correct module locations
        .pipe(sourcemaps.init({loadMaps: true})) // load maps file from browserify file
        .pipe(sourcemaps.write('./')) // writes .map file
        // output to dist folder
        .pipe(gulp.dest(bfvars.dest))

        .pipe(gulpif(bs.active, bs.reload({ stream: true })));
}

gulp.task('scripts:sitefinity', function () {
  
    var b = browserify(bfvars);

    return b.bundle()
        .pipe(source(bfvars.outputName))
        .pipe(buffer())
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(gulp.dest(bfvars.dest));
});