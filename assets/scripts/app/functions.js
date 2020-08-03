function loadWaypoints(){
       require(['waypoints'], function(n){ 
           $('.mainarea').waypoint(function(direction){
     setTimeout(function(){
      $('.siteheader').toggleClass('is_sticky', direction=='down');
}, 100);
});   
       });
    };

function loadPTEngine(){
        window._pt_lt = new Date().getTime();
        window._pt_sp_2 = [];
        _pt_sp_2.push('setAccount,3428f523');
        var _protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        (function() {
            var atag = document.createElement('script'); atag.type = 'text/javascript'; atag.async = true;
            atag.src = _protocol + 'cjs.ptengine.com/pta_en.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(atag, s);
        })();   
};
    
    function loadDisqus(){
        require(['disqusloader'], function(){ 
        disqusLoader( '.disqus', $options );
        });
    };

require(["jquery", "fontawesome"], function() {
    $(document).ready(function() {
        $siteFunctions = [loadWaypoints(), loadDisqus(), loadPTEngine()];
        for (var n = 0; n < $siteFunctions.length; n++) setTimeout($siteFunctions[n], 4e3);
    });
});



