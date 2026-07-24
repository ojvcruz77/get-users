import { findAllUsers } from "../services/user.service.js";

export function getAllUsers(res) {
    const users = findAllUsers();

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(users));
}