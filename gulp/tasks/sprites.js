var gulp = require('gulp'),
	 del = require('del'),
	 rename = require('gulp-rename'),
	 svgSprite = require('gulp-svg-sprite');

//svgSprite wants its objects to be defined in an Object literal
var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
};

//if any changes are made to our sprites where we'd have to instantiate a new sprite collection, this would ensure that the old sprite collection gets deleted/replaced accordingly
gulp.task('beginClean', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
			   .pipe(svgSprite(config))
			   .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/**/*.svg')
			   .pipe(gulp.dest('./app/assets/images/sprites'));
});

//moves sprites css file to modules/ instead of importing it from god knows where all the way to styles.css and renames it to start with an _
gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.css')
			   .pipe(rename('_sprite.css'))
			   .pipe(gulp.dest('./app/assets/styles/modules'));
});

//this folder only exists in a temporary context, until its contents are copied to a diff location -- once said contents are relocated, delete this directory
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
	return del('./app/temp/sprite');
});

//these will both try to run at the same time, which is a no-no, so...
//['createSprite'] = named as a dependency in copySpriteCSS, so when we execute 'icons', copySpriteCSS won't run until createSprite is finished
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);