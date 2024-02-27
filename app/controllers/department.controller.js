const db = require("../models");
const Department = db.department;
const Op = db.Sequelize.Op;

// Create and Save a new Department
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Departement
  const department = {
    id: req.params.id,
    name: req.body.name,
    
  };

  // Save Department in the database
  Department.create(department)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Department.",
      });
    });
};


exports.getUserId = (req, res) => {
  Department.findAll({ where: {userId : req.params.userId}})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Department with id=${req.params.userId}.`,
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

  Department.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving people.",
      });
    });
};

// Find a single Department with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Department.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Department with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Department with id=" + id,
      });
    });
};    


// Update a Department by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Department.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Department was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Department with id=${id}. Maybe Department was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Department with id=" + id,
      });
    });
};

// Delete a Department with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Department.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Department was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Department with id=${id}. Maybe Department was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Department with id=" + id,
      });
    });
};

// Delete all People from the database.
exports.deleteAll = (req, res) => {
  Department.destroy({
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
