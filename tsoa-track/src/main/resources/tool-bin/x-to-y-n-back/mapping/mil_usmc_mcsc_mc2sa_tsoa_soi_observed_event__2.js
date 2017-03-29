var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/',
    dependencies: ['gov_niem_release_niem_domains_militaryoperations__3', 'gov_niem_release_niem_structures__3'],
    typeInfos: [{
        localName: 'ObservedEventType',
        typeName: {
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-event\/2.0\/',
          localPart: 'ObservedEventType'
        },
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'event',
            elementName: 'Event',
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.EventType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.ObservedEventType',
        elementName: {
          localPart: 'ObservedEvent',
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/observed-event\/2.0\/'
        },
        substitutionHead: 'TrackAugmentationPoint'
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2: mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_observed_event__2;
  }
}