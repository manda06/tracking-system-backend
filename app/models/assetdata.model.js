module.exports = (sequelize, Sequelize) => {
    const Student = require('./student.model.js')
    const Course = require('./course.model.js')
    
    const AssetData = sequelize.define("assetdata", {
      name: {
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.STRING,
      },
    });
    
   

    return AssetData;
  };
  