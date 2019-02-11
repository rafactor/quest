'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('AuxOptions', [
      {
      QuestionId: 1,  
      name: 'maritalStatus',
      optionEn: "Annulled Marriage",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      QuestionId: 1,  
      name: 'maritalStatus',
      optionEn: "Common-Law",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      QuestionId: 1,  
      name: 'maritalStatus',
      optionEn: "Divorced / Separated",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 1,  
      name: 'maritalStatus',
      optionEn: "Legally Separated",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 1,  
      name: 'maritalStatus',
      optionEn: "Married",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 1,  
      name: 'maritalStatus',
      optionEn: "Single",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 1,  
      name: 'maritalStatus',
      optionEn: "Widowed",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 2,      
      name: 'yesNo',
      optionEn: "Yes",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 2,      
      name: 'yesNo',
      optionEn: "No",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 3,      
      name: 'yesNo',
      optionEn: "Yes",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 3,      
      name: 'yesNo',
      optionEn: "No",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 4,
      name: "age",
      optionEn: "17 years of age or less",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 4,
      name: "age",
      optionEn: "45 years of age or more",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      QuestionId: 5,      
      name: 'educationLevel',
      optionEn: "None or less than secondary (high school)",
      optionPt:"",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 5,      
      name: 'educationLevel',
      optionEn: "Secondary diploma (high school graduation)",
      optionPt:"",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 5,      
      name: 'educationLevel',
      optionEn: "One-year degree, diploma or certificate",
      optionPt:"",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 5,      
      name: 'educationLevel',
      optionEn: "Two-year program at university or college",
      optionPt:"",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 5,      
      name: 'educationLevel',
      optionEn: "Bachelor's degree or 3+ year program",
      optionPt:"",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 5,      
      name: 'educationLevel',
      optionEn: "3+ year program plus another certificate, diploma or degree",
      optionPt:"",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 5,      
      name: 'educationLevel',
      optionEn: "Master degree OR professional degree needed to practice in a licensed profession",
      optionPt:"",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 5,      
      name: 'educationLevel',
      optionEn: "Doctoral level university degree (Ph.D.)",
      optionPt:"",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 6,
      name: "yesNo",
      optionEn: "yes",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 6,
      name: "yesNo",
      optionEn: "no",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 7,
      name: "canadianEducation",
      optionEn: "Secondary (high school) or less",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      QuestionId: 7,
      name: "canadianEducation",
      optionEn: "One- or Two-year diploma or certificate",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 7,
      name: "canadianEducation",
      optionEn: "Degree, diploma or certificate of three years or longer OR a Master's, professional, or doctoral degree of at least one academic year",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 8,
      name: "yesNo",
      optionEn: "yes",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 8,
      name: "yesNo",
      optionEn: "no",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 9,
      name: "languageTests1",
      optionEn: "CELPIP-G",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 9,
      name: "languageTests1",
      optionEn: "IELTS",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 9,
      name: "languageTests1",
      optionEn: "TEF Canada",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 9,
      name: "languageTests1",
      optionEn: "TCF Canada",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 10,
      name: "celpipSpeakingScores",
      optionEn: "10-12",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 10,
      name: "celpipSpeakingScores",
      optionEn: "9",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 10,
      name: "celpipSpeakingScores",
      optionEn: "8",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 10,
      name: "celpipSpeakingScores",
      optionEn: "7",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 10,
      name: "celpipSpeakingScores",
      optionEn: "6",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 10,
      name: "celpipSpeakingScores",
      optionEn: "4",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 10,
      name: "celpipSpeakingScores",
      optionEn: "M, 0-3",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 11,
      name: "celpipListeningScores",
      optionEn: "10-12",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 11,
      name: "celpipListeningScores",
      optionEn: "9",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 11,
      name: "celpipListeningScores",
      optionEn: "8",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 11,
      name: "celpipListeningScores",
      optionEn: "7",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 11,
      name: "celpipListeningScores",
      optionEn: "6",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 11,
      name: "celpipListeningScores",
      optionEn: "4",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 11,
      name: "celpipListeningScores",
      optionEn: "M, 0-3",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 12,
      name: "celpipReadingScores",
      optionEn: "10-12",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 12,
      name: "celpipReadingScores",
      optionEn: "9",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 12,
      name: "celpipReadingingScores",
      optionEn: "8",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 12,
      name: "celpipReadingScores",
      optionEn: "7",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 12,
      name: "celpipReadingScores",
      optionEn: "6",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 12,
      name: "celpipReadingScores",
      optionEn: "4",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 12,
      name: "celpipReadingScores",
      optionEn: "M, 0-3",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 13,
      name: "celpipWritingScores",
      optionEn: "10-12",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 13,
      name: "celpipWritingScores",
      optionEn: "9",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 13,
      name: "celpipWritingScores",
      optionEn: "8",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 13,
      name: "celpipWritingScores",
      optionEn: "7",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 13,
      name: "celpipWritingScores",
      optionEn: "6",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 13,
      name: "celpipWritingScores",
      optionEn: "4",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 13,
      name: "celpipWritingScores",
      optionEn: "M, 0-3",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 14,
      name: "ieltsSpeakingScores",
      optionEn: "7.5 - 9.0",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 14,
      name: "ieltsSpeakingScores",
      optionEn: "7.0",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 14,
      name: "ieltsSpeakingScores",
      optionEn: "6.5",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 14,
      name: "ieltsSpeakingScores",
      optionEn: "6.0",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 14,
      name: "ieltsSpeakingScores",
      optionEn: "5.5",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 14,
      name: "ieltsSpeakingScores",
      optionEn: "5.0",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 14,
      name: "ieltsSpeakingScores",
      optionEn: "4.0 - 4.5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 14,
      name: "ieltsSpeakingScores",
      optionEn: "0 - 3.5",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 15,
      name: "ieltsListeningScores",
      optionEn: "8.5 - 9.0",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 15,
      name: "ieltsListeningScores",
      optionEn: "8.0",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 15,
      name: "ieltsListeningScores",
      optionEn: "7.5",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 15,
      name: "ieltsListeningScores",
      optionEn: "6.0 - 7.0",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 15,
      name: "ieltsListeningScores",
      optionEn: "5.5",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 15,
      name: "ieltsListeningScores",
      optionEn: "5.0",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 15,
      name: "ieltsListeningScores",
      optionEn: "4.5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 15,
      name: "ieltsListeningScores",
      optionEn: "0 - 4.0",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 16,
      name: "ieltsReadingScores",
      optionEn: "8.0 - 9.0",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 16,
      name: "ieltsReadingScores",
      optionEn: "7.0 - 7.5",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 16,
      name: "ieltsReadingScores",
      optionEn: "6.5",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 16,
      name: "ieltsReadingScores",
      optionEn: "6.0",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 16,
      name: "ieltsReadingScores",
      optionEn: "5.0 - 5.5",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 16,
      name: "ieltsReadingScores",
      optionEn: "4.0 - 4.5",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 16,
      name: "ieltsReadingScores",
      optionEn: "3.5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 16,
      name: "ieltsReadingScores",
      optionEn: "0 - 3.5",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 17,
      name: "ieltsWritingScores",
      optionEn: "7.5 - 9.0",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 17,
      name: "ieltsWritingScores",
      optionEn: "7.0",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 17,
      name: "ieltsWritingScores",
      optionEn: "6.5",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 17,
      name: "ieltsWritingScores",
      optionEn: "6.0",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 17,
      name: "ieltsWritingScores",
      optionEn: "5.5",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 17,
      name: "ieltsWritingScores",
      optionEn: "5.0",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 17,
      name: "ieltsWritingScores",
      optionEn: "4.0 - 4.5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 17,
      name: "ieltsWritingScores",
      optionEn: "0 - 3.5",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 18,
      name: "tefSpeakingScores",
      optionEn: "393-450",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 18,
      name: "tefSpeakingScores",
      optionEn: "371-392",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 18,
      name: "tefSpeakingScores",
      optionEn: "349-370",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 18,
      name: "tefSpeakingScores",
      optionEn: "310-348",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 18,
      name: "tefSpeakingScores",
      optionEn: "271-309",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 18,
      name: "tefSpeakingScores",
      optionEn: "226-270",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 18,
      name: "tefSpeakingScores",
      optionEn: "181-225",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 18,
      name: "tefSpeakingScores",
      optionEn: "0-180",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 19,
      name: "tefListeningScores",
      optionEn: "316-360",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 19,
      name: "tefListeningScores",
      optionEn: "298-315",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 19,
      name: "tefListeningScores",
      optionEn: "280-297",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 19,
      name: "tefListeningScores",
      optionEn: "249-279",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 19,
      name: "tefListeningScores",
      optionEn: "217-248",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 19,
      name: "tefListeningScores",
      optionEn: "181-216",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 19,
      name: "tefListeningScores",
      optionEn: "145-180",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 19,
      name: "tefListeningScores",
      optionEn: "0-144",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 20,
      name: "tefReadingScores",
      optionEn: "263-300",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 20,
      name: "tefReadingScores",
      optionEn: "248-262",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 20,
      name: "tefReadingScores",
      optionEn: "233-247",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 20,
      name: "tefReadingScores",
      optionEn: "207-232",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 20,
      name: "tefReadingScores",
      optionEn: "181-206",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 20,
      name: "tefReadingScores",
      optionEn: "151-180",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 20,
      name: "tefReadingScores",
      optionEn: "121-150",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 20,
      name: "tefReadingScores",
      optionEn: "0-120",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 21,
      name: "tefWritingScores",
      optionEn: "393-450",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 21,
      name: "tefWritingScores",
      optionEn: "371-392",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 21,
      name: "tefWritingScores",
      optionEn: "349-370",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 21,
      name: "tefWritingScores",
      optionEn: "310-348",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 21,
      name: "tefWritingScores",
      optionEn: "271-309",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 21,
      name: "tefWritingScores",
      optionEn: "226-270",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 21,
      name: "tefWritingScores",
      optionEn: "181-225",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 21,
      name: "tefWritingScores",
      optionEn: "0-180",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 22,
      name: "tfcSpeakingScores",
      optionEn: "16-20",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 22,
      name: "tfcSpeakingScores",
      optionEn: "14-15",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 22,
      name: "tfcSpeakingScores",
      optionEn: "12-13",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 22,
      name: "tfcSpeakingScores",
      optionEn: "10-11",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 22,
      name: "tfcSpeakingScores",
      optionEn: "7-9",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 22,
      name: "tfcSpeakingScores",
      optionEn: "6",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 22,
      name: "tfcSpeakingScores",
      optionEn: "4-5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 22,
      name: "tfcSpeakingScores",
      optionEn: "0-3",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 23,
      name: "tfcListeningScores",
      optionEn: "549-699",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 23,
      name: "tfcListeningScores",
      optionEn: "523-548",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 23,
      name: "tfcListeningScores",
      optionEn: "503-522",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 23,
      name: "tfcListeningScores",
      optionEn: "458-502",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 23,
      name: "tfcListeningScores",
      optionEn: "398-457",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 23,
      name: "tfcListeningScores",
      optionEn: "369-397",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 23,
      name: "tfcListeningScores",
      optionEn: "331-368",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 23,
      name: "tfcListeningScores",
      optionEn: "0-330",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 24,
      name: "tfcReadingScores",
      optionEn: "549-699",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 24,
      name: "tfcReadingScores",
      optionEn: "524-548",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 24,
      name: "tfcReadingScores",
      optionEn: "499-523",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 24,
      name: "tfcReadingScores",
      optionEn: "453-498",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 24,
      name: "tfcReadingScores",
      optionEn: "406-452",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 24,
      name: "tfcReadingScores",
      optionEn: "375-405",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 24,
      name: "tfcReadingScores",
      optionEn: "342-374",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 24,
      name: "tfcReadingScores",
      optionEn: "0-341",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 25,
      name: "tfcWritingScores",
      optionEn: "16-20",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 25,
      name: "tfcWritingScores",
      optionEn: "14-15",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 25,
      name: "tfcWritingScores",
      optionEn: "12-13",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 25,
      name: "tfcWritingScores",
      optionEn: "10-11",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 25,
      name: "tfcWritingScores",
      optionEn: "7-9",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 25,
      name: "tfcWritingScores",
      optionEn: "6",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 25,
      name: "tfcWritingScores",
      optionEn: "4-5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 25,
      name: "tfcWritingScores",
      optionEn: "0-3",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 26,
      name: "languageTests2",
      optionEn: "CELPIP-G",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 26,
      name: "languageTests2",
      optionEn: "IELTS",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 27,
      name: "celpipSpeakingScores2",
      optionEn: "10-12",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 27,
      name: "celpipSpeakingScores2",
      optionEn: "9",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 27,
      name: "celpipSpeakingScores2",
      optionEn: "8",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 27,
      name: "celpipSpeakingScores2",
      optionEn: "7",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 27,
      name: "celpipSpeakingScores2",
      optionEn: "6",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 27,
      name: "celpipSpeakingScores2",
      optionEn: "4",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 27,
      name: "celpipSpeakingScore2s",
      optionEn: "M, 0-3",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 28,
      name: "celpipListeningScores2",
      optionEn: "10-12",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 28,
      name: "celpipListeningScores2",
      optionEn: "9",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 28,
      name: "celpipListeningScores2",
      optionEn: "8",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 28,
      name: "celpipListeningScores2",
      optionEn: "7",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 28,
      name: "celpipListeningScores2",
      optionEn: "6",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 28,
      name: "celpipListeningScores2",
      optionEn: "4",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 28,
      name: "celpipListeningScores2",
      optionEn: "M, 0-3",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 29,
      name: "celpipReadingScores2",
      optionEn: "10-12",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 29,
      name: "celpipReadingScores2",
      optionEn: "9",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 29,
      name: "celpipReadingScores2",
      optionEn: "8",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 29,
      name: "celpipReadingScores2",
      optionEn: "7",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 29,
      name: "celpipReadingScores2",
      optionEn: "6",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 29,
      name: "celpipReadingScores2",
      optionEn: "4",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 29,
      name: "celpipReadingScores2",
      optionEn: "M, 0-3",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 30,
      name: "celpipWritingScores2",
      optionEn: "10-12",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 30,
      name: "celpipWritingScores2",
      optionEn: "9",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 30,
      name: "celpipWritingScores2",
      optionEn: "8",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 30,
      name: "celpipWritingScores2",
      optionEn: "7",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 30,
      name: "celpipWritingScores2",
      optionEn: "6",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 30,
      name: "celpipWritingScores2",
      optionEn: "4",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 30,
      name: "celpipWritingScores2",
      optionEn: "M, 0-3",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 31,
      name: "ieltsSpeakingScores2",
      optionEn: "7.5 - 9.0",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 31,
      name: "ieltsSpeakingScores2",
      optionEn: "7.0",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 31,
      name: "ieltsSpeakingScores2",
      optionEn: "6.5",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 31,
      name: "ieltsSpeakingScores2",
      optionEn: "6.0",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 31,
      name: "ieltsSpeakingScores2",
      optionEn: "5.5",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 31,
      name: "ieltsSpeakingScores2",
      optionEn: "5.0",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 31,
      name: "ieltsSpeakingScores2",
      optionEn: "4.0 - 4.5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 31,
      name: "ieltsSpeakingScores2",
      optionEn: "0 - 3.5",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 32,
      name: "ieltsListeningScores2",
      optionEn: "8.5 - 9.0",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 32,
      name: "ieltsListeningScores2",
      optionEn: "8.0",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 32,
      name: "ieltsListeningScores2",
      optionEn: "7.5",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 32,
      name: "ieltsListeningScores2",
      optionEn: "6.0 - 7.0",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 32,
      name: "ieltsListeningScores2",
      optionEn: "5.5",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 32,
      name: "ieltsListeningScores2",
      optionEn: "5.0",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 32,
      name: "ieltsListeningScores2",
      optionEn: "4.5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 32,
      name: "ieltsListeningScores2",
      optionEn: "0 - 4.0",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 33,
      name: "ieltsReadingScores2",
      optionEn: "8.0 - 9.0",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 33,
      name: "ieltsReadingScores2",
      optionEn: "7.0 - 7.5",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 33,
      name: "ieltsReadingScores2",
      optionEn: "6.5",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 33,
      name: "ieltsReadingScores2",
      optionEn: "6.0",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 33,
      name: "ieltsReadingScores2",
      optionEn: "5.0 - 5.5",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 33,
      name: "ieltsReadingScores2",
      optionEn: "4.0 - 4.5",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 33,
      name: "ieltsReadingScores2",
      optionEn: "3.5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 33,
      name: "ieltsReadingScores2",
      optionEn: "0 - 3.5",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 34,
      name: "ieltsWritingScores2",
      optionEn: "7.5 - 9.0",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 34,
      name: "ieltsWritingScores2",
      optionEn: "7.0",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 34,
      name: "ieltsWritingScores2",
      optionEn: "6.5",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 34,
      name: "ieltsWritingScores2",
      optionEn: "6.0",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 34,
      name: "ieltsWritingScores2",
      optionEn: "5.5",
      optionPt: "",
      order: 5,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 34,
      name: "ieltsWritingScores2",
      optionEn: "5.0",
      optionPt: "",
      order: 6,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 34,
      name: "ieltsWritingScores2",
      optionEn: "4.0 - 4.5",
      optionPt: "",
      order: 7,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 34,
      name: "ieltsWritingScores2",
      optionEn: "0 - 3.5",
      optionPt: "",
      order: 8,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 35,
      name: "workExperience",
      optionEn: "None or less than a year",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 35,
      name: "workExperience",
      optionEn: "1 year",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 35,
      name: "workExperience",
      optionEn: "2 years",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 35,
      name: "workExperience",
      optionEn: "3 years or more",
      optionPt: "",
      order: 4,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 36,
      name: "yesNo",
      optionEn: "yes",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 36,
      name: "yesNo",
      optionEn: "no",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 37,
      name: "yesNo",
      optionEn: "yes",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 37,
      name: "yesNo",
      optionEn: "no",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 38,
      name: "skillLevel",
      optionEn: "NOC Skill Type 00",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 38,
      name: "skillLevel",
      optionEn: "NOC Skill Level A or B or any Type 0 other than 00",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 38,
      name: "skillLevel",
      optionEn: "NOC Skill Level C or D",
      optionPt: "",
      order: 3,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 39,
      name: "yesNo",
      optionEn: "yes",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 39,
      name: "yesNo",
      optionEn: "no",
      optionPt: "",
      order: 2,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 40,
      name: "yesNo",
      optionEn: "yes",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      QuestionId: 40,
      name: "yesNo",
      optionEn: "no",
      optionPt: "",
      order: 1,
      type: "STRING",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
