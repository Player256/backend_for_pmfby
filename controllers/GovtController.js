const FarmerModel = require('../models/Farmer');

const GovtController = async (req , res)=>{
    const govtDb = await FarmerModel.find({});
    try {
        res.status(201).send(govtDb);
    } catch (error) {
        res.status(404).send('Not Found');
    }
}