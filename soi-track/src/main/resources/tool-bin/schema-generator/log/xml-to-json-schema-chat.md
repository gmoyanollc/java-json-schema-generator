# to-do fix: missing schema for abstract substitution head types
Example shows "LocationCountry" without schema definition: 
~~~~
  "LocationCountry": {
    "LocationCountryName": {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "id": "http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName"
~~~~
should be represented something like this:
~~~~
  "LocationCountry": {
    "$schema": "http://json-schema.org/draft-04/schema#",
      "id": "http://release.niem.gov/niem/niem-core/3.0/#LocationCountry"
      "type": "object",
      "properties": {
        "LocationCountryName": {
          "$schema": "http://json-schema.org/draft-04/schema#",
          "id": "http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName",

~~~~

# bug: array type representation
Arrays formatted incorrectly, representing "items" with enclosing brackets "[]": 

~~~~
  {
    "id": "http://release.niem.gov/niem/niem-core/3.0/#IdentificationID",
    "title": "IdentificationID",
    "type": "array",
    "description": "An identifier.",
    "version": "0.4.5",
    "items": [
      {
        "type": "string",
        "maxLength": 128
      }
    ],
    "maxItems": 16,
    "additionalItems": false
  }
~~~~

Example fixed in 0.4.5 :

~~~~
{
  "id": "http://release.niem.gov/niem/niem-core/3.0/#IdentificationID",
  "title": "IdentificationID",
  "type": "array",
  "description": "An identifier.",
  "version": "0.4.5",
  "items": 
    {
      "type": "string",
      "maxLength": 128
    },
  "maxItems": 16,
  "additionalItems": false
}
~~~~