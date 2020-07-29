// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery:'lib/jquery.min',
        instaScript: 'lib/spectragram.min',
        waypoints:'lib/jquery.waypoints.min',
        rellax:'lib/rellax.min',
        fancybox:'lib/jquery.fancybox.pack',
        fontawesome: 'https://use.fontawesome.com/2b8f3fa6eb',
        getTumblrArtwork:'lib/getTumblrArtwork.min',
        scrollbar: 'lib/jquery.nicescroll.min',
        makeanimations: 'lib/makeanimations.min',
        owl: 'lib/owl.carousel.min',
        app: 'app'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/slj_main.min']);
