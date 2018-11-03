var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	cssimport = require('postcss-import'),
	cssvars = require('postcss-simple-vars'),
	mixins = require('postcss-mixins'),
	nested = require('postcss-nested'),
	postcss = require('gulp-postcss');


gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
			   .pipe(postcss([cssimport, mixins, cssvars, nested, autoprefixer]))
			   .on('error', function(errorInfo) {	//we want gulp to keep running even when an error occurs, not to stop watching altogether, which is the default
			   		console.log(errorInfo.toString());
			   		this.emit('end');	//this is what .watch() looks for. con: it doesn't transmit an error on the command line to let us know an error occured. that's what errorInfo is for
			   })
			   .pipe(gulp.dest('./app/temp/temp-styles'));
});