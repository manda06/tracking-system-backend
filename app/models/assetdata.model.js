module.exports = (sequelize, Sequelize) => {
    const Student = require('./assetdata.model.js')
    
    const AssetData = sequelize.define("assetdata", {
      name: {
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.STRING,
      },
    });
    
   

    return AssetData;
  };
  