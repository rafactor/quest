'use strict';

var db = require("../models");


module.exports = {
  // type: ["simulator", "form", "survey"],

  getAll: () => {
    return new Promise(function (resolve, reject) {
      db.Questionnaire.findAll({})
        .then(docs => {
          const response = {
            count: docs.length,
            questionnaires: docs.map(doc => {
              return {
                name: doc.name,
                type: doc.type,
                code: doc.code,
                active: doc.active,
                id: doc.id,
                request: {
                  type: 'GET',
                  url: 'http://localhost:3000/api/questionnaires/' + doc.id
                }
              };
            })
          };

          resolve(response);
        }).catch(reject);
    });
  },

  getQuestionnaire: (id) => {
    return new Promise(function (resolve, reject) {
      db.Questionnaire.findAll({
        where: {
        id: id
        },
        include: [db.Question]
      })
        .then(docs => {
          console.log(docs)
          const response = {
            count: docs.length,
            questionnaires: docs.map(doc => {


              return {
                name: doc.name,
                type: doc.type,
                code: doc.code,
                active: doc.active,
                id: doc.id,
                request: {
                  type: 'GET',
                  url: 'http://localhost:3000/api/questionnaires/' + doc.id
                },
                numberOfQuestions: doc.Questions.length,
                questions: doc.Questions
              };
            })
          };

          resolve(response);
        }).catch(reject);
    });
  },

  create: (req) => {
    console.log('start');
    console.log(req);
    return new Promise(function (resolve, reject) {
      db.Questionnaire.create({
        name: req.body.name,
        type: req.body.type,
        code: req.body.code
      }).then(function (data) {
        console.log(data)
        const response = {
          message: "Create questionnary successfully",
          createdQuestionnaire: {
            name: data.name,
            type: data.type,
            code: data.code,
            id: data.id,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/api/questionnaires/' + data.id
            }
          }
        };
        resolve(response);
      }).catch(reject);
    });
  },

  delete: (id) => {
    console.log(id)
    return new Promise(function (resolve, reject) {
      db.Questionnaires.destroy({
        where: {
          id: id
        }
      }).then(data => {
        const response = {
          message: 'Questionnaire deleted',
          request: {
            type: 'POST',
            url: 'http://localhost:3000/questionnaires'
          }
        }
        resolve(response);
      }).catch(reject);
      
    });
  }

}




// getAll: (req, res, next) => {
//   console.log('getall')
// db.Questionnaire.findAll({})
//   .then(docs => {
//     const response = {
//       count: docs.length,
//       questionnaires: docs.map(doc => {
//         return {
//           name: doc.name,
//           type: doc.type,
//           code: doc.code,
//           active: doc.active,
//           _id: doc.id,
//           request: {
//             type: 'GET',
//             url: 'http://localhost:3000/questionnaires/' + doc._id
//           }
//         };
//       })
//     };

//     if (req.accepts('html')) {
//       console.log('html')
//       res.render('partials/admin/content',{
//         data: response,
//         layout: false
//       })
//     } else {
//       res.status(200).json(response);
//     }

//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err
//     });
//   });
// },

// getQuestionnaire: (req, res, next) => {
//     const id = req.params.id;
//     db.Questionnaire.findOne({
//         where: {
//           id: req.params.id,
//         },
//         include: [db.Question]
//       }).then(response => {
//         res.status(200).json(response)
//       })
//       .catch(err => {
//         console.log(err);
//         res.status(500).json({
//           error: err
//         });
//       });
//   },



// db.Questionnaire.create({
//         name: req.body.name,
//         type: req.body.type,
//         code: req.body.code
//       }).then(function (response) {
//         // console.log(response);
//         res.status(201).json({
//           message: "Create questionnary successfully",
//           createdQuestionnaire: {
//             name: response.name,
//             type: response.type,
//             code: response.code,
//             _id: response.id,
//             request: {
//               type: 'GET',
//               url: 'http://localhost:3000/questionnaires' + response._id
//             }
//           }
//         })
//       })
// },
//   create: (req, res, next) => {
//     db.Questionnaire.create({
//       name: req.body.name,
//       type: req.body.type,
//       code: req.body.code
//     }).then(function (response) {
//       // console.log(response);
//       res.status(201).json({
//         message: "Create questionnary successfully",
//         createdQuestionnaire: {
//           name: response.name,
//           type: response.type,
//           code: response.code,
//           _id: response.id,
//           request: {
//             type: 'GET',
//             url: 'http://localhost:3000/questionnaires' + response._id
//           }
//         }
//       })
//     })
//   },

// update: function (req, res) {
//   console.log("update");
//   console.log(req.body);
//   db.Questionnaire.update(req.body, {
//       where: {
//         id: parseInt(req.body.id)
//       }
//     }).then(result => {
//       res.status(200).json({
//         message: 'Questionnaire updated',
//         request: {
//           type: 'GET',
//           url: 'http://localhost:3000/api/questionnaire/' + id
//         }
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// },

// delete: (req, res, next) => {
//   db.Questionnaire.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(result => {
//       res.status(200)
//         .json({
//           message: 'Questionnaire deleted',
//           request: {
//             type: 'POST',
//             url: 'http://localhost:3000/questionnaires',
//             // body: { name: 'String', price: 'Number' }
//           }
//         });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });

// }

// };