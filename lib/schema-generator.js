var fs = require("fs");
var path = require("path");
var config = {};
config.default = require("../.config/defaults.js").configDefaults;
config.mapping = require("../.config/mappings.js").configMappings;

function readFile(file) {
  try {
    console.log("  read file: " + file);
    var fileBuffer = fs.readFileSync(file);
    return (fileBuffer);
  } catch (error) {
    console.log(error);    
  }
}

/* 049b function isEmpty(object) {

  for(var property in object) {
      if(object.hasOwnProperty(property))
          return false;
  }

  return true;
} 049b */

var GeneratedSchemaLog = { 
  identifiers: [],

  pushIdentifier: function (identifier) {
    this.identifiers.push(identifier)
  },

  hasIdentifier: function (identifier) {
    return(this.identifiers.filter( function(identifiersItem) { if (identifiersItem.identifier == identifier) return true } ).length > 0);
  },

  getSchemaFileDestination: function (identifier) {

    function match(item) {
      return item.identifier == this.toString()
    }

    var identifierMatch = this.identifiers.find(match, identifier);
    return(identifierMatch.schemaFile);
  },

  logIdentifierList: function () { 
    this.identifiers.sort();
    console.log("\n# Generated schema identifiers:\n");

    this.identifiers.forEach(function (identifiersItem) {
      console.log("    [" + identifiersItem.identifier + ']  (' + identifiersItem.schemaFile + ')')
    });

    console.log("\n  count: " + this.identifiers.length);
  }
}

class ConfigDerived {
  constructor () { 
    this.w3cXmlTypeSchema = {}
  }

  setW3cXmlTypeSchema () { 
    var w3cXmlTypeSchemaFileBuffer = readFile(config.mapping.w3cXmlType.schemaFile);
    if (typeof w3cXmlTypeSchemaFileBuffer != "undefined")
      this.w3cXmlTypeSchema = JSON.parse(w3cXmlTypeSchemaFileBuffer)
    else 
      console.log("  ERROR: nothing to parse for " + config.mapping.w3cXmlType.schemaFile);
  }

  setRootSchemaTargetSchemaFilepath (configMappingSchemaFilepathMappings, rootSchemaNamespace) {
    console.log("  setRootSchemaTargetSchemaFilepath");
    let targetSchemaFilepath;

    for (var index = 0; index < configMappingSchemaFilepathMappings.length; index++) {
      if (configMappingSchemaFilepathMappings[index].namespace === rootSchemaNamespace)
        targetSchemaFilepath = configMappingSchemaFilepathMappings[index].targetSchemaFilepath
    };

    if (typeof targetSchemaFilepath !== "undefined") {
      this.rootSchemaTargetSchemaFilepath = targetSchemaFilepath
      console.log("  rootSchemaTargetSchemaFilepath: " + targetSchemaFilepath);
    } else {
      throw ("  ERROR: source schema namespace was not matched for rootSchemaTargetSchemaFilepath.");
    }
  
  }

}

class Schema {
  constructor (schemaComponent) {
    this.schemaComponent = schemaComponent;
  }

  static isUriEnumType (propertyDefinition) {
    var isUriEnumType = false;
    if (typeof propertyDefinition.allOf != "undefined") {
      
      propertyDefinition.allOf.some( function (propertyDefinitionAllOfItem) {
        if ((typeof propertyDefinitionAllOfItem.type != "undefined") && (propertyDefinitionAllOfItem.type == "object")) {
          if ((typeof propertyDefinitionAllOfItem.properties != "undefined") && (typeof propertyDefinitionAllOfItem.properties.localPart != "undefined") && (typeof propertyDefinitionAllOfItem.properties.localPart.enum != "undefined")) {
            isUriEnumType = true;
            return(true);
          }
        }
      }, this);
      
    };
    return(isUriEnumType);
  }

  static getType (propertyDefinition, propertyName, propertySourceContent) {

    function hasValidW3cXmlTypeSchemaDefinition (definitionReferenceName) {
      if (typeof config.derived.w3cXmlTypeSchema.definitions[definitionReferenceName] != "undefined")
        if ((typeof config.derived.w3cXmlTypeSchema.definitions[definitionReferenceName].type != "undefined") || (typeof config.derived.w3cXmlTypeSchema.definitions[definitionReferenceName].anyOf != "undefined")) 
          return(true)
    }

    function getTypeNameW3cXmlTypeSchemaDefinition (typeName) {
      var typeNameW3cXmlTypeSchemaDefinition;
      if (typeof typeName != "undefined") {
        if (hasValidW3cXmlTypeSchemaDefinition (typeName))
          typeNameW3cXmlTypeSchemaDefinition = config.derived.w3cXmlTypeSchema.definitions[typeName]
        else {
          var lowerCaseTypeName = typeName.charAt(0).toLowerCase() + typeName.slice(1);
          if (hasValidW3cXmlTypeSchemaDefinition (lowerCaseTypeName))
            typeNameW3cXmlTypeSchemaDefinition = config.derived.w3cXmlTypeSchema.definitions[lowerCaseDefinitionReferenceName]
        }
      }
      return(typeNameW3cXmlTypeSchemaDefinition);
    }

    function getW3cXmlTypeSchemaDefinition (propertyDefinition) {
      var w3cXmlTypeSchemaDefinition;
      var definitionReferenceName;
      if (typeof propertyDefinition.$ref != "undefined")
        w3cXmlTypeSchemaDefinition = getTypeNameW3cXmlTypeSchemaDefinition(SchemaComponent.getDefinitionReferenceName(propertyDefinition))
      else
        if (typeof propertyDefinition.allOf != "undefined") {

          propertyDefinition.allOf.some( function (propertyDefinitionAllOfItem) {
            if (typeof propertyDefinitionAllOfItem.$ref != "undefined") {
              definitionReferenceName = SchemaComponent.getDefinitionReferenceName(propertyDefinitionAllOfItem);
              w3cXmlTypeSchemaDefinition = getTypeNameW3cXmlTypeSchemaDefinition (definitionReferenceName);
              if (typeof w3cXmlTypeSchemaDefinition != "undefined") 
                return(true);
            } else 
              if (typeof propertyDefinitionAllOfItem.properties != "undefined") { 
                if (typeof propertyDefinitionAllOfItem.properties.value != "undefined")
                  if (typeof propertyDefinitionAllOfItem.properties.value.allOf != "undefined")

                  propertyDefinitionAllOfItem.properties.value.allOf.some( function (propertyDefinitionAllOfItemPropertiesValueAllOfItem) {
                      definitionReferenceName = SchemaComponent.getDefinitionReferenceName(propertyDefinitionAllOfItemPropertiesValueAllOfItem.$ref);
                      w3cXmlTypeSchemaDefinition = getTypeNameW3cXmlTypeSchemaDefinition (definitionReferenceName);
                      if (typeof w3cXmlTypeSchemaDefinition != "undefined") 
                        return(true);
                    }, this);

                  else {
                    definitionReferenceName = SchemaComponent.getDefinitionReferenceName( propertyDefinitionAllOfItem.properties.value);
                    w3cXmlTypeSchemaDefinition = getTypeNameW3cXmlTypeSchemaDefinition (definitionReferenceName);
                    if (typeof w3cXmlTypeSchemaDefinition != "undefined") 
                      return(true);
                  }
              } else {
                if (typeof propertyDefinitionAllOfItem.items != "undefined") {
                  if (typeof propertyDefinitionAllOfItem.items.properties != "undefined") {
                    if (typeof propertyDefinitionAllOfItem.items.properties.value != "undefined") {
                      definitionReferenceName = SchemaComponent.getDefinitionReferenceName( definitionObjectContainerAllOfItem.properties.value);
                      if (validW3cXmlTypeSchemaDefinition(definitionReferenceName)) {
                        w3cXmlTypeSchemaDefinition = config.derived.w3cXmlTypeSchema.definitions[definitionReferenceName];
                        return(true);
                      }
                    }
                  } else {
                    definitionReferenceName = SchemaComponent.getDefinitionReferenceName( propertyDefinitionAllOfItem.items);
                    w3cXmlTypeSchemaDefinition = getTypeNameW3cXmlTypeSchemaDefinition (definitionReferenceName);
                    if (typeof w3cXmlTypeSchemaDefinition != "undefined") 
                      return(true);
                  }
                } else {
                  definitionReferenceName = SchemaComponent.getDefinitionReferenceName( propertyDefinitionAllOfItem);
                  w3cXmlTypeSchemaDefinition = getTypeNameW3cXmlTypeSchemaDefinition (definitionReferenceName);
                  if (typeof w3cXmlTypeSchemaDefinition != "undefined") 
                    return(true);
                }
              }
          }, this);

        };
      return(w3cXmlTypeSchemaDefinition);
    }

    console.log("  Schema.getType");
    var schemaComponentType;
    var typeNameW3cXmlTypeSchemaDefinition;
    if (typeof propertyDefinition.type != "undefined")
      schemaComponentType = propertyDefinition.type
    else {
      if (typeof propertySourceContent != "undefined") 
        if (typeof propertyDefinition.propertyType != "undefined") {
          switch (propertyDefinition.propertyType) {
            case "element" :
              if (propertySourceContent.facets.length > 0)
                if (typeof propertySourceContent.facets[0].baseType != "undefined") {
                  var sourceContentBaseType = propertySourceContent.facets[0].baseType.substring(propertySourceContent.facets[0].baseType.lastIndexOf(':') + 1);
                  typeNameW3cXmlTypeSchemaDefinition = this.getTypeNameW3cXmlTypeSchemaDefinition(sourceContentBaseType);
                }
              break;
            case "attribute" :
              if (typeof propertySourceContent.attributes != "undefined")
                if (typeof propertySourceContent.attributes[propertyName] != "undefined")
                  if (typeof propertySourceContent.attributes[propertyName].facets != "undefined")
                    if (propertySourceContent.attributes[propertyName].facets.length > 0)
                      if (typeof propertySourceContent.attributes[propertyName].facets[0].baseType != "undefined") {
                        var sourceContentBaseType = propertySourceContent.attributes[propertyName].facets[0].baseType.substring(propertySourceContent.attributes[propertyName].facets[0].baseType.lastIndexOf(':') + 1);
                        typeNameW3cXmlTypeSchemaDefinition = getTypeNameW3cXmlTypeSchemaDefinition(sourceContentBaseType)
                      };
              break;
            default :
              //w3cXmlTypeSchemaDefinition = getW3cXmlTypeSchemaDefinition(propertyDefinition)
              console.log("  [WARNING] propertyDefinition has propertySourceContent but propertyType not handled")
          }
        }
        //051 var w3cXmlTypeSchemaDefinition;
        if (typeof typeNameW3cXmlTypeSchemaDefinition != "undefined")
          //051 w3cXmlTypeSchemaDefinition = typeNameW3cXmlTypeSchemaDefinition
          schemaComponentType = typeNameW3cXmlTypeSchemaDefinition
        else {
          var w3cXmlTypeSchemaDefinition = getW3cXmlTypeSchemaDefinition(propertyDefinition);
          if (typeof w3cXmlTypeSchemaDefinition != "undefined")
            if (typeof w3cXmlTypeSchemaDefinition.type != "undefined")
              schemaComponentType = w3cXmlTypeSchemaDefinition.type;
             else
               if (typeof w3cXmlTypeSchemaDefinition.anyOf != "undefined") {
                 schemaComponentType = {};
                 schemaComponentType.anyOf = w3cXmlTypeSchemaDefinition.anyOf
               } else
                 schemaComponentType = w3cXmlTypeSchemaDefinition
          else 
            if (Schema.isUriEnumType(propertyDefinition))
              schemaComponentType = "string"
            else
              console.log("  WARNING: Type undefined for: " + propertyName)
        }
    };
    return(schemaComponentType);
  }

