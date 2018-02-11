// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");
 
var concat = require('gulp-concat');

var nodemon = require('gulp-nodemon');
gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['dist/']
  })
  .on('restart', function() {
    console.log('>> node restart');
  })
});
// task
gulp.task('js', function () {
    gulp.src('./js/*.js') // path to your files
    .pipe(uglify())
	.pipe(concat('app.js'))
    .pipe(gulp.dest('./public'));
});