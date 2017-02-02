var pathname = window.location.pathname; // Returns path only
var url = window.location.href;


var id = pathname.substring(pathname.lastIndexOf("/") + 1);



$.get("http://localhost:8080/res/" + id, function(res) {
    // body... 
    var coo;

    console.log(res);
    for (var i = 0; i < res.length; i++) {
        var col = $(' <div class="column">');
        var img = $('<img class="thumbnail" src = "' + res[i].img_url + '">')

        var h5 = $('<h5>' + '</h5>')

        col.append(img);

        $(".images_").append(col);
    }

});