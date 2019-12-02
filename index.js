// import express from "express"
//old way

// node way to import
const express = require('express'); // CommonJS Modules

//grabing hubs-model file

const db = require('./data/hubs-model') 

const server = express();

server.get('/', (req, res) => {
    res.send({ api: 'up and running...'})
})

// list of hubs

server.get('/hubs', (req, res) => {
    // get the list of hubs from the database
    db.find()
    
    .then(hubs => {
        res.status(200).json(hubs);
    })
    
    
    .catch( error => {
        console.log('error on GET /hubs', error);
        res.status(500).json({ errorMessage: 'error getting list of hubs from database'})
    })
})



// add a hub

server.post('/hubs', (req, res) => {
    // get the data the client sent
})



// remoove a hub by it's id

// update a hub,




const port = 4000
server.listen(port, () => console.log(`\n API running on port ${port} ##\n`)
);