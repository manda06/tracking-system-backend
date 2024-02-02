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
      status: {
        type: Sequelize.STRING,
      },
      permanent: {
        type: Sequelize.BOOLEAN,
      },
      personId: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      
    });
    return AssetStatus;
  };