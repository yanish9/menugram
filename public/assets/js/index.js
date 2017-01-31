

$(document).on("click",".search-btn", showMap);


	 var markers = [];
var web = '<section id="slider"> <div class="container"> <div class="row"> <div class="col-md-8 col-md-offset-2"> <div class="block"> <h1 class="animated name">MENUGRAM</h1> <p class="animated fadeInUp"><div class="row search-row"> <input type="text" name="" placeholder="Search..." id="input-search"> <input type="text" name="" placeholder="Location" id="input-location"> <br><br> <button id = "search-btn" class="btn btn-primary search-btn ">Search</button> </div></p> </div> </div> </div> </div> </section>';

function showMap() {
	// body... 


var loc = $("#input-location").val();
var query = $("#input-search").val();
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


$.get("http://localhost:8080/query/"+query + "/location/"+loc , function (res){
	// body... 
	 var coo;
for (var i =0 ; i <res.businesses.length ; i++){

var lng = res.businesses[i].location.coordinate.longitude;
var lat = res.businesses[i].location.coordinate.latitude;

 coo = {label: i , lat:lat, lng:lng};
	var mark =  new google.maps.Marker({
          position: coo,
          map: map,
          id:i,
          title: 'Hello World!'
        });


markers.push(mark);

 google.maps.event.addListener(markers[i], 'mouseover', function(event) {
        var id= $(this)[0].id;
          $('#side_bar').animate({scrollTop : $("#"+id).position().top},100);
           $("#"+id).css({"background-color" : "white"},1000)
      });
      google.maps.event.addListener(coo, 'mouseout', function(event) {
          this.setIcon('http://www.christielakekids.com/_images/new/blue_circle.png');
      });


//var image =  res.businesses[i].snippet_image_url + "'>";
var div = $("<div class = 'res-list' id='"+i+"'>");
var title_ = "<h3 class='title' data-id='"+i+"'><a>"+res.businesses[i].name+"</a> </h3>";
var rating = "<h5 class='rating'>"+res.businesses[i].rating+" </h5>";
var rating1 = "<img src='"+res.businesses[i].rating_img_url_small+ "'>";;
div.append( title_, rating, rating1, "<hr>")
$("#side_bar").append(div);

}

  map.panTo(coo);
  map.setZoom(12);

  $(".res-list").hover(function(){
    var id = parseInt($(this).children().data("id"));

    markers[id].setIcon("http://maps.google.com/mapfiles/ms/icons/blue-dot.png");


    }, function(){ var id = parseInt($(this).children().data("id"));

    markers[id].setIcon("http://maps.google.com/mapfiles/ms/icons/red-dot.png");
});

console.log(res);
for (var i =0 ; i <res.businesses.length ; i++){

}



});

}


function displayMain () {
	

$("#map").html(web);
}


