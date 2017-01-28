

$(document).on("click",".search-btn", showMap);


var web = '<section id="slider"> <div class="container"> <div class="row"> <div class="col-md-8 col-md-offset-2"> <div class="block"> <h1 class="animated name">MENUGRAM</h1> <p class="animated fadeInUp"><div class="row search-row"> <input type="text" name="" placeholder="Search..." id="input-search"> <input type="text" name="" placeholder="Location" id="input-location"> <br><br> <button id = "search-btn" class="btn btn-primary search-btn ">Search</button> </div></p> </div> </div> </div> </div> </section>';

function showMap() {
	// body... 

	var map_side= "<div class= 'col-sm-7' id= 'map_side'> <div>"
	var side_bar = "<div class= 'col-sm-5' id= 'side_bar'> <div>"


	var map = $('<div id="googleMap" style="width:100%;height:500px;"></div>');


$("#map").html("");
	$("#map").append(side_bar, map_side);


$("#side_bar").append('<i class="fa fa-arrow-left back" aria-hidden="true"></i>');
$("#map_side").append(map);


$(".back").on("click", displayMain);
	

	var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);


}


function displayMain () {
	

$("#map").html(web);
}


