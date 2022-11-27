const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const AuthRouter = require("./routes/AuthRouter");
const FormSubmitRouter = require("./routes/FormSubmitRouter");
const InsuranceRouter = require("./routes/InsuranceRouter"); 
const GovtRouter = require("./routes/GovtRouter");
const FarmerDetailsRouter = require("./routes/FarmerDetailsRouter");
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = 3000 || process.env.PORT;

const mongourl = process.env.MONGOURL;

mongoose
  .connect(mongourl)
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.log("fuck"));

app.use("/user", AuthRouter);
app.use("/form", FormSubmitRouter);
app.use('/farmer',FarmerDetailsRouter)
app.use('/insurance',InsuranceRouter);
app.use('/govt',govtRouter);
