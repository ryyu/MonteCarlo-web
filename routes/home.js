var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home2', { title: 'Ryan Yu' });
});

module.exports = router;
