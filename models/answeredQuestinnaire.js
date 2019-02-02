module.exports = function(sequelize, DataTypes) {
  var AnsweredQuestionnaire = sequelize.define("AnsweredQuestionnaire", {
    questionnaireId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
    },

    userId: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false
    },

    answeredDate: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: false
    },

    questionnaireScore: {
      type: DataTypes.INTEGER
    },

    lastLogin: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  AnsweredQuestionnaire.associate = function(models) {
    // Associate AnsweredQuestionnaire with QuestionnaireAnswer
    AnsweredQuestionnaire.hasMany(models.QuestionnaireAnswer, {
      onDelete: "cascade"
    });
  };

  return AnsweredQuestionnaire;
};
