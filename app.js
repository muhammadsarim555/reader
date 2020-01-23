const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const users = require("./api/routes/mobileApp/users");
const addBooks = require("./api/routes/mobileApp/addBooks");

mongoose.connect("mongodb://sarim:sarim123@ds113063.mlab.com:13063/mytodo");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/uploads",express.static('uploads'))

app.use("/users", users);
app.use("/addBooks", addBooks);
// app.use("/addBooks", addBooks);


module.exports = app;
