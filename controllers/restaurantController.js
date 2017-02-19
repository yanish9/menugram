var express = require("express");

var router = express.Router();

var db = require("../models");

var path = require('path'),
    fs = require('fs');

var currentUser;




router.get("/getrestaurant/:id", function(req, res) {
    console.log(req.params);
    db.restaurant.findAll({
        where: { id: req.params.id }

    }).then(function(rest) {

        res.json(rest);
    });

});

router.get("/res/:id", function(req, res) {
    console.log(req.params.id);
    db.dish_img.findAll({
        where: {
            rest_dish_id: req.params.id
        }
    }).then(function(rest) {

        res.json(rest);
    });

})


router.get("/comments/dish/:id", function(req, res) {
    console.log(req.params.id);
    db.comment.findAll({
        where: {
            dishImgId: req.params.id
        }
    }).then(function(rest) {

        res.json(rest);
    });

})




router.get("/currentUserById/:id", function(req, res) {
    console.log(req.params.email);
    db.User.findAll({
        where: {
            id: req.params.id
        }
    }).then(function(rest) {

        res.json(rest);
    });

})


router.get("/currentUser/:email", function(req, res) {
    console.log(req.params.email);
    db.User.findAll({
        where: {
            user_email: req.params.email
        }
    }).then(function(rest) {

        res.json(rest);
    });

})



router.post("/comments/dish/:id", function(req, res) {
    //  console.log(req.params.comment);
    db.comment.create({ comment: req.body.comment, dishImgId: req.body.imgid, UserId: req.body.userid }).then(function(burger) {



    }).then(function(rest) {


        res.json(rest);
    });
});


router.get("/query/:query/location/:location", function(req, res) {
    console.log("wa");
    db.restaurant.findAll({
        where: {
            rest_name: {
                $like: '%' + req.params.query + '%'
            },
            rest_city: {
                $like: '%' + req.params.location + '%'

            }
        }
    }).then(function(rest) {

        // console.log(rest[0].dataValues);

        if (rest.length < 20) {
            db.restaurant.findAll({
                where: {
                    rest_type: {
                        $like: '% ' + req.params.query + ' %'
                    },
                    rest_city: {
                        $like: '% ' + req.params.location + ' %'

                    }

                }
            }).then(function(rest1) {
                for (var i = 0; i < rest1.length; i++) {
                    rest.push(rest1[i].dataValues);
                }
                res.json(rest);

            });
        } else {
            res.json(rest);
        }

    });
});


router.post("/createUser", function(req, res) {

    db.User.create({ name: req.body.name, username: req.body.username, user_email: req.body.email }).then(function(user) {


        //  res.redirect("/burgers");
    });
});



//...
router.post('/file-upload/:resid/user/:userid/:comment', function(req, res) {
    var fstream;
    var iduser = req.params.userid;
    console.log("wa" + iduser);

    req.pipe(req.busboy);

    req.busboy.on('file', function(fieldname, file, filename) {
        console.log("Uploading: " + filename);
        fstream = fs.createWriteStream('./images/' + filename);
        console.log('/' + filename);
        file.pipe(fstream);

        fstream.on('close', function() {

            console.log("upload1");
            //  var arr = ["Great  food", "Love it", "Its delicious", "Not so delicious but looks great", "WOW", "its okay", "I like itt :D"];
            //  var desc = arr[Math.round(Math.random() * arr.length)];

            db.dish_img.create({ user_id: req.params.userid, rest_dish_id: req.params.resid, img_url: '/' + filename, description: req.params.comment, createdAt: "2017-02-01 06:32:15", updatedAt: "2017-02-01 06:32:15" }).then(function(user) {

                res.redirect("/restaurant/" + req.params.resid);
                //  console.log(user);
            });
        });


    });
});



module.exports = router;