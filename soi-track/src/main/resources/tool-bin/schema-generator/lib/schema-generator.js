var fs = require('fs')
  , path = require('path');

function readFile(file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  //console.log('##output file buffer string');
  //console.log(fileBuffer.toString());
  return (fileBuffer);
}

var GeneratedSchema = { 
  identifiers: [],
  logIdentifierList: function () { 
    //this.identifiers.sort();
    console.log("Generated schema identifiers:");

    this.identifiers.forEach(function (identifier) {
      console.log(identifier)
    });

    console.log("count: " + this.identifiers.length);
  }
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
  //046a this.targetSchemaFileDestination;
  this.targetSchemaBuildVersion;
  this.defaultPrimitiveFacets;
  this.w3cXmlTypeSchema;
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
  let sourceSchemaFilepath;

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].namespace === this.sourceSchemaNamespace)
      sourceSchemaFilepath = this.schemaFilepathMappings[index].targetSchemaFilepath
  };

  if (typeof sourceSchemaFilepath !== 'undefined') {
    console.log('setting Source Schema Base Dir Relative Depth');
    this.sourceSchemaBaseDirRelativeDepth = '';
    var sourceSchemaBaseDirRelativeDepthCount = sourceSchemaFilepath.split('/').length;

    for (var index = 1; index < sourceSchemaBaseDirRelativeDepthCount; index++) {
      this.sourceSchemaBaseDirRelativeDepth = this.sourceSchemaBaseDirRelativeDepth + '../'
    };

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

SchemaGenerator.prototype.getObjectPropertyNamespaceURI = function (objectProperty) {
  var objectPropertyNamespaceURI;
  /*045 if (typeof objectProperty.$ref != "undefined")
    return(objectProperty.$ref.substring(0, objectProperty.$ref.indexOf('#')))
  else*/
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(objectProperty);
    //045 var definitionObjectNamespace = definitionObjectProperty.elementName.namespaceURI;
  if (typeof propertyObjectIdentifierContainer != 'undefined')
    if (typeof propertyObjectIdentifierContainer.namespaceURI != 'undefined')
      objectPropertyNamespaceURI = propertyObjectIdentifierContainer.namespaceURI;
  //045 return(propertyObjectIdentifierContainer.namespaceURI);
    else
      if (typeof propertyObjectIdentifierContainer.$ref != 'undefined')
        objectPropertyNamespaceURI = propertyObjectIdentifierContainer.$ref.substring(0, propertyObjectIdentifierContainer.$ref.indexOf('#'));
  else
      throw ("ERROR: trouble determining objectPropertyNamespaceURI");
  console.log('##objectPropertyNamespaceURI: ' + objectPropertyNamespaceURI);
  return (objectPropertyNamespaceURI);
}

SchemaGenerator.prototype.getSchemaReference = function (definitionObjectProperty) {
  var propertyNamespace = this.getObjectPropertyNamespaceURI(definitionObjectProperty);
    //045 if (typeof definitionObjectProperty.elementName != 'undefined')
      //045 var definitionObjectNamespace = definitionObjectProperty.elementName.namespaceURI;
  if (typeof propertyNamespace != "undefined")
    //045 if (definitionObjectNamespace === this.sourceSchemaNamespace)
    if (propertyNamespace === this.sourceSchemaNamespace)
      return(definitionObjectProperty.elementName.localPart + '.json')
    else
      return(this.getSchemaFileDestination(definitionObjectProperty));
    //045 }
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
  let defaultPrimitiveFacets = this.defaultPrimitiveFacets;

  function getAnyDefaultFacets(propertyPrimitiveTemplate) {
    var anyDefaultFacets = [];
    var propertyPrimitiveType;
    if (Array.isArray(propertyPrimitiveTemplate.type))
      propertyPrimitiveType = propertyPrimitiveTemplate.type[0]
    else propertyPrimitiveType = propertyPrimitiveTemplate.type;
    if (typeof defaultPrimitiveFacets[propertyPrimitiveType] != "undefined")

      for (var facet in defaultPrimitiveFacets[propertyPrimitiveType]) {
        if (typeof defaultPrimitiveFacets[propertyPrimitiveType[facet]] == "undefined")
          anyDefaultFacets.push({ [facet]: defaultPrimitiveFacets[propertyPrimitiveType][facet] })
      }

    else console.log("Primitive default facets not defined for: " + propertyPrimitiveType);
    return(anyDefaultFacets);
  };

  //045 var schemaPropertyPrimitiveTemplate = this.createSchemaTemplateObject('property-primitive-template');
  var propertyPrimitiveTemplate = {};
  //044 schemaPropertyPrimitiveTemplate.type = "string";
  //if (typeof definitionObjectProperty.attributeName != "undefined") {
    //console.log("####setPropertyPrimitiveTemplate to default: " + JSON.stringify(this.defaultPrimitiveFacets.stringFacets));
    //schemaPropertyPrimitiveTemplate = this.defaultPrimitiveFacets.stringFacets;
  var definitionReferenceName = this.getDefinitionReferenceName(definitionObjectProperty);
  if (typeof definitionReferenceName != "undefined") {
    var w3cXmlTypeSchemaDefinition = {};
    if (typeof this.w3cXmlTypeSchema.definitions[definitionReferenceName] != "undefined") 
      w3cXmlTypeSchemaDefinition = this.w3cXmlTypeSchema.definitions[definitionReferenceName]
    else
      //if (typeof this.w3cXmlTypeSchema.definitions[primitiveType.toLowerCase()] != "undefined")
      if (typeof this.w3cXmlTypeSchema.definitions[definitionReferenceName.charAt(0).toLowerCase() + definitionReferenceName.slice(1)] != "undefined")
        //w3cXmlTypeSchemaDefinition = this.w3cXmlTypeSchema.definitions[primitiveType.toLowerCase()];
        w3cXmlTypeSchemaDefinition = this.w3cXmlTypeSchema.definitions[definitionReferenceName.charAt(0).toLowerCase() + definitionReferenceName.slice(1)];
      /* 046b else
        var remoteDefinitionObject = this.getRemoteDefinitionObject(this.getId(definitionObjectProperty));
        this.generateComponentSchema(remoteDefinitionObject);
        schemaPropertyPrimitiveTemplate = { "$ref": this.getSchemaReference(definitionObjectProperty) } ;
        046b */
    /* if (typeof this.w3cXmlTypeSchema.definitions[primitiveType] != "undefined") {
      if (typeof this.w3cXmlTypeSchema.definitions[primitiveType].type != "undefined")
        schemaPropertyPrimitiveTemplate.type = this.w3cXmlTypeSchema.definitions[primitiveType].type
      else
        if (typeof this.w3cXmlTypeSchema.definitions[primitiveType].anyOf != "undefined")
          if (typeof this.w3cXmlTypeSchema.definitions[primitiveType].anyOf[0].type != "undefined") 
            if (this.w3cXmlTypeSchema.definitions[primitiveType].anyOf[0].type == "array")
              schemaPropertyPrimitiveTemplate = this.w3cXmlTypeSchema.definitions[primitiveType].anyOf[0];
            else {
              schemaPropertyPrimitiveTemplate.type = [];

              this.w3cXmlTypeSchema.definitions[primitiveType].anyOf.forEach(function (typeItem) {
                schemaPropertyPrimitiveTemplate.type.push(typeItem.type)
              });

    };*/
    if ((typeof w3cXmlTypeSchemaDefinition != "undefined") || (w3cXmlTypeSchemaDefinition != "")) {
      if (typeof w3cXmlTypeSchemaDefinition.type != "undefined")
        propertyPrimitiveTemplate.type = w3cXmlTypeSchemaDefinition.type
      else
        if (typeof w3cXmlTypeSchemaDefinition.anyOf != "undefined")
          /* 046c if (typeof w3cXmlTypeSchemaDefinition.anyOf[0].type != "undefined") 
            if (w3cXmlTypeSchemaDefinition.anyOf[0].type == "array")
              propertyPrimitiveTemplate = w3cXmlTypeSchemaDefinition.anyOf[0];
            else {
              propertyPrimitiveTemplate.type = [];

              w3cXmlTypeSchemaDefinition.anyOf.forEach(function (typeItem) {
                propertyPrimitiveTemplate.type.push(typeItem.type)
              });

        }; 046c */

          w3cXmlTypeSchemaDefinition.anyOf.forEach(function (w3cXmlTypeSchemaDefinitionAnyOfItem) {
            if (typeof w3cXmlTypeSchemaDefinitionAnyOfItem.type != "undefined")
              if (typeof propertyPrimitiveTemplate.type == "undefined")
                if (w3cXmlTypeSchemaDefinitionAnyOfItem.type == "array")
                  propertyPrimitiveTemplate = w3cXmlTypeSchemaDefinitionAnyOfItem              
              else
                propertyPrimitiveTemplate.type = [];
              if (typeof propertyPrimitiveTemplate.type != "undefined") {
                if (propertyPrimitiveTemplate.type == "array")
                  console.log("  INFO: anyOf type ignored: " + w3cXmlTypeSchemaDefinitionAnyOfItem)             
              else
                propertyPrimitiveTemplate.type.push(w3cXmlTypeSchemaDefinitionAnyOfItem.type); 
              }
          })

      /*046c var anyDefaultFacets = getAnyDefaultFacets(propertyPrimitiveTemplate);

      anyDefaultFacets.forEach( function (facet) {
        propertyPrimitiveTemplate = Object.assign(propertyPrimitiveTemplate, facet);
      });
046c */
    }
    else
      throw("w3cXmlTypeSchema.definition not found for: " + definitionReferenceName);
  } else {
    if (typeof definitionObjectProperty.type != "undefined")
      propertyPrimitiveTemplate.type = definitionObjectProperty.type
    else 
      propertyPrimitiveTemplate.type = "string";
    if (typeof definitionObjectProperty.enum != "undefined") 
      propertyPrimitiveTemplate.enum = definitionObjectProperty.enum;
  };
  var anyDefaultFacets = getAnyDefaultFacets(propertyPrimitiveTemplate);

  anyDefaultFacets.forEach( function (facet) {
    propertyPrimitiveTemplate = Object.assign(propertyPrimitiveTemplate, facet);
  });

  return (propertyPrimitiveTemplate);
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
    console.log("    WARNING: Substitution is missing, which is acceptable when there simply is none.");
  return (substitutionIdentifiers);
}

SchemaGenerator.prototype.isAnyTypeSubstitution = function (definitionObjectProperty) {
  var isAnyTypeSubstitution = false;
  if (typeof definitionObjectProperty.allOf != "undefined") {

    definitionObjectProperty.allOf.some( function (definitionObjectPropertyItemAllOfItem) {
      if ((typeof definitionObjectPropertyItemAllOfItem.items != "undefined") && ( this.getDefinitionReferenceName(definitionObjectPropertyItemAllOfItem.items) == "anyType")) {
        isAnyTypeSubstitution = true;
        return(true);
      }
    }, this);

  } else 
    if (typeof definitionObjectProperty.$ref != "undefined")
      if (this.getDefinitionReferenceName(definitionObjectProperty) == "anyType")
        isAnyTypeSubstitution = true;
  return(isAnyTypeSubstitution);
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

//046 SchemaGenerator.prototype.getRemoteObject = function (definitionObjectIdentifier) {
SchemaGenerator.prototype.getRemoteDefinitionObject = function (definitionObjectIdentifier) {
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

SchemaGenerator.prototype.getRemoteDefinitionNamespace = function (definitionObject) {
  console.log("###getRemoteDefinitionNamespace");
  var definitionReference;
  if (Object.getOwnPropertyNames(definitionObject).length > 0) {
    var definitionReferenceContainer = this.getDefinitionReferenceContainer(definitionObject);
    if (typeof definitionReferenceContainer != "undefined")
      if (typeof definitionReferenceContainer.$ref != "undefined") 
        definitionReference = definitionReferenceContainer.$ref;
  } else 
    definitionReference = definitionObject;
/*045 if (typeof definitionReferenceContainer != "undefined") {
  console.log('##get namespace from remote anyOf object property definition reference: '
    + definitionReferenceContainer.$ref);
  var remoteDefinitionNamespace = definitionReferenceContainer.$ref.substring(0, definitionReferenceContainer.$ref.indexOf('#'));
  */
  if (typeof definitionReference != "undefined") {
    console.log("###getRemoteDefinitionNamespace from: " + definitionReference);
    var remoteDefinitionNamespace = definitionReference.substring(0, definitionReference.indexOf('#'));
    if (remoteDefinitionNamespace == "") 
      remoteDefinitionNamespace = '#';
    console.log("remoteDefinitionNamespace: " + remoteDefinitionNamespace);
    return (remoteDefinitionNamespace);
  } else
    throw("ERROR: ###unable to getRemoteDefinitionNamespace");
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
      if ((typeof definitionObjectContainer.value != "undefined") && (typeof definitionObjectContainer.value.$ref != "undefined"))
         definitionReferenceContainer = definitionObjectContainer.value
      else
        if ( typeof definitionObjectContainer.$ref != "undefined" )
          definitionReferenceContainer = definitionObjectContainer
        //046c else throw "trouble locating definitionReferenceContainer"
    }
  };
  if (typeof definitionReferenceContainer != "undefined")
    console.log('##DefinitionReference: ' + definitionReferenceContainer.$ref)
  else console.log("##DefinitionReference is undefined.");
  return (definitionReferenceContainer);
}

SchemaGenerator.prototype.getDefinitionReferenceName = function (definitionObjectContainer) {
  var definitionReferenceContainer;
  if (typeof definitionObjectContainer.$ref == "undefined")
    definitionReferenceContainer = this.getDefinitionReferenceContainer(definitionObjectContainer);
  else definitionReferenceContainer = definitionObjectContainer;
  if (typeof definitionReferenceContainer != "undefined") {
    //046d return (definitionReferenceContainer.$ref.substring(definitionReferenceContainer.$ref.lastIndexOf('/') + 1))
    var definitionReferenceName = definitionReferenceContainer.$ref.substring(definitionReferenceContainer.$ref.lastIndexOf('/') + 1);
    return (definitionReferenceName.substring(definitionReferenceName.lastIndexOf('#') + 1));
  } else return;
}

SchemaGenerator.prototype.getRemotePropertySchemaSourceFile = function (definitionObjectProperty) {
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(definitionObjectProperty);
  var definitionObjectPropertyNamespace;
  //var definitionObjectPropertyNamespace = definitionObjectProperty.elementName.namespaceURI;
  if (typeof propertyObjectIdentifierContainer != 'undefined')
    if (typeof propertyObjectIdentifierContainer.namespaceURI != 'undefined')
      definitionObjectPropertyNamespace = propertyObjectIdentifierContainer.namespaceURI;
    else
      if (typeof propertyObjectIdentifierContainer.$ref != 'undefined')
        definitionObjectPropertyNamespace = this.getRemoteDefinitionNamespace(propertyObjectIdentifierContainer.$ref);
  else
    throw ("ERROR: trouble determining Property Object title or name");
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
  var propertyNamespace = this.getObjectPropertyNamespaceURI(PropertyContainer);
  var propertyName = this.getTitle(PropertyContainer);
  //045 var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(PropertyContainer);
  //045 console.log("###get schema file destination from object namespace match: " + propertyObjectIdentifierContainer.namespaceURI);
  console.log("###get schema file destination from object namespace match: " + propertyNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    //045 if (this.schemaFilepathMappings[index].namespace === propertyObjectIdentifierContainer.namespaceURI) {
      //045 if (propertyObjectIdentifierContainer.namespaceURI === this.sourceSchemaNamespace)
    if (this.schemaFilepathMappings[index].namespace === propertyNamespace) {
      if (this.sourceSchemaNamespace === propertyNamespace)
        //045 return (this.schemaFilepathMappings[index].targetSchemaFilepath + propertyObjectIdentifierContainer.localPart + '.json');
        return (this.schemaFilepathMappings[index].targetSchemaFilepath + propertyName + '.json');
      else
        //045 return (this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + propertyObjectIdentifierContainer.localPart + '.json')
        return (this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + propertyName + '.json')
    };
  };

  throw 'object namespace was not matched for schema file destination';
}

SchemaGenerator.prototype.writeSchemaFile = function (schemaObject, schemaFileDestination) {

  function dirPathExists(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true;
    }
    dirPathExists(dirName);
    fs.mkdirSync(dirName);
    return true;

    throw ("ERROR: Can not create dirPath: " + schemaBaseDir + schemaFileDestination);
  };

  console.log("writeSchemaFile");
  if (typeof schemaObject != "undefined") {
    var schemaBuffer = JSON.stringify(schemaObject, null, '  ');
    console.log('##output schema buffer string');
    console.log(schemaBuffer.toString());
    if (schemaFileDestination.includes(".."))
      var relativeDestination = this.targetSchemaBaseDir + schemaFileDestination.substring(schemaFileDestination.lastIndexOf("../") + 3)
    else var relativeDestination = this.targetSchemaBaseDir + schemaFileDestination;
    if (dirPathExists(relativeDestination)) {
      //console.log('##write schema document file to: ' + this.targetSchemaBaseDir 
      //  + this.targetSchemaFileDestination);
      console.log('##write schema document file to: ' + relativeDestination);
      //fs.writeFileSync(this.targetSchemaBaseDir + this.targetSchemaFileDestination, schemaBuffer);
      fs.writeFileSync(relativeDestination, schemaBuffer);
    };
  } else console.log("    WARNING: Nothing to write.  SchemaObject is undefined.");
}

