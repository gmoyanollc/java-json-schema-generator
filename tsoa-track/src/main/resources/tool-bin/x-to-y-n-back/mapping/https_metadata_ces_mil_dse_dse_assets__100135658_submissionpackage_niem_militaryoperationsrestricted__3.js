var https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3_Module_Factory = function () {
  var https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3 = {
    name: 'https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3',
    defaultElementNamespaceURI: 'https:\/\/metadata.ces.mil\/dse\/dse_assets\/100135658\/SubmissionPackage\/niem\/militaryOperationsRestricted\/3.2\/',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'NIEM_Core'],
    typeInfos: [{
        localName: 'WeaponSystemType',
        baseTypeInfo: 'NIEM_Core.ItemType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'weaponSystemAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'WeaponSystemAugmentationPoint',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'UnitReferenceNumberType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Integer',
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
        localName: 'ObserverType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'observerAugmentationPoint',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'ObserverAugmentationPoint',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }],
    elementInfos: [{
        typeInfo: 'AnyType',
        elementName: 'ObserverAugmentationPoint'
      }, {
        typeInfo: '.WeaponSystemType',
        elementName: 'WeaponSystem'
      }, {
        typeInfo: '.UnitReferenceNumberType',
        elementName: 'UnitReferenceNumberID'
      }, {
        typeInfo: 'AnyType',
        elementName: 'WeaponSystemAugmentationPoint'
      }, {
        typeInfo: '.ObserverType',
        elementName: 'Observer'
      }]
  };
  return {
    https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3: https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3_Module_Factory);
}
else {
  var https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3_Module = https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3 = https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3_Module.https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3;
  }
  else {
    var https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3 = https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3_Module.https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3;
  }
}