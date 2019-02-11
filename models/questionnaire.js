"use strict";
module.exports = function(sequelize, DataTypes) {
  var Questionnaire = sequelize.define("Questionnaire", {
    name: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false,
      unique: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    description: {
      type: DataTypes.TEXT
    },
    version: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 1.0
    }
  });

  Questionnaire.associate = function(models) {
    // Associate Questionnaire with Questions
    Questionnaire.hasMany(models.Question, {
      onDelete: "cascade"
    });
  };

  return Questionnaire;
};
