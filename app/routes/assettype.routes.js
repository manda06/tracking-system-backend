module.exports = (app) => {
    const assetType = require("../controllers/assetType.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new assetType
    router.post("/", [authenticate], assetType.create);
  
    // Retrieve all assettype
    router.get("/", [authenticate], assetType.findAll);
  
    // Retrieve a single assetType with id
    router.get("/:id", [authenticate], assetType.findOne);
  
    // Update a assetType with id
    router.put("/:id", [authenticate], assetType.update);
  
    // Delete a assetType with id
    router.delete("/:id", [authenticate], assetType.delete);
  
    // Delete all assetType
    router.delete("/", [authenticate], assetType.deleteAll);
  
    app.use("/asset-t5/assetType", router);
  };