const db = require("../models");
const Lease = db.lease;
const Op = db.Sequelize.Op;
// Create and Save a new Lease
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Create a Lease
  const lease = {
    leaseLength: req.body.leaseLength,
    leaseEnd: req.body.leaseEnd,
    leaseStart: req.body.leaseStart,
    leaseType: req.body.leaseType,
    
  };
  // Save Lease in the database
  Lease.create(lease)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Lease.",
      });
    });
};
// Retrieve all Lease from the database.
exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  Lease.findAll({ where: condition })
  
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving leases.",
      });
    });
};


// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Lease.findByPk(id, {include: Request})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Lease with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error retrieving Lease with id=" + id,
      });
    });
};
// Update a Lease by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
  Lease.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Lease was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Lease with id=${id}. Maybe Lease was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Lease with id=" + id,
      });
    });
};
// Delete a Lease with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Lease.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Lease was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Lease with id=${id}. Maybe Lease was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Could not delete Lease with id=" + id,
      });
    });
};
// Delete all Lease from the database.
exports.deleteAll = (req, res) => {
    Lease.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Lease were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Lease.",
      });
    });
};
exports.findAllForCategory = (req, res) => {
  const category = req.params.category;

  Lease.findAll({ where: { category: category } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Lease.",
      });
    });
};