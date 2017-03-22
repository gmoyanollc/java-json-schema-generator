var fs = require('fs')
  , $RefParser = require('json-schema-ref-parser')
  , SchemaGenerator = require('./lib/schema-generator.js');

var config;
var schemaTemplateObjects = [];

initialize();

var sourceSchemaBuffer;
var sourceSchemaObject;
var sourceSchemaFile;

console.log('##iterate JSONIX generated JSON schema files');

//config.schemaFilenames.forEach(function(schemaFilename) {
for (var index = 0; index < config.schemaSourceFilenames.length; index++) {
  //sourceSchemaFile = config.schemaBaseDir.source + schemaFilename.source;
  sourceSchemaFile = config.schemaBaseDir.source + config.schemaSourceFilenames[index];
  console.log('##source schema file: ' + sourceSchemaFile);
  sourceSchemaBuffer = readFile(sourceSchemaFile);
  sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  //var ssg = new SchemaGenerator(schemaTemplateObjects, config.schemaBaseDir.target
  //  , config.schemaFilepathMappings, schemaFilename.target);
  var ssg = new SchemaGenerator();
  ssg.schemaTemplateObjects = schemaTemplateObjects;
  ssg.targetSchemaBaseDir = config.schemaBaseDir.target;
  ssg.schemaFilepathMappings = config.schemaFilepathMappings;
  //ssg.setSchemaTemplateObjects(config.schemaTemplates);
  //ssg.schemaNamespace = SchemaGenerator.getSchemaNamespace(sourceSchemaObject);
  ssg.sourceSchemaBaseDir = config.schemaBaseDir.source;
  ssg.setSourceSchemaNamespace(sourceSchemaObject);
  ssg.setSourceSchemaBaseDirRelativeDepth();
  //ssg.generateObjectTypeSchema(sourceSchemaObject);
  ssg.generateObjectSchema(sourceSchemaObject);
//});
};

//writeDeferencedTargetSchemaFile();
done();

function readFile(file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  console.log('##output file buffer string');
  console.log(fileBuffer.toString());
  return(fileBuffer);
}

function getSchemaTemplateObjects() {
  var schemaTemplateObjects = [];
  
  config.schemaTemplates.forEach(function (schemaTemplate) {
    var schemaTemplateFileBuffer = readFile(schemaTemplate.file);
    var schemaTemplateObjectItem = {
      'templateId' : schemaTemplate.id,
      'templateObject' : JSON.parse(schemaTemplateFileBuffer)
    };
    schemaTemplateObjects.push(schemaTemplateObjectItem);
  });

  return(schemaTemplateObjects);
}

function writeDeferencedTargetSchemaFile() {

  $RefParser.dereference(config.schemaBaseDir.target + 'TsoaTrack.json', function(err, schema) {
    if (err) {
      console.error(err);
    }
    else {
      // `schema` is just a normal JavaScript object that contains your entire JSON Schema, 
      // including referenced files, combined into a single object 
      console.log(schema.id);
    }
  });
}

function initialize() {
  console.log('#Hello World');
  config = JSON.parse(readFile('./lib/config.json'));
  schemaTemplateObjects = getSchemaTemplateObjects();
}

function done() {
  console.log('#done');
}