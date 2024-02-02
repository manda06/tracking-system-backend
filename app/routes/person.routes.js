module.exports = (app) => {
  const persons = require("../controllers/person.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new person
  router.post("/", [authenticate], persons.create);

  // Retrieve all persons
  router.get("/", [authenticate], persons.findAll);

  // Retrieve all person for user
  router.get("/userTut/:userId", [authenticate], persons.findAllForPerson);

  // Retrieve a single person with id
  router.get("/:id", [authenticate], persons.findOne);

  // Update a person with id
  router.put("/:id", [authenticate], persons.update);

  // Delete a person with id
  router.delete("/:id", [authenticate], persons.delete);

  // Delete all person
  router.delete("/", [authenticate], persons.deleteAll);

  app.use("/accommodations-t5/persons", router);
};
