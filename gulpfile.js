// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");
 
var concat = require('gulp-concat');
// task
gulp.task('js', function () {
    gulp.src('./js/*.js') // path to your files
    .pipe(uglify())
	.pipe(concat('app.js'))
    .pipe(gulp.dest(''));
});