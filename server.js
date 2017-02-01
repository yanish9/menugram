var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/restaurantController.js");


require("./routes/html-routes.js")(app);

app.use("/", routes);

var db = require("./models");

db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
        db.restaurant.bulkCreate([
        {
        rest_id:4,
        rest_name:"Hawkers Asian Street Fare",
        rest_long:-81.364201,
        rest_lat:28.5606620,
        rest_city:"Orlando"
        },
        {
        rest_id:6,
        rest_name:"Black Bean Deli",
        rest_long:-81.357469,
        rest_lat:28.553427,
        rest_city:"Orlando"
        },
        {
        rest_id:2,
        rest_name:"Mellow Mushroom",
        rest_long:-81.209889,
        rest_lat:28.566529,
        rest_city:"Orlando"
        },
        {
        rest_id:3,
        rest_name:"Hubbly Bubbly Falafel Shop",
        rest_long:-81.39014,
        rest_lat:28.582772,
        rest_city:"Orlando"
        },
        {
        rest_id:5,
        rest_name:"Dandelion Communitea Cafe",
        rest_long:-81.365709,
        rest_lat:28.552025,
        rest_city:"Orlando"
        },
        {
        rest_id:1,
        rest_name:"Santiago's Bodega",
        rest_long:-81.367146,
        rest_lat:28.5639,
        rest_city:"Orlando"
        }
        ]);
    });
});