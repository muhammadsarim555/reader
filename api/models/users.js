// const mongoose = require("mongoose");
// const shortid = require('shortid');

// const usersSchema = mongoose.Schema({
//   _id: { type: Number, unique: true, default: shortid.generate() },
//   name: { type: String },
//   phoneNumber: { required: true, type: Number, unique: true }
// });

// module.exports = mongoose.model("Users", usersSchema);

const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  email: {
    required: true,
    type: String,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    unique: true
  },
  password: { required: true, type: String }
});

module.exports = mongoose.model("Users", usersSchema);
