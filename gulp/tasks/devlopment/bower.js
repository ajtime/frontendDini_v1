var mergeStream = require('merge-stream');
var gulp = require('gulp');
var rename = require('gulp-rename');
var config  = require('../../config').bower; //flush out in config for DRY


var srcPathIncludeMedia = 'bower_components/include-media/dist/_include-media.scss';
var destPathIncludeMedia = 'src/sass/vendor/include-media/';

var srcPathSusy = 'bower_components/susy/sass/**';
var destPathSusy = 'src/sass/vendor/susy/';

var srcPathSlick = 'bower_components/slick.js/slick/slick.scss';
var destPathSlick = 'src/sass/vendor/slick/';


var includeMediaStream = gulp.src(srcPathIncludeMedia)
    .pipe(gulp.dest(destPathIncludeMedia));

var susyStream = gulp.src(srcPathSusy)
    .pipe(gulp.dest(destPathSusy));

var slickStream = gulp.src(srcPathSlick)
    .pipe(rename('_slick.scss'))
    .pipe(gulp.dest(destPathSlick));

//todo copy slick, modernizr, jquery

gulp.task('bowerTasks', function() {
  return mergeStream(includeMediaStream, susyStream, slickStream);
});