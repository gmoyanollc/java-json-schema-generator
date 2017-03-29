var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-platform-system\/2.0\/',
    dependencies: ['TSOA_Track.NIEM_Core', 'gov_niem_release_niem_domains_militaryoperations__3', 'gov_niem_release_niem_structures__3'],
    typeInfos: [{
        localName: 'ObservedPlatformSystemType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'platformSystem',
            minOccurs: 0,
            collection: true,
            elementName: 'PlatformSystem',
            typeInfo: '.PlatformSystemType'
          }]
      }, {
        localName: 'PlatformSystemType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'systemIdentification',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'SystemIdentification',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/intelligence\/3.2\/'
            },
            typeInfo: 'TSOA_Track.NIEM_Core.SystemIdentificationType'
          }, {
            name: 'platformStandardIdentityCode',
            required: true,
            elementName: 'PlatformStandardIdentityCode',
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.StandardIdentityCodeType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.ObservedPlatformSystemType',
        elementName: 'ObservedPlatformSystem',
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.StandardIdentityCodeType',
        elementName: 'PlatformStandardIdentityCode'
      }, {
        typeInfo: '.PlatformSystemType',
        elementName: 'PlatformSystem'
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2: mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_platform_system__2;
  }
}