// *****************************************************************************
// **** api-routes.js - this file offers a set of routes for displaying and
// saving data to the db
// ******************************************************************************
// *** Dependencies

// Requiring our models
var db = require("../models");

// Routes =============================================================
module.exports = function(app) {
  // GET route for getting all questions
  app.get("/api/questions", function(req, res) {
    db.questions.findAll({}).then(function(response) {
      res.json(response);
    });
  });

  // POST route for saving a new questions
  app.post("/api/questionnaires/:id/questions", function(req, res) {
    var newQuestion = {
      questionnaireId: req.params.id,
      question: req.body.question,
      type: req.body.type,
      required: req.body.required
    };

    db.question.create(newQuestion).then(function(response) {
      res.json(response);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted
  // from req.params.id
  app.delete("/api/questions/:id", function(req, res) {
    // Destroy takes in one argument: a "where object describing the todos we want to destroy
    db.questions
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(response) {
        res.json(response);
      });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/questions", function(req, res) {
    // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the todos we want to update

    console.log(req.body);

    var newData = {
      name: req.body.name,
      type: req.body.type
    };

    db.questions
      .update(newData, {
        where: {
          id: parseInt(req.body.id)
        }
      })
      .then(function(response) {
        res.json(response);
      });
  });
};
