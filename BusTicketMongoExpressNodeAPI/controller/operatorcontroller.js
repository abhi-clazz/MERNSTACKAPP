//const con = require('../configuration/mysql-config')
const secretkey = require('../secret.key')
const jwt = require('jsonwebtoken')
const Operator = require('../models/Operator')

module.exports = (req, res) => {
  Operator.findOne({ username: req.body.username }, (error, username) => {
      if (error) {
        console.log(error)

      } else {
        if (!username) {
            console.log("No user Found")

        } else if (username.password !== req.body.password) {
          //console.log("Invalid Credentials")
          const msg="Invalid Credentials"
          res.json({ msg })
        } else {
            console.log("Success...Generating Auth Token")
            const payload = {
                sub: username.username,
                iat: Date.now()
            }

            const token = jwt.sign(payload, secretkey);
            res.json({ token:token,idd:payload.sub })
        }
      }})}