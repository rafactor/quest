$( document ).ready(function() {
    $(".responseDropDown").change(function(){
        console.log("Working");
        var questionId = ($(this).data("question-id"));
        var optionValue = parseInt($("#responseDropDown"+questionId).val());

        $("[data-parent="+questionId+"]").each(function(i, element){
            var revealValue = ($(element).data("unhide"));
            if(revealValue == optionValue) {
                $(element).removeClass("hidden");
            }
        })
    });

    $("#submit").submit(function(event) {
        alert("Thank you for submitting your questionnaire.")
    })
});


