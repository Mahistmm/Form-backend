const mongoose = require("mongoose");

const addpersonSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    user: String,
  },
  { timestamps: true }
);

const addperson = mongoose.model("addperson", addpersonSchema);

module.exports = addperson;
