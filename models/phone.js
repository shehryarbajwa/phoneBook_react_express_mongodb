require('dotenv').config()
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const phoneSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  number: { type: Number, minlength: 8 ,required: true, unique: true}
});
phoneSchema.plugin(uniqueValidator);

//Convert ID object of mongoose to a string.
//Mongoose inbuilt transform method converts objects to string, or string to objects
//Delete id and v for passing easier looking UI to front-end

phoneSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Phone", phoneSchema);