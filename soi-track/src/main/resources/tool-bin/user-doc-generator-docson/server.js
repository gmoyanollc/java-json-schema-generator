/*
"Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. 
...
Node.js has an event-driven architecture capable of asynchronous I/O.
...
Corporate users...include GoDaddy, Groupon, IBM, LinkedIn, Microsoft, Netflix, PayPal, Rakuten, SAP, Voxer, Walmart, Yahoo!, and Cisco Systems."[20170515](https://en.wikipedia.org/wiki/Node.js)
*/

var express = require('express');
const app = express();
//var fs = require('fs');

const port = 8080;
//const schemaFile = "#../iep-schema/TsoaTrack-dereferenced.json";
const index = "docson/index.html";
//const schemaFile = "#/docson/examples/example.json$items";

//var index = fs.readFileSync('lib/docson/index.html');

/*const requestHandler = function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end(index + schemaFile);
  res.end(index);
};*/

app.use(express.static(__dirname + '/docson'));

app.get('/', function (request, response) {
  response.render(index);
})

//const server = http.createServer(requestHandler);

app.listen(port, function (err) {  
  if (err) {
    return console.log('something bad happened:', err)
  };

  console.log("NodeJS http server is listening on port " + port);
  console.log("  available on:");
  console.log("    http://localhost:" + port);
  console.log("  CTRL-C to stop the server");
})
