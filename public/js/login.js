console.log("login");

var linkCreateAcc = $("#linkCreateAcc");
var linkLogin = $("#linkLogin");
// var btnCancel = $(".quest-btn--cancel");
// var btnLogin = $("btnLogin");

$(document).ready(function() {
  var loginForm = $("form.login");
  var emailInput = $("#emailInputLogin");
  var passwordInput = $("#passwordInputLogin");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});

$(".quest-btn--cancel").on("click", function() {
  window.location.href = "/";
});

$("#linkCreateAcc").on("click", toggle);
$("#linkLogin").on("click", toggle);

function toggle() {
  linkCreateAcc.closest(".mdl-card").toggleClass("hidden");
  linkLogin.closest(".mdl-card").toggleClass("hidden");
}

// $(document).ready(function() {
//   // This file just does a GET request to figure out which user is logged in
//   // and updates the HTML on the page
//   $.get("/user_data").then(function(data) {
//     $(".member-name").text(data.email);
//   });
// });