//046b generateRemotePropertySchema
SchemaGenerator.prototype.generateComponentSchema = function (definitionObject) {

  console.log("## generateComponentSchema");
  var definitionObjectIdentifier = this.getId(definitionObject);
  if (!GeneratedSchema.identifiers.includes(definitionObjectIdentifier)) {
    //046b console.log('##instantiating Remote Property Schema generation');
    var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemotePropertySchemaSourceFile(definitionObject);
    console.log("  remote object source schema file: " + sourceSchemaFile);
    var sourceSchemaBuffer = readFile(sourceSchemaFile);
    var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
    var ssg = new SchemaGenerator();
    ssg.schemaTemplateObjects = this.schemaTemplateObjects;
    ssg.targetSchemaBaseDir = this.targetSchemaBaseDir;
    ssg.targetSchemaBuildVersion = this.targetSchemaBuildVersion;
    ssg.defaultPrimitiveFacets = this.defaultPrimitiveFacets;
    ssg.w3cXmlTypeSchema = this.w3cXmlTypeSchema;
    ssg.schemaFilepathMappings = this.schemaFilepathMappings;
    ssg.sourceSchemaBaseDir = this.sourceSchemaBaseDir;
    ssg.sourceDocumentationBaseDir = this.sourceDocumentationBaseDir;
    ssg.setSourceSchemaNamespace(sourceSchemaObject);
    ssg.setSourceSchemaBaseDirRelativeDepth();
    ssg.substitutionMappings = this.substitutionMappings;
    ssg.loadDocumentationMap();
    //046b var objectDefinitionSchema = ssg.getObjectDefinitionSchema(sourceSchemaObject, definitionObject);
    var componentSchema = this.getComponentSchema(sourceSchemaObject, definitionObject);
    //046a this.targetSchemaFileDestination = this.getSchemaFileDestination(definitionObject);
    this.writeSchemaFile(componentSchema, this.getSchemaFileDestination(definitionObject));
    GeneratedSchema.identifiers.push(componentSchema.id);
   } else
     console.log("INFO: generateComponentSchema skipped, already created for: " + definitionObjectIdentifier);
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
        this.generateComponentSchema(remoteObject);
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

SchemaGenerator.prototype.isPrimitiveType = function (definitionObjectProperty) {
  var isPrimitiveType = false;

  var definitionReferenceName = this.getDefinitionReferenceName(definitionObjectProperty);
  if (typeof definitionReferenceName != "undefined") {
    if (typeof this.w3cXmlTypeSchema.definitions[definitionReferenceName] != "undefined") 
      isPrimitiveType = true
    else
      if (typeof this.w3cXmlTypeSchema.definitions[definitionReferenceName.charAt(0).toLowerCase() + definitionReferenceName.slice(1)] != "undefined")
        isPrimitiveType = true;
  };
  return(isPrimitiveType);
}

SchemaGenerator.prototype.isComponent = function (definitionPropertyContainer) {
  if (typeof definitionPropertyContainer.$ref != "undefined")
    if (this.isPrimitiveType(definitionPropertyContainer))
      return(false)
    else
      return(true)
  else
    if (typeof definitionPropertyContainer.typeName != "undefined")
      return(true)
    else
      if (typeof definitionPropertyContainer.elementName != "undefined")
        return(true)
      else
        return(false);
}

SchemaGenerator.prototype.getPropertyTemplateType = function (definitionObjectProperty) {
  //046 console.log('####getting PropertyTemplateType for: ' + definitionObjectProperty.title);
  console.log("  getPropertyTemplateType");
  let propertyTemplateType;
  //046 console.log('####Is definitionObjectProperty type defined?');
  if (this.isComponent(definitionObjectProperty))
    propertyTemplateType="reference"
  else {
    if (typeof definitionObjectProperty.allOf != "undefined")
      //046b if (typeof definitionObjectProperty.allOf[0].type != "undefined") {

      definitionObjectProperty.allOf.some( function (definitionObjectPropertyAllOfItem) {
        if (typeof definitionObjectPropertyAllOfItem.type != "undefined") {
          //046b console.log("  definitionObjectPropertyAllOfType: " + definitionObjectProperty.allOf[0].type);
          console.log("  definitionObjectPropertyAllOfType: " + definitionObjectPropertyAllOfItem.type);
          //046b switch (definitionObjectProperty.allOf[0].type) {
          switch (definitionObjectPropertyAllOfItem.type) {
            //046b case "array": return ("array")
            case "array": propertyTemplateType="array"; break;
            //046b case "object": return ("object")
            case "object": propertyTemplateType="object"; break;
            //046b default: return ("not applicable")
            default: throw("  ERROR: unhandled type");
          };
          return(true);
        } else
          console.log("  definitionObjectPropertyAllOfItem does not contain a type object")
      }, this);

  };
  if (typeof propertyTemplateType == "undefined") {
      //046c if (typeof definitionObjectProperty.elementName != "undefined")
        //046b return ("object")
        //046c propertyTemplateType="object"
      //046c else
        //046c if ((typeof definitionObjectProperty.attributeName != "undefined")
          //046c || (definitionObjectProperty.title == "value")) 
        if ((typeof definitionObjectProperty.attributeName != "undefined") || (typeof definitionObjectProperty.$ref != "undefined"))
          //046b return ("primitive")
          propertyTemplateType="primitive"
        else 
          //046c? if ((typeof definitionObjectProperty.items != "undefined") && ( this.getDefinitionReferenceName(definitionObjectProperty.items) == "anyType"))
            //046b return("substitution")
            //046c?propertyTemplateType="substitution"
          //046c? else
            //046c if (typeof definitionObjectProperty.$ref != "undefined")
              //046b return ("reference")
            //046c   propertyTemplateType="reference"
            //046c else {
              //046b console.log("WARNING: Unable to determine PropertyTemplateType; default to 'Primitive'.");
              throw("  ERROR: Unable to determine PropertyTemplateType");
              //046b return ("primitive")
            //046c };
  }
  return(propertyTemplateType);
}

/*046c  SchemaGenerator.prototype.getPropertyTemplateType = function (definitionObjectProperty) {
    //046 console.log('####getting PropertyTemplateType for: ' + definitionObjectProperty.title);
    console.log("  getPropertyTemplateType");
    let propertyTemplateType;
    //046 console.log('####Is definitionObjectProperty type defined?');
    if (typeof definitionObjectProperty.allOf != "undefined")
      //046b if (typeof definitionObjectProperty.allOf[0].type != "undefined") {

      definitionObjectProperty.allOf.some( function (definitionObjectPropertyAllOfItem) {
        if (typeof definitionObjectPropertyAllOfItem.type != "undefined") {
          //046b console.log("  definitionObjectPropertyAllOfType: " + definitionObjectProperty.allOf[0].type);
          console.log("  definitionObjectPropertyAllOfType: " + definitionObjectPropertyAllOfItem.type);
          //046b switch (definitionObjectProperty.allOf[0].type) {
          switch (definitionObjectPropertyAllOfItem.type) {
            //046b case "array": return ("array")
            case "array": propertyTemplateType="array"; break;
            //046b case "object": return ("object")
            case "object": propertyTemplateType="object"; break;
            //046b default: return ("not applicable")
            default: throw("  ERROR: unhandled type");
          };
          return(true);
        } else
          console.log("  definitionObjectPropertyAllOfItem does not contain a type object")
      }, this);

    else {
      if (typeof definitionObjectProperty.elementName != "undefined")
        //046b return ("object")
        propertyTemplateType="object"
      else
        if ((typeof definitionObjectProperty.attributeName != "undefined")
          || (definitionObjectProperty.title == "value")) 
          //046b return ("primitive")
          propertyTemplateType="primitive"
        else 
          if ((typeof definitionObjectProperty.items != "undefined") && ( this.getDefinitionReferenceName(definitionObjectProperty.items) == "anyType"))
            //046b return("substitution")
            propertyTemplateType="substitution"
          else
            if (typeof definitionObjectProperty.$ref != "undefined")
              //046b return ("reference")
              propertyTemplateType="reference"
            else {
              //046b console.log("WARNING: Unable to determine PropertyTemplateType; default to 'Primitive'.");
              throw("  ERROR: Unable to determine PropertyTemplateType");
              //046b return ("primitive")
            };
    }
    return(propertyTemplateType);
  }
046c */
// 046b getPropertyDefinition
SchemaGenerator.prototype.getComponentSchemaPropertyDefinition = function (sourceSchemaObject,definitionPropertyContainer) {
  
  function getAllOfItemTypeContainer (definitionPropertyAllOf) {
    let allOfItemTypeContainer;

    definitionPropertyAllOf.some( function (definitionObjectPropertyAllOfItem) {
      if (typeof definitionObjectPropertyAllOfItem.properties != "undefined") {
        allOfItemTypeContainer = definitionObjectPropertyAllOfItem.properties;
        return(true);
      } else {
        if (typeof definitionObjectPropertyAllOfItem.additionalProperties != "undefined") {
          allOfItemTypeContainer = definitionObjectPropertyAllOfItem.additionalProperties;
          return(true);
        }
      }
    });

    return(allOfItemTypeContainer);
  }

  console.log("###### getComponentSchemaPropertyDefinition");
  let componentSchemaPropertyDefinition = {}

  for (var definitionPropertyItemName in definitionPropertyContainer) {
    console.log("  definitionPropertyName: " + definitionPropertyItemName);
    //046b if (typeof definitionPropertyContainer.name == "undefined") {
    //046c var definitionPropertyItem = definitionPropertyContainer[definitionPropertyItemName];
    var definitionPropertyItem;
    if (typeof definitionPropertyContainer.$ref != "undefined")
      definitionPropertyItem = definitionPropertyContainer
    else
      definitionPropertyItem = definitionPropertyContainer[definitionPropertyItemName];
    //046 if (typeof propertyObjectReferenceName != "undefined") {
                //if ( typeof propertyObjectName == "undefined" ) 
                //046 var propertyObjectName = this.getTitle(definitionPropertyContainer);
                //if ( propertyObjectName != "anyType") {
                //046 if (propertyObjectReferenceName != "anyType") {
                  /* following may be deprecated by this.setPropertyTemplate() { */
    var propertyTemplateType = this.getPropertyTemplateType(definitionPropertyItem);
    switch (propertyTemplateType) {
      case 'array':
        if (typeof definitionPropertyContainer.elementName != 'undefined')
          if (definitionPropertyContainer.elementName.namespaceURI == this.sourceSchemaNamespace) //045 {
            //045 this.generateObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainer);
            this.generateComponentSchema(sourceSchemaObject, propertyObjectReferenceName);
            /*if (definitionObjectNamespace === this.sourceSchemaNamespace) {
              schemaPropertyArrayTemplate.items.$ref = definitionObjectProperty.elementName.localPart + '.json'
            } else {
              schemaPropertyArrayTemplate.items.$ref = this.getSchemaFileDestination(definitionObjectProperty);
            };*/
            //g schemaProperties[propertyObjectName] = { "$ref": this.getSchemaFileDestination(definitionPropertyContainer.properties[definitionObjectProperty]) } ;
            //var propertyTemplate = this.setPropertyObjectTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
            //045 schemaProperties[propertyObjectName] = { "$ref": this.getSchemaReference(definitionPropertyContainer.properties[definitionObjectProperty]) };
          //045 } 
          else
            this.generateComponentSchema(definitionPropertyContainer);
          /*if (typeof sourceSchemaObject.definitions != "undefined") {
            if ((typeof sourceSchemaObject.definitions[definitionObjectProperty] != "undefined")
              || (typeof sourceSchemaObject.definitions[definitionObjectProperty] != "undefined"))
              this.generateObjectDefinitionSchema(sourceSchemaObject, definitionObject)
          } else {
              var remoteObject = this.getRemoteObject(this.getId(definitionPropertyContainer.properties[definitionObjectProperty]));
              this.generateComponentSchema(remoteObject);
            }*/
          //044 var propertyTemplate = this.setPropertyArrayTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
          //044 properties[propertyObjectName] = propertyTemplate;
          //044 schemaProperties[propertyTemplate.title] = propertyTemplate;
          //g var schemaItems = schemaObjects ();
          //g schemaItems.pushSchemaObject(propertyTemplate);
          //g properties = [propertyTemplate];
          //if (typeof definitionPropertyContainer.properties[definitionObjectProperty].elementName != 'undefined')
          //  if (definitionPropertyContainer.properties[definitionObjectProperty].elementName.namespaceURI != this.sourceSchemaNamespace) this.generateComponentSchema(definitionPropertyContainer.properties[definitionObjectProperty]);
          property[propertyObjectName] = { "$ref": this.getSchemaReference(definitionPropertyContainer) };
          break;
      case 'object':
        if (typeof definitionPropertyItem.allOf != "undefined") {
          var allOfItemTypeContainer = getAllOfItemTypeContainer(definitionPropertyItem.allOf);
          if (typeof allOfItemTypeContainer != "undefined")
            if (typeof allOfItemTypeContainer.localPart != "undefined") {
              if (typeof allOfItemTypeContainer.localPart.enum != "undefined")
                componentSchemaPropertyDefinition = this.setPropertyPrimitiveTemplate(allOfItemTypeContainer.localPart)
            } else
              componentSchemaPropertyDefinition = this.setPropertyPrimitiveTemplate(allOfItemTypeContainer)
    } /*046d else {
          if ((typeof sourceSchemaObject.definitions != "undefined")
            && (typeof sourceSchemaObject.definitions[propertyObjectReferenceName] != "undefined"))
            //045 this.generateObjectDefinitionSchema(sourceSchemaObject, definitionObject)
            //045b this.generateObjectDefinitionSchema(sourceSchemaObject, sourceSchemaObject.definitions[propertyObjectReferenceName])
            //046b this.generateComponentSchema(sourceSchemaObject, propertyObjectReferenceName)
            property[propertyObjectName] = this.getComponentSchema(sourceSchemaObject, definitionProperty)
          else {
            var remoteObject = this.getRemoteObject(this.getId(definitionPropertyContainer));
            this.generateComponentSchema(remoteObject);
         046d */ /*044
          var propertyTemplate = this.setPropertyObjectTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
          schemaProperties[propertyObjectName] = propertyTemplate;*/
            //046d componentSchemaPropertyDefinition = { "$ref": this.getSchemaReference(definitionPropertyContainer) };
        //046d   };
        //046d };
        break;
      case 'primitive':
        // 046b if (typeof definitionPropertyContainer.name == "undefined")
        //046 var propertyTemplate = this.setPropertyPrimitiveTemplate(definitionPropertyContainer);
        //046 property[propertyObjectName] = propertyTemplate;
        componentSchemaPropertyDefinition = this.setPropertyPrimitiveTemplate(definitionPropertyItem);
        /* 046b else
          console.log("    definition ignored"); 046b */
        break;
      case "reference":
        var referenceName = this.getDefinitionReferenceName(definitionPropertyItem);
        var referenceDefinitionProperty;
        if ((typeof sourceSchemaObject.definitions != "undefined")
            && (typeof sourceSchemaObject.definitions[referenceName] != "undefined"))
          referenceDefinitionProperty = sourceSchemaObject.definitions[referenceName]
        else {
            //046d var remoteDefinitionObject = this.getRemoteDefinitionObject(this.getId(definitionPropertyItem));
            //046d this.generateComponentSchema(remoteDefinitionObject);
          referenceDefinitionProperty = this.getRemoteDefinitionObject(this.getId(definitionPropertyItem));
          //046d this.generateComponentSchema(referenceDefinitionProperty);  
        };
        //046c var definitionReferenceName = this.getDefinitionReferenceName(definitionPropertyContainer);
        //046c componentSchemaPropertyDefinition = { "$ref": this.getSchemaReference(definitionPropertyContainer) } ;
        //46d componentSchemaPropertyDefinition = { "$ref": this.getSchemaReference(remoteDefinitionObject) } ;
        this.generateComponentSchema(referenceDefinitionProperty);
        componentSchemaPropertyDefinition = { "$ref": this.getSchemaReference(referenceDefinitionProperty) } ;
        break;
      //046c? case "substitution":
        //046 var substitutionObjectDefinition =
        //046 this.generateSubstitutionObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainerParent);
        //046 if (typeof substitutionObjectDefinition != "undefined")
          //046 property[propertyObjectName] = substitutionObjectDefinition;
          componentSchemaPropertyDefinition = this.generateSubstitutionObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainerParent);
        //046c? break;
      default:
        throw ('##### ERROR: PropertyTemplateType for ' + propertyObjectReferenceName + ' was not handled.')
    } /* above may be deprecated by this.setPropertyTemplate() } */
                /*046} else {
                  console.log("##object definition is 'anyType'.");
                  var substitutionObjectDefinition =
                    this.generateSubstitutionObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainer);
                  if (typeof substitutionObjectDefinition != "undefined")
                    property[propertyObjectName] = substitutionObjectDefinition;
                }
              } else
                //property = Object.assign(property, this.getProperties(sourceSchemaObject, definitionPropertyContainer))
                console.log("WARNING: Property is ignored, which is acceptable when a property describes its parent definition.")
                046 */
    //046b } else
      //046b console.log("  definition ignored");
  };

  return(componentSchemaPropertyDefinition);

}

