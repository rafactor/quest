module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    question: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    required: DataTypes.BOOLEAN
  });

  Question.associate = function(models) {
    // We're saying that a Question should belong to an Questionnaire
    // A Question can't be created without an Questionnaire due to the foreign key constraint
    Question.belongsTo(models.Questionnaire, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Question;
};
