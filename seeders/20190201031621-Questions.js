module.exports = {
  up: function(queryInterface) {
    return queryInterface.bulkInsert(
      "Questions",
      [
        {
          questionEn: "What is your martial status?",
          questionPt: "Qual e o seu estado civil?",
          type: "Option",
          optionList: "maritalStatus",
          isConditional: false,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn:
            "Is your spouse or common-law partner a citizen or permanent resident of Canada?",
          questionPt: "",
          type: "yesNo",
          optionList: "yesNo",
          isConditional: true,
          conditionalQuestionId: 1,
          conditionalAnswer: "yes",
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn:
            "Will your spouse or common-law partner come with you to Canada?",
          questionPt: "",
          type: "yesNo",
          optionList: "yesNo",
          isConditional: true,
          conditionalQuestionId: 2,
          conditionalAnswer: "no",
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn: "What is your date of birth?",
          questionPt: "",
          type: "Date",
          optionList: null,
          isConditional: true,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn: "What is your level of education?",
          questionPt: "",
          type: "Option",
          optionList: "education",
          isConditional: true,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn:
            "Do you have a language test results less than two years old?",
          questionPt: "",
          type: "yesNo",
          optionList: "yesNo",
          isConditional: false,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn:
            "Which language test did you take for your first official language?",
          questionPt: "",
          type: "Option",
          optionList: "languageTests",
          isConditional: false,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn: "Enter your Speaking Test Score:",
          questionPt: "",
          type: "Option",
          optionList: "languageTestsScore",
          isConditional: false,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn: "Enter your Listening Test Score:",
          questionPt: "",
          type: "Option",
          optionList: "languageTestsScore",
          isConditional: false,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn: "Enter your Reading Test Score:",
          questionPt: "",
          type: "Option",
          optionList: "languageTestsScore",
          isConditional: false,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        },
        {
          questionEn: "Enter your Writing Test Score:",
          questionPt: "",
          type: "Option",
          optionList: "languageTestsScore",
          isConditional: false,
          conditionalQuestionId: null,
          conditionalAnswer: null,
          status: "active",
          version: 1.0,
          createdAt: new Date(),
          updatedAt: new Date(),
          QuestionnaireId: 1
        }
      ],
      {}
    );
  },

  down: function(queryInterface) {
    return queryInterface.bulkDelete("Questions", null, [
      {
        id: 1
      }
    ]);
  }
};
