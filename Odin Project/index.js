const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("hello world");
  })
  .listen(8080);

const options = {
  hostname: "google.com",
  port: 8080,
  path: "/",
  method: "GET",
};

http.request(options, (res) => {
  console.log(`status code: ${res.statusCode} `);
});
