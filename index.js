const http = require("http");

http.createServer(function (request, response) {
    console.log("request received");
    response.end("omg hi", "utf-8");



}).listen(1337);
console.log("server started")