/*
 * @Author: Zhang Kai 
 * @Date: 2019-04-19 14:31:26 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-04-19 15:32:27
 */

const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');

gulp.task('copy', () => {
    gulp.src('src/index.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/'));
});
gulp.task('less', () => {
    gulp.src('src/style/*.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/style/'));
});
gulp.task('watch', () => {
    gulp.watch('src/index.html', gulp.series('copy'));
    gulp.watch('src/style/*.less', gulp.series('less'));
});