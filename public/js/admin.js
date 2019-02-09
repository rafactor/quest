console.log('admin')

const $btnSubmitQuestionnaire = $("#questionnaire-submit");
const $btnEditQuestionnaire = $("#questionnaire-edit");
const $btnSaveQuestionnaire = $("#questionnaire-save");
const $btnCancelQuestionnaire = $("#questionnaire-cancel");


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
  postQuestionnaire(body) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/questionnaires",
      data: JSON.stringify(body)
    });
  },
  getQuestionnaire(id) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: "api/questionnaires/" + id,
    });

  }
}


var handlers = {
  submitQuestionnaire() {
    event.preventDefault();
    var body = {
      name: $inputQuestionnaireName.val().trim(),
      code: $inputQuestionnaireCode.val().trim(),
      type: $inputQuestionnaireType.val().trim(),
      // description: inputQuestionnaireDescription.value.trim(),
      active: ($toogleQuestionnaireActive.hasClass("is-checked")) ? true : false,
    };
    api.postQuestionnaire(body)
  },

  createQuestionnaireForm() {
    $cardCreateQuestionnaire.removeClass('hidden');
    $cardCreateQuestionnaireTitle.html('Create Questionnaire')

    $btnCreateQuestionnaire.addClass('hidden');
    $btnSubmitQuestionnaire.removeClass('hidden');
    $btnSaveQuestionnaire.addClass('hidden');
    $btnEditQuestionnaire.addClass('hidden');

    $inputQuestionnaireName.val("").attr('disabled', false);
    $inputQuestionnaireType.val("").attr('disabled', false);
    $inputQuestionnaireCode.val("").attr('disabled', false);
    $inputQuestionnaireDescription.val("").attr('disabled', false);
    $toogleQuestionnaireActive.attr('disabled', false)
  },

  closeQuestionnaireForm() {
    $cardCreateQuestionnaire.addClass('hidden');
    $btnCreateQuestionnaire.removeClass('hidden');
  },

  editQuestionnaire() {
    event.preventDefault();

    console.log('edit')
    $inputQuestionnaireName.attr('disabled', false);
    $inputQuestionnaireType.attr('disabled', false);
    $inputQuestionnaireCode.attr('disabled', false);
    $inputQuestionnaireDescription.attr('disabled', false);
    $toogleQuestionnaireActive.attr('disabled', false)

    $btnSubmitQuestionnaire.addClass('hidden');
    $btnEditQuestionnaire.addClass('hidden');
    $btnSaveQuestionnaire.removeClass('hidden');
    $btnCancelQuestionnaire.removeClass('hidden');
  },

  listedQuestionnaire() {
    var id = $(this).attr("data-id");
    $cardCreateQuestionnaire.removeClass('hidden');
    $btnCreateQuestionnaire.addClass('hidden');
    $cardCreateQuestionnaireTitle.html('View Questionnaire')

    //call the api and populate fields
    api.getQuestionnaire(id).then(function (response) {
      console.log(response.questionnaires)
      $inputQuestionnaireName
        .val(response.questionnaires[0].name)
        .attr('disabled', 'disabled');
      $inputQuestionnaireCode.val(response.questionnaires[0].code)
        .attr('disabled', 'disabled');
      $inputQuestionnaireType.val(response.questionnaires[0].type)
        .attr('disabled', 'disabled');
      $inputQuestionnaireDescription.val(response.questionnaires[0].description)
        .attr('disabled', 'disabled');
      $toogleQuestionnaireActive.attr('disabled', 'disabled');
      // $toogleQuestionnaireActive.val(response.questionnaires[0].active)
      // if (response.questionnaires[0].active === false) {
      //   $toogleQuestionnaireActive.removeClass("is-checked");
      // } else { $toogleQuestionnaireActive.addClass("is-checked");}

      $btnSubmitQuestionnaire.addClass('hidden');
      $btnEditQuestionnaire.removeClass('hidden');
      $btnSaveQuestionnaire.addClass('hidden');


      //hide submit button and show edit and save 


      $("#quest-card__create-questionnaire > div > form > .mdl-textfield").addClass('is-dirty')
    })





  }
}


$btnSubmitQuestionnaire.on("click", handlers.submitQuestionnaire);
$btnEditQuestionnaire.on("click", handlers.editQuestionnaire)
$btnCreateQuestionnaire.on("click", handlers.createQuestionnaireForm);
$btnCloseQuestionnaire.on("click", handlers.closeQuestionnaireForm);
// btnListedQuestionnaire.addEventListener("click", handlers.listedQuestionnaire);
$liListedQuestionnaire.on("click", handlers.listedQuestionnaire)