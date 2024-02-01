module.exports = (sequelize, Sequelize) => {
    
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
  