  /*050 getFacets (definitionObjectProperty) {
    let facets = {};
    let facetContainer = SchemaComponent.getFacetContainer(definitionObjectProperty);
    
    for (const facet in config.default.facets.objectType) {
      if (typeof facetContainer[facet] != "undefined")
        facets = Object.assign(facets, { [facet] : facetContainer[facet] })
      else
        if (config.default.facets.objectType[facet] != null)
        facets = Object.assign(facets, { [facet] : config.default.facets.objectType[facet] })
    };
      
    return(facets);
  }; */
  static getFacets (propertyDefinition, propertySourceContent) {
    
    function getAnyDefaultFacets() {
      var anyDefaultFacets = [];
      var propertyPrimitiveType;
      if (Array.isArray(propertyPrimitiveTemplate.type))
        propertyPrimitiveType = propertyPrimitiveTemplate.type[0]
      else propertyPrimitiveType = propertyPrimitiveTemplate.type;
      if (typeof config.default.defaultPrimitiveFacets[propertyPrimitiveType] != "undefined")

        for (var facet in config.default.defaultPrimitiveFacets[propertyPrimitiveType]) {
          if (typeof config.default.defaultPrimitiveFacets[propertyPrimitiveType[facet]] == "undefined")
            anyDefaultFacets.push({ [facet]: config.default.defaultPrimitiveFacets[propertyPrimitiveType][facet] })
        }

      else console.log("Primitive default facets not defined for: " + propertyPrimitiveType);
      return(anyDefaultFacets);
    }

    function getUriEnum (propertyDefinition) {
      var uriEnum;
      if (typeof propertyDefinition.allOf != "undefined") {

        propertyDefinition.allOf.some( function (propertyDefinitionAllOfItem) {
          if ((typeof propertyDefinitionAllOfItem.type != "undefined") && (propertyDefinitionAllOfItem.type == "object")) {
            if ((typeof propertyDefinitionAllOfItem.properties != "undefined") && (typeof propertyDefinitionAllOfItem.properties.localPart != "undefined") && (typeof propertyDefinitionAllOfItem.properties.localPart.enum != "undefined")) {
              uriEnum = { "enum" : [] };
              if ((typeof propertyDefinitionAllOfItem.properties.namespaceURI  != "undefined") && (typeof propertyDefinitionAllOfItem.properties.namespaceURI.enum  != "undefined"))
                uriEnum.enum.push(propertyDefinitionAllOfItem.properties.namespaceURI.enum[0] + '#' + propertyDefinitionAllOfItem.properties.localPart.enum[0])
              else
                uriEnum.enum.push(propertyDefinitionAllOfItem.properties.localPart.enum[0])
            }
            return(true);
          }
        }, this);

      }
      return (uriEnum);
    }

    console.log("  getFacets");
    var facets = {};
    var facetContainer;
    if (typeof propertySourceContent != "undefined") 
        if ((typeof propertyDefinition.propertyType != "undefined")
          && (propertyDefinition.propertyType == "attribute")) {
            if (typeof propertySourceContent.attributes != "undefined")
              if (typeof propertySourceContent.attributes[propertyDefinition.title] != "undefined")
                facetContainer = propertySourceContent.attributes[propertyDefinition.title].facets
        } else
          facetContainer = propertySourceContent.facets;
    if (typeof facetContainer != "undefined") {
      if (facetContainer.length > 0) {

        facetContainer.forEach(function (facetContainerItem) {
          
          for (var facetItem in facetContainerItem) {
            switch (facetItem) {
              case "enumeration" : {
                if (typeof facets.enum == "undefined") 
                  facets.enum = [];

                facetContainerItem[facetItem].forEach(function (facet) {
                  /* if (typeof facet.documentation != "undefined")
                    facets.enum.push(facet.value + '-' + facet.documentation[0])
                  else */
                  facets.enum.push(facet.value)
                }, this)

                break;
              }
              case "maxExclusive" : {
                if (typeof facets.exclusiveMaximum == "undefined") 
                  facets.exclusiveMaximum = facetContainerItem[facetItem]
                else
                  if (facets.exclusiveMaximum < facetContainerItem[facetItem])
                    facets.exclusiveMaximum = facetContainerItem[facetItem];
                break;
              }
              case "minExclusive" : {
                if (typeof facets.exclusiveMinimum == "undefined") 
                  facets.exclusiveMinimum = facetContainerItem[facetItem]
                else
                  if (facets.exclusiveMinimum > facetContainerItem[facetItem])
                    facets.exclusiveMinimum = facetContainerItem[facetItem];
                break;
              }
              case "maxInclusive" : {
                if (typeof facets.maximum == "undefined") 
                  facets.maximum = facetContainerItem[facetItem]
                else
                  if (facets.maximum < facetContainerItem[facetItem])
                  facets.maximum = facetContainerItem[facetItem];
                break;
              }
              case "minInclusive" : {
                if (typeof facets.minimum == "undefined") 
                  facets.minimum = facetContainerItem[facetItem]
                else
                  if (facets.minimum > facetContainerItem[facetItem])
                    facets.minimum = facetContainerItem[facetItem];
                break;
              }
              case "baseType" : 
              case "documentation" : break
              default :
                facets[facetItem] = facetContainerItem[facetItem]
            }
          }

        }, this);

      }
    }
    if (Schema.isUriEnumType(propertyDefinition))
      facets = getUriEnum(propertyDefinition);
    if (Object.keys(facets).length < 1)
      console.log("  [WARNING] unable to setFacets, which may be ok if facets do not exist for schemaComponent");
    return(facets);
  }

