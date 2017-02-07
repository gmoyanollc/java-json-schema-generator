var SoiSchemaGenerator = function SoiSchemaGenerator(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer, schemaPropertyObjectTemplateBuffer) {

  this.schemaRootTemplateObject = schemaRootTemplateObject;
  this.schemaPropertyArrayTemplateBuffer = schemaPropertyArrayTemplateBuffer;
  this.schemaPropertyObjectTemplateBuffer = schemaPropertyObjectTemplateBuffer;
}

/*
var SoiSchemaGenerator = class SoiSchemaGenerator {
  constructor(schemaRootTemplateObject, schemaPropertyArrayTemplateBuffer, schemaPropertyObjectTemplateBuffer) {
    this.schemaRootTemplateObject = schemaRootTemplateObject;
    this.schemaPropertyArrayTemplateBuffer = schemaPropertyArrayTemplateBuffer;
    this.schemaPropertyObjectTemplateBuffer = schemaPropertyObjectTemplateBuffer;
  }
}*/

SoiSchemaGenerator.prototype.getId = function(sourceSchemaObject) {
  console.log('##getting id');
  var localPart = sourceSchemaObject.anyOf[0].elementName.localPart;
  var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
  var id = namespaceURI + localPart;
  console.log('##id: ' + id)
  return(id);
}

SoiSchemaGenerator.prototype.getTitle = function(sourceSchemaObject) {
  console.log('##getting title');
  var title = sourceSchemaObject.anyOf[0].elementName.localPart;
  console.log('##title: ' + title)
  return(title);
}

SoiSchemaGenerator.prototype.getType = function(sourceSchemaObject) {
  console.log('##getting type');
  var type = sourceSchemaObject.anyOf[0].type;
  console.log('##type: ' + type)
  return(type);
}

SoiSchemaGenerator.prototype.getDescription = function(sourceSchemaObject) {
  console.log('##getting description');
  var description = 'sourceSchemaObject.anyOf[0].?';
  console.log('##description: ' + description)
  return(description);
}

SoiSchemaGenerator.prototype.getVersion = function(sourceSchemaObject) {
  console.log('##getting version');
  var version = 'sourceSchemaObject.anyOf[0].?';
  console.log('##description: ' + version)
  return(version);
}

SoiSchemaGenerator.prototype.getJavaType = function(sourceSchemaObject) {
  console.log('##getting javaType');
  var localPart = sourceSchemaObject.anyOf[0].elementName.localPart;
  var namespaceURI = sourceSchemaObject.anyOf[0].elementName.namespaceURI;
  var javaNamespaceURI = namespaceURI.replace(/[:\/\.-]/g, '_');
  var javaType = javaNamespaceURI + localPart;
  console.log('##javaType: ' + javaType)
  return(javaType);
}

SoiSchemaGenerator.prototype.getDefinition = function(sourceSchemaObject) {
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

SoiSchemaGenerator.prototype.getProperty = function(sourceSchemaObject, definitionKey) {
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
              properties[propertyAllOfObjectPropertyKey] 
                = createPropertyObject(propertyAllOfObjectProperties[propertyAllOfObjectPropertyKey], this.schemaPropertyObjectTemplateBuffer);
              //var propertyObject = JSON.parse(schemaPropertyObjectTemplateBuffer);
              //var propertyAllOfObjectPropertyObject = {[propertyAllOfObjectPropertyKey]: propertyObject};
              //console.log('####propertyAllOfObjectPropertyObject: ' + JSON.stringify(propertyAllOfObjectPropertyObject));
            }
          }

        };
      }

    };
  }

  function createPropertyObject (propertyObject, schemaPropertyObjectTemplateBuffer) {
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

SoiSchemaGenerator.prototype.getRequired = function(sourceSchemaObject, definitionKey) {
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

module.exports = SoiSchemaGenerator;