var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'NIEM_Core'],
    typeInfos: [{
        localName: 'ObservedPersonType',
        typeName: {
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-person\/2.0\/',
          localPart: 'ObservedPersonType'
        },
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'person',
            minOccurs: 0,
            collection: true,
            elementName: 'Person',
            typeInfo: 'NIEM_Core.PersonType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.ObservedPersonType',
        elementName: {
          localPart: 'ObservedPerson',
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-person\/2.0\/'
        },
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2: mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2;
  }
}