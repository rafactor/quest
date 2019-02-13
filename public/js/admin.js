'use strict';

console.log('admin')

const $questionnaireList = $(".quest-card__list--questionnaires")

const $btnButtons = $(".mdl-button--raised")
const $btnSubmitQuestionnaire = $("#questionnaire-submit");
const $btnEditQuestionnaire = $("#questionnaire-edit");
const $btnSaveQuestionnaire = $("#questionnaire-save");
const $btnCancelQuestionnaire = $("#questionnaire-cancel");


const $btnCreateQuestionnaire = $("#btn-create-questionnaire");
const $btnCloseQuestionnaire = $("#btn-close-questionnaire");
const $btnListedQuestionnaire = $('.quest-card__list--questionnaires > li');
// const $liListedQuestionnaire = $('.quest-card__list--questionnaires > li > span')

const $cardCreateQuestionnaire = $(".quest-card__container");
const $cardCreateQuestionnaireTitle = $(".quest-card__questionnaire__title");
const $containerQuestions = $("#container__questions > div");

// Questionnaires Block
const $cardListQuestionnaire = $(".quest-card__list-questionnaires");
const $cardQuestionnaireTitle = $("#input-questionnaire-name");

//Questions Block
const $cardQuestions = $(".quest-card__list--questions")

//fields in Questionnaire Detail Card
const $fieldsQuestionnaireDetail = $(".quest-card__questionnaire > div > form > .mdl-textfield")
const $inputsQuestionnaireDetail = $(".quest-card__questionnaire > div > form > div > .mdl-textfield__input")
const $inputQuestionnaireName = $("#input-questionnaire-name");
const $inputQuestionnaireCode = $("#input-questionnaire-code");
const $inputQuestionnaireType = $("#input-questionnaire-type");
const $inputQuestionnaireDescription = $("#input-questionnaire-description");
const $toogleQuestionnaireActive = $("#label-active-switch");

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
    console.log('get')
    return $.ajax({
      // headers: {
      //   "Content-Type": "application/json"
      // },
      type: "GET",
      url: "api/questionnaires/",
    });

  },

  getQuestionnaire(selectedId) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET",
      url: "api/questionnaires/" + selectedId,
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
}

// refreshExamples gets new examples from the db and repopulates the list
var handlers = {
  getQuestionnaires() {
    console.log('start refresh')
    api.getQuestionnaires().then(function (data) {

      var object = data.questionnaires;
      for (let o in object) {

        let html = '<li class="mdl-list__item mdl-list__item--two-line" data-id=' + object[o].id + '>' +
          '<span class="mdl-list__item-primary-content" data-id=' + object[o].id + '>' +
          '<i class="material-icons" data-id=' + object[o].id + '>question_answer</i>' +
          '<span data-id=' + object[o].id + '>' + object[o].name + '</span>' +
          '<span class="mdl-list__item-sub-title" data-id=' + object[o].id + ">" + object[o].type + " | " + object[o].description + '</span>' +
          '</span>' +
          '<span class="mdl-list__item-secondary-content" data-id=' + object[o].id + '>' +
          '<span class="mdl-list__item-secondary-info" data-id=' + object[o].id + '>Actor</span>' +
          '<a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">check_box</i></a>' +
          '</span>' +
          '</li>'

        $questionnaireList.append(html)
      }
    });
  },

  newQuestionnaire() {

    //Display the form and enable fields
    $cardCreateQuestionnaire.removeClass('hidden');
    $fieldsQuestionnaireDetail
      .removeClass('is-dirty')
      .attr('disabled', false)
    $toogleQuestionnaireActive.attr('disabled', false);

    //clear fields
    $inputQuestionnaireName.val("")
    $inputQuestionnaireCode.val("")
    $inputQuestionnaireType.val("")
    $inputQuestionnaireDescription.val("")

    // $cardCreateQuestionnaire.removeClass('hidden');
    $cardCreateQuestionnaireTitle.html('Create Questionnaire')

    // hide all buttons and display submit
    $btnButtons.addClass('hidden');
    $btnSubmitQuestionnaire.removeClass('hidden');
  },

  submitQuestionnaire() {
    event.preventDefault();
    var body = {
      name: $inputQuestionnaireName.val().trim(),
      code: $inputQuestionnaireCode.val().trim(),
      type: $inputQuestionnaireType.val().trim(),
      description: $inputQuestionnaireDescription.val().trim(),
      active: ($toogleQuestionnaireActive.hasClass("is-checked")) ? true : false,
    };
    console.log(body)
    api.postQuestionnaire(body);
    window.location.reload();
  },

  closeQuestionnaireForm() {
    $cardCreateQuestionnaire.addClass('hidden');
    $btnCreateQuestionnaire.removeClass('hidden');
    $cardQuestions
      .empty()
      .addClass('hidden');
  },

  listedQuestionnaire() {
    var target = $(event.target);
    selectedId = target.attr("data-id");

    $cardCreateQuestionnaire.removeClass('hidden');
    $btnCreateQuestionnaire.addClass('hidden');
    $cardCreateQuestionnaireTitle.html('View Questionnaire')

    //call the api and populate fields
    api.getQuestionnaire(selectedId).then(response => {


      //show questionnaires fields disabled and dirty (means the title is blue on top of the field)
      $fieldsQuestionnaireDetail
        .addClass('is-dirty')
        .attr('disabled', 'disabled');
      $toogleQuestionnaireActive.attr('disabled', 'disabled');

      //populate fields with selected questionnaires attributes
      $inputQuestionnaireName.val(response.questionnaires[0].name)
      $inputQuestionnaireCode.val(response.questionnaires[0].code)
      $inputQuestionnaireType.val(response.questionnaires[0].type)
      $inputQuestionnaireDescription.val(response.questionnaires[0].description)
      if (response.questionnaires[0].active === false) {
        $toogleQuestionnaireActive.removeClass("is-checked");
      } else {
        $toogleQuestionnaireActive.addClass("is-checked");
      }

      //hide all buttons and display only edit
      $btnButtons.addClass('hidden');
      $btnEditQuestionnaire.removeClass('hidden');

      handlers.getQuestions(response.questionnaires[0]);

      //Show Questions Card
      $cardQuestions.removeClass('hidden');
    })
  },

  getQuestions(data) {
    console.log(data)
    var object = data.questions;
    for (let o in object) {
      let html = '<li class="mdl-list__item mdl-list__item--three-line">' +
        '<span class="mdl-list__item-primary-content">' +
        '<i class="material-icons mdl-list__item-avatar">create</i>' +
        '<span>' + 'Question ' + object[o].id + ' | type: ' + object[o].type + '</span>' +
        '<span class="mdl-list__item-text-body">' +
        object[o].questionEn +
        '</span>' +
        '</span>' +
        '<span class="mdl-list__item-secondary-content">' +
        '<a class="mdl-list__item-secondary-action" href="#"><i class="material-icons">star</i></a>' +
        '</span>' +
        '</li>'

      $cardQuestions.append(html)

    }
  },
}

