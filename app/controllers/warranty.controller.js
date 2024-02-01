const db = require("../models");
const Warranty = db.warranty;
const Op = db.Sequelize.Op;
// Create and Save a new Warranty
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Warranty
  const warranty = {
    warrantyLength: req.body.warrantyLength,
    warrantyEnd: req.body.warrantyEnd,
    warrantyStart: req.body.warrantyStart,
    warrantyType: req.body.warrantyType,
    
  };
  // Save Warranty in the database
  Warranty.create(warranty)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Warranty.",
      });
    });
};
// Retrieve all Warranty from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  Warranty.findAll({ where: condition })
  
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving warrantys.",
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Warranty.findByPk(id, {include: Request})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Warranty with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Warranty with id=" + id,
      });
    });
};
// Update a Warranty by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Warranty.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Warranty was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Warranty with id=${id}. Maybe Warranty was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Warranty with id=" + id,
      });
    });
};
// Delete a Warranty with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Warranty.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Warranty was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Warranty with id=${id}. Maybe Warranty was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Warranty with id=" + id,
      });
    });
};
// Delete all Warranty from the database.
exports.deleteAll = (req, res) => {
    Warranty.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Warranty were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Warranty.",
      });
    });
};
exports.findAllForCategory = (req, res) => {
  const category = req.params.category;

  Warranty.findAll({ where: { category: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Warranty.",
      });
    });
};