//
// # Fortune Cookie
//
// GET requests for fortune.
// Everything was accomplished reading the
// Node API documentation - https://nodejs.org/api/
// The Express documentaiton - http://expressjs.com/4x/api.html
// JavaScript reference - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

var http = require('http');
var fs = require('fs');
var stream = require('stream');
var readline = require('readline');
var express = require('express');

//create our express app and tie in to http

//hold the aphorisms

//get fortunes from file
var finstream = fs.createReadStream('aphorisms.txt');
var foutstream = new stream();
var frl = readline.createInterface(finstream, foutstream);

//read lines from file once the interface is created

//listen for get requests for fortune


//default path


//start server listening
//note, if using C9.io, you must used process.env.PORT and process.env.IP
