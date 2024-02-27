module.exports = (sequelize, Sequelize) => {


  const Asset = sequelize.define("asset", {
    description: {
      type: Sequelize.STRING,
    },
    archived: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }



  });



  return Asset;
};

