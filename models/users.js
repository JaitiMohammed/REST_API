const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema model

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is requires"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },

  // geo locaion
  // age
  // ....
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
