var fs = require('fs')
  , path = require('path');

function readFile (file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  //console.log('##output file buffer string');
  //console.log(fileBuffer.toString());
  return(fileBuffer);
}

var SchemaGenerator = function () {
  this.sourceSchemaBaseDir;
  this.sourceSchemaNamespace;
  this.sourceSchemaBaseDirRelativeDepth;
  this.schemaTemplateObjects;
  this.targetSchemaBaseDir;
  this.schemaFilepathMappings;
  this.targetSchemaFileDestination;
}
/*
SchemaGenerator.prototype.SchemaTemplateObject = function (templateId) {
   console.log('##match schema template object: ' + templateId);

 // [] = SchemaGenerator.prototype.createSchemaTemplateObject(templateId);
  for (var index = 0; index < this.schemaTemplateObjects.length; index++) {
    if ( this.schemaTemplateObjects[index].templateId === templateId )
      //return(this.schemaTemplateObjects[index].templateObject);
      //return(new SchemaTemplateObject(this.schemaTemplateObjects[index].templateObject));
      [] = this.schemaTemplateObjects[index].templateObject;
  };

  throw 'schema id was not matched for a template object';

};
*/
SchemaGenerator.prototype.setSourceSchemaNamespace = function (sourceSchemaObject) {
  var sourceSchemaId = sourceSchemaObject.id.substring(0, sourceSchemaObject.id.indexOf('#'));
  if ( sourceSchemaId != "" ) 
    this.sourceSchemaNamespace = sourceSchemaId
  else 
    if ( typeof sourceSchemaObject.definitions != 'undefined' ) {
      var firstDefinitionObject = sourceSchemaObject.definitions[Object.keys(sourceSchemaObject.definitions)[0]];
      if ( typeof firstDefinitionObject.typeName != 'undefined' ) {
        this.sourceSchemaNamespace = firstDefinitionObject.typeName.namespaceURI;
        } else throw 'ERROR: Could not locate and set a Source Schema Namespace.';
    } else throw 'ERROR: Could not locate and set a Source Schema Namespace.';
  console.log("##set Source Schema Namespace to: " + this.sourceSchemaNamespace);
};

