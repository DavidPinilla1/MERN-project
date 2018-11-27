const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config").get(process.env.NODE_ENV);
const SALT_I = 10;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  name: {
    type: String,
    maxlength: 90
  },
  lastname: {
    type: String,
    maxlength: 90
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});
const User = mongoose.model("User", userSchema);
module.exports = { User };
