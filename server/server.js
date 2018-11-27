const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const config = require("./config/config").get(process.env.NODE_ENV);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  config.DATABASE,
  { useNewUrlParser: true }
);

const { User } = require("./models/user");
const { Book } = require("./models/book");

app.use(bodyParser.json());
app.use(cookieParser());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server runing at port ${port}`));
