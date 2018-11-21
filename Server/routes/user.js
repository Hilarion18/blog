var express = require('express');
var router = express.Router();
var {getUser, signIn, signUp} = require('../controllers/userController')


router.get('/', getUser )
router.post('/signin', signIn)
router.post('/signup', signUp)
// router.post('/article', postArticle)
// router.post('/comment', postComment)
// router.delete('/', removeAcc)
// router.delete('/:article', removeArticle)
// router.put('/', updateAcc)
// router.put('/:article', updateArticle)

module.exports = router;
