import { getAllUsers } from "../controllers/user.controller.js";

export function routerUser(req,res) {
    if(req.method === 'GET') return getAllUsers(res)
}

