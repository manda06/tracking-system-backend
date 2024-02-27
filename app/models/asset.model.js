module.exports = (sequelize, Sequelize) => {


  const Asset = sequelize.define("asset", {
    description: {
      type: Sequelize.STRING,
    },



  });



  return Asset;
};

