require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const data_name = process.argv[3]
const data_number = process.argv[4]

const phoneSchema = new mongoose.Schema({
    name: String,
    number: Number
})

const Phone = mongoose.model('Phone', phoneSchema)

const phone_1 = new Phone({
    name: data_name,
    number: data_number
}) 

phone_1.save().then(response => {
    console.log(`Added ${data_name} ${data_number} to phoneBook`)
    mongoose.connection.close()
})

if (process.argv.length == 3){
    Phone.find({}).then(result => {
        result.forEach(note => {
          console.log(note)
        })
        mongoose.connection.close()
      })
}