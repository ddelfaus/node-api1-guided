// import express from "express"
//old way

// node way
const express = require('express'); // CommonJS Modules

const server = express();

server.get('/', (req, res) => {
    res.send({ api: 'up and running...'})
})


const port = 4000
server.listen(port, () => console.log(`\n API running on port ${port} ##\n`)
);