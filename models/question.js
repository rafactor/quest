module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    questionEn: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
    },

    questionPt: {
      type: DataTypes.STRING,
      defaultValue: null
    },

    type: {
      type: DataTypes.ENUM("Open", "Option", "Text", "Range", "yesNo", "Date"),
      defaultValue: null,
      allowNull: false
    },

    optionList: {
      type: DataTypes.STRING,
      defaultValue: null
    },

    isConditional: {
      type: DataTypes.BOOLEAN
    },

    conditionalQuestionId: {
      type: DataTypes.INTEGER
    },

    conditionalAnswer: {
      type: DataTypes.STRING
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: "active"
    },

    version: {
      type: DataTypes.DECIMAL(10, 2),
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
  };

  return Question;
};
