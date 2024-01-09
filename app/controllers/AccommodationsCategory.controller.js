const db = require("../models");
const AccommodationsCategory = db.AccommodationsCategory;
const Op = db.Sequelize.Op;
// Create and Save a new AccommodationsCategory
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a AccommodationsCategory
  const AccommodationsCategory = {
    id: req.body.id,
    courseid: req.body.courseid,
    studentid: req.body.studentid,
  };
  // Save AccommodationsCategory in the database
  AccommodationsCategory.create(AccommodationsCategory)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the AccommodationsCategory.",
      });
    });
};
// Retrieve all AccommodationsCategory from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  AccommodationsCategory.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving AccommodationsCategory.",
      });
    });
};

// Find a single AccommodationsCategory with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  AccommodationsCategory.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find AccommodationsCategory with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving AccommodationsCategory with id=" + id,
      });
    });
};
// Update a AccommodationsCategory by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  AccommodationsCategory.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "AccommodationsCategory was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update AccommodationsCategory with id=${id}. Maybe AccommodationsCategory was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating AccommodationsCategory with id=" + id,
      });
    });
};
// Delete a AccommodationsCategory with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  AccommodationsCategory.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "AccommodationsCategory was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete AccommodationsCategory with id=${id}. Maybe AccommodationsCategory was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete AccommodationsCategory with id=" + id,
      });
    });
};
// Delete all AccommodationsCategory from the database.
exports.deleteAll = (req, res) => {
  AccommodationsCategory.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} AccommodationsCategory were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all AccommodationsCategory.",
      });
    });
};
