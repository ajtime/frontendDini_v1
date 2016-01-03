//jade
var config = require('../../config').jade;
var gulp        = require('gulp');
var jade        = require('gulp-jade');
var bs = require('browser-sync');
var gulpif = require('gulp-if');
var debug = require('gulp-debug');

//move this to config later
var jadeOpts = {
    'pretty': true//,
    //'locals': database
};

/**
 * Generate html from jade
 */
gulp.task('jade', function(){

    bs.notify('Compiling Jade');
    return gulp.src(config.src)
    //return gulp.src([config.src+'/jade/**/*.jade', '!' + config.src+'/jade/layouts/**/*.jade', '!' + config.src+'/jade/pages/**/*.jade'])
        //.pipe(debug({title: 'inject index:', minimal: false}))
        //.pipe(jade(jadeOpts))
        .pipe(jade(config.jadeOpts))
        .on('error', console.log)
        .pipe(gulp.dest(config.dest))
        .pipe(gulpif(bs.active, bs.reload({ stream: true })));
        //.pipe(bs.reload({stream: true}));
});

