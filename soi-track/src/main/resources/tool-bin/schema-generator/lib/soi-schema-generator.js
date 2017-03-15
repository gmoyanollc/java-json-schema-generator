var fs = require('fs')
  , path = require('path');
/*
function getSchemaTemplateObject(templateId) {
  console.log('##match schema template object: ' + templateId);

  for (var index = 0; index < this.schemaTemplateObjects.length; index++) {
    if ( this.schemaTemplateObjects[index].templateId === templateId )
      return(this.schemaTemplateObjects[index].templateObject);
  };

  throw 'schema id was not matched for a template object';
};
*/
function readFile (file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  console.log('##output file buffer string');
  console.log(fileBuffer.toString());
  return(fileBuffer);
}

//var SoiSchemaGenerator = function SoiSchemaGenerator(schemaTemplateObjects
//  , targetSchemaBaseDir, schemaFilepathMappings, targetSchemaFilename) {
//var SoiSchemaGenerator = function SoiSchemaGenerator(schemaTemplateObjects
//  , targetSchemaBaseDir, schemaFilepathMappings) {
var SoiSchemaGenerator = function () {
  this.sourceSchemaBaseDir;
  this.sourceSchemaNamespace;
  this.sourceSchemaBaseDirRelativeDepth;
  //this.schemaTemplateObjects = schemaTemplateObjects;
  this.schemaTemplateObjects;
  //this.targetSchemaBaseDir = targetSchemaBaseDir;
  this.targetSchemaBaseDir;
  //this.schemaFilepathMappings = schemaFilepathMappings;
  this.schemaFilepathMappings;
  //this.targetSchemaFilename = targetSchemaFilename;
  this.targetSchemaFileDestination;
}
/*
SoiSchemaGenerator.prototype.readFile = function (file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  console.log('##output file buffer string');
  console.log(fileBuffer.toString());
  return(fileBuffer);
}

SoiSchemaGenerator.prototype.setSchemaTemplateObjects = function (schemaTemplates) {
  var schemaTemplateObjects = [];
  
  schemaTemplates.forEach(function (schemaTemplate) {
    var schemaTemplateFileBuffer = this.readFile(schemaTemplate.file);
    var schemaTemplateObjectItem = {
      'templateId' : schemaTemplate.id,
      'templateObject' : JSON.parse(schemaTemplateFileBuffer)
    };
    schemaTemplateObjects.push(schemaTemplateObjectItem);
  });

  this.schemaTemplateObjects = schemaTemplateObjects;
}
*/
SoiSchemaGenerator.prototype.setSourceSchemaNamespace = function (sourceSchemaObject) {
  //return(sourceSchemaObject.id.substring(0, sourceSchemaObject.id.indexOf('#')));
  this.sourceSchemaNamespace = sourceSchemaObject.id.substring(0, sourceSchemaObject.id.indexOf('#'));
};

SoiSchemaGenerator.prototype.setSourceSchemaBaseDirRelativeDepth = function () {
  console.log("###get source schema filepath from namespace match: " + this.sourceSchemaNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if ( this.schemaFilepathMappings[index].namespace === this.sourceSchemaNamespace ) {
      var sourceSchemaFilepath = this.schemaFilepathMappings[index].targetSchemaFilepath
    }
  }

  if ( typeof sourceSchemaFilepath !== 'undefined' ) {
    console.log('setting Source Schema Base Dir Relative Depth');
    this.sourceSchemaBaseDirRelativeDepth = '';
    //var sourceSchemaFilepathArray = sourceSchemaFilepath.split('/');
    var sourceSchemaBaseDirRelativeDepthCount = sourceSchemaFilepath.split('/').length;

    for (var index = 1; index < sourceSchemaBaseDirRelativeDepthCount; index++){
      this.sourceSchemaBaseDirRelativeDepth = this.sourceSchemaBaseDirRelativeDepth + '../'
    }
    //sourceSchemaFilepathArray.forEach(function(element) {element = ''});

    console.log('Source Schema Base Dir Relative Depth: ' + this.sourceSchemaBaseDirRelativeDepth);
  } else {
    throw('#ERROR: source schema namespace was not matched for filepath.');
  }
};

SoiSchemaGenerator.prototype.getSchemaTemplateObject = function (templateId) {
  console.log('##match schema template object: ' + templateId);

  for (var index = 0; index < this.schemaTemplateObjects.length; index++) {
    if ( this.schemaTemplateObjects[index].templateId === templateId )
      return(this.schemaTemplateObjects[index].templateObject);
  };

  throw 'schema id was not matched for a template object';
}
/*
//SoiSchemaGenerator.prototype.getSchemaFileDestination = function (anyOfAllOfPropertyObject) {
SoiSchemaGenerator.prototype.getSchemaFileDestination = function (PropertyObjectNameIdentifier) {
  //console.log("###get schema file destination from object namespace match: " 
  //  + anyOfAllOfPropertyObject.elementName.namespaceURI);
  console.log("###get schema file destination from object namespace match: " 
    + PropertyObjectNameIdentifier.namespaceURI);
//  if ( this.sourceSchemaNamespace === anyOfAllOfPropertyObject.elementName.namespaceURI ) {
//    return(anyOfAllOfPropertyObject.elementName.localPart + '.json');
//  } else {

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    //if ( this.schemaFilepathMappings[index].namespace === anyOfAllOfPropertyObject.elementName.namespaceURI )
    //  return(this.schemaFilepathMappings[index].targetSchemaFilepath + anyOfAllOfPropertyObject.elementName.localPart + '.json');
    if ( this.schemaFilepathMappings[index].namespace === PropertyObjectNameIdentifier.namespaceURI )
      return(this.schemaFilepathMappings[index].targetSchemaFilepath + PropertyObjectNameIdentifier.localPart + '.json');
  };

  throw 'object namespace was not matched for schema file destination';
  //};
}
*/

