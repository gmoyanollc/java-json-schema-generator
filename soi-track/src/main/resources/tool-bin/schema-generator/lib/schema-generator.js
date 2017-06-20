var fs = require('fs')
  , path = require('path');

function readFile(file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  //console.log('##output file buffer string');
  //console.log(fileBuffer.toString());
  return (fileBuffer);
}

var SchemaGenerator = function () {
  this.sourceSchemaBaseDir;
  this.sourceSchemaBaseDirRelativeDepth;
  this.sourceDocumentationBaseDir;
  this.sourceDocumentation;
  this.sourceSchemaNamespace;
  this.schemaTemplateObjects;
  this.schemaFilepathMappings;
  this.substitutionMappings;
  this.targetSchemaBaseDir;
  this.targetSchemaFileDestination;
  this.targetSchemaBuildVersion;
}
/* initialize { */
SchemaGenerator.prototype.setSourceSchemaNamespace = function (sourceSchemaObject) {
  var sourceSchemaId = sourceSchemaObject.id.substring(0, sourceSchemaObject.id.indexOf('#'));
  if (sourceSchemaId != "")
    this.sourceSchemaNamespace = sourceSchemaId
  else
    if (typeof sourceSchemaObject.definitions != 'undefined') {
      var firstDefinitionObject = sourceSchemaObject.definitions[Object.keys(sourceSchemaObject.definitions)[0]];
      if (typeof firstDefinitionObject.typeName != 'undefined') {
        this.sourceSchemaNamespace = firstDefinitionObject.typeName.namespaceURI;
      } else throw 'ERROR: Could not locate and set a Source Schema Namespace.';
    } else throw 'ERROR: Could not locate and set a Source Schema Namespace.';
  console.log("##set Source Schema Namespace to: " + this.sourceSchemaNamespace);
}

SchemaGenerator.prototype.setSourceSchemaBaseDirRelativeDepth = function () {
  console.log("###get source schema filepath from namespace match: " + this.sourceSchemaNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].namespace === this.sourceSchemaNamespace) {
      var sourceSchemaFilepath = this.schemaFilepathMappings[index].targetSchemaFilepath
    }
  }

  if (typeof sourceSchemaFilepath !== 'undefined') {
    console.log('setting Source Schema Base Dir Relative Depth');
    this.sourceSchemaBaseDirRelativeDepth = '';
    var sourceSchemaBaseDirRelativeDepthCount = sourceSchemaFilepath.split('/').length;

    for (var index = 1; index < sourceSchemaBaseDirRelativeDepthCount; index++) {
      this.sourceSchemaBaseDirRelativeDepth = this.sourceSchemaBaseDirRelativeDepth + '../'
    }

    console.log('Source Schema Base Dir Relative Depth: ' + this.sourceSchemaBaseDirRelativeDepth);
  } else {
    throw ('#ERROR: source schema namespace was not matched for filepath.');
  }
};

SchemaGenerator.prototype.setSubstitutionMappings = function () {
  console.log("#setSubstitutionMappings");
  this.substitutionMappings = [];
  var sourceModule;

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].sourceModuleFilename !== "") {
      sourceModule = require('../' + this.sourceSchemaBaseDir + this.schemaFilepathMappings[index].sourceModuleFilename);

      sourceModule[Object.keys(sourceModule)[0]].elementInfos.forEach(function (elementInfo) {
        if (typeof elementInfo.substitutionHead !== 'undefined') {
          if (typeof elementInfo.substitutionHead.namespaceURI !== 'undefined')
            this.substitutionMappings.push(
              {
                "substitutionHead": elementInfo.substitutionHead.namespaceURI + '#' + elementInfo.substitutionHead.localPart, "substitution": sourceModule[Object.keys(sourceModule)[0]].defaultElementNamespaceURI + '#' + elementInfo.elementName
              });
          else
            if ((typeof elementInfo.substitutionHead !== 'undefined') && (typeof elementInfo.elementName.namespaceURI !== 'undefined'))
              this.substitutionMappings.push(
                {
                  "substitutionHead": sourceModule[Object.keys(sourceModule)[0]].defaultElementNamespaceURI + '#' + elementInfo.substitutionHead, "substitution": elementInfo.elementName.namespaceURI + '#' + elementInfo.elementName.localPart
                });
            else
              this.substitutionMappings.push(
                {
                  "substitutionHead": sourceModule[Object.keys(sourceModule)[0]].defaultElementNamespaceURI + '#' + elementInfo.substitutionHead, "substitution": sourceModule[Object.keys(sourceModule)[0]].defaultElementNamespaceURI + '#' + elementInfo.elementName
                });
        }
      }, this)
    }
  }

  this.substitutionMappings.forEach(function (substitutionMapping) {
    console.log(substitutionMapping.substitutionHead + " <-- " + substitutionMapping.substitution);
  }, this)

};

SchemaGenerator.prototype.loadDocumentationMap = function () {
  console.log("#loadDocumentationMap");

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].namespace === this.sourceSchemaNamespace) { 
      if ( this.schemaFilepathMappings[index].sourceDocumentationFilename !== "" ) {
        console.log("DocumentationMap file: " + "../" + this.sourceDocumentationBaseDir + this.schemaFilepathMappings[index].sourceDocumentationFilepath + this.schemaFilepathMappings[index].sourceDocumentationFilename);
        var sourceDocumentationBuffer = readFile(this.sourceDocumentationBaseDir + this.schemaFilepathMappings[index].sourceDocumentationFilepath + this.schemaFilepathMappings[index].sourceDocumentationFilename);
        this.sourceDocumentation = JSON.parse(sourceDocumentationBuffer);
      } else {
        console.log("WARNING: Namespace match found but sourceDocumentationFilename not set.");
      };
    };
  };

  if ( typeof this.sourceDocumentation == "undefined" ) 
    throw("ERROR: sourceSchemaNamespace unmatched: " + this.sourceSchemaNamespace);
};
/* initialize } */
SchemaGenerator.prototype.createSchemaTemplateObject = function (templateId) {
  console.log('##match schema template object: ' + templateId);

  for (var index = 0; index < this.schemaTemplateObjects.length; index++) {
    if (this.schemaTemplateObjects[index].templateId === templateId) {
      return (JSON.parse(JSON.stringify(this.schemaTemplateObjects[index].templateObject)));
    }
  };

  throw 'schema id was not matched for a template object';

}

SchemaGenerator.prototype.getSchemaReference = function (definitionObjectProperty) {
  if (typeof definitionObjectProperty.elementName != 'undefined') {
    var definitionObjectNamespace = definitionObjectProperty.elementName.namespaceURI;
    if (definitionObjectNamespace === this.sourceSchemaNamespace)
      return(definitionObjectProperty.elementName.localPart + '.json')
    else
      return(this.getSchemaFileDestination(definitionObjectProperty))
  }
}

