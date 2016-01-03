var gulp            = require('gulp');
//var imageopt        = require('gulp-image-optimization');
var changed         = require('gulp-changed');
var config          = require('../../config').images;

// optimize images
gulp.task('images', function() {
    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest));
});