SchemaGenerator.prototype.getPropertyReference = function (sourceSchemaObject, definitionPropertyContainer) {

  let propertyObjectReferenceName = this.getDefinitionReferenceName(definitionPropertyContainer);
  console.log("###getPropertyReference: " + propertyObjectReferenceName)
  if ((typeof this.w3cXmlTypeSchema.definitions[propertyObjectReferenceName] != "undefined") 
    //|| (typeof this.w3cXmlTypeSchema.definitions[propertyObjectReferenceName.toLowerCase()] != "undefined"))
    || (typeof this.w3cXmlTypeSchema.definitions[propertyObjectReferenceName.charAt(0).toLowerCase() + propertyObjectReferenceName.slice(1)] != "undefined"))
    property = this.setPropertyPrimitiveTemplate(definitionPropertyContainer)
  else
    if ((typeof sourceSchemaObject.definitions != "undefined") 
      && (typeof sourceSchemaObject.definitions[propertyObjectReferenceName] != "undefined")) {
      //045 this.generateObjectDefinitionSchema(sourceSchemaObject, sourceSchemaObject.definitions[propertyObjectReferenceName]);
      this.generateComponentSchema(sourceSchemaObject, propertyObjectReferenceName);
      return (propertyObjectReferenceName = { "$ref": propertyObjectReferenceName + ".json" } );
    } else {
      var remoteObject = this.getRemoteObject(this.getId(definitionPropertyContainer));
      this.generateComponentSchema(remoteObject);
      return (propertyObjectReferenceName = { "$ref": this.getSchemaReference(definitionPropertyContainer) } );
    };
}

