const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

// get a list of ninjas from the database
router.get("/ninjas", (req, res, next) => {
  Ninja.find({}).then((ninjas) => {
    res.send(ninjas);
  });
});

// add a new ninjas tothe database
router.post("/ninjas", (req, res) => {
  //(next) for errors
  Ninja.create(req.body)
    .then((ninja) => {
      res.send(ninja);
    })
    .catch((err) => {
      res.send({
        error: err.message
      });
    }); // create a new ninja
});

// update  a ninjas to the database
router.put("/ninjas/:id", (req, res) => {
  Ninja.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Ninja.findOne({ _id: req.params.id }).then((ninja) => {
      res.send(ninja);
    });
  });
});

// delete a ninjas from database

//findByIdAndRemove is depreacted
router.delete("/ninjas/:id", (req, res, next) => {
  Ninja.findByIdAndDelete({ _id: req.params.id }).then((ninja) => {
    res.send(ninja);
  });
});

module.exports = router;
