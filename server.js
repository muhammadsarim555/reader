const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const path = require("path");

// 
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(process.env.PORT || 3000, function() {
  console.log("Your node js server is running");
});
