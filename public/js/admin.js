'use strict';

console.log('admin')

const $questionnaireList = $(".quest-card__list--questionnaires")


const $btnSubmitQuestionnaire = $("#questionnaire-submit");
const $btnEditQuestionnaire = $("#questionnaire-edit");
const $btnSaveQuestionnaire = $("#questionnaire-save");
const $btnCancelQuestionnaire = $("#questionnaire-cancel");


const $btnCreateQuestionnaire = $("#btn-create-questionnaire");
const $btnCloseQuestionnaire = $("#btn-close-questionnaire");
const $btnListedQuestionnaire = $('.quest-card__list--questionnaires > li');
// const $liListedQuestionnaire = $('.quest-card__list--questionnaires > li > span')

const $cardCreateQuestionnaire = $(".quest-card__questionnaire");
const $cardCreateQuestionnaireTitle = $(".quest-card__questionnaire__title");
const $containerQuestions = $("#container__questions > div");
const $cardListQuestionnaire = $(".quest-card__list-questionnaires");
const $cardQuestionnaireTitle = $("#input-questionnaire-name");

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

      let object = data.questionnaires;
      for (let o in object) {
        var $item = () => {
          var $span1 = $("<span>")
            .text(object[o].name)

          var $span2 = $("<span>")
            .attr({
              class: "mdl-list__item-text-body",
              "data-id": object[o].id
            })
            .text(object[o].type + " | " + object[o].description);

          var $i = $("<i>")
            .attr("class", "material-icons")
            .text("question_answer");

          var $span = $("<span>")
            .attr({
              class: "mdl-list__item-primary-content",
              "data-id": object[o].id
            })
            .append($i, $span1, $span2)


          var $a2 = $("<a>")
            .html('<i class="material-icons">check_box</i>')

          var $span3 = $("<span>")
            .attr({
              class: "mdl-list__item-secondary-content",
              "data-id": object[o].id
            }).append($a2)


          var $li = $("<li>")
            .attr({
              class: "mdl-list__item mdl-list__item--three-line",
              "data-id": object[o].id
            })
            .append($span, $span3)



          // console.log($li)
          return $li
        }
        // $questionnaireList.empty();
        $questionnaireList.append($item)
      }
    });
  },
  newQuestionnaire() {
    $fieldsQuestionnaireDetail.removeClass('is-dirty')
    $inputsQuestionnaireDetail.attr('disabled', false);
    $toogleQuestionnaireActive.attr('disabled', false);

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

  submitQuestionnaire() {
    event.preventDefault();
    var body = {
      name: $inputQuestionnaireName.val().trim(),
      code: $inputQuestionnaireCode.val().trim(),
      type: $inputQuestionnaireType.val().trim(),
      // description: inputQuestionnaireDescription.value.trim(),
      active: ($toogleQuestionnaireActive.hasClass("is-checked")) ? true : false,
    };
    api.postQuestionnaire(body);
    window.location.reload();
  },

  closeQuestionnaireForm() {
    $cardCreateQuestionnaire.addClass('hidden');
    $btnCreateQuestionnaire.removeClass('hidden');
  },

  listedQuestionnaire() {
    // console.log($(this));
    selectedId = 1;
    // console.log(selectedId)

    $cardCreateQuestionnaire.removeClass('hidden');
    $btnCreateQuestionnaire.addClass('hidden');
    $cardCreateQuestionnaireTitle.html('View Questionnaire')

    //call the api and populate fields
    api.getQuestionnaire(selectedId).then(response => {
      console.log(response.questionnaires)
      $fieldsQuestionnaireDetail.addClass('is-dirty')
      $inputsQuestionnaireDetail.attr('disabled', 'disabled');
      $toogleQuestionnaireActive.attr('disabled', 'disabled');

      $inputQuestionnaireName.val(response.questionnaires[0].name)
      $inputQuestionnaireCode.val(response.questionnaires[0].code)
      $inputQuestionnaireType.val(response.questionnaires[0].type)
      $inputQuestionnaireDescription.val(response.questionnaires[0].description)  
      // $toogleQuestionnaireActive.val(response.questionnaires[0].active)
      if (response.questionnaires[0].active === false) {
        $toogleQuestionnaireActive.removeClass("is-checked");     
      } else {
        $toogleQuestionnaireActive.addClass("is-checked");
      }

      $btnSubmitQuestionnaire.addClass('hidden');
      $btnEditQuestionnaire.removeClass('hidden');
      $btnSaveQuestionnaire.addClass('hidden');

      
      handlers.displayQuestions();
    })
  },

  displayQuestions() {
    let html = '<ul class="demo-list-icon mdl-list">' +
      '<li class="mdl-list__item">' +
      '<span class="mdl-list__item-primary-content">' +
      '</span>' +
      '</li>' +
      '</ul>'


  }


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

$($questionnaireList).on("click",$btnListedQuestionnaire,handlers.listedQuestionnaire)







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
//             "data-id": data.id
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
//       //     "data-id": example.id
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