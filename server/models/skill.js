var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Mongoose Schema
var SkillSchema = new Schema({
    skill: {type: String},
    years: {type: Number},
});

var Skill = mongoose.model('Skill', SkillSchema);


module.exports = Skill;
