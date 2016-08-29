var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var pipe = require('gulp-load-plugins')();

var cssPath = 'library/**/*.scss';
var jsPath = 'library/**/*.js';
var distPath = 'dist/';

gulp.task('scripts', function() {
  return gulp.src(jsPath).
  pipe(pipe.concat('alindicate.min.js')).
  pipe(gulp.dest(distPath));
});

gulp.task('styles', function() {
  return gulp.src(cssPath).
  pipe(pipe.scss()).
  pipe(cleanCSS({compatibility: 'ie8'})).
  pipe(pipe.concat('alindicate.min.css')).
  pipe(pipe.autoprefixer()).
  pipe(gulp.dest(distPath));
});

gulp.task('watch', function() {
    gulp.watch([cssPath, jsPath], ['default']);
})

gulp.task('default', ['scripts', 'styles']);
