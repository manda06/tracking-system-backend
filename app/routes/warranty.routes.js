module.exports = (app) => {
    const warranty = require("../controllers/warranty.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new warranty
    router.post("/", [authenticate], warranty.create);
  
    // Retrieve all warranty
    router.get("/", [authenticate], warranty.findAll);
  
    
    // Retrieve a single warranty with id
    router.get("/:id", [authenticate], warranty.findOne);
  
    // Update a warranty with id
    router.put("/:id", [authenticate], warranty.update);
  
    // Delete a warranty with id
    router.delete("/:id", [authenticate], warranty.delete);
  
    // Delete all warranty
    router.delete("/", [authenticate], warranty.deleteAll);
  
    app.use("/asset/t5/warranty", router);
  };