module.exports = (sequelize, Sequelize) => {

    
    const AssetType = sequelize.define("assetType", {
      name: {
        type: Sequelize.STRING,
      },
     

      

    });
    
   

    return AssetType;
  };
  