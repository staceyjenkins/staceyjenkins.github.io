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

/*
function loadHeap(){
      window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("116937336");
};
*/

require(["jquery", "fontawesome"], function() {
    $(document).ready(function() {
        
        // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
        
        $siteFunctions = [loadWaypoints(), loadDisqus(), loadInstagram(), loadHotjar()];
        for (var n = 0; n < $siteFunctions.length; n++) setTimeout($siteFunctions[n], 4e3);
    });
});



