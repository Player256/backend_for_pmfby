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
  .connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use("/user", AuthRouter);
app.use("/form", FormSubmitRouter);
app.use('/farmerDetails',FarmerDetailsRouter)
app.use('/insurance',InsuranceRouter);
app.use('/govt',GovtRouter);