SchemaGenerator.prototype.setPropertyArrayTemplate = function (definitionObjectProperty) {
  var schemaPropertyArrayTemplate = this.createSchemaTemplateObject('property-array-template');
  if (typeof definitionObjectProperty.elementName != 'undefined') {
    var definitionObjectNamespace = definitionObjectProperty.elementName.namespaceURI;
    if (definitionObjectNamespace === this.sourceSchemaNamespace) {
      schemaPropertyArrayTemplate.items.$ref = definitionObjectProperty.elementName.localPart + '.json'
    } else {
      schemaPropertyArrayTemplate.items.$ref = this.getSchemaFileDestination(definitionObjectProperty);
    };
    return (schemaPropertyArrayTemplate);
  } else {
    if (typeof definitionObjectProperty.attributeName != "undefined") {
      return ({ 'type': 'string' });
    } else {
      throw ('##### WARNING: ' + [definitionObjectProperty.title] + ' is not an element nor an attribute.');
    }
  };
}

SchemaGenerator.prototype.setPropertyObjectTemplate = function (definitionObjectProperty) {
  var schemaPropertyObjectTemplate = this.createSchemaTemplateObject('property-object-template');
  if (typeof definitionObjectProperty.elementName != 'undefined') {
    var definitionObjectNamespace = definitionObjectProperty.elementName.namespaceURI;
    if (definitionObjectNamespace === this.sourceSchemaNamespace) {
      schemaPropertyObjectTemplate.$ref = definitionObjectProperty.elementName.localPart + '.json'
    } else {
      schemaPropertyObjectTemplate.$ref = this.getSchemaFileDestination(definitionObjectProperty);
    };
    return (schemaPropertyObjectTemplate);
  } else {
    if (typeof definitionObjectProperty.attributeName != "undefined") {
      return ({ 'type': 'string' });
    } else {
      throw ('##### WARNING: ' + [definitionObjectProperty.title] + ' is not an element nor an attribute.');
    }
  };
}

SchemaGenerator.prototype.setPropertyPrimitiveTemplate = function (definitionObjectProperty) {
  var schemaPropertyPrimitiveTemplate = this.createSchemaTemplateObject('property-primitive-template');
  //044 schemaPropertyPrimitiveTemplate.type = "string";
  return (schemaPropertyPrimitiveTemplate);
}

SchemaGenerator.prototype.getSubstitutionIdentifiers = function (substitutionHeadIdentifier) {
  console.log("###getSubstitutionIdentifiers for: " + substitutionHeadIdentifier);
  var substitutionIdentifiers = [];

  this.substitutionMappings.forEach(function (substitutionMapping) {
    if (substitutionMapping.substitutionHead == substitutionHeadIdentifier) {
      substitutionIdentifiers.push(substitutionMapping.substitution);
      console.log("    `-- " + substitutionMapping.substitution);
    }
  }, this)

  if (substitutionIdentifiers.length <= 0)
    console.log("    WARNING: Substitution is missing, which is fine when there simply is none.");
  return (substitutionIdentifiers);
}

SchemaGenerator.prototype.remoteSchemaContainsDefinition = function (sourceSchemaFilename, definitionObjectName) {
  var sourceSchemaFile = this.sourceSchemaBaseDir + sourceSchemaFilename;
  console.log('##remote object source schema file: ' + sourceSchemaFile);
  var sourceSchemaBuffer = readFile(sourceSchemaFile);
  var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  if (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined") return (true)
  else return (false);
}

SchemaGenerator.prototype.getDefinitionSourceSchemaFilename = function (definitionObjectIdentifier) {
  var definitionSourceSchemaNamespace = definitionObjectIdentifier.substring(0, definitionObjectIdentifier.indexOf('#'));
  var definitionObjectName = definitionObjectIdentifier.substring(definitionObjectIdentifier.lastIndexOf('#') + 1);
  console.log("####getDefinitionSourceSchemaFileLocation for namespace: " + definitionSourceSchemaNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].sourceSchemaFileId === definitionSourceSchemaNamespace)
      if (this.schemaFilepathMappings[index].sourceSchemaFileId != '#')
        return (this.schemaFilepathMappings[index].sourceSchemaFilename);
      else
        throw 'ERROR: Schema namespace was matched but definition was not found in source schema file.';
  };

  throw 'ERROR: Schema namespace was not matched for a definition source schema file location.';
}

SchemaGenerator.prototype.getRemoteObject = function (definitionObjectIdentifier) {
  var definitionSourceSchemaFile = this.sourceSchemaBaseDir + this.getDefinitionSourceSchemaFilename(definitionObjectIdentifier);
  console.log('####definition object source schema file: ' + definitionSourceSchemaFile);
  var definitionSourceSchemaBuffer = readFile(definitionSourceSchemaFile);
  var definitionSourceSchemaObject = JSON.parse(definitionSourceSchemaBuffer);
  var definitionObjectName = definitionObjectIdentifier.substring(definitionObjectIdentifier.lastIndexOf('#') + 1);
  if ((typeof definitionSourceSchemaObject.definitions != "undefined") && (typeof definitionSourceSchemaObject.definitions[definitionObjectName] != "undefined"))
    return (definitionSourceSchemaObject.definitions[definitionObjectName])
  else
    if (typeof definitionSourceSchemaObject.anyOf != "undefined")

      for (var anyOfObjectIndex = 0; anyOfObjectIndex < definitionSourceSchemaObject.anyOf.length; anyOfObjectIndex++) {
        if (this.getId(definitionSourceSchemaObject.anyOf[anyOfObjectIndex]) == definitionObjectIdentifier)
          return (definitionSourceSchemaObject.anyOf[anyOfObjectIndex]);
      };

  throw ("ERROR: Unable to get remote object: " + definitionObjectIdentifier);
}

SchemaGenerator.prototype.getRemoteDefinitionNamespace = function (anyOfObject) {
  var definitionReferenceContainer = this.getDefinitionReferenceContainer(anyOfObject);
  if (typeof definitionReferenceContainer != "undefined") {
    console.log('##get namespace from remote anyOf object property definition reference: '
      + definitionReferenceContainer.$ref);
    var remoteDefinitionNamespace = definitionReferenceContainer.$ref.substring(0, definitionReferenceContainer.$ref.indexOf('#'));
    if (remoteDefinitionNamespace == "") remoteDefinitionNamespace = '#';
    console.log("remoteDefinitionNamespace: " + remoteDefinitionNamespace);
    return (remoteDefinitionNamespace);
  }
}

