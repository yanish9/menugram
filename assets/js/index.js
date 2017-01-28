	$( document ).ready(function() {
$("#search-btn").on("click", getMenu);

var menus = ["Chicken Burger", "Bacon Cheese Burger", "Steak", "Lasagna", "Steak ribs", "Ice Cream"];

function getMenu (){


for (var i =0 ; i < menus.length ; i++){

	var item = $('<a href="#" class="list-group-item active">'+ menus[i]+' </a>');

	$("#menu").append(item);
}

}