import gulp from 'gulp';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
import pleeease from 'gulp-pleeease';
import critical from 'critical';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import sync from 'browser-sync';

gulp.task('server', () => {
  return sync({
    server: {
      baseDir: './'
    },
    open: 'external',
    port: 9000
  });
});

gulp.task('reload', () => {
  return sync.reload();
});

gulp.task('less', () => {
  return gulp.src('./src/less/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(pleeease({
      out: 'style.min.css',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('critical', ['build'], (cb) => {
  critical.generate({
    inline: true,
    base: './',
    src: 'index.html',
    dest: 'dist/index-critical.html',
    minify: true,
    width: 320,
    height: 480
  });
});

gulp.task('babel', () => {
  return gulp.src('./src/js/*.es6')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task('watch', ['build', 'server'], () => {
  gulp.watch('./src/**/*.less', ['less']);
  gulp.watch('./src/**/*.es6', ['babel']);
  gulp.watch('./*.html', ['reload']);
  gulp.watch('./dist/**/**.css', ['reload']);
  return gulp.watch('./dist/**/*.js', ['reload']);
});

gulp.task('build', ['less']);

gulp.task('default', ['build']);
