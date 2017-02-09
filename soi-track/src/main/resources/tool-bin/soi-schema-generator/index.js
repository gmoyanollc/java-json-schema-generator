var fs = require('fs'),
  path = require('path'),
  SoiSchemaGenerator = require('./lib/soi-schema-generator.js');

var schemaRootTemplateBuffer;
var schemaPropertyObjectTemplateBuffer;
var schemaPropertyArrayTemplateBuffer;
var config;

initialize();

var sourceSchemaBuffer;
var sourceSchemaObject;
var targetSchemaBuffer;

console.log('##iterate intermediary JSON schema files');

config.schemaFiles.forEach( function(schemaFile) {
  console.log(config.schemaDir.source + schemaFile.source);
  sourceSchemaBuffer = readFile(config.schemaDir.source + schemaFile.source);
  sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  targetSchemaBuffer = config.schemaDir.target + schemaFile.target;
  generateSoiObject(sourceSchemaObject);
});

done();

function generateSoiObject(sourceSchemaObject) {
  schemaRootTemplateObject = JSON.parse(schemaRootTemplateBuffer);
  var ssg = new SoiSchemaGenerator(schemaRootTemplateBuffer, schemaPropertyArrayTemplateBuffer, schemaPropertyObjectTemplateBuffer);
  schemaRootTemplateObject.id = ssg.getId(sourceSchemaObject);
  schemaRootTemplateObject.title = ssg.getTitle(sourceSchemaObject);
  schemaRootTemplateObject.type = ssg.getType(sourceSchemaObject);
  schemaRootTemplateObject.javaType = ssg.getJavaType(sourceSchemaObject);
  //schemaRootTemplateObject.properties = ssg.getProperty(sourceSchemaObject, ssg.getDefinition(sourceSchemaObject));
  schemaRootTemplateObject.properties = ssg.getProperty(sourceSchemaObject);
  //schemaRootTemplateObject.required = ssg.getRequired(sourceSchemaObject, ssg.getDefinition(sourceSchemaObject));
  schemaRootTemplateObject.required = ssg.getRequired(sourceSchemaObject);
  writeSchemaFile(targetSchemaBuffer, schemaRootTemplateObject);
}

function readFile(file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  console.log('##output file buffer string');
  console.log(fileBuffer.toString());
  return(fileBuffer);
}

function writeSchemaFile(file, schemaObject) {
  var schemaBuffer = JSON.stringify(schemaObject);
  console.log('##output schema buffer string');
  console.log(schemaBuffer.toString());
  console.log('##write schema document file');
  //fs.writeFileSync(targetSchemaFile, targetSchemaBuffer);
  if (dirPathExists(file)) fs.writeFileSync(file, schemaBuffer);

  function dirPathExists(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true;
    }
    dirPathExists(dirName);
    fs.mkdirSync(dirName);
  };
}

function initialize() {
  console.log('#Hello World');
  config = JSON.parse(readFile('./lib/config.json'));
  //var schemaRootTemplateBuffer = readFile(schemaRootTemplate);
  //var schemaRootTemplateBuffer = readFile(config.schemaTemplates.root);
  schemaRootTemplateBuffer = readFile(config.schemaTemplates.root);
  //schemaRootTemplateObject = JSON.parse(schemaRootTemplateBuffer);
  schemaPropertyObjectTemplateBuffer = readFile(config.schemaTemplates.propertyObject);
  schemaPropertyArrayTemplateBuffer = readFile(config.schemaTemplates.propertyArray);
  //var sourceSchemaBuffer = readFile(sourceSchemaFile);
  //var sourceSchemaBuffer = readFile(config.schemaDir.source + config.schemaFiles[0].source);
  //sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
}

function done() {
  console.log('#done');
}