SchemaGenerator.prototype.getRemoteDefinitionFileLocation = function (anyOfPropertyObject) {
  var anyOfObjectPropertyDefinitionReferenceNamespace =
    this.getRemoteDefinitionNamespace(anyOfPropertyObject);
  var remoteDefinitionObjectName = this.getDefinitionReferenceName(anyOfPropertyObject);
  console.log("##getting RemoteDefinitionFileLocation for namespace: "
    + anyOfObjectPropertyDefinitionReferenceNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].sourceSchemaFileId === anyOfObjectPropertyDefinitionReferenceNamespace)
      if (this.schemaFilepathMappings[index].sourceSchemaFileId != '#')
        //|| ( this.remoteSchemaContainsDefinition(this.schemaFilepathMappings[index].sourceSchemaFilename
        //, remoteDefinitionObjectName) ))
        //|| ( this.getRemoteObject(anyOfObjectPropertyDefinitionReferenceNamespace + '#' + //remoteDefinitionObjectName) != "undefined" ))
        return (this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + remoteDefinitionObjectName + ".json")
      else
        if ((this.schemaFilepathMappings[index].sourceSchemaFileId == '#') && (this.remoteSchemaContainsDefinition(this.schemaFilepathMappings[index].sourceSchemaFilename, remoteDefinitionObjectName)))
          return (this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + remoteDefinitionObjectName + ".json");
  };

  throw 'ERROR: Schema namespace was not matched for a remote definition file location.';
}

/* 044 consolidated into single embedded statement
SchemaGenerator.prototype.getRemoteDefinitionReference = function (PropertyObject) {
  //044 var properties = {};
  console.log('##get properties for remote definition');
  //044 remoteDefinitionObjectName = this.getDefinitionReferenceName(PropertyObject);
  //044 properties[remoteDefinitionObjectName] = { '$ref': this.getRemoteDefinitionFileLocation(PropertyObject) };
  //044 return (properties);
  return({ '$ref': this.getRemoteDefinitionFileLocation(PropertyObject) });
}*/

SchemaGenerator.prototype.getDefinitionReferenceContainer = function (definitionObjectContainer) {
  console.log("###getDefinitionReferenceContainer");
  var definitionReferenceContainer;
  if (typeof definitionObjectContainer.properties != "undefined") {
    if (typeof definitionObjectContainer.properties.value != "undefined")
      if (typeof definitionObjectContainer.properties.value.allOf != "undefined")
        if (typeof definitionObjectContainer.properties.value.allOf[0].allOf != "undefined")
          definitionReferenceContainer = definitionObjectContainer.properties.value.allOf[0].allOf[0]
        else
          definitionReferenceContainer = definitionObjectContainer.properties.value.allOf[0]
      else
        definitionReferenceContainer = definitionObjectContainer.properties.value
  } else {
    if (typeof definitionObjectContainer.allOf != "undefined") {
      if (typeof definitionObjectContainer.allOf[0].properties != "undefined") {
        if (typeof definitionObjectContainer.allOf[0].properties.value != "undefined")
          if (typeof definitionObjectContainer.allOf[0].properties.value.allOf != "undefined")
            definitionReferenceContainer = definitionObjectContainer.allOf[0].properties.value.allOf[0]
          else
            definitionReferenceContainer = definitionObjectContainer.allOf[0].properties.value
      } else {
        if (typeof definitionObjectContainer.allOf[0].items != "undefined") {
          if (typeof definitionObjectContainer.allOf[0].items.properties != "undefined") {
            if (typeof definitionObjectContainer.allOf[0].items.properties.value != "undefined")
              definitionReferenceContainer = definitionObjectContainer.allOf[0].items.properties.value
          } else definitionReferenceContainer = definitionObjectContainer.allOf[0].items
        } else definitionReferenceContainer = definitionObjectContainer.allOf[0]
      }
    } else {
    if ( typeof definitionObjectContainer.$ref != "undefined" )
      definitionReferenceContainer = definitionObjectContainer
    else throw "trouble locating definitionReferenceContainer"
    }
  };
  if (typeof definitionReferenceContainer != "undefined")
    console.log('##DefinitionReference: ' + definitionReferenceContainer.$ref)
  else console.log("##DefinitionReference is undefined.");
  return (definitionReferenceContainer);
}

SchemaGenerator.prototype.getDefinitionReferenceName = function (definitionObjectContainer) {
  var definitionReferenceContainer = this.getDefinitionReferenceContainer(definitionObjectContainer);
  if (typeof definitionReferenceContainer != "undefined")
    return (definitionReferenceContainer.$ref.substring(definitionReferenceContainer.$ref.lastIndexOf('/') + 1))
  else return;
}

SchemaGenerator.prototype.getRemotePropertySchemaSourceFile = function (definitionObjectProperty) {
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(definitionObjectProperty);
  //var definitionObjectPropertyNamespace = definitionObjectProperty.elementName.namespaceURI;
  var definitionObjectPropertyNamespace = propertyObjectIdentifierContainer.namespaceURI;
  console.log("getting RemoteDefinitionFileLocation for namespace: "
    + definitionObjectPropertyNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].sourceSchemaFileId
      === definitionObjectPropertyNamespace)
      if (this.schemaFilepathMappings[index].sourceSchemaFileId != '#')
        return (this.schemaFilepathMappings[index].sourceSchemaFilename);
  };

  throw 'ERROR: Schema namespace was not matched for a remote schema source file.';
}

SchemaGenerator.prototype.getRemoteObjectSchemaSourceFile = function (anyOfPropertyObject) {
  var anyOfObjectPropertyDefinitionReferenceNamespace = this.getRemoteDefinitionNamespace(anyOfPropertyObject);
  var remoteDefinitionObjectName = this.getDefinitionReferenceName(anyOfPropertyObject);
  console.log("getting RemoteDefinitionFileLocation for namespace: "
    + anyOfObjectPropertyDefinitionReferenceNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].sourceSchemaFileId
      === anyOfObjectPropertyDefinitionReferenceNamespace)
      if (this.schemaFilepathMappings[index].sourceSchemaFileId != '#')
        //|| ( this.remoteSchemaContainsDefinition(this.schemaFilepathMappings[index].sourceSchemaFilename
        //, this.getDefinitionReferenceName(anyOfPropertyObject)) ))
        //|| ( this.getRemoteObject(anyOfObjectPropertyDefinitionReferenceNamespace //+ '#' + remoteDefinitionObjectName) != "undefined" ))
        return (this.schemaFilepathMappings[index].sourceSchemaFilename)
      else
        if ((this.schemaFilepathMappings[index].sourceSchemaFileId == '#') && (this.remoteSchemaContainsDefinition(this.schemaFilepathMappings[index].sourceSchemaFilename, remoteDefinitionObjectName)))
          return (this.schemaFilepathMappings[index].sourceSchemaFilename);
  };

  throw 'ERROR: Schema namespace was not matched for a remote schema source file.';
}

