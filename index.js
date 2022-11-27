const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const AuthRouter = require("./routes/AuthRouter");
const FormSubmitRouter = require("./routes/FormSubmitRouter");
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
