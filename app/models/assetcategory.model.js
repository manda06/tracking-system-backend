module.exports = (sequelize, Sequelize) => {
    const Student = require('./student.model.js')
    const Course = require('./course.model.js')
    
    const AssetCategory = sequelize.define("assetcategory", {
      name: {
        type: Sequelize.STRING,
      },
      
      

      

    });
    
   

    return AssetCategory;
  };
  