const mongoose = require('mongoose');


const descSchema = new mongoose.Schema({
    
})

const tradeSchema = new mongoose.Schema({
    trade_data:{
        type:String,
        require:true
    },
    desc:{
        base_unit:{type:String,require:true},
        quote_unit:{type:String},
        low:{type:String},
        high:{type:String},
        last:{type:String},
        type:{type:String},
        open:{type:String},
        volume:{type:String},
        sell:{type:String},
        buy:{type:String},
        at:{type:Number},
        name:{type:String},
    }
});

const Trade = mongoose.model('Trade',tradeSchema);
module.exports = Trade ;