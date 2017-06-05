

// call the packages
var express    = require('express');          // call express
var app        = express();
var bodyParser = require('body-parser');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://noding:nodetest1@ds163721.mlab.com:63721/node-testing');
// configure app to use bodyParser()
// used to get data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;    // set port to 8080

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

// more routes for our API will happen here

// on routes that end in /bears
// ---------------------------------------------------------------------
router.route('/bears')

  // create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function(req, res) {

    var bear = new Bear();      // create a new instance of the Bear model
    bear.name = req.body.name;  // set the bears name (comes from the request)

    // save the bear and check for errors
    bear.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Bear created!' });
    });

  });

// REGISTER OUR ROUTES -------------------------------------------------
// all routes will be prefixed by /api
app.use('/api', router);


// START THE SERVER
// =====================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
