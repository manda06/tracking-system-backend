module.exports = (app) => {
    const room = require("../controllers/room.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new room
    router.post("/", [authenticate], room.create);
  
    // Retrieve all buildings
    router.get("/", [authenticate], room.findAll);
  
    
    // Retrieve a single building with id
    router.get("/:id", [authenticate], room.findOne);
  
    // Update a building with id
    router.put("/:id", [authenticate], room.update);
  
    // Delete a building with id
    router.delete("/:id", [authenticate], room.delete);
  
    // Delete all buildings
    router.delete("/", [authenticate], room.deleteAll);
  
    app.use("/asset/t5/room", router);
  };