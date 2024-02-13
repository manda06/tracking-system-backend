module.exports = (app) => {
    const lease = require("../controllers/lease.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new lease
    router.post("/", [authenticate], lease.create);
  
    // Retrieve all lease
    router.get("/", [authenticate], lease.findAll);
  
    
    // Retrieve a single lease with id
    router.get("/:id", [authenticate], lease.findOne);
  
    // Update a lease with id
    router.put("/:id", [authenticate], lease.update);
  
    // Delete a lease with id
    router.delete("/:id", [authenticate], lease.delete);
  
    // Delete all lease
    router.delete("/", [authenticate], lease.deleteAll);
  
    app.use("/asset/t5/lease", router);
  };