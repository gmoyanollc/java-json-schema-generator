var NiemStructures_TrackInfo_Module_Factory = function () {
  var NiemStructures_TrackInfo = {
    name: 'NiemStructures_TrackInfo',
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
    NiemStructures_TrackInfo: NiemStructures_TrackInfo
  };
};
if (typeof define === 'function' && define.amd) {
  define([], NiemStructures_TrackInfo_Module_Factory);
}
else {
  var NiemStructures_TrackInfo_Module = NiemStructures_TrackInfo_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.NiemStructures_TrackInfo = NiemStructures_TrackInfo_Module.NiemStructures_TrackInfo;
  }
  else {
    var NiemStructures_TrackInfo = NiemStructures_TrackInfo_Module.NiemStructures_TrackInfo;
  }
}