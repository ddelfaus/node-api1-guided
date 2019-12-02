// import express from "express"
//old way

// node way to import
const express = require('express'); // CommonJS Modules

//grabing hubs-model file

const db = require('./data/hubs-model') 

const server = express();

server.use(express.json()); // <<<<<<<<<<<<<<<<<<<< needed to parse json form body

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
    const hubData = req.body; // express does not know how to parse JSON

    db.add(hubData)
    
    .then(hub => {
        res.status(201).json(hub);
    })
    .catch(error => {
        console.log("error on POST /hubs", error);
        res.status(500).json({errorMessage: "error adding the hub"})
    })
})



// remoove a hub by it's id

server.delete("/hubs/:id", (req, res) => {
    const id = req.params.id;
  
    db.remove(id)
      .then(removed => {
        if (removed) {
          res.status(200).json({ message: "hubs removed successfully", removed });
        } else {
          // there was no hub with that id
          res.status(404).json({ message: "hub not found" });
        }
      })
      .catch(error => {
        console.log("error on DELET /hubs/:id", error);
        res.status(500).json({ errorMessage: "error removing the hub" });
      });
  });

// update a hub,




const port = 4000
server.listen(port, () => console.log(`\n API running on port ${port} ##\n`)
);