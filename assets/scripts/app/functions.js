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

    function loadDisqus(){
        require(['disqusloader'], function(){ 
        disqusLoader( '.disqus', $options );
        });
    };

require(["jquery", "fontawesome"], function() {
    $(document).ready(function() {
        $siteFunctions = [loadWaypoints(), loadDisqus(), loadHotjar()];
        for (var n = 0; n < $siteFunctions.length; n++) setTimeout($siteFunctions[n], 4e3);
    });
});



