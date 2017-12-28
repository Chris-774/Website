      function initMap() {
        let uluru = {lat: -25.363, lng: 131.044};
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        let marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }



//window.onscroll = function() {myFunction()};
//
//let header = document.getElementById("nav-bar");
//let sticky = header.offsetTop;
//
//function myFunction() {
//	if (window.pageYOffset >= sticky) {
//		header.classList.add("sticky");
//	} else {
//		header.classList.remove("sticky");
//	}
//}

