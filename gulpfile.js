var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var del = require('del');

gulp.task('clean', function() {
  return del(['dist']);
});

gulp.task('copy-img', ['clean'], function() {
  return gulp.src('img/**/*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('copy-index', ['clean'], function() {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-dist', ['copy-index', 'copy-img']);

gulp.task('minify-css', ['clean'], function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8', debug: true}, function(details) {
      console.log(details);
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', ['clean'], function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('deploy', ['clean', 'minify-css', 'minify-js', 'copy-dist']);

gulp.task('default', ['deploy']);