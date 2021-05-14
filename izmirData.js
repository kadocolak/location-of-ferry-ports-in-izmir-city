function initMap() {
var map = new google.maps.Map(document.getElementById("map"), {
   center : { lat: 38.42700588112389, lng: 27.155236810197746 } ,
   zoom: 10,
   disableDefaultUI: !0, scaleControl: !0, fullscreenControl: !0,
   clickableIcons: false
});
  $.getJSON("https://openapi.izmir.bel.tr/api/izdeniz/iskeleler", function (data) {
    for(var i=0;i<Object.keys(data).length;i++)
    {
      var lat = data[i].Enlem;
	  var lng = data[i].Boylam;
	  var title = data[i].Adi;
	  marker = new google.maps.Marker({
	    position: { lat: lat , lng: lng },
		map: map,
		title: title
	  });
    }
 });
}
initMap();

