const db = require("../models");
const assetType = db.assetType;
const Op = db.Sequelize.Op;
// Create and Save a new assetType
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a assetType
  const assettype = {
    name: req.body.name,
    
    
  };
  // Save assetType in the database
  assetType.create(assetType)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the assetType.",
      });
    });
};
// Retrieve all assetType from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  assetType.findAll({ where: condition })
  
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving assets.",
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  assetType.findByPk(id, {include: Request})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find assetType with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving assetType with id=" + id,
      });
    });
};
// Update a assetType by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  assetType.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "assetType was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update assetType with id=${id}. Maybe assetType was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating assetType with id=" + id,
      });
    });
};
// Delete a assetType with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  assetType.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "assetType was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete assetType with id=${id}. Maybe assetType was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete assetType with id=" + id,
      });
    });
};
// Delete all assetType from the database.
exports.deleteAll = (req, res) => {
    assetType.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} assetType were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all assetType.",
      });
    });
};
exports.findAllForCategory = (req, res) => {
  const category = req.params.category;

  assetType.findAll({ where: { category: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving assetType.",
      });
    });
};