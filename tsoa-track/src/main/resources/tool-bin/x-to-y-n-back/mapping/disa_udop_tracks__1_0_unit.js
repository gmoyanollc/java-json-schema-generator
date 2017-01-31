var disa_udop_tracks__1_0_unit_Module_Factory = function () {
  var disa_udop_tracks__1_0_unit = {
    name: 'disa_udop_tracks__1_0_unit',
    defaultElementNamespaceURI: 'urn:disa:udop.tracks:1.0:unit',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['NiemStructures_TrackInfo', 'NiemProxyXd_TrackInfo', 'NiemMilitaryoperations_TrackInfo', 'disa_udop_tracks__1_0_lib'],
    typeInfos: [{
        localName: 'UnitAugmentationType',
        baseTypeInfo: 'NiemStructures_TrackInfo.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'track',
            required: true,
            elementName: {
              localPart: 'Track',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'NiemMilitaryoperations_TrackInfo.TrackType'
          }, {
            name: 'unitForceStructure',
            elementName: 'UnitForceStructure',
            typeInfo: 'disa_udop_tracks__1_0_lib.ForceStructureDetailsType'
          }, {
            name: 'unitReferenceNumber',
            elementName: 'UnitReferenceNumber',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityUniqueReferenceCodeDetailsType'
          }, {
            name: 'unitEmbarkedText',
            elementName: 'UnitEmbarkedText',
            typeInfo: '.UnitEmbarkedType'
          }, {
            name: 'unitOrganizationType',
            elementName: 'UnitOrganizationType',
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }, {
            name: 'unitPlatformCategoryText',
            elementName: 'UnitPlatformCategoryText',
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }, {
            name: 'unitStrengthText',
            elementName: 'UnitStrengthText',
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }, {
            name: 'unitMIDBID',
            elementName: 'UnitMIDBID',
            typeInfo: 'disa_udop_tracks__1_0_lib.MIDBUnitIdType'
          }]
      }, {
        localName: 'UnitEmbarkedType',
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
      }],
    elementInfos: [{
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: 'UnitStrengthText'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityUniqueReferenceCodeDetailsType',
        elementName: 'UnitReferenceNumber'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.MIDBUnitIdType',
        elementName: 'UnitMIDBID'
      }, {
        typeInfo: '.UnitAugmentationType',
        elementName: 'UnitAugmentation',
        substitutionHead: {
          localPart: 'UnitAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: 'UnitPlatformCategoryText'
      }, {
        typeInfo: '.UnitEmbarkedType',
        elementName: 'UnitEmbarkedText'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: 'UnitOrganizationType'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.ForceStructureDetailsType',
        elementName: 'UnitForceStructure'
      }]
  };
  return {
    disa_udop_tracks__1_0_unit: disa_udop_tracks__1_0_unit
  };
};
if (typeof define === 'function' && define.amd) {
  define([], disa_udop_tracks__1_0_unit_Module_Factory);
}
else {
  var disa_udop_tracks__1_0_unit_Module = disa_udop_tracks__1_0_unit_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.disa_udop_tracks__1_0_unit = disa_udop_tracks__1_0_unit_Module.disa_udop_tracks__1_0_unit;
  }
  else {
    var disa_udop_tracks__1_0_unit = disa_udop_tracks__1_0_unit_Module.disa_udop_tracks__1_0_unit;
  }
}