var fs = require('fs');
var Ajv = require('ajv');

var schemaFile = '../../iep-schema/SoiTrack-dereferenced.json';
var dataFile = '../../iep-sample/track-unit.json';

var schema = JSON.parse(readFile(schemaFile));
/*
var schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "http://mcsc.usmc.mil/mc2sa/tsoa/soi/soi-track/2.0/soi-track",
  "title": "SOI Track",
  "type": "object",
  "description": "",
  "version": "0.1.0",
  "javaType": "mil.usmc.mcsc.mc2sa.tsoa.soi.soitrack.SoiTrack",
  "properties": {
  "soiID": {
      "id": "http://mcsc.usmc.mil/mc2sa/tsoa/soi/soi-track/2.0/soi-track#soiID",
      "title": "soiID",
      "type": "string",
      "description": "a SOI identifier",
      "version": "0.1.0",
      "javaType": "mil.usmc.mcsc.mc2sa.tsoa.soi.soitrack.SoiTrack_soiID"
    },
    "soiURI": {
      "id": "http://mcsc.usmc.mil/mc2sa/tsoa/soi/soi-track/2.0/soi-track#soiURI",
      "title": "soiURI",
      "type": "string",
      "description": "a SOI resource identifier",
      "version": "0.1.0",
      "javaType": "mil.usmc.mcsc.mc2sa.tsoa.soi.soitrack.SoiTrack_soiURI"
    }
  },
  "additionalProperties": false,
  "required": [
    "Track"
  ]
};*/
var data = JSON.parse(readFile(dataFile));
//var data = { foo: 1 };

var ajv = new Ajv({allErrors: true}); // options can be passed, e.g. {allErrors: true}

var validate = ajv.compile(schema);
var valid = validate(data);
//var valid = ajv.validate(schema, data);
if (!valid) console.log(validate.errors);

function readFile(file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  console.log('##output file buffer string');
  console.log(fileBuffer.toString());
  return(fileBuffer);
}