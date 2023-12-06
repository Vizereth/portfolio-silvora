var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');

gulp.task('deploygh', function() {
    return gulp.src('./dist/**/*')
      .pipe(ghPages());
  });
