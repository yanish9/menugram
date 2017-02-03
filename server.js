var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var busboy = require('connect-busboy');

var port = 8080;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(express.static(process.cwd() + "/images"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
app.use(busboy());

// Set Handlebars.


// Import routes and give the server access to them.
//var routes = require("./controllers/restaurantController.js");


require("./routes/html-routes.js")(app);

//require("./routes/api-routes.js")(app);


var routes = require("./controllers/restaurantController.js");
app.use("/", routes);


var db = require("./models");

db.sequelize.sync({ force: true }).then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
        //require("./data.js")(db);
    });
});