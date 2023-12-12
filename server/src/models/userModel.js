const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  registerType: {
    type: String,
    required: [true, "Register type is required."],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minlength: [3, "Name must be at least 3 characters."],
  },
  gender: {
    type: String,
    required: [true, "Gender is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    trim: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: (v) => {
        return /^\S+@\S+\.\S+$/;
      },
      message: "Email validation failed",
    },
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
  },
  phone: {
    type: String,
    trim: true,
    // Add any additional validation for phone number if needed
  },
  division: {
    type: String,
    trim: true,
  },
  district: {
    type: String,
    trim: true,
  },
  upazila: {
    type: String,
    trim: true,
  },
  union: {
    type: String,
    trim: true,
  },
  preferredArea: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must be at least 6 characters."],
    set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
  },
},{timestamps: true});

const UserModel = model("Users", userSchema);

module.exports = UserModel;
