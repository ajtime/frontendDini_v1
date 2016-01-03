var gulp   = require('gulp');
var config = require('../../config').copyfonts.development;
var debug = require('gulp-debug');

/**
 * Copy fonts to folder
 */

gulp.task('copy:fonts', function() {
  return gulp.src(config.src)
    //.pipe(debug({title: 'unicorn:'}))
    .pipe(gulp.dest(config.dest));
});