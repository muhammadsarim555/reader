const mongoose = require("mongoose");
const shortid = require('shortid');

const usersSchema = mongoose.Schema({
  _id: { type: Number, unique: true, default: shortid.generate() },
  name: { type: String },
  phoneNumber: { required: true, type: Number, unique: true }
});

module.exports = mongoose.model("Users", usersSchema);
