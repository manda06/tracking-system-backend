const db = require("../models");
const SpecificAsset = db.specificAsset;
const Op = db.Sequelize.Op;
// Create and Save a new SpecificAsset
exports.create = (req, res) => {
  
  // Create a SpecificAsset
  const specificAsset = {
    serialNumber: req.body.serialNumber,
    datePurchased: req.body.datePurchased,
    price: req.body.price,
    status: req.body.status,

  };
  // Save SpecificAsset in the database
  SpecificAsset.create(specificAsset)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SpecificAsset.",
      });
    });
};
// Retrieve all SpecificAsset from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  SpecificAsset.findAll( {where: condition,include:[{model: db.asset,as: "asset" }] })
  
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving specificAssets.",
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  SpecificAsset.findByPk(id, {include: Request})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find SpecificAsset with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving SpecificAsset with id=" + id,
      });
    });
};
// Update a SpecificAsset by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  SpecificAsset.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "SpecificAsset was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update SpecificAsset with id=${id}. Maybe SpecificAsset was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating SpecificAsset with id=" + id,
      });
    });
};
// Delete a SpecificAsset with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  SpecificAsset.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "SpecificAsset was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete SpecificAsset with id=${id}. Maybe SpecificAsset was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete SpecificAsset with id=" + id,
      });
    });
};
// Delete all SpecificAsset from the database.
exports.deleteAll = (req, res) => {
    SpecificAsset.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} SpecificAsset were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all SpecificAsset.",
      });
    });
};
exports.findAllForCategory = (req, res) => {
  const category = req.params.category;

  SpecificAsset.findAll({ where: { category: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving SpecificAsset.",
      });
    });
};