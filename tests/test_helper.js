const Phone = require('../models/phone.js')

const initialPersons = [
    {
      name: "Shehryar",
      number: "6044464798"
    },
    {
      name: "John",
      number: "5140101122"
    }
  ];

const personsInDb = async () => {
    const persons = await Phone.find({})
    return persons.map(person => person.toJSON())
}

module.exports = {initialPersons, personsInDb}