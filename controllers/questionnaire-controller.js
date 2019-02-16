'use strict';

var db = require("../models");


module.exports = {
  // type: ["simulator", "form", "survey"],

  getAll: () => {
    return new Promise((resolve, reject) => {
      db.Questionnaire.findAll({})
        .then(docs => {
          const response = {
            count: docs.length,
            questionnaires: docs.map(doc => {
              return {
                name: doc.name,
                type: doc.type,
                code: doc.code,
                description: doc.description,
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
    return new Promise((resolve, reject) => {
      db.Questionnaire.findAll({
        where: {
        id: id
        },
        include: [db.Question]
      })
        .then(docs => {
          const response = {
            count: docs.length,
            questionnaires: docs.map(doc => {


              return {
                name: doc.name,
                type: doc.type,
                code: doc.code,
                description: doc.description,
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
    return new Promise((resolve, reject) => {
      console.log(req.body)
      db.Questionnaire.create({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        active: req.body.active,
        code: req.body.code
      }).then(data => {
        const response = {
          message: "Create questionnary successfully",
          createdQuestionnaire: {
            name: data.name,
            type: data.type,
            code: data.code,
            active: data.active,
            description: data.description,
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

  update: (req) => {
    console.log(req.body)
    return new Promise((resolve, reject) => {
      db.Questionnaire.update(req.body,{
      where:{
        id: parseInt(req.body.id)
      }
    }).then(() => {
        const response = {
          message: "Questionnary updated",
            request: {
              type: 'GET',
              url: 'http://localhost:3000/api/questionnaires/' + req.body.id
            }
          // }
        };
        resolve(response);
      }).catch(reject);
    });
  },

  delete: (idDelete) => {
    console.log('delete:' + idDelete)
    return new Promise((resolve, reject) =>{
      db.Questionnaire.destroy({
        where: {
          id: parseInt(idDelete)
        }
      }).then(() => {
        const response = {
          message: 'Questionnaire deleted',
          request: {
            type: 'DELETE',
            url: 'http://localhost:3000/questionnaires'
          }
        };
        resolve(response);
      })
      .catch(reject);
      
    });
  },

  addQuestion: (req) => {
    console.log('Controller')
    return new Promise((resolve, reject) => {
      console.log(req.body)
      db.Question.create({  
        questionEn: req.body.questionEn,
        questionPt: req.body.questionEn,
        type: req.body.type,
        optionList: req.body.optionList,
        isConditional: req.body.isConditional,
        conditionalQuestionId: req.body.conditionalQuestionId,
        status: req.body.status,
        questionnaireId: parseInt(req.body.id)
      }).then(data => {
        const response = {
          message: "Question added!",
          createdQuestionnaire: {
            questionEn: data.questionEn,
            questionPt: data.questionEn,
            type: data.type,
            optionList: data.optionList,
            isConditional: data.isConditional,
            conditionalQuestionId: data.conditionalQuestionId,
            status: data.status,
            questionnaireId: data.questionnaireId
            // request: {
            //   type: 'GET',
            //   url: 'http://localhost:3000/api/questionnaires/' + data.questionnaireId
            // }
          }
        };
        resolve(response);
      }).catch(reject);
    });
  },


      

}