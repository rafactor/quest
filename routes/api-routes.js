var express = require("express");
var router = express.Router();
var passport = require("../config/passport");
var db = require("../models");

var questionnaire = require("../controllers/questionnaire-controller");
// route Questionnaires calls
router.get("/questionnaires", function (req, res) {
  questionnaire.getAll().then(function (response) {
    res.json(response)
  }).catch(function (err) {
    res.status(500).end();
  });
});

router.post("/questionnaires/", function (req, res) {
  questionnaire.create(req).then(function (response) {
    res.json(response)
  }).catch(function (err) {
    res.status(500).end();
  });
});

// router.get("/questionnaires/:id", questionnaire.getQuestionnaire);

router.delete("/questionnaires/:id", function (req, res) {
  const id = parseInt(req.params.id)
  questionnaire.delete(id).then(function (response) {
    res.json(response)
  }).catch(function (err) {
    res.status(500).json({
      error: err
    }).end();
  });
});

// router.put("/questionnaires", questionnaire.update);

//for login
router.post("/login", passport.authenticate("local"), function (req, res) {
  res.json("/members");
});


router.post("/signup", function (req, res) {
  console.log(req.body);
  db.User.create({
      email: req.body.email,
      password: req.body.password
    })
    .then(function () {
      res.redirect(307, "/api/login");
    })
    .catch(function (err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
});

// Route for logging user out
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/user_data", function (req, res) {
  if (!req.user) {
    console.log("not logged");
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    console.log("logged");
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});

module.exports = router;