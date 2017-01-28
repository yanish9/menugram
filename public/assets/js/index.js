

$(".search-btn").on("click", showMap);


function showMap() {
	// body... 
	var map = $('<div id="googleMap" style="width:100%;height:500px;"></div>');

	$("#map").html(map);

	var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);


}