const express = require('express')
const router1 = express.Router();

const {AddUser} = require('../controller/usercontroller')

router1.route('/reguser').post(AddUser)

//router.route('/:id').delete(deleteCourse)

module.exports = router1;