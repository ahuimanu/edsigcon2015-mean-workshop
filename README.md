#EDSIGCON 2015 - MEAN Workshop

**Presenters**:

* Jeffry Babb - West Texas A&M University
* Kareem Dana - West Texas A&M University
* Musa Jafar - Manhattan College

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

#Web Development Patterns

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
   * Conatains ALL OF THE ABOVE
   * Browsder-based environment
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

##Single Thread (Node/Nginx) vs Multi-Thread (Apache/Java)
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

#Using NodeJS and Express - Fortune Cookie

* package.json
* node libraries
* configure express
* RESTful endpoints

## Fortune Cookie Example: Procedure

1. Copy the contents of `package.json.fortune-cookie` into `package.json` (overwrite)
2. `npm install` (reads package.json)
3. Copy the contents of `server.js.fortune-cookie` into `server.js` (overwrite)
   * Cloud 9: Run button
   * local: `node server.js`