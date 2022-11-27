const FarmerModel = require('../models/Farmer');

const FarmerController = async (req , res)=>{
    const newFarmer = new FarmerModel(req.body);
    try{
        await newFarmer.save();
        res.status(200).send(newFarmer);
    }
    catch(err){
        res.status(404).send('Error');
    }

}

module.exports = FarmerController;