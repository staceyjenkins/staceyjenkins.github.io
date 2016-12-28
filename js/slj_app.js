// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

window.GoogleAnalyticsObject = "__ga__";
window.__ga__ = function() {
    for (var i=0; i<arguments.length; i++) {
        var arg = arguments[i];
        if (arg.constructor == Object && arg.hitCallback) {
            arg.hitCallback();
        }
    }
};
window.__ga__.q = [["create", "UA-66418618-1", "auto"]];
window.__ga__.l = Date.now();

requirejs.config({
    baseUrl: 'js',
    paths: {
        "ga": [
            "//www.google-analytics.com/analytics",
            "data:application/javascript,"
        ],
        jquery:'lib/jquery.min',
        instaScript: 'lib/spectragram.min',
        waypoints:'lib/jquery.waypoints.min',
        rellax:'lib/rellax.min',
        fancybox:'lib/jquery.fancybox.pack',
        fontawesome: 'https://use.fontawesome.com/2b8f3fa6eb',
        getTumblrArtwork:'lib/getTumblrArtwork.min',
        scrollbar: 'lib/jquery.nicescroll.min',
        setanimations: 'lib/setanimations.min',
        owl: 'lib/owl.carousel.min',
        app: 'app'
    },
    shim: {
        "ga": {
            exports: "__ga__"
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/slj_main.min']);
