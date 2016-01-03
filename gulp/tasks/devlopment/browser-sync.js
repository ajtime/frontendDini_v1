var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    config      = require('../../config').browsersync.development;

gulp.task('browsersync', ['index'], function() {
    browserSync(config);

});