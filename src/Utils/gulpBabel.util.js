var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import useref from 'gulp-useref'

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});


gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(gulp.dest("dist"));
});
