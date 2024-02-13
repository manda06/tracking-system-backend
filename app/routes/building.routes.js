module.exports = (app) => {
    const building = require("../controllers/building.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new building
    router.post("/", [authenticate], building.create);
  
    // Retrieve all buildings
    router.get("/", [authenticate], building.findAll);
  
    
    // Retrieve a single building with id
    router.get("/:id", [authenticate], building.findOne);
  
    // Update a building with id
    router.put("/:id", [authenticate], building.update);
  
    // Delete a building with id
    router.delete("/:id", [authenticate], building.delete);
  
    // Delete all buildings
    router.delete("/", [authenticate], building.deleteAll);
  
    app.use("/asset/t5/building", router);
  };