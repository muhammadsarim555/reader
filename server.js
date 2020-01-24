// const http = require("http");
// const app = require("./app");

// const port = process.env.port || 3000;
// const server = http.createServer(app);

// server.listen(port, () => {
//   console.log("Server connected to localhost!");
// });
const express = require('express');

const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});