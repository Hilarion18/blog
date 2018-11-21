const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http') 

const app = require('../app')
const Article = require('../models/article')

chai.use(chaiHttp)

describe('Article Route test', function () {
  describe('GET / selected or all articles to front page', function () {
    it('should return 200', function(done) {
      chai
        .request(app)
        .get('/article')
        .end(function (err, res) {
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          done()
        })
    })
  })
  // describe('GET / to search article specified, engine will search from database', function() {
  //   let data = [
  //     {
  //       title: "pergi ke jepang",
  //       content: "jalan-jalan",
  //       comment: ''
  //     },
  //     {
  //       title: "makan di korea",
  //       content: "jalan-jalan",
  //       comment: ''
  //     },
  //   ]
  //   it('should return 200, search by title from database toLowerCase ', function(done) {
  //     data.title = 'Jepang'
  //     let result = data.filter(item => {
  //       item.toLowerCase().includes(word.toLowerCase())
  //     })
  //     chai
  //       .request(app)
  //       .get(`/article/id`)
  //       .send(result)
  //       .end(function (err, res) {
  //         expect(res).to.have.status(200)
  //         expect(res).to.be.an('array')
  //         done()
  //       })
  //   })
  // })
})