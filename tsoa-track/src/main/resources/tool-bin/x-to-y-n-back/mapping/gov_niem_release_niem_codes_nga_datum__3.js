var gov_niem_release_niem_codes_nga_datum__3_Module_Factory = function () {
  var gov_niem_release_niem_codes_nga_datum__3 = {
    name: 'gov_niem_release_niem_codes_nga_datum__3',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    typeInfos: [{
        localName: 'VerticalDatumCodeType',
        typeName: {
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/codes\/nga_datum\/3.0\/',
          localPart: 'VerticalDatumCodeType'
        },
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.VerticalDatumCodeSimpleType',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }, {
            name: 'metadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }, {
            name: 'relationshipMetadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }]
      }, {
        localName: 'DirectionDatumCodeType',
        typeName: {
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/codes\/nga_datum\/3.0\/',
          localPart: 'DirectionDatumCodeType'
        },
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.DirectionDatumCodeSimpleType',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }, {
            name: 'metadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }, {
            name: 'relationshipMetadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'VerticalDatumCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['higherHighWaterLargeTide', 'highestHighWater', 'indianSpringHighWater', 'meanLowerLowWaterSprings', 'lowWaterSprings', 'wgs84Egm08Geoid', 'indianSpringLowWater', 'lowerLowWater', 'approxMeanLowWater', 'ngvd29', 'meanLowWater', 'meanHighWaterNeaps', 'meanHigherHighWaterSprings', 'igld1985', 'lowestLowWater', 'neapTide', 'navd88', 'highWaterSprings', 'wgs84Ellipsoid', 'meanHigherHighWater', 'nearlyHighestHighWater', 'higherHighWater', 'meanTideLevel', 'approxMeanLowerLowWater', 'meanLowerLowWater', 'highWater', 'highestAstronomicalTide', 'meanHighWater', 'lowestLowWaterSprings', 'meanSeaLevel', 'lowerLowWaterLargeTide', 'meanWaterLevel', 'lowestAstronomicalTide', 'meanLowWaterSprings', 'approxMeanLowWaterSprings', 'approxMeanSeaLevel', 'wgs84Egm96Geoid', 'springTide', 'approxLowestAstronomTide', 'equinoctialSpringLowWater', 'groundLevel', 'lowWater', 'meanHighWaterSprings', 'meanLowWaterNeaps', 'nearlyLowestLowWater', 'waterLevel']
      }, {
        type: 'enumInfo',
        localName: 'DirectionDatumCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['geodetic', 'Relative', 'militaryGrid', 'Magnetic']
      }],
    elementInfos: []
  };
  return {
    gov_niem_release_niem_codes_nga_datum__3: gov_niem_release_niem_codes_nga_datum__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_codes_nga_datum__3_Module_Factory);
}
else {
  var gov_niem_release_niem_codes_nga_datum__3_Module = gov_niem_release_niem_codes_nga_datum__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_codes_nga_datum__3 = gov_niem_release_niem_codes_nga_datum__3_Module.gov_niem_release_niem_codes_nga_datum__3;
  }
  else {
    var gov_niem_release_niem_codes_nga_datum__3 = gov_niem_release_niem_codes_nga_datum__3_Module.gov_niem_release_niem_codes_nga_datum__3;
  }
}