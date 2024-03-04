module.exports = (app) => {
  const person = require("../controllers/person.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new person
  router.post("/", [authenticate], person.create);

  // Retrieve all persons
  router.get("/", [authenticate], person.findAll);

  // Retrieve all person for user
  router.get("/userTut/:userId", [authenticate], person.findAllForPerson);

  // Retrieve a single person with id
  router.get("/:id", [authenticate], person.findOne);

  // Update a person with id
  router.put("/:id", [authenticate], person.update);

  // Delete a person with id
  router.delete("/:id", [authenticate], person.delete);

  // Delete all person
  router.delete("/", [authenticate], person.deleteAll);

  app.use("/asset-t5/person", router);
};
