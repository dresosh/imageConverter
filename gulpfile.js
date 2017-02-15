var gulp        = require( 'gulp' )
   ,imageResize = require( 'gulp-image-resize-ar' )
   ,del         = require( 'del' )
   ,imagemin    = require('gulp-imagemin')
   ,images      = 'images/**'


// Converts jpegs
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

// Converts pngs
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

// Deletes converted dir
gulp.task('del', function () {
  del([
     'converted'
  ])
})

// Deletes images in images dir
gulp.task('clean', function () {
  del([
     'images/**/*.jpg'
    ,'images/**/*.png'
    ,'images/**/*.tif'
    ,'images/**/*.bmp'
    ,'images/**/*.jpeg'
    ,'images/**/*.svg'
  ])
})



gulp.task('default', ['del', 'convert'])
