module.exports = (sequelize, Sequelize) => {

    
    const AssetType = sequelize.define("assettype", {
      name: {
        type: Sequelize.STRING,
      },
     

      

    });
    
   

    return AssetType;
  };
  