module.exports = (app) => {
    const make = require("../controllers/make.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Accommodation
    router.post("/", [authenticate], make.create);
  
    // Retrieve all make
    router.get("/", [authenticate], make.findAll);
  

    // Retrieve a single Accommodation with id
    router.get("/:id", [authenticate], make.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", [authenticate], make.update);
  
    // Delete a Accommodation with id
    router.delete("/:id", [authenticate], make.delete);
  
    // Delete all make
    router.delete("/", [authenticate], make.deleteAll);
  
    app.use("/asset-t5/make", router);
  };