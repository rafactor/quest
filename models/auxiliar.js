module.exports = function(sequelize, DataTypes) {
  var AuxOptions = sequelize.define("AuxOptions", {
    name: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
    },

    option: {
      type: DataTypes.STRING,
      defaultValue: null,
      allowNull: false,
      notEmpty: true
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

  return AuxOptions;
};
