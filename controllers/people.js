const Person = require('../models').Person;

module.exports = {
  create(req, res) {
    return Person
      .create({
        name: req.query.name
      })
      .then(person => res.status(201).send(person))
      .catch(error => res.status(400).send(error));
  },
};