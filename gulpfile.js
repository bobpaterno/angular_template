var gulp = require('gulp');
var bower = require('gulp-bower');
var shell = require('gulp-shell');

gulp.task('default', function() {
    console.log("default");
});


gulp.task('start', function(){
  gulp.src('')
      .pipe(shell(['node server.js']));
});
