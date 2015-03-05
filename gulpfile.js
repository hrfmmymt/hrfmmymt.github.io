var gulp, less, sync;

gulp = require('gulp');
less = require('gulp-less');
sync = require('browser-sync');

gulp.task('server', function() {
  return sync({
    server: {
      baseDir: './'
    },
    open: 'external',
    port: 9000
  });
});

gulp.task('reload', function() {
  return sync.reload();
});

gulp.task('less', function() {
  return gulp.src('./app/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', ['build', 'server'], function() {
  gulp.watch('app/**/*.less', ['less']);
  gulp.watch('./*.html', ['reload']);
  gulp.watch('app/**/*.css', ['reload']);
  return gulp.watch('app/**/*.js', ['reload']);
});

gulp.task('build', ['less']);

gulp.task('default', ['build']);
