const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const projectRoutes = express.Router(); //router
require("dotenv/config");

const bodyParser = require("body-parser"); //for http post requests
const cors = require("cors"); //node js package to run expess server

// app.get("/",function(req,res) {
//     res.send("working");
// })


app.get("/", function(req, res) {
    App.find(function(err, todos) {
      if (err) {
        console.log(err);
      } else {
        res.json(todos);
      }
    });
  });


  


app.get("/posts",function(req,res) {
    res.send("iam inside posts");
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true}),()=>{
//     console.log("connected");
// };



app.listen(process.env.PORT || 7200)