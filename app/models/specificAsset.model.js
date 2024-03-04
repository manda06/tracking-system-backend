module.exports = (sequelize, Sequelize) => {
    
    const SpecificAsset = sequelize.define("specificAsset", {
      serialNumber: {
        type: Sequelize.INTEGER,
      },
      
      /*data: {
        type: Sequelize.INTEGER,
      },*/
      datePurchased: {
        type: Sequelize.DATE,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
      },

    });
    
   

    return SpecificAsset;
  };
  