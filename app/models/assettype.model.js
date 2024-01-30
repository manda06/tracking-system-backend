module.exports = (sequelize, Sequelize) => {
    const Student = require('./student.model.js')
    const Course = require('./course.model.js')
    
    const AssetType = sequelize.define("assettype", {
      name: {
        type: Sequelize.STRING,
      },
     

      

    });
    
   

    return AssetType;
  };
  