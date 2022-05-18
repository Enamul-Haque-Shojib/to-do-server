const express = require('express');
require('dotenv').config();
// var jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId; 
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
  
  app.listen(port, () => {
    console.log('Listening to port', port);
  })
  