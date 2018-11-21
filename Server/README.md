# myBlog

We're going to build web blog, but first we're going to build and run testing first by using TDD method


* **URL**

  <http://localhost:3000>
___
* **Models:**

  `User` have properties: name, email, password, article, comment
  
  `Article` have properties: name, content, comment(commentId, content) 
___
* **Method User:**

  `GET` /user
  
  Let user can get his only profile data
  <br>
  <br>
  ___
  
  `POST`/user/signin
  
  Existing user can login or sign in to do post an article or comment to another article
  <br>
  <br>
  `POST`/user/signup
  
  New user can sign up or do registration to do post an article or comment to another article
  <br>
  <br>
  `POST`/user/article
  
  User can post an article
  <br>
  <br>
  `POST`/user/comment
  
  New user can sign up or do registration to do post an article or comment to another article
  <br>
  <br>
  ___
  
  `DELETE` /user
  
  User can only delete his own account
  <br>
  <br>
  
  `DELETE` /user/:article
  
  User can only delete his own article
  <br>
  <br>
  
  `DELETE` /user/:comment
  
  User can only delete his own article
  <br>
  <br>
  ___
  
  `PUT` /user
  
  User can only update his own profile/account (name)
  <br>
  <br>
  
  `PUT` /user/:article
  
  User can only update his own article
  <br>
  <br>
___

* **Method Article:**

  `GET` /article
  
  Show articles on client page, can be executed on homepage or when user click article button on the bar
  <br>
  <br>
  ___
  `GET` /article/:article
  
  Can search any article
  <br>
  <br>
  ___