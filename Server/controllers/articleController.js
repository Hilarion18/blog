// const bcrypt = require('bcryptjs')
// const bcryptPassword = require('../helper/bcryptPass')
// const jwt = require('jsonwebtoken')
// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client("534193051040-q1tah2abccu2dtq50nop9oq58pp5t5ih.apps.googleusercontent.com");
const Article = require('../models/article')
const User = require('../models/user')
// const multer = require('multer')

module.exports = {
    getArticle: (req,res) => {
        console.log('masuk getArticle =====');
        Article.find({})
        // .populate('author')
        .then((response) => {
            console.log('==== masuk then get article');
            // console.log(response);
            res.status(200).json({
                response,
                message: `All articles found`
            })
        })
        .catch((err) => {
            res.status(404).json({
                err,
                message: `There is no article`
            })
        })
    },

    findArticleTitle: (req,res) => {
        let keyword = req.body.keyword.toLowerCase()
        Article.find({})
        .then((articles) => {
            let result = articles.filter(article => {
                article.toLowerCase().includes(keyword.toLowerCase())
            })
            res.status(200).json({
                result,
                message: `Here are your articles related to keyword you've search`
            })
        })
        .catch((err) => {
            res.status(404).json({
                err,
                message: `Article not exist`
            })
        })
    },

    findOwnArticle: (req,res) => {

    },

    create: (req,res) => {
        let newArticle = new Article ({
            title: req.body.title,
            content: req.body.content,
            picture: req.body.picture,
            author: req.data._id
        })
        newArticle.save()
        .then((response) => {
            res.status(201).json({
                response,
                message: `New article has been created`
            })
        })
        .catch((err) => {
            res.status(400).json({
                err,
                message: `New article cannot be created`
            })
        })
    },
}