const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const build = require("gulp-build");
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

/* Build*/
gulp.task("build", function () {
  gulp
    .src("js/*.js")
    .pipe(build({ GA_ID: "123456" }))
    .pipe(gulp.dest("dist"));
});

gulp.task("build", function () {
  gulp
    .src("css/*.css")
    .pipe(build({ GA_ID: "123456" }))
    .pipe(gulp.dest("dist"));
});
