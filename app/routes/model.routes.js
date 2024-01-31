module.exports = (app) => {
    const asset = require("../controllers/model.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Accommodation
    router.post("/", [authenticate], asset.create);
  
    // Retrieve all asset
    router.get("/", [authenticate], asset.findAll);
  
    // Retrieve a single Accommodation with id
    router.get("/:id", [authenticate], asset.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", [authenticate], asset.update);
  
    // Delete a Accommodation with id
    router.delete("/:id", [authenticate], asset.delete);
  
    // Delete all asset
    router.delete("/", [authenticate], asset.deleteAll);
  
    app.use("/asset-t5/asset", router);
  };