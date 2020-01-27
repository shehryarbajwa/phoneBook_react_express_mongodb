const phoneRouter = require("express").Router();
const Phone = require("../models/phone.js");

phoneRouter.get("/", async (request, response, next) => {
  try {
    const person = await Phone.find({});
    response.json(person.map(persons => persons.toJSON()));
  } catch (exception) {
    next(exception);
  }
});

phoneRouter.get("/:id", async (request, response, next) => {
  try {
    const person = await Phone.findById(`/api/persons/${request.params.id}`);
    response.json(person.toJSON());
  } catch (exception) {
    next(exception);
  }
});

phoneRouter.delete("/:id", async (request, response, next) => {
  try{
    const person = await Phone.findByIdAndRemove(`/api/persons/${request.params.id}`)
    response.status(204).end()
  } catch(exception){
    next(exception)
  }
});

phoneRouter.post("/", async (request, response, next) => {
  const body = request.body;

  if (!body.name) {
    return response.status(404).json({ error: "Name is missing" });
  }

  if (!body.number) {
    return response.status(404).json({ error: "Number is missing" });
  }

  const person = new Phone({
    name: body.name,
    number: body.number
  });

  try {
    const savedPerson = await person.save()
    response.status(201).json(savedPerson.toJSON())
  } catch (exception) {
    next(exception)
  }
});

phoneRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number
  };

  try{
    const updatePerson = await Phone.findByIdAndUpdate(`/api/persons/${request.params.id}`, person)
    response.json(updatePerson.toJSON())
  } catch (exception) {
    next(exception)
  }
});

module.exports = phoneRouter;
