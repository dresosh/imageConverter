var gulp        = require( 'gulp' )
   ,imageResize = require( 'gulp-image-resize-ar' )
   ,del         = require( 'del' )
   ,imagemin    = require('gulp-imagemin')
   ,images      = 'images/**'
   ,imageWidth  = 1600

// Converts jpegs
gulp.task('convert', function () {
 gulp.src( images )
   .pipe(imagemin())
   .pipe(imageResize({
     width : imageWidth,
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
     width : imageWidth,
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
    'images/*'
  ])
})

// Strips pdfs, svgs, docx files
gulp.task('strip', function () {
  del([
     'images/**/*.pdf'
    ,'images/**/*.svg'
    ,'images/**/*.docx'
    ,'converted'
  ])
})



gulp.task('default', ['del', 'convert'])
