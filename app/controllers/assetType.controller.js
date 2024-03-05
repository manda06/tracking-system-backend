const db = require("../models");
const AssetType = db.assetType;
const Op = db.Sequelize.Op;

// Create and Save a new AssetType
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Departement
  const assetType = {
    id: req.params.id,
    name: req.body.name,
    
  };

  // Save AssetType in the database
  AssetType.create(assetType)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the AssetType.",
      });
    });
};


exports.getUserId = (req, res) => {
  AssetType.findAll({ where: {userId : req.params.userId}})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find AssetType with id=${req.params.userId}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving people.",
      });
    });
};


// Retrieve all People from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  AssetType.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving people.",
      });
    });
};



// Find a single AssetType with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  AssetType.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find AssetType with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving AssetType with id=" + id,
      });
    });
};    


// Update a AssetType by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  AssetType.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "AssetType was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update AssetType with id=${id}. Maybe AssetType was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating AssetType with id=" + id,
      });
    });
};

// Delete a AssetType with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  AssetType.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "AssetType was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete AssetType with id=${id}. Maybe AssetType was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete AssetType with id=" + id,
      });
    });
};

// Delete all People from the database.
exports.deleteAll = (req, res) => {
  AssetType.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} People were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all people.",
      });
    });
};