// 046b getProperty
SchemaGenerator.prototype.getComponentSchemaProperty = function (sourceSchemaObject, definitionPropertyContainer) {
/* 046d
  function getPropertyTemplateType (definitionObjectProperty) {
    console.log('####getting PropertyTemplateType for: ' + definitionObjectProperty.title);
    console.log('####Is definitionObjectProperty type defined?');
    if (typeof definitionObjectProperty.allOf != "undefined")
      if (typeof definitionObjectProperty.allOf[0].type != "undefined") {
        console.log('#####definitionObjectPropertyAllOfType: ' + definitionObjectProperty.allOf[0].type);
        switch (definitionObjectProperty.allOf[0].type) {
          case "array": return ("array")
          case "object": return ("object")
          default: return ('not applicable')
        };
      }
    else {
      if (typeof definitionObjectProperty.elementName != "undefined") {
        return ('object')
      } else {
        if ((typeof definitionObjectProperty.attributeName != "undefined")
          || (definitionObjectProperty.title == "value")) return ('primitive')
      };
    };
  }
046d */
  console.log("##### getComponentSchemaProperty");
  let property = {};

//  for (var definitionObjectProperty in definitionPropertyContainer.properties) {

  for (var definitionPropertyName in definitionPropertyContainer) {
    console.log("  getProperty: " + definitionPropertyName);
    //046c var definitionPropertyItem = definitionPropertyContainer[definitionPropertyName];
    //var definitionPropertyName = Object.keys(definitionPropertyContainer)[0];
    //046c if (typeof definitionPropertyItem.title != "undefined") {
      //046c skip properties upstream
      //046c if (definitionPropertyItem.title != "otherAttributes") {
      //046c if ((typeof sourceSchemaObject.definitions == "undefined") || (typeof sourceSchemaObject.definitions[definitionPropertyItem.title] == "undefined")) {
        //046c if (typeof definitionPropertyItem.allOf != "undefined") {
          //property = Object.assign(property, this.getProperties(sourceSchemaObject, definitionPropertyContainer));

          /*046c definitionPropertyItem.allOf.forEach( function (definitionPropertyItemAllOfItem) {
            if (typeof definitionPropertyItemAllOfItem.$ref != "undefined")
            //  Object.assign(referenceEnumDefinitionContainer, definitionObjectAllOfItem);
              property = Object.assign(property, this.getPropertyReference(sourceSchemaObject,definitionPropertyItemAllOfItem))
            else 
              property = Object.assign(property, this.getComponentSchemaPropertyDefinition(sourceSchemaObject, definitionProperty,definitionPropertyAllOfItem))
          }, this); 046c */

        /*046c } else {
          throw("don't go down this path");
          let propertyObjectReferenceName = this.getDefinitionReferenceName(definitionPropertyItem);
          console.log("###getProperty: " + propertyObjectReferenceName);
          if (typeof definitionPropertyItem.$ref != "undefined")
            if ((typeof this.w3cXmlTypeSchema.definitions[propertyObjectReferenceName] != "undefined") 
              //|| (typeof this.w3cXmlTypeSchema.definitions[propertyObjectReferenceName.toLowerCase()] != "undefined"))
              || (typeof this.w3cXmlTypeSchema.definitions[propertyObjectReferenceName.charAt(0).toLowerCase() + propertyObjectReferenceName.slice(1)] != "undefined"))
              property = this.setPropertyPrimitiveTemplate(definitionPropertyContainer)
            else
              if ((typeof sourceSchemaObject.definitions != "undefined") 
                && (typeof sourceSchemaObject.definitions[propertyObjectReferenceName] != "undefined")) {
                //045 this.generateObjectDefinitionSchema(sourceSchemaObject, sourceSchemaObject.definitions[propertyObjectReferenceName]);
                this.generateComponentSchema(sourceSchemaObject, propertyObjectReferenceName);
                property[propertyObjectReferenceName] = { "$ref": propertyObjectReferenceName + ".json" };
              } else {
                var remoteObject = this.getRemoteObject(this.getId(definitionPropertyItem));
                this.generateComponentSchema(remoteObject);
                property[propertyObjectReferenceName] = { "$ref": this.getSchemaReference(definitionPropertyItem) };
              }
        }    
      } else {
        this.generateComponentSchema(sourceSchemaObject, propertyObjectReferenceName);
        property[propertyObjectReferenceName] = { "$ref": propertyObjectReferenceName + ".json" };
      } 046c */
      //046c }
    //046c } else {
      /*if (typeof definitionPropertyContainer.$ref != "undefined")
        property = Object.assign(property, this.getPropertyReference(sourceSchemaObject,definitionPropertyContainer))
      else 
      if (typeof definitionPropertyContainer.value != "undefined")
      */
    //046cproperty[definitionPropertyName] = this.getComponentSchemaPropertyDefinition(sourceSchemaObject, definitionPropertyContainer);
    var componentSchemaPropertyDefinition = this.getComponentSchemaPropertyDefinition(sourceSchemaObject, definitionPropertyContainer);
    if ( definitionPropertyName == "$ref" ) {
      var definitionReferenceName = this.getDefinitionReferenceName(definitionPropertyContainer);
      property[definitionReferenceName] = componentSchemaPropertyDefinition;
    } else
      property[definitionPropertyName] = componentSchemaPropertyDefinition;
  };
    
  //046c }
  return(property);
}

