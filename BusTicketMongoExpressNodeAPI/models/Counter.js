const mongoose = require('mongoose');

const CounterSchema = mongoose.Schema(

    {
        seqValue:
        {
            type: Number,
            required: true
        }
       
    }

)

module.exports = mongoose.model('Counter', CounterSchema,'counters')