handlers.getQuestionnaires();

$btnSubmitQuestionnaire.on("click", handlers.submitQuestionnaire);
$btnEditQuestionnaire.on("click", handlers.editQuestionnaire);
$btnCreateQuestionnaire.on("click", handlers.newQuestionnaire);
$btnCloseQuestionnaire.on("click", handlers.closeQuestionnaireForm);
// $btnListedQuestionnaire.on("click", function () {
//   alert(data - id)
// })
// $btnListedQuestionnaire.on("click", handlers.listedQuestionnaire)
$btnSaveQuestionnaire.on("click", handlers.saveQuestionnaire);

$($questionnaireList).on("click", $btnListedQuestionnaire, handlers.listedQuestionnaire)







// var handlers = {
//   getQuestionnaires() {
//     console.log('handlers')
//     api.getQuestionnaires()
//       .then(response => {
//         var $questionnaires = data.map(data=>{
//           var $a = $("<a>")
//           .text(data.name)
//           .attr(data.id)

//         var $li = $('<li>')
//           .attr({
//             class: "mdl-list__item",
//             "data-id"= data.id
//           })
//           .append($a);

//             console.log($questionnaires)
//         return $li
//       });


//     });
//   },

//       var $questionnaires = data.map(item => {
//         console.log($questionnaires)
//       // var $div = $("<div>")
//       //   .text(item.count)
//       //   .attr("href", "/example/" + item.id);

//       // var $li = $("<li>")
//       //   .attr({
//       //     class: "list-group-item",
//       //     "data-id"= example.id
//       //   })
//       //   .append($a); 


//        })

// }),





//   editQuestionnaire() {
//     event.preventDefault();

//     console.log('edit')
//     $inputQuestionnaireName.attr('disabled', false);
//     $inputQuestionnaireType.attr('disabled', false);
//     $inputQuestionnaireCode.attr('disabled', false);
//     $inputQuestionnaireDescription.attr('disabled', false);
//     $toogleQuestionnaireActive.attr('disabled', false)

//     $btnSubmitQuestionnaire.addClass('hidden');
//     $btnEditQuestionnaire.addClass('hidden');
//     $btnSaveQuestionnaire.removeClass('hidden');
//     $btnCancelQuestionnaire.removeClass('hidden');
//   },

//   saveQuestionnaire(){
//       event.preventDefault();
//       var body = {
//         name: $inputQuestionnaireName.val().trim(),
//         code: $inputQuestionnaireCode.val().trim(),
//         type: $inputQuestionnaireType.val().trim(),
//         description: $inputQuestionnaireDescription.val(),
//         id: selectedId,
//         active: ($toogleQuestionnaireActive.hasClass("is-checked")) ? true : false,
//       };
//     api.updateQuestionnaire(body);
//   },

//  

// handlers.getQuestionnaires()