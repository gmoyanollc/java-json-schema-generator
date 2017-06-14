var gov_niem_release_niem_structures__3_Module_Factory = function () {
  var gov_niem_release_niem_structures__3 = {
    name: 'gov_niem_release_niem_structures__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    typeInfos: [{
        localName: 'AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
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
          }]
      }, {
        localName: 'ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'objectAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'ObjectAugmentationPoint',
            typeInfo: 'AnyType'
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
        localName: 'AssociationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'associationAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'AssociationAugmentationPoint',
            typeInfo: 'AnyType'
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
        localName: 'MetadataType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        typeInfo: 'AnyType',
        elementName: 'ObjectAugmentationPoint'
      }, {
        typeInfo: 'AnyType',
        elementName: 'AssociationAugmentationPoint'
      }]
  };
  return {
    gov_niem_release_niem_structures__3: gov_niem_release_niem_structures__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_structures__3_Module_Factory);
}
else {
  var gov_niem_release_niem_structures__3_Module = gov_niem_release_niem_structures__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_structures__3 = gov_niem_release_niem_structures__3_Module.gov_niem_release_niem_structures__3;
  }
  else {
    var gov_niem_release_niem_structures__3 = gov_niem_release_niem_structures__3_Module.gov_niem_release_niem_structures__3;
  }
}