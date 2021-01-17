const mongoose = require('mongoose');

const BusSchema = mongoose.Schema(

    {
     
        Category:
        {
            type: String,
            required: true
        }, Operator:
        {
            type: String,
            required: true
        },
        Source:
        {
            type: String,
            required: true
        },
        JourneyDate:
        {
            type: String,
            required: true
        },
        ArrivalDate:
        {
            type: String,
            required: true
        },
        Departure: {
            type: String,
            required: true
        },
        Arrival: {
            type: String,
            required: true
        },
        Destination:
        {
            type: String,
            required: true
        },
        Seats:
        {
            type: Number,
            required: true
        },
       Fare: {
        type: Number,
        required: true
    }
    }

)

module.exports = mongoose.model('Bus', BusSchema)


