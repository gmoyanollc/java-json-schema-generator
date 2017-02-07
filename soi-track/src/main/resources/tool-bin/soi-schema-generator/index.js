var fs = require('fs'),
  path = require('path'),
  SoiSchemaGenerator = require('./lib/soi-schema-generator.js');

//sourceSchemaDir = '../../../../../../tsoa-track/src/main/resources/tool-bin/x-to-y-n-back/mapping/';
//sourceSchemaFile = sourceSchemaDir + 'TSOA_Track-schema.json';
//targetSchemaDir = '../../iep-schema/mil/usmc/mcsc/mc2sa/tsoa/soi/';
//targetSchemaFile = targetSchemaDir + 'tsoa-track/2.0/tsoa-track.json';
//schemaRootTemplate = 'lib/schema-root-template.json';
//schemaPropertyObjectTemplate = 'lib/schema-property-object-template.json';
//schemaPropertyArrayTemplate = 'lib/schema-property-array-template.json';
//config = 'lib/config.json';

//var schemaRootTemplateObject;
var schemaRootTemplateBuffer;
var schemaPropertyObjectTemplateBuffer;
var schemaPropertyArrayTemplateBuffer;
//var sourceSchemaObject;
var config;

initialize();
//var sourceSchemaFilesBuffer = config.schemaFiles;
//var sourceSchemaFiles = JSON.parse(sourceSchemaFilesBuffer);
var sourceSchemaBuffer;
var sourceSchemaObject;
var targetSchemaBuffer;

config.schemaFiles.forEach( function(schemaFile) {
  console.log(config.schemaDir.source + schemaFile.source);
  sourceSchemaBuffer = readFile(config.schemaDir.source + schemaFile.source);
  sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  targetSchemaBuffer = config.schemaDir.target + schemaFile.target;
  //var targetSchemaId = getId(sourceSchemaObject);

  //var ssg = new SoiSchemaGenerator();
  //schemaRootTemplateObject.id = ssg.getId(sourceSchemaObject);
  /*
  schemaRootTemplateObject.id = getId(sourceSchemaObject);
  schemaRootTemplateObject.title = getTitle(sourceSchemaObject);
  schemaRootTemplateObject.type = getType(sourceSchemaObject);
  schemaRootTemplateObject.javaType = getJavaType(sourceSchemaObject);
  schemaRootTemplateObject.properties = getProperty(getDefinition());
  schemaRootTemplateObject.required = getRequired(getDefinition());
  */
  //targetSchemaBuffer = targetSchemaId;
  //targetSchemaBuffer = schemaRootTemplateObject.toString();
  generateSoiObject(sourceSchemaObject);
  //writeSchemaFile(targetSchemaBuffer);
  //writeSchemaFile(config.schemaDir.target + schemaFile.target, schemaRootTemplateObject);
});

done();

