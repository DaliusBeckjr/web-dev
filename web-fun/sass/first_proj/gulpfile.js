const {src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// function to compile our sass
function buildStyles() {
    return src('index.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

// watch function to re-compile our sass every time we change it
function watchTask() {
    watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)