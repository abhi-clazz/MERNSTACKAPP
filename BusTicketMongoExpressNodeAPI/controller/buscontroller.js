
const Bus = require('../models/Bus')
const Counter = require('../models/Counter')




exports.AddRoute = async (req, res, next) => {
    const bus = new Bus(
        {
            Source:req.body.Source,
            Destination:req.body.Destination,
            Category:req.body.Category,
            Operator:req.body.Operator,
            Seats:req.body.Seats,
            Fare:req.body.Fare,
            JourneyDate:req.body.JourneyDate,
            ArrivalDate:req.body.arDate,Departure:req.body.dtime,Arrival:req.body.atime,
        })
        try{
            const saveStudent=await bus.save();
            res.json(saveStudent);
        }
        catch(err)
        {
            res.json({msg:err})
    }
    
}

exports.getBusSeat = async (req, res, next) => {
    console.log("Welcome3")
    try{
        console.log(req.query)
        const bus=await Bus.find({Source:req.query.source,Destination:req.query.destination,JourneyDate:req.query.journeyDate});
        res.json(bus);
        console.log(bus)
    }
        catch(err)
        {
            console.log(err)
            res.json({msg:err})
    }}
    exports.getBusSeat1 = async (req, res, next) => {
        console.log("Welcome3")
        try{
            console.log(req.params)
            const bus=await Bus.find({Source:req.params.s,Destination:req.params.s1,JourneyDate:req.params.s2});
            res.json(bus);
            console.log(bus)
        }
            catch(err)
            {
                console.log(err)
                res.json({msg:err})
        }}
    exports.updateSeats=async(req,res,next)=>
    {try
        {
            console.log(req.body)
     const bus=  await Bus.findOneAndUpdate({_id:req.body.bidd},{$inc:{Seats:-req.body.c1}})
     res.json(bus);

     console.log(bus)
    }
    catch(err)
    {
        console.log(err)
        res.json({msg:err})
    }}
    exports.getRoutes = async (req, res, next) => {
        console.log("Welcomeok")
        try{
            const bus=await Bus.find();
            console.log(bus)
            res.json(bus);
        }
            catch(err)
            {
                console.log(err)
                res.json({msg:err})
        }}