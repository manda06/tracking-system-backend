module.exports = (sequelize, Sequelize) => {
    
    
    const Asset = sequelize.define("asset", {
      
      make: {
        type: Sequelize.STRING,
      },
      
     
      

    });
    
   

    return Asset;
  };
  