SchemaGenerator.prototype.setSourceSchemaBaseDirRelativeDepth = function () {
  console.log("###get source schema filepath from namespace match: " + this.sourceSchemaNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if ( this.schemaFilepathMappings[index].namespace === this.sourceSchemaNamespace ) {
    //if ( this.schemaFilepathMappings[index].sourceSchemaFileId === this.sourceSchemaNamespace ) {
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

SchemaGenerator.prototype.createSchemaTemplateObject = function (templateId) {
  /*var schemaTemplateObject = {};
  schemaTemplateObject.prototype = {
    toJSON: function() {
      var objectPlusInherited = {};

      for(var key in this) {
          if(typeof this[key] !== 'function')
              objectPlusInherited[key] = this[key];
      }

      return objectPlusInherited;
    }
  };
*/
  console.log('##match schema template object: ' + templateId);

  for (var index = 0; index < this.schemaTemplateObjects.length; index++) {
    if ( this.schemaTemplateObjects[index].templateId === templateId ) {
      //return(this.schemaTemplateObjects[index].templateObject);
      //return(new SchemaTemplateObject(this.schemaTemplateObjects[index].templateObject));
      //var schemaTemplateObject = this.schemaTemplateObjects[index].templateObject;
      //return(Object.create(this.schemaTemplateObjects[index].templateObject);
      /*var schemaTemplateObject = Object.create(this.schemaTemplateObjects[index].templateObject);
      Object.defineProperty(schemaTemplateObject, 'getObjectPlusInherited', {
          value: function() {
            var objectPlusInherited = {};

            for(var key in this) {
                if(typeof this[key] !== 'function')
                    objectPlusInherited[key] = this[key];
            }

            return objectPlusInherited;
          }
        });*/
        //return(schemaTemplateObject);

        // workaround to instantiate a clone and avoid serialization issues with __proto__ inherited objects
        return(JSON.parse(JSON.stringify(this.schemaTemplateObjects[index].templateObject)));
    }
  };

  throw 'schema id was not matched for a template object';

}

SchemaGenerator.prototype.getRemoteDefinitionNamespace = function (anyOfObject) {
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
  if ( remoteDefinitionNamespace == "" ) remoteDefinitionNamespace = '#';
  console.log("remoteDefinitionNamespace: " + remoteDefinitionNamespace);
  return(remoteDefinitionNamespace);
}

//SchemaGenerator.prototype.getSchemaFileDestination = function (PropertyContainer, addRelativeDepth) {
SchemaGenerator.prototype.getSchemaFileDestination = function (PropertyContainer) {
  //  if ( this.addRelativeDepth != 'undefined')
    //if ( this.addRelativeDepth != true ) this.addRelativeDepth = false
  //    if ( this.addRelativeDepth != true ) addRelativeDepth = false
  //else var addRelativeDepth = false;
  //  else var addRelativeDepth = false;
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
    //if ( this.schemaFilepathMappings[index].sourceSchemaFileId === PropertyObjectNameIdentifier.namespaceURI ){
      //if ( addRelativeDepth )
      if ( PropertyObjectNameIdentifier.namespaceURI === this.sourceSchemaNamespace )
        //return(this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + PropertyObjectNameIdentifier.localPart + '.json')
        return(this.schemaFilepathMappings[index].targetSchemaFilepath + PropertyObjectNameIdentifier.localPart + '.json');
      else
        //return(this.schemaFilepathMappings[index].targetSchemaFilepath + PropertyObjectNameIdentifier.localPart + '.json');
        return(this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + PropertyObjectNameIdentifier.localPart + '.json')
    };
  };

  throw 'object namespace was not matched for schema file destination';
}

SchemaGenerator.prototype.sourceSchemaContainsDefinition = function (sourceSchemaFilename, definitionObjectName) {
  var sourceSchemaFile = this.sourceSchemaBaseDir + sourceSchemaFilename;
  console.log('##remote object source schema file: ' + sourceSchemaFile);
  var sourceSchemaBuffer = readFile(sourceSchemaFile);
  var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  if ( typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined" ) return(true)
  else return(false);
}

SchemaGenerator.prototype.getRemoteDefinitionFileLocation = function (anyOfPropertyObject) {
  var anyOfObjectPropertyDefinitionReferenceNamespace = this.getRemoteDefinitionNamespace(anyOfPropertyObject);
  var remoteDefinitionObjectName = this.getDefinitionObjectName(anyOfPropertyObject);
  console.log("##getting RemoteDefinitionFileLocation for namespace: " + anyOfObjectPropertyDefinitionReferenceNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    //if ( this.schemaFilepathMappings[index].namespace === anyOfObjectPropertyDefinitionReferenceNamespace ) {
      if ( this.schemaFilepathMappings[index].sourceSchemaFileId === anyOfObjectPropertyDefinitionReferenceNamespace ) 
        //remoteDefinitionObjectName = this.getDefinitionObjectName(anyOfPropertyObject);
        if (( this.schemaFilepathMappings[index].sourceSchemaFileId != '#' ) 
          || ( this.sourceSchemaContainsDefinition(this.schemaFilepathMappings[index].sourceSchemaFile
          , remoteDefinitionObjectName) ))
          return(this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath 
            + remoteDefinitionObjectName + '.json');
  };

  throw 'ERROR: Schema namespace was not matched for a remote definition file location.';
}

SchemaGenerator.prototype.getRemoteSchemaSourceFile = function (anyOfPropertyObject) {
  var anyOfObjectPropertyDefinitionReferenceNamespace = this.getRemoteDefinitionNamespace(anyOfPropertyObject);
  console.log("getting RemoteDefinitionFileLocation for namespace: " + anyOfObjectPropertyDefinitionReferenceNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    //if ( this.schemaFilepathMappings[index].namespace === anyOfObjectPropertyDefinitionReferenceNamespace )
    if ( this.schemaFilepathMappings[index].sourceSchemaFileId === anyOfObjectPropertyDefinitionReferenceNamespace )
      if (( this.schemaFilepathMappings[index].sourceSchemaFileId != '#' ) 
        || ( this.sourceSchemaContainsDefinition(this.schemaFilepathMappings[index].sourceSchemaFile
        , this.getDefinitionObjectName(anyOfPropertyObject)) ))
      return(this.schemaFilepathMappings[index].sourceSchemaFile);
  };

  throw 'ERROR: Schema namespace was not matched for a remote schema source file.';
}

SchemaGenerator.prototype.writeSchemaFile = function (schemaObject) {
  //if ( typeof schemaObject.getObjectPlusInherited != "undefined" )
  //  var schemaBuffer = JSON.stringify(schemaObject.getObjectPlusInherited(), null, '  ');
  //else
    var schemaBuffer = JSON.stringify(schemaObject, null, '  ');
  console.log('##output schema buffer string');
  console.log(schemaBuffer.toString());
  //console.log('##write schema document file');
  if ( dirPathExists(this.targetSchemaBaseDir + this.targetSchemaFileDestination) ) {
    console.log('##write schema document file to: ' + this.targetSchemaBaseDir 
      + this.targetSchemaFileDestination);
    fs.writeFileSync(this.targetSchemaBaseDir + this.targetSchemaFileDestination, schemaBuffer);
  };
    //else throw("ERROR: dirPath does not exist: " + this.targetSchemaBaseDir + this.targetSchemaFileDestination);

  function dirPathExists(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true;
    }
    dirPathExists(dirName);
    fs.mkdirSync(dirName);
    return true;

    throw("ERROR: Can not create dirPath: " + this.targetSchemaBaseDir + this.targetSchemaFileDestination);
  };
}

SchemaGenerator.prototype.generateObjectSchema = function (sourceSchemaObject) {
  var schemaObject;
  //var schemaObjectNamespace;
  if ( typeof sourceSchemaObject.anyOf != "undefined" ) {

    sourceSchemaObject.anyOf.forEach(function (anyOfObject) {
      //schemaObjectNamespace = anyOfObject.elementName.namespaceURI;
      switch ( this.getType(anyOfObject) ) {
        case 'object' :
          var schemaObject = this.createSchemaTemplateObject('object-template');
          //var schemaObject = new this.SchemaTemplateObject('object-template');
          schemaObject.id = this.getId(anyOfObject.elementName);
          //schemaObject.title = this.getTitle(anyOfObject);
          //schemaObject.title = this.getTitle(anyOfObject.elementName);
          schemaObject.title = this.getTitle(anyOfObject);
          schemaObject.type = this.getType(anyOfObject);
          schemaObject.javaType = this.getJavaType(anyOfObject.elementName);
          var definitionObjectName = this.getDefinitionObjectName(anyOfObject);
          switch ( definitionObjectName ) {
          //if ( definitionObjectName != 'anyType' ) {
            case "anyType":
              console.log("##object definition is 'anyType' and it for an abstract element.");
              console.log("TO-DO: descendent component may be identified by a substitutionHead property that associates it to this object");
              schemaObject.type = "object";
              break;
            case "DateTime":
              console.log("##object definition is 'DateTime'; type set to 'string', format 'date-time'.");
              schemaObject.type = "string";
              schemaObject.format = "date-time";
              break;
            case "Decimal":
              console.log("##object definition is 'Decimal'; type set to 'number'.");
              schemaObject.type = "number";
              break;
            case "String":
              console.log("##object definition is 'String'; type set to 'string'.");
              schemaObject.type = "string";
              schemaObject.format = "date-time";
              break;
            default:
              if (( typeof sourceSchemaObject.definitions != "undefined" ) 
                && ( typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined" ))
                //schemaObject.properties 
                //  = this.getProperty(sourceSchemaObject.definitions[this.getDefinitionObjectName(anyOfObject)]
                //    , schemaObjectNamespace);
                schemaObject.properties 
                  = this.getProperties(sourceSchemaObject.definitions[definitionObjectName])
              else {
                schemaObject.properties = this.getRemoteDefinitionReference(anyOfObject);
                this.generateRemoteObjectSchema(anyOfObject, definitionObjectName);
              };
          //} else {
            //console.log("##object definition is 'anyType'; type set to 'abstract object' and may be ignored.");
            //schemaObject.type = "abstract object may be ignored";
          };
          break;
        default:
          throw('ERROR: not sure how to generate an object for this anyOf object type: ' + this.getType(anyOfObject));
      };
      //this.targetSchemaFileDestination = this.getSchemaFileDestination(anyOfObject.elementName);
      this.targetSchemaFileDestination = this.getSchemaFileDestination(anyOfObject);
      //this.targetSchemaFileDestination = this.getSchemaFileDestination(anyOfObject, {"addRelativeDepth": true});
      this.writeSchemaFile(schemaObject);
    }, this);

  };

}

SchemaGenerator.prototype.generateRemoteObjectSchema = function (anyOfObject, definitionObjectName) {
  console.log('###instantiating Remote Object Schema generation');
  //sourceSchemaFile = config.schemaBaseDir.source + config.schemaSourceFilenames[index];
  //var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemoteSchemaSourceFile(anyOfPropertyObject);
  var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemoteSchemaSourceFile(anyOfObject);
  console.log('##remote object source schema file: ' + sourceSchemaFile);
  var sourceSchemaBuffer = readFile(sourceSchemaFile);
  var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  var ssg = new SchemaGenerator();
  ssg.schemaTemplateObjects = this.schemaTemplateObjects;
  ssg.targetSchemaBaseDir = this.targetSchemaBaseDir;
  ssg.schemaFilepathMappings = this.schemaFilepathMappings;
  ssg.sourceSchemaBaseDir = this.sourceSchemaBaseDir;
  ssg.setSourceSchemaNamespace(sourceSchemaObject);
  ssg.setSourceSchemaBaseDirRelativeDepth();
  ssg.generateObjectDefinitionSchema(sourceSchemaObject.definitions[definitionObjectName]);
}

SchemaGenerator.prototype.generateObjectDefinitionSchema = function (definitionObject) {
  console.log("###generate Object Definition Schema");
  //if ( typeof sourceSchemaObject.definitions != "undefined" ) {
  if ( typeof definitionObject != "undefined" ) {
    switch ( this.getType(definitionObject) ) {
      case 'object' :
        //g var schemaObject = this.createSchemaTemplateObject('object-template');
        var schemaObject = {};
        //g schemaObject.id = this.getId(definitionObject.typeName);
        //g schemaObject.title = this.getTitle(definitionObject);
        //g schemaObject.type = this.getType(definitionObject);
        //g schemaObject.javaType = this.getJavaType(definitionObject.typeName);
        schemaObject = this.getProperties(definitionObject);
        break;
      default:
        throw('ERROR: not sure how to generate an object for this allOf object type: ' + this.getType(definitionObject));
    };
    this.targetSchemaFileDestination = this.getSchemaFileDestination(definitionObject);
    //this.targetSchemaFileDestination = this.getSchemaFileDestination(definitionObject, {"addRelativeDepth": true});
    this.writeSchemaFile(schemaObject);
  } else {
    throw('definition object is undefined: ' + definitionObjectName);
  };

}

SchemaGenerator.prototype.getId = function(propertyObjectNameIdentifier) {
  //console.log('##get id from anyOf elementName');
  console.log('##get id from Property Object Name Identifier');
  //console.log('##id: ' + anyOfObject.elementName.namespaceURI + anyOfObject.elementName.localPart);
  var id = propertyObjectNameIdentifier.namespaceURI + '#' + propertyObjectNameIdentifier.localPart;
  console.log('##id: ' + id);
  //return(anyOfObject.elementName.namespaceURI + anyOfObject.elementName.localPart);
  return(id);
}

//SchemaGenerator.prototype.getTitle = function(propertyObjectNameIdentifier) {
SchemaGenerator.prototype.getTitle = function(propertyObject) {
  //console.log('##get title from Property Object Name Identifier');
  console.log('##get title from Property Object');
  if ( typeof propertyObject.elementName != "undefined")
    var title = propertyObject.elementName.localPart;
  else
    if ( typeof propertyObject.typeName != "undefined")
      var title = propertyObject.typeName.localPart;
    else
      if ( typeof propertyObject.attributeName != "undefined")
        var title = propertyObject.attributeName.localPart;
      else
        if ( typeof propertyObject.title != "undefined")
          var title = propertyObject.title;
        else
          throw("ERROR: trouble determining Property Object title or name");
  console.log('##title: ' + title);
  return(title);
}

SchemaGenerator.prototype.getType = function(propertyObject) {
  var propertyObjectType;
  //console.log('##get type for: ' + propertyObject.elementName.localPart);
  //if ( typeof propertyObject.elementName != 'undefined' ) {
    //console.log('##get type for: ' + this.getId(propertyObject.elementName));
  if ( typeof propertyObject.type != 'undefined' ) 
    propertyObjectType = propertyObject.type
  else
  //if ( typeof propertyObject.typeName != 'undefined' ) {
    //console.log('##get type for: ' + this.getId(propertyObject.typeName));
    if ( typeof propertyObject.allOf != 'undefined' ) 
      propertyObjectType = propertyObject.allOf[1].type
    else throw("ERROR: having trouble getting propertyObject type. ");
  console.log('##type: ' + propertyObjectType);
  return(propertyObjectType);
}
SchemaGenerator.prototype.getDescription = function(propertyObject) {
  console.log('##get description from ?xsd short description' );
  var description = '?xsd short description';
  console.log('##description: ' + description)
  return(description);
}

SchemaGenerator.prototype.getVersion = function(propertyObject) {
  console.log('##keeping version from template');
}

SchemaGenerator.prototype.getJavaType = function(propertyObjectNameIdentifier) {
  console.log('##get javaType from Property Object Name Identifier');
  //var javaNamespaceURI = propertyObjectNameIdentifier.namespaceURI.replace(/[:\/\.-]/g, '_');
  var javaType = propertyObjectNameIdentifier.namespaceURI.replace(/[:\/\.-]/g, '_') + propertyObjectNameIdentifier.localPart;
  //console.log('##javaType: ' + javaNamespaceURI + propertyObjectNameIdentifier.localPart);
  console.log('##javaType: ' + javaType);
  //return(javaNamespaceURI + propertyObjectNameIdentifier.localPart);
  return(javaType);
}

SchemaGenerator.prototype.getDefinitionObjectName = function(anyOfObject) {
  var anyOfObjectProperty$ref;
  if ( typeof anyOfObject.properties.value.$ref != "undefined" )
    anyOfObjectProperty$ref = anyOfObject.properties.value.$ref;
  else
    if ( typeof anyOfObject.properties.value.items.$ref != "undefined" )
      anyOfObjectProperty$ref = anyOfObject.properties.value.items.$ref;
    else
      throw "trouble locating anyOf object definition reference";
  //console.log('##get definition from anyOf object reference: ' + anyOfObject.properties.value.$ref);
  console.log('##getDefinitionObjectName from anyOf object reference: ' + anyOfObjectProperty$ref);
  //var anyOfObjectDefinitionReference = anyOfObject.properties.value.$ref;
  //return(anyOfObjectDefinitionReference.substring(anyOfObjectDefinitionReference.lastIndexOf('/') + 1));
  return(anyOfObjectProperty$ref.substring(anyOfObjectProperty$ref.lastIndexOf('/') + 1));
}

SchemaGenerator.prototype.getProperties = function(definitionObject) {
  var properties = {};
  var propertyTemplate;
  var definitionPropertyContainer = getDefinitionPropertyContainer(definitionObject);
  //console.log('##get properties for definition: ' + definitionObject.typeName.localPart);
  console.log('##get properties for definitionPropertyContainer: ' + definitionPropertyContainer.title);
  //if ( typeof definitionObject.allOf != "undefined" ) {
    //properties = this.setSchemaPropertyTemplate(propertyContainer.properties, schemaObjectNamespace);
    //properties = this.setSchemaPropertyTemplate(propertyContainer.properties);
  var propertyTemplateType;
  var propertyTitle;

  for (var definitionObjectProperty in definitionPropertyContainer.properties) {
    console.log('####definitionObjectProperty: ' + definitionObjectProperty);
    if ( definitionPropertyContainer.properties[definitionObjectProperty].title != "otherAttributes" ) {
      //propertyObjectName = this.getTitle(definitionPropertyContainer.properties[definitionObjectProperty].elementName);
      propertyObjectName = this.getTitle(definitionPropertyContainer.properties[definitionObjectProperty]);
      propertyTemplateType = getPropertyTemplateType(definitionPropertyContainer.properties[definitionObjectProperty]);
      switch (propertyTemplateType) {
        case 'array':
          propertyTemplate = this.setPropertyArrayTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
          //properties = {[propertyTemplate.title]: propertyTemplate};
          //properties.test = test;
          //properties[propertyTemplate.title] = propertyTemplate;
          //properties[definitionObjectProperty] = propertyTemplate;
          properties[propertyObjectName] = propertyTemplate;
          break;
        case 'object':
          propertyTemplate = this.setPropertyObjectTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
          //properties[definitionObjectProperty] = propertyTemplate;
          properties[propertyObjectName] = propertyTemplate;
          break;
        case 'primitive':
          propertyTemplate = this.setPropertyPrimitiveTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
          //properties[definitionObjectProperty] = propertyTemplate;
          properties[propertyObjectName] = propertyTemplate;
          break;
        //case 'not applicable':
        //  break;
        default:
          //throw('##### ERROR: PropertyTemplateType for ' + [definitionObjectProperty] + ' was not handled.')
          throw('##### ERROR: PropertyTemplateType for ' + definitionObjectProperty + ' was not handled.')
      };
    }
  }

  if ( Object.keys(properties).length > 0 )
    return(properties)
  else return(this.setPropertyPrimitiveTemplate(definitionObject)); 
  
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
    //if ( definitionObjectProperty.title != "otherAttributes" ) {
      console.log('####Is definitionObjectProperty type defined?');
      if ( typeof definitionObjectProperty.allOf[0].type != "undefined") {
        console.log('#####definitionObjectPropertyAllOfType: ' + definitionObjectProperty.allOf[0].type);
        //if (definitionObjectProperty.allOf[0].type === 'array') return('array');
        switch ( definitionObjectProperty.allOf[0].type ) {
          case "array": return("array")
          //case "object": return("array")
          case "object": return("object")
          default: return('not applicable')
        };
      } else {
        if ( typeof definitionObjectProperty.elementName != "undefined" ) {
          return('object')
        } else {
          if (( typeof definitionObjectProperty.attributeName != "undefined" ) 
            || ( definitionObjectProperty.title == "value" )) return('primitive')
        };
      };
    //} else {
    //  return('not applicable');
    //}
  }

}

SchemaGenerator.prototype.setPropertyArrayTemplate = function (definitionObjectProperty) {

  var schemaPropertyArrayTemplate = this.createSchemaTemplateObject('property-array-template');
  //g var schemaPropertyArrayTemplate = { "items": {}};
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
      //schemaPropertyArrayTemplate.items.$ref 
      //  = this.getSchemaFileDestination(definitionObjectProperty, {"addRelativeDepth": true});
      schemaPropertyArrayTemplate.items.$ref = this.getSchemaFileDestination(definitionObjectProperty);
    };
    //return({[definitionObjectProperty.title] : [schemaPropertyArrayTemplate]});
    return(schemaPropertyArrayTemplate);
  } else {
    if ( typeof definitionObjectProperty.attributeName != "undefined" ) {
      //return({[definitionObjectProperty.title] : { 'type' : '?string' }});
      return({ 'type' : 'string' });
    } else {
      throw('##### WARNING: ' + [definitionObjectProperty.title] + ' is not an element nor an attribute.');
    }
  };

}

