var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	watch = require('gulp-watch');


gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function() {
		browserSync.reload();
	});
	
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	// watches for any time a .js file is saved in the specified directories and reloads browser
	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});


gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/temp-styles/styles.css')
			   .pipe(browserSync.stream());	
});

//reloads the browser, but only once webpack bundle is complete (as specified in scripts.js)
gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});