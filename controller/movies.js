const Flight = require('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index
}

function index(req, res) {
    res.render('flights/index', {
        movies: Flight.getAll()
    })
}

async function create(req, res) {
//convert nowShowing's checkbox of nothing to "on" to boolean
    req.body.nowShowing = !!req.body.nowShowing;
    //remove any whitespace at stat and end of cast;
    req.body.cast = req.body.cast.trim();
    //split cast into an array if not an empty string
    if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    try {
        await Flight.create(req.body);
        //Always rediect after CRUDing data
        //We'll refactor to redirect the movies index after we implement it
        res.redirect('/flights');
    }   catch (err) {
        //Typicaly some sort of validation error
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
    }
}