SchemaGenerator.prototype.setPropertyObjectTemplate = function (definitionObjectProperty) {
  var schemaPropertyObjectTemplate = this.createSchemaTemplateObject('property-object-template');
          //if ( typeof definitionObjectProperties[definitionObjectProperty].elementName != "undefined" ) {
            //var schemaPropertyObjectTemplate = this.createSchemaTemplateObject('property-object-template');
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
      //schemaPropertyObjectTemplate.$ref 
      //  = this.getSchemaFileDestination(definitionObjectProperty, {"addRelativeDepth": true});
      schemaPropertyObjectTemplate.$ref = this.getSchemaFileDestination(definitionObjectProperty);
    };
    return([schemaPropertyObjectTemplate]);
  } else {
    if ( typeof definitionObjectProperty.attributeName != "undefined" ) {
      return({ 'type' : 'string' });
    } else {
      throw('##### WARNING: ' + [definitionObjectProperty.title] + ' is not an element nor an attribute.');
    }
  };

}

SchemaGenerator.prototype.setPropertyPrimitiveTemplate = function (definitionObjectProperty) {
  var schemaPropertyPrimitiveTemplate = this.createSchemaTemplateObject('property-primitive-template');
  //if ( typeof definitionObjectProperty.elementName != "undefined" ) {
    //var schemaPropertyObjectTemplate = this.createSchemaTemplateObject('property-object-template');
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
  //if ( typeof definitionObjectProperty.attributeName != "undefined" ) {
    //return({ 'type' : 'string' });
  //} else {
  //  throw('##### WARNING: ' + [definitionObjectProperty.title] + ' is not an element nor an attribute.');
 // }
  //};
  schemaPropertyPrimitiveTemplate.type = "string";
  return(schemaPropertyPrimitiveTemplate);
}

SchemaGenerator.prototype.getRemoteDefinitionReference = function (anyOfObject) {
  var properties  = {}; 
  console.log('##get properties for remote definition');
  remoteDefinitionObjectName = this.getDefinitionObjectName(anyOfObject);
  properties[remoteDefinitionObjectName] = { '$ref' : this.getRemoteDefinitionFileLocation(anyOfObject) };
  //g properties = { '$ref' : this.getRemoteDefinitionFileLocation(anyOfObject) };
  return(properties); 
}

SchemaGenerator.prototype.getRequired = function(sourceSchemaObject) {
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



module.exports = SchemaGenerator;