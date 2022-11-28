const mongoose = require("mongoose");

const FarmerSchema = mongoose.Schema({
  farmerName: {
    type: String,
    required: true
  },
  LandSize: {
    type: String,
    required: true,
  },
  insuranceCompany: {
    type: String,
    required: true
  },
  cropType : {
    type : String,
    required: true,
  }
 
});

const FarmerModel = mongoose.model("Farmer", FarmerSchema);

module.exports = FarmerModel;
