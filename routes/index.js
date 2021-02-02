var express = require('express');
var router = express.Router();
const multiavatar = require('@multiavatar/multiavatar')
const uuid = require('node-uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getSvg', function(req, res, next) {
  const uid= uuid.v1()
  var svgCode = multiavatar(uid)
  res.json({"svg":svgCode});
});

module.exports = router;