SchemaGenerator.prototype.getSchemaFileDestination = function (PropertyContainer) {
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(PropertyContainer);
  console.log("###get schema file destination from object namespace match: "
    + propertyObjectIdentifierContainer.namespaceURI);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].namespace === propertyObjectIdentifierContainer.namespaceURI) {
      if (propertyObjectIdentifierContainer.namespaceURI === this.sourceSchemaNamespace)
        return (this.schemaFilepathMappings[index].targetSchemaFilepath
          + propertyObjectIdentifierContainer.localPart + '.json');
      else
        return (this.sourceSchemaBaseDirRelativeDepth
          + this.schemaFilepathMappings[index].targetSchemaFilepath
          + propertyObjectIdentifierContainer.localPart + '.json')
    };
  };

  throw 'object namespace was not matched for schema file destination';
}

SchemaGenerator.prototype.writeSchemaFile = function (schemaObject) {

  function dirPathExists(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true;
    }
    dirPathExists(dirName);
    fs.mkdirSync(dirName);
    return true;

    throw ("ERROR: Can not create dirPath: " + this.targetSchemaBaseDir + this.targetSchemaFileDestination);
  };

  console.log("writeSchemaFile");
  if (typeof schemaObject != "undefined") {
    var schemaBuffer = JSON.stringify(schemaObject, null, '  ');
    console.log('##output schema buffer string');
    console.log(schemaBuffer.toString());
    if (this.targetSchemaFileDestination.includes(".."))
      var relativeDestination = this.targetSchemaBaseDir + this.targetSchemaFileDestination.substring(this.targetSchemaFileDestination.lastIndexOf("../") + 3)
    else var relativeDestination = this.targetSchemaBaseDir + this.targetSchemaFileDestination;
    if (dirPathExists(relativeDestination)) {
      //console.log('##write schema document file to: ' + this.targetSchemaBaseDir 
      //  + this.targetSchemaFileDestination);
      console.log('##write schema document file to: ' + relativeDestination);
      //fs.writeFileSync(this.targetSchemaBaseDir + this.targetSchemaFileDestination, schemaBuffer);
      fs.writeFileSync(relativeDestination, schemaBuffer);
    };
  } else console.log("    WARNING: Nothing to write.  SchemaObject is undefined.");
}

SchemaGenerator.prototype.generateRemotePropertySchema = function (definitionObjectProperty) {
  console.log('###instantiating Remote Property Schema generation');
  var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemotePropertySchemaSourceFile(definitionObjectProperty);
  console.log('##remote object source schema file: ' + sourceSchemaFile);
  var sourceSchemaBuffer = readFile(sourceSchemaFile);
  var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  var ssg = new SchemaGenerator();
  ssg.schemaTemplateObjects = this.schemaTemplateObjects;
  ssg.targetSchemaBaseDir = this.targetSchemaBaseDir;
  ssg.targetSchemaBuildVersion = this.targetSchemaBuildVersion;
  ssg.schemaFilepathMappings = this.schemaFilepathMappings;
  ssg.sourceSchemaBaseDir = this.sourceSchemaBaseDir;
  ssg.sourceDocumentationBaseDir = this.sourceDocumentationBaseDir;
  ssg.setSourceSchemaNamespace(sourceSchemaObject);
  ssg.setSourceSchemaBaseDirRelativeDepth();
  ssg.substitutionMappings = this.substitutionMappings;
  ssg.loadDocumentationMap();
  ssg.generateObjectDefinitionSchema(sourceSchemaObject, definitionObjectProperty);
}

SchemaGenerator.prototype.generateSubstitutionObjectDefinitionSchema = function (sourceSchemaObject, definitionObject) {
  console.log("###generateSubstitutionObjectDefinitionSchema");
  //044 var properties = {};
  var schemaProperties = {};
  //var substitutions = this.getSubstitutionIdentifiers(this.getId(definitionPropertyContainer.properties[definitionObjectProperty]));
  var substitutionIdentifiers = this.getSubstitutionIdentifiers(this.getId(definitionObject));
  if (substitutionIdentifiers.length > 0) {
    var substitutionObjectName;

    substitutionIdentifiers.forEach(function (substitutionIdentifier) {
      substitutionObjectName = substitutionIdentifier.substring(substitutionIdentifier.lastIndexOf('#') + 1);
      if ((typeof sourceSchemaObject.definitions != "undefined")
        && (typeof sourceSchemaObject.definitions[substitutionObjectName] != "undefined"))
        //schemaObject.properties 
        //  = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[substitutionObjectName])
        //properties[substitutionObjectName] = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[substitutionObjectName])
        return (this.generateObjectDefinitionSchema(sourceSchemaObject, definitionObject));
      else {
        //properties[substitutionObjectName] = { "@ref$": substitution};
        /*
        properties = this.getRemoteDefinitionReference(definitionPropertyContainer.properties[definitionObjectProperty]);*/
        var remoteObject = this.getRemoteObject(substitutionIdentifier);
        //this.generateRemoteDefinitionObjectSchema(remoteDefinitionObject, substitutionObjectName);
        //?var remoteObjectSourceSchema = 
        //?generateRemoteDefinitionObjectSchema = function (anyOfObject, definitionObjectName)
        this.generateRemotePropertySchema(remoteObject);
        //return(this.getRemoteDefinitionReference(remoteDefinitionObject));
        //return(this.setPropertyTemplate(remoteObject));
        //044 properties[substitutionObjectName] = this.setPropertyTemplate(remoteObject);
        schemaProperties[substitutionObjectName] = { "$ref": this.getSchemaReference(remoteObject) };
      };
    }, this);

    //044return (properties);
    return(schemaProperties);
  };

}

