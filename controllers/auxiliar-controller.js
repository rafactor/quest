var db = require("../models");

module.exports = {
  getAuxOption: () => {
    return new Promise((resolve, reject) => {
      db.Question.findAll({
        include: [db.AuxOptions],
        order: [["id"]]
      })
        .then(function(docs) {
          console.log(docs);
          // var finalResponseData = {};
          console.log(JSON.stringify(docs[0].dataValues, null, 2));

          const response = {
            questionData: docs
          };

          resolve(response);
        })
        .catch(reject);
    });
  }
};
