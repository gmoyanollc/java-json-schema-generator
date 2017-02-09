var SoiSchemaGenerator = function SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer, schemaPropertyObjectTemplateBuffer) {

  this.schemaRootTemplateObject = schemaRootTemplateObject;
  this.schemaPropertyArrayTemplateBuffer = schemaPropertyArrayTemplateBuffer;
  this.schemaPropertyObjectTemplateBuffer = schemaPropertyObjectTemplateBuffer;
}

SoiSchemaGenerator.prototype.getId = function(sourceSchemaObject) {
  console.log('##get id from anyOf elementName');
  var localPart = sourceSchemaObject.anyOf[0].elementName.localPart;
  var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
  var id = namespaceURI + localPart;
  console.log('##id: ' + id)
  return(id);
}

SoiSchemaGenerator.prototype.getTitle = function(sourceSchemaObject) {
  console.log('##get title from anyOf elementName');
  var title = sourceSchemaObject.anyOf[0].elementName.localPart;
  console.log('##title: ' + title)
  return(title);
}

SoiSchemaGenerator.prototype.getType = function(sourceSchemaObject) {
  console.log('##get type from anyOf type');
  var type = sourceSchemaObject.anyOf[0].type;
  console.log('##type: ' + type)
  return(type);
}

SoiSchemaGenerator.prototype.getDescription = function(sourceSchemaObject) {
  console.log('##get description from ?xsd short description' );
  var description = '?xsd short description';
  console.log('##description: ' + description)
  return(description);
}

SoiSchemaGenerator.prototype.getVersion = function(sourceSchemaObject) {
  console.log('##keeping version from template');
  //var version = 'sourceSchemaObject.anyOf[0].?';
  //console.log('##version: ' + version)
  //return(version);
}

SoiSchemaGenerator.prototype.getJavaType = function(sourceSchemaObject) {
  console.log('##get javaType from anyOf elementName');
  var localPart = sourceSchemaObject.anyOf[0].elementName.localPart;
  var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
  var javaNamespaceURI = namespaceURI.replace(/[:\/\.-]/g, '_');
  var javaType = javaNamespaceURI + localPart;
  console.log('##javaType: ' + javaType)
  return(javaType);
}

/*SoiSchemaGenerator.prototype.getDefinition = function(sourceSchemaObject) {
  console.log('##get definition');

  for (var definition in sourceSchemaObject.definitions) {
    console.log('##definition: ' + definition);
  }

  return(definition);
}*/

//SoiSchemaGenerator.prototype.getProperty = function(sourceSchemaObject, definition) {
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
                      , this.schemaPropertyObjectTemplateBuffer);
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

  function getPropertyObject (propertyObject, schemaPropertyObjectTemplateBuffer) {
    console.log('#####get property object: ' + propertyObject.title);
    var propertyObjectTemplate = JSON.parse(schemaPropertyObjectTemplateBuffer);
    propertyObjectTemplate.type = 'object';
    propertyObjectTemplate.$ref = propertyObject.title + '.json';
    return(propertyObjectTemplate);
  }

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