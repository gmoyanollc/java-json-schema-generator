var fs = require('fs');
var $RefParser = require('json-schema-ref-parser')

deferenceSchemaFile();

function deferenceSchemaFile() {

  //$RefParser.dereference('../../iep-schema/SoiTrack.json', function(err, schema) {
  $RefParser.dereference('../../iep-schema/tsoa/soi/tsoa-track/2.0/TsoaTrack.json', function(err, schema) {
  //$RefParser.dereference('military-unit.json', function(err, schema) {
    if (err) {
      console.error(err);
    }
    else {
      // `schema` is just a normal JavaScript object that contains your entire JSON Schema, 
      // including referenced files, combined into a single object 
      console.log(schema.id);
      writeSchemaFile(schema);
    }
  });
}

function writeSchemaFile (schemaObject) {
  var schemaBuffer = JSON.stringify(schemaObject, null, '  ');
  console.log('##output schema buffer string');
  console.log(schemaBuffer.toString());
  console.log('##write schema document file');
  //fs.writeFileSync('../../iep-schema/SoiTrack-dereferenced.json', schemaBuffer);
  fs.writeFileSync('../../iep-schema/TsoaTrack-dereferenced.json', schemaBuffer);
  //fs.writeFileSync('military-unit-dereferenced.json', schemaBuffer);
  /*
  if (dirPathExists(this.targetSchemaBaseDir + this.targetSchemaFileDestination))
    fs.writeFileSync(this.targetSchemaBaseDir + this.targetSchemaFileDestination, schemaBuffer);

  function dirPathExists(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true;
    }
    dirPathExists(dirName);
    fs.mkdirSync(dirName);
  };*/
}
