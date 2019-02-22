"use strict";

console.log("admin");

const $questionnaireList = $(".quest-card__list--questionnaires");
const $questionList = $(".quest-card__list--questions");

//Questionnaire Fields
const $cardQuestionnaire = $(".quest-card--questionnaire");
const $cardQuestionnaireTitle = $("#input-questionnaire-name");
const $cardQuestionDetail = $(".quest-card__detailed-questions");
const $containerCreateQuestionnaire = $(".quest-card__container");
const $titleCreateQuestionnaireTitle = $(".quest-card__questionnaire__title");
const $containerQuestions = $("#container__questions > div");

//Questionnaire buttons
const $btnCreateQuestionnaire = $("#btn-create-questionnaire");
const $btnCreateQuestions = $("#btn-create-question");
const $btnCloseQuestionnaire = $("#btn-close-questionnaire");
const $btnListedQuestionnaire = $(".quest-card__list--questionnaires > li");
const $btnListedQuestion = $(".quest-card__list--questions > li");

const $btnQuestionnaireButtons = $(".mdl-button--raised");
const $btnSubmitQuestionnaire = $("#questionnaire-submit");
const $btnEditQuestionnaire = $("#questionnaire-edit");
const $btnSaveQuestionnaire = $("#questionnaire-save");
const $btnCancelQuestionnaire = $("#questionnaire-cancel");
const $btnDeleteQuestionnaire = $("#questionnaire-delete");
const $btnEditQuestions = $(".quest-card__list--questions > li > a");

// Questionnaires Block
// const $cardListQuestionnaire = $(".quest-card__list-questionnaires");


//Questions Block
const $cardQuestions = $(".quest-card__list--questions");
const $containerQuestionsDetail = $(".quest-card__detailed-questions > .quest-card__container")

//Questions Fields
const $fieldsQuestionDetail = $(
  ".quest-card__detailed-questions > div > form > .mdl-textfield"
);
const $inputsQuestionDetail = $(
  ".quest-card__detailed-questions > div > form > div > .mdl-textfield__input"
)
const $inputsQuestionDetailConditional = $(
  "#conditional-block > div > .mdl-textfield__input"
);
const $fieldsQuestionDetailConditional = $(
  "#conditional-block > .mdl-textfield"
);




const $inputQuestionEn = $('#input-question-name');
const $inputQuestionType = $('#input-question-type');
const $selectorQuestionType = $('#ul-input-question-type > li');
const $inputQuestionOptionList = $('#input-option-list');
const $inputConditionalQuestionId = $("#conditional-question-id");
const $inputConditionalAnswer = $('#conditional-answer');

const $btnQuestionButtons = $(".mdl-button--raised");
const $btnSubmitQuestion = $("#question-submit");
const $btnEditQuestion = $("#question-edit");
const $btnSaveQuestion = $("#question-save");
const $btnCancelQuestion = $("#question-cancel");
const $btnDeleteQuestion = $("#question-delete");

const $selectors = $('.getmdl-select')


//fields in Questionnaire Detail Card
const $fieldsQuestionnaireDetail = $(
  ".quest-card__questionnaire > div > form > .mdl-textfield"
);
const $inputsQuestionnaireDetail = $(
  ".quest-card__questionnaire > div > form > div > .mdl-textfield__input"
);

const $inputQuestionnaireName = $("#input-questionnaire-name");
const $inputQuestionnaireCode = $("#input-questionnaire-code");
const $inputQuestionnaireType = $("#input-questionnaire-type");
const $inputQuestionnaireDescription = $("#input-questionnaire-description");

const $toogleQuestionnaireActive = $("#label-active-switch");
const $toogleQuestionnaireActiveInput = $("#label-active-switch > input");
const $toogleQuestionnaireActiveLabel = $(
  "#label-active-switch > span.mdl-switch__label"
);

const $toogleQuestionActive = $("#label-question-active-switch");
const $toogleQuestionActiveInput = $("#label-question-active-switch > input");
const $toogleQuestionActiveLabel = $(
  "#label-question-active-switch > span.mdl-switch__label"
);

