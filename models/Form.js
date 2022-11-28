const mongoose =  require('mongoose');

const FormSchema = mongoose.Schema({
  //personal details...
  farmerId: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  //Residential details
  State: {
    type: String,
    required: true,
  },
  District: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Pincode: {
    type: String,
    required: true,
  },
  //Identification
  idType: {
    type: String,
    required: true,
  },
  Id: {
    type: String,
    required: true,
  },
  //Banking details to be discussed
  BankName: {
    type: String,
    required: true,
  },
  BankBranchName: {
    type: String,
    required: true,
  },
  AccountNo: {
    type: String,
    required: true,
  },
  //Insurance Company,
  CompanyName : {
    type: String,
    required: true,
  }
},{
  timestamps : true,
});

const FormModel = mongoose.model("Govt", FormSchema);

module.exports = FormModel;
