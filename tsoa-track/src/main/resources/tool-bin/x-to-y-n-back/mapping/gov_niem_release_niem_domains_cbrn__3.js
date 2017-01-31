var gov_niem_release_niem_domains_cbrn__3_Module_Factory = function () {
  var gov_niem_release_niem_domains_cbrn__3 = {
    name: 'gov_niem_release_niem_domains_cbrn__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cbrn\/3.2\/',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['NiemStructures_TrackInfo'],
    typeInfos: [{
        localName: 'OriginType',
        baseTypeInfo: '.RemarksComplexObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
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
        localName: 'RemarksComplexObjectType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
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
            mixed: false,
            allowDom: false,
            elementName: 'RelativeLocationAugmentationPoint',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }],
    elementInfos: [{
        typeInfo: '.OriginType',
        elementName: 'Origin'
      }, {
        typeInfo: '.DistanceType',
        elementName: 'DistanceValue'
      }, {
        typeInfo: 'AnyType',
        elementName: 'RelativeLocationAugmentationPoint'
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