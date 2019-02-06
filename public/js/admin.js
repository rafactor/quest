'use strict';

var data = getQuestionnaires();

console.log(data)


$(function() {
  
console.log("admin");

});


function getQuestionnaires() {
  console.log("api");


   $.ajax("/api/questionnaires", {
      type: "GET",
  }).then((data) => {
      document.getElementById("rafa").innerHTML = "hey"

      var source = document.getElementById("questionnaire-list-template").innerHTML
      console.log(source)
      var template = Handlebars.compile(source)
      console.log(template)
      var html = template(data)

      console.log(html)
      document.getElementById("questionnaires-list-container").innerHTML = html
     
    //   console.log(response);
    //   location.reload()
  });
    
}

// functon updateQuestionnaires(data){
//     var theHtmlListOfQuestionnaires = $(".questionnaires-list-container").html();
//     var theTemplate = Handlebars.compile (theTemplateScript); 
//     $(".questionnaires-grid").append(theTemplate(data))

// }
