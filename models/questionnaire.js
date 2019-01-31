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
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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