function generateSoiObject(sourceSchemaObject) {
  schemaRootTemplateObject = JSON.parse(schemaRootTemplateBuffer);
  var ssg = new SoiSchemaGenerator(schemaRootTemplateBuffer, schemaPropertyObjectTemplateBuffer, schemaPropertyArrayTemplateBuffer);
  schemaRootTemplateObject.id = ssg.getId(sourceSchemaObject);
  schemaRootTemplateObject.title = ssg.getTitle(sourceSchemaObject);
  schemaRootTemplateObject.type = ssg.getType(sourceSchemaObject);
  schemaRootTemplateObject.javaType = ssg.getJavaType(sourceSchemaObject);
  schemaRootTemplateObject.properties = ssg.getProperty(sourceSchemaObject, ssg.getDefinition(sourceSchemaObject));
  schemaRootTemplateObject.required = ssg.getRequired(sourceSchemaObject, ssg.getDefinition(sourceSchemaObject));
  //writeSchemaFile(config.schemaDir.target + schemaFile.target, ssg.schemaRootTemplateObject);
  writeSchemaFile(targetSchemaBuffer, schemaRootTemplateObject);
}
/*
function getId(source) {
  console.log('##getting id');
  var localPart = sourceSchemaObject.anyOf[0].elementName.localPart;
  var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
  var id = namespaceURI + localPart;
  console.log('##id: ' + id)
  return(id);
}

function getTitle(source) {
  console.log('##getting title');
  var title = sourceSchemaObject.anyOf[0].elementName.localPart;
  console.log('##title: ' + title)
  return(title);
}

function getType(source) {
  console.log('##getting type');
  var type = sourceSchemaObject.anyOf[0].type;
  console.log('##type: ' + type)
  return(type);
}

function getDescription(source) {
  console.log('##getting description');
  var description = 'sourceSchemaObject.anyOf[0].?';
  console.log('##description: ' + description)
  return(description);
}

function getVersion(source) {
  console.log('##getting version');
  var version = 'sourceSchemaObject.anyOf[0].?';
  console.log('##description: ' + version)
  return(version);
}

function getJavaType(source) {
  console.log('##getting javaType');
  var localPart = sourceSchemaObject.anyOf[0].elementName.localPart;
  var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
  var javaNamespaceURI = namespaceURI.replace(/[:\/\.-]/g, '_');
  var javaType = javaNamespaceURI + localPart;
  console.log('##javaType: ' + javaType)
  return(javaType);
}

function getDefinition() {
  console.log('##getting definition');

  for (var definitionKey in sourceSchemaObject.definitions) {
    //var property = sourceSchemaObject.allOf[0].elementName.localPart;
    //var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
    //var javaNamespaceURI = namespaceURI.replace(/:|\//g, '_');
    //var javaType = javaNamespaceURI + localPart;
    console.log('##definition: ' + definitionKey);
  }

  return(definitionKey);
}

function getProperty(definitionKey) {
  var properties = {};
  console.log('##getting property');

  for (var propertyKey in sourceSchemaObject.definitions[definitionKey]) {
    //var property = sourceSchemaObject.allOf[0].elementName.localPart;
    //var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
    //var javaNamespaceURI = namespaceURI.replace(/:|\//g, '_');
    //var javaType = javaNamespaceURI + localPart;
    console.log('##property: ' + propertyKey);
    if ( propertyKey == 'allOf')
    { 
      var propertyAllOfObjects = sourceSchemaObject.definitions[definitionKey][propertyKey][1];
      console.log('###getting property allOf objects') ;

      for (var propertyAllOfObjectKey in propertyAllOfObjects) {
        //var property = sourceSchemaObject.allOf[0].elementName.localPart;
        //var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
        //var javaNamespaceURI = namespaceURI.replace(/:|\//g, '_');
        //var javaType = javaNamespaceURI + localPart;
        console.log('###propertyAllOfObject: ' + propertyAllOfObjectKey);
        if ( propertyAllOfObjectKey == 'properties')
        { 
          var propertyAllOfObjectProperties = propertyAllOfObjects[propertyAllOfObjectKey];
          console.log('####getting property allOf object properties') ;

          for (var propertyAllOfObjectPropertyKey in propertyAllOfObjectProperties) {
            //var property = sourceSchemaObject.allOf[0].elementName.localPart;
            //var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
            //var javaNamespaceURI = namespaceURI.replace(/:|\//g, '_');
            //var javaType = javaNamespaceURI + localPart;
            console.log('####propertyAllOfObjectProperty: ' + propertyAllOfObjectPropertyKey);
            if ( propertyAllOfObjectPropertyKey != "otherAttributes" )
            {
              //Object.assign(properties, createPropertyObject(propertyAllOfObjectPropertyKey));
              //properties.push(createPropertyObject(propertyAllOfObjectPropertyKey));
              properties[propertyAllOfObjectPropertyKey] = createPropertyObject(propertyAllOfObjectProperties[propertyAllOfObjectPropertyKey]);
              //var propertyObject = JSON.parse(schemaPropertyObjectTemplateBuffer);
              //var propertyAllOfObjectPropertyObject = {[propertyAllOfObjectPropertyKey]: propertyObject};
              //console.log('####propertyAllOfObjectPropertyObject: ' + JSON.stringify(propertyAllOfObjectPropertyObject));
            }
          }

        };
      }

    };
  }

  function createPropertyObject (propertyObject) {
    console.log('#####creating property object: ' + propertyObject.title);
    var propertyObjectTemplate = JSON.parse(schemaPropertyObjectTemplateBuffer);
    propertyObjectTemplate.type = 'object';
    propertyObjectTemplate.$ref = propertyObject.title + '.json';
    //var propertyObject = { [propertyKey]: propertyObjectTemplate };
    //properties[propertyKey] = propertyObjectTemplate; 
    //return(propertyObject);
    return(propertyObjectTemplate);
  }

  return(properties);
}

function getRequired(definitionKey) {
  var requiredObject;
  console.log('##getting required');

  for (var requiredKey in sourceSchemaObject.definitions[definitionKey]) {
    console.log('##requiredKey: ' + requiredKey);

    if ( requiredKey == 'required')
    {
       requiredObject = sourceSchemaObject.definitions[definitionKey][requiredKey];
       console.log('###found required object: ' + requiredObject) ;
    }
  }

  return(requiredObject);
}
*/
/*function readschemaRootTemplate() {
  console.log('##read template schema document file');
  var schemaRootTemplateBuffer = fs.readFileSync(schemaRootTemplate);
  console.log('##output template schema buffer string');
  console.log(schemaRootTemplateBuffer.toString());
  return(schemaRootTemplateBuffer);
}*/

/*function readSourceSchemaFile() {
  console.log('##read source schema document file');
  var sourceSchemaBuffer = fs.readFileSync(sourceSchemaFile);
  console.log('##output source schema buffer string');
  console.log(sourceSchemaBuffer.toString());
  return(sourceSchemaBuffer);
}*/

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