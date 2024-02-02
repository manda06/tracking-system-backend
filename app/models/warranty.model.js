module.exports = (sequelize, Sequelize) => {
    
    const Warranty = sequelize.define("warranty", {
      warrantyLength: {
        type: Sequelize.STRING,
      },
      warrantyEnd: {
        type: Sequelize.DATE,
      },
      warrantyStart: {
        type: Sequelize.DATE,
      },
      warrantyType: {
        type: Sequelize.STRING,
      },

    });
    
   

    return Warranty;
  };
  