//046b SchemaGenerator.prototype.getObjectDefinitionPropertiesSchema = function (sourceSchemaObject, definitionProperty) {
SchemaGenerator.prototype.getComponentSchema = function (sourceSchemaObject, definitionProperty) {
  
  //046a var definitionObjectName = this.getTitle(definitionProperty);
  //046a var definitionReferenceName = this.getDefinitionReferenceName(definitionProperty);
  //046 if (typeof definitionReferenceName == "undefined")
    //definitionObjectName = this.getTitle;
  //046a if ((definitionObjectName != "anyType") || (definitionReferenceName != "anyType")) {
    //046a if (typeof definitionProperty.$ref != "undefined")
      //046a return(this.getProperties(sourceSchemaObject, definitionProperty))
    //046a else {
    //046a switch (this.getType(definitionProperty)) {
      //046a case 'array':
      //046a   throw ("To-Do: generateObjectSchema as array");
      //046a case 'object':
  //046b var schemaObject = this.createSchemaTemplateObject('object-template');
  var schemaObject = this.createSchemaTemplateObject('schema-template');
  schemaObject.id = this.getId(definitionProperty);
  schemaObject.title = this.getTitle(definitionProperty);
  schemaObject.type = this.getType(definitionProperty);
  schemaObject.description = this.getDescription(schemaObject.id);
  schemaObject.version = this.getVersion();
  schemaObject.javaType = this.getJavaType(definitionProperty);
      //046a schemaObject.properties = Object.assign(schemaObject.properties, this.getProperties(sourceSchemaObject, definitionProperty))
      //046b return(this.getProperties(sourceSchemaObject, definitionProperty))
  switch (schemaObject.type) {
    case "object":
      //046c schemaObject.properties = Object.assign(schemaObject.properties, this.getComponentSchemaProperties(sourceSchemaObject, definitionProperty))
      schemaObject.properties = Object.assign({}, this.getComponentSchemaProperties(sourceSchemaObject, definitionProperty))
      break;
  default:
      //046a   throw ('ERROR: not sure how to generate an object for this anyOf object type: '
      //046a     + this.getType(anyOfObject));
    throw("Component type not handled: " + schemaObject.type);
  };
    //046a }         
//046a } 
/* 046a else {
    console.log("##object definition is 'anyType'.");
    var substitutions = this.getSubstitutionIdentifiers(this.getId(definitionProperty));
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
            this.generateComponentSchema(remoteObject);
          }
      }, this);

  }; 046a */
  //046a };
  return(schemaObject);
}

//045 SchemaGenerator.prototype.generateObjectDefinitionSchema = function (sourceSchemaObject, definitionObject) {
  //046b the following not implemented
