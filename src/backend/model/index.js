const mongoose = require("mongoose");
const validator = require("validator");
const modelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "please enter valid email"],
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("datauser", modelSchema);
