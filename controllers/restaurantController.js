var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    res.redirect("/mostLiked");
});

router.get("/query/:query/location/:location", function(req, res) {
    console.log("wa");
    db.restaurant.findAll({
        where: {
            rest_name: {
                $like: '%' + req.params.query + '%'
            },
            rest_city: req.params.location
        }
    }).then(function(rest) {

        // console.log(rest[0].dataValues);


        if (rest.length < 20) {
            db.restaurant.findAll({
                where: {
                    rest_type: {
                        $like: '%' + req.params.query + '%'
                    },
                    rest_city: req.params.location
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

router.put("/burgers/update/:id", function(req, res) {
    var id = req.params.id;
    db.burgers.update(req.body, {
            where: {
                id: id
            }
        })
        .then(function(dbBurger) {
            res.redirect("/burgers");
        });

});

module.exports = router;