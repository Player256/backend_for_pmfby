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
    type: Number,
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
    type: Number,
    required: true,
  },
  //Identification
  idType: {
    type: String,
    required: true,
  },
  Id: {
    type: Number,
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
    type: Number,
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

const FormModel = mongoose.model("Form", FormSchema);

module.exports = FormModel;
