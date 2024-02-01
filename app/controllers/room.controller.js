const db = require("../models");
const Room = db.room;
const Op = db.Sequelize.Op;
// Create and Save a new Room
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Room
  const room = {
    name: req.body.name,
    nameAbriv: req.body.nameAbriv,
  };
  // Save Room in the database
  Room.create(room)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Room.",
      });
    });
};
// Retrieve all Room from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  Room.findAll({ where: condition })
  
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving rooms.",
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Room.findByPk(id, {include: Request})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Room with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Room with id=" + id,
      });
    });
};
// Update a Room by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Room.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Room was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Room with id=${id}. Maybe Room was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Room with id=" + id,
      });
    });
};
// Delete a Room with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Room.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Room was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Room with id=${id}. Maybe Room was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Room with id=" + id,
      });
    });
};
// Delete all Room from the database.
exports.deleteAll = (req, res) => {
    Room.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Room were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Room.",
      });
    });
};
exports.findAllForCategory = (req, res) => {
  const category = req.params.category;

  Room.findAll({ where: { category: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Room.",
      });
    });
};