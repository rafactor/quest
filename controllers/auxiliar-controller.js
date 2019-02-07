var db = require("../models");

module.exports = {

  getAuxOption: function(req, res) {
    db.AuxOptions.findAll({}).then(function(response) {
      // console.log(response);
      if (req.accepts("html")) {
        var displayQuestions = response.map(function(item){
          console.log(item);
          return item
        })
        return res.render("partials/main/nav/questionnaire", {auxiliar: response})
      };
    });
  },

};
