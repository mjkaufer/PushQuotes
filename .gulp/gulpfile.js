var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('../client/assets/scss/**/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9', 'ios 6', 'android 4'))
        .pipe(gulp.dest('../client/assets/css'))
});

gulp.task('default', ['sass'], function () {
    gulp.watch("../client/assets/scss/**/*.scss", ['sass']);
});