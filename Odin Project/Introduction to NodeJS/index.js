const http = require("http");
const { URL } = require("url");
const fs = require("fs");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html" });
//     const q = url.parse(req.url, true).query;
//     const txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

//Now, my computer works as a server!
//If anyone tries to access my computer on port 8080, they will get a "hello world!" message in return!

// const options = {
//   hostname: "google.com",
//   port: 8080,
//   path: "/",
//   method: "GET",
// };

// http.request(options, (res) => {
//   console.log(`status code: ${res.statusCode} `);
// });

//write a program that reads both the html files and returns the content. a 404 if anything goes wrong.

// http
//   .createServer((req, res) => {
//     console.log(req.url);
//     const filename = "." + req.url + ".html";

//     fs.readFile(filename, (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-type": "text/html" });
//         return res.end("404 not found");
//       }

//       res.writeHead(200, { "Content-type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(3000);

const server = http.createServer((req, res) => {
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("server up and running at 3000");
});
