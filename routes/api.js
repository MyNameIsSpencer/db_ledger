var express = require('express');
var router = express.Router();
var peopleController = require('../controllers').people;

router.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Apey Eye!',
}));

router.post('/addPerson', peopleController.create);

module.exports = router;

