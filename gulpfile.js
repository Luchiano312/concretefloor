const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

function compiladorCss() {
  return gulp
    .src("css/public/app.css")
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("css/"));
}

gulp.task("prefixer", compiladorCss);

function watch() {
  gulp.watch("css/public/app.css", compiladorCss);
}

gulp.task("default", watch);

/* browserSync  */
gulp.task("default", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("*.html").on("change", browserSync.reload);
});
