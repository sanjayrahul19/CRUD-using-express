const mongoose = require("mongoose");

const User = mongoose.model("users", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  contact_no: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User;
