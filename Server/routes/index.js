var express = require('express');
var router = express.Router();

var userRouter = require('./user');
var articleRouter = require('./article')

router.use('/user', userRouter);
router.use('/article', articleRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
