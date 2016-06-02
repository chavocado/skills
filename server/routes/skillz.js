var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Skill = require('../models/skill');

router.get('/', function (req, res) {
  Skill.find({}, function (err, skills) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(skills);
  });
});

router.post('/', function (req, res) {
  var skill = new Skill(req.body);
  skill.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201);
  });
});

module.exports = router;
