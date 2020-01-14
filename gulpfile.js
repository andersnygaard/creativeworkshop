var gulp           = require('gulp');
var browserSync    = require('browser-sync').create();
var modRewrite     = require('connect-modrewrite');

// Static Server + watching scss/html files
const serve =  () => {
    browserSync.init({
        server: "./src",
        port: 8080,
        middleware: [
            modRewrite([
                '!\\.\\w+$ /index.html [L]'
            ])
        ]
    });

    gulp.watch(["src/**/*.html", "src/**/*.js"]).on('change', browserSync.reload);
};


exports.serve = serve;