module.exports = (sequelize, Sequelize) => {


  const Model = sequelize.define("model", {
    model: {
      type: Sequelize.STRING,
    },
  });
  return Model;
};
