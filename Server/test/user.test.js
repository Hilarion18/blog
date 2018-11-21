const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http') 

const app = require('../app')
const User = require('../models/user')

chai.use(chaiHttp)

describe('User route test', function() {
    describe('USER GET', function() {
        it('GET / user data should return an object', function(done) {
        chai
            .request(app)
            .get('/user')
            .end(function(err,res) {
                expect(res).to.have.status(200)
                expect(res).to.be.an('object')
                done()
            })
        })
    })
    describe("user POST", function() {
        describe("USER registration", function() {
            describe("user registration success", function() {
                
            });

            describe("user registration failed", function() {
            let data = {
                name: "bruce wayne",
                picture: "batman.jpg",
                gender: "male",
                email: "batman@gmail.com",
                password: "batman"
            };

            it("it expect if input is empty", function(done) {
                data.name = "";
                data.picture = "";
                data.gender = "";
                data.email = "";
                data.password = "";

                chai
                .request(app)
                .post("/user/signup")
                .send(data)
                .end(function(err, res) {
                    expect(res.body).to.have.property("err");
                    expect(res.body).to.have.property("message");
                    expect(res.body.err).to.have.property("errors");
                    expect(res.body.err.errors).to.have.property("name");
                    expect(res.body.err.errors).to.have.property("gender");
                    expect(res.body.err.errors).to.have.property("email");
                    expect(res.body.err.errors).to.have.property("password");
                    expect(res.body.err.errors.name)
                    .to.have.property("message")
                    .to.equal("name is required");
                    expect(res.body.err.errors.gender)
                    .to.have.property("message")
                    .to.equal("gender is required");
                    expect(res.body.err.errors.email)
                    .to.have.property("message")
                    .to.equal("email is required");
                    expect(res.body.err.errors.password)
                    .to.have.property("message")
                    .to.equal("password is required");
                    expect(res).to.have.status(500);
                    done();
                });
            });

            it("it expect if name input is integer or not string", function(done) {
                data.name = 1234;
                chai
                .request(app)
                .post("/user/signup")
                .send(data)
                .end(function(err, res) {
                    expect(res.body).to.have.property("err");
                    expect(res.body.err).to.have.property("errors");
                    expect(res.body.err.errors).to.have.property("name");
                    expect(res.body.err.errors.name).to.have.property("message");
                    expect(res.body.err.errors.name.message).to.equal(
                    "name must be string"
                    );
                    done();
                });
            });

            it("it expect if gender input is not female or male", function(done) {
                data.gender = "laki-laki";
                chai
                .request(app)
                .post("/user/signup")
                .send(data)
                .end(function(err, res) {
                    expect(res.body).to.have.property("err");
                    expect(res.body.err).to.have.property("errors");
                    expect(res.body.err.errors).to.have.property("gender");
                    expect(res.body.err.errors.gender).to.have.property("message");
                    expect(res.body.err.errors.gender.message).to.equal(
                    "`" +
                        `${data.gender}` +
                        "`" +
                        " is not a valid enum value for path `gender`."
                    );
                    done();
                });
            });

            it("it expect if length password less than 6 character", function(done) {
                data.password = "abcd";
                chai
                .request(app)
                .post("/user/signup")
                .send(data)
                .end(function(err, res) {
                    expect(res.body).to.have.property("err");
                    expect(res.body.err).to.have.property("errors");
                    expect(res.body.err.errors).to.have.property("password");
                    expect(res.body.err.errors.password).to.have.property("message");
                    expect(res.body.err.errors.password.message).to.equal(
                    "password minimal length 6"
                    );
                    done();
                });
            });
            });
        });

        describe("user validation email", function() {
            beforeEach(function(done) {
            let dataUser = new User({
                name: "bruce wayne",
                picture: "batman.jpg",
                gender: "male",
                email: "batman@gmail.com",
                password: "batman"
            });
            dataUser.save((err, res) => {
                done();
            });
            });

            afterEach(function(done) {
            User.remove({}, function(err) {
                done();
            });
            });

        });

        describe("user signin", function() {
            beforeEach(function(done) {
            let dataUser = new User({
                name: "bruce wayne",
                picture: "batman.jpg",
                gender: "male",
                email: "batman@gmail.com",
                password: "batman"
            });

            dataUser.save((err, res) => {
                done();
            });
            });

            afterEach(function(done) {
            User.remove({}, function(err) {
                done();
            });
            });

            let data = {
            email: "batman@gmail.com",
            password: "batman"
            };
        });
    })
})