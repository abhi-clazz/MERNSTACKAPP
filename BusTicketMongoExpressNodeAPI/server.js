const express = require('express')
const mongoose=require('mongoose')
const app = express();
const router = require('./routes/busrouter')
const router1 = require('./routes/userrouter')
const router3 = require('./routes/guestrouter')



const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(require('./middleware/auth'))
app.use('/busticketing', router)
app.use('/registration', router1)
app.use('/bus', router3)

app.use('/login', require('./controller/logincontroller'))
app.use('/oplogin', require('./controller/operatorcontroller'))

       
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost/Buses_DB'

mongoose.connect(url, {useNewUrlParser:true,useUnifiedTopology: true})

app.listen(4000, () => console.log('server running'))