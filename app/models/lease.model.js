module.exports = (sequelize, Sequelize) => {
    
    const Lease = sequelize.define("lease", {
      leaseLength: {
        type: Sequelize.STRING,
      },
      leaseEnd: {
        type: Sequelize.DATE,
      },
      leaseStart: {
        type: Sequelize.DATE,
      },
      leaseType: {
        type: Sequelize.STRING,
      },

    });
    
   

    return Lease;
  };
  