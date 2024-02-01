module.exports = (sequelize, Sequelize) => {
    const Student = require('./assettype.model.js')

    
    const AssetType = sequelize.define("assettype", {
      name: {
        type: Sequelize.STRING,
      },
     

      

    });
    
   

    return AssetType;
  };
  