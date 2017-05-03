var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-weapon\/2.0\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3'],
    typeInfos: [{
        localName: 'ObservedWeaponSystemType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'weaponSystem',
            elementName: {
              localPart: 'WeaponSystem',
              namespaceURI: 'https:\/\/metadata.ces.mil\/dse\/dse_assets\/100135658\/SubmissionPackage\/niem\/militaryOperationsRestricted\/3.2\/'
            },
            typeInfo: 'https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3.WeaponSystemType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.ObservedWeaponSystemType',
        elementName: 'ObservedWeaponSystem',
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2: mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_weapon__2;
  }
}