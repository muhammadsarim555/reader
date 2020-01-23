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

router.post("/bookInfo", upload.single("bookFile"), (req, res, next) => {
  console.log(req.file);

  const bookInfo = new Books({
    _id: new mongoose.Types.ObjectId(),
    bookName: req.body.bookName,
    bookDescription: req.body.bookDescription,
    // bookImage: req.file.bookImage,
    bookFile: req.file.path
  });

  bookInfo
    .save()
    .then(success => {
      console.log(success.bookFile, "file");

      const bookInfo = {
        message: "Book Info Uploaded Successfully",

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
});

router.get("/photos", (req, res) => {
  Books.find().then(s => console.log(JSON.stringify(s))).catch(e => console.log(e))
//   toArray((err, result) => {
//     const imgArray = result.map(element => element._id);
//     console.log(imgArray);

//     if (err) return console.log(err);
//     res.send(imgArray);
//   });
});

module.exports = router;
