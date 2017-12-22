      function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

window.onscroll = function() {myFunction()};

var header = document.getElementById("nav-bar");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

