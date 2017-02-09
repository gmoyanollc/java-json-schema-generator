#SOI Schema Generator
##JSONIX
  * Jsonix is based on JAXB/XJC and XJC uses XSOM to process schemas (https://github.com/highsource/jsonix/issues/33)

#Jsonix Caveats
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


#Workflow
  ```
  NIEM-Track XML Schema
         |        
         v
    JSONIX compiler
         |
         v
      NIEM-Track
     intermediary 
     JSON Schema 
         |
         v
        SOI
   Schema Generator
         |
         v
        SOI 
     JSON Schema
  ```
  
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
