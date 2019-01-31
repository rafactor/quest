var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  var hbsObject = {
    cats: "data"
  };
  console.log(hbsObject);
  res.render("index", hbsObject);
});

router.get("/about", function(req, res) {
  res.send("im the about page!");
});

module.exports = router;
