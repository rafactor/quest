var db = require("../models");

module.exports = {
  type: ["simulator", "form", "survey"],

  list: function(req, res) {
    db.Questionnaire.findAll({}).then(function(response) {
      res.json(response);
    });
  },

  create: function(req, res) {
    db.Questionnaire.create({
      name: req.body.name,
      type: req.body.type
    }).then(function(response) {
      res.json(response);
    });
  },

  update: function(req, res) {
    console.log("update");
    console.log(req.body);
    db.Questionnaire.update(req.body, {
      where: {
        id: parseInt(req.body.id)
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  },

  delete: function(req, res) {
    db.Questionnaire.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  }
};
