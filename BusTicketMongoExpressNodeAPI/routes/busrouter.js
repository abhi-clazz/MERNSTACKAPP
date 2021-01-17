const express = require('express')
const router = express.Router();
const { getRoutes,getBusSeat,AddRoute,updateSeats } = require('../controller/buscontroller')
const {bookSeat,getSeats,getbookings} = require('../controller/bookingcontroller')
const {AddUser} = require('../controller/usercontroller')

router.route('/seats1').post(updateSeats) 
// router.route('/points').post(getPoints)
router.route('/seats').get(getBusSeat)
router.route('/booking').post(bookSeat)
router.route('/bookings/:id').get(getbookings)
router.route('/buses').post(AddRoute)
router.route('/aseats/:Service_Id').get(getSeats)
router.route('/routes').get(getRoutes)
router.route('/reguser').post(AddUser)

//router.route('/:id').delete(deleteCourse)

module.exports = router;