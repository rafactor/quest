module.exports = function (sequelize, DataTypes) {
    var Question = sequelize.define('question', {
        question: DataTypes.STRING,
        type: DataTypes.STRING,
        status: DataTypes.STRING,
        required: DataTypes.BOOLEAN,
        
    });
    return Question;

}
