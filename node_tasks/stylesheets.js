'use strict';

const autoprefixer = require('gulp-autoprefixer');
const chokidar = require('chokidar');
const clean = require('gulp-clean-css');
const glob = require("glob");
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const Util = require('./util');

class StyleTask {

    constructor() {
        const styleSheetWatcher = chokidar.watch(
            Util.path.stylesheets, { persistent: true }
        );

        const componentWatcher = chokidar.watch(
            Util.path.style_components, { persistent: true }
        );

        styleSheetWatcher
            .on('add', (filePath) => {
                this.compile(filePath);
            })
            .on('change', (filePath) => {
                this.compile(filePath);
            });

        componentWatcher.on('change', () => {
            glob(Util.path.stylesheets, {},  (err, files) => {
                if(err) Util.methods.logError(err);

                files.forEach((file) => {
                    this.compile(file);
                })
            });
        });
    }

    compile(filePath) {
        Util.methods.logInfo(`Compiling ${filePath} ...`);

        return gulp.src(filePath, { base: Util.path.stylesheets_src_dir })
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(scss())
            .pipe(autoprefixer({browsers: ['ie 11', 'safari >= 6', 'Android >= 4', 'last 4 versions']}))
            .pipe(clean({ advanced:false }))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(Util.path.stylesheets_dir));
    }

}

module.exports = StyleTask;
