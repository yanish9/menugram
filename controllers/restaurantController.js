var express = require("express");

var router = express.Router();

var db = require("../models");

var path = require('path'),
    fs = require('fs');




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
router.post("/burgers/create", function(req, res) {
    console.log(req.body);

    db.burgers.create({ burger_name: req.body.burger_name }).then(function(burger) {

        res.redirect("/");
    });

});

router.post("/createUser", function(req, res) {

    db.User.create({ name: req.body.name, username: req.body.username, user_email: req.body.email }).then(function(user) {


        //  res.redirect("/burgers");
    });
});



//...
router.post('/file-upload', function(req, res) {
    var fstream;

    req.pipe(req.busboy);


    req.busboy.on('file', function(fieldname, file, filename) {
        console.log("Uploading: " + filename);
        fstream = fs.createWriteStream('./images/' + filename);
        console.log('/' + filename);
        file.pipe(fstream);

        fstream.on('close', function() {

            console.log("upload1");
            db.dish_img.create({ user_id: 2, rest_dish_id: 7, img_url: '/' + filename, createdAt: "2017-02-01 06:32:15", updatedAt: "2017-02-01 06:32:15" }).then(function(user) {

                res.redirect("/back");
                console.log(user);
            });
        });


    });
});



module.exports = router;