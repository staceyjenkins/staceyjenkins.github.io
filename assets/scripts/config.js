requirejs.config({
    baseUrl:'https://www.staceyjenkins.co.uk/assets/scripts',
    paths:{
        disqusloader:'lib/disqusloader-min',
        jquery: '//code.jquery.com/jquery-3.5.1.min',
        fontawesome: '//use.fontawesome.com/releases/v5.0.6/js/all',
        waypoints:'lib/jquery.waypoints.min',
        instagramfeed: 'lib/instagramfeed-min',
        colcade: '//unpkg.com/colcade@0/colcade',
        app: 'app'
    }
});

requirejs(['app/functions']);
