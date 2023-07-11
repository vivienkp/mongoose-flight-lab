const mongoose = require('mongoose');

const Schema = mongoose.Schema

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
    departs: Date,
}, {
    timestamps: true    
});

module.exports = mongoose.model('Flight', flightSchema);