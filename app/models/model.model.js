module.exports = (sequelize, Sequelize) => {

    
    const Model = sequelize.define("model", {
      model: {
        type: Sequelize.STRING,
      },
      make: {
        type: Sequelize.STRING,
      },
      

      

    });
    
   

    return Model;
  };
  