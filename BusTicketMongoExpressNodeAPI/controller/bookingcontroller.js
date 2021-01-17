const Booking=require('../models/Booking')
const mongoose=require('mongoose')


exports.bookSeat=async (req, res, next) => {
   console.log(req.body)
   console.log(req.body)
   console.log(req.body)

   var a=req.body.n; var b=req.body.Fare;
   console.log(b)
   var c=a*b;
    const booking = new Booking(
        {
            Name:req.body.Name,
            g1:req.body.g1,

            g2:req.body.g2,

            g3:req.body.g3,

            p1:req.body.p1,
            Category:req.body.Category,
            Operator:req.body.Operator,
            p2:req.body.p2,
            ArrivalDate:req.body.arDate,Departure:req.body.dtime,Arrival:req.body.atime,
            Email:req.body.Email,
            Contact:req.body.Contact,
            Service_Id:req.body.Service_Id,
            User_ID:req.body.User_ID,
            address:req.body.address,
            Seat:req.body.Seat,
            Fare:c,
            JourneyDate:req.body.JourneyDate,
            Source:req.body.Source,
            Destination:req.body.Destination


        })
        try{
            const savebooking=await booking.save();
            res.json(savebooking);
            console.log(savebooking)
        }
        catch(err)
        {            console.log(err)

            res.json({msg:err})
    }
    
}
exports.getSeats = async (req, res, next) => {
    console.log("Welcomeok")
    try{
     console.log(req.params)
        // console.log(req.body[0])
        // console.log(req.body[0].ok)
     
        const bus=await Booking.find({Service_Id:req.params.Service_Id},{Seat:1,_id:0})
        console.log(bus)
        res.json(bus);
    }
        catch(err)
        {
            console.log(err)
            res.json({msg:err})
    }}
    exports.getPoints = async (req, res, next) => {
        console.log("Welcomeok")
        try{
         console.log(req.body)
            // console.log(req.body[0])
            // console.log(req.body[0].ok)
         
            const bus=await Booking.find({City:req.body.City},{Point:1,_id:0})
            console.log(bus)
            res.json(bus);
        }
            catch(err)
            {
                console.log(err)
                res.json({msg:err})
        }}
    exports.getbookings = async (req, res, next) => {
        console.log("Welcomeok")
        try{
            // var ObjectId=require('mongodb').ObjectID;
            // var id=req.body.id
            // var o_id=new ObjectId(id)
            const ObjectId=mongoose.Types.ObjectId;

            console.log(req.params)
            const bus=await Booking.find({User_ID:req.params.id})
            console.log(bus)

            res.json(bus);
        }
            catch(err)
            {
                console.log(err)
                res.json({msg:err})
        }}