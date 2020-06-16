var flat_model = require("../models/flat_model");
var express = require("express");
var router = express.Router();



router.get("/:flatName?/:secretaryPhoneNumber?", function(req, res, next) {
  if (req.params.flatName) {
    flat_model.getFlatById(req.params.flatName,req.params.secretaryPhoneNumber,function(err, rows) {
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
router.delete("/:flatName/:secretaryPhoneNumber", function(req, res, next) {
    flat_model.deleteFlat(req.params.flatName,req.params.secretaryPhoneNumber,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:flatName/:secretaryPhoneNumber", function(req, res, next) {
    flat_model.updateFlatById(req.params.flatName,req.params.secretaryPhoneNumber,req.body, function(err, rows) {
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
