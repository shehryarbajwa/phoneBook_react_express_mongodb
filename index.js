const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");

//MiddleWare
const bodyParser = require("body-parser");
var morgan = require("morgan");
import Phone from './models/phone.js'


//MiddleWare Used
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'))

app.get("/api", (request, response) => {
  response.send("<p>Shehryar Bajwa </p>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/info", (request, response) => {
  const date = Date(request.params.date);
  const greeting = "<p>PhoneBook has info for 4 people </p>";

  const body = greeting + date;

  response.send(body);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find(n => n.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }

  reponse.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.filter(p => p.id !== id);
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(404).json({ error: "Name is missing" });
  }

  if (!body.number) {
    return response.status(404).json({ error: "Number is missing" });
  }

  const name_exists = persons.find(p => p.name === body.name);

  if (name_exists) {
    return response.status(404).json({ error: "Name already exists" });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * Math.floor(100))
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT
app.listen(PORT);
console.log(`Server running on port, ${PORT}`);
