const gulp=require('gulp');
const sass=require('gulp-sass')(require('sass'));
const  sourcemaps=require('gulp-sourcemaps');
const comjs=require('gulp-uglify');
const imagemin=require('gulp-imagemin');
const obf=require('gulp-obfuscate');

function comprimejs(){
    return gulp.src('./source/scripts/*js').pipe(comjs()).pipe(obf()).pipe(gulp.dest('./build/scripts'))
}
function comprimeimg(){
    return gulp.src('./source/images/*').pipe(imagemin()).pipe(gulp.dest('./build/images'));
}

function  compsass(){
    return gulp.src('./source/style/main.scss').pipe(sourcemaps.init()).pipe(sass({outputStyle:'compressed'})).pipe(sourcemaps.write('./maps')).pipe(gulp.dest('./build/style'));
}


exports.default=function(){
    gulp.watch('./source/style/*scss',{ignoreInitial:false},gulp.series(compsass))
    gulp.watch('./source/images/*',{ignoreInitial:false},gulp.series(comprimeimg))
    gulp.watch('./source/scripts/*',{ignoreInitial:false},gulp.series(comprimejs))

}