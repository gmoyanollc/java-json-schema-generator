var fs = require('fs'),
  path = require('path');

//var SoiSchemaGenerator = function SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer
//  , schemaPropertyObjectTemplateBuffer, targetSchemaFile, schemaFilepathMappings) {
//var SoiSchemaGenerator = function SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer
//  , schemaPropertyObjectTemplateBuffer, targetSchemaFilename, targetSchemaBaseDir, schemaFilepathMappings) {

  var SoiSchemaGenerator = function SoiSchemaGenerator(schemaTemplateObjects
    , targetSchemaBaseDir, schemaFilepathMappings, targetSchemaFilename) {

  //this.schemaRootTemplateObject = schemaRootTemplateObject;
  //this.schemaPropertyArrayTemplateBuffer = schemaPropertyArrayTemplateBuffer;
  //this.schemaPropertyObjectTemplateBuffer = schemaPropertyObjectTemplateBuffer;
  this.schemaTemplateObjects = schemaTemplateObjects;
  this.targetSchemaBaseDir = targetSchemaBaseDir;
  this.schemaFilepathMappings = schemaFilepathMappings;
  this.targetSchemaFilename = targetSchemaFilename;

  /*this.schemaTemplates = [{ 
    root: { 
      $schema: "http://json-schema.org/draft-04/schema#",
      id: "",
      title: "",
      type: "null",
      description: "",
      javaType: "",
      properties: {},
      additionalProperties: false,
      required: [""]}
    }
  ];*/
  this.targetSchemaFileDestination;
  //this.schemaTemplateObjects = [];
  //this.schemaTemplateObjects;
  //this.putSchemaTemplateObject = putSchemaTemplateObject;
  //function getSchemaTemplate(templateName) {}
    
    //for (var index=0; index < this.schemaTemplates.length; index++)

}


/*
SoiSchemaGenerator.prototype.putSchemaTemplateObject = function(schemaTemplateObject) {
  index = this.schemaTemplateObjects.push(schemaTemplateObject);
  return(index);
  }
*/

SoiSchemaGenerator.prototype.getSchemaTemplateObject = function (templateId) {
  console.log('##match schema template object: ' + templateId);

  for (var index = 0; index < this.schemaTemplateObjects.length; index++) {
    if ( this.schemaTemplateObjects[index].templateId === templateId )
      return(this.schemaTemplateObjects[index].templateObject);
  };

  throw 'schema id was not matched for a template object]';
}

//SoiSchemaGenerator.prototype.getSchemaFilepath = function (schemaNamespace) {
SoiSchemaGenerator.prototype.getSchemaFileDestination = function (anyOfAllOfPropertyObject) {

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    //if ( this.schemaFilepathMappings[index].namespace === schemaNamespace )
    if ( this.schemaFilepathMappings[index].namespace === anyOfAllOfPropertyObject.elementName.namespaceURI )
      //return(this.schemaFilepathMappings[index].filepath);
      return(this.schemaFilepathMappings[index].filepath + anyOfAllOfPropertyObject.elementName.localPart + '.json');
  };

  throw 'schema namespace was not matched for a filepath';
}

SoiSchemaGenerator.prototype.getRemoteDefinitionFileLocation = function (anyOfPropertyObject) {
  var anyOfObjectPropertyDefinitionReferenceNamespace = getRemoteDefinitionNamespace(anyOfPropertyObject)

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    //if ( this.schemaFilepathMappings[index].namespace === schemaNamespace )
    if ( this.schemaFilepathMappings[index].namespace === anyOfObjectPropertyDefinitionReferenceNamespace ) {
      //return(this.schemaFilepathMappings[index].filepath);
      remoteDefinitionObjectName = this.getDefinitionObjectName(anyOfPropertyObject);
      //return(this.schemaFilepathMappings[index].filepath + anyOfPropertyObject.elementName.localPart + '.json');
      return(this.schemaFilepathMappings[index].filepath + remoteDefinitionObjectName + '.json');
    }
  };

  function getRemoteDefinitionNamespace(anyOfObject) {
    console.log('##get namespace from remote anyOf object property definition reference: ' + anyOfObject.properties.value.$ref);
    var anyOfObjectPropertyDefinitionReference = anyOfObject.properties.value.$ref;
    return(anyOfObjectPropertyDefinitionReference.substring(0, anyOfObjectPropertyDefinitionReference.indexOf('#')));
  }

  throw 'schema namespace was not matched for a filepath';
}

