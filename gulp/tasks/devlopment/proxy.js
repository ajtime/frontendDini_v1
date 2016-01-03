var bs              = require ('browser-sync');
var gulp            = require('gulp');


// Proxy live sitefinity site and serve local assets
gulp.task('proxysite', function() {
    bs.init({
        proxy: "http://tropicana.drpixel.net/",
        rewriteRules: [
            {
                match: new RegExp("_assets/css/main.css"),
                fn: function() {
                    return "./assets/css/main.css"
                }
            },
            {
                match: new RegExp("_assets/scripts/main.js"),
                fn: function() {
                    return "./assets/js/main.js"
                }
            }

        ],
        middleware: require("serve-static")("./dist"),
        port: 9995
    });

});