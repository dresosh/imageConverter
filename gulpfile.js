var gulp        = require( 'gulp' )
   ,imageResize = require( 'gulp-image-resize-ar' )
   ,del         = require( 'del' )
   ,imagemin    = require('gulp-imagemin')
   ,images      = 'images/**'
   ,imageWidth  = 1600
   ,thumbWt     = 420
   ,thumbHt     = 280

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

// Converts jpegs
gulp.task('thumb', function () {
 gulp.src( images )
   .pipe(imagemin())
   .pipe(imageResize({
     width : thumbWt,
     height: thumbHt,
     crop : true,
     upscale : false,
     format: 'jpg'
   }))
   .pipe(gulp.dest('./thumbnails'));
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
     'converted',
     'thumbnails'
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



gulp.task('default', ['del', 'convert', 'thumb'])
