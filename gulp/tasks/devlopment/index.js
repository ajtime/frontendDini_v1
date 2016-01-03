//index
var gulp        = require('gulp'),
    debug = require('gulp-debug'),
    runSequence = require('run-sequence');

gulp.task('index', function(callback) {
  runSequence('delete', 'jade',
  [
    'scripts',
    'styles',
    'copy:fonts',
    'images'
  ],
  callback);
});