SoiSchemaGenerator.prototype.getRemoteDefinitionNamespace = function (anyOfObject) {
  var anyOfObjectProperty$ref;
  if ( typeof anyOfObject.properties.value.$ref != "undefined" )
    anyOfObjectProperty$ref = anyOfObject.properties.value.$ref;
  else
    if ( typeof anyOfObject.properties.value.items.$ref != "undefined" )
      anyOfObjectProperty$ref = anyOfObject.properties.value.items.$ref;
    else
      throw "trouble locating anyOf object definition reference";
  console.log('##get namespace from remote anyOf object property definition reference: ' + anyOfObjectProperty$ref);
  var remoteDefinitionNamespace = anyOfObjectProperty$ref.substring(0, anyOfObjectProperty$ref.indexOf('#'));
  console.log("remoteDefinitionNamespace: " + remoteDefinitionNamespace);
  return(remoteDefinitionNamespace);
}

SoiSchemaGenerator.prototype.getSchemaFileDestination = function (PropertyContainer, addRelativeDepth) {
  if ( this.addRelativeDepth != 'undefined') 
    if ( this.addRelativeDepth != true ) this.addRelativeDepth = false
  else var addRelativeDepth = false;
  var PropertyObjectNameIdentifier;
  if ( typeof PropertyContainer.typeName != "undefined" )
    PropertyObjectNameIdentifier = PropertyContainer.typeName
  else if ( typeof PropertyContainer.elementName != "undefined" )
    PropertyObjectNameIdentifier = PropertyContainer.elementName
    else if ( typeof PropertyContainer.attributeName != "undefined" )
      PropertyObjectNameIdentifier = PropertyContainer.attributeName
      else throw 'can not determine PropertyObjectNameIdentifier';
  console.log("###get schema file destination from object namespace match: " 
    + PropertyObjectNameIdentifier.namespaceURI);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if ( this.schemaFilepathMappings[index].namespace === PropertyObjectNameIdentifier.namespaceURI ){
      if ( addRelativeDepth )
        return(this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + PropertyObjectNameIdentifier.localPart + '.json')
      else
        return(this.schemaFilepathMappings[index].targetSchemaFilepath + PropertyObjectNameIdentifier.localPart + '.json');
    };
  };

  throw 'object namespace was not matched for schema file destination';
}

SoiSchemaGenerator.prototype.getRemoteDefinitionFileLocation = function (anyOfPropertyObject) {
  var anyOfObjectPropertyDefinitionReferenceNamespace = this.getRemoteDefinitionNamespace(anyOfPropertyObject);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if ( this.schemaFilepathMappings[index].namespace === anyOfObjectPropertyDefinitionReferenceNamespace ) {
      remoteDefinitionObjectName = this.getDefinitionObjectName(anyOfPropertyObject);
      return(this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + remoteDefinitionObjectName + '.json');
    }
  };
/*
  function getRemoteDefinitionNamespace(anyOfObject) {
    var anyOfObjectProperty$ref;
    if ( typeof anyOfObject.properties.value.$ref != "undefined" )
      anyOfObjectProperty$ref = anyOfObject.properties.value.$ref;
    else
      if ( typeof anyOfObject.properties.value.items.$ref != "undefined" )
        anyOfObjectProperty$ref = anyOfObject.properties.value.items.$ref;
      else
        throw "trouble locating anyOf object definition reference";
    //console.log('##get namespace from remote anyOf object property definition reference: ' + anyOfObject.properties.value.$ref);
    console.log('##get namespace from remote anyOf object property definition reference: ' + anyOfObjectProperty$ref);
    //var anyOfObjectPropertyDefinitionReference = anyOfObject.properties.value.$ref;
    //var remoteDefinitionNamespace = anyOfObjectPropertyDefinitionReference.substring(0, anyOfObjectPropertyDefinitionReference.indexOf('#'));
    var remoteDefinitionNamespace = anyOfObjectProperty$ref.substring(0, anyOfObjectProperty$ref.indexOf('#'));
    console.log("remoteDefinitionNamespace: " + remoteDefinitionNamespace);
    return(remoteDefinitionNamespace);
  }
*/
  throw 'schema namespace was not matched for a filepath';
}

SoiSchemaGenerator.prototype.getRemoteSchemaSourceFile = function (anyOfPropertyObject) {
  var anyOfObjectPropertyDefinitionReferenceNamespace = this.getRemoteDefinitionNamespace(anyOfPropertyObject);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if ( this.schemaFilepathMappings[index].namespace === anyOfObjectPropertyDefinitionReferenceNamespace )
      return(this.schemaFilepathMappings[index].sourceSchemaFile);
  };

  throw 'schema namespace was not matched for a filepath';
}

SoiSchemaGenerator.prototype.writeSchemaFile = function (schemaObject) {
  var schemaBuffer = JSON.stringify(schemaObject, null, '  ');
  console.log('##output schema buffer string');
  console.log(schemaBuffer.toString());
  console.log('##write schema document file');
  if ( dirPathExists(this.targetSchemaBaseDir + this.targetSchemaFileDestination) )
    fs.writeFileSync(this.targetSchemaBaseDir + this.targetSchemaFileDestination, schemaBuffer);
    else throw("ERROR: dirPath does not exist: " + this.targetSchemaBaseDir + this.targetSchemaFileDestination);

  function dirPathExists(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true;
    }
    dirPathExists(dirName);
    fs.mkdirSync(dirName);
  };
}

