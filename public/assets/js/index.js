

$(".search-btn").on("click", showMap);


function showMap() {
	// body... 

	var map_side= "<div class= 'col-sm-5' id= 'map_side'> <div>"
	var side_bar = "<div class= 'col-sm-7' id= 'side_bar'> <div>"


	var map = $('<div id="googleMap" style="width:100%;height:500px;"></div>');

	$("#map_side").html(map);

$("#map").html("");
	$("#map").append(map_side,side_bar);

	var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);


}