const $toogleConditionalQuestionActive = $("#label-conditional-switch");
const $toogleConditionalQuestionInput = $("#label-conditional-switch > input");
const $toogleConditionalQuestionLabel = $(
  "#label-conditional-switch > span.mdl-switch__label"
);
const $conditionalQuestionBlock = $('#conditional-block')


var selectedId;
var selectedQuestionnaire = {}
var selectedQuestionID;

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

  postQuestion(body) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/questionnaires/" + body.QuestionnaireId + "/question",
      data: JSON.stringify(body)
    });
  },

  getQuestionnaires() {
    return $.ajax({
      // headers: {
      //   "Content-Type": "application/json"
      // },
      type: "GET",
      url: "api/questionnaires/"
    });
  },

  getQuestionnaire(selectedId) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: "api/questionnaires/" + selectedId
    });
  },

  deleteQuestionnaire(selectedId) {
    console.log("api delete");
    return $.ajax({
      type: "DELETE",
      url: "api/questionnaires/" + selectedId
    });
  },

  deleteQuestion(selectedQuestionID) {
    console.log("api delete");
    return $.ajax({
      type: "DELETE",
      url: "api/questionnaires/" + selectedId + "/question/" + selectedQuestionID
    });
  },

  updateQuestionnaire(body) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "PUT",
      url: "api/questionnaires/",
      data: JSON.stringify(body)
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var handlers = {
  getQuestionnaires() {
    $questionnaireList.empty();
    api.getQuestionnaires().then(function (data) {
      var object = data.questionnaires;
      for (let o in object) {
        let html =
          '<li class="mdl-list__item mdl-list__item--two-line" data-id=' +
          object[o].id +
          ">" +
          '<span class="mdl-list__item-primary-content" data-id=' +
          object[o].id +
          ">" +
          '<i class="material-icons mdl-list__item-avatar" data-id=' +
          object[o].id +
          ">question_answer</i>" +
          "<span data-id=" +
          object[o].id +
          ">" +
          object[o].name +
          "</span>" +
          '<span class="mdl-list__item-sub-title" data-id=' +
          object[o].id +
          ">" +
          object[o].type +
          " | " +
          object[o].code +
          "</span>" +
          "</span>" +
          "</span>" +
          "</li>";

        $questionnaireList.append(html);
      }
    });
  },

  newQuestionnaire() {
    //Display the form and enable fields
    console.log('new')
    $containerCreateQuestionnaire.removeClass("hidden");
    $btnCloseQuestionnaire.removeClass("hidden");
    $fieldsQuestionnaireDetail.addClass("is-dirty")
    $inputsQuestionnaireDetail.attr("disabled", false);
    // $fieldsQuestionnaireDetailConditional.removeClass("is-dirty").attr("disabled", false);

    $toogleQuestionnaireActiveInput.attr("disabled", false);

    //clear fields
    $inputQuestionnaireName.val("");
    $inputQuestionnaireCode.val("");
    $inputQuestionnaireType.val("");
    $inputQuestionnaireDescription.val("");

    // $containerCreateQuestionnaire.removeClass('hidden');
    $titleCreateQuestionnaireTitle.html("Create Questionnaire");

    // hide all buttons and display submit
    $btnQuestionnaireButtons.addClass("hidden");
    $btnSubmitQuestionnaire.removeClass("hidden");
  },

  submitQuestionnaire() {
    event.preventDefault();
    var body = {
      name: $inputQuestionnaireName.val().trim(),
      code: $inputQuestionnaireCode.val().trim(),
      type: $inputQuestionnaireType.val().trim(),
      description: $inputQuestionnaireDescription.val().trim(),
      active: $toogleQuestionnaireActive.hasClass("is-checked") ? true : false
    };
    
    api.postQuestionnaire(body);
    window.location.reload();
  },

  submitQuestion(){
    event.preventDefault();
    var body = {
      QuestionnaireId: parseInt(selectedId),
      questionEn: ($inputQuestionEn) ? $inputQuestionEn.val().trim() : null,
      type: ($inputQuestionType) ? $inputQuestionType.val().trim() : null,
      optionList: ($inputQuestionOptionList) ? $inputQuestionOptionList.val().trim() : null,
      isConditional: $toogleConditionalQuestionActive.hasClass("is-checked") ? true : false,
      conditionalQuestionId: (Number.isInteger($inputConditionalQuestionId)) ? $inputConditionalQuestionId.val() : null,
      conditionalAnswer: ($inputConditionalAnswer) ? $inputConditionalAnswer.val().trim() : null,
      status: $toogleQuestionActive.hasClass("is-checked") ? 'active' : '',
    };

    api.postQuestion(body);
  },

  closeQuestionnaireForm() {
    $containerCreateQuestionnaire.addClass("hidden");
    $btnCloseQuestionnaire.addClass("hidden");
    $btnEditQuestions.addClass("hidden");
    $cardQuestionnaire.removeClass("hidden");
    $cardQuestionDetail.addClass("hidden");
    $btnCreateQuestions.addClass("hidden");

    $btnCreateQuestionnaire.removeClass("hidden");
    $cardQuestions.empty().addClass("hidden");
  },

  listedQuestionnaire() {
    var target = $(event.target);
    selectedId = target.attr("data-id");

    $containerCreateQuestionnaire.removeClass("hidden");
    $btnCloseQuestionnaire.removeClass("hidden");
    $btnCreateQuestionnaire.addClass("hidden");
    $titleCreateQuestionnaireTitle.html("View Questionnaire");
    $btnCreateQuestions.addClass("hidden");

    //call the api and populate fields
    api.getQuestionnaire(selectedId).then(response => {

      selectedQuestionnaire = response;
      console.log(response)
      //show questionnaires fields disabled and dirty (means the title is blue on top of the field)
      $fieldsQuestionnaireDetail.addClass("is-dirty");

      $inputsQuestionnaireDetail.attr("disabled", "disabled");
      $inputsQuestionDetail.attr("disabled", "disabled");
      $inputsQuestionDetailConditional.attr("disabled", "disabled");
      $toogleQuestionnaireActiveInput.attr("disabled", "disabled");
      $toogleConditionalQuestionInput.attr("disabled", "disabled");
      $toogleQuestionActiveInput.attr("disabled", "disabled");

      //populate fields with selected questionnaires attributes
      $inputQuestionnaireName.val(response.questionnaires[0].name);
      $inputQuestionnaireCode.val(response.questionnaires[0].code);
      $inputQuestionnaireType.val(response.questionnaires[0].type);
      $inputQuestionnaireDescription.val(
        response.questionnaires[0].description
      );
      if (response.questionnaires[0].active === false) {
        $toogleQuestionnaireActive.removeClass("is-checked");
        $toogleQuestionnaireActiveLabel.text("Inactive");
      } else {
        $toogleQuestionnaireActive.addClass("is-checked");
        $toogleQuestionnaireActiveLabel.text("Active");
      }

      //hide all buttons and display only edit
      $btnQuestionnaireButtons.addClass("hidden");
      $btnEditQuestionnaire.removeClass("hidden");
      $btnCreateQuestions.removeClass("hidden");
      $cardQuestionDetail.addClass("hidden");
      handlers.getQuestions(response.questionnaires[0]);

      //Show Questions Card
      $cardQuestions.removeClass("hidden");
    });
  },


  listedQuestion(){
    var target = $(event.target);
    var id = target.attr("data-id");
    selectedQuestionID = target.attr("data-questionid");
    

    $containerQuestionsDetail.removeClass('hidden');

    $fieldsQuestionDetail.addClass("is-dirty");
    $fieldsQuestionDetailConditional.addClass("is-dirty");

    var questions = selectedQuestionnaire.questionnaires[0].questions
    console.log(questions)
    $cardQuestionnaire.addClass('hidden');
    $cardQuestionDetail.removeClass('hidden');

    $btnEditQuestion.removeClass('hidden');
    $btnCancelQuestion.addClass("hidden");
    $btnSaveQuestion.addClass("hidden");
    $btnDeleteQuestion.addClass("hidden");
    $inputsQuestionDetail.attr("disabled", "disabled");
    $inputsQuestionDetailConditional.attr("disabled", "disabled")
    $toogleQuestionActiveInput.attr("disabled", "disabled")
    $toogleConditionalQuestionInput.attr("disabled", "disabled")


    //populate fields
     $inputQuestionEn.val(questions[id].questionEn)
     $inputQuestionType.val(questions[id].type)
     $inputQuestionOptionList.val(questions[id].optionList)
     $inputConditionalQuestionId.val(questions[id].conditionalQuestionId)
     $inputConditionalAnswer.val(questions[id].conditionalAnswer)

     if (questions[id].isConditional === true) {
      $toogleConditionalQuestionActive.addClass("is-checked");
      $toogleConditionalQuestionLabel.text("Yes, it is a conditional question");
      $conditionalQuestionBlock.removeClass('hidden');
    } else {
      console.log(questions[id].isConditional)
      $toogleConditionalQuestionActive.removeClass("is-checked");
      $toogleConditionalQuestionLabel.text("No, it is an independent question");
      $conditionalQuestionBlock.addClass('hidden');
    }

    if (questions[id].status !== 'active') {
      $toogleQuestionActive.removeClass("is-checked");
      $toogleQuestionActiveLabel.text("Inactive");
    } else {
      $toogleQuestionActive.addClass("is-checked");
      $toogleQuestionActiveLabel.text("Active");
    }

  },

  editQuestion(){
    $inputsQuestionDetail.attr("disabled", false);
    $inputsQuestionDetailConditional.attr("disabled", false)
    $toogleQuestionActiveInput.attr("disabled", false)
    $toogleConditionalQuestionInput.attr("disabled", false)

    $btnEditQuestion.addClass("hidden");
    $btnSaveQuestion.removeClass("hidden")
    $btnCancelQuestion.removeClass("hidden")
    $btnDeleteQuestion.removeClass("hidden")

  },

  getQuestions(data) {
    console.log('again')
    $cardQuestions.empty();

    var object = data.questions;
    console.log(object)
    for (let o in object) {
      let html =
        '<li class="mdl-list__item mdl-list__item--three-line" data-id="' + o + '">' +
        '<span class="mdl-list__item-primary-content" data-questionId = "' + object[o].id + '" data-id="' + o + '">' + 
        // '<i class="material-icons mdl-list__item-avatar">create</i>' +
        '<span data-questionId = "' + object[o].id + '" data-id="' + o + '">' +
        "Question Id:" +
        object[o].id +
        "</span>" +
        '<span class="mdl-list__item-text-body" data-questionId = "' + object[o].id + '" data-id="' + o + '">' +
        object[o].questionEn +
        "</span>" +
        "</span>" +
        '<a class="mdl-list__item-secondary-action hidden" data-questionId = "' + object[o].id + '" data-id="' + o + '+href="#"><i class="material-icons">edit</i></a>';

      ("</li>");

      $cardQuestions.append(html);
    }
  },

  addQuestion(){
    $cardQuestionnaire.addClass("hidden");
$cardQuestionDetail.removeClass("hidden");
    $inputsQuestionDetail.attr("disabled", false);
    $inputsQuestionDetail.addClass("is-dirty")

    $btnSubmitQuestion.removeClass("hidden");
    $btnCreateQuestions.addClass("hidden");
    $toogleConditionalQuestionInput.attr("disabled", false);
    $toogleQuestionActiveInput.attr("disabled", false);
    $inputsQuestionDetailConditional.attr("disabled", false);

    $fieldsQuestionDetail.addClass("is-dirty");
    $fieldsQuestionDetailConditional.addClass("is-dirty");


},

  editQuestionnaire() {
    event.preventDefault();

    $inputsQuestionnaireDetail.attr("disabled", false);
   
    $toogleQuestionnaireActiveInput.attr("disabled", false);

    $btnQuestionnaireButtons.addClass("hidden");
    $btnSaveQuestionnaire.removeClass("hidden");
    $btnDeleteQuestionnaire.removeClass("hidden");
    $btnCreateQuestions.removeClass("hidden");
    // $btnSubmitQuestion.removeClass("hidden");
    // $cardQuestionnaire.addClass("hidden");
    // $cardQuestionDetail.removeClass("hidden");
    $btnCreateQuestions.removeClass("hidden");

    $(".quest-card__list--questions > li > a").removeClass("hidden");
    // console.log("show");
  },

  deleteQuestionnaire() {
    event.preventDefault();

    console.log("delete");

    api.deleteQuestionnaire(selectedId).then(() => {
      console.log("deleted"), handlers.getQuestionnaires();
    });
  },

  deleteQuestion() {
    event.preventDefault();

    console.log("delete");

    api.deleteQuestion(selectedQuestionID).then(() => {
      console.log("deleted"), window.location.reload();
    });
  },

  cancelQuestion(){
    event.preventDefault();

    $containerQuestionsDetail.addClass('hidden')
  },

  saveQuestionnaire() {
    event.preventDefault();

    var body = {
      name: $inputQuestionnaireName.val().trim(),
      code: $inputQuestionnaireCode.val().trim(),
      type: $inputQuestionnaireType.val().trim(),
      description: $inputQuestionnaireDescription.val().trim(),
      id: selectedId,
      active: $toogleQuestionnaireActive.hasClass("is-checked") ? true : false
    };
    api.updateQuestionnaire(body);
    window.location.reload();
  },
  resize() {
    var win = window.innerHeight; //this = window

    var cardTitle = $(".quest-card__questions > .quest-card__title")
      .clientHeight;
    var card = win - 70 - 80;

    $(".mdl-card.quest-card").height(card);
    //  $('.quest-list').overflow = auto;
  }
};

