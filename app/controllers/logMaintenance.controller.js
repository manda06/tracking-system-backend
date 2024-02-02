const db = require("../models");
const LogMain = db.logMain;
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
  const logMain = {
    id: req.params.id,
    name: req.body.name,
    date: req.body.date,
    type: req.body.type,
    specificAssetId: req.body.specificAssetId,
    comments: req.body.comments
  };
  // Save Course in the database
  LogMain.create(logMain)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Course.",
      });
    });
};
// Retrieve all Courses from the database.
exports.findAll = (req, res) => {
    const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  LogMain.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Courses.",
      });
    });
};

// Find a single Course with an id
exports.findAllForCourse = (req, res) => {
  const id = req.params.id;
  LogMain.findAll({ where: { id: id } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find courses for user with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error retrieving courses for user with id=" + id,
      });
    });
};
// Find a single Course with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  LogMain.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Course with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Course with id=" + id,
      });
    });
};
// Update a COurse by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  LogMain.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Course was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Course with id=${id}. Maybe Course was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Course with id=" + id,
      });
    });
};
// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  LogMain.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Course was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Course with id=${id}. Maybe Course was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Course with id=" + id,
      });
    });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    LogMain.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Courses were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all courses.",
      });
    });
};