SchemaGenerator.prototype.getObjectDefinitionSchema = function (sourceSchemaObject, definitionObject) {
  console.log("###getObjectDefinitionSchema");
  let objectDefinitionSchema = {};
  //045 if (typeof definitionObject != "undefined") {
    //046a switch (this.getType(definitionObject)) {
      /*046a scase 'array':
        var schemaObject = this.createSchemaTemplateObject('array-template');
        schemaObject = this.createSchemaTemplateObject('array-template');
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
            //045 console.log("##object definition type set to default 'string', 'format': 'date-time'.");
            console.log("##object definition type set to default: " + JSON.stringify(this.defaultPrimitiveFacets.dateTimeFacets));
            //045 schemaObject.items.push({ "type": "string", "format": "date-time" });
            schemaObject.items.push(this.defaultPrimitiveFacets.dateTimeFacets);
            break;
          case "Decimal":
          case "Integer":
            //045 console.log("##object definition type set to default 'number', 'maximum': 2147483647, 'minimum': -2147483648.");
            console.log("##object definition type set to default: " + JSON.stringify(this.defaultPrimitiveFacets.numberFacets));
            //045 schemaObject.items.push({ "type": "number", "maximum": 2147483647, "minimum": -2147483648 });
            schemaObject.items.push(this.defaultPrimitiveFacets.numberFacets);
            break;
          case "String":
          case "token":
            //045 console.log("##object definition type set to default 'string', 'maxLength': 64.");
            console.log("##object definition type set to default: " + JSON.stringify(this.defaultPrimitiveFacets.stringFacets));
            //045 schemaObject.items.push({ "type": "string", "maxLength": 64 });
            schemaObject.items.push(this.defaultPrimitiveFacets.stringFacets);
            break;
          default:
            //045 if ((typeof sourceSchemaObject.definitions != "undefined")
              //045 && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
              schemaObject.items
                = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName]);
            //045 else {
//044              schemaObject.items = this.getRemoteDefinitionReference(definitionObject);
              //045 schemaObject.items = { "$ref": this.getRemoteDefinitionFileLocation(definitionObject) };
              //045 this.generateRemoteDefinitionObjectSchema(definitionObject, definitionObjectName);
            //045 };
        };
        objectDefinitionSchema = schemaObject;
        break; 046a */
     //046a case 'object':
     throw("don't go down this path");
        var schemaObject = this.createSchemaTemplateObject('object-template');
        schemaObject.id = this.getId(definitionObject);
        schemaObject.title = this.getTitle(definitionObject);
        schemaObject.type = this.getType(definitionObject);
        schemaObject.description = this.getDescription(schemaObject.id);
        schemaObject.version = this.getVersion();
        schemaObject.javaType = this.getJavaType(definitionObject);
        //046 var definitionObjectName;
        if (typeof definitionObject.allOf != "undefined") {
          //046a var definitionReferenceName;  

          definitionObject.allOf.forEach(function (definitionObjectAllOfItem) {
            //046a definitionReferenceName = this.getDefinitionReferenceName(definitionObjectAllOfObject);
            //046 if (typeof schemaObject.properties.value == "undefined") {
            //046a if (definitionReferenceName != "anyType")
              //046 definitionObjectName = this.getDefinitionReferenceName(definitionObject_allOfObject);
              //044 if (typeof definitionObjectName == "undefined") definitionObjectName = schemaObject.title;
              //046 if (typeof definitionObjectName == "undefined")
                //045 if ((typeof sourceSchemaObject.definitions != "undefined")
                  //045 && (typeof sourceSchemaObject.definitions[schemaObject.title] != "undefined")) {
                  //044 && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
                  //045 schemaObject.properties = this.getProperties(sourceSchemaObject, definitionObject_allOfObject)
                  //g var properties = this.getProperties(sourceSchemaObject, definitionObject_allOfObject);

                  //045 for (var property in properties) {
                    //045 schemaObject.properties[property] = properties[property];
                  //046a schemaObject.properties = Object.assign(schemaObject.properties, this.getProperties(sourceSchemaObject, definitionObjectAllOfObject))
                  schemaObject.properties = Object.assign(schemaObject.properties, this.getObjectDefinitionPropertiesSchema(sourceSchemaObject, definitionObjectAllOfItem))
                    //JSON.parse(JSON.stringify(property));
                  //045 }

                //045 } else {
                  //044 schemaObject.properties = this.getRemoteDefinitionReference(definitionObject_allOfObject);
                  //044 schemaObject.properties[definitionObjectName] = this.getRemoteDefinitionReference(definitionObject_allOfObject);
                  //045 schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(definitionObject_allOfObject) };
                  //045 this.generateRemoteDefinitionObjectSchema(definitionObject_allOfObject, definitionObjectName);
                //045 }
              //046a else {
                //046a if (definitionObjectName != "anyType") {
                  //046a switch (definitionObjectName) {
                    /*case "anyType":
                      console.log("##object definition is 'anyType'.");
                      var substitutions = this.getSubstitutionIdentifiers(schemaObject.id);
                      schemaObject.type = "object";
                      break;*/
                    /*046a case "DateTime":
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
                    default:
                      //045 if ((typeof sourceSchemaObject.definitions != "undefined")
                        //045 && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
                        //045 schemaObject.properties[definitionObjectName] = this.getProperties(sourceSchemaObject, definitionObject_allOfObject)
                        schemaObject.properties = Object.assign(schemaObject.properties, this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName]));
                      //045 else {
                        //044 schemaObject.properties = this.getRemoteDefinitionReference(definitionObject_allOfObject);
                        //045 schemaObject.properties[definitionObjectName] = this.getRemoteDefinitionReference(definitionObject_allOfObject);
                        //045 this.generateRemoteDefinitionObjectSchema(definitionObject_allOfObject, definitionObjectName);
                        //schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(definitionObject) };
                        //045 schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(sourceSchemaObject.definitions[definitionObjectName]) };
                        //045 this.generateRemoteDefinitionObjectSchema(definitionObject, definitionObjectName);
                      //045 };
                  } //046a */
                /* 046a } else {
                  console.log("##object definition is 'anyType'.");
                  var substitutions = this.getSubstitutionIdentifiers(this.getId(anyOfObject));
                  if (substitutions.length > 0) {

                    substitutions.forEach(function (substitution) {
                      if ((typeof sourceSchemaObject.definitions != "undefined")
                        && (typeof sourceSchemaObject.definitions[substitution] != "undefined"))
                        schemaObject.properties = Object.assign(schemaObject.properties, this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[substitution]))
                      else {
                        //044 schemaObject.properties = this.getRemoteDefinitionReference(anyOfObject);
                        schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(anyOfObject) };
                        this.generateRemoteDefinitionObjectSchema(anyOfObject, substitution);
                      };
                    }, this);

                  };
                }
              }
            //}046a */
          }, this)

        } else {
          if (typeof definitionObject.properties != "undefined") {
          //046a var definitionReferenceName;  

            for (var definitionObjectPropertiesItem in definitionObject.properties) {
              //046a definitionReferenceName = this.getDefinitionReferenceName(definitionObjectPropertyObject);
              //046 if (typeof schemaObject.properties.value == "undefined") {
              //046a if (definitionReferenceName != "anyType")
              switch (definitionObjectPropertiesItem) {
                case "anyType":
                case "otherAttributes":
                  break;
                default:
                  schemaObject.properties = Object.assign(schemaObject.properties, this.getObjectDefinitionPropertiesSchema(sourceSchemaObject, definitionObject.properties[definitionObjectPropertiesItem]))
              }
            }
          } /* 046a else {
            definitionObjectName = this.getDefinitionReferenceName(definitionObject);
          if (typeof definitionObjectName == "undefined") definitionObjectName = schemaObject.title; 046a */
            /*045 switch (definitionObjectName) {
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
              default:*/
            /* 046a if ((typeof this.w3cXmlTypeSchema.definitions[definitionObjectName] != "undefined") 
              || (typeof this.w3cXmlTypeSchema.definitions[definitionObjectName.charAt(0).toLowerCase() + definitionObjectName.slice(1)] != "undefined"))
              //|| (typeof this.w3cXmlTypeSchema.definitions[definitionObjectName.toLowerCase()] != "undefined"))
          schemaObject.properties = Object.assign(schemaObject.properties, this.setPropertyPrimitiveTemplate(definitionObject)) 046a */
            // 046a else
              //045 if ((typeof sourceSchemaObject.definitions != "undefined")
                //045 && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
                // 046a schemaObject.properties = Object.assign(schemaObject.properties, this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName]));
              //045 else {
                //044 schemaObject.properties = this.getRemoteDefinitionReference(definitionObject);
                //045 schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(definitionObject) };
                //045 this.generateRemoteDefinitionObjectSchema(definitionObject, definitionObjectName);
              //045 };
            //045}
          // 046a }
        // 046a objectDefinitionSchema = schemaObject;
        // 046a break;
      // 046a default:
        // 046a throw ('ERROR: not sure how to generate an object for this definitionObject');
    };
    //045 this.targetSchemaFileDestination = this.getSchemaFileDestination(definitionObject);
    //045 this.writeSchemaFile(schemaObject);
    //045 GeneratedSchema.identifiers.push(schemaObject.id);
  //045 } else {
    //045 throw ('definition object is undefined: ' + definitionObjectName);
  //045 };
  return(objectDefinitionSchema);
}

/* 046b
SchemaGenerator.prototype.generateRemoteDefinitionObjectSchema = function (anyOfObject, definitionObjectName) {
  console.log("## generateRemoteDefinitionObjectSchema");
  var anyOfObjectIdentifier = this.getId(anyOfObject);
  if (!GeneratedSchema.identifiers.includes(anyOfObjectIdentifier)) {
    console.log('##instantiating Remote Object Schema generation');
    var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemoteObjectSchemaSourceFile(anyOfObject);
    console.log('##remote object source schema file: ' + sourceSchemaFile);
    var sourceSchemaBuffer = readFile(sourceSchemaFile);
    var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
    var ssg = new SchemaGenerator();
    ssg.schemaTemplateObjects = this.schemaTemplateObjects;
    ssg.targetSchemaBaseDir = this.targetSchemaBaseDir;
    ssg.targetSchemaBuildVersion = this.targetSchemaBuildVersion;
    ssg.defaultPrimitiveFacets = this.defaultPrimitiveFacets;
    ssg.w3cXmlTypeSchema = this.w3cXmlTypeSchema;
    ssg.schemaFilepathMappings = this.schemaFilepathMappings;
    ssg.sourceSchemaBaseDir = this.sourceSchemaBaseDir;
    ssg.sourceDocumentationBaseDir = this.sourceDocumentationBaseDir;
    ssg.setSourceSchemaNamespace(sourceSchemaObject);
    ssg.setSourceSchemaBaseDirRelativeDepth();
    ssg.substitutionMappings = this.substitutionMappings;
    ssg.loadDocumentationMap();
    var objectDefinitionSchema = ssg.getObjectDefinitionSchema(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName]);
    //046a this.targetSchemaFileDestination = this.getSchemaFileDestination(sourceSchemaObject.definitions[definitionObjectName]);
    this.writeSchemaFile(objectDefinitionSchema,this.getSchemaFileDestination(definitionObjectProperty));
    GeneratedSchema.identifiers.push(objectDefinitionSchema.id);
  } else
  console.log("INFO: generateRemoteDefinitionObjectSchema skipped, already created for: " + anyOfObjectIdentifier);
}
046b */
/* 046d
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
        if (objectProperty.elementName.namespaceURI != this.sourceSchemaNamespace) this.generateComponentSchema(objectProperty);
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
046d */

SchemaGenerator.prototype.getPropertyObjectIdentifierContainer = function (propertyObject) {
  console.log('##getPropertyObjectIdentifierContainer');
  var propertyObjectIdentifierContainer;
  if (typeof propertyObject.$ref != "undefined")
    propertyObjectIdentifierContainer = propertyObject
  else
    if (typeof propertyObject.typeName != "undefined")
      propertyObjectIdentifierContainer = propertyObject.typeName
    else
      if (typeof propertyObject.elementName != "undefined")
        propertyObjectIdentifierContainer = propertyObject.elementName
      else
        if (typeof propertyObject.attributeName != "undefined")
          propertyObjectIdentifierContainer = propertyObject.attributeName
        else
          console.log("WARNING: trouble determining PropertyObjectIdentifierContainer");
  //045 console.log('##propertyObjectIdentifierContainer: ' + propertyObjectIdentifierContainer);
  return (propertyObjectIdentifierContainer);
}
/* generate { */
SchemaGenerator.prototype.getId = function (propertyObject) {
  console.log('##get id from Property Object');
  var id;
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(propertyObject);
  if (typeof propertyObjectIdentifierContainer != 'undefined')
    if (typeof propertyObjectIdentifierContainer.namespaceURI != 'undefined')
      id = propertyObjectIdentifierContainer.namespaceURI + '#' + propertyObjectIdentifierContainer.localPart
    else
      if (typeof propertyObjectIdentifierContainer.$ref != 'undefined') {
        var definitionNamespace = this.getRemoteDefinitionNamespace(propertyObjectIdentifierContainer);
        var definitionReferenceName = this.getDefinitionReferenceName(propertyObjectIdentifierContainer);
        id =  definitionNamespace + '#' + definitionReferenceName;
      }
  /*045 else
    if (typeof propertyObject.title != "undefined")
      id = propertyObject.title*/
    else
      throw ("ERROR: trouble determining Property Object identifier");
  console.log('##id: ' + id);
  return (id);
}

