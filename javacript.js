

//This code is sourced from https://www.w3.schools.com/howto/howto_js_navbar_sticky.asp

window.onscroll = function () {myFunction()};

var navbar = document.getElementsByClassName("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.classList.remove("sticky");
	}
}


//I got this code from:stackoverflow.com/questions/28452235/make-a-nav-bar-stick-to-the-top-when-scrolling-with-css 
//I know it's JQuery but in an attempt to get the navbar to stick to the top once scrolled down i tried with javascript as you can see above //and didnt get anywhere, although as i haven't imported JQuery below doesnt work either.

//$(document).ready(function () {
//	$(window).scroll(function () {
//		
//		console.log($window).scrollTop()
//		if ($(window).scrollTop() > 280) {
//			$('#nav-bar').addClass('navbar-fixed');
//		}
//		if ($(window).scrollTop() < 281) {
//			$('#nav-bar').removeClass('navbar_fixed');
//		}
//	});
//});
 
