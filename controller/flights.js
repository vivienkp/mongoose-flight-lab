const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    createDestination,
    delete: deleteFlight
};
//Get all flights
async function index(req, res) {
        const flights = await Flight.find({});
        res.render('flights/index', {title: 'All Flights', flights});
}

//Show a specific flight
async function show(req, res) {
    const flight = await Flight.findById(req.params.id).populate('destAirport');
    res.render('flights/show', {title:'Flight Detail',flight});
}

//Create a flight
async function create(req, res) {
    try {
        await Flight.create(req.body);
        //Always rediect after CRUDing data
        res.redirect('/flights');
    }   catch (err) {
        //Typicaly some sort of validation error
        console.log(err);
        res.status(500).send('Server Err');
    }
}
//Add destination
async function createDestination(req, res) {
    try{
        const flight = await Flight.findById(req.params.id);
        const {destAirport, arrival} = req.body;
        flight.destinations.push({airport:destAirport, arriva});
        await flight.save();
        res.redirect(`/flights/${flight._id}`);
    }
}

//Delete a flight
async function deleteFlight(req, res) {
    try{
        await Flight.findByIdAndDelete(req.params.id);
        res.redirect('/flights');
    }
}

