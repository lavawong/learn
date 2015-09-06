var gulp = require('gulp');

var less = require('gulp-less');
var path = require('path');
 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  less: ['css/**/*.less'],
  images: 'images/**/*'
};
 
// Not all tasks need to use streams 
// A gulpfile is just another node program and you can use all packages available on npm 
gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src` 
  del(['build'], cb);
});

gulp.task('less', function () {
  return gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./release'));
});

//gulp.task('scripts', ['clean'], function() {
//  // Minify and copy all JavaScript (except vendor scripts)
//  // with sourcemaps all the way down
//  return gulp.src(paths.scripts)
//    .pipe(sourcemaps.init())
//      .pipe(coffee())
//      .pipe(uglify())
//      .pipe(concat('all.min.js'))
//    .pipe(sourcemaps.write())
//    .pipe(gulp.dest('build/js'));
//});

// Copy all static images 
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task 
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('build/img'));
});
 
// Rerun the task when a file changes 
gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
  //gulp.watch(paths.images, ['images']);
});

// Copy web font to release folder
gulp.task('copy-font', function() {
  return gulp.src([
        'css/font/**/*.eot',
        'css/font/**/*.svg',
        'css/font/**/*.ttf',
        'css/font/**/*.woff*'
      ], {
        base: 'css/font'
      })
      .pipe(gulp.dest('release/font'));
});

// The default task (called when you run `gulp` from cli) 
gulp.task('default', ['less', 'copy-font']);




