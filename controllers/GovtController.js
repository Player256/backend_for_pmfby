const FormModel = require('../models/Form');

const GovtController = async (req , res)=>{
    
    try {
        const govtDb = await FormModel.find({});
         res.status(201).json(govtDb);
    } catch (error) {
        res.status(404).json('Not Found');
    }
}

module.exports = GovtController;