var gov_niem_release_niem_domains_cbrn__3_Module_Factory = function () {
  var gov_niem_release_niem_domains_cbrn__3 = {
    name: 'gov_niem_release_niem_domains_cbrn__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cbrn\/3.2\/',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['gov_niem_release_niem_structures__3'],
    typeInfos: [{
        localName: 'DistanceType',
        baseTypeInfo: '.NonNegativeDoubleType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'unitsText',
            required: true,
            typeInfo: 'Token',
            attributeName: {
              localPart: 'unitsText',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cbrn\/3.2\/'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Angle180Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
            type: 'value'
          }, {
            name: 'unitsText',
            required: true,
            typeInfo: 'Token',
            attributeName: {
              localPart: 'unitsText',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cbrn\/3.2\/'
            },
            type: 'attribute'
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
        localName: 'RemarksComplexObjectType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'RelativeLocationType',
        baseTypeInfo: '.RemarksComplexObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'relativeLocationAzimuthValue',
            elementName: 'RelativeLocationAzimuthValue',
            typeInfo: '.Angle180Type'
          }, {
            name: 'relativeLocationInclinationValue',
            elementName: 'RelativeLocationInclinationValue',
            typeInfo: '.Angle90Type'
          }, {
            name: 'distanceValue',
            elementName: 'DistanceValue',
            typeInfo: '.DistanceType'
          }, {
            name: 'origin',
            required: true,
            elementName: 'Origin',
            typeInfo: '.OriginType'
          }, {
            name: 'relativeLocationAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'RelativeLocationAugmentationPoint',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'Angle90Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
            type: 'value'
          }, {
            name: 'unitsText',
            required: true,
            typeInfo: 'Token',
            attributeName: {
              localPart: 'unitsText',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cbrn\/3.2\/'
            },
            type: 'attribute'
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
        localName: 'NonNegativeDoubleType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Double',
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
        localName: 'OriginType',
        baseTypeInfo: '.RemarksComplexObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'originAugmentationPoint',
            mixed: false,
            allowDom: false,
            elementName: 'OriginAugmentationPoint',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }],
    elementInfos: [{
        typeInfo: 'AnyType',
        elementName: 'OriginAugmentationPoint'
      }, {
        typeInfo: '.OriginType',
        elementName: 'Origin'
      }, {
        typeInfo: '.DistanceType',
        elementName: 'DistanceValue'
      }, {
        typeInfo: 'AnyType',
        elementName: 'RelativeLocationAugmentationPoint'
      }, {
        typeInfo: 'AnyType',
        elementName: 'StateVectorLocationChoice'
      }, {
        typeInfo: '.Angle90Type',
        elementName: 'RelativeLocationInclinationValue'
      }, {
        typeInfo: '.Angle180Type',
        elementName: 'RelativeLocationAzimuthValue'
      }, {
        typeInfo: '.RelativeLocationType',
        elementName: 'RelativeLocation',
        substitutionHead: 'StateVectorLocationChoice'
      }]
  };
  return {
    gov_niem_release_niem_domains_cbrn__3: gov_niem_release_niem_domains_cbrn__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_domains_cbrn__3_Module_Factory);
}
else {
  var gov_niem_release_niem_domains_cbrn__3_Module = gov_niem_release_niem_domains_cbrn__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_domains_cbrn__3 = gov_niem_release_niem_domains_cbrn__3_Module.gov_niem_release_niem_domains_cbrn__3;
  }
  else {
    var gov_niem_release_niem_domains_cbrn__3 = gov_niem_release_niem_domains_cbrn__3_Module.gov_niem_release_niem_domains_cbrn__3;
  }
}