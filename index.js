const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/api");

// set up express app

const app = express();

// middleware
app.use(bodyParser.json());

// connect to MongoDb

const uri =
  "mongodb+srv://AdminDB:Admin@restapi.5nrfn.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// error Handling middlware

// routes localhost:5000/users
app.use(routes);
// listen for requests

app.listen(process.env.PORT || 5000, () => {
  console.log("Now listening for requests on");
});
