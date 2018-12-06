const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  name: {
    type: String,
    required: true
  },

  text: { String, required: true }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
