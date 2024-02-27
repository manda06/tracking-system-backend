require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");

db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.options("*", cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/user.routes")(app);



require("./app/routes/logMaintenance.routes")(app);
require("./app/routes/assetStatus.routes")(app);

require("./app/routes/person.routes.js")(app);
require("./app/routes/department.routes")(app);



require("./app/routes/specificAsset.routes.js")
require("./app/routes/warranty.routes.js")
require("./app/routes/lease.routes.js")
require("./app/routes/room.routes.js")(app);
require("./app/routes/building.routes.js")(app);
require("./app/routes/assetType.routes.js");

require("./app/routes/asset.routes")(app);
require("./app/routes/assetdata.routes")(app);
require("./app/routes/make.routes")(app);
require("./app/routes/model.routes")(app);




// set port, listen for requests
const PORT = process.env.PORT || 3035;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;
