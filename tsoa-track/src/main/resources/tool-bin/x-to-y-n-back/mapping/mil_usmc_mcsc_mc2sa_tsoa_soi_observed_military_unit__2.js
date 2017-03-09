var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-military-unit\/2.0\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3', 'gov_niem_release_niem_domains_militaryoperations__3'],
    typeInfos: [{
        localName: 'ObservedMilitaryUnitType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'unit',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'Unit',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.UnitType'
          }]
      }, {
        localName: 'UnitReferenceNumberType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'unitReferenceNumberID',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'UnitReferenceNumberID',
              namespaceURI: 'https:\/\/metadata.ces.mil\/dse\/dse_assets\/100135658\/SubmissionPackage\/niem\/militaryOperationsRestricted\/3.2\/'
            },
            typeInfo: 'https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3.UnitReferenceNumberType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.UnitReferenceNumberType',
        elementName: 'UnitReferenceNumber',
        substitutionHead: {
          localPart: 'UnitAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: '.ObservedMilitaryUnitType',
        elementName: 'ObservedMilitaryUnit',
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2: mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_military_unit__2;
  }
}