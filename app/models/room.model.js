module.exports = (sequelize, Sequelize) => {
    
    const Room = sequelize.define("room", {
      roomNum: {
        type: Sequelize.INTEGER,
      },
      buildingId: {
        type: Sequelize.INTEGER,
      },

      

    });
    
   

    return Room;
  };
  