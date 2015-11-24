var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    $           = require('gulp-load-plugins')(),
    del         = require('del'),
    runSequence = require('run-sequence');

// browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('styles/style.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({ style: 'expanded', errLogToConsole: true }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('styles'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', ['browser-sync', 'sass'], function() {
  gulp.watch('styles/*.css', function(file) {
    if (file.type === "changed") {
      reload(file.path);
    }
  });
  gulp.watch(['*.html', 'views/*.html'], ['bs-reload']);
  gulp.watch(['app/*.js', 'components/**/*.js', 'js/*.js'], ['bs-reload']);
  gulp.watch('styles/**/*.scss', ['sass']);
});
