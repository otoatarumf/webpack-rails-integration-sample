'use strict';

const chalk = require('chalk');

module.exports = {
    path: {
        stylesheets: "./app/assets_src/stylesheets/**/*.scss",
        style_components: "./app/assets_src/stylesheets/**/*.scss",
        stylesheets_src_dir: "./app/assets_src/stylesheets/",
        stylesheets_dir: "./app/assets/stylesheets/",
        javascript: "./app/assets_src/javascripts/**/*.js",
        javascript_partial: "./app/assets_src/javascripts/**/_*.js",

    },
    methods: {
        logInfo: (msg) => {
            console.log(chalk.magenta.bold(msg));
        },
        logError: (msg) => {
            console.log(chalk.magenta.bold(msg));
        }
    }
};
