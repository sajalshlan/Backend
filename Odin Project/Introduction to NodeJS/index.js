const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("hello world");
  })
  .listen(8080);

//Now, my computer works as a server!
//If anyone tries to access my computer on port 8080, they will get a "hello world!" message in return!

const options = {
  hostname: "google.com",
  port: 8080,
  path: "/",
  method: "GET",
};

http.request(options, (res) => {
  console.log(`status code: ${res.statusCode} `);
});
