const express = require("express");
const router = express.Router();

const Users = require("../../models/users");

router.post("/signup", (req, res, next) => {
  Users.find({ phoneNumber: req.body.phoneNumber }).then(user => {
    if (user.length >= 1) {
      return res.status(409).json({ message: "Number Already Exist!" });
    } else {
      const user = new Users({
        _id: req.body.phoneNumber,
        phoneNumber: req.body.phoneNumber,
        name: req.body.name
      });
      user
        .save()
        .then(s => res.status(200).json(s))
        .catch(e => res.status(500).json({ error: e }));
    }
  });
});

router.post("/login", (req, res, next) => {
  Users.find({ phoneNumber: req.body.phoneNumber }).then(user => {
    if (user.length >= 1) {
      return res.status(200).json({ message: "login success", currentUser: user });
    } else {
      const user = new Users({
        _id: req.body.phoneNumber,
        phoneNumber: req.body.phoneNumber,
        name: req.body.name
      });
      res.status(400).json({ status: "login failed" });
    }
  });
});

module.exports = router;
