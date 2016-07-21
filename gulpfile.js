const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('js', () => {
  gulp.src(['./js/app.js', './js/**/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('css', () => {
  gulp.src(['./styles/**/*.css'])
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['js', 'css']);
gulp.watch(['./js/**/*.js'], 'js');
gulp.watch(['./style/**/*.css', 'css']);
