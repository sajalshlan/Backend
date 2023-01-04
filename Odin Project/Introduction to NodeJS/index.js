const http = require("http");
const { URL } = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request is made");
  console.log(req.url);
});

server.listen(8080, () => {
  console.log("listening to your bs");
});

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
//     const q = new URL(req.url);
//     const filename = "." + q.pathname;

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
//   .listen(8080);
