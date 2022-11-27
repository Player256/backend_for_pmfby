const mongoose = require("mongoose");

const insuranceCompanySchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyPassword: {
    type: String,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farmer",
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  enrollmentDate: {
    type: Date,
    required: true,
  },
});

const InsuranceModel = mongoose.model("Insurance", insuranceCompanySchema);

module.exports = InsuranceModel;
