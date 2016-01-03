//watch
var gulp   = require('gulp'),
    debug = require('gulp-debug'),
    browsersync  = require('browser-sync'),
    runSequence = require('run-sequence'),
    //config = require('../../config').watch;
    config = require('../../config').watch;

gulp.task('sass-watch', ['styles'], browsersync.reload);


gulp.task('watch', ['browsersync'], function() {

    gulp.watch(config.jade, function() { 
        //runSequence('jade', ['static-page-inject'], 'static-assets', browsersync.reload);
        runSequence('jade', browsersync.reload);
    });

    gulp.watch(config.scripts, function() {
        //runSequence('scripts', ['static-page-inject'], 'static-assets', browsersync.reload);
        runSequence('scripts', browsersync.reload);
    });

    gulp.watch(config.sass,    ['sass-watch']);
    gulp.watch(config.images,  ['images']);

});