SchemaGenerator.prototype.getTitle = function (propertyObject) {
  console.log('##get title from Property Object');
  var title;
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(propertyObject);
  if (typeof propertyObjectIdentifierContainer != 'undefined')
    if (typeof propertyObjectIdentifierContainer.localPart != 'undefined')
      title = propertyObjectIdentifierContainer.localPart
    else
      if (typeof propertyObjectIdentifierContainer.$ref != 'undefined')
        title = this.getDefinitionReferenceName(propertyObjectIdentifierContainer);
  /*045 else
    if (typeof propertyObject.title != "undefined")
      title = propertyObject.title*/
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

SchemaGenerator.prototype.getdefaultPrimitiveFacets = function () {
  console.log('##defaultPrimitiveFacets: ' + this.defaultPrimitiveFacets);
  return (this.defaultPrimitiveFacets);
}

SchemaGenerator.prototype.getJavaType = function (propertyObject) {

  function replacer(match, p1, offset, string) {
  return ['_' + p1.replace(/\./g, '_')];
  }

  console.log('##get javaType from Property Object');
  //045 var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(propertyObject);
  //var javaType = propertyObjectIdentifierContainer.namespaceURI.replace(/[:\/\.-]/g, '_')
  //044 var javaType = propertyObjectIdentifierContainer.localPart.replace(/[:\/\.-]/g, '_');
  //045 var javaTypeSchemaFileDestination = String(String(this.getSchemaFileDestination(propertyObject)).replace(/[\/\.-]/g, '_'));
  var schemaFileDestination = this.getSchemaFileDestination(propertyObject);
  //045 var javaType = javaTypeSchemaFileDestination.substring(0, javaTypeSchemaFileDestination.lastIndexOf('_'));
  var javaTypeParts = schemaFileDestination.substring(0, schemaFileDestination.lastIndexOf(".json"));
  var javaTypePartsRelativePath = String(javaTypeParts.replace(/\.\.\//g, ''));
  //g var javaTypePartsVersion = javaTypeParts.replace(/([0-9])(\.)([0-9])/, replacer);
  //g var javaTypePartsVersion = javaTypeParts.replace(/(\/[0-9])/g, replacer);
  var javaTypePartsVersion = javaTypePartsRelativePath.replace(/(\d+\.?\d{0,9}?\.\d+\.?\d{0,9})/, replacer);
  var javaType = String(javaTypePartsVersion.replace(/-/g, '_')).replace(/\//g, '.');
  console.log("##javaType: " + javaType);
  return(javaType);
}

/*045 SchemaGenerator.prototype.getProperties_0 = function (sourceSchemaObject, definitionObject) {

  function getDefinitionPropertyContainer(definitionObject) {
    console.log('##get definitionPropertyContainer');
    var definitionPropertyContainer;
    if (typeof definitionObject.allOf != "undefined") {
      definitionPropertyContainer = definitionObject.allOf[1]
    } else { definitionPropertyContainer = definitionObject };
    return (definitionPropertyContainer);
}*/
  /* following may be deprecated by this.setPropertyTemplate() { */
  /*045 function getPropertyTemplateType(definitionObjectProperty) {
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
  }*/
  /* above may be deprecated by this.setPropertyTemplate() } */

  /*045 var schemaProperties = {};
  var definitionPropertyContainer = getDefinitionPropertyContainer(definitionObject);
  console.log('##get properties for definitionPropertyContainer: ' + definitionPropertyContainer.title);

  for (var definitionObjectProperty in definitionPropertyContainer.properties) {
    console.log('####definitionObjectProperty: ' + definitionObjectProperty);
    if (definitionPropertyContainer.properties[definitionObjectProperty].title != "otherAttributes") {
      var propertyObjectReferenceName = this.getDefinitionReferenceName(definitionPropertyContainer.properties[definitionObjectProperty]);
      var propertyObjectName = this.getTitle(definitionPropertyContainer.properties[definitionObjectProperty]);
      if (propertyObjectReferenceName != "anyType") {
        *//* following may be deprecated by this.setPropertyTemplate() { */
        /*045 var propertyTemplateType = getPropertyTemplateType(definitionPropertyContainer.properties[definitionObjectProperty]);
        switch (propertyTemplateType) {
          case 'array':
            if (typeof definitionPropertyContainer.properties[definitionObjectProperty].elementName != 'undefined')
              if (definitionPropertyContainer.properties[definitionObjectProperty].elementName.namespaceURI == this.sourceSchemaNamespace) //045 {
                this.generateObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainer.properties[definitionObjectProperty]);
              else
                this.generateComponentSchema(definitionPropertyContainer.properties[definitionObjectProperty]);
              schemaProperties[propertyObjectName] = { "$ref": this.getSchemaReference(definitionPropertyContainer.properties[definitionObjectProperty]) };
              break;
          case 'object':
            if ((typeof sourceSchemaObject.definitions != "undefined")
              && (typeof sourceSchemaObject.definitions[definitionObjectProperty] != "undefined"))
              this.generateObjectDefinitionSchema(sourceSchemaObject, definitionObject)
            else {
              var remoteObject = this.getRemoteObject(this.getId(definitionPropertyContainer.properties[definitionObjectProperty]));
              this.generateComponentSchema(remoteObject);
            };
            schemaProperties[propertyObjectName] = { "$ref": this.getSchemaReference(definitionPropertyContainer.properties[definitionObjectProperty]) };
            break;
          case 'primitive':
            var propertyTemplate = this.setPropertyPrimitiveTemplate(definitionPropertyContainer.properties[definitionObjectProperty]);
            schemaProperties[propertyObjectName] = propertyTemplate;
            break;
          default:
            throw ('##### ERROR: PropertyTemplateType for ' + definitionObjectProperty + ' was not handled.')
        } *//* above may be deprecated by this.setPropertyTemplate() } */
      /*045} else {
        console.log("##object definition is 'anyType'.");
        var substitutionObjectDefinition =
          this.generateSubstitutionObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainer.properties[definitionObjectProperty]);
        if (typeof substitutionObjectDefinition != "undefined")
          schemaProperties[propertyObjectName] = substitutionObjectDefinition;
      }
    }
  }

      if (Object.keys(schemaProperties).length > 0) 
        return (schemaProperties)
    else return (this.setPropertyPrimitiveTemplate(definitionObject));
} 045 */

//046b SchemaGenerator.prototype.getProperties = function (sourceSchemaObject, definitionObject) {
SchemaGenerator.prototype.getComponentSchemaProperties = function (sourceSchemaObject, definitionObject) {

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

  /*function getReferenceEnumDefinitionContainer (definitionObjectAllOf) {
    var referenceEnumDefinitionContainer = {};
    var referenceDefinitionContainer = definitionObject.allOf.filter( function(allOfItem) { if (typeof allOfItem.$ref != "undefined") return true } );
    var enumDefinitionContainer = definitionObject.allOf.filter( function(allOfItem) { if (typeof allOfItem.enum != "undefined") return true } );
    referenceEnumDefinitionContainer.$ref = [referenceDefinitionContainer];
    referenceEnumDefinitionContainer.enum = [enumDefinitionContainer];
    return (referenceEnumDefinitionContainer);
}*/

  /*function referencesDefinitionObject(definitionObjectAllOfItem) {
    if (typeof definitionObject.typeName != "undefined") {
            //if (definitionObject.typeName.localPart == this.getDefinitionReferenceName(definitionObjectAllOfItem))
              //console.log("INFO: definitionObjectAllOfItem property ignored because it references parent definition: " + definitionObjectAllOfItem) 
  }
*/
  function getDefinitionObjectTypeName (definitionObject) {
    if (typeof definitionObject.typeName != "undefined") 
      return(definitionObject.typeName.localPart)
  }

  console.log("#### getComponentSchemaProperties");
  let schemaProperties = {};
  //044 var propertyTemplate;
  //045 var definitionPropertyContainer = getDefinitionPropertyContainer(definitionObject);
  if (typeof definitionObject.allOf != "undefined") {
    //if (definitionObject.allOf.filter( function(allOfItem) { if (typeof allOfItem.enum != "undefined") return true } ).length > 0)
    if ((typeof definitionObject.typeType != "undefined") && (definitionObject.typeType == "enumInfo" )) {
      var referenceEnumDefinitionContainer = {};
      var referenceDefinitionContainer = definitionObject.allOf.filter( function(allOfItem) { if (typeof allOfItem.$ref != "undefined") return true } );
      if (referenceDefinitionContainer.length == 1)
        referenceEnumDefinitionContainer = referenceDefinitionContainer[0]
      else
        throw("##ERROR: trouble creating referenceDefinitionContainer for adding facets such as enumerations.");

      definitionObject.allOf.forEach( function (definitionObjectAllOfItem) {
        if (typeof definitionObjectAllOfItem.$ref == "undefined")
          Object.assign(referenceEnumDefinitionContainer, definitionObjectAllOfItem);
      }, this);

      schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, referenceEnumDefinitionContainer));
    } else

      definitionObject.allOf.forEach( function (definitionObjectAllOfItem, definitionObjectAllOfIndex, definitionObjectAllOf) {
        if (typeof definitionObjectAllOfItem.properties != "undefined")

          for (var definitionObjectAllOfItemPropertyName in definitionObjectAllOfItem.properties) {
          schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionObjectAllOfItemPropertyName] : definitionObjectAllOfItem.properties[definitionObjectAllOfItemPropertyName] } ))
          }

        else {
          var definitionName;
          if (typeof definitionObjectAllOfItem.$ref != "undefined")
            definitionName = this.getDefinitionReferenceName(definitionObjectAllOfItem)
            //046c if ( definitionReferenceName == getDefinitionObjectTypeName(definitionObject))
            //if (typeof definitionObject.typeName != "undefined") {
              //if (definitionObject.typeName.localPart == this.getDefinitionReferenceName(definitionObjectAllOfItem))
                //console.log("INFO: definitionObjectAllOfItem property ignored because it references parent definition: " + definitionObjectAllOfItem) 
              //046c console.log("INFO: definitionObjectAllOfItem property ignored because it references parent definition: " + definitionReferenceName)
            //046c else
            //046c schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, definitionObjectAllOfItem ))
          else
            definitionName = getDefinitionObjectTypeName(definitionObjectAllOfItem);
          schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionName] : definitionObjectAllOfItem } ));
        }
      }, this);

  };

  if (typeof definitionObject.properties != "undefined")

    for (var definitionObjectPropertyName in definitionObject.properties) {
      //046d if (typeof definitionObject.properties[definitionObjectPropertyName].allOf != "undefined") {
        if (this.isAnyTypeSubstitution(definitionObject.properties[definitionObjectPropertyName])) {
          var componentIdentifierContainer;
          if (typeof definitionObject.properties[definitionObjectPropertyName].$ref != "undefined")
            componentIdentifierContainer = definitionObject
          else
            componentIdentifierContainer = definitionObject.properties[definitionObjectPropertyName];
          substitutionIdentifiers = this.getSubstitutionIdentifiers(this.getId(componentIdentifierContainer));
          if (substitutionIdentifiers.length > 0) {
            //? var substitutionSchemaProperties = {};

            substitutionIdentifiers.forEach(function (substitutionIdentifier) {
              substitutionObjectName = substitutionIdentifier.substring(substitutionIdentifier.lastIndexOf('#') + 1);
              /*046c if ((typeof sourceSchemaObject.definitions != "undefined")
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
                this.generateComponentSchema(remoteObject);
            } 046c */
              //? var substitutionDefinitionObject = getSubstitutionDefinitionObject(substitutionIdentifier);
              //? substitutionSchemaProperties = Object.assign(substitutionSchemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [substitutionObjectName] : substitutionDefinitionObject } ));
              //046 schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [substitutionObjectName] : { "$ref" : [substitutionIdentifier] } } ));
              schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { "$ref" : substitutionIdentifier } ));
            }, this);

          };
          //? schemaProperties = Object.assign(schemaProperties, substitutionSchemaProperties);
        //046c } else 
          //046c schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionObjectPropertyName] : definitionObject.properties[definitionObjectPropertyName] } ));
        } else
      //046d};
          schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionObjectPropertyName] : definitionObject.properties[definitionObjectPropertyName] } ));
    };

  /*046c set downstream
  if (typeof definitionObject.$ref != "undefined") {
    var definitionReferenceName = this.getDefinitionReferenceName(definitionObject);
    var definitionReferenceContainer = { [definitionReferenceName] : definitionObject } ;
    schemaProperties = Object.assign(schemaProperties, { [definitionReferenceName] : this.getComponentSchemaProperty(sourceSchemaObject, definitionReferenceContainer ) } );
} 046c */
  //}

  //var properties = schemaObjects.getSchemaObjects();
  /*if (Array.isArray(properties))
    if (properties.length > 0) 
      return (properties)
  else {
    if ((typeof properties === "object") && (properties !== null))*/
      //045 if (Object.keys(schemaProperties).length > 0) 
  return (schemaProperties);
    //045 else return (this.setPropertyPrimitiveTemplate(definitionObject));
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

