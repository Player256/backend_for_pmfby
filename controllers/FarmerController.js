const FarmerModel = require('../models/Farmer');

const FarmerController = async (req , res)=>{
    const newFarmer = new FarmerModel(req.body);
    try{
        await newFarmer.save();
        res.status(200).json(newFarmer);
    }
    catch(err){
        res.status(404).json('Error');
    }

}

module.exports = FarmerController;