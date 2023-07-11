const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String, 
        match: /[A-F][1-9]\d?/,
        default: 'n/a'
    },
    price: {
        type: Number,
        min: 0,
        default: 'n/a'
    },
    flight:
        type: Schema.Types.ObjectId,
        ref: 'Flight',
        default: 'n/a'

})

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;