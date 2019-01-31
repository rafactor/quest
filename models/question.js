module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    question: DataTypes.STRING,
    type: DataTypes.STRING,
    required: DataTypes.BOOLEAN
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
