const Person = require("../models/model");


exports.index = function(req, res) {
  Person.find()
  .then(people => res.json(people))
  .catch(err => res.json(err));
}

exports.new = function(req, res) {
  Person.create(req.params)
    .then(newGuy => res.redirect("/"))
    .catch(err => res.json(err));
}

exports.remove = function(req, res) {
  Person.remove({name: req.params.name})
    .then(deleted => res.redirect("/"))
    .catch(err => res.json(err));
}

exports.show = function(req, res) {
  Person.findOne({name: req.params.name})
    .then(person => res.json(person))
    .catch(err => res.json(err));
}