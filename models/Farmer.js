const mongoose = require("mongoose");

const FarmerSchema = mongoose.Schema({
  farmerName: {
    type: String,
    required: true
  },
  LandSize: {
    type: Number,
    required: true,
  },
  insuranceCompany: {
    type: String,
    required: true
  },
  expirationDate:{
    type : String,
    required: true,
  },
  enrollmentDate:{
    type : String,
    required: true,
  }
});

const FarmerModel = mongoose.model("Farmer", FarmerSchema);

module.exports = FarmerModel;
