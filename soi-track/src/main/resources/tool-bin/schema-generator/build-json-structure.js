var $RefParser = require('json-schema-ref-parser')
, SoiSchemaGenerator = require('./lib/soi-schema-generator.js');

  $RefParser.dereference('../../iep-schema/TsoaTrack.json', function(err, schema) {
    if (err) {
      console.error(err);
    }
    else {
      // `schema` is just a normal JavaScript object that contains your entire JSON Schema, 
      // including referenced files, combined into a single object 
      //console.log(schema.id);
      var schemaBuffer = JSON.stringify(schema, null, '  ');
      console.log('##output schema buffer string');
      console.log(schemaBuffer.toString());
    }
  });
