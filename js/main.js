$(document).ready(function(){

$fadeInAnimation = 'fadeIn' + ' animated';
$fadeOutAnimation = 'fadeOut' + ' animated';

$('a.menulink').on('click', function(){
$('div.menuscreen').addClass($fadeInAnimation + ' displaymenu').one('transitionend', function(){
$('div.menuscreen').removeClass($fadeInAnimation)
});
return false;
});

$('a.closemenu').on('click', function(){
$('div.menuscreen').addClass($fadeOutAnimation).one('transitionend',function(){
  $('div.menuscreen').removeClass($fadeOutAnimation + ' displaymenu');
});
});

});
