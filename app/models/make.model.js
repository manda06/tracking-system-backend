module.exports = (sequelize, Sequelize) => {
    
    
    const  Make = sequelize.define("make", {
      make: {
        type: Sequelize.STRING,
      },
    });
    return Make;
  };
  