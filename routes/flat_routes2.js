var flat_model = require("../models/flat_model");
var express = require("express");
var router = express.Router();

router.get("/:secretaryPhoneNumber",function(req,res,next){
    flat_model.getFlatBySecretaryPhoneNumber(req.params.secretaryPhoneNumber,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  module.exports = router;
