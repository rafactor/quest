const $infoButton = $(".mdl-button")

//route to questionnaire forms
$infoButton.on("click", function(e){
  var questId = $(this).attr("data-id")
  
  console.log(questId === "1")
 
  if (questId === "1") {
    console.log('go')
    window.location.pathname = "/express"
  }

})
