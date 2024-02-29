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
db.asset = require("./asset.model.js")(sequelize, Sequelize);
db.assetdata = require("./assetdata.model.js")(sequelize, Sequelize);
db.assetType = require("./assetType.model.js")(sequelize, Sequelize);
db.model = require("./model.model.js")(sequelize, Sequelize);
db.make = require("./make.model.js")(sequelize, Sequelize);
db.assetStatus = require("./assetStatus.model.js")(sequelize, Sequelize);
db.logMaintenance = require("./logMaintenance.model.js")(sequelize, Sequelize);
db.person = require("./person.model.js")(sequelize, Sequelize);
db.department = require("./department.model.js")(sequelize, Sequelize);
db.specificAsset = require("./specificAsset.model.js")(sequelize, Sequelize);
db.warranty = require("./warranty.model.js")(sequelize, Sequelize);
db.lease = require("./lease.model.js")(sequelize, Sequelize);
db.room = require("./room.model.js")(sequelize, Sequelize);
db.building = require("./building.model.js")(sequelize, Sequelize);


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

//foreign keys for building
db.specificAsset.hasMany(
  db.building,
  { as: "building" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
)
db.building.belongsTo(
  db.specificAsset,
  { as: "specificAsset" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
)

// foreign keys for specificAsset
db.specificAsset.hasOne(db.warranty);
// db.warranty.hasOne(db.specificAsset);

db.specificAsset.hasOne(db.lease);
// db.lease.hasOne(db.specificAsset);



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

db.department.hasMany(
  db.user,
  { as: "user" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);
db.user.belongsTo(
  db.department,
  { as: "department" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
//foreign keys for asset
db.asset.hasMany(
  db.specificAsset,
  { as: "specificAsset" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.specificAsset.belongsTo(
  db.asset,
  { as: "asset" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.make.hasMany(
  db.asset,
  { as: "asset" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.asset.belongsTo(
  db.make,
  { as: "make" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.asset.belongsTo(
  db.model,
  {as: "model"},
  { foreignKey: {allowNull: true}, onDelete: "CASCADE"}
)
db.model.hasMany(
  db.asset,
  { as: "asset"},
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
)
db.assetType.hasMany(
  db.asset,
  { as: "asset" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.asset.belongsTo(
  db.assetType,
  { as: "assetType" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
//foreign keys for assetType
db.assetType.hasMany(
  db.assetdata,
  { as: "assetdata" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);
db.assetdata.belongsTo(
  db.assetType,
  { as: "assetType" },
  { foreignKey: { allowNull: true }, onDelete: "CASCADE" }
);
// foreign keys for make and model
db.make.hasMany(
  db.model,
  { as: "model" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.model.belongsTo(
  db.make,
  { as: "make" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);

//foreign key for Person
db.person.hasMany(
  db.assetStatus,
  { as: "assetStatus" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.assetStatus.belongsTo(
  db.person,
  { as: "person" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);


// foreign keys for specificAsset
db.specificAsset.hasMany(
  db.assetStatus,
  { as: "assetStatus" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.assetStatus.belongsTo(
  db.specificAsset,
  { as: "specificAsset" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);


db.specificAsset.hasMany(
  db.logMaintenance,
  { as: "logMaintenance" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);
db.logMaintenance.belongsTo(
  db.specificAsset,
  { as: "specificAsset" },
  { foreignKey: { allowNull: false }, onDelete: "CASCADE" }
);


module.exports = db;
