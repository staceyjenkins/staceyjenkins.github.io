function loadWaypoints(){
       require(['waypoints'], function(n){ 
           $('.mainarea').waypoint(function(direction){
     setTimeout(function(){
      $('.siteheader').toggleClass('is_sticky', direction=='down');
}, 100);
});   
       });
    };

// Hotjar Tracking Code for http://www.staceyjenkins.co.uk//
function loadHotjar(){
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:388183,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
}


function loadInstagram(){
    require(['instagramfeed'], function(n){ 
        console.log('instagram loaded');
	  $.instagramFeed({
	    'username': 'froginajar',
	    'container': "#loadInstagram",
	    'items': 9,
	    'display_profile': false,
	    'display_biography': false,
	    'display_igtv': false,
	    'styling': false
});        
});
}
    
    function loadDisqus(){
        require(['disqusloader'], function(){ 
        disqusLoader( '.disqus', $options );
        });
    };

require(["jquery", "fontawesome"], function() {
    $(document).ready(function() {
        $siteFunctions = [loadWaypoints(), loadDisqus(), loadHotjar(), loadInstagram()];
        for (var n = 0; n < $siteFunctions.length; n++) setTimeout($siteFunctions[n], 4e3);
    });
});



