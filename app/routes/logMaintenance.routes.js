module.exports = (app) => {
    const logMain = require("../controllers/logMaintenance.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new course
    router.post("/", [authenticate], logMain.create);
  
    // Retrieve all course
    router.get("/", [authenticate], logMain.findAll);
  
    // Retrieve all course for user
    router.get("/logMain/:assetId", [authenticate], logMain.findAllForLogMain);
  
    // Retrieve a single Course with id
    router.get("/:id", [authenticate], logMain.findOne);
  
    // Update a course with id
    router.put("/:id", [authenticate], logMain.update);
  
    // Delete a course with id
    router.delete("/:id", [authenticate], logMain.delete);
  
    // Delete all course
    router.delete("/", [authenticate], logMain.deleteAll);
  
    app.use("/asset-t5/logMain", router);
  };
  