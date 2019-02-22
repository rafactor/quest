var express = require("express");
var router = express.Router();
var questionnaire = require("../controllers/questionnaire-controller");
var auxiliar = require("../controllers/auxiliar-controller");

// var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
  res.render("index", {});
});

router.get("/login", function(req, res) {
  if (req.user) {
    // console.log('hehe')
    // console.log(req.user.User.email)
    res.render("admin", {});
  }
  res.render("login", {
    registered: true
  });
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page

router.get("/members", isAuthenticated, function(req, res) {
  if (req.user) {
    res.render("members", {});
  } else {
    res.render("login", {
      registered: true
    });
  }
});

router.get("/express", function(req, res) {
  auxiliar.getAuxOption().then(function(response) {
    console.log(response);
    res.render("express", response);
  });
  console.log("hehe");
  // console.log(data)
  // res.render("express", );
});

router.get("/admin", function(req, res) {
  questionnaire
    .getAll()
    .then(function(response) {
      res.render("admin", response);
    })
    .catch(function(err) {
      res
        .status(500)
        .json({
          error: err
        })
        .end();
    });
});

// router.get("/admin", function(req, res) {
//   res.render("admin", {});
// });

module.exports = router;
