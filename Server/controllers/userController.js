const User = require('../models/user')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bcryptPass = require("../helper/bcryptPass")


module.exports = {
    getUser: function(req,res) {
        User.findOne({email: req.params.email})
        .then((user) => {
            res.status(200).json({
                user,
                message: `User's data has been shown`
            })
        })
        .catch((err) => {
            res.status(404).json({
                err,
                message: `User can't get his/her own data`
            })
        })
    },

    signIn: function(req, res) {
        User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    jwt.sign(
                    {
                        userId: user._id,
                        email: user.email
                    },
                    process.env.JWT_SECRET,
                    function(err, token) {
                        if (!err) {
                        res.status(201).json({
                            name: user.name,
                            email: user.email,
                            token: token
                        });
                        } else {
                        res.status(500).json({
                            message: `Email and password didn't match`
                        });
                        }
                    }
                    );
                } else {
                    res.status(500).json({
                    message: "email and password didnt match"
                    });
                }
                } else {
                res.status(404).json({
                    message: "you did not have account, please signup first"
                });
                }
            })
            .catch(err => {
                res.status(400).json({
                    message: `Something's error from our server`
                })
            });
    },

    signUp: function(req, res) {
        let validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!validateEmail.test(String(req.body.email).toLowerCase())) {
           res.status(400).json({
               message: `Please use correct email format`
           })
        } else if (validateEmail.test(String(req.body.email).toLowerCase())) {
            let dataUser = new User({
            name: req.body.name,
            picture: req.body.picture,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password
            });
        
            bcryptPass(dataUser)
            dataUser.save()
            .then(user => {
                res.status(201).json({
                user,
                message: `registration success`
                });
            })
            .catch(err => {
                res.status(500).json({
                err,
                message: `Email has been taken, please use another email`
                });
            });
        } 
    },

    postArticle: function(req,res) {

    },

    postComment: function(req,res) {

    },

    removeAcc: function(req,res) {

    },

    removeArticle: function(req,res) {

    },

    updateAcc: function(req,res) {

    },

    updateArticle: function(req,res) {

    },

}
