import gulp from 'gulp';
import postcss from 'gulp-postcss';
import cssnext from 'gulp-cssnext';
import cssnano from 'cssnano';
import stylelint from "stylelint";
import reporter from "postcss-reporter";
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import eslint from "gulp-eslint";
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

gulp.task('css', () => {
  return gulp.src('./src/cssnext/*.css')
    .pipe( sourcemaps.init())
    .pipe(postcss([
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-simple-vars'),
      stylelint(),
      reporter({ clearMessages: true }),
      require('cssnano')
    ]))
    .pipe(cssnext([
      require('cssnext'),
    ]))
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

gulp.task('babel', ["lint"], () => {
  return gulp.src('./src/js/*.es6')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./dist/js/'))
});

gulp.task("lint", () => {
  return gulp.src("./src/js/*.es6")
    .pipe(eslint({useEslintrc : true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('w', ['build', 'server'], () => {
  gulp.watch('./src/cssnext/*.css', ['css']);
  gulp.watch('./src/**/*.es6', ['babel']);
  gulp.watch('./*.html', ['reload']);
  gulp.watch('./dist/**/**.css', ['reload']);
  return gulp.watch('./dist/**/*.js', ['reload']);
});

gulp.task('build', ['css']);

gulp.task('default', ['build']);
