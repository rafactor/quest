var db = require("../models");

module.exports = {
  type: ["string", "text", "choice", "number"],

  list: function(req, res) {
    db.Question.findAll({}).then(function(response) {
      if (req.accepts("html")) {
        var displayQuestions = response.map(function(item){
          
          return item
        })
        res.render("questionnaire", {questions: response})
      };
    });
  },

  create: function(req, res) {
    db.question
      .create({
        name: req.body.name,
        type: req.body.type
      })
      .then(function(response) {
        res.json(response);
      });
  },

  update: function(req, res) {
    console.log("update");
    console.log(req.body);
    db.question
      .update(req.body, {
        where: {
          id: parseInt(req.body.id)
        }
      })
      .then(function(dbTodo) {
        res.json(dbTodo);
      });
  },

  delete: function(req, res) {
    db.question
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbTodo) {
        res.json(dbTodo);
      });
  }
};
