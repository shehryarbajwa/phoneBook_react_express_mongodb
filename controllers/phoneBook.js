const phoneRouter = require('express').Router()
const Phone = require('../models/phone.js')

phoneRouter.get('/:id', (request, response, next) => {
  Phone.findById(request.params.id)
    .then(person => {
      response.json(person.toJSON())
    })
    .catch(error => next(error))
})

phoneRouter.delete('/:id', (request, response, next) => {
  Phone.findByIdAndRemove(request.params.id)
    .then(() => {
      response.send(request.params.id + 'was deleted')
      response.status(204).end()
    })
    .catch(error => next(error))
})

phoneRouter.post('/', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(404).json({ error: 'Name is missing' })
  }

  if (!body.number) {
    return response.status(404).json({ error: 'Number is missing' })
  }

  const person = new Phone({
    name: body.name,
    number: body.number
  })

  person
    .save()
    .then(person => {
      response.json(person)
    })
    .catch(error => console.log(error))
});

phoneRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Phone.findByIdAndUpdate(request.params.id, person)
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})
