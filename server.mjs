import http, { STATUS_CODES } from "node:http";

const users = [
    {
        nome: "João Victor",
        idade: 26,
        status: true
    },
    {
        nome: "Ana",
        idade: 32,
        status: true
    },
    {
        nome: "Luíza",
        idade: 28,
        status: false
    }
];


http.createServer((req, res) => {

    if (req.url === "/users") {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ message: 'Pge not found' }));
    }
}).listen(3000);

