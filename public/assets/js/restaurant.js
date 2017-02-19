var pathname = window.location.pathname; // Returns path only
var url = window.location.href;


var id = pathname.substring(pathname.lastIndexOf("/") + 1);

var isLogin;

var currentImgId;

var currentUserID;

var currentuserName;

var commentChange = [];
var c;

$(document).on("click", ".thumbnail", showPicture);


$(document).on("click", ".send", sendComment);


$(document).on("click", "#uploadSubmitter", ok);


$(document).on("click", "#upload", showUploadModal);

var imgs = ["http://media.timeout.com/blogimages/wp-content/uploads/2014/03/7138287747_6fefd52f74_b-528x352.jpg",
    "http://www.insigniasteakhouse.com/wp-content/uploads/2012/04/Insignia-dining1.jpg", "http://www.skitownrestaurants.com/assets/Grub-Steak.jpg"
];

$.get("http://localhost:8080/getrestaurant/" + 1, function(res) {

    console.log("http://localhost:8080/getrestaurant/" + id);
    var img = $("<img style= 'margin-right:30px; width:200px; float:left;'> ")
    var ad = $("<div class='rating'>" + res[0].rest_city + " </div>");
    var name = $("<div style='font-size:50px;  font-weight: bold;'>" + res[0].rest_name + " </div>");
    var uploadBtn = '<h5> <button class="btn btn-primary" id="upload">Upload</button> </5>';
    img.attr("src", imgs[Math.round(Math.random() * imgs.length)]);
    $("#main-res").html(img);
    $("#main-res").append(name)
    $("#main-res").append(ad);
    $("#main-res").append(uploadBtn);
});


function showUploadModal() {
    $("#uploadModal").modal("show");
}


function ok() {

    $("#dropzoneArea").attr("action", "/file-upload/" + id + "/user/" + currentuserID + "/" + $("#de").val());
    console.log($("#dropzoneArea").attr("action"));

}

$(document).on("change", ".textarea", function() {
    commentChange.push($(".textarea").text());

});


function sendComment() {


    c = commentChange[commentChange.length - 2];

    console.log(c);
    $.post("http://localhost:8080/comments/dish/" + currentImgId, { comment: c, imgid: currentImgId, userid: currentuserID }, function(res) {



    });

}

function showPicture() {


    $("#imgModal").modal("show");
    console.log($(this).attr("src"));

    $("#image-preview").html("<img src='" + $(this).attr("src") + "'>");

    currentImgId = $(this).parent().data("id");
    console.log("show" + currentImgId);

    $.get("http://localhost:8080/comments/dish/" + $(this).parent().data("id"), function(res) {
        var responses = [];
        for (var i = 0; i < res.length; i++) {
            var name;
            $.get("http://localhost:8080/currentUserById/" + res[i].UserId, function(user) {

                name = user[0].name;
            });
            var obj = {
                id: res[i].id,
                created: res[i].createdAt,
                content: res[i].comment,
                fullname: name
            };
            responses.push(obj);
        }

        console.log(res);
        $('#comments-container').comments({
            getComments: function(success, error) {
                var commentsArray = responses;
                success(commentsArray);
            }
        });

    });

    if (isLogin) {


        $(".textarea-wrapper").css({ display: "block" });
    } else {


        //  $(".textarea-wrapper").css({ display: "none" });
    }
}


$.get("http://localhost:8080/res/" + id, function(res) {
    // body... 
    var coo;

    console.log(res);
    for (var i = 0; i < res.length; i++) {
        var col = $(' <div style="width:300px;" class=" col-md-3" data-id="' + res[i].id + '"> ');
        var img = $('<img style="width:300px;" class="thumbnail" src = "' + res[i].img_url + '">')

        var h5 = $('<h5 class="images-desc">"' + res[i].description + '"</h5>')

        col.append(img, h5);

        $(".images_").append(col);
    }

});

firebase.auth().onAuthStateChanged(function(user) {

    if (user === null) {

        isLogin = false;

    } else {


        $.get("http://localhost:8080/currentUser/" + firebase.auth().currentUser.email, function(res) {

            console.log(res);
            currentuserID = res[0].id;
            currentuserName = res[0].username;

        }).then(function() {

            console.log("id " + currentuserID);
            $("#dropzoneArea").attr("action", "/file-upload/" + id + "/user/" + currentuserID);


        });
        isLogin = true;

    }

});