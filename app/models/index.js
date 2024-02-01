const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user.model.js")(sequelize, Sequelize);
db.session = require("./session.model.js")(sequelize, Sequelize);

db.specificAsset = require("./specificAsset.model.js")(sequelize, Sequelize);
db.warranty = require("./warranty.model.js")(sequelize, Sequelize);
db.lease = require("./lease.model.js")(sequelize, Sequelize);
db.room = require("./room.model.js")(sequelize, Sequelize);
db.building = require("./building.model.js")(sequelize, Sequelize);
db.accommodation = require("./asset.model.js")(sequelize, Sequelize);
db.accommodation = require("./assetdata.model.js")(sequelize, Sequelize);
db.accommodation = require("./model.model.js")(sequelize, Sequelize);


// foreign keys for room
db.building.hasMany(
  db.room,
  { as: "rooms" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
)
db.room.belongsTo(
  db.building,
  { as: "building" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
)


// foreign keys for specificAsset
db.specificAsset.hasOne(
  db.warranty,
  { as: "warranty" },
  { foreignKey: { allowNull: true } }
);

db.specificAsset.hasOne(
  db.lease,
  { as: "lease" },
  { foreignKey: { allowNull: true } }
);

// foreign key for session
db.user.hasMany(
  db.session,
  { as: "session" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.session.belongsTo(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);

module.exports = db;
