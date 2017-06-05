

// call the packages
var express    = require('express');          // call express
var app        = express();
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o')
// configure app to use bodyParser()
// used to get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =====================================================================
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next){
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
})

// test route to make sure things work
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// REGISTER OUR ROUTES -------------------------------------------------
// all routes will be prefixed by /api
app.use('/api', router);


// START THE SERVER
// =====================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
