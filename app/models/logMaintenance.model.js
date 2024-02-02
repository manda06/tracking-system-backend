module.exports = (sequelize, Sequelize) => {
    const LogMain = sequelize.define("logMain", {
      name: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      type: {
        type: Sequelize.STRING,
      },
      specificAssetId: {
        type: Sequelize.STRING,
      },
      comments: {
        type: Sequelize.STRING,
      },
      
    });
    return LogMain;
  };