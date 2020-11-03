const express = require("express");
const router = express.Router();

// models

const User = require("../models/users");

// get a list of users from the database

router.get("/users", (req, res, next) => {
  User.find({}).then((user) => {
    res.send(user);
  });
});
// add a new user to the database

router.post("/users", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send({
        error: err.message,
      });
    });
});
// update a user to the database
router.put("/users/:id", (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then(() => {
    User.findOne({ _id: req.params.id }).then((user) => {
      res.send(user);
    });
  });
});

// delete a user from database

router.delete("/users/:id", (req, res, next) => {
  User.findByIdAndDelete({ _id: req.params.id }).then((user) => {
    res.send(user);
  });
});
module.exports = router;
