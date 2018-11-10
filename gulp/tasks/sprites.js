var gulp = require('gulp'),
	 del = require('del'),
	 rename = require('gulp-rename'),
	 svgSprite = require('gulp-svg-sprite'),
	 svg2png = require('gulp-svg2png');	//svg is not supported by 3% of browsers; check if this is still accurate in present time tho

//svgSprite wants its objects to be defined in an Object literal
var config = {
	shape: {
		spacing: {
			padding: 1		//so sprites aren't compressed so tightly together
		}
	},
	mode: {
		css: {
			variables: {
				replaceSvgWithPng: function() {
					return function(sprite, render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

//if any changes are made to our sprites where we'd have to instantiate a new sprite collection, this would ensure that the old sprite collection gets deleted/replaced accordingly
gulp.task('beginClean', function() {
	return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
	return gulp.src('./app/assets/images/icons/**/*.svg')
			   .pipe(svgSprite(config))
			   .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function() {
	return gulp.src('./app/temp/sprite/css/*.svg')
			   .pipe(svg2png())
			   .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
	//dependency for this used to be 'createSprite' before 'createPngCopy' was created
	//at the time this course was made, 3% of browsers don't support png. my concern is this will change in time and we won't need createPngCopy anymore. if that happens, be aware that omitting createPngCopy means listing 'createSprite' as the dependency for this method!
	return gulp.src('./app/temp/sprite/css/**/*.{svg,png}')
				//without createPngCopy, this should say .../**/*.svg
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