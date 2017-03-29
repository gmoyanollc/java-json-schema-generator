var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-facility\/2.0\/',
    dependencies: ['TSOA_Track.NIEM_Core', 'gov_niem_release_niem_domains_militaryoperations__3', 'gov_niem_release_niem_structures__3'],
    typeInfos: [{
        localName: 'FacilityAugmentationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'facilityAllegianceCountryAbstract',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'FacilityAllegianceCountryAbstract',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'ObservedFacilityType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'facility',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'Facility',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
            },
            typeInfo: 'TSOA_Track.NIEM_Core.FacilityType'
          }]
      }],
    elementInfos: [{
        typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.StandardIdentityCodeType',
        elementName: 'FacilityStandardIdentityCode',
        substitutionHead: {
          localPart: 'FacilityAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }, {
        typeInfo: '.FacilityAugmentationType',
        elementName: 'FacilityAugmentationAbstract',
        substitutionHead: {
          localPart: 'FacilityAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }, {
        typeInfo: '.ObservedFacilityType',
        elementName: 'ObservedFacility',
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2: mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_facility__2;
  }
}