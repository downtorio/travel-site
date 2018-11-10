var gulp = require('gulp'),
	 modernizr = require('gulp-modernizr');

/*
 *	modernizr will look at our code specified in gulp.src() [all our css and js files] and automatically determine which features we need to test for, and generate a lightweight custom modernizr javascript file, and we pipe that resulting file to our destination
 */

gulp.task('modernizr', function() {
	return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
			   .pipe(modernizr({
			   		'options': ['setClasses']
			   }))
			   .pipe(gulp.dest('./app/temp/scripts/'));
});