var gov_niem_release_niem_domains_maritime__3_Module_Factory = function () {
  var gov_niem_release_niem_domains_maritime__3 = {
    name: 'gov_niem_release_niem_domains_maritime__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/maritime\/3.2\/',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['TSOA_Track.NIEM_Core'],
    typeInfos: [{
        localName: 'USMTFEnvironmentCategoryCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.USMTFEnvironmentCategoryCodeSimpleType',
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
        localName: 'USMTFEnvironmentCategoryCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['AIR', 'LND', 'SPC', 'SUB', 'SUR', 'UNK']
      }],
    elementInfos: [{
        typeInfo: 'TSOA_Track.NIEM_Core.TextType',
        elementName: 'AngleUnitText',
        substitutionHead: 'AngleUnit'
      }, {
        typeInfo: 'AnyType',
        elementName: 'AngleUnit',
        substitutionHead: {
          localPart: 'MeasureUnit',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }]
  };
  return {
    gov_niem_release_niem_domains_maritime__3: gov_niem_release_niem_domains_maritime__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_domains_maritime__3_Module_Factory);
}
else {
  var gov_niem_release_niem_domains_maritime__3_Module = gov_niem_release_niem_domains_maritime__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_domains_maritime__3 = gov_niem_release_niem_domains_maritime__3_Module.gov_niem_release_niem_domains_maritime__3;
  }
  else {
    var gov_niem_release_niem_domains_maritime__3 = gov_niem_release_niem_domains_maritime__3_Module.gov_niem_release_niem_domains_maritime__3;
  }
}