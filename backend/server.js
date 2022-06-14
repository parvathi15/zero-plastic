const express = require("express");
const app = express();
const mongoose = require("mongoose");
const projectRoutes = express.Router(); //router
const fileRoutes = require("./routes/file-upload-routes.js");
const path = require("path");
require("dotenv/config");

const bodyParser = require("body-parser"); //for http post requests
const cors = require("cors"); //node js package to run expess server
app.use(cors());
app.use(bodyParser.json());
// app.get("/",function(req,res) {
//     res.send("working");
// })


//defining routes for api
const App = require("./models/app.model.js");
projectRoutes.route("/add").post(function(req, res) {
  let data = new App(req.body);
  data
    .save()
    .then(data => {
      res.status(200).json({ data: "Data added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding data failed");
    });
});

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

app.use("/projects", projectRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", fileRoutes.routes);



app.listen(process.env.PORT || 7200)