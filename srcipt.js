var a = document.querySelectorAll(".social li a");
var copy = document.querySelector(".input-text .fa-copy");
var social_input = document.getElementById('social_input');




for (var i = 0, length = a.length; i < length; i++) { a[i].onclick=function(e) { var social_link=e.target.getAttribute('link'); social_input.value=social_link; }; } copy.addEventListener('click',function(){ social_input.select(); document.execCommand('copy'); });

$(window).on( 'load', function() {
	$(".loadding-page").delay(3000).fadeOut(200);
	$(".cssload-box-loading").on('click', function() {
	    $(".cssload-box-loading").fadeOut(200);
	})
})
