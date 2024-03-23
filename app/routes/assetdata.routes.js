const auth = require("../authorization/authorization.js");

module.exports = (app) => {
    const assetData = require("../controllers/assetdata.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new Accommodation
    router.post("/", [authenticate], assetData.create);
  
    // Retrieve all assetdata
    router.get("/", [authenticate], assetData.findAll);
  

    // Retrieve a single Accommodation with id
    router.get("/:id", [authenticate], assetData.findOne);
    

    // Retrive all assetData for a assetType
    router.get("/assetType/:id", [authenticate], assetData.findAllForType)
  
    // Update a Tutorial with id
    router.put("/:id", [authenticate], assetData.update);
  
    // Delete a Accommodation with id
    router.delete("/:id", [authenticate], assetData.delete);
  
    // Delete all assetdata
    router.delete("/", [authenticate], assetData.deleteAll);
  
    app.use("/asset-t5/assetData", router);
  };