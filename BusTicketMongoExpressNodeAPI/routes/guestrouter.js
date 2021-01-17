const express = require('express')
const router3 = express.Router();
const { getRoutes,getBusSeat1,AddRoute,updateSeats } = require('../controller/buscontroller')
const {bookSeat,getSeats,getbookings} = require('../controller/bookingcontroller')
const {AddUser} = require('../controller/usercontroller')


router3.route('/seat').get(getSeats)
router3.route('/busseats/:s/:s1/:s2').get(getBusSeat1)


module.exports = router3;