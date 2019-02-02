module.exports = function(sequelize, DataTypes) {
  var QuestionnaireAnswer = sequelize.define("QuestionnaireAnswer", {
    answeredQuestId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
    },

    questionCode: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false
    },

    version: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      allowNull: false
    },

    answer: {
      type: DataTypes.STRING
    },

    language: {
      type: DataTypes.STRING,
      defaultValue: "en"
    }
  });

  QuestionnaireAnswer.associate = function(models) {
    // Associate QuestionnaireAnswer with AnsweredQuestionnaire
    QuestionnaireAnswer.belongsTo(models.AnsweredQuestionnaire, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return QuestionnaireAnswer;
};
