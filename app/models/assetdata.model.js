module.exports = (sequelize, Sequelize) => {
    
    const AssetData = sequelize.define("assetdata", {
      name: {
        type: Sequelize.STRING,
      },
      
    });
    
   

    return AssetData;
  };
  