SoiSchemaGenerator.prototype.generateObjectSchema = function (sourceSchemaObject) {
  var schemaObject;
  //var schemaObjectNamespace;
  if ( typeof sourceSchemaObject.anyOf != "undefined" ) {

    sourceSchemaObject.anyOf.forEach(function (anyOfObject) {
      //schemaObjectNamespace = anyOfObject.elementName.namespaceURI;
      switch ( this.getType(anyOfObject) ) {
        case 'object' :
          var schemaObject = this.getSchemaTemplateObject('object-template');
          schemaObject.id = this.getId(anyOfObject.elementName);
          //schemaObject.title = this.getTitle(anyOfObject);
          schemaObject.title = this.getTitle(anyOfObject.elementName);
          schemaObject.type = this.getType(anyOfObject);
          schemaObject.javaType = this.getJavaType(anyOfObject.elementName);
          var definitionObjectName = this.getDefinitionObjectName(anyOfObject);
          if ( typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined" )
            //schemaObject.properties 
            //  = this.getProperty(sourceSchemaObject.definitions[this.getDefinitionObjectName(anyOfObject)]
            //    , schemaObjectNamespace);
            schemaObject.properties 
              = this.getProperties(sourceSchemaObject.definitions[definitionObjectName])
          else {
            schemaObject.properties = this.getRemoteDefinitionReference(anyOfObject);
            this.generateRemoteObjectSchema(anyOfObject, definitionObjectName);
          };
          break;
        default:
          throw('ERROR: not sure how to generate an object for this anyOf object type: ' + this.getType(anyOfObject));
      };
      //this.targetSchemaFileDestination = this.getSchemaFileDestination(anyOfObject.elementName);
      this.targetSchemaFileDestination = this.getSchemaFileDestination(anyOfObject);
      this.writeSchemaFile(schemaObject);
    }, this);

  };
/*
  if ( typeof sourceSchemaObject.definitions != "undefined" ) {

    for (var definition in sourceSchemaObject.definitions) {
      if ( typeof sourceSchemaObject.definitions[definition].typeName != 'undefined' )
        schemaObjectNamespace = sourceSchemaObject.definitions[definition].typeName.namespaceURI;
      else
        schemaObjectNamespace = sourceSchemaObject.id;
      switch ( this.getType(sourceSchemaObject.definitions[definition]) ) {
        case 'object' :
          schemaObject = this.getSchemaTemplateObject('object-template');
          if ( typeof sourceSchemaObject.definitions[definition].typeName != 'undefined' )
            schemaObject.id = this.getId(sourceSchemaObject.definitions[definition].typeName)
          else schemaObject.id = sourceSchemaObject.id + this.getTitle(sourceSchemaObject.definitions[definition]);
          schemaObject.title = this.getTitle(sourceSchemaObject.definitions[definition]);
          schemaObject.type = this.getType(sourceSchemaObject.definitions[definition]);
          if ( typeof sourceSchemaObject.definitions[definition].typeName != 'undefined' )
            schemaObject.javaType = this.getJavaType(sourceSchemaObject.definitions[definition].typeName)
          else schemaObject.javaType = this.getJavaType(
              {
                  namespaceURI : sourceSchemaObject.id, 
                  localPart : sourceSchemaObject.definitions[definition].title
              });
          //var definitionObjectName = this.getDefinitionObjectName(definition);
          //if ( typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined" )
            schemaObject.properties 
              = this.getProperty(sourceSchemaObject.definitions[definition], schemaObjectNamespace);
          //else
          //schemaObject.properties = this.getRemoteDefinitionReference(definition);
            
          break;
        default:
          console.log('not sure how to generate an object for this definition type: ' + this.getType(sourceSchemaObject.definitions[definition]));
      }
      if ( typeof sourceSchemaObject.definitions[definition].typeName != 'undefined' ) {
        this.targetSchemaFileDestination = this.getSchemaFileDestination(sourceSchemaObject.definitions[definition].typeName);
        this.writeSchemaFile(schemaObject);
      } else {
        console.log("Can not write object schema: " + schemaObject);
      };
    };

  }*/
}
/*
SoiSchemaGenerator.prototype.generateSoiSchema = function (sourceSchemaObject) {
  this.schemaRootTemplateObject.id = this.getId(sourceSchemaObject);
  this.schemaRootTemplateObject.title = this.getTitle(sourceSchemaObject);
  this.schemaRootTemplateObject.type = this.getType(sourceSchemaObject);
  this.schemaRootTemplateObject.javaType = this.getJavaType(sourceSchemaObject);
  this.schemaRootTemplateObject.properties = this.getProperty(sourceSchemaObject);
  this.schemaRootTemplateObject.required = this.getRequired(sourceSchemaObject);
  this.writeSchemaFile();
}
*/

SoiSchemaGenerator.prototype.generateRemoteObjectSchema = function (anyOfObject, definitionObjectName) {
  console.log('###instantiating Remote Object Schema generation');
  //sourceSchemaFile = config.schemaBaseDir.source + config.schemaSourceFilenames[index];
  //var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemoteSchemaSourceFile(anyOfPropertyObject);
  var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemoteSchemaSourceFile(anyOfObject);
  console.log('##remote object source schema file: ' + sourceSchemaFile);
  var sourceSchemaBuffer = readFile(sourceSchemaFile);
  var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  var ssg = new SoiSchemaGenerator();
  ssg.schemaTemplateObjects = this.schemaTemplateObjects;
  ssg.targetSchemaBaseDir = this.targetSchemaBaseDir;
  ssg.schemaFilepathMappings = this.schemaFilepathMappings;
  ssg.sourceSchemaBaseDir = this.sourceSchemaBaseDir;
  ssg.setSourceSchemaNamespace(sourceSchemaObject);
  ssg.setSourceSchemaBaseDirRelativeDepth();
  ssg.generateObjectDefinitionSchema(sourceSchemaObject.definitions[definitionObjectName]);
}
/*g*/
//SoiSchemaGenerator.prototype.generateObjectSchemaType = function (sourceSchemaObject) {
SoiSchemaGenerator.prototype.generateObjectDefinitionSchema = function (definitionObject) {
  //if ( typeof sourceSchemaObject.definitions != "undefined" ) {
  if ( typeof definitionObject != "undefined" ) {

      //definitionObject.allOf.forEach(function (anyOfObject) {
        //schemaObjectNamespace = anyOfObject.elementName.namespaceURI;
        switch ( this.getType(definitionObject) ) {
          case 'object' :
            var schemaObject = this.getSchemaTemplateObject('object-template');
            schemaObject.id = this.getId(definitionObject.typeName);
            //schemaObject.title = this.getTitle(anyOfObject);
            schemaObject.title = this.getTitle(definitionObject.typeName);
            schemaObject.type = this.getType(definitionObject);
            schemaObject.javaType = this.getJavaType(definitionObject.typeName);
            //var definitionObjectName = this.getDefinitionObjectName(definitionObject);
            //if ( typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined" )
              schemaObject.properties = this.getProperties(definitionObject)
            //else {
            //  schemaObject.properties = this.getRemoteDefinitionReference(anyOfObject);
            //  this.generateRemoteObjectSchema(anyOfObject, definitionObjectName);
            //};
            break;
          default:
            throw('ERROR: not sure how to generate an object for this allOf object type: ' + this.getType(definitionObject));
        };
        this.targetSchemaFileDestination = this.getSchemaFileDestination(definitionObject);
        this.writeSchemaFile(schemaObject);
      //}, this);

  } else {
    throw('definition object is undefined: ' + definitionObjectName);
  };
/*
    for (var definition in sourceSchemaObject.definitions) {
      if ( typeof sourceSchemaObject.definitions[definition].typeName != 'undefined' )
        var schemaObjectNamespace = sourceSchemaObject.definitions[definition].typeName.namespaceURI;
      else var schemaObjectNamespace = sourceSchemaObject.id;
      if ( typeof sourceSchemaObject.definitions[definition].allOf != 'undefined' )
        var propertyDefinitionObject = sourceSchemaObject.definitions[definition].allOf[1]
      else var propertyDefinitionObject = sourceSchemaObject.definitions[definition];
      //switch ( this.getType(sourceSchemaObject.definitions[definition].allOf[1]) ) {
      switch ( this.getType(propertyDefinitionObject) ) {
        case 'object' :
          schemaObject = this.getSchemaTemplateObject('object-template');
          if ( typeof sourceSchemaObject.definitions[definition].typeName != 'undefined' )
            schemaObject.id = this.getId(sourceSchemaObject.definitions[definition].typeName)
          else schemaObject.id = sourceSchemaObject.id + this.getTitle(sourceSchemaObject.definitions[definition]);
          //schemaObject.title = this.getTitle(sourceSchemaObject.definitions[definition].allOf[1]);
          schemaObject.title = this.getTitle(propertyDefinitionObject);
          //schemaObject.type = this.getType(sourceSchemaObject.definitions[definition].allOf[1]);
          schemaObject.type = this.getType(propertyDefinitionObject);
          if ( typeof sourceSchemaObject.definitions[definition].typeName != 'undefined' )
            schemaObject.javaType = this.getJavaType(sourceSchemaObject.definitions[definition].typeName)
          else schemaObject.javaType = this.getJavaType(
              {
                  namespaceURI : sourceSchemaObject.id, 
                  localPart : sourceSchemaObject.definitions[definition].title
              });
          //var definitionObjectName = this.getDefinitionObjectName(definition);
          //if ( typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined" )
            schemaObject.properties 
              = this.getProperty(propertyDefinitionObject, schemaObjectNamespace);
              //= this.getProperty(sourceSchemaObject.definitions[definition], schemaObjectNamespace);
          //else
          //schemaObject.properties = this.getRemoteDefinitionReference(definition);
            
          break;
        default:
          console.log('not sure how to generate an object for this definition type: ' + this.getType(sourceSchemaObject.definitions[definition]));
      }
      if ( typeof sourceSchemaObject.definitions[definition].typeName != 'undefined' ) {
        //this.targetSchemaFileDestination = this.getSchemaFileDestination(sourceSchemaObject.definitions[definition].typeName);
        this.targetSchemaFileDestination = this.getSchemaFileDestination(sourceSchemaObject.definitions[definition]);
        this.writeSchemaFile(schemaObject);
      } else {
        console.log("Can not write object schema: " + schemaObject);
      };
    };
*/
}

//SoiSchemaGenerator.prototype.getId = function(anyOfObject) {
SoiSchemaGenerator.prototype.getId = function(propertyObjectNameIdentifier) {
  //console.log('##get id from anyOf elementName');
  console.log('##get id from Property Object Name Identifier');
  //console.log('##id: ' + anyOfObject.elementName.namespaceURI + anyOfObject.elementName.localPart);
  var id = propertyObjectNameIdentifier.namespaceURI + '#' + propertyObjectNameIdentifier.localPart;
  console.log('##id: ' + id);
  //return(anyOfObject.elementName.namespaceURI + anyOfObject.elementName.localPart);
  return(id);
}

//SoiSchemaGenerator.prototype.getTitle = function(anyOfObject) {
SoiSchemaGenerator.prototype.getTitle = function(propertyObjectNameIdentifier) {
  //console.log('##get title from anyOf elementName');
  //console.log('##get title from property Object');
  console.log('##get title from Property Object Name Identifier');
  var title = propertyObjectNameIdentifier.localPart;
  //console.log('##title: ' + anyOfObject.elementName.localPart);
  //console.log('##title: ' + propertyObject.title);
  console.log('##title: ' + title);
  //return(anyOfObject.elementName.localPart);
  //return(propertyObject.title);
  return(title);
}
/*
SoiSchemaGenerator.prototype.getType = function(anyOfObject) {
  console.log('##get type for: ' + anyOfObject.title);
  console.log('##type: ' + anyOfObject.type);
  return(anyOfObject.type);
}
*/
SoiSchemaGenerator.prototype.getType = function(propertyObject) {
  var propertyObjectType;
  //console.log('##get type for: ' + propertyObject.elementName.localPart);
  if ( typeof propertyObject.elementName != 'undefined' ) {
    console.log('##get type for: ' + this.getId(propertyObject.elementName));
    propertyObjectType = propertyObject.type;
  } else {
    if ( typeof propertyObject.typeName != 'undefined' ) {
      console.log('##get type for: ' + this.getId(propertyObject.typeName));
      if ( typeof propertyObject.allOf != 'undefined' ) 
        propertyObjectType = propertyObject.allOf[1].type;
      else
        throw("ERROR: having trouble getting propertyObject type. ");
    }
  }
  console.log('##type: ' + propertyObjectType);
  return(propertyObjectType);
}
SoiSchemaGenerator.prototype.getDescription = function(propertyObject) {
  console.log('##get description from ?xsd short description' );
  var description = '?xsd short description';
  console.log('##description: ' + description)
  return(description);
}

SoiSchemaGenerator.prototype.getVersion = function(propertyObject) {
  console.log('##keeping version from template');
}

SoiSchemaGenerator.prototype.getJavaType = function(propertyObjectNameIdentifier) {
  console.log('##get javaType from Property Object Name Identifier');
  //var javaNamespaceURI = propertyObjectNameIdentifier.namespaceURI.replace(/[:\/\.-]/g, '_');
  var javaType = propertyObjectNameIdentifier.namespaceURI.replace(/[:\/\.-]/g, '_') + propertyObjectNameIdentifier.localPart;
  //console.log('##javaType: ' + javaNamespaceURI + propertyObjectNameIdentifier.localPart);
  console.log('##javaType: ' + javaType);
  //return(javaNamespaceURI + propertyObjectNameIdentifier.localPart);
  return(javaType);
}

SoiSchemaGenerator.prototype.getDefinitionObjectName = function(anyOfObject) {
  var anyOfObjectProperty$ref;
  if ( typeof anyOfObject.properties.value.$ref != "undefined" )
    anyOfObjectProperty$ref = anyOfObject.properties.value.$ref;
  else
    if ( typeof anyOfObject.properties.value.items.$ref != "undefined" )
      anyOfObjectProperty$ref = anyOfObject.properties.value.items.$ref;
    else
      throw "trouble locating anyOf object definition reference";
  //console.log('##get definition from anyOf object reference: ' + anyOfObject.properties.value.$ref);
  console.log('##get definition from anyOf object reference: ' + anyOfObjectProperty$ref);
  //var anyOfObjectDefinitionReference = anyOfObject.properties.value.$ref;
  //return(anyOfObjectDefinitionReference.substring(anyOfObjectDefinitionReference.lastIndexOf('/') + 1));
  return(anyOfObjectProperty$ref.substring(anyOfObjectProperty$ref.lastIndexOf('/') + 1));
}

/*SoiSchemaGenerator.prototype.getProperty = function(definitionObject, schemaObjectNamespace) {
  var properties = {};
  //console.log('##get properties for definition: ' + definitionObject.typeName.localPart);
  console.log('##get properties for definition: ' + definitionObject.allOf[1].title);
  if ( typeof definitionObject.allOf != "undefined" ) {
    properties = this.setSchemaPropertyTemplate(definitionObject.allOf[1].properties, schemaObjectNamespace);
    
    for (var definitionObjectAllOfObjectProperty in definitionObject.allOf[1].properties) {
      console.log('####definitionObjectAllOfObjectProperty: ' + definitionObjectAllOfObjectProperty);
      if ( definitionObjectAllOfObjectProperty != "otherAttributes" ) {
        console.log('####Is definitionObjectAllOfObjectPropertyAllOfType defined?');
        if ( typeof definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty].allOf[0].type != "undefined") {
          console.log('#####definitionObjectAllOfObjectPropertyAllOfType: ' 
            + definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty].allOf[0].type);
          schemaPropertyArrayTemplate = this.getSchemaTemplateObject('property-array-template');
          schemaPropertyArrayTemplate.items.$ref 
            = this.getSchemaFileDestination(definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty]);
          properties[definitionObjectAllOfObjectProperty] = schemaPropertyArrayTemplate;
        } else {
          if ( typeof definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty].elementName != "undefined" ) {
            var propertyObjectTemplate = this.getSchemaTemplateObject('property-object-template');
            propertyObjectTemplate.type = 'object';
            propertyObjectTemplate.$ref 
              = this.getSchemaFileDestination(definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty].elementName);
            properties[definitionObjectAllOfObjectProperty] = propertyObjectTemplate;
          } else {
            if ( typeof definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty].attributeName != "undefined" )
              properties[definitionObjectAllOfObjectProperty] = { 'type' : 'string' };
          };
        };

      };
    }

  } else {
      properties = this.setSchemaPropertyTemplate(definitionObject.properties, schemaObjectNamespace);
  };

  return(properties); 
}*/

//SoiSchemaGenerator.prototype.getProperty = function(propertyContainer, schemaObjectNamespace) {
SoiSchemaGenerator.prototype.getProperties = function(definitionObject) {
  var properties = {};
  var propertyTemplate;
  var definitionPropertyContainer = getDefinitionPropertyContainer(definitionObject);
  //console.log('##get properties for definition: ' + definitionObject.typeName.localPart);
  console.log('##get properties for definitionPropertyContainer: ' + definitionPropertyContainer.title);
  //if ( typeof definitionObject.allOf != "undefined" ) {
    //properties = this.setSchemaPropertyTemplate(propertyContainer.properties, schemaObjectNamespace);
    //properties = this.setSchemaPropertyTemplate(propertyContainer.properties);
  var propertyTemplateType;

  for (var definitionObjectProperty in definitionPropertyContainer.properties) {
    console.log('####definitionObjectProperty: ' + definitionObjectProperty);
    propertyTemplateType = getPropertyTemplateType(definitionPropertyContainer.properties[definitionObjectProperty]);
    switch (propertyTemplateType) {
      case 'array':
        propertyTemplate = this.setPropertyArrayTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
        //properties = {[propertyTemplate.title]: propertyTemplate};
        //properties.test = test;
        //properties[propertyTemplate.title] = propertyTemplate;
        properties[definitionObjectProperty] = propertyTemplate;
        break;
      case 'object':
        propertyTemplate = this.setPropertyObjectTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
        properties[definitionObjectProperty] = propertyTemplate;
        break;
      case 'primitive':
        propertyTemplate = this.setPropertyPrimitiveTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
        properties[definitionObjectProperty] = propertyTemplate;
        break;
      case 'not applicable':
        break;
      default:
        throw('##### ERROR: PropertyTemplateType for ' + [definitionObjectProperty] + ' was not handled.')
    }
  }
/*    
    for (var propertyContainerProperty in propertyContainer.properties) {
      console.log('####propertyContainerProperty: ' + propertyContainerProperty);
      if ( propertyContainerProperty != "otherAttributes" && propertyContainerProperty != "value" ) {
        console.log('####Is propertyContainerPropertyAllOfType defined?');
        if ( typeof propertyContainer.properties[propertyContainerProperty].allOf[0].type != "undefined") {
          console.log('#####propertyContainerPropertyAllOfType: ' 
            + propertyContainer.properties[propertyContainerProperty].allOf[0].type);
          schemaPropertyArrayTemplate = this.getSchemaTemplateObject('property-array-template');
          *//*
          if ( typeof propertyContainer.properties[propertyContainerProperty].elementName != "undefined" )
            schemaPropertyArrayTemplate.items.$ref 
              = this.getSchemaFileDestination(propertyContainer.properties[propertyContainerProperty].elementName)
          else if ( typeof propertyContainer.properties[propertyContainerProperty].attributeName != "undefined" )
            schemaPropertyArrayTemplate.items.$ref 
                = this.getSchemaFileDestination(propertyContainer.properties[propertyContainerProperty].attributeName)
          *//*
          schemaPropertyArrayTemplate.items.$ref 
              = this.getSchemaFileDestination(propertyContainer.properties[propertyContainerProperty]);
          properties[propertyContainerProperty] = schemaPropertyArrayTemplate;
        } else {
          //if ( typeof propertyContainer.properties[propertyContainerProperty].elementName != "undefined" ) {
            var propertyObjectTemplate = this.getSchemaTemplateObject('property-object-template');
            propertyObjectTemplate.type = 'object';
            propertyObjectTemplate.$ref 
              = this.getSchemaFileDestination(propertyContainer.properties[propertyContainerProperty]);
            properties[propertyContainerProperty] = propertyObjectTemplate;
          //} else {
            //if ( typeof propertyContainer.properties[propertyContainerProperty].attributeName != "undefined" )
            //  properties[propertyContainerProperty] = { 'type' : 'string' };
          //};
        };

      };
    }
*/
  //} else {
  //    properties = this.setSchemaPropertyTemplate(definitionObject.properties, schemaObjectNamespace);
  //};

  return(properties); 
  
  function getDefinitionPropertyContainer(definitionObject) {
    console.log('##get definitionPropertyContainer');
    var definitionPropertyContainer;
    if ( typeof definitionObject.allOf != "undefined" ) {
      definitionPropertyContainer = definitionObject.allOf[1]
    } else { definitionPropertyContainer = definitionObject};
  return(definitionPropertyContainer);    
  }

  function getPropertyTemplateType(definitionObjectProperty){
    console.log('####getting PropertyTemplateType for: ' + definitionObjectProperty.title);
    if ( definitionObjectProperty.title != "otherAttributes" ) {
      console.log('####Is definitionObjectProperty type defined?');
      if ( typeof definitionObjectProperty.allOf[0].type != "undefined") {
        console.log('#####definitionObjectPropertyAllOfType: ' + definitionObjectProperty.allOf[0].type);
        if (definitionObjectProperty.allOf[0].type === 'array') return('array');
      } else {
        if ( typeof definitionObjectProperty.elementName != "undefined" ) {
          return('object')
        } else {
          if ( typeof definitionObjectProperty.attributeName != "undefined" ) return('primitive')
        };
      };
    } else {
      return('not applicable');
    }
  }

}

//SoiSchemaGenerator.prototype.setSchemaPropertyTemplate = function (definitionObjectProperties, schemaObjectNamespace) {
/*  
SoiSchemaGenerator.prototype.setSchemaPropertyTemplate = function (definitionProperty) {

  for (var definitionObjectProperty in definitionObjectProperties) {
    console.log('####definitionObjectProperty: ' + definitionObjectProperty);
    //if ( typeof definitionObjectProperties[definitionObjectProperty].elementName != "undefined" ) {
      //if ( definitionObjectProperty != "otherAttributes" && definitionObjectProperty != "value" ) {
      if ( definitionObjectProperty != "otherAttributes" ) {
        console.log('####Is definitionObjectProperty type defined?');
        if ( typeof definitionObjectProperties[definitionObjectProperty].allOf[0].type != "undefined") {
          console.log('#####definitionObjectPropertyAllOfType: ' 
            + definitionObjectProperties[definitionObjectProperty].allOf[0].type);
          if (definitionObjectProperties[definitionObjectProperty].allOf[0].type === 'array') {
            return(this.setPropertyArrayTemplate(definitionObjectProperties[definitionObjectProperty]));
          } else {
            throw('##### WARNING: type for ' + [definitionObjectProperty] + ' was not handled.')
          };
*/
          //schemaPropertyArrayTemplate = this.getSchemaTemplateObject('property-array-template');
          // only elements are schema objects
          /*
          if ( typeof definitionObjectProperties[definitionObjectProperty].elementName != "undefined" ) {
            if ( schemaObjectNamespace === this.sourceSchemaNamespace ) {
              schemaPropertyArrayTemplate.items.$ref = definitionObjectProperties[definitionObjectProperty].elementName.localPart + '.json'
            } else {
              schemaPropertyArrayTemplate.items.$ref 
                = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty].elementName);
            };
          };*/
          //if ( schemaObjectNamespace === this.sourceSchemaNamespace ) {
          /*if ( typeof definitionObjectProperties[definitionObjectProperty].elementName != 'undefined') {
            var definitionObjectNamespace = definitionObjectProperties[definitionObjectProperty].elementName.namespaceURI;
            if ( definitionObjectNamespace === this.sourceSchemaNamespace ) {
              schemaPropertyArrayTemplate.items.$ref = definitionObjectProperties[definitionObjectProperty].elementName.localPart + '.json'
            } else {
              schemaPropertyArrayTemplate.items.$ref 
                = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty]);
            };
            return({[definitionObjectProperty] : [schemaPropertyArrayTemplate]});
          } else {
            if ( typeof definitionObjectProperties[definitionObjectProperty].attributeName != "undefined" ) {
              return({[definitionObjectProperty] : { 'type' : 'string' }});
            } else {
              console.log('##### WARNING: ' + [definitionObjectProperty] + ' is not an element nor an attribute.');
            }
          };*/
          /*
        } else {
          if ( typeof definitionObjectProperties[definitionObjectProperty].elementName != "undefined" ) {
            var schemaPropertyObjectTemplate = this.getSchemaTemplateObject('property-object-template');
            //schemaPropertyObjectTemplate.type = 'object';
            if ( schemaObjectNamespace === this.sourceSchemaNamespace ) {
              schemaPropertyObjectTemplate.$ref = definitionObjectProperties[definitionObjectProperty].elementName.localPart + '.json'
            } else {
              //schemaPropertyObjectTemplate.$ref 
              //  = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty].elementName);
              schemaPropertyObjectTemplate.$ref 
                = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty]);
            };
            return({[definitionObjectProperty] : [schemaPropertyObjectTemplate]});
          } else {
            if ( typeof definitionObjectProperties[definitionObjectProperty].attributeName != "undefined" )
              return({[definitionObjectProperty] : { 'type' : 'string' }});
          };
        };
      };

    //} else {
    //  return({[definitionObjectProperty] : { 'type' : 'string' }});
    //};
  };



}
*/
SoiSchemaGenerator.prototype.setPropertyArrayTemplate = function (definitionObjectProperty) {

  var schemaPropertyArrayTemplate = this.getSchemaTemplateObject('property-array-template');
  // only elements are schema objects
  /*
  if ( typeof definitionObjectProperties[definitionObjectProperty].elementName != "undefined" ) {
    if ( schemaObjectNamespace === this.sourceSchemaNamespace ) {
      schemaPropertyArrayTemplate.items.$ref = definitionObjectProperties[definitionObjectProperty].elementName.localPart + '.json'
    } else {
      schemaPropertyArrayTemplate.items.$ref 
        = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty].elementName);
    };
  };*/
  //if ( schemaObjectNamespace === this.sourceSchemaNamespace ) {
  if ( typeof definitionObjectProperty.elementName != 'undefined') {
    var definitionObjectNamespace = definitionObjectProperty.elementName.namespaceURI;
    if ( definitionObjectNamespace === this.sourceSchemaNamespace ) {
      schemaPropertyArrayTemplate.items.$ref = definitionObjectProperty.elementName.localPart + '.json'
    } else {
      schemaPropertyArrayTemplate.items.$ref 
        = this.getSchemaFileDestination(definitionObjectProperty, {"addRelativeDepth": true});
    };
    //return({[definitionObjectProperty.title] : [schemaPropertyArrayTemplate]});
    return([schemaPropertyArrayTemplate]);
  } else {
    if ( typeof definitionObjectProperty.attributeName != "undefined" ) {
      //return({[definitionObjectProperty.title] : { 'type' : '?string' }});
      return({ 'type' : '?string' });
    } else {
      throw('##### WARNING: ' + [definitionObjectProperty.title] + ' is not an element nor an attribute.');
    }
  };

}

SoiSchemaGenerator.prototype.setPropertyObjectTemplate = function (definitionObjectProperty) {
  var schemaPropertyObjectTemplate = this.getSchemaTemplateObject('property-object-template');
          //if ( typeof definitionObjectProperties[definitionObjectProperty].elementName != "undefined" ) {
            //var schemaPropertyObjectTemplate = this.getSchemaTemplateObject('property-object-template');
            //schemaPropertyObjectTemplate.type = 'object';
            //if ( schemaObjectNamespace === this.sourceSchemaNamespace ) {
              //schemaPropertyObjectTemplate.$ref = definitionObjectProperties[definitionObjectProperty].elementName.localPart + '.json'
            //} else {
              //schemaPropertyObjectTemplate.$ref 
              //  = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty].elementName);
              //schemaPropertyObjectTemplate.$ref 
              //  = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty]);
            //};
            //return({[definitionObjectProperty] : [schemaPropertyObjectTemplate]});
  if ( typeof definitionObjectProperty.elementName != 'undefined') {
    var definitionObjectNamespace = definitionObjectProperty.elementName.namespaceURI;
    if ( definitionObjectNamespace === this.sourceSchemaNamespace ) {
      schemaPropertyObjectTemplate.$ref = definitionObjectProperty.elementName.localPart + '.json'
    } else {
      schemaPropertyObjectTemplate.$ref 
        = this.getSchemaFileDestination(definitionObjectProperty, {"addRelativeDepth": true});
    };
    return([schemaPropertyObjectTemplate]);
  } else {
    if ( typeof definitionObjectProperty.attributeName != "undefined" ) {
      return({ 'type' : '?string' });
    } else {
      throw('##### WARNING: ' + [definitionObjectProperty.title] + ' is not an element nor an attribute.');
    }
  };

}

SoiSchemaGenerator.prototype.setPropertyPrimitiveTemplate = function (definitionObjectProperty) {
  var schemaPropertyPrimitiveTemplate = this.getSchemaTemplateObject('property-object-template');
          //if ( typeof definitionObjectProperties[definitionObjectProperty].elementName != "undefined" ) {
            //var schemaPropertyObjectTemplate = this.getSchemaTemplateObject('property-object-template');
            //schemaPropertyObjectTemplate.type = 'object';
            //if ( schemaObjectNamespace === this.sourceSchemaNamespace ) {
              //schemaPropertyObjectTemplate.$ref = definitionObjectProperties[definitionObjectProperty].elementName.localPart + '.json'
            //} else {
              //schemaPropertyObjectTemplate.$ref 
              //  = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty].elementName);
              //schemaPropertyObjectTemplate.$ref 
              //  = this.getSchemaFileDestination(definitionObjectProperties[definitionObjectProperty]);
            //};
            //return({[definitionObjectProperty] : [schemaPropertyObjectTemplate]});
  /*if ( typeof definitionObjectProperty.elementName != 'undefined') {
    var definitionObjectNamespace = definitionObjectProperty.elementName.namespaceURI;
    if ( definitionObjectNamespace === this.sourceSchemaNamespace ) {
      schemaPropertyObjectTemplate.$ref = definitionObjectProperty.elementName.localPart + '.json'
    } else {
      schemaPropertyObjectTemplate.$ref 
        = this.getSchemaFileDestination(definitionObjectProperty);
    };
    return({[definitionObjectProperty.title] : [schemaPropertyObjectTemplate]});
  } else {
    */
  if ( typeof definitionObjectProperty.attributeName != "undefined" ) {
    return({ 'type' : '?string' });
  } else {
    throw('##### WARNING: ' + [definitionObjectProperty.title] + ' is not an element nor an attribute.');
  }
  //};

}

SoiSchemaGenerator.prototype.getRemoteDefinitionReference = function (anyOfObject) {
  var properties  = {}; 
  console.log('##get properties for remote definition');
  //remoteDefinitionObjectName = this.getDefinitionObjectName(anyOfObject);
  //properties[remoteDefinitionObjectName] = { '$ref' : this.getRemoteDefinitionFileLocation(anyOfObject) }
  properties = { '$ref' : this.getRemoteDefinitionFileLocation(anyOfObject) };
  return(properties); 
}

SoiSchemaGenerator.prototype.getRequired = function(sourceSchemaObject) {
  var requiredList = [];
  console.log('##get required');

  for (var definition in sourceSchemaObject.definitions) {
    console.log('##definition: ' + definition);

    for (var requiredKey in sourceSchemaObject.definitions[definition]) {
      console.log('##requiredKey: ' + requiredKey);

      if ( requiredKey == 'required')
      {
        console.log('###found required object: ' + sourceSchemaObject.definitions[definition][requiredKey]) ;
        requiredList.push(sourceSchemaObject.definitions[definition][requiredKey].toString());
      }
    }

  }

  return(requiredList);
}



module.exports = SoiSchemaGenerator;