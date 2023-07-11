var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

// GET /flights/new
router.get('/new', flightsCtrl.new);

//POST route for /flights
router.post('/', flightsCtrl.create);

//GET route for /movies index (all movies)
router.get('/', flightsCtrl.index)

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;