SchemaGenerator.prototype.generateObjectDefinitionSchema = function (sourceSchemaObject, definitionObject) {
  console.log("###generate Object Definition Schema");
  if (typeof definitionObject != "undefined") {
    switch (this.getType(definitionObject)) {
      case 'array':
        var schemaObject = this.createSchemaTemplateObject('array-template');
        schemaObject.id = this.getId(definitionObject);
        schemaObject.title = this.getTitle(definitionObject);
        schemaObject.type = this.getType(definitionObject);
        //schemaObject.description = this.getDescription(schemaObject.title);
        schemaObject.description = this.getDescription(schemaObject.id);
        schemaObject.version = this.getVersion();
        //044 schemaObject.javaType = this.getJavaType(definitionObject);
        //TODO: schemaObject.minItems = this.getMinItems(definitionObject);
        //TODO: schemaObject.maxItems = this.getMaxItems(definitionObject);
        //TODO: schemaObject.additionalItems = this.getAdditionalItems(definitionObject);
        //TODO: schemaObject.uniqueItems = this.getUniqueItems(definitionObject);
        var definitionObjectName = this.getDefinitionReferenceName(definitionObject);
        switch (definitionObjectName) {
          case "anyType":
            console.log("##object definition is 'anyType'.");
            //044 var substitutions = this.getSubstitutionIdentifiers(schemaObject.id);
            schemaObject.items.push({ "type": "object" });
            break;
          case "DateTime":
            console.log("##object definition is 'DateTime'; type set to 'string', format 'date-time'.");
            schemaObject.items.push({ "type": "string", "format": "date-time" });
            break;
          case "Decimal":
          case "Integer":
            console.log("##object definition type set to 'number'.");
            schemaObject.items.push({ "type": "number" });
            break;
          case "String":
          case "token":
            console.log("##object definition type set to 'string'.");
            schemaObject.items.push({ "type": "string" });
            break;
          default:
            if ((typeof sourceSchemaObject.definitions != "undefined")
              && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
              schemaObject.items
                = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName])
            else {
//044              schemaObject.items = this.getRemoteDefinitionReference(definitionObject);
              schemaObject.items = { "$ref": this.getRemoteDefinitionFileLocation(definitionObject) };
              this.generateRemoteDefinitionObjectSchema(definitionObject, definitionObjectName);
            };
        };
        break;
      case 'object':
        var schemaObject = this.createSchemaTemplateObject('object-template');
        schemaObject.id = this.getId(definitionObject);
        schemaObject.title = this.getTitle(definitionObject);
        schemaObject.type = this.getType(definitionObject);
        schemaObject.description = this.getDescription(schemaObject.id);
        schemaObject.version = this.getVersion();
        schemaObject.javaType = this.getJavaType(definitionObject);
        var definitionObjectName;
        if (typeof definitionObject.allOf != "undefined") {

          definitionObject.allOf.forEach(function (definitionObject_allOfObject) {
            if (typeof schemaObject.properties.value == "undefined") {              
              definitionObjectName = this.getDefinitionReferenceName(definitionObject_allOfObject);
              //044 if (typeof definitionObjectName == "undefined") definitionObjectName = schemaObject.title;
              if (typeof definitionObjectName == "undefined")
                if ((typeof sourceSchemaObject.definitions != "undefined")
                  && (typeof sourceSchemaObject.definitions[schemaObject.title] != "undefined"))
                  //044 && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
                  schemaObject.properties
                    = this.getProperties(sourceSchemaObject, definitionObject_allOfObject)
                else {
                  //044 schemaObject.properties = this.getRemoteDefinitionReference(definitionObject_allOfObject);
                  //044 schemaObject.properties[definitionObjectName] = this.getRemoteDefinitionReference(definitionObject_allOfObject);
                  schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(definitionObject_allOfObject) };
                  this.generateRemoteDefinitionObjectSchema(definitionObject_allOfObject, definitionObjectName);
                }
              else {
                if (definitionObjectName != "anyType") {
                  switch (definitionObjectName) {
                    /*case "anyType":
                      console.log("##object definition is 'anyType'.");
                      var substitutions = this.getSubstitutionIdentifiers(schemaObject.id);
                      schemaObject.type = "object";
                      break;*/
                    case "DateTime":
                      console.log("##object definition is 'DateTime'; type set to 'string', format 'date-time'.");
                      schemaObject.type = "string";
                      schemaObject.format = "date-time";
                      break;
                    case "Decimal":
                    case "Integer":
                      console.log("##object definition type set to 'number'.");
                      schemaObject.type = "number";
                      break;
                    case "String":
                    case "token":
                      console.log("##object definition type set to 'string'.");
                      schemaObject.properties.value = { "type": "string" };
                      break;
                    /*default:
                      if ((typeof sourceSchemaObject.definitions != "undefined")
                        && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
                        //044 schemaObject.properties
                        schemaObject.properties[definitionObjectName]
                          = this.getProperties(sourceSchemaObject, definitionObject_allOfObject)
                      else {
                        //044 schemaObject.properties = this.getRemoteDefinitionReference(definitionObject_allOfObject);
                        schemaObject.properties[definitionObjectName] = this.getRemoteDefinitionReference(definitionObject_allOfObject);
                        this.generateRemoteDefinitionObjectSchema(definitionObject_allOfObject, definitionObjectName);
                      };*/
                  }
                } else {
                  console.log("##object definition is 'anyType'.");
                  var substitutions = this.getSubstitutionIdentifiers(this.getId(anyOfObject));
                  if (substitutions.length > 0) {

                    substitutions.forEach(function (substitution) {
                      if ((typeof sourceSchemaObject.definitions != "undefined")
                        && (typeof sourceSchemaObject.definitions[substitution] != "undefined"))
                        schemaObject.properties
                          = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[substitution])
                      else {
                        //044 schemaObject.properties = this.getRemoteDefinitionReference(anyOfObject);
                        schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(anyOfObject) };
                        this.generateRemoteDefinitionObjectSchema(anyOfObject, substitution);
                      };
                    }, this);

                  };
                }
              }
            }
          }, this);

        } else {
          definitionObjectName = this.getDefinitionReferenceName(definitionObject);
          if (typeof definitionObjectName == "undefined") definitionObjectName = schemaObject.title;
          switch (definitionObjectName) {
            case "anyType":
              console.log("##object definition is 'anyType'.");
              //044 var substitutions = this.getSubstitutionIdentifiers(schemaObject.id);
              schemaObject.type = "object";
              break;
            case "DateTime":
              console.log("##object definition is 'DateTime'; type set to 'string', format 'date-time'.");
              schemaObject.type = "string";
              schemaObject.format = "date-time";
              break;
            case "Decimal":
            case "Integer":
              console.log("##object definition type set to 'number'.");
              schemaObject.type = "number";
              break;
            case "String":
            case "token":
              console.log("##object definition type set to 'string'.");
              schemaObject.type = "string";
              break;
            default:
              if ((typeof sourceSchemaObject.definitions != "undefined")
                && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
                schemaObject.properties
                  = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName])
              else {
                //044 schemaObject.properties = this.getRemoteDefinitionReference(definitionObject);
                schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(definitionObject) };
                this.generateRemoteDefinitionObjectSchema(definitionObject, definitionObjectName);
              };
          }
        }
        break;
      default:
        throw ('ERROR: not sure how to generate an object for this definitionObject');
    };
    this.targetSchemaFileDestination = this.getSchemaFileDestination(definitionObject);
    this.writeSchemaFile(schemaObject);
  } else {
    throw ('definition object is undefined: ' + definitionObjectName);
  };

}

SchemaGenerator.prototype.generateRemoteDefinitionObjectSchema = function (anyOfObject, definitionObjectName) {
  console.log('###instantiating Remote Object Schema generation');
  var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemoteObjectSchemaSourceFile(anyOfObject);
  console.log('##remote object source schema file: ' + sourceSchemaFile);
  var sourceSchemaBuffer = readFile(sourceSchemaFile);
  var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  var ssg = new SchemaGenerator();
  ssg.schemaTemplateObjects = this.schemaTemplateObjects;
  ssg.targetSchemaBaseDir = this.targetSchemaBaseDir;
  ssg.targetSchemaBuildVersion = this.targetSchemaBuildVersion;
  ssg.schemaFilepathMappings = this.schemaFilepathMappings;
  ssg.sourceSchemaBaseDir = this.sourceSchemaBaseDir;
  ssg.sourceDocumentationBaseDir = this.sourceDocumentationBaseDir;
  ssg.setSourceSchemaNamespace(sourceSchemaObject);
  ssg.setSourceSchemaBaseDirRelativeDepth();
  ssg.substitutionMappings = this.substitutionMappings;
  ssg.loadDocumentationMap();
  ssg.generateObjectDefinitionSchema(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName]);
}

