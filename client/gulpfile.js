/** @format */

const gulp = require("gulp");
const gulpSadd = require("gulp-sass");
const sass = gulpSadd(require("sass"));
gulp.task("sass", async function () {
  gulp
    .src("src/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
});
