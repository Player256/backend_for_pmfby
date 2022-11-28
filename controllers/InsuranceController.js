// const InsuranceModel = require('../models/InsuranceCompany');
const FarmerModel  =  require('../models/Farmer');

const clientDetails = (req , res) => {
    const {companyName} = req.body;

    InsuranceModel
        .find({companyName})
        .populate({path :'clients',match : {companyName : companyName}} )
        .then((doc) => {
            res.status(200).json(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        })

}

module.exports = clientDetails;