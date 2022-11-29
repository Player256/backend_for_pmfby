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
  clients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Govt",
  }],
  expiryDate: {
    type: String,
    required: true,
  },
  enrollmentDate: {
    type: String,
    required: true,
  },
});

const InsuranceModel = mongoose.model("Insurance", insuranceCompanySchema);

module.exports = InsuranceModel;
