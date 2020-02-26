const phoneRouter = require("express").Router();
const Phone = require("../models/phone.js");
const User = require("../models/users.js");
const jwt = require("jsonwebtoken");

const getTokenFrom = request => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

phoneRouter.get("/", async (request, response, next) => {
  try {
    const person = await Phone.find({}).populate("user", { username: 1 });
    response.json(person.map(persons => persons.toJSON()));
  } catch (exception) {
    next(exception);
  }
});

phoneRouter.get("/:id", async (request, response, next) => {
  try {
    const person = await Phone.findById(request.params.id).populate("user", {
      username: 1
    });

    response.json(person.toJSON());
  } catch (exception) {
    next(exception);
  }
});

phoneRouter.delete("/:id", async (request, response, next) => {
  try {
    const person = await Phone.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

phoneRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const token = getTokenFrom(request);

  console.log('this is your token', token);
  

  if (!body.name) {
    return response.status(404).json({ error: "Name is missing" });
  }

  if (!body.number) {
    return response.status(404).json({ error: "Number is missing" });
  }

  try {
    
    const decodedToken = jwt.verify(token, process.env.SECRET)

    const user = await User.findById(decodedToken.id);

    console.log(user)

    const person = new Phone({
      name: body.name,
      number: body.number,
      user: user.id
    });

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: "token missing or invalid" });
    }

    const savedPerson = await person.save();
    user.contacts = user.contacts.concat(savedPerson.name);

    const result = await Phone.findById(savedPerson.id).populate("user", {
      username: 1
    });

    response.status(201).json(result.toJSON());
  } catch (exception) {
    next(exception);
  }
});

phoneRouter.put("/:id", async (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
    userId: body.userId
  };

  try {
    const updatePerson = await Phone.findByIdAndUpdate(
      request.params.id,
      person
    ).populate("user", { username: 1 });
    response.json(updatePerson.toJSON());
  } catch (exception) {
    next(exception);
  }
});

module.exports = phoneRouter;
