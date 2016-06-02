var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Skill = require('../models/skill');
var User = require('../models/user');

router.get('/', function (req, res) {
  User.find({}, function (err, skills) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(skills);
  });
});

router.put('/:id', function (req, res) {
  var id = req.params.id;
  var skill = req.body; // {content: <some comment>}

  User.findById(id, function (err, user) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    user.skills.push(skill);

    user.save(function (err) {
      if (err) {
        res.sendStatus(500);
        return;
      }

      res.sendStatus(204);
    });
  });
});


module.exports = router;
