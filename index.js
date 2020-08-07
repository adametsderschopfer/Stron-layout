const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const _path = path.join.bind(this, __dirname);
const PORT = 3000;

app.use(express.static(_path("public")));

app.get("/", (req, res) => {
  return fs.readFile(_path("index.html"), (err, data) => {
    if (err) {
      return console.log(err);
    }
    
    return res.end(data);
  });
});

http.createServer(app).listen(PORT, () => {
  console.log("Server has been started!");
});
