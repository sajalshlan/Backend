const http = require("http");
const fs = require("fs");
const { URL } = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/summer") {
    fs.readFile("./summer.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/winter") {
    fs.readFile("./winter.html", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.end(data);
      }
    });
  }
});

server.listen(8080, () => {
  console.log("server running at port 8080");
});
