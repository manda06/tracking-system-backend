module.exports = (app) => {
    const assetStatus = require("../controllers/assetStaus.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new course
    router.post("/", [authenticate], assetStatus.create);
  
    // Retrieve all course
    router.get("/", [authenticate], assetStatus.findAll);
  
    // Retrieve all course for user
    router.get("/userTut/:userId", [authenticate], assetStatus.findAllForCourse);
  
    // Retrieve a single Course with id
    router.get("/:id", [authenticate], assetStatus.findOne);
  
    // Update a course with id
    router.put("/:id", [authenticate], assetStatus.update);
  
    // Delete a course with id
    router.delete("/:id", [authenticate], assetStatus.delete);
  
    // Delete all course
    router.delete("/", [authenticate], assetStatus.deleteAll);
  
    app.use("/accommodations-t5/assetStatus", router);
  };
  