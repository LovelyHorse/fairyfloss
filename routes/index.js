var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();

/* GET home page. */

router.get('/', stormpath.loginRequired, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
