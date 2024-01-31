module.exports = (sequelize, Sequelize) => {
    const Student = require('./student.model.js')
    const Course = require('./course.model.js')
    
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
  