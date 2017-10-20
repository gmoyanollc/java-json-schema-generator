exports.config = {
  "targetSchemaBuildVersion": "0.0.1",
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
    "source": "./data/conversion/mapping/",
    "target": "./data/java-json-schema/"
  },
  "sourceDocumentationBaseDir": "./data/xml-schema-content/",
  "w3cXmlTypeSchema": "../xml-schema-convertor/node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema",
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
      "namespace": "schema-namespace",
      "sourceDocumentationFilename": "sourceDocumentationFilename-documentation.json",
      "sourceModuleFilename": "sourceModuleFilename.js",
      "sourceSchemaFilename": "sourceSchemaFilename.jsonschema",
      "sourceSchemaFileId": "sourceSchemaFileId",
      "targetSchemaFilepath": "targetSchemaFilepath"
    },{
      "namespace": "http://www.w3.org/1999/xlink",
      "sourceDocumentationFilename": "",
      "sourceModuleFilename": "",
      "sourceSchemaFilename": "",
      "sourceSchemaFileId": "",
      "targetSchemaFilepath": "jsonix/w3c/1999/"
    },{
      "namespace": "",
      "sourceDocumentationFilename": "",
      "sourceModuleFilename": "",
      "sourceSchemaFilename": "",
      "sourceSchemaFileId": "",
      "targetSchemaFilepath": "jsonix/w3c/2001/"
    },{
      "namespace": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema",
      "sourceDocumentationFilename": "",
      "sourceModuleFilename": "",
      "sourceSchemaFilename": "node_modules/jsonix/w3c/2001/XMLSchema.jsonschema",
      "sourceSchemaFileId": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema",
      "targetSchemaFilepath": ""
    }
  ]
}
