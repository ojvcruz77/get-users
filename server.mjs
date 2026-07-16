import http  from "node:http";

http.createServer((req, res) => {
    res.end('Hello Client');
}).listen(3000);

