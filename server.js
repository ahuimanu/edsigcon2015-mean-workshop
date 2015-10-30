var http = require('http');

//note, if using C9.io, you must used process.env.PORT and process.env.IP
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(process.env.PORT || 1337, process.env.IP || "0.0.0.0");

console.log('Server running...');