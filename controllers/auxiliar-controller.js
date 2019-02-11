var db = require("../models");

module.exports = {

  getAuxOption: function(req, res) {
    db.Question.findAll({include: [db.AuxOptions], order: [
      ['id']
    ]}).then(function(response) {
      var finalResponseData = {};
      console.log(JSON.stringify(response[0].dataValues, null, 2))

      //  for (i = 0; i < response.length; i++) {
      //    var auxArray = response[i].dataValues.AuxOptions;
      //    console.log(auxArray);
      //   for (y = 0; y < auxArray.length; y++) {
      //     var responseArray = auxArray[y].dataValues;
      //     console.log(responseArray);
      //   };
      //  };
        return res.render("partials/main/questionnaire", {
          questionData: response,
          // answers: responseArray,
        });
    });
  },
};
