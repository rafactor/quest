var express = require("express");
var router = express.Router();
var questionnaire = require("../controllers/questionnaire-controller");
var question = require("../controllers/question-controller");

// route Questionnaires calls
router.get("/questionnaires", questionnaire.list);
router.post("/questionnaires", questionnaire.create);
router.put("/questionnaires", questionnaire.update);
router.delete("/questionnaires/:id", questionnaire.delete);

// route Questionnaires calls
router.get("/questionnaires/:id/questions", question.list);
router.post("/questionnaires/:id/questions", question.create);
router.put("/questionnaires/:id/questions", question.update);
router.delete("/questionnaires/:id/question/:id", question.delete);
module.exports = router;
