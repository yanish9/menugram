// npm install --save oauth
// npm install --save yelp


var Yelp = require('yelp');

var yelp = new Yelp({
    consumer_key: 'VK7j7uzsWhb6jMXrsylgag',
    consumer_secret: 'nFNLrxygkFAGMzpuYvhUdKTMIHc',
    token: 'Gv6cvi-eK0Q9oifWjs2JGNAzH9IlDC8P',
    token_secret: '8mI9b4HC6KB0IFkqo8xLrS0xMTk',
});


module.exports = function(app) {



        app.get("/query/:query/location/:location", function(req, res) {

            yelp.search({ term: req.params.query, location: req.params.query })
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
yelp.business('yelp-san-francisco')
    .then(console.log)
    .catch(console.error);

yelp.phoneSearch({ phone: '+15555555555' })
    .then(console.log)
    .catch(console.error);

// A callback based API is also available: 
yelp.business('yelp-san-francisco', function(err, data) {
    if (err) return console.log(error);
    console.log(data);
});