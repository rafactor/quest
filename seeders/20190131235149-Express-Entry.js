module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "Questionnaires",
      [
        {
          name: "Express Entry",
          type: "Calculator",
          active: false,
          code: "EE01",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface) {
    return queryInterface.bulkDelete("Questionnaires", null, [
      {
        id: 1
      }
    ]);
  }
};
