// users.js

const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/telegram20");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  bio:String,
  lastname:String,
  profileImage:String,
  socketId: String,
  friends: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user"
  }],

});

userSchema.plugin(plm);
module.exports = mongoose.model("user", userSchema);
