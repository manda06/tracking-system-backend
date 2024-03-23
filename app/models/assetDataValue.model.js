module.exports = (sequelize, Sequelize) => {
    
    const AssetDataValue = sequelize.define("assetDataValue", {
      value: {
        type: Sequelize.STRING,
      },
      
    });
    
   

    return AssetDataValue;
  };