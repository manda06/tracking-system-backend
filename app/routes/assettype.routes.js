module.exports = (app) => {
    const asset = require("../controllers/assetType.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new assetType
    router.post("/", [authenticate], asset.create);
  
    // Retrieve all asset
    router.get("/", [authenticate], asset.findAll);
  
    // Retrieve a single assetType with id
    router.get("/:id", [authenticate], asset.findOne);
  
    // Update a assetType with id
    router.put("/:id", [authenticate], asset.update);
  
    // Delete a assetType with id
    router.delete("/:id", [authenticate], asset.delete);
  
    // Delete all assetType
    router.delete("/", [authenticate], asset.deleteAll);
  
    app.use("/asset-t5/assetType", router);
  };