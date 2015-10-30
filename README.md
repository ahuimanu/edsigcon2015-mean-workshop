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
1. Copy the contents of `server.js.fortune-cookie` into `server.js` (overwrite)
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

1

---
   