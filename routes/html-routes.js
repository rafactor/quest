var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index", {});
});

router.get("/login", function(req, res) {
  console.log('log')
  res.render("login", { registered: true });
});

router.get("/admin", function(req, res) {
  res.render("admin", {});
});

// router.get("/admin", function(req, res) {
//   res.render("admin", {});
// });

router.get("/about", function(req, res) {
  res.send("im the about page!");
});

module.exports = router;
