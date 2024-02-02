module.exports = (sequelize, Sequelize) => {
 
    
    const Building = sequelize.define("building", {
      name: {
        type: Sequelize.STRING,
      },
      nameAbriv: {
        type: Sequelize.STRING,
      },
      
      

    });
    
   

    return Building;
  };
  