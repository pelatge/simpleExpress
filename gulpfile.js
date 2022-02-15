import gulp from 'gulp';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import useref from 'gulp-useref'

gulp.task('minify', function(){
  return gulp.src('src/**/*.js')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});