import http, { STATUS_CODES } from "node:http";
import { routerUser } from "./routers/user.router.js";

http.createServer((req, res) => {

    if (req.url === "/users") return routerUser(req, res);
    
    res.writeHead(404, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'Page not found' }));

}).listen(3000);

