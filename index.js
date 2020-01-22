const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const Phone = require("./models/phone.js")

//MiddleWare
const bodyParser = require("body-parser");
var morgan = require("morgan");


//MiddleWare Used
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'))

app.get("/api", (request, response) => {
  response.send("<p>Shehryar Bajwa </p>");
});

app.get("/api/persons", (request, response) => {
  Phone.find({})
  .then(person => {
    response.json(person);
  })
  .catch(error => {
    console.log(error);
    response.status(404).end();
  })
});


app.get("/api/info", (request, response) => {
  const date = Date(request.params.date);
  const greeting = "<p>PhoneBook has info for 4 people </p>";

  const body = greeting + date;

  response.send(body);
});

app.get("/api/persons/:id", (request, response) => {
  Phone.findById(request.params.id)
  .then(person => {
    response.json(person.toJSON());
  })
  .catch(error => {
    console.log(error);
    response.status(404).end()
  })
});


app.delete("/api/persons/:id", (request, response, next) => {
  Phone.findByIdAndRemove(request.params.id)
  .then(result => {
    response.send(request.params.id + ' was deleted')
    response.status(204).end()
  })
  .catch(error => next(error))
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(404).json({ error: "Name is missing" });
  }

  if (!body.number) {
    return response.status(404).json({ error: "Number is missing" });
  }

  const person = new Phone ({
    name: body.name,
    number: body.number
  });

  person.save().then(person => {
    response.json(person)
  })
  .catch(error => {
    response.status(404).end()
  })

});

const PORT = process.env.PORT
app.listen(PORT);
console.log(`Server running on port, ${PORT}`);
