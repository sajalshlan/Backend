const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./views/";

  res.setHeader("Content-type", "text/html");

  switch (req.url) {
    case "/":
      path = path + "about.html";
      break;
    case "/about":
      path = path + "about.html";
      break;
    default:
      path = path + "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.statusCode = 404;
      res.end(data);
    }
  });
});

server.listen(8080, () => {
  console.log("server running at port 8080");
});
