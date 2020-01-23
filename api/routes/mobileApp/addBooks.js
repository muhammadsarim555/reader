const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");

const Books = require("../../models/addBooks");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post(
  "/bookInfo",
  upload.fields([
    { name: "bookFile", maxCount: 1 },
    { name: "bookImage", maxCount: 1 }
  ]),
  (req, res, next) => {
    const bookInfo = new Books({
      _id: new mongoose.Types.ObjectId(),
      bookName: req.body.bookName,
      bookDescription: req.body.bookDescription,
      bookFile: req.files["bookFile"][0].path,
      bookImage: req.files["bookImage"][0].path
    });

    bookInfo
      .save()
      .then(success => {
        const bookInfo = {
          message: "Book Info Uploaded Successfully",
          data: {
            bookName: success.bookName,
            bookFile: success.bookFile,
            bookImage: success.bookImage,
            bookDescription: success.bookDescription
          },

          request: {
            type: "POST",
            uri: "localhost:3000/booksInfo "
          }
        };
        res.status(200).json({
          bookInfo
        });
      })
      .catch(err => res.status(400).json({ error: err }));
  }
);

router.get("/photos", (req, res) => {
  Books.find()
    .then(s => res.status(200).json(s))
    .catch(e => console.log(e));
});

router.delete("/removeAll", (req, res) => {
  Books.remove()
    .then(s => res.status(200).json({ message: "All Data Has Been Removed!" }))
    .catch(e => res.status(400).json({ message: "Something Went Wrong!" }));
});

module.exports = router;
