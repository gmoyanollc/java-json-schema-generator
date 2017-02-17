var fs = require('fs'),
  path = require('path'),
  SoiSchemaGenerator = require('./lib/soi-schema-generator.js');

//var schemaRootTemplateBuffer;
//var schemaRootTemplateObject
//var schemaPropertyObjectTemplateBuffer;
//var schemaPropertyArrayTemplateBuffer;
var config;
var schemaTemplateObjects = [];
//var writeSchemaFile = SoiSchemaGenerator.prototype.writeSchemaFile();

initialize();

var sourceSchemaBuffer;
var sourceSchemaObject;
var sourceSchemaFile;
//var targetSchemaFile;

console.log('##iterate intermediary JSON schema files');

//config.schemaSourceFiles.forEach( function(schemaSourceFile) {
config.schemaFilenames.forEach(function(schemaFilename) {
  sourceSchemaFile = config.schemaBaseDir.source + schemaFilename.source;
  //console.log(config.schemaBaseDir.source + schemaSourceFile);
  console.log('##source schema file: ' + sourceSchemaFile);
  //sourceSchemaBuffer = readFile(config.schemaBaseDir.source + schemaSourceFile);
  sourceSchemaBuffer = readFile(sourceSchemaFile);
  sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  //targetSchemaFile = config.schemaBaseDir.target + schemaFile.target;
  //SoiSchemaGenerator.prototype.generateSoiObject(sourceSchemaObject);
  //var ssg = new SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer
  //  , schemaPropertyObjectTemplateBuffer, targetSchemaFile, config.schemaFilepathMappings);
  //var ssg = new SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer
  //  , schemaPropertyObjectTemplateBuffer, schemaFilename.target, config.schemaBaseDir.target, config.schemaFilepathMappings);
  var ssg = new SoiSchemaGenerator(schemaTemplateObjects, config.schemaBaseDir.target
    , config.schemaFilepathMappings, schemaFilename.target);
  //ssg.putSchemaTemplateObject(schemaRootTemplateObject);
  ssg.schemaTemplateObjects = schemaTemplateObjects;
  ssg.generateObjectSchema(sourceSchemaObject);
  //ssg.startGenerating(sourceSchemaObject);
});

/*
//config.schemaSourceFiles.forEach( function(schemaSourceFile) {
config.schemaFilenames.forEach( function(schemaFilename) {
  sourceSchemaFile = config.schemaBaseDir.source + schemaFilename.source;
  //console.log(config.schemaBaseDir.source + schemaSourceFile);
  console.log('##source schema file: ' + sourceSchemaFile);
  //sourceSchemaBuffer = readFile(config.schemaBaseDir.source + schemaSourceFile);
  sourceSchemaBuffer = readFile(sourceSchemaFile);
  sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  //targetSchemaFile = config.schemaBaseDir.target + schemaFile.target;
  //SoiSchemaGenerator.prototype.generateSoiObject(sourceSchemaObject);
  //var ssg = new SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer
  //  , schemaPropertyObjectTemplateBuffer, targetSchemaFile, config.schemaFilepathMappings);
  var ssg = new SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer
    , schemaPropertyObjectTemplateBuffer, schemaFilename.target, config.schemaBaseDir.target, config.schemaFilepathMappings);
  ssg.putSchemaTemplateObject(schemaRootTemplateObject);
  ssg.generateSoiSchema(sourceSchemaObject);
  //ssg.startGenerating(sourceSchemaObject);
});
*/
done();
/*
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
  SoiSchemaGenerator.prototype.writeSchemaFile(targetSchemaFile, schemaRootTemplateObject);
}
*/
function readFile(file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  console.log('##output file buffer string');
  console.log(fileBuffer.toString());
  return(fileBuffer);
}
/*
function writeSchemaFile(file, schemaObject) {
  var schemaBuffer = JSON.stringify(schemaObject);
  console.log('##output schema buffer string');
  console.log(schemaBuffer.toString());
  console.log('##write schema document file');
  //fs.writeFileSync(targetSchemaFile, targetSchemaFile);
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
*/

function getSchemaTemplateObjects() {
  var schemaTemplateObjects = [];
  
  config.schemaTemplates.forEach(function (schemaTemplate) {
    var schemaTemplateFileBuffer = readFile(schemaTemplate.file);
    var schemaTemplateObjectItem = {
      'templateId' : schemaTemplate.id,
      'templateObject' : JSON.parse(schemaTemplateFileBuffer)
    };
    //schemaTemplateObjectItem.templateId = schemaTemplateItem.id;
    
    //schemaTemplateObjectItem.templateObject = parse.schemaTemplateFileBuffer;
    schemaTemplateObjects.push(schemaTemplateObjectItem);
  });

  return(schemaTemplateObjects);
}

function initialize() {
  console.log('#Hello World');
  config = JSON.parse(readFile('./lib/config.json'));
  schemaTemplateObjects = getSchemaTemplateObjects();
  //var schemaRootTemplateBuffer = readFile(schemaRootTemplate);
  //var schemaRootTemplateBuffer = readFile(config.schemaTemplates.root);
  //var schemaRootTemplateBuffer = readFile(config.schemaTemplates.root);
  //schemaRootTemplateObject = JSON.parse(schemaRootTemplateBuffer);
  //schemaPropertyObjectTemplateBuffer = readFile(config.schemaTemplates.propertyObject);
  //schemaPropertyArrayTemplateBuffer = readFile(config.schemaTemplates.propertyArray);
  //var sourceSchemaBuffer = readFile(sourceSchemaFile);
  //var sourceSchemaBuffer = readFile(config.schemaBaseDir.source + config.schemaSourceFiles[0].source);
  //sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
}

function done() {
  console.log('#done');
}