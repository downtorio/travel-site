// we install these via npm [npm install gulp-watch --save-dev]
var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	browserSync = require('browser-sync').create(),			// refreshes browser on save
	cssimport = require('postcss-import'),
	cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
	postcss = require('gulp-postcss'),
	watch = require('gulp-watch');

gulp.task('default', function() {
	console.log('Hooray - you created a Gulp task!');
});

gulp.task('html', function() {
	console.log('Imagine something useful being done to your HTML here.');
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
			   .pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
			   //postcss() expects an array
			   //cssImport must be at beginning; autoprefixer must be at end
			   .pipe(gulp.dest('./app/temp/temp-styles'));
	// we need 'return' bc gulp.src() is an asynchronous function
});

gulp.task('watch', function() {

	browserSync.init({
		notify: false,			//broswerSync has a popup black box on the corner of the page that notifies which saved file is triggering the refresh; this command prevents the black box from popping up -- doesn't bother me tho?
		//bS needs to know where the web server should point [relative to this gulpfile.js]
		server: {
			baseDir: "app"		//base directory is our 'app' folder
		}
	});
	
	//first attrib: the file to watch. second attrib: what to do.
	watch('./app/index.html', function() {
		//gulp-watch does something whenever we save the file it's watching
		//so whenever we save index.html, it will run gulp.start('html'), which we just defined
		//gulp.start('html');
		browserSync.reload();
	});
	
	watch('./app/assets/styles/**/*.css', function() {
		//'**' targets any [future, hypothetical] folders within styles/
		//'*.css' targets any file with a .css extension		
		//gulp.start('styles');
		gulp.start('cssInject');	//we just made gulp.start('styles') unavailable, just before this line. and 'styles' runs all our post-css stuff! so HOW COMES?? here's how comes: in the next gulp task, right after 'cssInject' and before the function, we can insert an array of dependencies that tells gulp to begin and complete any dependency task listed in the array first, before running cssInject
	});
});

gulp.task('cssInject', ['styles'], function() {
	//let broswerSync refresh the broswer upon changes to our css as well, not just html
	//technically we could also just add the css file along with [watch('./app/index.html', function...)] but broswerSync has a method specifically designed for this
	return gulp.src('./app/temp/temp-styles/styles.css')
			   .pipe(browserSync.stream());		//stream() makes whatever we're piping into it (styles.css) available in the browser
});


/*
	Notes:
	1. BrowserSync makes cross-browser testing a piece of cake. If you've got chrome, firefox and safari all open and you fill out a form on one browser, it fills in on all the other browsers. If you scroll down on one browser, the others scroll down too. Whaaaaat!
	2. MAJOR TIP! If you look on the command line with BrowserSync set up, there'll be a block of pink text that shows the Local url of our webpage and then an External url below it. If your smartphone is using the same wifi as your computer, you can type that external url onto the address bar and view your webpage on your mobile device. Whaaaaaaattttt!!!
 */