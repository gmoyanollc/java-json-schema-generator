var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_observed_person__2',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-person\/2.0\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'NIEM_Core'],
    typeInfos: [{
        localName: 'ObservedPersonType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'person',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'Person',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
            },
            typeInfo: 'NIEM_Core.PersonType'
          }]
      }, {
        localName: 'PersonRepresentationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'personIdentification',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'PersonIdentification',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/screening\/3.2\/'
            },
            typeInfo: 'NIEM_Core.IdentificationType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.PersonRepresentationType',
        elementName: 'PersonRepresentation',
        substitutionHead: {
          localPart: 'PersonAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }, {
        typeInfo: '.ObservedPersonType',
        elementName: 'ObservedPerson',
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