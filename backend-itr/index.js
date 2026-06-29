console.log("hello");

const express = require("express");
const morgan=require("morgan");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    res.send("hello world");
});

server.get("/test", (request, response) => {
    response.json({ message: "hello world" });
});

server.listen(3000, () => {
    console.log("server is running");
});