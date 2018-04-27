//a gulp file is a javascript file that automates a list of development tasks. That otherwise would be repetitive to do.

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile Sass & Inject into browser
//compile bootstrap scss plus any scss file we create in src scss folder
//pip in sass plugin, pipr in destination, stream it in browserSync
gulp.task('sass', function(){
	return gulp.src(['node_modules/boostrap/scss/bootstrap.scss','src/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest("src/css"))
		.pipe(browserSync.stream());
});

//Move JS Files to src/js
gulp.task('js', function(){
	return gulp.src(['node_modules/bootstrap/dist/js/boostrap.min.js','node_modules/jquery/dist/jquery.js','node_modules/popper.js/dist/umd/popper.min.js'])
	.pipe(gulp.dest("src/js"))
	.pipe(browserSync.stream());
});

//Watch Sass & serve
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./src"
	});

	gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'],['sass']);
	gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Move Fonts Folder to src
gulp.task('fonts', function(){
	return gulp.src('node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest("src/fonts"));
});

// Move Font Awesome CSS to src/css
gulp.task('fa', function(){
	return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
	.pipe(gulp.dest("src/css"));
});

//default runs all of the tasks you need, automatically
gulp.task('default', ['js','serve','fa','fonts']);

