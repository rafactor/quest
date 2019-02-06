var express = require("express");
var router = express.Router();

var questionnaire = require("../controllers/questionnaire-controller");
var auxiliar = require("../controllers/auxiliar-controller");

// route Questionnaires calls
router.get("/questionnaires", questionnaire.getAll);
router.get("/questionnaires/:id", questionnaire.getQuestionnaire);
router.post("/questionnaires/", questionnaire.create);
router.delete("/questionnaires/:id", questionnaire.delete);
router.put("/questionnaires", questionnaire.update);

// route Auxiliar calls
router.get("/auxiliar", auxiliar.getAuxOption);

module.exports = router;