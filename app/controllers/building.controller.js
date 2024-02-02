const db = require("../models");
const Building = db.building;
const Op = db.Sequelize.Op;
// Create and Save a new Building
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Building
  const building = {
    name: req.body.name,
    nameAbriv: req.body.nameAbriv,
  };
  // Save Building in the database
  Building.create(building)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Building.",
      });
    });
};
// Retrieve all Building from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  Building.findAll({ where: condition })
  
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving buildings.",
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Building.findByPk(id, {include: Request})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Building with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Building with id=" + id,
      });
    });
};
// Update a Building by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Building.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Building was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Building with id=${id}. Maybe Building was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Building with id=" + id,
      });
    });
};
// Delete a Building with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Building.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Building was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Building with id=${id}. Maybe Building was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Building with id=" + id,
      });
    });
};
// Delete all Building from the database.
exports.deleteAll = (req, res) => {
    Building.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Building were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Building.",
      });
    });
};
exports.findAllForCategory = (req, res) => {
  const category = req.params.category;

  Building.findAll({ where: { category: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Building.",
      });
    });
};