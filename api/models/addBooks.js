const mongoose = require("mongoose");

const bookInfoSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  bookName: { required: true, type: String },
  bookDescription: { required: true, type: String },
  bookImage: { type: String},
  bookFile: { type: String}
});

module.exports = mongoose.model("BooksInfo", bookInfoSchema);
