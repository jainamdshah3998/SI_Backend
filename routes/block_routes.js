var block_model = require("../models/block_model");
var express = require("express");
var router = express.Router();

router.get("/:id?/:secretaryPhoneNumber?", function(req, res, next) {
  if (req.params.id) {
    block_model.getBlockById(req.params.id,req.params.secretaryPhoneNumber,function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    block_model.getAllBlock(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.delete("/:id/:secretaryPhoneNumber", function(req, res, next) {
    block_model.deleteBlock(req.params.id,req.params.secretaryPhoneNumber,function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id/:secretaryPhoneNumber", function(req, res, next) {
    block_model.updateBlockById(req.params.id,req.params.secretaryPhoneNumber,req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post("/", function(req, res, next) {
    block_model.addBlock(req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
