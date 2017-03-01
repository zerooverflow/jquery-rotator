var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minify-css', function() {
    return gulp.src(['rota.css'])
        .pipe(cleanCSS())
        .pipe(concat('rota.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('uglify', function() {
    return gulp.src(['jquery.rota.js'])
        .pipe(uglify())
        .pipe(concat('jquery.rota.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['minify-css','uglify'], function() {

});
