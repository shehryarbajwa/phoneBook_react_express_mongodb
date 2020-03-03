const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/users.js");

usersRouter.post("/", async (request, response, next) => {
  try {
    const body = request.body;
    
    if (!body.username || !body.password) {
      response.status(400).json({
        error: "missing username or password"
      })};

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash
    });

    const userExists = await User.find({username : user.username})

    const savedUser = await user.save();

    response.json(savedUser.toJSON());
  } catch (exception) {
    next(exception);
  }
});

usersRouter.get('/', async (request, response, next) => {
    try {
      const allUsers = await User.find({})
        .populate("phone", { name: 1, number: 1 });
  
      return response.json(allUsers);
    } catch (exception) {
      next(exception);
    }
})

usersRouter.get('/:id', async (request, response, next) => {
  try {
    const userbyId = await User.findById(request.params.id)
      .populate("phone", { name: 1, number: 1 });
    return response.json(userbyId);
  } catch (exception) {
    next(exception);
  }
})

usersRouter.delete('/:id', async (request, response, next) => {
  try {
    const userbyId = await User.findByIdAndDelete(request.params.id)
    return response.json(userbyId);
  } catch (exception) {
    next(exception);
  }
})

module.exports = usersRouter;
