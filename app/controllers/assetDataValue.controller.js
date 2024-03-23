const db = require("../models");
const AssetDataValue = db.assetdata;
const Op = db.Sequelize.Op;
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Tutorial
  const assetDataValue = {
    id: req.params.id,
    value: req.params.value,
    assetDataId: req.params.assetDataId,
    specificAssetId: req.params.specificAssetId,
  };
  // Save asset in the database
  AssetStatus.create(assetDataValue)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the asset.",
      });
    });
};
// Retrieve all assets from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  AssetDataValue.findAll({ where: condition })
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

// Find a single asset with an id
exports.findAllForAsset = (req, res) => {
  const specificAssetId = req.params.assetId;
  AssetDataValue.findAll({ where: { specificAssetId: specificAssetId }})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find asset for user with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error retrieving asset for user with id=" + id,
      });
    });
};
// Find a single asset with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  AssetDataValue.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find asset with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving asset with id=" + id,
      });
    });
};
// Update a asset by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  AssetDataValue.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "asset was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update asset with id=${id}. Maybe asset was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating asset with id=" + id,
      });
    });
};
// Delete a asset with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  AssetDataValue.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "asset was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete asset with id=${id}. Maybe asset was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete asset with id=" + id,
      });
    });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    AssetDataValue.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} assets were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all assets.",
      });
    });
};



exports.findAllForSpecificAsset = (req, res) => {
  const id = req.params.id;

  AssetDataValue.findAll({ where: { specificAssetId: id } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving asset.",
      });
    });
};