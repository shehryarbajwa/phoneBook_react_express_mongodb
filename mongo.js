const mongoose = require('mongoose');

if (process.argv.length < 3){
    console.log('Give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://phonebook:${password}@cluster0-v9q68.mongodb.net/test?retryWrites=true&w=majority
`

mongoose.connect(url, {
    useNewUrlParser: true
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