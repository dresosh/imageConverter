var gulp        = require( 'gulp' )
   ,imageResize = require( 'gulp-image-resize-ar' )
   ,del         = require( 'del' )
   ,imagemin    = require('gulp-imagemin')
   ,images      = 'images/**'


gulp.task('convert', function () {
 gulp.src( images )
   .pipe(imagemin())
   .pipe(imageResize({
     width : 1300,
     crop : false,
     upscale : false,
     format: 'jpg'
   }))
   .pipe(gulp.dest('./converted'));
});

gulp.task('png', function () {
 gulp.src( images )
   .pipe(imagemin())
   .pipe(imageResize({
     width : 1300,
     crop : false,
     upscale : false,
     format: 'png'
   }))
   .pipe(gulp.dest('./converted'));
});

gulp.task('del', function () {
  del([
    'converted'
  ])
})

gulp.task('default', ['del', 'convert'])
