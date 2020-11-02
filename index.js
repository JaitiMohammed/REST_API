const express = require("express");
const routes = require("./routes/api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// set up expresse app
const app = express();

//middelware
app.use(bodyParser.json());

// connect to MongoDB
const uri =
  "mongodb+srv://jaitiadmin:adminDB@mydatabase-egfbw.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// error handling middlware

/*
app.use((err, req, res, next) => {
  res.status(422).send({
    error: err.message
  });
});*/

// use routes
app.use(routes);

// listen for requests
app.listen(process.env.PORT || 4000, function() {
  console.log("now listening for requests ");
});
