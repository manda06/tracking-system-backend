module.exports = (sequelize, Sequelize) => {
    const Student = require('./student.model.js')
    const Course = require('./course.model.js')
    
    const AssetValues = sequelize.define("assetvalues", {
      model: {
        type: Sequelize.STRING,
      },
      make: {
        type: Sequelize.STRING,
      },
      

      

    });
    
   

    return AssetValues;
  };
  