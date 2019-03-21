const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const GroupSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  description: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  members: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ]
});

module.exports = Group = mongoose.model("group", GroupSchema);
