var mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/feature-observer\/2.0\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'NIEM_Core', 'https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3'],
    typeInfos: [{
        localName: 'ObserverPointOfContactType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'contactInformation',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'ContactInformation',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
            },
            typeInfo: 'NIEM_Core.ContactInformationType'
          }]
      }, {
        localName: 'ObserverIdentificationType',
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
            typeInfo: 'NIEM_Core.SystemIdentificationType'
          }]
      }, {
        localName: 'FeatureObserverType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'observer',
            required: true,
            elementName: {
              localPart: 'Observer',
              namespaceURI: 'https:\/\/metadata.ces.mil\/dse\/dse_assets\/100135658\/SubmissionPackage\/niem\/militaryOperationsRestricted\/3.2\/'
            },
            typeInfo: 'https_metadata_ces_mil_dse_dse_assets__100135658_submissionpackage_niem_militaryoperationsrestricted__3.ObserverType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.ObserverIdentificationType',
        elementName: 'ObserverIdentification',
        substitutionHead: {
          localPart: 'ObserverAugmentationPoint',
          namespaceURI: 'https:\/\/metadata.ces.mil\/dse\/dse_assets\/100135658\/SubmissionPackage\/niem\/militaryOperationsRestricted\/3.2\/'
        }
      }, {
        typeInfo: '.ObserverPointOfContactType',
        elementName: 'ObserverPointOfContact',
        substitutionHead: {
          localPart: 'ObserverAugmentationPoint',
          namespaceURI: 'https:\/\/metadata.ces.mil\/dse\/dse_assets\/100135658\/SubmissionPackage\/niem\/militaryOperationsRestricted\/3.2\/'
        }
      }, {
        typeInfo: '.FeatureObserverType',
        elementName: 'FeatureObserver',
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2: mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observer__2;
  }
}