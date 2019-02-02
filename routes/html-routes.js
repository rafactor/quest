var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index", {});
});

router.get("/about", function(req, res) {
  res.send("im the about page!");
});

module.exports = router;
