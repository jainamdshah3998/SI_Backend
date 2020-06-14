var flat_model = require("../models/flat_model");
var express = require("express");
var router = express.Router();

router.get("/:id?/:secretaryPhoneNumber?", function(req, res, next) {
  if (req.params.id) {
    flat_model.getFlatById(req.params.id,req.params.secretaryPhoneNumber,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    flat_model.getAllFlat(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.delete("/:id/:secretaryPhoneNumber", function(req, res, next) {
    flat_model.deleteFlat(req.params.id,req.params.secretaryPhoneNumber,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id/:secretaryPhoneNumber", function(req, res, next) {
    flat_model.updateFlatById(req.params.id,req.params.secretaryPhoneNumber,req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/", function(req, res, next) {
    flat_model.addFlat(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
