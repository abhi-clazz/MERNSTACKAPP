//const con = require('../configuration/mysql-config')
const secretkey = require('../secret.key')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = (req, res) => {
    User.findOne({ username: req.body.username }, (error, username) => {
      if (error) {
        console.log("wronge")

      } else {
        if (!username) {
            console.log("wrongu")

        } else if (username.password !== req.body.password) {
          const msgu="Invaliddd Credentials"
          res.json({ msgu })
        } else {
            console.log(username)
            const payload = {
                sub: username._id,
                iat: Date.now()
            }
            const token = jwt.sign(payload, secretkey);
            res.json({ token:token,idd:payload.sub })
        }
      }})}
      