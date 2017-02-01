var mil_usmc_mcsc_mc2sa_tsoa_soi_track__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_track__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_track__2',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/',
    dependencies: ['gov_niem_release_niem_niem_core__3', 'gov_niem_release_niem_domains_militaryoperations__3', 'gov_niem_release_niem_structures__3'],
    typeInfos: [{
        localName: 'TrackIdentificationAugmentationType',
        typeName: {
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/',
          localPart: 'TrackIdentificationAugmentationType'
        },
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'trackShortName',
            required: true,
            elementName: {
              localPart: 'TrackShortName',
              namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/'
            },
            typeInfo: 'gov_niem_release_niem_niem_core__3.TextType'
          }]
      }, {
        localName: 'TrackAugmentationType',
        typeName: {
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/',
          localPart: 'TrackAugmentationType'
        },
        baseTypeInfo: 'gov_niem_release_niem_structures__3.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'event',
            elementName: 'Event',
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.EventType'
          }, {
            name: 'unit',
            elementName: 'Unit',
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.UnitType'
          }, {
            name: 'observation',
            required: true,
            collection: true,
            elementName: 'Observation',
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.ObservationType'
          }]
      }, {
        localName: 'MILSTD2525Type',
        typeName: {
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/',
          localPart: 'MILSTD2525Type'
        },
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'milstd2525BSIDCCode',
            elementName: 'MILSTD2525-B-SIDC-Code',
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.MILSTD2525BSIDCType'
          }, {
            name: 'milstd2525CSIDCCode',
            elementName: 'MILSTD2525-C-SIDC-Code',
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.MILSTD2525CSIDCType'
          }, {
            name: 'milstd2525DSIDC',
            elementName: 'MILSTD2525-D-SIDC',
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.MILSTD2525DSIDCType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.TrackAugmentationType',
        elementName: {
          localPart: 'TrackAugmentation',
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/'
        },
        substitutionHead: 'TrackAugmentationPoint'
      }, {
        typeInfo: 'gov_niem_release_niem_niem_core__3.TextType',
        elementName: {
          localPart: 'TrackShortName',
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/'
        }
      }, {
        typeInfo: '.MILSTD2525Type',
        elementName: {
          localPart: 'MILSTD2525',
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/'
        },
        substitutionHead: 'ObservedObjectSymbolAbstract'
      }, {
        typeInfo: 'gov_niem_release_niem_niem_core__3.IdentificationType',
        elementName: {
          localPart: 'TrackIdentification',
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/'
        }
      }, {
        typeInfo: '.TrackIdentificationAugmentationType',
        elementName: {
          localPart: 'TrackIdentificationAugmentation',
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/track\/2.0\/'
        },
        substitutionHead: {
          localPart: 'IdentificationAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_track__2: mil_usmc_mcsc_mc2sa_tsoa_soi_track__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_track__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_track__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_track__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_track__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_track__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_track__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_track__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_track__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_track__2;
  }
}