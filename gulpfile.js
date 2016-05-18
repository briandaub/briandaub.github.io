var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages'),
    gutil    = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
 
gulp.task('deploy', function() {
  gulp.run('js');
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('js', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'));
});