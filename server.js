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
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
//var routes = require("./controllers/restaurantController.js");


//require("./routes/html-routes.js")(app);

<<<<<<< HEAD
//require("./routes/api-routes.js")(app);

app.use("/", routes);
=======
//app.use("/", routes);
>>>>>>> 51b9f41d39ec42d7d74c037bf708636a0b7cf8cf

var db = require("./models");

db.sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log("App listening on PORT " + port);
        require("./data.js")(db);
    });
});