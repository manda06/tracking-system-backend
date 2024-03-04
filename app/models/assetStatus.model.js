const { BOOLEAN } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const AssetStatus = sequelize.define("assetStatus", {
      specificAssetId: {
        type: Sequelize.INTEGER,
      },
      checkin: {
        type: Sequelize.DATE,
      },
      checkout: {
        type: Sequelize.DATE,
      },
      current: {
        type: Sequelize.BOOLEAN,
      },
      permanent: {
        type: Sequelize.BOOLEAN,
      },
     
      
    });
    return AssetStatus;
  };