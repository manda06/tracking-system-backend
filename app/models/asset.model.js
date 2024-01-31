module.exports = (sequelize, Sequelize) => {
    const Asset = require('./asset.model.js')
    
    
    const Asset = sequelize.define("asset", {
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      make: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
     
      

    });
    
   

    return Asset;
  };
  