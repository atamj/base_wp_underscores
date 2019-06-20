/* Utilisation : 
	-Ouvrir un terminal
	-Se placer dans la racine du dossier
	-lancer la commande "gulp watch"
*/

const gulp = require('gulp');

const sass = require('gulp-sass');

const autoprefix = require('gulp-autoprefixer');

const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass',function(){
	return gulp.src('sass/**/*.scss')

		.pipe(sourcemaps.init())

		.pipe(sass({outputStyle: 'compressed'})) //Compilation de sass en css avec cette fonction


		.pipe(autoprefix({ grid: true, overrideBrowserslist: ['last 6 versions']}))

		.pipe(sourcemaps.write('./'))
		
		.pipe(gulp.dest('./'))

});

gulp.task('watch',function(){

	gulp.watch('sass/**/*.scss',gulp.series('sass'));
	
	//On peut ajouter ici d'autres "watchers"
})