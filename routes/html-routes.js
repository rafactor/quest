var express = require("express");
var router = express.Router();
var questionnaire = require("../controllers/questionnaire-controller");
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
  res.render("index", {});
});

router.get("/login", function(req, res) {
  if (req.user) {
    res.render("members", {});
  }
  res.render("login", { registered: true });
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page

router.get("/members", isAuthenticated, function(req, res) {
  if (req.user) {
    res.render("members", {});
  }
  res.render("login", { registered: true });
});

router.get("/admin", function(req, res) {
  // if (req.user) {
  //   res.render("admin", {});
  // }
  //
  data = {
    count: 2,
    questionnaires: [
      {
        name: "Express Entry",
        type: "Calculator",
        code: "EE01",
        active: false,
        _id: 1,
        request: {
          type: "GET",
          url: "http://localhost:3000/questionnaires/undefined"
        }
      },
      {
        name: "Express 2",
        type: "Calculator",
        code: "EE02",
        active: true,
        _id: 3,
        request: {
          type: "GET",
          url: "http://localhost:3000/questionnaires/undefined"
        }
      }
    ]
  };

  res.render("admin", {});
});
// router.get("/admin", function(req, res) {
//   res.render("admin", {});
// });

module.exports = router;
