const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({

  name: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    },
  description: {
    type: String,
  },
  link: {
    type: String,
  }

  
})