var fs = require('fs');
var Ajv = require('ajv');

var resultSummary = [];
//var schemaFile = '../../iep-schema/SoiTrack-dereferenced.json';
//045 var schemaFile = '../../iep-schema/TsoaTrack-dereferenced.json';
var schemaFile = '../soi-java-sdk-schema-binder/source/dereferenced-TsoaTrack.json';
const dataFileSet = [
  "../../iep-sample/observed-military-unit.json",
  "../../iep-sample/observed-facility.json",
  "../../iep-sample/observed-platform-system.json",
  "../../iep-sample/observed-event.json",
  "../../iep-sample/observed-person.json"];
// const dataFileSet = [
//   "../../iep-sample/track-unit.json",
//   "../../iep-sample/track-facility.json",
//   "../../iep-sample/track-platform.json",
//   "../../iep-sample/track-event.json"];
/* 
,
  "../../iep-sample/track-facility.json",
  "../../iep-sample/track-platform.json",
  "../../iep-sample/track-event.json"
*/ 
var schema = JSON.parse(readFile(schemaFile));
var ajv = new Ajv({ allErrors: true }); // options can be passed, e.g. {allErrors: true}
var validate = ajv.compile(schema);

dataFileSet.forEach(function (dataFile) {
  console.log("** start data file: " + dataFile)
  var data = JSON.parse(readFile(dataFile));
  //var valid = validate(dataFile);
  var valid = ajv.validate(schema, data);
  if (!valid) {
    console.log(validate.errors);
    resultSummary.push({ "result": "FAIL", "datafile": dataFile })
  } else resultSummary.push({ "result": "PASS", "datafile": dataFile });
  console.log("** end data file: " + dataFile)
});

function readFile(file) {
  console.log('##read file: ' + file);
  var fileBuffer = fs.readFileSync(file);
  console.log('##output file buffer string');
  console.log(fileBuffer.toString());
  return (fileBuffer);
}

resultSummary.forEach(function (resultSummaryItem) {
  console.log(resultSummaryItem);
})
