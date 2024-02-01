module.exports = (sequelize, Sequelize) => {
    const Student = require('./model.model.js')

    
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
  