//SoiSchemaGenerator.prototype.writeSchemaFile = function () {
SoiSchemaGenerator.prototype.writeSchemaFile = function (schemaObject) {
  //var schemaBuffer = JSON.stringify(this.schemaRootTemplateObject);
  var schemaBuffer = JSON.stringify(schemaObject, null, '  ');
  console.log('##output schema buffer string');
  console.log(schemaBuffer.toString());
  console.log('##write schema document file');
  //fs.writeFileSync(targetSchemaFile, targetSchemaBuffer);
  //if (dirPathExists(this.targetSchemaFile)) fs.writeFileSync(this.targetSchemaBaseDir, schemaBuffer);
  //if ( dirPathExists(this.targetSchemaBaseDir + this.targetSchemaFile) ) 
  if ( dirPathExists(this.targetSchemaBaseDir + this.targetSchemaFileDestination) )
    //fs.writeFileSync(this.targetSchemaBaseDir + this.targetSchemaFile, schemaBuffer);
    fs.writeFileSync(this.targetSchemaBaseDir + this.targetSchemaFileDestination, schemaBuffer);

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

  sourceSchemaObject.anyOf.forEach(function (anyOfObject) {
    //var ssg = new SoiSchemaGenerator();
    var schemaObject;
    switch ( this.getType(anyOfObject) ) {
      case 'object' :
        //schemaObject = this.getSchemaTemplateObject('object');
        schemaObject = this.getSchemaTemplateObject('object-template');
        schemaObject.id = this.getId(anyOfObject);
        schemaObject.title = this.getTitle(anyOfObject);
        schemaObject.type = this.getType(anyOfObject);
        schemaObject.javaType = this.getJavaType(anyOfObject);
        //schemaObject.properties 
        //  = this.getProperty(sourceSchemaObject.definitions[this.getDefinitionObjectName(anyOfObject)]);
        var definitionObjectName = this.getDefinitionObjectName(anyOfObject);
        if ( typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined" )
          schemaObject.properties 
            = this.getProperty(sourceSchemaObject.definitions[this.getDefinitionObjectName(anyOfObject)]);
        else
           schemaObject.properties = this.getRemoteDefinitionReference(anyOfObject);
        break;
    }
    this.targetSchemaFileDestination = this.getSchemaFileDestination(anyOfObject);
    this.writeSchemaFile(schemaObject);
  }, this);

}

//}
/*
SoiSchemaGenerator.prototype.startGenerating = function (sourceSchemaObject) {
  if ( schemaObjectGenerated(this) ) SoiSchemaGenerator.prototype.writeSchemaFile();

  function schemaObjectGenerated(ssg) {
    if ( ssg.schemaRootTemplateObject.id != "" ) {
      return true;
    }
    schemaObjectGenerated(ssg.schemaRootTemplateObject);
    //var ssg = new SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer, schemaPropertyObjectTemplateBuffer);
    //ssg.startGenerating(sourceSchemaObject);
    ssg.generateSoiObject(ssg.schemaRootTemplateObject);
  };
}
*/

SoiSchemaGenerator.prototype.generateSoiSchema = function (sourceSchemaObject) {
//  this.schemaTemplate.id = this.getId(sourceSchemaObject);
  this.schemaRootTemplateObject.id = this.getId(sourceSchemaObject);
  this.schemaRootTemplateObject.title = this.getTitle(sourceSchemaObject);
  this.schemaRootTemplateObject.type = this.getType(sourceSchemaObject);
  this.schemaRootTemplateObject.javaType = this.getJavaType(sourceSchemaObject);
  this.schemaRootTemplateObject.properties = this.getProperty(sourceSchemaObject);
  this.schemaRootTemplateObject.required = this.getRequired(sourceSchemaObject);
  this.writeSchemaFile();
}
/*
SoiSchemaGenerator.prototype.getSchemaTemplateObject = function(schemaTemplateObjectId) {
  console.log('##match schema template object: ' + schemaTemplateObject);

  for (var index = 0; index < this.schemaTemplateObjects.length; index++) {
    if ( this.schemaTemplateObjects[index].schemaTemplateObjectId === schemaTemplateObjectId )
      return(this.schemaTemplateObjects[index]);
  }
}
*/
//SoiSchemaGenerator.prototype.getId = function(sourceSchemaObject) {
SoiSchemaGenerator.prototype.getId = function(anyOfObject) {
  console.log('##get id from anyOf elementName');
  //var localPart = sourceSchemaObject.anyOf[0].elementName.localPart;
  //var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
  //var id = namespaceURI + localPart;
  //console.log('##id: ' + id)
  console.log('##id: ' + anyOfObject.elementName.namespaceURI + anyOfObject.elementName.localPart);
  //return(id);
  return(anyOfObject.elementName.namespaceURI + anyOfObject.elementName.localPart);
}

//SoiSchemaGenerator.prototype.getTitle = function(sourceSchemaObject) {
SoiSchemaGenerator.prototype.getTitle = function(anyOfObject) {
  console.log('##get title from anyOf elementName');
  //var title = sourceSchemaObject.anyOf[0].elementName.localPart;
  //console.log('##title: ' + title)
  console.log('##title: ' + anyOfObject.elementName.localPart);
  //return(title);
  return(anyOfObject.elementName.localPart);
}

//SoiSchemaGenerator.prototype.getType = function(sourceSchemaObject) {
SoiSchemaGenerator.prototype.getType = function(anyOfObject) {
  console.log('##get type from anyOf type');
  //var type = sourceSchemaObject.anyOf[0].type;
  //console.log('##type: ' + type)
  console.log('##type: ' + anyOfObject.type);
  //return(type);
  return(anyOfObject.type);
}

//SoiSchemaGenerator.prototype.getDescription = function(sourceSchemaObject) {
SoiSchemaGenerator.prototype.getDescription = function(anyOfObject) {
  console.log('##get description from ?xsd short description' );
  var description = '?xsd short description';
  console.log('##description: ' + description)
  return(description);
}

//SoiSchemaGenerator.prototype.getVersion = function(sourceSchemaObject) {
SoiSchemaGenerator.prototype.getVersion = function(anyOfObject) {
  console.log('##keeping version from template');
  //var version = 'sourceSchemaObject.anyOf[0].?';
  //console.log('##version: ' + version)
  //return(version);
}

//SoiSchemaGenerator.prototype.getJavaType = function(sourceSchemaObject) {
SoiSchemaGenerator.prototype.getJavaType = function(anyOfObject) {
  console.log('##get javaType from anyOf elementName');
  //var localPart = sourceSchemaObject.anyOf[0].elementName.localPart;
  //var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
  //var javaNamespaceURI = namespaceURI.replace(/[:\/\.-]/g, '_');
  var javaNamespaceURI = anyOfObject.elementName.namespaceURI.replace(/[:\/\.-]/g, '_');
  //var javaType = javaNamespaceURI + localPart;
  //console.log('##javaType: ' + javaType)
  console.log('##javaType: ' + javaNamespaceURI + anyOfObject.elementName.localPart);
  //return(javaType);
  return(javaNamespaceURI + anyOfObject.elementName.localPart);
}

/*SoiSchemaGenerator.prototype.getDefinition = function(sourceSchemaObject) {
  console.log('##get definition');

  for (var definition in sourceSchemaObject.definitions) {
    console.log('##definition: ' + definition);
  }

  return(definition);
}*/

SoiSchemaGenerator.prototype.getDefinitionObjectName = function(anyOfObject) {
  console.log('##get definition from anyOf object reference: ' + anyOfObject.properties.value.$ref);
  var anyOfObjectDefinitionReference = anyOfObject.properties.value.$ref;
  return(anyOfObjectDefinitionReference.substring(anyOfObjectDefinitionReference.lastIndexOf('/') + 1));
}
/*
SoiSchemaGenerator.prototype.getRemoteDefinitionNamespace = function(anyOfObject) {
  console.log('##get namespace from remote anyOf object property definition reference: ' + anyOfObject.properties.value.$ref);
  var anyOfObjectPropertyDefinitionReference = anyOfObject.properties.value.$ref;
  return(anyOfObjectPropertyDefinitionReference.substring(0, anyOfObjectPropertyDefinitionReference.indexOf('#')));
}
*/
//SoiSchemaGenerator.prototype.getProperty = function(sourceSchemaObject, definition) {
/*
SoiSchemaGenerator.prototype.getProperty = function(sourceSchemaObject) {
  var properties = {};

  console.log('##iterate definitions');

  for (var definition in sourceSchemaObject.definitions) {
    console.log('##definition: ' + definition);
    console.log('##iterate definition objects');

    for (var definitionObject in sourceSchemaObject.definitions[definition]) {
      console.log('##definition object: ' + definitionObject);
      if ( definitionObject == 'allOf') {
        var definitionObjectAllOfObjects = sourceSchemaObject.definitions[definition][definitionObject][1];
        console.log('###iterate definition object allOf objects') ;

        for (var definitionObjectAllOfObject in definitionObjectAllOfObjects) {
          console.log('###definitionObjectAllOfObject: ' + definitionObjectAllOfObject);
          if ( definitionObjectAllOfObject == 'properties') {
            var definitionObjectAllOfObjectProperties = definitionObjectAllOfObjects[definitionObjectAllOfObject];
            console.log('####iterate definitionObjectAllOfObjectProperties');

            for (var definitionObjectAllOfObjectProperty in definitionObjectAllOfObjectProperties) {
              console.log('####definitionObjectAllOfObjectProperty: ' + definitionObjectAllOfObjectProperty);
              if ( definitionObjectAllOfObjectProperty != "otherAttributes" ) {
                console.log('####Is definitionObjectAllOfObjectPropertyAllOfType defined?');
                if ( typeof definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty].allOf[0].type != "undefined") {
                //for (var propertyAllOfObjectPropertyAllOfDefinitionObject in definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty].allOf[0]) {
                  //console.log('#####propertyAllOfObjectPropertyAllOfProperty: ' + propertyAllOfObjectPropertyAllOfDefinitionObject);
                  console.log('#####definitionObjectAllOfObjectPropertyAllOfType: ' + definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty].allOf[0].type);
                  //if ( definitionObjectAllOfObjectProperty != "otherAttributes" ) {
                    //if (( propertyAllOfObjectPropertyAllOfDefinitionObject == "type") || ( properties[definitionObjectAllOfObjectProperty].type == "array" )) {
                    //if (( propertyAllOfObjectPropertyAllOfDefinitionObject == "type") 
                      //|| ( definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty].allOf[0][propertyAllOfObjectPropertyAllOfDefinitionObject] == "array" )) {
                      //console.log('#####propertyAllOfObjectPropertyAllOfPropertyTypeValue: ' 
                        //+ definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty].allOf[0][propertyAllOfObjectPropertyAllOfDefinitionObject]);
                  properties[definitionObjectAllOfObjectProperty] 
                    = getPropertyArrayObject(definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty]
                      , this.schemaPropertyArrayTemplateBuffer);
                } else {
                  //console.log('#####propertyAllOfObjectPropertyAllOfPropertySomeValue: ' 
                      //+ definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty].allOf[0][propertyAllOfObjectPropertyAllOfDefinitionObject]);
                  properties[definitionObjectAllOfObjectProperty] 
                    = getPropertyObject(definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty]
                      , this.schemaPropertyObjectTemplateBuffer, this.schemaFilepathMappings);
                };
              };
            };

          }
        };

      }
    };

  }

  function getPropertyArrayObject (propertyObject, schemaPropertyArrayTemplateBuffer) {
    console.log('#####get property array object: ' + propertyObject.title);
    var propertyObjectTemplate = JSON.parse(schemaPropertyArrayTemplateBuffer);
    //propertyObjectTemplate.type = 'object';
    propertyObjectTemplate.items.$ref = propertyObject.title + '.json';
    return(propertyObjectTemplate);
  }

  function getPropertyObject (propertyObject, schemaPropertyObjectTemplateBuffer, schemaFilepathMappings) {
    console.log('#####get property object: ' + propertyObject.title);
    var propertyObjectTemplate = JSON.parse(schemaPropertyObjectTemplateBuffer);
    propertyObjectTemplate.type = 'object';
    //var schemaObjectPath = propertyObject.elementName.namespaceURI.replace(/[\/:.]/gi, '_');
*/
/*
    var schemaFilepathMappingObject = schemaFilepathMappings.find(function(schemaFilepathMapping){
      return(schemaFilepathMapping.namespace === propertyObject.elementName.namespaceURI);
    });
*/
/*
    //propertyObjectTemplate.$ref = schemaFilepathMappingObject.filepath + propertyObject.title + '.json';
    propertyObjectTemplate.$ref = this.getSchemaFilepath + propertyObject.title + '.json';
    return(propertyObjectTemplate);
  }

  return(properties);
}
*/

SoiSchemaGenerator.prototype.getProperty = function(definitionObject) {
  var properties = {};
  //if ( typeof definitionObject != "undefined" ) {
  //console.log('##iterate definitions');

  //for (var index = 0; (var definition in sourceSchemaObject.definitions) {
  console.log('##get properties for definition: ' + definitionObject);
  //  console.log('##iterate definition objects');

    /*for (var definitionObject in sourceSchemaObject.definitions[definition]) {
      console.log('##definition object: ' + definitionObject);
      console.log('##definition object: ' + 
      if ( definitionObject == 'allOf') {
        var definitionObjectAllOfObjects = sourceSchemaObject.definitions[definition][definitionObject][1];
        console.log('###iterate definition object allOf objects') ;

        for (var definitionObjectAllOfObject in definitionObjectAllOfObjects) {
          console.log('###definitionObjectAllOfObject: ' + definitionObjectAllOfObject);
          if ( definitionObjectAllOfObject == 'properties') {
            var definitionObjectAllOfObjectProperties = definitionObjectAllOfObjects[definitionObjectAllOfObject];
            console.log('####iterate definitionObjectAllOfObjectProperties');
*/
/*            for (var definitionObjectAllOfObjectProperty in definitionObjectAllOfObjectProperties) {
              console.log('####definitionObjectAllOfObjectProperty: ' + definitionObjectAllOfObjectProperty);
              if ( definitionObjectAllOfObjectProperty != "otherAttributes" ) {
                console.log('####Is definitionObjectAllOfObjectPropertyAllOfType defined?');
                if ( typeof definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty].allOf[0].type != "undefined") {
                  console.log('#####definitionObjectAllOfObjectPropertyAllOfType: ' + definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty].allOf[0].type);
                  properties[definitionObjectAllOfObjectProperty] 
                    = getPropertyArrayObject(definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty]
                      , this.schemaPropertyArrayTemplateBuffer);
                } else {
                  properties[definitionObjectAllOfObjectProperty] 
                    = getPropertyObject(definitionObjectAllOfObjectProperties[definitionObjectAllOfObjectProperty]
                      , this.schemaPropertyObjectTemplateBuffer, this.schemaFilepathMappings);
                };
              };
            };
*/
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
            = this.getSchemaFileDestination(definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty]);
          properties[definitionObjectAllOfObjectProperty] = propertyObjectTemplate;
        } else {
          if ( typeof definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty].attributeName == "object" )
            properties[definitionObjectAllOfObjectProperty] = { 'type' : 'string' };
        };
      };
    };
  };
          //}
        //};

      //}
    //};

  //}
