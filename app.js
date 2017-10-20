var fs = require('fs');
var generateSchema = require('./lib/schema-generator.js');

function help() {
  console.log("  usage: " + process.argv[0] + ' ' + process.argv[1] + " json-schema-file");
}

var argv = process.argv.slice(2);
if (argv.length > 0) 
  fs.access(argv[0], function (err) {
    if (!err) {
      var generatedSchema = new generateSchema(argv[0]);
      generatedSchema.logIdentifierList();
    } else {
      console.log(err);
      help();
    }
  })
else
  help();
