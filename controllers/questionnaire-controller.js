'use strict';

var db = require("../models");


module.exports = {
  type: ["simulator", "form", "survey"],

  getAll: (req, res, next) => {
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
              _id: doc.id,
              request: {
                type: 'GET',
                url: 'http://localhost:3000/questionnaires/' + doc._id
              }
            };
          })
        };

        if (req.accepts('html')) {
          res.render('partial/admin/components/questionnaire-list',{
            data: response,
            layout: false
          })
        } else {
          res.status(200).json(response);
        }
        
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  },

  getQuestionnaire: (req, res, next) => {
    const id = req.params.id;
    db.Questionnaire.findOne({
        where: {
          id: req.params.id,
        },
        include: [db.Question]
      }).then(response => {
        res.status(200).json(response)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  },

  create: (req, res, next) => {
    db.Questionnaire.create({
      name: req.body.name,
      type: req.body.type,
      code: req.body.code
    }).then(function (response) {
      // console.log(response);
      res.status(201).json({
        message: "Create questionnary successfully",
        createdQuestionnaire: {
          name: response.name,
          type: response.type,
          code: response.code,
          _id: response.id,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/questionnaires' + response._id
          }
        }
      })
    })
  },

  update: function (req, res) {
    console.log("update");
    console.log(req.body);
    db.Questionnaire.update(req.body, {
      where: {
        id: parseInt(req.body.id)
      }
    }).then(result => {
      res.status(200).json({
          message: 'Questionnaire updated',
          request: {
              type: 'GET',
              url: 'http://localhost:3000/api/questionnaire/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  },

  delete: (req, res, next) => {
    db.Questionnaire.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.status(200)
      .json({
        message: 'Questionnaire deleted',
        request: {
            type: 'POST',
            url: 'http://localhost:3000/questionnaires',
            // body: { name: 'String', price: 'Number' }
        }
      });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
      
    }
  
};