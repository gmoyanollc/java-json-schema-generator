exports.config = {
  "targetSchemaBuildVersion": "0.4.8",
  "defaultPrimitiveFacets": {
    "dateTimeFacets": { "type": "string", "format": "date-time" },
    "numberFacets": { "type": "number", "maximum": 2147483647, "minimum": -2147483648 },
    "stringFacets": { "type": "string", "maxLength": 128 },
    "array": { "maxItems": 16 },
    "dateTime": { "type": "string", "format": "date-time" },
    "number": { "maximum": 2147483647, "minimum": -2147483648 },
    "string": { "maxLength": 128 }
  },
  "schemaBaseDir": {
    "source": "data.forge/mapping/AbcsTarget/",
    "target": "data.forge/java-json-schema/AbcsTarget/"
  },
  "sourceDocumentationBaseDir": "data.forge/extraction/AbcsTarget/",
  //"w3cXmlTypeSchema": "../xml-schema-json-mapper/node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema",
  "w3cXmlType" : {
    "namespace": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema",
    "schemaFile": "../xml-schema-json-mapper/node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema"
  },
  "schemaTemplates": [
    {
      "id": "schema-template",
      "file": "./lib/schema-template.json"
    }, {
      "id": "object-template",
      "file": "./lib/schema-object-template.json"
    }, {
      "id": "array-template",
      "file": "./lib/schema-array-template.json"
    }, {
      "id": "property-object-template",
      "file": "./lib/schema-property-object-template.json"
    }, {
      "id": "property-array-template",
      "file": "./lib/schema-property-array-template.json"
    }, {
      "id": "property-primitive-template",
      "file": "./lib/schema-property-primitive-template.json"
    }
  ],
  "schemaFilepathMappings": [
    {
      "namespace": "http://peoc3t.us.army.mil/abcs/target:2.0",
      "sourceDocumentationFilename": "AbcsTarget.xsd-documentation.json",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "mil_army_us_peoc3t_abcs_target__2.js",
      "sourceSchemaFilename": "mil_army_us_peoc3t_abcs_target__2.jsonschema",
      "sourceSchemaFileId": "http://peoc3t.us.army.mil/abcs/target:2.0#",
      "targetSchemaFilepath": "mil/army/us/peoc3t/abcs/target/2.0"
    },{
      "namespace": "http://peoc3t.us.army.mil/abcs/firescommon:2.0",
      "sourceDocumentationFilename": "FireSupportCommon.xsd-documentation.json",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "mil_army_us_peoc3t_abcs_firescommon__2.js",
      "sourceSchemaFilename": "mil_army_us_peoc3t_abcs_firescommon__2.jsonschema",
      "sourceSchemaFileId": "http://peoc3t.us.army.mil/abcs/firescommon:2.0#",
      "targetSchemaFilepath": "mil/army/us/peoc3t/abcs/firescommon/2.0"
    },{
      "namespace": "http://peoc3t.us.army.mil/abcs/common:2.0",
      "sourceDocumentationFilename": "AbcsCommon.xsd-documentation.json",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "mil_army_us_peoc3t_abcs_common__2.js",
      "sourceSchemaFilename": "mil_army_us_peoc3t_abcs_common__2.jsonschema",
      "sourceSchemaFileId": "http://peoc3t.us.army.mil/abcs/common:2.0#",
      "targetSchemaFilepath": "mil/army/us/peoc3t/abcs/common/2.0"
    },{
      "namespace": "urn:us:gov:ic:ism:v2",
      "sourceDocumentationFilename": "IC-ISM-v2.1.xsd-documentation.json",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "us_gov_ic_ism_v2.js",
      "sourceSchemaFilename": "us_gov_ic_ism_v2.jsonschema",
      "sourceSchemaFileId": "#",
      "targetSchemaFilepath": "us/gov/ic/ism/v2"
    },{
      "namespace": "http://www.w3.org/1999/xlink",
      "sourceDocumentationFilename": "",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "",
      "sourceSchemaFilename": "",
      "sourceSchemaFileId": "",
      "targetSchemaFilepath": "jsonix/w3c/1999/"
    },{
      "namespace": "",
      "sourceDocumentationFilename": "",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "",
      "sourceSchemaFilename": "",
      "sourceSchemaFileId": "",
      "targetSchemaFilepath": "jsonix/w3c/2001/"
    }
  ]
}
