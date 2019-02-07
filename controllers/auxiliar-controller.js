var db = require("../models");

module.exports = {

  getAuxOption: function(req, res) {
    db.Question.findAll({include: [db.AuxOptions]}).then(function(response) {
       for (i = 0; i < response.length; i++) {
         var auxArray = response[i].dataValues.AuxOptions;
        //  console.log(auxArray);
        for (y = 0; y < auxArray.length; y++) {
          var responseArray = auxArray[y].dataValues.optionEn;
          console.log(responseArray);
        };
       };
       
        return res.render("partials/main/questionnaire", {auxiliar: response})
    });
  },
};
