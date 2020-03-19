const gulp = require('gulp')
const concat = require('gulp-concat')

return gulp.src('./static/css/*.css')
    .pipe(concat('index.css'))
    .pipe(gulp.dest('static/dist'))