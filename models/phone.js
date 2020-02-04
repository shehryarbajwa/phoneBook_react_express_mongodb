const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: Number,
    minlength: 8,
    required: true,
    unique: true
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});
phoneSchema.plugin(uniqueValidator);

//Convert ID object of mongoose to a string.

phoneSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Phone", phoneSchema);
