const $selectors = $(".getmdl-select");
const $selection = $(".mdl-menu__item");

// $(document).ready(function() {
//   $(".responseDropDown").change(function() {
//     console.log("Working");
//     var questionId = $(this).data("question-id");
//     console.log(questionId);
//     var optionValue = parseInt($("#responseDropDown" + questionId).val());

//     $("[data-parent=" + questionId + "]").each(function(i, element) {
//       var revealValue = $(element).data("unhide");
//       if (revealValue == optionValue) {
//         $(element).removeClass("hidden");
//       }
//     });
//   });

//   $("#submit").submit(function(event) {
//     alert("Thank you for submitting your questionnaire.");
//   });
// });

$($selectors).on("click", function(e) {
  var target = $(event.target);
  var text = target[0].innerHTML;

  var parent = target[0].offsetParent.offsetParent.offsetParent.children[0];
  parent.value = text;
  // console.log(target)
});

$($selection).on("click", function(e) {
  selection = $(this)[0].attributes[1].nodeValue;
  parent = $(this)[0].parentNode.id;

  questionId = $(this)[0].offsetParent.offsetParent.offsetParent.children[0]
    .attributes[4].value;
  optionValue = parseInt($("#responseDropDown" + questionId).val());

  // console.log($(this))
  // console.log($(this)[0].parentNode)
  // console.log($(this)[0].offsetParent.offsetParent.offsetParent.children[0].attributes[4].value)
  console.log(questionId);
  $(".responseDropDown").change(function() {
    $("[data-parent=" + questionId + "]").each(function(i, element) {
      var revealValue = $(element).data("unhide");
      if (revealValue == optionValue) {
        $(element).removeClass("hidden");
      }
    });
  });

  // console.log($(this)[0].offsetParent.offsetParent.children[0])
  if (parent === "ul-input-question-type") {
    if (selection === "Option") {
      $inputQuestionOptionListDiv.removeClass("hidden");
    } else {
      $inputQuestionOptionListDiv.addClass("hidden");
    }
  }
});
