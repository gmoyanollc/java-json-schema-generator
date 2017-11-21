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
    "source": "data.forge/mapping/vmf/",
    "target": "data.forge/java-json-schema/vmf/"
  },
  "sourceDocumentationBaseDir": "data.forge/extraction/vmf/",
  //"w3cXmlTypeSchema": "../xml-schema-json-mapper/node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema",
  "w3cXmlType" : {
    "namespace": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema",
    "schemaFile": "../xml-schema-convertor/node_modules/jsonix/jsonschemas/w3c/2001/XMLSchema.jsonschema"
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
      "namespace": "http://tdl.vmf.mil/MS6017/K01.1",
      "sourceDocumentationFilename": "k01.1_6017.xsd-documentation.json",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "mil_vmf_tdl_ms6017_k01.js",
      "sourceSchemaFilename": "mil_vmf_tdl_ms6017_k01.jsonschema",
      "sourceSchemaFileId": "http://tdl.vmf.mil/MS6017/K01.1",
      "targetSchemaFilepath": "mil/vmf/tdl/MS6017"
    },{
      "namespace": "http://tdl.vmf.mil/MS6017/K04.1",
      "sourceDocumentationFilename": "k04.1_6017.xsd-documentation.json",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "mil_vmf_tdl_ms6017_k04.js",
      "sourceSchemaFilename": "mil_vmf_tdl_ms6017_k04.jsonschema",
      "sourceSchemaFileId": "http://tdl.vmf.mil/MS6017/K04.1",
      "targetSchemaFilepath": "mil/vmf/tdl/MS6017"
    },{
      "namespace": "http://tdl.vmf.mil/MS6017/K05.1",
      "sourceDocumentationFilename": "k05.1_6017.xsd-documentation.json",
      "sourceDocumentationFilepath": "",
      "sourceModuleFilename": "mil_vmf_tdl_ms6017_k05.js",
      "sourceSchemaFilename": "mil_vmf_tdl_ms6017_k05.jsonschema",
      "sourceSchemaFileId": "http://tdl.vmf.mil/MS6017/K05.1",
      "targetSchemaFilepath": "mil/vmf/tdl/MS6017"
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
