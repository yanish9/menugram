// npm install --save oauth
// npm install --save yelp


var Yelp = require('yelp');

var path = require('path'),
    fs = require('fs');


var busboy = require('connect-busboy');

var yelp = new Yelp({
    consumer_key: 'VK7j7uzsWhb6jMXrsylgag',
    consumer_secret: 'nFNLrxygkFAGMzpuYvhUdKTMIHc',
    token: 'Gv6cvi-eK0Q9oifWjs2JGNAzH9IlDC8P',
    token_secret: '8mI9b4HC6KB0IFkqo8xLrS0xMTk',
});


module.exports = function(app) {

        //...
        app.use(busboy());
        //...
        app.post('/file-upload', function(req, res) {
            var fstream;
            req.pipe(req.busboy);
            req.busboy.on('file', function(fieldname, file, filename) {
                console.log("Uploading: " + filename);
                fstream = fs.createWriteStream(__dirname + '/files/' + filename);
                file.pipe(fstream);
                fstream.on('close', function() {
                    res.redirect('back');
                });
            });
        });

        app.get("/query/:query/location/:location", function(req, res) {

            yelp.search({ term: req.params.query, location: req.params.location })
                .then(function(data) {
                    res.json(data);
                })
                .catch(function(err) {
                    console.error(err);
                });

        });

    }
    // See http://www.yelp.com/developers/documentation/v2/search_api 


// See http://www.yelp.com/developers/documentation/v2/business 


// A callback based API is also available: 
yelp.business('yelp-san-francisco', function(err, data) {
    if (err) return console.log(error);
    console.log(data);
});