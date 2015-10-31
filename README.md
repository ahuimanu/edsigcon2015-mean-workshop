#EDSIGCON 2015 - MEAN Workshop

**Presenters**:

* Jeffry Babb - West Texas A&M University
* Kareem Dana - West Texas A&M University
* Musa Jafar - Manhattan College

[Presentation](https://docs.google.com/presentation/d/19L_5UzSa4Xesh9-tXvL1Xho8sR8CCKD6kAkyMBR8uSc/edit#slide=id.gd18b6b64d_0_226) 

---

#Agenda

1. Web Development Patterns (5 minutes)
2. Tools (5 minutes)
3. Towards MEAN CRUD (60 minutes)
   * Setup (5 minutes)
   * NodeJS (10 minutes)
   * ExpressJS (10 minutes)
   * MongoDB (10 minutes)
   * Mongoose (10 minutes)
   * AngularJS (10 minutes)
   * MEAN CRUD (10 minutes) 
4. Conclusion

---

#Web Development Patterns/Evolution

* HTML5/CSS3
* Adaptive/Responsive Mobile First Design
* AJAX
* Full Stack Isomorphism
* MVC
   * Ruby on Rails
* Challenges of Web Applications
   * Statelessness of HTTP
   * REST - service endpoints and HTTP Verbs
      * Create - POST
      * Read - GET
      * Update - PUT
      * Delete - DELETE
   * SPA - Single Page Applications

---

#Full Stack Isomorphism with MEAN

* **__A__**ngularJS (2009)
* **__M__**ongoDB/Mongoose (2009)
* **__E__**xpress (2010)
* **__N__**odeJS (2009)

##2009?
* Maturity/Refinement of Web 2.0 (Ajax)
* Onset of Mobile
* Emergence/Maturity of HTML5/CSS3
 
---

#Tools

* **[NodeJS](https://nodejs.org/en/)**
   * Also installs NPM; almost all you'll need.

* **[Node Package Manager](https://www.npmjs.com/)**
   * All the extras you'll need for NodeJS

* **[MongoDB](https://www.mongodb.org/)**
   * NoSQL, Document-based JSON(BSON) Database

* **[Cloud 9 IDE](http://c9.io)**
   * Great example of the very tools we are working to develop
   * NodeJS-based
   * Contains ALL OF THE ABOVE
   * Browser-based environment
   * Ubuntu environment
   * Free account

---

#NodeJS

* Server-side JavaScript
* V8 JavaScript Engine (from Google/Chrome)
* Single-Thread Non-Blocking I/O
* Asynchronous
* Strong API Library (basics though)
* Package Management System (this is where the magic lies)
* Event-driven (loop)

---

##Single-Threaded (Node/Nginx) vs Multi-Threaded (Apache/Java)
![Node is Single-Threaded and Non-blocking](http://i39.photobucket.com/albums/e188/ahuimanu/threading_node_zpshths1cqd.png "Node is Single-Threaded and Non-blocking")
source: strongloop

---

![Apache and other multi-threading approaches](http://i39.photobucket.com/albums/e188/ahuimanu/threading_java_zpsvolnymbf.png "Apache and other multi-threading approaches")
source: strongloop

---

##Event-Driven
![NodeJS and JavaScript are event-driven](http://i39.photobucket.com/albums/e188/ahuimanu/NodeEventLoop_zpsg6o8fxe9.png "NodeJS and JavaScript are event-driven")

---

#ExpressJS
* RESTful HTTP endpoints
   * CREATE - POST
   * READ - GET
   * UPDATE - PUT
   * DELETE - DELETE
* Routing
* Template Rendering
 
---

#NodeJS Hello World

```JavaScript
var http = require('http');

//note, if using C9.io, you must used process.env.PORT and process.env.IP
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT || 1337, process.env.IP || "0.0.0.0");

console.log('Server running...');
```
1. Copy the contents of `server.js.hello-world` into `server.js` (overwrite)
2. Run it
   * Cloud 9: Run button
   * local: `node server.js`

---

#Using NodeJS and Express - Fortune Cookie

* package.json
* node libraries
* configure express
* RESTful endpoints

_*package.json*_
```JavaScript
{
  "name": "fortune-cookie-getter",
  "version": "0.0.0",
  "description": "A fortune cookie app",
  "main": "server.js",
  "repository": "git@github.com:ahuimanu/edsigcon2015-mean-workshop.git",
  "author": "IS Educator",
  "dependencies": {
    "express": "~4.13.3"
  }
}
```

_*server.js*_
```JavaScript
var http = require('http');
var fs = require('fs');
var stream = require('stream');
var readline = require('readline');
var express = require('express');

//create our express app and tie in to http
var app = express();
var server = http.createServer(app);

//hold the fortunes
var fortunes = [];


//get fortunes from file
var finstream = fs.createReadStream('fortunes.txt');
var foutstream = new stream();
var frl = readline.createInterface(finstream, foutstream);

//read lines from file once the interface is created
frl.on('line',function(line)
{
  fortunes.push(line);
})

//listen for get requests for fortune
app.get('/fortune', function(req, res){
  var index = Math.random() * fortunes.length;
  index = Math.floor(index);

  //prepare response and send  
  res.setHeader('content-type', 'text/html');  
  res.end(fortunes[index]);
  
});

//default path
app.get('/', function(req, res){
  
  var output = "<a href='https://edsigcon2015-mean-workshop-ahuimanu.c9.io/fortune'>Fortunes</a>";
  output += "<br>";
  res.setHeader('content-type', 'text/html');
  res.end(output);
});

//note, if using C9.io, you must used process.env.PORT and process.env.IP
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("server listening at", addr.address + ":" + addr.port);
});
```

---

## Fortune Cookie Example: Procedure

1. Copy the contents of `package.json.fortune-cookie` into `package.json` (overwrite)
2. `npm install` (reads package.json)
3. Copy the contents of `server.js.fortune-cookie` into `server.js` (overwrite)
4. Run it
   * Cloud 9: Run button
   * local: `node server.js`
5. Navigate
   * Cloud9: see the `your code is running at: ...` message
   * local: `http://localhost:3000/`
6. Let's discuss...

--- 

# You Try It: Aphorisms: Procedure
1. Copy the contents of `server.js.aphorisms` into `server.js` (overwrite)
2. Complete the code (it is based on the previous example)
3. Run it
   * Cloud 9: Run button
   * local: `node server.js`
4. Navigate
   * Cloud9: see the `your code is running at: ...` message
   * local: `http://localhost:3000/`

---

#Basic Form Handling with Express

Before we move on to MongoDB, lets see how we'd use an Express HTTP service endpoint
to handle a form.

LINK: [Basic Form Handling with Express](https://c9.io/ahuimanu/nodejs-express-basic-form-handling)

_*package.json*_
```JavaScript
{
  "name": "Simple-Form-Handling-with-Express",
  "version": "0.0.1",
  "description": "Using Node/HTML/EJS for form handling",
  "main": "server.js",
  "repository": "",
  "author": "EDSIGCON2015",
  "dependencies": {
    "express": "~4.13.3",
    "body-parser": "~1.14.0"
  }
}
```

_*index.html*_
```HTML
<!doctype html>
<html lang="en">

<head>
  <title>Online BBA Form</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/bootstrap-responsive.min.css">
</head>

<body>
  <div class="page-header">
    <h1>MEAN CRUD Form</h1>
  </div>
  <form action="/formhandler" method='post'>
    <div class="form-group col-md-4">      
      <label for="fname">First Name</label>
      <input type="text" name="fname" class="form-control" id="fname">
    </div>
    <div class="form-group col-md-4">      
      <label for="lname">Last Name</label>
      <input type="text" name="lname" class="form-control" id="lname">
    </div>
    <div class="form-group col-md-4">      
      <label for="email">Email</label>
      <input type="text" name="email" class="form-control" id="email">
    </div>
    <div class="form-group col-md-4">      
      <input type="submit" name="submit" id="submit" value="submit">
    </div>    
  </form>
  <script src="/js/jquery.min.js"></script>
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/angular.min.js"></script>
</body>

</html>
```

_*server.js*_
```JavaScript
//simple form handling

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//var parser = bodyParser();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  console.log('default');
  res.sendFile('/client/index.html');
  res.end();
});

app.post('/formhandler', function(req, res){
  
  //look under req.body -> http://expressjs.com/api.html
  //requires body parser
  
  res.end("THANKS: " + req.body.fname);
});

app.listen(process.env.PORT, process.env.HOST, function(){
  console.log("listening");
});
```

#Embedded JavaScript (EJS) Templates

_*index.html*_
```HTML
<!doctype html>
<html lang="en">

<head>
  <title>Online BBA Form</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/bootstrap-responsive.min.css">
  <style>
    body {
      padding-top: 10px;
    }
  </style>
</head>

<body>
  <div class="page-header">
    <h1>MEAN CRUD</h1>
  </div>
  <div class="container-fluid">
    <!-- form grouping is handled by the name of each radio button -->
    <form action="/formhandler" method='post'>
      <div class="form-group col-md-4">
        <label for="fname">First Name</label>
        <input type="text" name="fname" class="form-control" id="fname">
      </div>
      <div class="form-group col-md-4">
        <label for="lname">Last Name</label>
        <input type="text" name="lname" class="form-control" id="lname">
      </div>
      <div class="form-group col-md-4">
        <label for="email">Email</label>
        <input type="text" name="email" class="form-control" id="email">
      </div>
      <div class="form-group col-md-4">
        <input type="submit" name="submit" id="submit" value="submit">
      </div>
    </form>
  </div>
  <script src="/js/jquery.min.js"></script>
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/angular.min.js"></script>
</body>

</html>

```

_*formhandler.ejs*_
```HTML
<!doctype html>
<html>
    <head>
        <title><%= title %></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/bootstrap.min.css">
        <link rel="stylesheet" href="/css/bootstrap-responsive.min.css">
        <style>
            body {
              padding-top: 10px;
            }
        </style>        
    </head>
    <body>
        <div class="table table-condensed table-responsive">
          <table class="table">
              <thead>
                  <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><%= person.FirstName %></td>
                      <td><%= person.LastName %></td>
                      <td><%= person.Email %></td>
                  </tr>
              </tbody>
          </table>
        </div>        
    </body>
</html>
```

_*server.js*_
```JavaScript
//package import
var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');

//construct library objects
var app = express();

///// MIDDLEWARE //////////////////////////////////////////////////////////////
//set the static path
app.use(express.static('client'));

// set the view engine to ejs
app.set('view engine', 'ejs');

//setup for body parser
app.use(bodyParser.urlencoded({extended: true}));

///// ROUTES MIDDLEWARE ///////////////////////////////////////////////////////

//form handler
app.post('/formhandler', function(req, res){
  //look under req.body -> http://expressjs.com/api.html
  //requires body parser

  var fname = req.body.fname;
  var lname = req.body.lname;
  var email = req.body.email;

  //prepare object
  var user = { FirstName: fname,
               LastName: lname,
               Email: email
  };
  
  //EJS documentation: https://www.npmjs.com/package/ejs
  //render EJS template
  res.render('query', {
    title: 'Form Results',
    person: user
  });  
}

///// SERVE ///////////////////////////////////////////////////////////////////

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("app listening");
});

```

---

#MongoDB

* NoSQL
* Document-based (JSON/BSON)
* Beyond relational model

---

_*Tables*_

![RDBMS Design for a Blog Post](http://i39.photobucket.com/albums/e188/ahuimanu/BlogPostRDBMSDesign_zpskgiflaew.png "RDBMS Design for a Blog Post")

_*Documents*_
```javascript
{
  "title": "First Blog Post",
  "comments": [

  ]
}
```

---

#Getting Set Up

1 Install on Cloud9
   * Install and run service `./mongod`
   * Run client `mongo`

##Cloud9 Script
```JavaScript
#!/bin/bash
mkdir data
echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
chmod a+x mongod
```
Or, in a straight install, with the mongodb service running, `mongo`

---

#Working with MongDB
1. To use a new database called `mean`: `use mean`
   * You can always just type in `mongo mean` to proceed direct to this collection
2. Show available databases by typing `show dbs`
3. Show available collections by typing `'show collections` (we don't have any yet)
4. Let's CRUD
   1. **CREATE**: `db.posts.insert({"title":"First Post", "user","edsigcon2015"})`
   2. **READ**: 
      1. `db.posts.find()`
      2. `db.posts.find({ "user": "alice" })`
   3. **DELETE**: 
      1. `db.posts.remove()`
      2. `db.posts.remove({ "user": "alice" })`
   3. **UPDATE**: 

```JavaScript
db.posts.update({
  "user": "alice"
}, {
  "title": "Second Post",
  "user": "alice"
}, {
  upsert: true
})
```

**NOTE**: UPSERT is a very useful concept as it allows us to handle the conditional 
logic that says: If this record exists, update it; if it doesn't exist, create it.

---

#Schema/Model Orientation with Mongoose

##MongoDB setup

We now use a connection string for MongoDB as we will programmatically connect to 
MongoDB.

```JavaScript
mongodb://username:password@hostname:port/database
```

---

For cloud 9, we'll do this:

```JavaScript
"mondodb://" + process.env.IP + "/meandb"
```

So, we'll have something like this:

```JavaScript
var uri = "mondodb://" + process.env.IP + "/meandb";
var db = require('mongoose').connect(uri);
```

---

However, since we are using an MVC project structure, we'll place this into 
`config/env/development.js`

```JavaScript
module.exports = {
  db: 'mongodb://localhost/mean-crud',
  sessionSecret: 'developmentSessionSecret'
};
```

We also place mongoose configration file, `mongoose.js`, in the `config` folder.

```JavaScript
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);

  return db;
};
```

We use the `db` property of the config object above.

So now our `server.js` file will look like this:

```JavaScript
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(3000);

module.exports = app;

console.log('Server running...');
```

These are the basic steps for setting up Mongoose. Now, run the server.

---

#Mongoose Schemas

One of the points of Mongoose is to provide a schema-oriented means of setting up
a document collection.  This is also done to provide an **ODM** where the Schema also
describes a model object.

Let':

+ Define a `user` schema and model
+ Use a model instance to create, retrieve, and update `user` documents


##Creating a Schema and Model

In an MVC approach, we'd create a new file `usermodel.js`

```JavaScript
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String
});

mongoose.model('User', UserSchema);
```

We can now perform CRUD operations on the UserSchema model.

---

##Registering the model

We need to register the User model with Mongoose.  

```JavaScript
var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);

  require('usermodel');

  return db;
};
```

---

#EXPORTS? REQUIRE?
CommonJS

---

##Creating a User Controller

In an MVC approach, we would create a `Users` controller called 
`userscontroller.js` that will handle all user-related operations.

```JavaScript
var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return next(err);
    } else {
      res.json(user);
    }
  });
};
```

---

##User-Related Routes

Express lets use create routes, so we would create  `users.outes.js` in order to call
our newly-created model and its methods.

```JavaScript
var users = require('userscontroller');

module.exports = function(app) {
  app.route('/users').post(users.create);
};
```

---

##RESTful Services

It is important to bear in mind that Express and Mongoose will be used to create
HTTP service endpoints.  As such, we'll be returning JSON to a client-side framework.

We can create a `express.js` file to specify these routes accordingly:

```JavaScript
var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function() {
  var app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  require('usersroutes.js')(app);
  
  app.use(express.static('./public'));

  return app;
};
```

---

##CREATE: Making a REST POST

With a RESTful service, the proper way to create a new user is to use an HTTP POST 
request to the base users route.

In order to create a user, we must pass a JSON object in the body of a POST:

```JavaScript
{
  "firstName": "First",
  "lastName": "Last",
  "email": "user@example.com",
  "username": "username",
  "password": "password"
}
```

###Curl to test service endpoints

We can also use a command-line utility like `Curl` in order to test the HTTP POST
request.

```JavaScript
$ curl -X POST -H "Content-Type: application/json" -d '{"firstName":"First", "lastName":"Last","email":"user@example.com","username":"username","password":"password"}' localhost:3000/users
```

##READ: List a number of user documents

We'll use the `find()` - which is identical to the MongoDB version - to find items in the colletion.

We'll add a method called `list()` to the `userscontroller.js` file:

```JavaScript
exports.list = function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      return next(err);
    } else {
      res.json(users);
    }
  });
};
```

We also need to register a route for thisin the `usersroutes.js`

```JavaScript
var users = require('userscontroller');

module.exports = function(app) {
  app.route('/users')
    .post(users.create)
    .get(users.list);
};
```

---

#Advanced Mongoose Queries

##Find
Here is what the `find()` method can accept:

+ **Query**: This is a MongoDB query object
+ **[Fields]**: This is an optional string object that represents the document fields to return
+ **[Options]**: This is an optional options object
+ **[Callback]**: This is an optional callback function

Returning only usernames and emails:

```JavaScript
User.find({}, 'username email', function(err, users) {
  //do stuff
});
```

Passing query configuration objects:

```JavaScript
User.find({}, 'username email', {
  skip: 10,
  limit: 10
}, function(err, users) {
  ...
});
```

More on queries in the [Mongoose documentation](http://mongoosejs.com/docs/api.html). 

##FindOne

Works as `find()` does, but only returns the first item in the result set.

Let's add the following code a method, `userById()` which finds a document by
userId.

Add this to `userscontroller.js`:

```JavaScript
exports.read = function(req, res) {
  res.json(req.user);
};

exports.userByID = function(req, res, next, id) {
  User.findOne({
    _id: id
  }, function(err, user) {
    if (err) {
      return next(err);
    } else {
      req.user = user;
      next();
    }
  });
};
```

And we create a route for this in `usersroutes.js`:

```JavaScript
var users = require('userscontroller');

module.exports = function(app) {
  app.route('/users')
     .post(users.create)
     .get(users.list);

  app.route('/users/:userId')
     .get(users.read);

  app.param('userId', users.userByID);
};
```

##Parameters

Take note of the code above: one of the routes is `/users/:userId`.  This signifies 
that `:userId` will be handled as a request parameter.  The `app.param('userId', users.userByID);`
line will ensure that our application can use the parameter.

##Testing

We can test this out via a browser now:

```JavaScript
http://localhost:3000/users
```

OR

```JavaScript
http://localhost:3000/users/[id]
```

##Update

We can use several methods for finding and updating a Mongoose model:

* `update()`
* `findOneAndUpdate()`
* `findByIdAndUpdate()`

Since we've created our own `userById()` middleware method, we can easily use
`findByIdAndUpdate()`.  We add an `update()` method to `userscontroller.js`:

```JavaScript
exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
        if (err) {
            return next(err);
        }
        else {
            res.json(user);
        }
    });
};
```

By now, you may see a pattern: 

+ create a method in the controller
+ create a route to direct browser requests for that controller method

We update `usersroutes.js` accordingly:

```JavaScript
var users = require('userscontroller');

module.exports = function(app) {
  app.route('/users')
     .post(users.create)
     .get(users.list);

  app.route('/users/:userId')
     .get(users.read)
     .put(users.update);

  app.param('userId', users.userByID);
};
```

We use method chaining to associate `users.update` with the `put` HTTP verb.

We can test this again using `curl`:

```JavaScript
curl -X PUT -H "Content-Type: application/json" -d '{"lastName": "Updated"}' localhost:8080/users/[id]
```

##Delete

We can use several methods for finding and deleting a Mongoose model:

* `remove()`
* `findOneAndRemove()`
* `findByIdAndRemove()`

We add a `delete()` method to the `userscontroller.js` file:

```JavaScript
exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.user);
        }
    })
};
```

And, of course, we route by updating `usersroutes.js`:

```JavaScript
var users = require('userscontroller');

module.exports = function(app) { 
  app.route('/users')
    .post(users.create)
    .get(users.list);

  app.route('/users/:userId')
    .get(users.read)
    .put(users.update)
    .delete(users.delete);

  app.param('userId', users.userByID);
};
```

And, we can use something like `curl` to test this too:

```JavaScript
curl -X DELETE localhost:8080/users/[id]
```

#AngularJS Basics

By now we don't have as much time for the "A" in MEAN.

Important topics:

* Understanding the key concepts of AngularJS
* Introducing `bower` for frontend dependencies management
* Installing and configuring AngularJS
* Creating and organizing an AngularJS application
* Utilizing Angular's MVC architecture properly
* Utilizing AngularJS services 


---

## Introduction
* Client-side frontend to build single-page applications (SPAs) using MVC. 
* Extends HTML using directives that bind JavaScript business logic with HTML elements. 
* DOM manipulation 
* Client-side templating
* Two-way data binding `$scope` (synchronizes between models and views) 
* Dependency injection

---

##Key Concepts

* _*AngularJS Core Module/AngularJS object*_: `angular`
* _*AngularJS Modules*_: everything is encapsulated as a module
* _*Application Modules*_: `angular.module(name, [requires], [configFn])`
   * _*name*_: This is a string defining the module name
   * _*requires*_: This is an array of strings defining other modules as dependencies
   * _*configFN*_: This is a function that will run when the module is being registered
* External Modules
* Third-Party Modules

---

##Data Binding

_*one-way*_

![AngularJS One-Way Data Binding](http://i39.photobucket.com/albums/e188/ahuimanu/AngularJS-one-way-data-binding_zpsk0bd4ipm.png "AngularJS One-Way Data Binding")

---

_*two-way*_

![AngularJS Two-Way Data Binding](http://i39.photobucket.com/albums/e188/ahuimanu/AngularJS-two-way-data-binding_zpsortn4t3n.png "AngularJS Two-Way Data Binding")

---

##Dependency Injection

The means by which a module's required modules are included.

_*Demonstrating Satisfying Dependency Without DI*_

```JavaScript
var Notifier = function() {
  this.userService = new UserService();
};

Notifier.prototype.notify = function() {
  var user = this.userService.getUser();

  if (user.role === 'admin') {
    alert('You are an admin!');
  } else {
    alert('Hello user!');
  }
};
```

_*Satisfying a Dependency WITH DI*_

```JavaScript
var Notifier = function(userService) {
  this.userService = userService;
};

Notifier.prototype.notify = function() {
  var user = this.userService.getUser();

  if (user.role === 'admin') {
    alert('You are an admin!');
  } else {
    alert('Hello user!');
  }
};
```