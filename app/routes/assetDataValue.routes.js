const auth = require("../authorization/authorization.js");

module.exports = (app) => {
    const assetDataValue = require("../controllers/assetDataValue.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Accommodation
    router.post("/", [authenticate], assetDataValue.create);
  
    // Retrieve all assetdata
    router.get("/", [authenticate], assetDataValue.findAll);
  

    // Retrieve a single Accommodation with id
    router.get("/:id", [authenticate], assetDataValue.findOne);
    

    // Retrive all assetDataValue for a assetType
    router.get("/specificAsset/:id", [authenticate], assetDataValue.findAllForSpecificAsset);
  
    // Update a Tutorial with id
    router.put("/:id", [authenticate], assetDataValue.update);
  
    // Delete a Accommodation with id
    router.delete("/:id", [authenticate], assetDataValue.delete);
  
    // Delete all assetdata
    router.delete("/", [authenticate], assetDataValue.deleteAll);
  
    app.use("/asset-t5/assetDataValue", router);
  };