  // replaces getComponentSchemaPropertyDefinition
  getPropertyDefinition (definitionPropertyContainer) {

    class PropertyPrimitive {

      setType (definitionObjectProperty, propertyName, propertySourceContent) {
        var primitiveType = Schema.getType(definitionObjectProperty, propertyName, propertySourceContent);
        if (typeof primitiveType != "undefined")
          if (typeof primitiveType.anyOf != "undefined")
            this.anyOf = primitiveType.anyOf
          else
            this.type = primitiveType
        else
          this.type = "string"
      } 

      setFacets (propertyDefinition, propertySourceContent) {
        var facets = Schema.getFacets(propertyDefinition, propertySourceContent);
        
          Object.keys(facets).forEach(function (facetItem) {
            this[facetItem] = facets[facetItem];
          }, this)

        /*function getAnyDefaultFacets() {
          var anyDefaultFacets = [];
          var propertyPrimitiveType;
          if (Array.isArray(propertyPrimitiveTemplate.type))
            propertyPrimitiveType = propertyPrimitiveTemplate.type[0]
          else propertyPrimitiveType = propertyPrimitiveTemplate.type;
          if (typeof config.default.defaultPrimitiveFacets[propertyPrimitiveType] != "undefined")
  
            for (var facet in config.default.defaultPrimitiveFacets[propertyPrimitiveType]) {
              if (typeof config.default.defaultPrimitiveFacets[propertyPrimitiveType[facet]] == "undefined")
                anyDefaultFacets.push({ [facet]: config.default.defaultPrimitiveFacets[propertyPrimitiveType][facet] })
            }
  
          else console.log("Primitive default facets not defined for: " + propertyPrimitiveType);
          return(anyDefaultFacets);
        }

        console.log("  setFacets");
        var facetContainer;
        if (typeof sourceContent != "undefined") 
          //050 if (typeof schemaComponent.sourceContent.components[schemaComponent.name] != "undefined")
            if ((typeof definitionObjectProperty.propertyType != "undefined")
              && (definitionObjectProperty.propertyType == "attribute")) {
                //050 if (typeof schemaComponent.sourceContent.components[schemaComponent.name].attributes != "undefined")
                if (typeof sourceContent.attributes != "undefined")
                  //050 if (typeof schemaComponent.sourceContent.components[schemaComponent.name].attributes[definitionObjectProperty.title] != "undefined")
                  if (typeof sourceContent.attributes[definitionObjectProperty.title] != "undefined")
                    //050 facetContainer = schemaComponent.sourceContent.components[schemaComponent.name].attributes[definitionObjectProperty.title].facets
                    facetContainer = sourceContent.attributes[definitionObjectProperty.title].facets
            } else
              //050 facetContainer = schemaComponent.sourceContent.components[schemaComponent.name].facets;
              facetContainer = sourceContent.facets;
        if (typeof facetContainer != "undefined") {
          if (facetContainer.length > 0) {

            facetContainer.forEach(function (facetContainerItem) {
              
              for (var facetItem in facetContainerItem) {
                switch (facetItem) {
                  case "enumeration" : {
                    if (typeof this.enum == "undefined") 
                      this.enum = [];

                    facetContainerItem[facetItem].forEach(function (facet) {
                      if (typeof facet.documentation != "undefined")
                        this.enum.push(facet.value + '-' + facet.documentation[0])
                      else
                        this.enum.push(facet.value)
                    }, this)

                    break;
                  }
                  case "maxExclusive" : {
                    if (typeof this.exclusiveMaximum == "undefined") 
                      this.exclusiveMaximum = facetContainerItem[facetItem]
                    else
                      if (this.exclusiveMaximum < facetContainerItem[facetItem])
                        this.exclusiveMaximum = facetContainerItem[facetItem];
                    break;
                  }
                  case "minExclusive" : {
                    if (typeof this.exclusiveMinimum == "undefined") 
                      this.exclusiveMinimum = facetContainerItem[facetItem]
                    else
                      if (this.exclusiveMinimum > facetContainerItem[facetItem])
                        this.exclusiveMinimum = facetContainerItem[facetItem];
                    break;
                  }
                  case "maxInclusive" : {
                    if (typeof this.maximum == "undefined") 
                      this.maximum = facetContainerItem[facetItem]
                    else
                      if (this.maximum < facetContainerItem[facetItem])
                        this.maximum = facetContainerItem[facetItem];
                    break;
                  }
                  case "minInclusive" : {
                    if (typeof this.minimum == "undefined") 
                      this.minimum = facetContainerItem[facetItem]
                    else
                      if (this.minimum > facetContainerItem[facetItem])
                        this.minimum = facetContainerItem[facetItem];
                    break;
                  } 
                  default :
                    this[facetItem] = facetContainerItem[facetItem]
                }
              }

            }, this);

          }
        } else
          console.log("  [WARNING] unable to setFacets, which may be ok if facets do not exist for schemaComponent");*/
      }

      /* setEnum (definitionObjectProperty) {
        if (typeof definitionObjectProperty.enum != "undefined")
          this.enum = definitionObjectProperty.enum
        else
          if (typeof definitionObjectProperty.allOf != "undefined") {
            var enumDefinitionObjectPropertyAllOfItem;

            definitionObjectProperty.allOf.some( function (definitionObjectPropertyAllOfItem) {
              if (typeof definitionObjectPropertyAllOfItem.allOf != "undefined")
              
                definitionObjectPropertyAllOfItem.allOf.some( function (definitionObjectPropertyAllOfItemAllofItem) {
                  if (typeof definitionObjectPropertyAllOfItemAllofItem.enum != "undefined") {
                    enumDefinitionObjectPropertyAllOfItem = definitionObjectPropertyAllOfItemAllofItem;
                    return(true);
                  }
                }, this);

              else 
                enumDefinitionObjectPropertyAllOfItem = definitionObjectPropertyAllOfItem;
              if (typeof enumDefinitionObjectPropertyAllOfItem.enum != "undefined") {
                this.enum = definitionObjectPropertyAllOfItem.enum;
                return(true);
              } else {
                if ((typeof enumDefinitionObjectPropertyAllOfItem.properties != "undefined")
                  && (typeof enumDefinitionObjectPropertyAllOfItem.type != "undefined")) {
                  if (enumDefinitionObjectPropertyAllOfItem.type == "object") {
                    if (typeof enumDefinitionObjectPropertyAllOfItem.properties.localPart != "undefined") 
                      if (typeof enumDefinitionObjectPropertyAllOfItem.properties.localPart.enum != "undefined") 
                        console.log("  INFO: ignoring object type enumeration")
                  }
                }
              }
            }
            , this)

          }
      } */

    }

    class PropertyArray {

      setType (propertyDefinition, propertyName, propertySourceContent) {
        if ((typeof propertyDefinition.type != "undefined") || (typeof propertyDefinition.propertyType != "undefined")) {
          var arrayType = Schema.getType(propertyDefinition, propertyName, propertySourceContent);
          if (typeof arrayType != "undefined")
            if (typeof arrayType.anyOf != "undefined")
              this.anyOf = arrayType.anyOf
            else
              this.type = arrayType
          else
            this.type = "string"
        } else 
          this.type = "array";
      }

      setFacet (arrayDefinition, arraySourceContent) {
        /* let facetContainer = SchemaComponent.getFacetContainer(definitionObjectProperty);

        for (const facet in config.default.facets.arrayType) {
          if (typeof facetContainer[facet] != "undefined")
            this[facet] = facetContainer[facet]
          else
            if (config.default.facets.arrayType[facet] != null)
              this[facet] = config.default.facets.arrayType[facet]
        }; */
        var facets = Schema.getFacets(arrayDefinition, arraySourceContent);

        Object.keys(facets).forEach(function (facetItem) {
          this[facetItem] = facets[facetItem];
        }, this)

      }

      setItems (definitionObjectProperty, schemaComponent) {
        this.items = {};
        //050 if (typeof definitionObjectProperty.items != "undefined") {
          //050 if (typeof definitionObjectProperty.items.$ref != "undefined") 
            //050 this.items = getPropertyReference(schemaComponent, definitionObjectProperty.items)
        //050 } else
          //050 if (SchemaComponent.isComponent(definitionObjectProperty, config.derived.w3cXmlTypeSchema)) {
            //050 this.items = getPropertyReference(schemaComponent, definitionPropertyItem)
          //050 } else
        if (((typeof definitionObjectProperty.items != "undefined") && (typeof definitionObjectProperty.items.$ref != "undefined")) || (SchemaComponent.isComponent(definitionObjectProperty, config.derived.w3cXmlTypeSchema)))
          this.items = Object.assign(this.items, getPropertyReference(schemaComponent, definitionPropertyItem))
        else
          if (typeof definitionPropertyItem.allOf != "undefined") { 
            var allOfItemTypeContainer = SchemaComponent.getAllOfItemTypeContainer(definitionPropertyItem.allOf);
            if (typeof allOfItemTypeContainer != "undefined") {
              if (typeof allOfItemTypeContainer.items != "undefined")
                if (typeof allOfItemTypeContainer.items.$ref != "undefined") {
                  var propertyPrimitive = new PropertyPrimitive();
                  //propertyPrimitive.setType(definitionObjectProperty);
                  propertyPrimitive.setType(definitionObjectProperty, definitionPropertyItemName, schemaComponent.sourceContent);
                  this.items[definitionPropertyItemName] = propertyPrimitive;
                };
            } else
              throw("  allOfItemTypeContainer undefined");
          } else 
            throw("  definitionPropertyItem.allOf undefined");
      }

    }

    class PropertyObject {

      setType (definitionObjectProperty) {}

      setFacet (definitionObjectProperty) {
        let facetContainer = SchemaComponent.getFacetContainer(definitionObjectProperty);
        
        for (const facet in config.default.facets.objectType) {
          if (typeof facetContainer[facet] != "undefined")
            this[facet] = facetContainer[facet]
          else
            if (config.default.facets.objectType[facet] != null)
              this[facet] = config.default.facets.objectType[facet]
        };
        
      }

      setProperties (definitionObjectProperty, schemaComponent) {
        if (SchemaComponent.isComponent(definitionObjectProperty, config.derived.w3cXmlTypeSchema))
          if (typeof definitionObjectProperty.properties != "undefined")

          definitionObjectProperty.properties.forEach 

          else
            this.properties = getPropertyReference(schemaComponent, definitionPropertyItem)
        else {
          if (typeof definitionPropertyItem.allOf != "undefined") {
            var allOfItemTypeContainer = SchemaComponent.getAllOfItemTypeContainer(definitionPropertyItem.allOf);
            if (typeof allOfItemTypeContainer != "undefined")
              if (typeof allOfItemTypeContainer.localPart != "undefined") {
                if (typeof allOfItemTypeContainer.localPart.enum != "undefined") {
                  //propertyDefinition = setPropertyPrimitiveTemplate(allOfItemTypeContainer.localPart, schemaComponent.config)
                  var propertyPrimitive = new PropertyPrimitive();
                  //propertyPrimitive.setType(definitionObjectProperty);
                  propertyPrimitive.setType(definitionObjectProperty, definitionPropertyItemName, this.schemaComponent.sourceContent);
                  if (typeof propertyPrimitive.type != "undefined")
                    this.properties = propertyPrimitive
                  else
                    console.log("  WARNING: skipped property");
                }
              }
          }
        }
    }
  } // class PropertyObject
/* replaced by PropertyArray class
    function setPropertyArrayTemplate (definitionObjectProperty, schemaComponent) {
      var propertyArrayTemplate = {};
      if (typeof definitionObjectProperty.type != "undefined")
        propertyArrayTemplate.type = definitionObjectProperty.type
      else 
        propertyArrayTemplate.type = "array"; 
      if (typeof definitionObjectProperty.items != "undefined")
        if (typeof definitionObjectProperty.items.$ref != "undefined") 
          propertyArrayTemplate.items = getPropertyReference(schemaComponent, definitionObjectProperty.items);
      else
        throw("  ERROR: array type but items undefined");
      if (typeof definitionObjectProperty.maxItems != "undefined")
        propertyArrayTemplate.maxItems = definitionObjectProperty.maxItems;
      if (typeof definitionObjectProperty.minItems != "undefined")
        propertyArrayTemplate.minItems = definitionObjectProperty.minItems;
      return(propertyArrayTemplate);
    }
replaced by PropertyArray class */
// 049a replaced by PropertyPrimitive class
/* 049a    function setPropertyPrimitiveTemplate (definitionObjectProperty, schemaComponentConfig) {
      //? let defaultPrimitiveFacets = schemaComponentConfig.defaultPrimitiveFacets;

      function getAnyDefaultFacets(propertyPrimitiveTemplate) {
        var anyDefaultFacets = [];
        var propertyPrimitiveType;
        if (Array.isArray(propertyPrimitiveTemplate.type))
          propertyPrimitiveType = propertyPrimitiveTemplate.type[0]
        else propertyPrimitiveType = propertyPrimitiveTemplate.type;
        if (typeof schemaComponentConfig.defaults.primitiveFacets[propertyPrimitiveType] != "undefined")

          for (var facet in schemaComponentConfig.defaults.primitiveFacets[propertyPrimitiveType]) {
            if (typeof schemaComponentConfig.defaults.primitiveFacets[propertyPrimitiveType[facet]] == "undefined")
              anyDefaultFacets.push({ [facet]: schemaComponentConfig.defaults.primitiveFacets[propertyPrimitiveType][facet] })
          }

        else console.log("Primitive default facets not defined for: " + propertyPrimitiveType);
        return(anyDefaultFacets);
      };

      var propertyPrimitiveTemplate = {};
      var definitionReferenceName = SchemaComponent.getDefinitionReferenceName(definitionObjectProperty);
      if (typeof definitionReferenceName != "undefined") {
        var w3cXmlTypeSchemaDefinition = {};
        if (typeof schemaComponentConfig.derived.w3cXmlTypeSchema.definitions[definitionReferenceName] != "undefined") 
          w3cXmlTypeSchemaDefinition = schemaComponentConfig.derived.w3cXmlTypeSchema.definitions[definitionReferenceName]
        else
          if (typeof schemaComponentConfig.derived.w3cXmlTypeSchema.definitions[definitionReferenceName.charAt(0).toLowerCase() + definitionReferenceName.slice(1)] != "undefined")
            w3cXmlTypeSchemaDefinition = schemaComponentConfig.derived.w3cXmlTypeSchema.definitions[definitionReferenceName.charAt(0).toLowerCase() + definitionReferenceName.slice(1)];
          /* 046b else
            var remoteDefinitionObject = this.getRemoteDefinitionObject(this.getId(definitionObjectProperty));
            this.generateComponentSchema(remoteDefinitionObject);
            schemaPropertyPrimitiveTemplate = { "$ref": this.getSchemaReference(definitionObjectProperty) } ;
            046b */
/* 049a        if ((typeof w3cXmlTypeSchemaDefinition != "undefined") || (w3cXmlTypeSchemaDefinition != "")) {
          if (typeof w3cXmlTypeSchemaDefinition.type != "undefined")
            propertyPrimitiveTemplate.type = w3cXmlTypeSchemaDefinition.type
          else
            if (typeof w3cXmlTypeSchemaDefinition.anyOf != "undefined")
049a */              /* 046c if (typeof w3cXmlTypeSchemaDefinition.anyOf[0].type != "undefined") 
                if (w3cXmlTypeSchemaDefinition.anyOf[0].type == "array")
                  propertyPrimitiveTemplate = w3cXmlTypeSchemaDefinition.anyOf[0];
                else {
                  propertyPrimitiveTemplate.type = [];

                  w3cXmlTypeSchemaDefinition.anyOf.forEach(function (typeItem) {
                    propertyPrimitiveTemplate.type.push(typeItem.type)
                  });

            }; 046c */
/* 049a
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
049a */
          /*046c var anyDefaultFacets = getAnyDefaultFacets(propertyPrimitiveTemplate);

          anyDefaultFacets.forEach( function (facet) {
            propertyPrimitiveTemplate = Object.assign(propertyPrimitiveTemplate, facet);
          });
    046c */
/* 049a        }
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
    } 049a */

    //046g function getPropertyTemplateType (definitionObjectProperty, schemaComponentConfigW3cXmlTypeSchema) {
    function getPropertyTemplateType (definitionObjectProperty) {

      console.log("  getPropertyTemplateType");
      let propertyTemplateType;
      if (typeof definitionObjectProperty.type != "undefined") {
        console.log("  definitionObjectProperty.type: " + definitionObjectProperty.type);
        switch (definitionObjectProperty.type) {
          case "array": propertyTemplateType = "array"; break;
          case "object": propertyTemplateType = "object"; break;
          default: throw("  ERROR: unhandled type");
        };
      } else 
        if (typeof definitionObjectProperty.allOf != "undefined") {
          var templateDefinitionObjectPropertyAllOfItem;

          definitionObjectProperty.allOf.some( function (definitionObjectPropertyAllOfItem) {
            if (typeof definitionObjectPropertyAllOfItem.allOf != "undefined")

              definitionObjectPropertyAllOfItem.allOf.some( function (definitionObjectPropertyAllOfItemAllofItem) {
                if (typeof definitionObjectPropertyAllOfItemAllofItem.$ref != "undefined") {
                  templateDefinitionObjectPropertyAllOfItem = definitionObjectPropertyAllOfItemAllofItem;
                  return(true);
                }
              }, this);

            else 
              templateDefinitionObjectPropertyAllOfItem = definitionObjectPropertyAllOfItem;
            if (typeof templateDefinitionObjectPropertyAllOfItem.type != "undefined") {
              console.log("  definitionObjectPropertyAllOfType: " + templateDefinitionObjectPropertyAllOfItem.type);
              switch (templateDefinitionObjectPropertyAllOfItem.type) {
                case "array": propertyTemplateType = "array"; break;
                case "object": 
                  if (templateDefinitionObjectPropertyAllOfItem.properties.localPart.enum != "undefined")
                    propertyTemplateType = "primitive"
                  else 
                    propertyTemplateType = "object"; 
                  break;
                default: throw("  ERROR: unhandled type");
              };
              return(true);
            } else {
              if (typeof templateDefinitionObjectPropertyAllOfItem.$ref != "undefined")
                if (templateDefinitionObjectPropertyAllOfItem.$ref.startsWith(config.mapping.w3cXmlType.namespace))
                  propertyTemplateType = "primitive"
                else
                  propertyTemplateType = "reference"
              else
                throw("  ERROR: unable to determine propertyTemplateType");
            }
          }, this);

      //046g };
        //049 if (typeof propertyTemplateType == "undefined") {
        } else 
          //046c if (typeof definitionObjectProperty.elementName != "undefined")
            //046b return ("object")
            //046c propertyTemplateType="object"
          //046c else
            //046c if ((typeof definitionObjectProperty.attributeName != "undefined")
              //046c || (definitionObjectProperty.title == "value")) 
            //049 if ((typeof definitionObjectProperty.attributeName != "undefined") || (typeof definitionObjectProperty.$ref != "undefined"))
        if (typeof definitionObjectProperty.$ref != "undefined")
          if (definitionObjectProperty.$ref.startsWith(config.mapping.w3cXmlType.namespace))
              //046b return ("primitive")
            propertyTemplateType = "primitive"
          else 
            propertyTemplateType = "reference"
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
          if (typeof definitionObjectProperty.enum != "undefined")
            propertyTemplateType = "primitive"
          else
            throw("  ERROR: Unable to determine PropertyTemplateType");
              //046b return ("primitive")
            //046c };
      //049 }
      console.log("  PropertyTemplateType: " + propertyTemplateType);
      return(propertyTemplateType);
    }

    function getPropertyReference (schemaComponent, definitionPropertyItem) {
      var propertyReference;
      console.log("  getPropertyReference");
      var referenceName = SchemaComponent.getDefinitionReferenceName(definitionPropertyItem);
      var referenceSchemaComponent;
      if ((typeof schemaComponent.sourceSchema.fileObject.definitions != "undefined")
        && (typeof schemaComponent.sourceSchema.fileObject.definitions[referenceName] != "undefined")) {
        schemaComponent.pedigree.push(schemaComponent.identifier);
        referenceSchemaComponent = new SchemaComponent(schemaComponent.sourceSchema.fileObject.definitions[referenceName], schemaComponent.sourceSchema, schemaComponent.pedigree, schemaComponent.config);
      } else {
        var remoteDefinitionIdentifier = SchemaComponent.getRemoteDefinitionIdentifier(definitionPropertyItem);
        var remoteDefinitionSource = SchemaComponent.getRemoteDefinitionSource(remoteDefinitionIdentifier);
        schemaComponent.pedigree.push(schemaComponent.identifier);
        //049 referenceSchemaComponent = new SchemaComponent(remoteDefinition.definition, remoteDefinition.sourceSchema, schemaComponent.config);
        referenceSchemaComponent = new SchemaComponent(remoteDefinitionSource.definition, remoteDefinitionSource.sourceSchema, schemaComponent.pedigree, schemaComponent.config);
      };
      if (referenceSchemaComponent.hasMappedSourceSchema(referenceName)) {
        if (typeof definitionPropertyItem.elementName != "undefined")
          schemaComponent.pedigree.push(definitionPropertyItem.elementName.localPart);
        referenceSchemaComponent.generateSchema();
        propertyReference = { "$ref": schemaComponent.sourceSchema.targetBaseDirRelativeDepth + referenceSchemaComponent.schemaFileDestination };
      } else {
        propertyReference = { [referenceName] : remoteDefinitionSource.sourceSchema.fileObject.definitions[referenceName] };
        console.log("  applyed raw schema for: " + referenceName);
      }
      return(propertyReference);
    }

    console.log("  getPropertyDefinition");
    let propertyDefinition = {};

    for (var definitionPropertyItemName in definitionPropertyContainer) {
      //049b console.log("  definitionPropertyName: " + definitionPropertyItemName);
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
      //046g var propertyTemplateType = getPropertyTemplateType(definitionPropertyItem, this.schemaComponent.config.derived.w3cXmlTypeSchema);
      var propertyTemplateType = getPropertyTemplateType(definitionPropertyItem);
      switch (propertyTemplateType) {
        case 'array':
          /*046g if (typeof definitionPropertyContainer.elementName != "undefined")
            if (definitionPropertyContainer.elementName.namespaceURI == this.sourceSchemaNamespace)
              this.generateComponentSchema(sourceSchemaObject, propertyObjectReferenceName);
            else
              this.generateComponentSchema(definitionPropertyContainer);
            property[propertyObjectName] = { "$ref": this.getSchemaReference(definitionPropertyContainer) };*/
          var propertyArray = new PropertyArray();
          //050 propertyArray.setType(definitionPropertyItem);
          propertyArray.setType(definitionPropertyItem, definitionPropertyItemName, this.schemaComponent.sourceContent);
          propertyArray.setFacet(definitionPropertyItem, this.schemaComponent.sourceContent);
          propertyArray.setItems(definitionPropertyItem, this.schemaComponent);
          /* replaced by PropertyArray class
          if (typeof definitionPropertyItem.allOf != "undefined") { 
            // propertyDefinition = setPropertyArrayTemplate(definitionPropertyItem.allOf[0], this.schemaComponent );
            var allOfItemTypeContainer = SchemaComponent.getAllOfItemTypeContainer(definitionPropertyItem.allOf);
            if (typeof allOfItemTypeContainer != "undefined")
              propertyDefinition = setPropertyArrayTemplate(allOfItemTypeContainer, this.schemaComponent);
          } else {
            throw("need to set array propertyDefinition")
            //? propertyDefinition = setPropertyArrayTemplate(definitionPropertyItem, this.schemaComponent);
          };*/
          propertyDefinition = propertyArray;
          break;
        case 'object':
          /*049a if (SchemaComponent.isComponent(definitionPropertyItem, this.schemaComponent.config.derived.w3cXmlTypeSchema))
            propertyDefinition = getPropertyReference(this.schemaComponent, definitionPropertyItem)
          else {
            if (typeof definitionPropertyItem.allOf != "undefined") {
              var allOfItemTypeContainer = SchemaComponent.getAllOfItemTypeContainer(definitionPropertyItem.allOf);
              if (typeof allOfItemTypeContainer != "undefined")
                if (typeof allOfItemTypeContainer.localPart != "undefined") {
                  if (typeof allOfItemTypeContainer.localPart.enum != "undefined")
                    propertyDefinition = setPropertyPrimitiveTemplate(allOfItemTypeContainer.localPart, this.schemaComponent.config)
                } else
                  propertyDefinition = setPropertyPrimitiveTemplate(allOfItemTypeContainer, this.schemaComponent.config);
        } 
      }049a*/ /*046d else {
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
          var propertyObject = new PropertyObject();
          propertyObject.setType(definitionPropertyItem);
          propertyObject.setFacet(definitionPropertyItem);
          propertyObject.setProperties(definitionPropertyItem, this.schemaComponent);
          propertyDefinition = propertyObject;
          break;
        case 'primitive':
          /*049a if (SchemaComponent.isComponent(definitionPropertyItem, this.schemaComponent.config.derived.w3cXmlTypeSchema))
            propertyDefinition = getPropertyReference(this.schemaComponent, definitionPropertyItem)
          else 049a*/ //046g {
            // 046b if (typeof definitionPropertyContainer.name == "undefined")
            //046 var propertyTemplate = this.setPropertyPrimitiveTemplate(definitionPropertyContainer);
            //046 property[propertyObjectName] = propertyTemplate;
            //049a propertyDefinition = setPropertyPrimitiveTemplate(definitionPropertyItem, this.schemaComponent.config);
          //046g };
          /* 046b else
            console.log("    definition ignored"); 046b */
          var propertyPrimitive = new PropertyPrimitive();
          //049c if (typeof definitionPropertyItem.enum != "undefined")
          //049c  propertyPrimitive.enum = definitionPropertyItem.enum
          //049c else
          propertyPrimitive.setType(definitionPropertyItem, definitionPropertyItemName, this.schemaComponent.sourceContent);
          propertyPrimitive.setFacets(definitionPropertyItem, this.schemaComponent.sourceContent);
          propertyDefinition = Object.assign(propertyDefinition, propertyPrimitive);
          break;
        case "reference":
          //046g var referenceName = SchemaComponent.getDefinitionReferenceName(definitionPropertyItem);
          //046e if (!isCircularReference(this.schemaComponent.definition, referenceName)) {
            //046g var referenceSchemaComponent;
            //046g if ((typeof this.schemaComponent.sourceSchema.fileObject.definitions != "undefined")
            //046g   && (typeof this.schemaComponent.sourceSchema.fileObject.definitions[referenceName] != "undefined")) {
              //referenceSchemaComponentDefinition = this.schemaComponent.sourceSchema.fileObject.definitions[referenceName];
              //referenceSourceSchemaFileObject = this.schemaComponent.sourceSchema.fileObject;
              //046g referenceSchemaComponent = new SchemaComponent(this.schemaComponent.sourceSchema.fileObject.definitions[referenceName], this.schemaComponent.sourceSchema, this.schemaComponent.config);
              //referenceSchemaComponent.generateSchema();
            //046g } else {
                //046d var remoteDefinitionObject = this.getRemoteDefinitionObject(this.getId(definitionPropertyItem));
                //046d this.generateComponentSchema(remoteDefinitionObject);
              //var remoteDefinitionReferenceContainer = SchemaComponent.getDefinitionReferenceContainer(definitionPropertyItem);
              //var remoteDefinitionNamespace = SchemaComponent.getRemoteDefinitionNamespace(remoteDefinitionReferenceContainer);
              //046g var remoteDefinitionIdentifier = SchemaComponent.getRemoteDefinitionIdentifier(definitionPropertyItem);
              //046g var remoteDefinition = SchemaComponent.getRemoteDefinitionObject(remoteDefinitionIdentifier);
              //var RemoteDefinitionObjectSourceSchemaFileObject;
              //046g referenceSchemaComponent = new SchemaComponent(remoteDefinition.definition, remoteDefinition.sourceSchema, this.schemaComponent.config);
              //046d this.generateComponentSchema(referenceDefinitionProperty); 
            //046g };
            //046c var definitionReferenceName = this.getDefinitionReferenceName(definitionPropertyContainer);
            //046c componentSchemaPropertyDefinition = { "$ref": this.getSchemaReference(definitionPropertyContainer) } ;
            //46d componentSchemaPropertyDefinition = { "$ref": this.getSchemaReference(remoteDefinitionObject) } ;
            //this.generateComponentSchema(referenceDefinitionProperty);
            //SchemaComponent.generateSchema(referenceSchemaComponentDefinition, referenceSourceSchemaFileObject);
            //schemaFileDestination = referenceSchemaComponent.generateSchema();
            //046g referenceSchemaComponent.generateSchema();
            //propertyDefinition = { "$ref": this.getSchemaReference(referenceDefinitionProperty) } ;
            //propertyDefinition = { "$ref": SchemaComponent.getSchemaFileDestination(referenceSchemaComponentDefinition, this.schemaComponent.sourceSchema ) } ;
            //046e if (referenceSchemaComponent.sourceSchema.namespace == this.schemaComponent.sourceSchema.namespace)
            //046e   propertyDefinition = { "$ref": referenceSchemaComponent.schemaFileDestination }
            //046e else
            //046g   propertyDefinition = { "$ref": this.schemaComponent.sourceSchema.baseDirRelativeDepth + referenceSchemaComponent.schemaFileDestination } ;
            //046e } else
              //046e console.log("  INFO: circular reference ignored")
            propertyDefinition = getPropertyReference(this.schemaComponent, definitionPropertyItem);
          break;
        //046c? case "substitution":
          //046 var substitutionObjectDefinition =
          //046 this.generateSubstitutionObjectDefinitionSchema(sourceSchemaObject, definitionPropertyContainerParent);
          //046 if (typeof substitutionObjectDefinition != "undefined")
            //046 property[propertyObjectName] = substitutionObjectDefinition;
            //propertyDefinition = this.generateSubstitutionObjectDefinitionSchema(this.schemaComponent.sourceSchema.fileObject, definitionPropertyContainerParent);
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

                definitionName = this.getDefinitionReferenceName(definitionObjectAllOfItem)
              //046c if ( definitionReferenceName == getDefinitionObjectTypeName(definitionObject))
              //if (typeof definitionObject.typeName != "undefined") {
                //if (definitionObject.typeName.localPart == this.getDefinitionReferenceName(definitionObjectAllOfItem))
                  //console.log("INFO: definitionObjectAllOfItem property ignored because it references parent definition: " + definitionObjectAllOfItem) 
                //046c console.log("INFO: definitionObjectAllOfItem property ignored because it references parent definition: " + definitionReferenceName)
                
                  //property = Object.assign(property, this.getProperties(sourceSchemaObject, definitionPropertyContainer))
                  console.log("WARNING: Property is ignored, which is acceptable when a property describes its parent definition.")
                  046 */
      //046b } else
        //046b console.log("  definition ignored");
    };

    return(propertyDefinition);

  }

  // replaces getComponentSchemaProperty
  getProperty (definitionPropertyContainer) {

    console.log("  getProperty");
    let property = {};

    for (var definitionPropertyName in definitionPropertyContainer) {
      console.log("  getProperty: " + definitionPropertyName);
      var propertyDefinition = this.getPropertyDefinition(definitionPropertyContainer);
      //049b if (isEmpty(propertyDefinition))
      if (Object.getOwnPropertyNames(propertyDefinition).length > 0) {
        if ( definitionPropertyName == "$ref" ) {
          var definitionReferenceName = SchemaComponent.getDefinitionReferenceName(definitionPropertyContainer);
          property[definitionReferenceName] = propertyDefinition;
        } else
          property[definitionPropertyName] = propertyDefinition
      } else
        console.log("  WARNING: propertyDefinition empty, ignoring property: " + definitionPropertyName);
    };

    return(property);
  }

  // replaces getComponentSchemaProperties
  getProperties () {

      //046e not a circular use-case for SUBJECT since the reference is SUBJECT's definition
    function isCircularReference(schemaComponentdefinition, schemaComponentName) {
      if (typeof schemaComponentdefinition.$ref != "undefined") {
        //var propertyObjectIdentifierContainer = SchemaComponent.getPropertyObjectIdentifierContainer(schemaComponentdefinition);
        //if (typeof definitionPropertyContainer.typeName != "undefined") 
        /*if (typeof propertyObjectIdentifierContainer.localPart != "undefined") 
          if (propertyObjectIdentifierContainer.localPart == referenceName)*/
        if (SchemaComponent.getDefinitionReferenceName(schemaComponentdefinition) == schemaComponentName) {
          console.log("  isCircularReference: " + schemaComponentName);
          return(true);
        } else
          return(false)
      } else
        return(false)
    }

    function getDefinitionObjectTypeName (definitionObject) {
      if (typeof definitionObject.typeName != "undefined") 
        return(definitionObject.typeName.localPart)
    }

    console.log("  getProperties");
    let properties = {};
    if (typeof this.schemaComponent.definition.allOf != "undefined") {
      //if (definitionObject.allOf.filter( function(allOfItem) { if (typeof allOfItem.enum != "undefined") return true } ).length > 0)
      /* 049b if ((typeof this.schemaComponent.definition.typeType != "undefined") && (this.schemaComponent.definition.typeType == "enumInfo" )) {
        var referenceEnumDefinitionContainer = {};
        var referenceDefinitionContainer = this.schemaComponent.definition.allOf.filter( function(allOfItem) { if (typeof allOfItem.$ref != "undefined") return true } );
        if (referenceDefinitionContainer.length == 1)
          referenceEnumDefinitionContainer = referenceDefinitionContainer[0]
        else
          throw("##ERROR: trouble creating referenceDefinitionContainer for adding facets such as enumerations.");

        this.schemaComponent.definition.allOf.forEach( function (definitionObjectAllOfItem) {
          if (typeof definitionObjectAllOfItem.$ref == "undefined")
            Object.assign(referenceEnumDefinitionContainer, definitionObjectAllOfItem);
        }, this);

        properties = Object.assign(properties, this.getComponentSchemaProperty(sourceSchemaObject, referenceEnumDefinitionContainer));
      } else 049b */

        this.schemaComponent.definition.allOf.forEach( function (definitionObjectAllOfItem, definitionObjectAllOfIndex, definitionObjectAllOf) {
          if (typeof definitionObjectAllOfItem.properties != "undefined")

            for (var definitionObjectAllOfItemPropertyName in definitionObjectAllOfItem.properties) {
            //049 properties = Object.assign(properties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionObjectAllOfItemPropertyName] : definitionObjectAllOfItem.properties[definitionObjectAllOfItemPropertyName] } ))
            properties = Object.assign(properties, this.getProperty( { [definitionObjectAllOfItemPropertyName] : definitionObjectAllOfItem } ));
            }

          else {
            var definitionName;
            if (typeof definitionObjectAllOfItem.$ref != "undefined")
              definitionName = SchemaComponent.getDefinitionReferenceName(definitionObjectAllOfItem)
              //046c if ( definitionReferenceName == getDefinitionObjectTypeName(definitionObject))
              //if (typeof definitionObject.typeName != "undefined") {
                //if (definitionObject.typeName.localPart == this.getDefinitionReferenceName(definitionObjectAllOfItem))
                  //console.log("INFO: definitionObjectAllOfItem property ignored because it references parent definition: " + definitionObjectAllOfItem) 
                //046c console.log("INFO: definitionObjectAllOfItem property ignored because it references parent definition: " + definitionReferenceName)
              //046c else
              //046c schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, definitionObjectAllOfItem ))
            else
              definitionName = getDefinitionObjectTypeName(definitionObjectAllOfItem);
            //049 properties = Object.assign(properties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionName] : definitionObjectAllOfItem } ));
            properties = Object.assign(properties, this.getProperty( { [definitionName] : definitionObjectAllOfItem } ));
          }
        }, this);

    };

    if (typeof this.schemaComponent.definition.properties != "undefined")

      for (var definitionObjectPropertyName in this.schemaComponent.definition.properties) {
        //046d if (typeof definitionObject.properties[definitionObjectPropertyName].allOf != "undefined") {
          if (SchemaComponent.isAnyTypeSubstitution(this.schemaComponent.definition.properties[definitionObjectPropertyName])) {
            var componentIdentifierContainer;
            if (typeof this.schemaComponent.definition.properties[definitionObjectPropertyName].$ref != "undefined")
              componentIdentifierContainer = this.schemaComponent.definition
            else
              componentIdentifierContainer = this.schemaComponent.definition.properties[definitionObjectPropertyName];
            substitutionIdentifiers = this.getSubstitutionIdentifiers(this.getId(componentIdentifierContainer));
            if (substitutionIdentifiers.length > 0) {

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
                properties = Object.assign(properties, this.getComponentSchemaProperty(sourceSchemaObject, { "$ref" : substitutionIdentifier } ));
              }, this);

            };
            //? schemaProperties = Object.assign(schemaProperties, substitutionSchemaProperties);
          //046c } else 
            //046c schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionObjectPropertyName] : definitionObject.properties[definitionObjectPropertyName] } ));
          } else 
          //046d};
            if (isCircularReference(this.schemaComponent.definition.properties[definitionObjectPropertyName], this.schemaComponent.name)) {
              if ((typeof this.schemaComponent.sourceSchema.fileObject.definitions != "undefined")
              && (typeof this.schemaComponent.sourceSchema.fileObject.definitions[this.schemaComponent.name] != "undefined")) {
                var schemaComponentCircularReferenceDefinition = this.schemaComponent.sourceSchema.fileObject.definitions[this.schemaComponent.name];

                // to-do: increase robustness with a Properties class to recursively handle cases
                if (typeof schemaComponentCircularReferenceDefinition.properties != "undefined")

                  for (var definitionObjectPropertyName in schemaComponentCircularReferenceDefinition.properties) {
                    properties = Object.assign(properties, this.getProperty( { [definitionObjectPropertyName] : schemaComponentCircularReferenceDefinition.properties[definitionObjectPropertyName] } ));
                  }

                else
                  throw("  ERROR: unable to get schemaComponentCircularReferenceDefinitions ");
              } else
                throw("  ERROR: unable to obtain schemaComponentCircularReferenceDefinition ");
          } else
            properties = Object.assign(properties, this.getProperty( { [definitionObjectPropertyName] : this.schemaComponent.definition.properties[definitionObjectPropertyName] } ));
      };
  
