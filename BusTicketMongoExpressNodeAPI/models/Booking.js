const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema(

    {
     
        Name:
        {
            type: String,
            required: true
        },
        p1:
        {
            type: String
        },
        g1:
        {
            type: String
        }, g2:
        {
            type: String
        }, g3:
        {
            type: String
        },
        p2:
        {
            type: String
        }, Contact:
        {
            type: Number,
            required: true
        },
        Destination:{ type: String,
            required: true},Source:{ type: String,
            required: true},
        Email:
        {
            type: String,
            required: true
        },
        Service_Id:
        {
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        }, ArrivalDate:
        {
            type: String,
            required: true
        },
        Departure: {
            type: String,
            required: true
        },Category:
        {
            type: String,
            required: true
        }, Operator:
        {
            type: String,
            required: true
        },
        Arrival: {
            type: String,
            required: true
        },
        User_ID:
        {
            type: String,
            required: true
        },
        Seat:
        {
            type: String,
            required: true
        },
       Fare: {
        type: Number,
        required: true
    },
    JourneyDate:{
        type:String,required:true
    }
    }

)

module.exports = mongoose.model('Booking', BookingSchema)


