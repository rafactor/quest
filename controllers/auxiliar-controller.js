var db = require("../models");

module.exports = {

  getAuxOption: function(req, res) {
    db.Question.findAll({include: [db.AuxOptions], order: [
      ['id']
    ]}).then(function(response) {
      var finalResponseData = {};
      console.log(JSON.stringify(response[0].dataValues, null, 2))
        return res.render("partials/main/questionnaire", {
          questionData: response,
        });
    });
  },
};
