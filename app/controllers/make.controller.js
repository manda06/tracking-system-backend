const db = require("../models");
const Make = db.make;
const Op = db.Sequelize.Op;

// Create and Save a new Make
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Departement
  const make = {
    id: req.params.id,
    name: req.body.name,
    
  };

  // Save Make in the database
  Make.create(make)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Make.",
      });
    });
};


exports.getUserId = (req, res) => {
  Make.findAll({ where: {userId : req.params.userId}})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Make with id=${req.params.userId}.`,
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

  Make.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving people.",
      });
    });
};

// Find a single Make with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Make.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Make with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Make with id=" + id,
      });
    });
};    


// Update a Make by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Make.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Make was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Make with id=${id}. Maybe Make was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Make with id=" + id,
      });
    });
};

// Delete a Make with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Make.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Make was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Make with id=${id}. Maybe Make was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Make with id=" + id,
      });
    });
};

// Delete all People from the database.
exports.deleteAll = (req, res) => {
  Make.destroy({
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