var toogle = {
  activeQuestionnaireToggle() {
    var target = $toogleQuestionnaireActiveLabel;

    if ($toogleQuestionnaireActiveInput.attr("disabled") !== "disabled") {
      var status = $(this).hasClass("is-checked");

      if (status) {
        target.text("Inactive");
      } else {
        target.text("Active");
      }
    }
  },

  activeQuestionToggle() {
    var target = $toogleQuestionActiveLabel;

    if ($toogleQuestionActiveInput.attr("disabled") !== "disabled") {
      var status = $(this).hasClass("is-checked");

      if (status) {
        target.text("Inactive");
      } else {
        target.text("Active");
      }
    }
  },

  conditionalToggle() {
    var target = $toogleConditionalQuestionLabel;

    if ($toogleConditionalQuestionInput.attr("disabled") !== "disabled") {
      var status = $(this).hasClass("is-checked");

      console.log(status)
      if (!status) {
        target.text("Yes, it is a conditional question");
        $conditionalQuestionBlock.removeClass('hidden');
      } else {
        target.text("No, it is an independent question");
        $conditionalQuestionBlock.addClass('hidden');
      }
    }
  }
};

handlers.getQuestionnaires();

$btnSubmitQuestionnaire.on("click", handlers.submitQuestionnaire);
$btnEditQuestionnaire.on("click", handlers.editQuestionnaire);
$btnDeleteQuestionnaire.on("click", handlers.deleteQuestionnaire);

