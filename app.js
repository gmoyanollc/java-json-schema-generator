var fs = require('fs');
//046e   , $RefParser = require('json-schema-ref-parser')
//046e   , SchemaGenerator = require('./lib/schema-generator.js');
var generateSchema = require('./lib/schema-generator.js');

function help() {
  console.log("  usage: " + process.argv[0] + ' ' + process.argv[1] + " schema-file");
}

//046e var config;
//var schemaTemplateObjects = [];

//046e initialize();

/* 046e var generatedSchema;
var sourceSchemaFile;
var sourceSchemaBuffer;
var sourceSchemaObject;
var sourceModuleFile;
var sourceModuleBuffer
var sourceModuleObject*/

//046e console.log('##iterate JSONIX generated JSON schema files');

//046e for (var index = 0; index < config.schemaSourceFilenames.length; index++) {

  /*046e sourceSchemaFile = config.schemaBaseDir.source + config.schemaSourceFilenames[index];
  console.log('##source schema file: ' + sourceSchemaFile);
  sourceSchemaBuffer = readFile(sourceSchemaFile);
  sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  var ssg = new SchemaGenerator();
  ssg.schemaTemplateObjects = getSchemaTemplateObjects();
  ssg.targetSchemaBaseDir = config.schemaBaseDir.target;
  ssg.targetSchemaBuildVersion = config.targetSchemaBuildVersion;
  ssg.defaultPrimitiveFacets = config.defaultPrimitiveFacets;
  ssg.w3cXmlTypeSchema = JSON.parse(readFile(config.w3cXmlTypeSchema));
  ssg.schemaFilepathMappings = config.schemaFilepathMappings;
  ssg.sourceDocumentationBaseDir = config.sourceDocumentationBaseDir;
  ssg.sourceSchemaBaseDir = config.schemaBaseDir.source;
  ssg.setSourceSchemaNamespace(sourceSchemaObject);
  ssg.setSourceSchemaBaseDirRelativeDepth();
  ssg.setSubstitutionMappings();
  ssg.loadDocumentationMap();
  generatedSchema = ssg.generate(sourceSchemaObject);
  generatedSchema.logIdentifierList();*/
//046e };

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

//writeDeferencedTargetSchemaFile();
//046e done();

/*046e function readFile(file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  //console.log('##output file buffer string');
  //console.log(fileBuffer.toString());
  return(fileBuffer);
}*/

/*046e function getSchemaTemplateObjects() {
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
}*/

/*046e function writeDeferencedTargetSchemaFile() {

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
}*/

/*046e function initialize() {
  console.log('#Hello World');
  config = JSON.parse(readFile('./lib/config.json'));
  //schemaTemplateObjects = getSchemaTemplateObjects();
}*/

/*046e function done() {
  console.log('#done');
}*/