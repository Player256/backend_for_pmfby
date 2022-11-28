const FarmerModel = require('../models/Farmer');

const GovtController = async (req , res)=>{
    
    try {
        const govtDb = await FarmerModel.find({});
         res.status(201).json(govtDb);
    } catch (error) {
        res.status(404).json('Not Found');
    }
}

module.exports = GovtController;