var disa_udop_tracks__1_0_genlib_Module_Factory = function () {
  var disa_udop_tracks__1_0_genlib = {
    name: 'disa_udop_tracks__1_0_genlib',
    defaultElementNamespaceURI: 'urn:disa:udop.tracks:1.0:genLib',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['NiemCore_TrackInfo', 'gov_niem_release_niem_codes_unece_rec20__3'],
    typeInfos: [{
        localName: 'DistanceRangeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
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
        localName: 'Short0To99Type',
        typeName: 'Short0to99Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Short',
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
        localName: 'Degrees180Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
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
        localName: 'BearingDegreesType',
        baseTypeInfo: 'NiemCore_TrackInfo.Degree360Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'isTrueNorthIndicator',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isTrueNorthIndicator',
              namespaceURI: 'urn:disa:udop.tracks:1.0:genLib'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EnvironmentCategoryCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.EnvironmentCategoryCodeSimpleType',
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
        localName: 'Octal4DigitType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
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
        localName: 'Octal2DigitType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
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
        localName: 'EnvironmentCategoryCodeSimpleType',
        values: ['AIR', 'SUB', 'SUR', 'LND', 'SPC', 'UNK']
      }],
    elementInfos: [{
        typeInfo: 'gov_niem_release_niem_codes_unece_rec20__3.LengthCodeType',
        elementName: 'DistanceMeasureUnitCode',
        substitutionHead: {
          localPart: 'RelativeLocationAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cbrn\/3.2\/'
        }
      }, {
        typeInfo: '.EnvironmentCategoryCodeType',
        elementName: 'EnvironmentCategoryCode'
      }]
  };
  return {
    disa_udop_tracks__1_0_genlib: disa_udop_tracks__1_0_genlib
  };
};
if (typeof define === 'function' && define.amd) {
  define([], disa_udop_tracks__1_0_genlib_Module_Factory);
}
else {
  var disa_udop_tracks__1_0_genlib_Module = disa_udop_tracks__1_0_genlib_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.disa_udop_tracks__1_0_genlib = disa_udop_tracks__1_0_genlib_Module.disa_udop_tracks__1_0_genlib;
  }
  else {
    var disa_udop_tracks__1_0_genlib = disa_udop_tracks__1_0_genlib_Module.disa_udop_tracks__1_0_genlib;
  }
}