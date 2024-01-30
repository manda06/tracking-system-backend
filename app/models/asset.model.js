module.exports = (sequelize, Sequelize) => {
    const Student = require('./student.model.js')
    const Course = require('./course.model.js')
    
    const Asset = sequelize.define("asset", {
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      

      

    });
    
   

    return Asset;
  };
  