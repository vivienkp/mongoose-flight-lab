const mongoose = require('mongoose');

const Schema = mongoose.Schema

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN','ATL'],
    },
    arrival: Date, 
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta']
    },
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN','LAX','SAN','ATL']
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 999,
    }, 
    departs: {
        type: Date,
        default: function() {
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() +1);
            return oneYearFromNow;
        }
    },
    destinations: [destinationSchema]
}, {

    timestamps: true    
});

module.exports = mongoose.model('Flight', flightSchema);