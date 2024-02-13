module.exports = (app) => {
  const departments = require("../controllers/department.controller.js");
  const { authenticate } = require("../authorization/authorization.js");
  var router = require("express").Router();

  // Create a new department
  router.post("/", [authenticate], departments.create);

  // Retrieve all Departments
  router.get("/", [authenticate], departments.findAll);
 
  // Retrieve a single department with id
  router.get("/:id", [authenticate], departments.findOne);

  router.get("/userId/:userId", [authenticate], departments.getUserId);

  // Update a department with id
  router.put("/:id", [authenticate], departments.update);

  // Delete a Department with id
  router.delete("/:id", [authenticate], departments.delete);

  // Delete all departments
  router.delete("/", [authenticate], departments.deleteAll);

  app.use("/asset-t5/department", router);
};
