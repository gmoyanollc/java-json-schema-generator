#Schema Generator
##JSONIX

  * Jsonix is based on JAXB/XJC and XJC uses XSOM to process XML schemas (https://github.com/highsource/jsonix/issues/33)

#Jsonix Caveats
The following are caveats that the Schema Generator is intended to resolve.

  * xs:pattern is not supported and the expressions are not compatible
    * XML Schema regular expressions are not compatible with JavaScript/ECMAScript regular expressions
      * http://stackoverflow.com/questions/33482031/are-xml-schema-regular-expressions-compatible-to-javascript-ecmascript-regular-e
  * xs:annotation and simple type facets, e.g., as xs:pattern, xs:length, xs:enumeration, are not supported
    * JAXB may be the reason since simple type facets are ignored
      * https://jaxb.java.net/guide/Generating_Schema_that_you_want.html
      * https://java.net/jira/browse/JAXB-917
    * A simple extension to JAXB RI is available but Java developers have disappeared:
      * https://github.com/whummer/jaxb-facets)
    *   length, enumerations


#JSON Schema Generation
The generation of JSON schema provides the same advantages found with any automation: increased productivity, predictability, and quality.  All of these characteristics are especially important for the conversion of mature XML data models, which are typically thoroughly designed and documented.

 The following workflow takes in XML Schema to generate JSON schema file components.  

  ```
  .------------.
  | XML Schema |
  '------------'     .+-+-+-+-+-+-+.
            `----->  + XML content +   
            |        +  extractor  +     
            |        `-+-+-+-+-+-+-'     .----------------.
            |                   `----->  | schema content |
            |                            |    mapping     | ----.
            |        .+-+-+-+-+-+-+.     '----------------'     |
            `----->  + JSONIX/JAXB +                            |
                     +  compiler   +                            |
                     `-+-+-+-+-+-+-'     .----------------.     |
                                `----->  | schema mapping |     |
                                         |   artifacts    |---. |
                                         '----------------'   | |
                      .+-+-+-+-+-.                            | |
                      | schema   |  <-------------------------' |
                      |  builder |  <---------------------------'
  .-------------.     '+-+-+-+-+-' 
  | JSON Schema |  <-----'
  |  components |
  '-------------'  
  ```
Several schema file components are produced to represent general and specific concepts and properties.  They are associated to each other by relative file-path value in a '$ref' property.  These associations compose larger representations for general concepts.  In other words, general concepts are described by specific concepts and properties that are assocatied to each other by file references.  A de-referenced JSON schema file contains all the representations that describe a general concept.

#JSON Schema Mappings

  ```
  "id": anyOf[].elementName.namespaceURI + lowerFirstCharacter(anyOf.elementName.localPart)
  "title": lowerFirstCharacter(anyOf.elementName.localPart)
  "type": anyOf.elementName.type
  "description": ""
  "version": "0.1.0"
  "javaType": replace(trim(anyOf.elementName.namespaceURI, "http:// https://"), "/", "_") + replace(anyOf.elementName.localPart), "/", "_")
  "required": anyOf.properties.value.$ref.required
  ```
#Algorithmic Design Entities

##anyOf
JSON schema objects are described by the "anyOf" object.

  ```
  "anyOf" :[
    {
      "elementName" / "attributeName" : {}
      "type" : ""
      "properties" : {
        "value" : {
          "$ref" : ""  
        }
      }
      
    }
  ]
  ```
An elementName object generates a JSON schema object.  

An attributeName object adds a property to a local JSON schema object.

###$ref
A "$ref" object points to a definition object.  A definition is isometric to an XML type.  It contains the JSON schema object's structural properties and constraints.

The "$ref" object may point to a local or remote definition object.  

The following example is a remote reference:

```
"$ref":"http://release.niem.gov/niem/niem-core/3.0/#/definitions/TextType"
```
A remote reference is processed to obtain the schema file that contains the definition object.  The schema file is identified by a match of the namespace part to a pre-configured mapping.

##definitions
JSON schema object's structural properties and constraints are defined by a "definitions" object.

  ```
  "definitions" : {
    <object-type> : {
      {} / allOf" : [
        {
          "properties" : {
            <object> : {
              "title" : "",
              "elementName" / "attributeName" : {}
            }
          }
        }
      ]
    }
  }

  ```

#Conventions

  * namespace format: http://mcsc.usmc.mil/mc2sa/tsoa/soi/[domain-object]/[version] 
    * namespace is a URL that contains only lower-case letters
    * a hyphen seperates nouns, adjectives and other modifiers
    * example: `http://mcsc.usmc.mil/mc2sa/tsoa/soi/ObservedPlatformSystem/2.0`
  * schema file name matches [domain-object]
    * upper-camel-case starts and seperates nouns, adjectives and other modifiers
    * example: `ObservedPlatformSystem.xsd`
  * namespace prefix is represented by first letter of the system, service, domain object namespace parts
    * example: `xmlns:tst="http://mcsc.usmc.mil/mc2sa/tsoa/soi/track/2.0/`

#workflow
Every 'anyOf' and 'definition' referenced by an anyOf component gets a schema file generated.  

generateObjectSchema
  |
  `-> sourceSchemaObject.anyOf.forEach
        `-> getDefinitionReferenceName()
        `-> test(definitionObjectName != anyType)
        |     `-> createSchemaTemplateObject('object-template');
        |           `-> getDefinitionObjectName
        |           `-> test( definition is local )
        |                 `-> getProperties([definitionObjectName])
        |               else
        |                 `-> getRemoteDefinitionReference(anyOfObject)
        |                 `-> generateRemoteDefinitionObjectSchema(anyOfObject, definitionObjectName)
        |                      `-> getRemoteObjectSchemaSourceFile(anyOfObject)
        |                           `-> getRemoteDefinitionNamespace(anyOfPropertyObject)
        |                           `-> getDefinitionReferenceName(anyOfPropertyObject)
        |                      `-> generateObjectDefinitionSchema(definitionObject)
        |                            `-> getProperties([definitionObjectName])
        |                             `-> getSchemaFileDestination()
        |                             `-> writeSchemaFile()
        `--> test(definitionObjectName == anyType)
        |     `-> generateSubstitutionObjectDefinitionSchema()
        |           `-> getSubstitutionIdentifiers()
      |             `-> test( definition is local )
      *|                  `-> generateObjectDefinitionSchema()
      *|                  :     `-> getProperties()
      *|                  :     `-> getSchemaFileDestination()
      *|                  :     `-> writeSchemaFile()
      |                   `-else
      |                       `-> getRemoteDefinitionObject()
      |                       `-> generateRemoteObjectSchema()
      |                       |     `-> generateObjectDefinitionSchema()
      |                       |           `-> getProperties()
      |                       |           `-> getSchemaFileDestination()
      |                       |           `-> writeSchemaFile()
      |                       `-> getRemoteDefinitionReference()
        `-> getSchemaFileDestination()
        `-> writeSchemaFile()

getProperties(sourceSchemaObject, definitionObject)
  |
  `-> forEach(definitionObjectProperty)
        `-> getDefinitionReferenceName()
        `-> test(definitionObjectName != anyType)
        |     `-> getPropertyTemplateType
        |     `-> setProperty*Template
        |     :     `-> test( definitionObjectNamespace === this.sourceSchemaNamespace )
        |     :           $ref = localPart + '.json'
        |     :         else                  
        |     :           `-> $ref = targetSchemaFilepath + localPart + '.json'
        |     `-> test( definition is local )
        |           `-> generateObjectDefinitionSchema(sourceSchemaObject, definitionObject)
        |           `-else
        |               `-> generateRemotePropertySchema(definitionObjectProperty)
        |                     `-> generateObjectDefinitionSchema(definitionObject)
        |                           `-> getProperties([definitionObjectName])
        |                           `-> getSchemaFileDestination()
        |                           `-> writeSchemaFile()
        `--> test(definitionObjectName == anyType)
        |     `-> generateSubstitutionObjectDefinitionSchema((sourceSchemaObject, definitionObject)
        |           `-> getSubstitutionIdentifiers(this.getId(definitionObject))
        |           `-> test( definition is local )
        |                 `-> generateObjectDefinitionSchema(definitionObject)
        |                 :     `-> getProperties([definitionObjectName])
        |                 :     `-> getSchemaFileDestination()
        |                 :     `-> writeSchemaFile()
      |                   `-else
      |                       `-> getRemoteObject()
      |                       `-> generateRemoteObjectSchema()
      |                       |     `-> generateObjectDefinitionSchema()
      |                       |           `-> getProperties()
      |                       |           `-> getSchemaFileDestination()
      |                       |           `-> writeSchemaFile()
      |                       `-> getRemoteDefinitionReference()

#To-Do
- [x] narrow breadth of components converted from XML Schema to only those referenced
- [x] generate SoiTrack/soi-track from TSOA_Track/tsoa-track
- [x] implement relative path to external components
- [x] keep component capitalization
- [x] remove default schema require declarative that is empty
- [x] capture enumeration values
- [ ] implement enumeration values
- [x] capture facets
- [ ] implement facets
- [x] capture component documentation
- [ ] implement component documentation
- [x] capture substitution components
- [ ] ignore abstract container component
- [ ] ignore abstracts like augmentation point container, define and reference components or substitution components
        * augmentation point objects are listed in type definitions
        * the assocation between an augmentation point object and its containing <elements> is described in jsonix js module.
          ** descendent component may be identified by a substitutionHead property that associates it to an augmentation point object
            - [x] populate a lookup table containing substitutionHeads and their substitutions
            - [x] lookup substitutions for substitutionHeads and generate
- [x] define substition components in augmentation point type
- [x] allOf reference to a definition should define only the properties of the definition.  The definition object should be ignored.
- [x] include base definition in derived component, e.g., mo:Degree360Type --> nc:Degree360Type, Type --> SimpleType
- [x] generate schema files recursively or remove filter for JSONIX compiler.  The schema file for certain definition properties is never generated because the property is locally referenced by a definition but not defined in the local JSONIX schema file.  This may be attributeable to filtered generation of JSONIX artifacts. [Example]("http://release.niem.gov/niem/niem-core/3.0/#SystemName")  Another case is a definition not referenced by a local 'anyOf' component.


