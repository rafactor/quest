module.exports = function(sequelize, DataTypes) {
  var AuxOptions = sequelize.define("AuxOptions", {
    name: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
    },

    optionEn: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
    },
    optionPt: {
      type: DataTypes.STRING,
      defaultValue: null
    },

    order: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
    },

    type: {
      type: DataTypes.ENUM("INTEGER", "DECIMAL", "STRING"),
      defaultValue: "STRING",
      allowNull: false
    }
  });

  AuxOptions.associate = function(models) {
    // Associate AuxOptions with Question
    AuxOptions.belongsTo(models.Question, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return AuxOptions;
};