//046b generateObjectSchema
SchemaGenerator.prototype.getInitialComponentSchema = function (sourceSchemaObject) {
  console.log("## getInitialComponentSchema");
  //046 var definitionObjectName;
  if (typeof sourceSchemaObject.anyOf != "undefined") {
    //046a var definitionObjectName;
    //046a var definitionReferenceName;

    sourceSchemaObject.anyOf.forEach(function (sourceSchemaObjectAnyOfItem) {
      //046a definitionObjectName = this.getTitle(anyOfObject);
      //046a definitionReferenceName = this.getDefinitionReferenceName(anyOfObject);
      //046 if (typeof definitionReferenceName == "undefined")
        //definitionObjectName = this.getTitle;
      /*046a if ((definitionObjectName != "anyType") || (definitionReferenceName != "anyType")) {
        switch (this.getType(anyOfObject)) {
          case 'array':
            throw ("To-Do: generateObjectSchema as array");
          case 'object':046a */
            /* 046bvar componentSchema = this.createSchemaTemplateObject('object-template');
            componentSchema.id = this.getId(sourceSchemaObjectAnyOfItem);
            componentSchema.title = this.getTitle(sourceSchemaObjectAnyOfItem);
            componentSchema.type = this.getType(sourceSchemaObjectAnyOfItem);
            componentSchema.description = this.getDescription(componentSchema.id);
            componentSchema.version = this.getVersion();
            componentSchema.javaType = this.getJavaType(sourceSchemaObjectAnyOfItem); 046b */
      var componentSchema = this.getComponentSchema(sourceSchemaObject, sourceSchemaObjectAnyOfItem);
            /*var definitionObjectName = this.getDefinitionReferenceName(anyOfObject);
            if ( typeof definitionObjectName == "undefined")
              definitionObjectName = schemaObject.title;*/
/* the following cases may be deprecated by getProperties and its primitive algorithm*/
            //46 switch (definitionObjectName) {
              /*case "anyType":
                console.log("##object definition is 'anyType'.");
                var substitutions = this.getSubstitutionIdentifiers(schemaObject.id);
                if ( substitutions.length > 0 ) {
                  schemaObject.type = "object";
                };
                break;*/
              /*046 case "AnyURI" : 
                 console.log("##object definition is 'anyURI'; type set to 'string', format 'uri'.");
                schemaObject.type = "string";
                schemaObject.format = "uri";
                throw("generateObjectSchema.switch");
              case "DateTime":
                console.log("##object definition is 'DateTime'; type set to 'string', format 'date-time'.");
                schemaObject.type = "string";
                schemaObject.format = "date-time";
                throw("generateObjectSchema.switch");
                break;
              case "Decimal":
              case "Integer":
                console.log("##object definition type set to 'number'.");
                schemaObject.type = "number";
                throw("generateObjectSchema.switch");
                break;
              case "String":
              case "token":
                console.log("##object definition type set to 'string'.");
                schemaObject.type = "string";
                throw("generateObjectSchema.switch");
                break;
              default:*/
                //045 if ((typeof sourceSchemaObject.definitions != "undefined")
                  //045 && (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined"))
                  /*schemaObject.properties 
                    = this.getProperties(sourceSchemaObject.definitions[definitionObjectName]) */
                  //045 schemaObject.properties = this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName])
                  //046 schemaObject.properties = Object.assign(schemaObject.properties, this.getProperties(sourceSchemaObject, sourceSchemaObject.definitions[definitionObjectName]))
                  //046a schemaObject.properties = Object.assign(schemaObject.properties, this.getProperties(sourceSchemaObject, anyOfObject))
                  //046b componentSchema.properties = Object.assign(componentSchema.properties, this.getComponentSchemaProperties(sourceSchemaObject, sourceSchemaObjectAnyOfItem));
                //045 else {
                  //044 schemaObject.properties = this.getRemoteDefinitionReference(anyOfObject);
                  //045 schemaObject.properties[definitionObjectName] = { "$ref": this.getRemoteDefinitionFileLocation(anyOfObject) };
                  //schemaObject.properties = Object.assign(schemaObject.properties, {[definitionObjectName]: { "$ref": this.getRemoteDefinitionFileLocation(anyOfObject) }})
                  //045 this.generateRemoteDefinitionObjectSchema(anyOfObject, definitionObjectName);
                //045 };
            //046 };
            /* 046a break;
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
                this.generateComponentSchema(remoteObject);
              }
          }, this);

        };
} 046a */
      //046a this.targetSchemaFileDestination = this.getSchemaFileDestination(sourceSchemaObjectAnyOfItem);
      //046c this.writeSchemaFile(componentSchema, this.getSchemaFileDestination(definitionObjectProperty));
      this.writeSchemaFile(componentSchema, this.getSchemaFileDestination(sourceSchemaObjectAnyOfItem));
      GeneratedSchema.identifiers.push(componentSchema.id);
    }, this);

  };
  return(GeneratedSchema);

}

SchemaGenerator.prototype.generate = function (component) {
  console.log("# generate");
  if (typeof component.id != "undefined")
    return(this.getInitialComponentSchema(component))
  else
    return(this.generateComponentSchema(component))
}

module.exports = SchemaGenerator;