    return (properties);
  }

  getJavaType (propertyObject) {

    function replacer(match, p1, offset, string) {
    return ['_' + p1.replace(/\./g, '_')];
    }

    console.log("  getJavaType");
    var javaTypeParts = this.schemaComponent.schemaFileDestination.substring(0, this.schemaComponent.schemaFileDestination.lastIndexOf(".json"));
    var javaTypePartsRelativePath = String(javaTypeParts.replace(/\.\.\//g, ''));
    var javaTypePartsVersion = javaTypePartsRelativePath.replace(/(\d+\.?\d{0,9}?\.\d+\.?\d{0,9})/, replacer);
    var javaType = String(javaTypePartsVersion.replace(/-?\./g, '_')).replace(/\//g, '.');
    console.log("  javaType: " + javaType);
    return(javaType);
  }

  getDescription () {
    console.log("  getDescription");
    var description;
    if ((typeof this.schemaComponent.sourceContent != "undefined") && (typeof this.schemaComponent.sourceContent.documentation != "undefined"))
      //050 if ((typeof this.schemaComponent.sourceContent.components[this.schemaComponent.name] != "undefined") && (typeof this.schemaComponent.sourceContent.components[this.schemaComponent.name].documentation != "undefined"))
        //050 var description = this.schemaComponent.sourceContent.components[this.schemaComponent.name].documentation.join("  ");
      description = this.schemaComponent.sourceContent.documentation.join("  ");
    if (typeof description == "undefined")
      console.log("  WARNING: unable to getDescription, which may be ok if documentation does not exist for schemaComponent: " + this.schemaComponent.name);
    return (description);
  }
//050 may be deprecated by Schema.setType
  /* getType () {
    console.log("  getType");
    let propertyObjectType;
    if (typeof this.schemaComponent.definition.type != "undefined")
      propertyObjectType = this.schemaComponent.definition.type
    else
      if (typeof this.schemaComponent.definition.allOf != "undefined") 

        propertyObjectType = this.schemaComponent.definition.allOf.filter( function (allOfItem) {
          if (typeof allOfItem.type != "undefined") 
            return(true)
        });

      else
        throw ("  ERROR: having trouble getting propertyObject type. ");
    console.log("  type: " + propertyObjectType);
    return (propertyObjectType);
  } */

  getTitle () {
    console.log("  getTitle");
    var title = this.schemaComponent.name;
    console.log("  title: " + title);
    return(title);
  }

  getId () {
    console.log("  getId");
    var id = this.schemaComponent.namespace + '#' + this.schemaComponent.name;
    console.log("  id: " + id);
    return (id);
  }

  //046e replaces getComponentSchema
  getObject () {
    this.schemaObject = {};
    this.schemaObject.$schema = config.default.JsonSchemaVersionId;
    this.schemaObject.id = this.getId();
    this.schemaObject.title = this.getTitle();
    this.schemaObject.description = this.getDescription();
    this.schemaObject.version = config.mapping.targetSchemaVersion;
    this.schemaObject.type = Schema.getType(this.schemaComponent.definition, this.schemaComponent.name, this.schemaComponent.sourceContent);
    this.schemaObject.javaType = this.getJavaType();
    if (SchemaComponent.isComponent(this.schemaComponent.definition)) {
      //050 this.schemaObject.type = this.getType();
      //this.schemaObject.type = Schema.getType(this.schemaComponent.definition, this.schemaComponent.name, this.schemaComponent.sourceContent);
      this.schemaObject.properties = this.getProperties();
    } else 
      if (typeof this.schemaComponent.definition.allOf != "undefined")
        this.schemaObject = Object.assign(this.schemaObject, this.getPropertyDefinition(this.schemaComponent.definition.allOf))
      else
        console.log("  ERROR: schemaComponent.definition not handled.");
    this.schemaObject = Object.assign(this.schemaObject, //050 this.getFacets(this.schemaComponent.definition));
    Schema.getFacets(this.schemaComponent.definition, this.schemaComponent.sourceContent));
    return(this.schemaObject);
  }
} // # class Schema

class SchemaComponent {
  constructor (componentDefinition, sourceSchema, pedigree, config) {
    this.definition = componentDefinition;
    this.sourceSchema = sourceSchema;
    this.pedigree = pedigree;
    this.config = config;
  }

  // replaces writeSchemaFile
  writeSchema () {

  function dirPathExists(filePath) {
    var dirName = path.dirname(filePath);
    if (fs.existsSync(dirName)) {
      return true;
    }
    dirPathExists(dirName);
    fs.mkdirSync(dirName);
    return true;
  };

  console.log("  written to: " + this.schemaFileDestination);
    var relativeDestination;
    if (this.schemaFileDestination.includes(".."))
      relativeDestination = this.config.mapping.schemaBaseDir.target + this.schemaFileDestination.substring(this.schemaFileDestination.lastIndexOf("../") + 3)
    else
      //052 relativeDestination = this.config.mapping.schemaBaseDir.target + this.schemaFileDestination;
      relativeDestination = this.config.mapping.schemaBaseDir.target + config.derived.rootSchemaTargetSchemaFilepath + this.schemaFileDestination;
    if (dirPathExists(relativeDestination)) {
      fs.writeFileSync(relativeDestination, this.schemaJson);
    };
}

  setSchema () {
    var schema = new Schema(this);
    schema.object = schema.getObject();
    this.schemaJson = JSON.stringify(schema.object, null, '  ');
    console.log("  ---\n  schema generated\n```json\n" + this.schemaJson.toString() + "\n```");
  }

  hasRemoteSchemaDefinition (schemaFilepathMappingItem, definitionObjectName) {
    console.log("  hasRemoteSchemaDefinition");
    var sourceSchemaFile;
    if ((typeof schemaFilepathMappingItem.sourceSchemaFilepath != "undefined") 
      && (schemaFilepathMappingItem.sourceSchemaFilepath != ""))
      sourceSchemaFile = schemaFilepathMappingItem.sourceSchemaFilepath + schemaFilepathMappingItem.sourceSchemaFilename
    else
      sourceSchemaFile = config.mapping.schemaBaseDir.source + schemaFilepathMappingItem.sourceSchemaFilename;
    var sourceSchemaBuffer = readFile(sourceSchemaFile);
    if (typeof sourceSchemaBuffer != "undefined") {
      var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
      if (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined") 
        return(true);
    };
  }

  hasMappedSourceSchema (schemaComponentName) {

    for (var index = 0; index < config.mapping.schemaFilepathMappings.length; index++) {
      if ((config.mapping.schemaFilepathMappings[index].sourceSchemaFileId === this.sourceSchema.namespace) || (config.mapping.schemaFilepathMappings[index].sourceSchemaFileId === this.sourceSchema.namespace + '#'))
        if (config.mapping.schemaFilepathMappings[index].sourceSchemaFileId != '#') {
          if ((typeof config.mapping.schemaFilepathMappings[index].sourceModuleFilename != "undefined") 
            && (config.mapping.schemaFilepathMappings[index].sourceModuleFilename != ""))
            return(true)
        } else
          if ((config.mapping.schemaFilepathMappings[index].sourceSchemaFileId == '#') 
            && (this.hasRemoteSchemaDefinition(config.mapping.schemaFilepathMappings[index], schemaComponentName)))
            if ((typeof config.mapping.schemaFilepathMappings[index].sourceModuleFilename != "undefined") 
              && (config.mapping.schemaFilepathMappings[index].sourceModuleFilename != ""))
              return(true)
    };
  }

  setDefinedByParent () {
    this.definedByParent = this.pedigree[this.pedigree.length - 1].substring(this.pedigree[this.pedigree.length - 1].lastIndexOf('#') + 1);
  }

  setSourceContent () {
  if (typeof this.sourceSchema.sourceContent != "undefined") 
    if (typeof this.sourceSchema.sourceContent.components[this.name] != "undefined")
      this.sourceContent = this.sourceSchema.sourceContent.components[this.name]
    else {
      console.log("  [INFO] sourceContent not found for: " + this.identifier);
      console.log("  [INFO]   Typically, this occurs when a schemaComponent is not defined in the source XML Schema.");
      //var parentName = this.pedigree[this.pedigree.length - 1].substring(this.pedigree[this.pedigree.length - 1].lastIndexOf('#') + 1);
      //var parentName = this.getPedigreeParentName();
      this.setDefinedByParent();
      if (typeof this.sourceSchema.sourceContent.components[this.definedByParent] != "undefined") {
        this.sourceContent = this.sourceSchema.sourceContent.components[this.definedByParent];
        //console.log("  [INFO] sourceContent obtained from parent: " + this.pedigree[this.pedigree.length - 1])
        console.log("  [INFO] sourceContent obtained from parent: " + this.definedByParent)
      };
    }
  }

  //046e replaces getSchemaFileDestination
  setSchemaFileDestination (schemaFilepathMappings) {
    console.log("  setSchemaFileDestination");
    try {
      if ((typeof this.namespace != "undefined") && (typeof this.name != "undefined")) {
        console.log("  setSchemaFileDestination from object namespace match: " + this.namespace);

        for (var index = 0; index < schemaFilepathMappings.length; index++) {
          if (schemaFilepathMappings[index].namespace === this.namespace) {
            if (this.namespace === this.config.derived.rootSchemaNamespace)
              this.schemaFileDestination = this.name + '.json';
            //052 if (this.sourceSchema.namespace === this.namespace)
              //052 this.schemaFileDestination = schemaFilepathMappings[index].targetSchemaFilepath + this.name + '.json';
            else
              this.schemaFileDestination = this.sourceSchema.targetBaseDirRelativeDepth + schemaFilepathMappings[index].targetSchemaFilepath + this.name + '.json';
            break;
          };
        };

        if (this.schemaFileDestination != "undefined") 
          console.log("  [INFO] SchemaFileDestination: " + this.schemaFileDestination)
        else
          throw "  ERROR: object namespace was not matched for schema file destination";
      }

    } catch (error) {
      console.log(error);    
    }
  }

  setIdentifier () {
    console.log("  setIdentifier");
    if ((typeof this.namespace != "undefined") && (typeof this.name != "undefined"))
      this.identifier = this.namespace + '#' + this.name
    else
      console.log("  WARNING: unable to determine from namespace and name values.");
  }

  //046e replaces getTitle
  setName () {
    console.log("  setName");
    var propertyObjectIdentifierContainer = SchemaComponent.getPropertyObjectIdentifierContainer(this.definition);
    if (typeof propertyObjectIdentifierContainer != "undefined") {
      if (typeof propertyObjectIdentifierContainer.localPart != "undefined")
        this.name = propertyObjectIdentifierContainer.localPart
      else
        if (typeof propertyObjectIdentifierContainer.$ref != "undefined")
          this.name = SchemaComponent.getDefinitionReferenceName(propertyObjectIdentifierContainer)
        else
          if ((typeof propertyObjectIdentifierContainer.typeType != "undefined") && (propertyObjectIdentifierContainer.typeType == "classInfo"))
            this.name = propertyObjectIdentifierContainer.title
    } else
        console.log("  WARNING: unable to determine name");
    console.log("  name: " + this.name);
  }

  setNamespace () {
    console.log("  setNamespace");
    var propertyObjectIdentifierContainer = SchemaComponent.getPropertyObjectIdentifierContainer(this.definition);
    if (typeof propertyObjectIdentifierContainer != "undefined") {
      if (typeof propertyObjectIdentifierContainer.namespaceURI != "undefined")
        this.namespace = propertyObjectIdentifierContainer.namespaceURI
      else
        if (typeof propertyObjectIdentifierContainer.$ref != "undefined")
          this.namespace = SchemaComponent.getRemoteDefinitionNamespace(propertyObjectIdentifierContainer.$ref)
        else 
          if ((typeof propertyObjectIdentifierContainer.typeType != "undefined") && (propertyObjectIdentifierContainer.typeType == "classInfo"))
            this.namespace = this.sourceSchema.namespace
    } else
      console.log("  WARNING: Unable to setNamespace with propertyObjectIdentifierContainer: " + propertyObjectIdentifierContainer);
  }

    //static generateSchema (schemaFileComponent, sourceSchema, config) {
  generateSchema () {
    console.log("## generateSchema");
    this.setNamespace();
    this.setName();
    this.setIdentifier();
    this.setSchemaFileDestination(config.mapping.schemaFilepathMappings);
    this.setSourceContent();
    if (!GeneratedSchemaLog.hasIdentifier(this.identifier)) {
      GeneratedSchemaLog.pushIdentifier( { "identifier" : this.identifier , "schemaFile" : this.schemaFileDestination } );
      this.setSchema();
      this.writeSchema();
    } else {
      console.log("  INFO: not generating component, already exists: " + this.identifier);
    }
  }

  //050 may need to integrate into Schema.getFacet
  static getFacetContainer (definitionObjectProperty) {
    let facetContainer = {};
    if (typeof definitionObjectProperty.allOf != "undefined")

      definitionObjectProperty.allOf.some( function (definitionObjectPropertyAllOfItem) {
        if (typeof definitionObjectPropertyAllOfItem.type != "undefined") {
          facetContainer = definitionObjectPropertyAllOfItem;   
          return(true);
        }
      }, this)

    else
      facetContainer = definitionObjectProperty;
    return(facetContainer);
  }

  // ?replaces getRemoteDefinitionObject
  static getRemoteDefinitionSource (definitionObjectIdentifier) {

    //046f replaces getDefinitionSourceSchemaFilename
    //046h function getDefinitionSourceSchemaFilename (definitionObjectIdentifier) {
    function getDefinitionSourceSchemaFile (definitionObjectIdentifier) {

      function remoteSchemaHasDefinition (schemaFilepathMappingItem, definitionObjectName) {
        console.log("  remoteSchemaHasDefinition ?");
        var sourceSchemaFile;
        if ((typeof schemaFilepathMappingItem.sourceSchemaFilepath != "undefined") 
          && (schemaFilepathMappingItem.sourceSchemaFilepath != ""))
          sourceSchemaFile = schemaFilepathMappingItem.sourceSchemaFilepath + schemaFilepathMappingItem.sourceSchemaFilename
        else
          sourceSchemaFile = config.mapping.schemaBaseDir.source + schemaFilepathMappingItem.sourceSchemaFilename;
        var sourceSchemaBuffer = readFile(sourceSchemaFile);
        if (typeof sourceSchemaBuffer != "undefined") {
          var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
          if (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined") 
            return(true)
          else return(false);
        } else return(false);
      }

      function getIdentifierNamespace (definitionObjectIdentifier) {
        switch(definitionObjectIdentifier.indexOf('#')) {
          case 0 : return('#')
          case -1 : return(null)
          default : return(definitionObjectIdentifier.substring(0, definitionObjectIdentifier.indexOf('#')))
        }
      }

      var definitionSourceSchemaFile;
      var definitionObjectIdentifierNamespace = getIdentifierNamespace(definitionObjectIdentifier);
      var definitionObjectName = definitionObjectIdentifier.substring(definitionObjectIdentifier.lastIndexOf('#') + 1);
      console.log("  getDefinitionSourceSchemaFileLocation for namespace: " + definitionObjectIdentifierNamespace);
      if ( definitionObjectIdentifierNamespace == config.mapping.w3cXmlType.namespace) 
        definitionSourceSchemaFile = config.mapping.w3cXmlType.schemaFile
      else

        for (var index = 0; index < config.mapping.schemaFilepathMappings.length; index++) {
          if ((config.mapping.schemaFilepathMappings[index].sourceSchemaFileId === definitionObjectIdentifierNamespace) || (config.mapping.schemaFilepathMappings[index].sourceSchemaFileId === definitionObjectIdentifierNamespace + '#'))
            if (config.mapping.schemaFilepathMappings[index].sourceSchemaFileId != '#') {
              if ((typeof config.mapping.schemaFilepathMappings[index].sourceSchemaFilepath != "undefined") 
                && (config.mapping.schemaFilepathMappings[index].sourceSchemaFilepath != ""))
                definitionSourceSchemaFile = config.mapping.schemaFilepathMappings[index].sourceSchemaFilepath + config.mapping.schemaFilepathMappings[index].sourceSchemaFilename
              else
                definitionSourceSchemaFile = config.mapping.schemaBaseDir.source + config.mapping.schemaFilepathMappings[index].sourceSchemaFilename;
              break;
            } else
              //049b if ((config.mapping.schemaFilepathMappings[index].sourceSchemaFileId == '#') && (remoteSchemaHasDefinition(config.mapping.schemaFilepathMappings[index].sourceSchemaFilename, definitionObjectName)))
              if ((config.mapping.schemaFilepathMappings[index].sourceSchemaFileId == '#') 
                && (remoteSchemaHasDefinition(config.mapping.schemaFilepathMappings[index], definitionObjectName))) {
                if ((typeof config.mapping.schemaFilepathMappings[index].sourceSchemaFilepath != "undefined") 
                  && (config.mapping.schemaFilepathMappings[index].sourceSchemaFilepath != ""))
                  definitionSourceSchemaFile = config.mapping.schemaFilepathMappings[index].sourceSchemaFilepath + config.mapping.schemaFilepathMappings[index].sourceSchemaFilename
                else
                  definitionSourceSchemaFile = config.mapping.schemaBaseDir.source + config.mapping.schemaFilepathMappings[index].sourceSchemaFilename;
                break;
              }
        };

      if (typeof definitionSourceSchemaFile == "undefined")
        throw "  ERROR: definitionSourceSchemaFile was not matched to definitionObjectIdentifier.";
      return(definitionSourceSchemaFile);
    }

    var remoteDefinitionObject = {};
    var definitionSourceSchemaFile = getDefinitionSourceSchemaFile(definitionObjectIdentifier);
    console.log("  definition object source schema file: " + definitionSourceSchemaFile);

    var sourceSchema = new SourceSchema(definitionSourceSchemaFile);
    if (typeof sourceSchema.fileObject != "undefined") {
      sourceSchema.setTargetBaseDirRelativeDepth(config.mapping.schemaFilepathMappings, config.derived.rootSchemaNamespace);
      sourceSchema.setContent(config.mapping.schemaFilepathMappings, config.mapping.sourceContentBaseDir);

      var definitionSourceSchemaBuffer = readFile(definitionSourceSchemaFile);
      if (typeof definitionSourceSchemaBuffer != "undefined") {
        var definitionSourceSchemaObject = JSON.parse(definitionSourceSchemaBuffer);
        var definitionObjectName = definitionObjectIdentifier.substring(definitionObjectIdentifier.lastIndexOf('#') + 1);
        if ((typeof definitionSourceSchemaObject.definitions != "undefined") && (typeof definitionSourceSchemaObject.definitions[definitionObjectName] != "undefined"))
          remoteDefinitionObject.definition = definitionSourceSchemaObject.definitions[definitionObjectName];
        else
          if (typeof definitionSourceSchemaObject.anyOf != "undefined")

            for (var anyOfObjectIndex = 0; anyOfObjectIndex < definitionSourceSchemaObject.anyOf.length; anyOfObjectIndex++) {
              if (this.getId(definitionSourceSchemaObject.anyOf[anyOfObjectIndex]) == definitionObjectIdentifier)
                remoteDefinitionObject.definition = definitionSourceSchemaObject.anyOf[anyOfObjectIndex];
            };

        //049b if (typeof remoteDefinitionObject != "undefined") {
          //049 remoteDefinitionObject.sourceSchema = definitionSourceSchemaObject;
        remoteDefinitionObject.sourceSchema = sourceSchema;
        return (remoteDefinitionObject);
      } else
        throw("  ERROR: nothing to parse for " + definitionSourceSchemaFile);
    } else
      throw ("  ERROR: nothing to parse for " + definitionSourceSchemaFile);
  }

  // replaces getSchemaFileDestination
  static getSchemaFileDestination (schemaComponentDefinition, sourceSchema) {
    
    function getName (schemaComponentDefinition) {
      console.log("  getName");
      var propertyObjectIdentifierContainer = SchemaComponent.getPropertyObjectIdentifierContainer(schemaComponentDefinition);
      if (typeof propertyObjectIdentifierContainer != "undefined")
        if (typeof propertyObjectIdentifierContainer.localPart != "undefined")
          return(propertyObjectIdentifierContainer.localPart)
        else
          if (typeof propertyObjectIdentifierContainer.$ref != "undefined")
            return(SchemaComponent.getDefinitionReferenceName(propertyObjectIdentifierContainer));
        else
          throw ("  ERROR: unable to getName");
    }

    function getNamespace (schemaComponentDefinition) {
      console.log("  getNamespace");
      var propertyObjectIdentifierContainer = SchemaComponent.getPropertyObjectIdentifierContainer(schemaComponentDefinition);
      if (typeof propertyObjectIdentifierContainer != "undefined")
        if (typeof propertyObjectIdentifierContainer.namespaceURI != "undefined")
          return(propertyObjectIdentifierContainer.namespaceURI);
        else
          if (typeof propertyObjectIdentifierContainer.$ref != "undefined")
            return(SchemaComponent.getRemoteDefinitionNamespace(propertyObjectIdentifierContainer.$ref));
      else
        throw ("  ERROR: Unable to getNamespace");
    }

    console.log("  getSchemaFileDestination");
    try {
      let schemaFileDestination;
      var namespace = getNamespace(schemaComponentDefinition);
      var name = getName(schemaComponentDefinition);
      if ((typeof namespace != "undefined") && (typeof name != "undefined")) {
        console.log("  getSchemaFileDestination from object namespace match: " + namespace);

        for (var index = 0; index < config.schemaFilepathMappings.length; index++) {
          if (config.schemaFilepathMappings[index].namespace === namespace) {
            if (sourceSchema.namespace === namespace)
              schemaFileDestination = config.mapping.schemaFilepathMappings[index].targetSchemaFilepath + name + ".json";
            else
              schemaFileDestination = sourceSchema.targetBaseDirRelativeDepth + config.mapping.schemaFilepathMappings[index].targetSchemaFilepath + name + ".json";
            break;
          };
        };

        if (schemaFileDestination == "undefined") 
          throw "  ERROR: object namespace was not matched for schema file destination";
      }

    } catch (error) {
      console.log(error);    
    }
  }

  static isAnyTypeSubstitution (definitionObjectProperty) {
    var isAnyTypeSubstitution = false;
    if (typeof definitionObjectProperty.allOf != "undefined") {

      definitionObjectProperty.allOf.some( function (definitionObjectPropertyItemAllOfItem) {
        if ((typeof definitionObjectPropertyItemAllOfItem.items != "undefined") && ( SchemaComponent.getDefinitionReferenceName(definitionObjectPropertyItemAllOfItem.items) == "anyType")) {
          isAnyTypeSubstitution = true;
          return(true);
        }
      }, this);

    } else 
      if (typeof definitionObjectProperty.$ref != "undefined")
        if (SchemaComponent.getDefinitionReferenceName(definitionObjectProperty) == "anyType")
          isAnyTypeSubstitution = true;
    return(isAnyTypeSubstitution);
  }

  // replaces isPrimitiveType
  static isPrimitiveType (definitionObjectProperty, schemaComponentConfigW3cXmlTypeSchema) {
    var isPrimitiveType = false;

    var definitionReferenceName = SchemaComponent.getDefinitionReferenceName(definitionObjectProperty);
    if (typeof definitionReferenceName != "undefined") {
      if (typeof schemaComponentConfigW3cXmlTypeSchema.definitions[definitionReferenceName] != "undefined") 
        isPrimitiveType = true
      else
        if (typeof schemaComponentConfigW3cXmlTypeSchema.definitions[definitionReferenceName.charAt(0).toLowerCase() + definitionReferenceName.slice(1)] != "undefined")
          isPrimitiveType = true;
    };
    return(isPrimitiveType);
  }

// replaces isComponent()
  static isComponent (definitionPropertyContainer, schemaComponentConfigW3cXmlTypeSchema) {
    if (typeof definitionPropertyContainer.$ref != "undefined")
      if (SchemaComponent.isPrimitiveType(definitionPropertyContainer, schemaComponentConfigW3cXmlTypeSchema))
        return(false)
      else
        return(true)
    else
      if ((typeof definitionPropertyContainer.typeType != "undefined")
        && (definitionPropertyContainer.typeType == "enumInfo"))
        return(false)
      else
        if (typeof definitionPropertyContainer.type != "undefined")
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

  // replaces getComponentSchemaPropertyDefinition().getAllOfItemTypeContainer()
  static getAllOfItemTypeContainer (definitionPropertyAllOf) {
    let allOfItemTypeContainer;

    definitionPropertyAllOf.some( function (definitionObjectPropertyAllOfItem) {
      if (typeof definitionObjectPropertyAllOfItem.properties != "undefined") {
        allOfItemTypeContainer = definitionObjectPropertyAllOfItem.properties;
        return(true);
      } else {
        if (typeof definitionObjectPropertyAllOfItem.additionalProperties != "undefined") {
          allOfItemTypeContainer = definitionObjectPropertyAllOfItem.additionalProperties;
          return(true);
        } else {
          if (typeof definitionObjectPropertyAllOfItem.type != "undefined") {
            allOfItemTypeContainer = definitionObjectPropertyAllOfItem;
            return(true);
          }
        }
      }
    });

    return(allOfItemTypeContainer);
  }

  //046e replaces getDefinitionReferenceContainer
  static getDefinitionReferenceContainer (definitionObjectContainer) {
    console.log("  getDefinitionReferenceContainer");
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
        /* 049a if (typeof definitionObjectContainer.allOf[0].properties != "undefined") {
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
        } 049a */

        definitionObjectContainer.allOf.some( function (definitionObjectContainerAllOfItem) {
          if (typeof definitionObjectContainerAllOfItem.properties != "undefined") {
            if (typeof definitionObjectContainerAllOfItem.properties.value != "undefined")
              if (typeof definitionObjectContainerAllOfItem.properties.value.allOf != "undefined")
                definitionReferenceContainer = definitionObjectContainerAllOfItem.properties.value.allOf[0]
              else
                definitionReferenceContainer = definitionObjectContainerAllOfItem.properties.value
          } else {
            if (typeof definitionObjectContainerAllOfItem.items != "undefined") {
              if (typeof definitionObjectContainerAllOfItem.items.properties != "undefined") {
                if (typeof definitionObjectContainerAllOfItem.items.properties.value != "undefined")
                  definitionReferenceContainer = definitionObjectContainerAllOfItem.items.properties.value
              } else definitionReferenceContainer = definitionObjectContainerAllOfItem.items
            } else definitionReferenceContainer = definitionObjectContainerAllOfItem
          };
          return(true);
        }, this);

      } else {
        if ((typeof definitionObjectContainer.value != "undefined") && (typeof definitionObjectContainer.value.$ref != "undefined"))
          definitionReferenceContainer = definitionObjectContainer.value
        else
          if ( typeof definitionObjectContainer.$ref != "undefined" )
            definitionReferenceContainer = definitionObjectContainer
      }
    };
    if (typeof definitionReferenceContainer != "undefined")
      console.log("  DefinitionReference: " + definitionReferenceContainer.$ref)
    else console.log("  WARNING: definitionReference is undefined.");
    return (definitionReferenceContainer);
  }

//046e replaces getDefinitionReferenceName
  static getDefinitionReferenceName (definitionObjectContainer) {
    var definitionReferenceContainer;
      definitionReferenceContainer = SchemaComponent.getDefinitionReferenceContainer(definitionObjectContainer);
    if (typeof definitionReferenceContainer != "undefined") {
      var definitionReferenceName = definitionReferenceContainer.$ref.substring(definitionReferenceContainer.$ref.lastIndexOf('/') + 1);
      return (definitionReferenceName.substring(definitionReferenceName.lastIndexOf('#') + 1));
    } else return;
  }

//046e replaces getPropertyObjectIdentifierContainer()
  static getPropertyObjectIdentifierContainer (propertyObject) {
    console.log("  getPropertyObjectIdentifierContainer");
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
            if (typeof propertyObject.typeType != "undefined") {
              if (propertyObject.typeType == "classInfo")
                propertyObjectIdentifierContainer = propertyObject
            } else
              console.log("  WARNING: trouble determining PropertyObjectIdentifierContainer");
    return (propertyObjectIdentifierContainer);
  }

  //046e getRemotePropertySchemaSourceFile
  setSourceSchemaFile (schemaFilepathMappings) {
    console.log("  setSourceSchemaFile");
    if (typeof this.namespace != "undefined") {

      for (var index = 0; index < schemaFilepathMappings.length; index++) {
        if (schemaFilepathMappings[index].sourceSchemaFileId
          === this.namespace)
          if (schemaFilepathMappings[index].sourceSchemaFileId != '#')
            //return (schemaFilepathMappings[index].sourceSchemaFilename);
            this.sourceSchemaFile = schemaFilepathMappings[index].sourceSchemaFilename;
      };

      if (typeof this.sourceSchemaFile == "undefined")
        throw "  ERROR: schema namespace was not matched for a remote schema source file.";
    } else
      throw("  ERROR: unable to setSourceSchemaFile for namespace: " + this.namespace);
  }

static getRemoteDefinitionIdentifier (definitionObject) {
    console.log("  getRemoteDefinitionIdentifier");
    var definitionReference;
    if (Object.getOwnPropertyNames(definitionObject).length > 0) {
      var definitionReferenceContainer = SchemaComponent.getDefinitionReferenceContainer(definitionObject);
      if (typeof definitionReferenceContainer != "undefined")
        if (typeof definitionReferenceContainer.$ref != "undefined") 
          definitionReference = definitionReferenceContainer.$ref;
    } else 
      definitionReference = definitionObject;
    if (typeof definitionReference != "undefined") {
      console.log("  getRemoteDefinitionIdentifier from: " + definitionReference);
      var remoteDefinitionNamespace = definitionReference.substring(0, definitionReference.indexOf('#'));
      if (remoteDefinitionNamespace == "") 
        remoteDefinitionNamespace = '#';
      var remoteDefinitionName = definitionReference.substring(definitionReference.lastIndexOf('/') + 1);
      var remoteDefinitionIdentifier;
      if (remoteDefinitionNamespace.substring(remoteDefinitionNamespace.length - 1) != '#')
        remoteDefinitionIdentifier = remoteDefinitionNamespace + '#' + remoteDefinitionName
      else
        remoteDefinitionIdentifier = remoteDefinitionNamespace + remoteDefinitionName;
      console.log("  getRemoteDefinitionIdentifier: " + remoteDefinitionIdentifier);
      return (remoteDefinitionIdentifier);
    } else
      throw("  ERROR: unable to getRemoteDefinitionIdentifier");
  }

  //046e replaces getRemoteDefinitionNamespace
  static getRemoteDefinitionNamespace (definitionObject) {
    console.log("  getRemoteDefinitionNamespace");
    var definitionReference;
    if (Object.getOwnPropertyNames(definitionObject).length > 0) {
      var definitionReferenceContainer = SchemaComponent.getDefinitionReferenceContainer(definitionObject);
      if (typeof definitionReferenceContainer != "undefined")
        if (typeof definitionReferenceContainer.$ref != "undefined") 
          definitionReference = definitionReferenceContainer.$ref;
    } else 
      definitionReference = definitionObject;
    if (typeof definitionReference != "undefined") {
      console.log("  getRemoteDefinitionNamespace from: " + definitionReference);
      var remoteDefinitionNamespace = definitionReference.substring(0, definitionReference.indexOf('#'));
      if (remoteDefinitionNamespace == "") 
        remoteDefinitionNamespace = '#';
      console.log("  remoteDefinitionNamespace: " + remoteDefinitionNamespace);
      return (remoteDefinitionNamespace);
    } else
      throw("  ERROR: unable to getRemoteDefinitionNamespace");
  }

} // # class SchemaComponent

class SourceSchema {
  constructor (schemaFile) {
    var schemaFileBuffer = readFile(schemaFile);
    if (typeof schemaFileBuffer != "undefined") {
      this.fileObject = JSON.parse(schemaFileBuffer);
      this.namespace = this.fileObject.id.substring(0, this.fileObject.id.indexOf('#'));
    } else
      console.log("  ERROR: nothing to parse for " + schemaFile);
  }

    //046e replaces loadDocumentationMap
    //050 rename source documentation labels
  setSourceContent (schemaFilepathMappings, sourceContentBaseDir) {
    console.log("  setSourceContent");
    try {
      if (typeof this.namespace != "undefined") {

      for (var index = 0; index < schemaFilepathMappings.length; index++) {
        if (schemaFilepathMappings[index].namespace === this.namespace) { 
          if ( schemaFilepathMappings[index].sourceContentFilename !== "" ) {
            console.log("  setSourceContent file: " + "../" + sourceContentBaseDir + schemaFilepathMappings[index].sourceContentFilepath + schemaFilepathMappings[index].sourceContentFilename);
            var sourceContentBuffer = readFile(sourceContentBaseDir + schemaFilepathMappings[index].sourceContentFilepath + schemaFilepathMappings[index].sourceContentFilename);
            if (typeof sourceContentBuffer != "undefined") {
              this.sourceContent = JSON.parse(sourceContentBuffer)
              break;
            } else
              console.log("  WARNING: nothing to parse for " + sourceContentBaseDir + schemaFilepathMappings[index].sourceContentFilepath + schemaFilepathMappings[index].sourceContentFilename);
          } else {
            console.log("  WARNING: Namespace match found but setSourceContent not set.");
          };
        };
      };

      if ( typeof this.sourceContent == "undefined" ) 
        throw("  WARNING: unable to setSourceContent for namespace: " + this.namespace);
      } else throw("  WARNING: unable to setSourceContent for namespace: " + this.namespace);

    } catch (error) {
      console.log(error);    
    }
  }

  //046e replaces setSourceSchemaBaseDirRelativeDepth
  setTargetBaseDirRelativeDepth (schemaFilepathMappings, rootSchemaNamespace) {
    console.log("  setTargetBaseDirRelativeDepth");
    let targetSchemaFilepath;
    var matchesRootSchemaNamespace = false;

    for (var index = 0; index < schemaFilepathMappings.length; index++) {
      if (schemaFilepathMappings[index].namespace === this.namespace) {
        if (schemaFilepathMappings[index].namespace !=  rootSchemaNamespace)
          targetSchemaFilepath = schemaFilepathMappings[index].targetSchemaFilepath
        else
          matchesRootSchemaNamespace = true;
        break;
      }
    };

    if (typeof targetSchemaFilepath !== "undefined") {
      //this.baseDirRelativeDepth = '';
      var targetBaseDirRelativeDepth = '';
      var targetSchemaBaseDirRelativeDepthCount = targetSchemaFilepath.split('/').length;

      for (var index = 1; index < targetSchemaBaseDirRelativeDepthCount; index++) {
        //this.baseDirRelativeDepth = this.baseDirRelativeDepth + "../"
        targetBaseDirRelativeDepth = targetBaseDirRelativeDepth + "../"
      };

      this.targetBaseDirRelativeDepth = targetBaseDirRelativeDepth;
      console.log("  setTargetBaseDirRelativeDepth: " + this.targetBaseDirRelativeDepth);
    } else 
      if (matchesRootSchemaNamespace) {
        this.targetBaseDirRelativeDepth = '';
        console.log(  "INFO: ignore TargetBaseDirRelativeDepth since source schema namespace matches rootSchemaNamespace.")
      } else 
        throw ("  ERROR: source schema namespace was not matched for TargetBaseDirRelativeDepth.");
  }

  //? static getSourceSchemaFile () {}

} // # class SourceSchema

var SchemaGenerator = (function (schemaFile) {
  console.log("# initialize SchemaGenerator for: " + schemaFile);
  config.derived = new ConfigDerived(); 
  config.derived.setW3cXmlTypeSchema();
  if (typeof config.derived.w3cXmlTypeSchema != "undefined") {
    var sourceSchema = new SourceSchema(schemaFile);
    config.derived.rootSchemaNamespace = sourceSchema.namespace;
    config.derived.setRootSchemaTargetSchemaFilepath(config.mapping.schemaFilepathMappings, config.derived.rootSchemaNamespace);
    sourceSchema.setTargetBaseDirRelativeDepth(config.mapping.schemaFilepathMappings, config.derived.rootSchemaNamespace);
    sourceSchema.setSourceContent(config.mapping.schemaFilepathMappings, config.mapping.sourceContentBaseDir);
    //?config.derived.setRootSchemaTargetSchemaFilepath(config.mapping.schemaFilepathMappings, sourceSchema.namespace);
    var pedigree = [sourceSchema.namespace];
    if (typeof sourceSchema.fileObject.anyOf != "undefined") {

      sourceSchema.fileObject.anyOf.forEach(function (sourceSchemaFileObjectAnyOfItem) {
        //050 var schemaComponent = new SchemaComponent(sourceSchemaFileObjectAnyOfItem, sourceSchema, config);
        var schemaComponent = new SchemaComponent(sourceSchemaFileObjectAnyOfItem, sourceSchema, pedigree, config);
        schemaComponent.generateSchema();
      }, this);

    };
  } else
    console.log("  ERROR: Access to w3cXmlTypeSchema required to proceed.  Check `mappings.js` configuration file.");
  return(GeneratedSchemaLog);
}) // # SchemaGenerator

/* initialize { */
/* 049a SchemaGenerator.prototype.setSourceSchemaNamespace = function (sourceSchemaObject) {
  var sourceSchemaId = sourceSchemaObject.id.substring(0, sourceSchemaObject.id.indexOf('#'));
  if (sourceSchemaId != "")
    this.sourceSchemaNamespace = sourceSchemaId
  else
    if (typeof sourceSchemaObject.definitions != "undefined") {
      var firstDefinitionObject = sourceSchemaObject.definitions[Object.keys(sourceSchemaObject.definitions)[0]];
      if (typeof firstDefinitionObject.typeName != "undefined") {
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

  if (typeof sourceSchemaFilepath !== "undefined") {
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
        if (typeof elementInfo.substitutionHead !== "undefined") {
          if (typeof elementInfo.substitutionHead.namespaceURI !== "undefined")
            this.substitutionMappings.push(
              {
                "substitutionHead": elementInfo.substitutionHead.namespaceURI + '#' + elementInfo.substitutionHead.localPart, "substitution": sourceModule[Object.keys(sourceModule)[0]].defaultElementNamespaceURI + '#' + elementInfo.elementName
              });
          else
            if ((typeof elementInfo.substitutionHead !== "undefined") && (typeof elementInfo.elementName.namespaceURI !== "undefined"))
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
}; 049a */
/* initialize } */
/* 049a SchemaGenerator.prototype.createSchemaTemplateObject = function (templateId) {
  console.log('##match schema template object: ' + templateId);

  for (var index = 0; index < this.schemaTemplateObjects.length; index++) {
    if (this.schemaTemplateObjects[index].templateId === templateId) {
      return (JSON.parse(JSON.stringify(this.schemaTemplateObjects[index].templateObject)));
    }
  };

  throw 'schema id was not matched for a template object';

} 049a */
/* 049a 
SchemaGenerator.prototype.getObjectPropertyNamespaceURI = function (objectProperty) {
  var objectPropertyNamespaceURI;
  var propertyObjectIdentifierContainer = this.getPropertyObjectIdentifierContainer(objectProperty);
  if (typeof propertyObjectIdentifierContainer != "undefined")
    if (typeof propertyObjectIdentifierContainer.namespaceURI != "undefined")
      objectPropertyNamespaceURI = propertyObjectIdentifierContainer.namespaceURI;
    else
      if (typeof propertyObjectIdentifierContainer.$ref != "undefined")
        objectPropertyNamespaceURI = propertyObjectIdentifierContainer.$ref.substring(0, propertyObjectIdentifierContainer.$ref.indexOf('#'));
  else
      throw ("ERROR: trouble determining objectPropertyNamespaceURI");
  console.log('##objectPropertyNamespaceURI: ' + objectPropertyNamespaceURI);
  return (objectPropertyNamespaceURI);
}

SchemaGenerator.prototype.getSchemaReference = function (definitionObjectProperty) {
  var propertyNamespace = this.getObjectPropertyNamespaceURI(definitionObjectProperty);
  if (typeof propertyNamespace != "undefined")
    if (propertyNamespace === this.sourceSchemaNamespace)
      return(definitionObjectProperty.elementName.localPart + '.json')
    else
      return(this.getSchemaFileDestination(definitionObjectProperty));
} 049a */
/* 049a 
SchemaGenerator.prototype.setPropertyArrayTemplate = function (definitionObjectProperty) {
  var schemaPropertyArrayTemplate = this.createSchemaTemplateObject('property-array-template');
  if (typeof definitionObjectProperty.elementName != "undefined") {
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
  if (typeof definitionObjectProperty.elementName != "undefined") {
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
049a */
// 049a replaced by PropertyPrimitive class
/* 049a SchemaGenerator.prototype.setPropertyPrimitiveTemplate = function (definitionObjectProperty) {
  let defaultPrimitiveFacets = this.defaults.primitiveFacets;

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

  var propertyPrimitiveTemplate = {};
  var definitionReferenceName = this.getDefinitionReferenceName(definitionObjectProperty);
  if (typeof definitionReferenceName != "undefined") {
    var w3cXmlTypeSchemaDefinition = {};
    if (typeof this.w3cXmlTypeSchema.definitions[definitionReferenceName] != "undefined") 
      w3cXmlTypeSchemaDefinition = this.w3cXmlTypeSchema.definitions[definitionReferenceName]
    else
      if (typeof this.w3cXmlTypeSchema.definitions[definitionReferenceName.charAt(0).toLowerCase() + definitionReferenceName.slice(1)] != "undefined")
        w3cXmlTypeSchemaDefinition = this.w3cXmlTypeSchema.definitions[definitionReferenceName.charAt(0).toLowerCase() + definitionReferenceName.slice(1)];
      /* 046b else
        var remoteDefinitionObject = this.getRemoteDefinitionObject(this.getId(definitionObjectProperty));
        this.generateComponentSchema(remoteDefinitionObject);
        schemaPropertyPrimitiveTemplate = { "$ref": this.getSchemaReference(definitionObjectProperty) } ;
        046b */
    /* 049a if ((typeof w3cXmlTypeSchemaDefinition != "undefined") || (w3cXmlTypeSchemaDefinition != "")) {
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
/* 049a
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

      049a *//*046c var anyDefaultFacets = getAnyDefaultFacets(propertyPrimitiveTemplate);

      anyDefaultFacets.forEach( function (facet) {
        propertyPrimitiveTemplate = Object.assign(propertyPrimitiveTemplate, facet);
      });
046c */
/* 049a    }
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
} 049a */

/* 049a SchemaGenerator.prototype.getSubstitutionIdentifiers = function (substitutionHeadIdentifier) {
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
// 049b replaced by remoteSchemaHasDefinition
SchemaGenerator.prototype.remoteSchemaContainsDefinition = function (sourceSchemaFilename, definitionObjectName) {
  var sourceSchemaFile = this.sourceSchemaBaseDir + sourceSchemaFilename;
  console.log('##remote object source schema file: ' + sourceSchemaFile);
  var sourceSchemaBuffer = readFile(sourceSchemaFile);
  var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
  if (typeof sourceSchemaObject.definitions[definitionObjectName] != "undefined") return (true)
  else return (false);
} 049a */
/* replaced by getDefinitionSourceSchemaFile
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
*/
/*049 replaced by SchemaComponent.getRemoteDefinitionObject
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
049 */
/* 049a SchemaGenerator.prototype.getRemoteDefinitionNamespace = function (definitionObject) {
  console.log("###getRemoteDefinitionNamespace");
  var definitionReference;
  if (Object.getOwnPropertyNames(definitionObject).length > 0) {
    var definitionReferenceContainer = this.getDefinitionReferenceContainer(definitionObject);
    if (typeof definitionReferenceContainer != "undefined")
      if (typeof definitionReferenceContainer.$ref != "undefined") 
        definitionReference = definitionReferenceContainer.$ref;
  } else 
    definitionReference = definitionObject;
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
        return (this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + remoteDefinitionObjectName + ".json")
      else
        if ((this.schemaFilepathMappings[index].sourceSchemaFileId == '#') && (this.remoteSchemaContainsDefinition(this.schemaFilepathMappings[index].sourceSchemaFilename, remoteDefinitionObjectName)))
          return (this.sourceSchemaBaseDirRelativeDepth + this.schemaFilepathMappings[index].targetSchemaFilepath + remoteDefinitionObjectName + ".json");
  };

  throw 'ERROR: Schema namespace was not matched for a remote definition file location.';
}

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
  if (typeof propertyObjectIdentifierContainer != "undefined")
    if (typeof propertyObjectIdentifierContainer.namespaceURI != "undefined")
      definitionObjectPropertyNamespace = propertyObjectIdentifierContainer.namespaceURI;
    else
      if (typeof propertyObjectIdentifierContainer.$ref != "undefined")
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
  console.log("###get schema file destination from object namespace match: " + propertyNamespace);

  for (var index = 0; index < this.schemaFilepathMappings.length; index++) {
    if (this.schemaFilepathMappings[index].namespace === propertyNamespace) {
      if (this.sourceSchemaNamespace === propertyNamespace)
        return (this.schemaFilepathMappings[index].targetSchemaFilepath + propertyName + '.json');
      else
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
      console.log('##write schema document file to: ' + relativeDestination);
      fs.writeFileSync(relativeDestination, schemaBuffer);
    };
  } else console.log("    WARNING: Nothing to write.  SchemaObject is undefined.");
} 049a */

//046e replaced in class SchemaComponent
/* SchemaGenerator.prototype.generateComponentSchema = function (definitionObject) {

  console.log("## generateComponentSchema");
  var definitionObjectIdentifier = this.getId(definitionObject);
  if (!GeneratedSchema.identifiers.includes(definitionObjectIdentifier)) {
    var sourceSchemaFile = this.sourceSchemaBaseDir + this.getRemotePropertySchemaSourceFile(definitionObject);
    console.log("  remote object source schema file: " + sourceSchemaFile);
    var sourceSchemaBuffer = readFile(sourceSchemaFile);
    var sourceSchemaObject = JSON.parse(sourceSchemaBuffer);
    var ssg = new SchemaGenerator();
    ssg.schemaTemplateObjects = this.schemaTemplateObjects;
    ssg.targetSchemaBaseDir = this.targetSchemaBaseDir;
    ssg.targetSchemaBuildVersion = this.targetSchemaBuildVersion;
    ssg.defaultPrimitiveFacets = this.defaults.primitiveFacets;
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
} */
/* 049a 
SchemaGenerator.prototype.generateSubstitutionObjectDefinitionSchema = function (sourceSchemaObject, definitionObject) {
  console.log("###generateSubstitutionObjectDefinitionSchema");
  var schemaProperties = {};
  var substitutionIdentifiers = this.getSubstitutionIdentifiers(this.getId(definitionObject));
  if (substitutionIdentifiers.length > 0) {
    var substitutionObjectName;

    substitutionIdentifiers.forEach(function (substitutionIdentifier) {
      substitutionObjectName = substitutionIdentifier.substring(substitutionIdentifier.lastIndexOf('#') + 1);
      if ((typeof sourceSchemaObject.definitions != "undefined")
        && (typeof sourceSchemaObject.definitions[substitutionObjectName] != "undefined"))
        return (this.generateObjectDefinitionSchema(sourceSchemaObject, definitionObject));
      else {
        var remoteObject = this.getRemoteObject(substitutionIdentifier);
        this.generateComponentSchema(remoteObject);
        schemaProperties[substitutionObjectName] = { "$ref": this.getSchemaReference(remoteObject) };
      };
    }, this);

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
} 049a */
/* 049a replaced by Schema class function
SchemaGenerator.prototype.getPropertyTemplateType = function (definitionObjectProperty) {
  console.log("  getPropertyTemplateType");
  let propertyTemplateType;
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
049a */
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
/* 049
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
    /* 049 var propertyTemplateType = this.getPropertyTemplateType(definitionPropertyItem);
    switch (propertyTemplateType) {
      case 'array':
        if (typeof definitionPropertyContainer.elementName != "undefined")
          if (definitionPropertyContainer.elementName.namespaceURI == this.sourceSchemaNamespace)
            this.generateComponentSchema(sourceSchemaObject, propertyObjectReferenceName);
          else
            this.generateComponentSchema(definitionPropertyContainer);
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
    } 049*/
    /*046d else {
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
        /* 049 break;
      case 'primitive':
        // 046b if (typeof definitionPropertyContainer.name == "undefined")
        //046 var propertyTemplate = this.setPropertyPrimitiveTemplate(definitionPropertyContainer);
        //046 property[propertyObjectName] = propertyTemplate;
        componentSchemaPropertyDefinition = this.setPropertyPrimitiveTemplate(definitionPropertyItem);049 */
        /* 046b else
          console.log("    definition ignored"); 046b */
        /* 049 break;
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
    } 049 */ /* above may be deprecated by this.setPropertyTemplate() } */
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
  /* 049 };

  return(componentSchemaPropertyDefinition);

} 049 */

/* 049a SchemaGenerator.prototype.getPropertyReference = function (sourceSchemaObject, definitionPropertyContainer) {

  let propertyObjectReferenceName = this.getDefinitionReferenceName(definitionPropertyContainer);
  console.log("###getPropertyReference: " + propertyObjectReferenceName)
  if ((typeof this.w3cXmlTypeSchema.definitions[propertyObjectReferenceName] != "undefined") 
    || (typeof this.w3cXmlTypeSchema.definitions[propertyObjectReferenceName.charAt(0).toLowerCase() + propertyObjectReferenceName.slice(1)] != "undefined"))
    property = this.setPropertyPrimitiveTemplate(definitionPropertyContainer)
  else
    if ((typeof sourceSchemaObject.definitions != "undefined") 
      && (typeof sourceSchemaObject.definitions[propertyObjectReferenceName] != "undefined")) {
      this.generateComponentSchema(sourceSchemaObject, propertyObjectReferenceName);
      return (propertyObjectReferenceName = { "$ref": propertyObjectReferenceName + ".json" } );
    } else {
      var remoteObject = this.getRemoteObject(this.getId(definitionPropertyContainer));
      this.generateComponentSchema(remoteObject);
      return (propertyObjectReferenceName = { "$ref": this.getSchemaReference(definitionPropertyContainer) } );
    };
} 049a */

//046b SchemaGenerator.prototype.getObjectDefinitionPropertiesSchema = function (sourceSchemaObject, definitionProperty) {
/* 049a SchemaGenerator.prototype.getComponentSchema = function (sourceSchemaObject, definitionProperty) {
  
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
//046a } 049a */
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
  /* 049a return(schemaObject);
} 049a */

//045 SchemaGenerator.prototype.generateObjectDefinitionSchema = function (sourceSchemaObject, definitionObject) {
  //046b the following not implemented
/* 049a SchemaGenerator.prototype.getObjectDefinitionSchema = function (sourceSchemaObject, definitionObject) {
  console.log("###getObjectDefinitionSchema");
  let objectDefinitionSchema = {}; 049a */
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
     /* 049a throw("don't go down this path");
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
                  schemaObject.properties = Object.assign(schemaObject.properties, this.getObjectDefinitionPropertiesSchema(sourceSchemaObject, definitionObjectAllOfItem)) 049a */
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
/* 049a          }, this)

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
          } 049a */ /* 046a else {
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
            /* 049a // 046a else
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
} 049a */

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

/*//047
//046b SchemaGenerator.prototype.getProperties = function (sourceSchemaObject, definitionObject) {
SchemaGenerator.prototype.getComponentSchemaProperties = function (sourceSchemaObject, definitionObject) {
//047*/
  /* following may be deprecated by this.setPropertyTemplate() { */
  /*//047function getPropertyTemplateType(definitionObjectProperty) {
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
  }//047*/
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
  /*//047function getDefinitionObjectTypeName (definitionObject) {
    if (typeof definitionObject.typeName != "undefined") 
      return(definitionObject.typeName.localPart)
  }

  console.log("#### getComponentSchemaProperties");
  let schemaProperties = {};
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
              /*//047 schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { "$ref" : substitutionIdentifier } ));
            }, this);

          };
          //? schemaProperties = Object.assign(schemaProperties, substitutionSchemaProperties);
        //046c } else 
          //046c schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionObjectPropertyName] : definitionObject.properties[definitionObjectPropertyName] } ));
        } else
      //046d};
          schemaProperties = Object.assign(schemaProperties, this.getComponentSchemaProperty(sourceSchemaObject, { [definitionObjectPropertyName] : definitionObject.properties[definitionObjectPropertyName] } ));
    };
//047*/
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
  /*//047 return (schemaProperties);
}//047*/

//046b generateObjectSchema
//046e replaced by SchemaGenerator
//046e SchemaGenerator.prototype.getInitialComponentSchema = function (sourceSchemaObject) {
  //046e console.log("## getInitialComponentSchema");
  //046 var definitionObjectName;
  //046e if (typeof sourceSchemaObject.anyOf != "undefined") {
    //046a var definitionObjectName;
    //046a var definitionReferenceName;

    //046e sourceSchemaObject.anyOf.forEach(function (sourceSchemaObjectAnyOfItem) {
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
      //046e var componentSchema = this.getComponentSchema(sourceSchemaObject, sourceSchemaObjectAnyOfItem);
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
      //046e this.writeSchemaFile(componentSchema, this.getSchemaFileDestination(sourceSchemaObjectAnyOfItem));
      //046e GeneratedSchema.identifiers.push(componentSchema.id);
    //046e }, this);

  //046e };
  //046e return(GeneratedSchema);

//046e }

module.exports = SchemaGenerator;