SchemaGenerator.prototype.setPropertyTemplate = function (objectProperty) {

  function getPropertyTemplateType(objectProperty) {
    console.log("####getting PropertyTemplateType");
    console.log("####Is objectProperty type defined?");
    if (typeof objectProperty.allOf != "undefined") {
      if (typeof objectProperty.allOf[0].type != "undefined") {
        console.log("#####objectPropertyAllOfType: " + objectProperty.allOf[0].type);
        switch (objectProperty.allOf[0].type) {
          case "array": return ("array")
          case "object": return ("object")
          default: return ("not applicable")
        };
      };
    } else {
      if (typeof objectProperty.elementName != "undefined") {
        return ("object")
      } else {
        if ((typeof objectProperty.attributeName != "undefined")
          || (objectProperty.title == "value")) return ("primitive")
      };
    };
  }

  var propertyObjectName = this.getTitle(objectProperty);
  var propertyTemplateType = getPropertyTemplateType(objectProperty);
  var propertyTemplate;
  switch (propertyTemplateType) {
    case 'array':
      propertyTemplate = this.setPropertyArrayTemplate(objectProperty);
      //return([propertyObjectName] = propertyTemplate);
      if (typeof objectProperty.elementName != 'undefined')
        if (objectProperty.elementName.namespaceURI != this.sourceSchemaNamespace) this.generateRemotePropertySchema(objectProperty);
      break;
    case 'object':
      propertyTemplate = this.setPropertyObjectTemplate(objectProperty);
      //return([propertyObjectName] = propertyTemplate);
      //return({[propertyObjectName]: propertyTemplate};
      break;
    case 'primitive':
      propertyTemplate = this.setPropertyPrimitiveTemplate(objectProperty);
      //return({[propertyObjectName]: propertyTemplate});
      break;
    default:
      throw ("##### ERROR: PropertyTemplateType for " + objectProperty + " was not handled.")
  };
  //return({[propertyObjectName]: propertyTemplate});
  return (propertyTemplate);
}

SchemaGenerator.prototype.getPropertyObjectIdentifierContainer = function (propertyObject) {
  console.log('##getPropertyObjectIdentifierContainer');
  if (typeof propertyObject.typeName != "undefined")
    var propertyObjectIdentifierContainer = propertyObject.typeName
  else
    if (typeof propertyObject.elementName != "undefined")
      var propertyObjectIdentifierContainer = propertyObject.elementName
    else
      if (typeof propertyObject.attributeName != "undefined")
        var propertyObjectIdentifierContainer = propertyObject.attributeName;
  return (propertyObjectIdentifierContainer);
}
/* generate { */
SchemaGenerator.prototype.getId = function (propertyObject) {
  console.log('##get id from Property Object');
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(propertyObject);
  if (typeof propertyObjectIdentifierContainer != 'undefined')
    var id = propertyObjectIdentifierContainer.namespaceURI + '#' + propertyObjectIdentifierContainer.localPart
  else
    if (typeof propertyObject.title != "undefined")
      var id = propertyObject.title
    else
      throw ("ERROR: trouble determining Property Object identifier");
  console.log('##id: ' + id);
  return (id);
}

SchemaGenerator.prototype.getTitle = function (propertyObject) {
  console.log('##get title from Property Object');
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(propertyObject);
  if (typeof propertyObjectIdentifierContainer != 'undefined')
    var title = propertyObjectIdentifierContainer.localPart
  else
    if (typeof propertyObject.title != "undefined")
      var title = propertyObject.title
    else
      throw ("ERROR: trouble determining Property Object title or name");
  console.log('##title: ' + title);
  return (title);
}

SchemaGenerator.prototype.getType = function (propertyObject) {
  var propertyObjectType;
  if (typeof propertyObject.type != 'undefined')
    propertyObjectType = propertyObject.type
  else
    if (typeof propertyObject.allOf != 'undefined') {
      if (typeof propertyObject.allOf[0].type != 'undefined')
        propertyObjectType = propertyObject.allOf[0].type
      else
        if (typeof propertyObject.allOf[1].type != 'undefined')
          propertyObjectType = propertyObject.allOf[1].type
        else throw ("ERROR: having trouble getting propertyObject type from allOf array.")
    } else {
      throw ("ERROR: having trouble getting propertyObject type. ")
    }
  console.log('##type: ' + propertyObjectType);
  return (propertyObjectType);
}

SchemaGenerator.prototype.getRemoteDescription = function(propertyObjectIdentifier) {
    console.log("####getRemoteDescription: " + propertyObjectIdentifier);
    propertyObjectNamespace = propertyObjectIdentifier.substring(0, propertyObjectIdentifier.indexOf('#'));

    for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
      if (this.schemaFilepathMappings[index].namespace === propertyObjectNamespace) { 
        if ( this.schemaFilepathMappings[index].sourceDocumentationFilename !== "" ) {
          console.log("DocumentationMap file: " + "../" + this.sourceDocumentationBaseDir + this.schemaFilepathMappings[index].sourceDocumentationFilepath + this.schemaFilepathMappings[index].sourceDocumentationFilename);
          var sourceDocumentationBuffer = readFile(this.sourceDocumentationBaseDir + this.schemaFilepathMappings[index].sourceDocumentationFilepath + this.schemaFilepathMappings[index].sourceDocumentationFilename);
          var namespaceSourceDocumentation = JSON.parse(sourceDocumentationBuffer);
          break;
        } else {
          throw("WARNING: Namespace match found but sourceDocumentationFilename not set.");
        };
      };
    };

    if ( typeof namespaceSourceDocumentation != "undefined" ) {
      var propertyObjectName = propertyObjectIdentifier.substring(propertyObjectIdentifier.lastIndexOf('#') + 1);
      if ( typeof namespaceSourceDocumentation.components[propertyObjectName] != "undefined" )
        return(namespaceSourceDocumentation.components[propertyObjectName].documentation)
      else throw("ERROR: propertyObjectName unmatched: " + propertyObjectName);
    } else throw("ERROR: namespaceSourceDocumentation unmatched: " + propertyObjectNamespace);
  }