$btnCreateQuestionnaire.on("click", handlers.newQuestionnaire);
$btnCloseQuestionnaire.on("click", handlers.closeQuestionnaireForm);
$btnSaveQuestionnaire.on("click", handlers.saveQuestionnaire);

$btnCreateQuestions.on("click", handlers.addQuestion)
$btnSubmitQuestion.on("click", handlers.submitQuestion)
$btnEditQuestion.on("click", handlers.editQuestion)
$btnDeleteQuestion.on("click", handlers.deleteQuestion)
$btnCancelQuestion.on("click", handlers.cancelQuestion)

$($questionnaireList).on(
  "click",
  $btnListedQuestionnaire,
  handlers.listedQuestionnaire
);

$($questionList).on(
  "click",
  $btnListedQuestion,
  handlers.listedQuestion
);

$(document).ready(handlers.resize);
$(window).on("resize", handlers.resize);

$($toogleQuestionnaireActive).on("click", toogle.activeQuestionnaireToggle);
$($toogleConditionalQuestionActive).on("click", toogle.conditionalToggle);
$($toogleQuestionActive).on("click", toogle.activeQuestionToggle);

$($selectors).on("click", function(e){
  var target = $(event.target)
  var value = target.attr('data-val')
  var text = target[0].innerHTML
 
  
  var parent = target[0].offsetParent.offsetParent.offsetParent.children[0]
  parent.value = text

  var id = parent.id

  console.log(target)
  console.log(target[0].attributes)
  //  console.log(value, text)
})

//       var cardHeight
//       if (win.height() >= 820) { /* ... */ }
//       if (win.width() >= 1280) { /* ... */ }