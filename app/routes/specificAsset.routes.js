module.exports = (app) => {
    const specificAsset = require("../controllers/specificAsset.controller.js");
    const { authenticate } = require("../authorization/authorization.js");
    var router = require("express").Router();
  
    // Create a new specificAsset
    router.post("/", [authenticate], specificAsset.create);
  
    // Retrieve all specificAssets
    router.get("/", [authenticate], specificAsset.findAll);
  
    
    // Retrieve a single specificAsset with id
    router.get("/:id", [authenticate], specificAsset.findOne);
  
    // Update a specificAsset with id
    router.put("/:id", [authenticate], specificAsset.update);
  
    // Delete a specificAsset with id
    router.delete("/:id", [authenticate], specificAsset.delete);
  
    // Delete all specificAssets
    router.delete("/", [authenticate], specificAsset.deleteAll);
  
    app.use("/asset-t5/specificAsset", router);
  };