//SchemaGenerator.prototype.getDescription = function (schemaObjectTitle) {
SchemaGenerator.prototype.getDescription = function (propertyObjectIdentifier) {

  var propertyObjectName = propertyObjectIdentifier.substring(propertyObjectIdentifier.lastIndexOf('#') + 1);
  //if (typeof this.sourceDocumentation.components[schemaObjectTitle] != "undefined")
  if (typeof this.sourceDocumentation.components[propertyObjectName] != "undefined")
    //var description = this.sourceDocumentation.components[schemaObjectTitle].documentation.join("  ")
    var description = this.sourceDocumentation.components[propertyObjectName].documentation.join("  ")
  else {
    var description = this.getRemoteDescription(propertyObjectIdentifier).join("  ");
  }
  console.log('##description: ' + description)
  return (description);
}

SchemaGenerator.prototype.getVersion = function () {
  console.log('##version: ' + this.targetSchemaBuildVersion);
  return (this.targetSchemaBuildVersion);
}

SchemaGenerator.prototype.getJavaType = function (propertyObject) {
  console.log('##get javaType from Property Object');
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(propertyObject);
  //var javaType = propertyObjectIdentifierContainer.namespaceURI.replace(/[:\/\.-]/g, '_')
  //044 var javaType = propertyObjectIdentifierContainer.localPart.replace(/[:\/\.-]/g, '_');
  var javaTypeSchemaFileDestination = String(String(this.getSchemaFileDestination(propertyObject)).replace(/[\/\.-]/g, '_'));
  var javaType = javaTypeSchemaFileDestination.substring(0, javaTypeSchemaFileDestination.lastIndexOf('_'));
  console.log("##javaType: " + javaType);
  return(javaType);
}

SchemaGenerator.prototype.getProperties = function (sourceSchemaObject, definitionObject) {

  function getDefinitionPropertyContainer(definitionObject) {
    console.log('##get definitionPropertyContainer');
    var definitionPropertyContainer;
    if (typeof definitionObject.allOf != "undefined") {
      definitionPropertyContainer = definitionObject.allOf[1]
    } else { definitionPropertyContainer = definitionObject };
    return (definitionPropertyContainer);
  }
  /* following may be deprecated by this.setPropertyTemplate() { */
  function getPropertyTemplateType(definitionObjectProperty) {
    console.log('####getting PropertyTemplateType for: ' + definitionObjectProperty.title);
    console.log('####Is definitionObjectProperty type defined?');
    if (typeof definitionObjectProperty.allOf[0].type != "undefined") {
      console.log('#####definitionObjectPropertyAllOfType: ' + definitionObjectProperty.allOf[0].type);
      switch (definitionObjectProperty.allOf[0].type) {
        case "array": return ("array")
        case "object": return ("object")
        default: return ('not applicable')
      };
    } else {
      if (typeof definitionObjectProperty.elementName != "undefined") {
        return ('object')
      } else {
        if ((typeof definitionObjectProperty.attributeName != "undefined")
          || (definitionObjectProperty.title == "value")) return ('primitive')
      };
    };
  }
  /* above may be deprecated by this.setPropertyTemplate() } */

  var schemaProperties = {};
  /*function schemaObjects () {
    var schemaObjects = [];
    return {
      pushSchemaObject: function (schemaObject) {
        schemaObjects.push(schemaObject);
      },
      getSchemaObjects: function () {
        return schemaObjects;
      }
    }
  };*/
  //044 var propertyTemplate;
  var definitionPropertyContainer = getDefinitionPropertyContainer(definitionObject);
  console.log('##get properties for definitionPropertyContainer: ' + definitionPropertyContainer.title);
  //044 var propertyTemplateType;
  //044 var propertyTitle;

  for (var definitionObjectProperty in definitionPropertyContainer.properties) {
    console.log('####definitionObjectProperty: ' + definitionObjectProperty);
    if (definitionPropertyContainer.properties[definitionObjectProperty].title != "otherAttributes") {
      //var propertyObjectName = this.getDefinitionReferenceName(definitionPropertyContainer.properties[definitionObjectProperty]);
      var propertyObjectReferenceName = this.getDefinitionReferenceName(definitionPropertyContainer.properties[definitionObjectProperty]);
      //if ( typeof propertyObjectName == "undefined" ) 
      var propertyObjectName = this.getTitle(definitionPropertyContainer.properties[definitionObjectProperty]);
      //if ( propertyObjectName != "anyType") {
      if (propertyObjectReferenceName != "anyType") {
        /* following may be deprecated by this.setPropertyTemplate() { */
        var propertyTemplateType = getPropertyTemplateType(definitionPropertyContainer.properties[definitionObjectProperty]);
        switch (propertyTemplateType) {
          case 'array':
            if (typeof definitionPropertyContainer.properties[definitionObjectProperty].elementName != 'undefined')
              if (definitionPropertyContainer.properties[definitionObjectProperty].elementName.namespaceURI == this.sourceSchemaNamespace) {
                this.generateObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainer.properties[definitionObjectProperty]);
                /*if (definitionObjectNamespace === this.sourceSchemaNamespace) {
                  schemaPropertyArrayTemplate.items.$ref = definitionObjectProperty.elementName.localPart + '.json'
                } else {
                  schemaPropertyArrayTemplate.items.$ref = this.getSchemaFileDestination(definitionObjectProperty);
                };*/
                //g schemaProperties[propertyObjectName] = { "$ref": this.getSchemaFileDestination(definitionPropertyContainer.properties[definitionObjectProperty]) } ;
                //var propertyTemplate = this.setPropertyObjectTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
                schemaProperties[propertyObjectName] = { "$ref": this.getSchemaReference(definitionPropertyContainer.properties[definitionObjectProperty]) };
              } else
                this.generateRemotePropertySchema(definitionPropertyContainer.properties[definitionObjectProperty]);
              /*if (typeof sourceSchemaObject.definitions != "undefined") {
                if ((typeof sourceSchemaObject.definitions[definitionObjectProperty] != "undefined")
                  || (typeof sourceSchemaObject.definitions[definitionObjectProperty] != "undefined"))
                  this.generateObjectDefinitionSchema(sourceSchemaObject, definitionObject)
              } else {
                  var remoteObject = this.getRemoteObject(this.getId(definitionPropertyContainer.properties[definitionObjectProperty]));
                  this.generateRemotePropertySchema(remoteObject);
                }*/
              //044 var propertyTemplate = this.setPropertyArrayTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
              //044 properties[propertyObjectName] = propertyTemplate;
              //044 schemaProperties[propertyTemplate.title] = propertyTemplate;
              //g var schemaItems = schemaObjects ();
              //g schemaItems.pushSchemaObject(propertyTemplate);
              //g properties = [propertyTemplate];
              //if (typeof definitionPropertyContainer.properties[definitionObjectProperty].elementName != 'undefined')
              //  if (definitionPropertyContainer.properties[definitionObjectProperty].elementName.namespaceURI != this.sourceSchemaNamespace) this.generateRemotePropertySchema(definitionPropertyContainer.properties[definitionObjectProperty]);
              break;
          case 'object':
            if ((typeof sourceSchemaObject.definitions != "undefined")
              && (typeof sourceSchemaObject.definitions[definitionObjectProperty] != "undefined"))
              this.generateObjectDefinitionSchema(sourceSchemaObject, definitionObject)
            else {
              var remoteObject = this.getRemoteObject(this.getId(definitionPropertyContainer.properties[definitionObjectProperty]));
              this.generateRemotePropertySchema(remoteObject);
            }
            /*044
            var propertyTemplate = this.setPropertyObjectTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
            schemaProperties[propertyObjectName] = propertyTemplate;*/
            schemaProperties[propertyObjectName] = { "$ref": this.getSchemaReference(definitionPropertyContainer.properties[definitionObjectProperty]) };
            break;
          case 'primitive':
            var propertyTemplate = this.setPropertyPrimitiveTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
            schemaProperties[propertyObjectName] = propertyTemplate;
            break;
          default:
            throw ('##### ERROR: PropertyTemplateType for ' + definitionObjectProperty + ' was not handled.')
        } /* above may be deprecated by this.setPropertyTemplate() } */
      } else {
        console.log("##object definition is 'anyType'.");
        var substitutionObjectDefinition =
          this.generateSubstitutionObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainer.properties[definitionObjectProperty]);
        if (typeof substitutionObjectDefinition != "undefined")
          schemaProperties[propertyObjectName] = substitutionObjectDefinition;
      }
    }
  }

  //var properties = schemaObjects.getSchemaObjects();
  /*if (Array.isArray(properties))
    if (properties.length > 0) 
      return (properties)
  else {
    if ((typeof properties === "object") && (properties !== null))*/
      if (Object.keys(schemaProperties).length > 0) 
        return (schemaProperties)
    else return (this.setPropertyPrimitiveTemplate(definitionObject));
  //}
}

