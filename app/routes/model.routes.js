module.exports = (app) => {
    const model = require("../controllers/model.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Accommodation
    router.post("/", [authenticate], model.create);
  
    // Retrieve all model
    router.get("/", [authenticate], model.findAll);
  
    // Retrieve a single Accommodation with id
    router.get("/:id", [authenticate], model.findOne);

  
    
  
    // Update a Tutorial with id
    router.put("/:id", [authenticate], model.update);
  
    // Delete a Accommodation with id
    router.delete("/:id", [authenticate], model.delete);
  
    // Delete all model
    router.delete("/", [authenticate], model.deleteAll);
  
    app.use("/asset-t5/model", router);
  };