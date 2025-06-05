// // import { createServer } from 'node:http';
// const { createServer } = require('node:http');

// const server = createServer((req, res) => {
//     res.end('Hello World!\n');
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })






// // const { createServer } = require('node:http');
// // const { parse } = require('node:url');
// const { createServer } = require('http');
// const { parse } = require('url');

// const server = createServer((req, res) => {
//     const url = parse(req.url, true);
//     const method = req.method;

//     if (method === 'GET' && url.pathname === '/api') {
//         console.log("abhi")
//         res.end(JSON.stringify({ message: 'Welcome to the API' }));
//     }
//     else {
//         res.statusCode = 404;
//         res.end(JSON.stringify({ error: 'Not found' }));
//     }

//     res.end('Hello World! abhi\n');  // we don't use res.end two times
// });

// server.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })



const express = require("express");
const router = express.Router();
const User = require("../models/User")
const { signup, login } = require("../controllers/user.controller")

router.post("/register",signup)
router.post("/login", login)

router.get("/api", (req, res) => {
    res.send("Hello from user route")
})

module.exports=router









