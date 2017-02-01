var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res) {
    res.redirect("/mostLiked");
});

router.get("/query/:query/location/:location", function(req, res) {
    db.burgers.findAll({}).then(function(rest) {

        res.json(rest)

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