const mongoose = require("mongoose");

const GovtSchema = mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  farmerName: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  insuranceCompanies: { type: mongoose.Schema.Types.ObjectId, ref: "Farmer" },
});

const GovtModel = mongoose.model("Govt", GovtSchema);

module.exports = GovtModel;
