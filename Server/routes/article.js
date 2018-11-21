var express = require('express');
var router = express.Router();
var {getArticle, findArticleTitle, create} = require('../controllers/articleController')
const {isLogin} = require('../middleware/isLogin')
/* GET users listing. */
router.get('/', getArticle);
router.get('/id', findArticleTitle )
router.post('/', isLogin, create)

module.exports = router;
