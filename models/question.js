module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    questionEn: {
      type: DataTypes.TEXT,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
    },

    questionPt: {
      type: DataTypes.TEXT,
      defaultValue: null
    },

    type: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false
    },

    optionList: {
      type: DataTypes.STRING,
      defaultValue: null
    },

    isConditional: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

    conditionalQuestionId: {
      type: DataTypes.INTEGER,
      defaultValue: null

    },

    conditionalAnswer: {
      type: DataTypes.STRING,
      defaultValue: null
    },

    unhideValue: {
      type: DataTypes.INTEGER,
      defaultValue: null
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: "active"
    },

    version: {
      type: DataTypes.INTEGER,
      defaultValue: 1.0
    }
  });

  Question.associate = function(models) {
    // Associate Question with Questions
    Question.belongsTo(models.Questionnaire, {
      foreignKey: {
        allowNull: false
      }
    });
    Question.hasMany(models.AuxOptions, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Question;
};
