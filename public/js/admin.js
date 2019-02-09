console.log('admin')

const $btnSubmitQuestionnaire = $("#submit-questionnaire");
const $btnCreateQuestionnaire = $("#btn-create-questionnaire");
const $btnCloseQuestionnaire = $("#btn-close-questionnaire");
// const btnListedQuestionnaire = document.querySelectorAll('li.questionnaire-listed>span');
const $liListedQuestionnaire = $('li.questionnaire-listed>span')

const $cardCreateQuestionnaire = $("#quest-card__create-questionnaire");
const $cardCreateQuestionnaireTitle = $("#quest-card__create-questionnaire__title");
// const $cardListQuestionnaire = $("#card-list-questionnaire");
// const $cardQuestionnaireTitle = $("#input-questionnaire-name");
const $inputQuestionnaireName = $("#input-questionnaire-name");
const $inputQuestionnaireCode = $("#input-questionnaire-code");
const $inputQuestionnaireType = $("#input-questionnaire-type");
const $inputQuestionnaireDescription = $("#input-questionnaire-description");
const $toogleQuestionnaireActive = $("#toogle-questionnaire-active");

var api = {
  postQuestionnaire(body){
    return $.ajax({
              headers: {
                "Content-Type": "application/json"
              },
              type: "POST",
              url: "api/questionnaires",
              data: JSON.stringify(body)
            });
  }
}


var handlers = {
  submitQuestionnaire(){
    event.preventDefault();  
    var body = {
      name: inputQuestionnaireName.value.trim(),
      code: inputQuestionnaireCode.value.trim(),
      type: inputQuestionnaireType.value.trim(),
      // description: inputQuestionnaireDescription.value.trim(),
      active: toogleQuestionnaireActive.value
    };
    api.postQuestionnaire(body)
  },

  displayQuestionnaireForm(){
    $cardCreateQuestionnaire.removeClass('hidden');
    $btnCreateQuestionnaire.addClass('hidden');
    $cardCreateQuestionnaireTitle.html('Create a New Questionnaire')
  },

  listedQuestionnaire(){
    var id = $(this).attr("data-id");
    $cardCreateQuestionnaire.removeClass('hidden');
    $btnCreateQuestionnaire.addClass('hidden');
    $cardCreateQuestionnaireTitle.html('Create a New Questionnaire')

    // $inputQuestionnaireName = 
    // $inputQuestionnaireCode = 
    // $inputQuestionnaireType = 
    // $inputQuestionnaireDescription = 
    // $toogleQuestionnaireActive = 
    


  }
}


$btnSubmitQuestionnaire.on("click", handlers.submitQuestionnaire);
$btnCreateQuestionnaire.on("click", handlers.displayQuestionnaireForm);
// btnCloseQuestionnaire.on("click", handlers.displayQuestionnaireForm);
// btnListedQuestionnaire.addEventListener("click", handlers.listedQuestionnaire);
$liListedQuestionnaire.on("click",handlers.listedQuestionnaire)
