// const InsuranceModel = require('../models/InsuranceCompany');
const FarmerModel  =  require('../models/Farmer');

const farmerDetails = (req , res) => {
    const {insuranceCompany} = req.body;

    FarmerModel
        .find({insuranceCompany})
        .then((doc) => {
            res.status(200).send(doc);
        })
        .catch((err) => {
            res.status(500).send(err);
        })

}

module.exports = farmerDetails;