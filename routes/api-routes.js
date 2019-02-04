var express = require("express");
var router = express.Router();

var questionnaire = require("../controllers/questionnaire-controller")
// route Questionnaires calls
router.get("/questionnaires", questionnaire.getAll);
router.get("/questionnaires/:id", questionnaire.getQuestionnaire);
router.post("/questionnaires/", questionnaire.create);
router.delete("/questionnaires/:id", questionnaire.delete);
router.put("/questionnaires", questionnaire.update);

module.exports = router;