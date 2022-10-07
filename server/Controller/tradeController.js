const Trade = require("../Model/tradeSchema")


exports.addTrade = async (req,res) =>{

    try {
        const trade = await Trade.create(req.body)
        return res.status(201).json({success:"adding successful",trade});
        
    } catch (error) {
        console.log('error'+error)
    }
}


exports.getAll = async (req,res) =>{
    try {
        const trades = await Trade.find();
        return res.status(200).json({success:"getting all data",trades})
        
    } catch (error) {
        console.log("error"+error)
    }
}