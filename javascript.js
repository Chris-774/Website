
"use strict" 

function initMap() {
  let Leicester = {lat: 52.6333, lng: -1.1333};
  let dmu = {lat: 52.629311, lng: -1.137836};
  let home = {lat: 51.051048, lng: 0.630622}; 
  let mapDemo = document.getElementById("map") 
				
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: Leicester
  });
	

	
  let markerDMU = new google.maps.Marker({
    position: dmu,
    map: map,
    title: 'My University'
  });
	
  let markerhome = new google.maps.Marker({
    position: home,
    map: map,
    title: 'My Hometown'
  });
}
	console.log("It makes it to the end, just doesn't work")

//window.onscroll = function() {myFunction()};
//
//let header = document.getElementById("nav-bar");
//let sticky = header.offsetTop;
//
//function myFunction() {
//  if (window.pageYOffset >= sticky) {
//    header.classList.add("sticky");
//  } else {
//    header.classList.remove("sticky");
//  }
//}

