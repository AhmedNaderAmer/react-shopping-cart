/** @format */

const gulp = require("gulp");
const gulpSadd = require("gulp-sass");
const sass = gulpSadd(require("sass"));
// gulp.task("sass", async function () {
//   gulp
//     .src("src/components/**/*.scss")
//     .pipe(sass())
//     .pipe(gulp.dest("src/css"));
// });

gulp.task("watch", async function () {
  gulp.watch(
    [
      "src/components/**/*.scss",
      "src/pages/*.scss",
    ],
    async function () {
      gulp
        .src([
          "src/components/**/*.scss",
          "src/pages/*.scss",
        ])
        .pipe(sass())
        .pipe(gulp.dest("src/css"));
    }
  );
});
