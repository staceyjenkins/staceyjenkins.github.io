function loadWaypoints(){
       require(['waypoints'], function(n){ 
           
           $('.mainarea').waypoint(function(direction){
     setTimeout(function(){
      $('.siteheader').toggleClass('is_sticky', direction=='down');
}, 100);
});   
           /*
 $('.title_grid').waypoint(function(direction){
      var $this     = $('.title_overlay');
        if ($this.data('timeout')) {
         setTimeout(function(){
            $this.toggleClass('animated ' + $this.data('animation'), direction == 'down');
          }, parseInt($this.data('timeout')));
        } else {
          $this.toggleClass('animated ' + $this.data('animation'),  direction == 'down');
        }
       }, {
     offset: 400
 });
           
 $('.client_row').waypoint(function(direction){
     $(".client").each(function(i){
        var $this = $(this);
        if ($this.data('timeout')){
         setTimeout(function(){
            $this.toggleClass('animated ' + $this.data('animation'), direction == 'down');
          }, parseInt($this.data('timeout')));
        } else {
          $this.toggleClass('animated ' + $this.data('animation'),  direction == 'down');
        }
     });
       }, {
     offset: 400
 })*/
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

function loadClicky(){
    require(['clicky'], function(n){
    var clicky_site_ids = clicky_site_ids || []; clicky_site_ids.push(100869051);
})
};

function loadGoogle(){
    require(['google'], function(n){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-176845358-1');
})
};


require(["jquery", "fontawesome"], function() {
        /*$(function(){
    var $window = $(window),
       win_height_padded = $window.height() * 1.1;
        
        
        $('.animate').addClass('animated');
        
        $window.on('scroll', revealOnScroll);
            
            
        function revealOnScroll(){
    scrolled = $window.scrollTop();
    $(".play:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
            
            // Hide animations when completed
   $(".play.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });  
    }      
    
});*/
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



