function loadWaypoints(){
       require(['waypoints'], function(n){ 
           $('.mainarea').waypoint(function(direction){
     setTimeout(function(){
      $('.siteheader').toggleClass('is_sticky', direction=='down');
}, 100);
});   
       });
    };
    
    function loadDisqus(){
        require(['disqusloader'], function(){ 
        disqusLoader( '.disqus', $options );
        });
    };

require(["jquery", "fontawesome"], function() {
    $(document).ready(function() {
        $siteFunctions = [loadWaypoints(), loadDisqus()];
        for (var n = 0; n < $siteFunctions.length; n++) setTimeout($siteFunctions[n], 4e3);
        console.log("Javascript loaded")
    });
});



