"use strict";

console.log("admin");

const $questionnaireList = $(".quest-card__list--questionnaires");

const $btnButtons = $(".mdl-button--raised");
const $btnSubmitQuestionnaire = $("#questionnaire-submit");
const $btnEditQuestionnaire = $("#questionnaire-edit");
const $btnSaveQuestionnaire = $("#questionnaire-save");
const $btnCancelQuestionnaire = $("#questionnaire-cancel");
const $btnDeleteQuestionnaire = $("#questionnaire-delete");
const $btnEditQuestions = $(".quest-card__list--questions > li > a");

const $btnCreateQuestionnaire = $("#btn-create-questionnaire");
const $btnCreateQuestions = $("#btn-create-questions");
const $btnCloseQuestionnaire = $("#btn-close-questionnaire");
const $btnListedQuestionnaire = $(".quest-card__list--questionnaires > li");
// const $liListedQuestionnaire = $('.quest-card__list--questionnaires > li > span')

//quest-card--questionnaire
const $cardQuestionnaire = $(".quest-card--questionnaire");
const $cardQuestionDetail = $(".quest-card__detailed-questions");
const $containerCreateQuestionnaire = $(".quest-card__container");
const $titleCreateQuestionnaireTitle = $(".quest-card__questionnaire__title");
const $containerQuestions = $("#container__questions > div");

// Questionnaires Block
// const $cardListQuestionnaire = $(".quest-card__list-questionnaires");
const $cardQuestionnaireTitle = $("#input-questionnaire-name");

//Questions Block
const $cardQuestions = $(".quest-card__list--questions");

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

const $toogleConditionalQuestion = $("#label-conditional-switch");
const $toogleConditionalQuestionInput = $("#label-conditional-switch > input");
const $toogleConditionalQuestionLabel = $(
  "#label-conditional-switch > span.mdl-switch__label"
);
const $conditionalQuestionBlock = $('#conditional-block')


var selectedId;

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

  getQuestionnaires() {
    console.log("get");
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
    $containerCreateQuestionnaire.removeClass("hidden");
    $btnCloseQuestionnaire.removeClass("hidden");
    $fieldsQuestionnaireDetail.removeClass("is-dirty").attr("disabled", false);
    $toogleQuestionnaireActiveInput.attr("disabled", false);

    //clear fields
    $inputQuestionnaireName.val("");
    $inputQuestionnaireCode.val("");
    $inputQuestionnaireType.val("");
    $inputQuestionnaireDescription.val("");

    // $containerCreateQuestionnaire.removeClass('hidden');
    $titleCreateQuestionnaireTitle.html("Create Questionnaire");

    // hide all buttons and display submit
    $btnButtons.addClass("hidden");
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
    console.log(body);
    api.postQuestionnaire(body);
    window.location.reload();
  },

  closeQuestionnaireForm() {
    $containerCreateQuestionnaire.addClass("hidden");
    $btnCloseQuestionnaire.addClass("hidden");
    $btnEditQuestions.addClass("hidden");
    $cardQuestionnaire.removeClass("hidden");
    $cardQuestionDetail.addClass("hidden");

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
      //show questionnaires fields disabled and dirty (means the title is blue on top of the field)
      $fieldsQuestionnaireDetail.addClass("is-dirty");

      $inputsQuestionnaireDetail.attr("disabled", "disabled");
      $toogleQuestionnaireActiveInput.attr("disabled", "disabled");

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
      $btnButtons.addClass("hidden");
      $btnEditQuestionnaire.removeClass("hidden");
      $cardQuestionDetail.addClass("hidden");
      handlers.getQuestions(response.questionnaires[0]);

      //Show Questions Card
      $cardQuestions.removeClass("hidden");
    });
  },

  getQuestions(data) {
    // console.log(data)
    $cardQuestions.empty();

    var object = data.questions;
    for (let o in object) {
      let html =
        '<li class="mdl-list__item mdl-list__item--three-line">' +
        '<span class="mdl-list__item-primary-content">' +
        // '<i class="material-icons mdl-list__item-avatar">create</i>' +
        "<span>" +
        "Question ID:" +
        object[o].id +
        "</span>" +
        '<span class="mdl-list__item-text-body">' +
        object[o].questionEn +
        "</span>" +
        "</span>" +
        '<a class="mdl-list__item-secondary-action hidden" href="#"><i class="material-icons">edit</i></a>';

      ("</li>");

      $cardQuestions.append(html);
    }
  },

  editQuestionnaire() {
    event.preventDefault();

    $inputsQuestionnaireDetail.attr("disabled", false);
    $toogleQuestionnaireActiveInput.attr("disabled", false);

    $btnButtons.addClass("hidden");
    $btnSaveQuestionnaire.removeClass("hidden");
    $btnDeleteQuestionnaire.removeClass("hidden");
    $btnCreateQuestions.removeClass("hidden");
    $cardQuestionnaire.addClass("hidden");
    $cardQuestionDetail.removeClass("hidden");
    $btnCreateQuestions.removeClass("hidden");
    $(".quest-card__list--questions > li > a").removeClass("hidden");
    console.log("show");
  },

  deleteQuestionnaire() {
    event.preventDefault();

    console.log("delete");

    api.deleteQuestionnaire(selectedId).then(() => {
      console.log("deleted"), handlers.getQuestionnaires();
    });
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

      if (status) {
        target.text("No, it is an independent question");
        $conditionalQuestionBlock.removeClass('hidden');
      } else {
        target.text("Yes, it is a conditional question");
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

$($questionnaireList).on(
  "click",
  $btnListedQuestionnaire,
  handlers.listedQuestionnaire
);

$(document).ready(handlers.resize);
$(window).on("resize", handlers.resize);

$($toogleQuestionnaireActive).on("click", toogle.activeQuestionnaireToggle);
$($toogleConditionalQuestion).on("click", toogle.conditionalToggle);
$($toogleQuestionActive).on("click", toogle.activeQuestionToggle);


//       var cardHeight
//       if (win.height() >= 820) { /* ... */ }
//       if (win.width() >= 1280) { /* ... */ }