SchemaGenerator.prototype.getRequired = function (sourceSchemaObject) {
  var requiredList = [];
  console.log('##get required');

  for (var definition in sourceSchemaObject.definitions) {
    console.log('##definition: ' + definition);

    for (var requiredKey in sourceSchemaObject.definitions[definition]) {
      console.log('##requiredKey: ' + requiredKey);

      if (requiredKey == 'required') {
        console.log('###found required object: ' + sourceSchemaObject.definitions[definition][requiredKey]);
        requiredList.push(sourceSchemaObject.definitions[definition][requiredKey].toString());
      }
    }

  }

  return (requiredList);
}

SchemaGenerator.prototype.generateObjectSchema = function (sourceSchemaObject) {
  console.log("###generate Object Schema");
  var definitionObjectName;
  if (typeof sourceSchemaObject.anyOf != "undefined") {

    sourceSchemaObject.anyOf.forEach(function (anyOfObject) {
      definitionObjectName = this.getDefinitionReferenceName(anyOfObject);
      if (typeof definitionObjectName == "undefined")
        //definitionObjectName = this.getTitle;
        definitionObjectName = this.getTitle(anyOfObject);
      if (definitionObjectName != "anyType") {
        switch (this.getType(anyOfObject)) {
          case 'array':
            throw ("To-Do: generateObjectSchema as array");
          case 'object':
            var schemaObject = this.createSchemaTemplateObject('object-template');
            schemaObject.id = this.getId(anyOfObject);
            schemaObject.title = this.getTitle(anyOfObject);
            schemaObject.type = this.getType(anyOfObject);
            //schemaObject.description = this.getDescription(schemaObject.title);
            schemaObject.description = this.getDescription(schemaObject.id);
            schemaObject.version = this.getVersion();
            schemaObject.javaType = this.getJavaType(anyOfObject);
            /*var definitionObjectName = this.getDefinitionReferenceName(anyOfObject);
            if ( typeof definitionObjectName == "undefined")
              definitionObjectName = schemaObject.title;*/
            switch (definitionObjectName) {
              /*case "anyType":
                console.log("##object definition is 'anyType'.");
                var substitutions = this.getSubstitutionIdentifiers(schemaObject.id);
                if ( substitutions.length > 0 ) {
                  schemaObject.type = "object";
                };
                break;*/
              case "AnyURI" : 
                 console.log("##object definition is 'anyURI'; type set to 'string', format 'uri'.");
                schemaObject.type = "string";
                schemaObject.format = "uri";
              case "DateTime":
                console.log("##object definition is 'DateTime'; type set to 'string', format 'date-time'.");
                schemaObject.type = "string";
                schemaObject.format = "date-time";
                break;
              case "Decimal":
              case "Integer":
                console.log("##object definition type set to 'number'.");
                schemaObject.type = "number";
                break;
              case "String":
              case "token":
                console.log("##object definition type set to 'string'.");
                schemaObject.type = "string";
                break;
              default:
                if ((typeof sourceSchemaObject.definitions != "undefined")
                  && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
                  /*schemaObject.properties 
                    = this.getProperties(sourceSchemaObject.definitions[definitionObjectName]) */
                  schemaObject.properties
                    = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName])
                else {
                  //044 schemaObject.properties = this.getRemoteDefinitionReference(anyOfObject);
                  schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(anyOfObject) };
                  this.generateRemoteDefinitionObjectSchema(anyOfObject, definitionObjectName);
                };
            };
            break;
          default:
            throw ('ERROR: not sure how to generate an object for this anyOf object type: '
              + this.getType(anyOfObject));
        };
      } else {
        console.log("##object definition is 'anyType'.");
        var substitutions = this.getSubstitutionIdentifiers(this.getId(anyOfObject));
        if (substitutions.length > 0) {

          substitutions.forEach(function (substitution) {
              substitutionObjectName = substitution.substring(substitution.lastIndexOf('#') + 1);
              if ((typeof sourceSchemaObject.definitions != "undefined")
                && (typeof sourceSchemaObject.definitions[substitutionObjectName] != "undefined"))
                //schemaObject.properties 
                //  = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[substitution])
                this.generateObjectDefinitionSchema(sourceSchemaObject.definitions[substitutionObjectName]);
              else {
                //044 schemaObject.properties = this.getRemoteDefinitionReference(sourceSchemaObject.definitions[substitutionObjectName]);
                var remoteObject = this.getRemoteObject(substitution);
                //044 g schemaObject.properties[substitutionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(sourceSchemaObject.definitions[substitutionObjectName]) };
                //g schemaObject.properties[substitutionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(remoteObject) };
                //044this.generateRemoteDefinitionObjectSchema(sourceSchemaObject.definitions[substitutionObjectName], substitutionObjectName);
                this.generateRemotePropertySchema(remoteObject);
              }
          }, this);

        };
      }
      this.targetSchemaFileDestination = this.getSchemaFileDestination(anyOfObject);
      this.writeSchemaFile(schemaObject);
    }, this);

  };

}
/* generate } */
module.exports = SchemaGenerator;