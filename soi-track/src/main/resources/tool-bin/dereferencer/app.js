var fs = require("fs");
var $refParser = require("json-schema-ref-parser");

const DEREFERENCED_FILE_NAME_LABEL_PART = "dereferenced";
//var DEFAULT_SCHEMA_FILE = "../../iep-schema/tsoa/soi/tsoa-track/2.0/TsoaTrack.json";
const DEFAULT_INPUT_SCHEMA_FILE = "../soi-java-sdk-schema-binder/source/iep-schema/tsoa/soi/tsoa-track/2.0/TsoaTrack.json";
//var DEFAULT_DEREFERENCED_FILE_LOCATION = "../../iep-schema";
const DEFAULT_OUTPUT_FOLDER = "../soi-java-sdk-schema-binder/source";

/*
var argv = process.argv.slice(2);
if (argv > 0) 
  fs.access(argv[0], function(err) 
    if (!err) 
      schemaFile = argv[0];
    else {
      console.log(err);
      help();
    })
if (argv > 1)
  fs.access(argv[1], function(err)
    if (!err)
      outputFile = 
    else {
      console.log(err);
      help();
    }
   else
     
* */
var schemaFile = DEFAULT_INPUT_SCHEMA_FILE;
var dereferencedSchemaFolder = DEFAULT_OUTPUT_FOLDER;

var schemaFilename = schemaFile.substring(schemaFile.lastIndexOf('/') + 1);
var dereferencedSchemaFilename = DEREFERENCED_FILE_NAME_LABEL_PART + '-' + schemaFilename;
deferenceSchemaFile(schemaFile);

function help() {
  console.log("  " + process.argv[0] + ' ' + process.argv[1] + "[schema-file] [dereferenced-file-location]");
  console.log("    " + "DEFAULT_INPUT_SCHEMA_FILE: " + DEFAULT_INPUT_SCHEMA_FILE);
  console.log("    " + "DEFAULT_OUTPUT_FOLDER: " + DEFAULT_OUTPUT_FOLDER);
}
    
function deferenceSchemaFile(schemaFile) {

  //$RefParser.dereference('../../iep-schema/SoiTrack.json', function(err, schema) {
  //$RefParser.dereference('../../iep-schema/tsoa/soi/tsoa-track/2.0/TsoaTrack.json', function(err, schema) {
  //$RefParser.dereference('military-unit.json', function(err, schema) {
  //045 $refParser.dereference(schemaFile, function(err, dereferencedSchema) {
  $refParser.dereference(schemaFile, function(err, dereferencedSchema) {
    if (err) {
      console.error(err);
    }
    else {
      // `schema` is just a normal JavaScript object that contains your entire JSON Schema, 
      // including referenced files, combined into a single object 
      console.log(dereferencedSchema.id);
      writeSchemaFile(dereferencedSchema);
    }
  });
}

function writeSchemaFile (schemaObject) {
  var schemaBuffer = JSON.stringify(schemaObject, null, '  ');
  console.log('##output schema buffer string');
  console.log(schemaBuffer.toString());
  var dereferencedSchemaFile = dereferencedSchemaFolder + '/' + dereferencedSchemaFilename;
  console.log('##write dereferenced schema file: ' + dereferencedSchemaFile);
  //fs.writeFileSync('../../iep-schema/SoiTrack-dereferenced.json', schemaBuffer);
  //045 fs.writeFileSync('../../iep-schema/TsoaTrack-dereferenced.json', schemaBuffer);
  fs.writeFileSync(dereferencedSchemaFile, schemaBuffer);
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