/*
  //function getPropertyArrayObject (propertyObject, schemaPropertyArrayTemplateBuffer) {
  function getPropertyArrayObject (propertyObject, schemaPropertyArrayTemplate) {
    console.log('#####get property array object: ' + propertyObject.title);
    //var propertyObjectTemplate = JSON.parse(schemaPropertyArrayTemplateBuffer);
    //propertyObjectTemplate.items.$ref = propertyObject.title + '.json';
    schemaPropertyArrayTemplate.items.$ref = this.getSchemaFileDestination(propertyObject);
    //return(propertyObjectTemplate);
    return(schemaPropertyArrayTemplate);
  }
*/
/*
  //function getPropertyObject (propertyObject, schemaPropertyObjectTemplateBuffer, schemaFilepathMappings) {
  function getPropertyObject (propertyObject, schemaPropertyObjectTemplateBuffer, schemaFilepathMappings) {
    console.log('#####get property object: ' + propertyObject.title);
    //var propertyObjectTemplate = JSON.parse(schemaPropertyObjectTemplateBuffer);
    
    propertyObjectTemplate.type = 'object';
    //propertyObjectTemplate.$ref = this.getSchemaFilepath() + propertyObject.title + '.json';
    propertyObjectTemplate.$ref = this.getSchemaFileDestination(propertyObject);
    return(propertyObjectTemplate);
  }
*/
/*
  } else {
    console.log('##get properties for remote definition');
    var propertyObjectTemplate = this.getSchemaTemplateObject('property-object-template');
                propertyObjectTemplate.type = 'object';
                propertyObjectTemplate.$ref 
                  = this.getSchemaFileDestination(definitionObject.allOf[1].properties[definitionObjectAllOfObjectProperty]);
                properties[definitionObjectAllOfObjectProperty] = propertyObjectTemplate;
  }
  */
  return(properties); 
}

SoiSchemaGenerator.prototype.getRemoteDefinitionReference = function (anyOfObject) {
  var properties  = {}; 
  console.log('##get properties for remote definition');
  //var propertyObjectTemplate = this.getSchemaTemplateObject('property-object-template');
  //propertyObjectTemplate.type = 'object';
  //propertyObjectTemplate.$ref 
  //  = this.getRemoteDefinitionFileLocation(anyOfObject);
  //properties[anyOfObject.elementName.localPart] = propertyObjectTemplate;
  remoteDefinitionObjectName = this.getDefinitionObjectName(anyOfObject);
  properties[remoteDefinitionObjectName] = { '$ref' : this.getRemoteDefinitionFileLocation(anyOfObject) };
  return(properties); 
}

//SoiSchemaGenerator.prototype.getRequired = function(sourceSchemaObject, definition) {
SoiSchemaGenerator.prototype.getRequired = function(sourceSchemaObject) {
  //var requiredObject;
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