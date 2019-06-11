menu_icon.onclick = function (){
	var topNav = document.getElementById("topnav-responsive")
	if (topNav.className === 'topnav') {
		topNav.className += ' responsive';
	} else {
		topNav.className = 'topnav';
	}
}


$(function() {
	$('body').append('<a href="#" id="go-top" title="to up">&#9650;</a>');
 	$.fn.scrollToTop = function() {
  	$(this).hide().removeAttr('href');
 	 if ($(window).scrollTop() >= '250') $(this).fadeIn('slow')
  	var scrollDiv = $(this);
  	$(window).scroll(function() {
 	if ($(window).scrollTop() <= '250') $(scrollDiv).fadeOut('slow')
    else $(scrollDiv).fadeIn('slow')
 	});
    $(this).click(function() {
    $('html, body').animate({scrollTop: 0}, "slow")
    })
    } 
    $('#go-top').scrollToTop();
});
