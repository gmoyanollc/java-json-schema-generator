var TSOA_Track_Module_Factory = function () {
  var TSOA_Track = {
    name: 'TSOA_Track',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/tsoa-track\/2.0\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'gov_niem_release_niem_domains_militaryoperations__3', 'NIEM_Core'],
    typeInfos: [{
        localName: 'TrackOriginationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'originatorTrackIdentification',
            required: true,
            elementName: 'OriginatorTrackIdentification',
            typeInfo: 'NIEM_Core.IdentificationType'
          }, {
            name: 'systemIdentification',
            required: true,
            elementName: {
              localPart: 'SystemIdentification',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/intelligence\/3.2\/'
            },
            typeInfo: 'NIEM_Core.SystemIdentificationType'
          }, {
            name: 'trackOriginationPointOfContact',
            required: true,
            elementName: 'TrackOriginationPointOfContact',
            typeInfo: '.TrackOriginationPointOfContactType'
          }]
      }, {
        localName: 'TsoaTrackType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'identification',
            required: true,
            elementName: {
              localPart: 'Identification',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
            },
            typeInfo: 'NIEM_Core.IdentificationType'
          }, {
            name: 'systemIdentification',
            required: true,
            elementName: {
              localPart: 'SystemIdentification',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/intelligence\/3.2\/'
            },
            typeInfo: 'NIEM_Core.SystemIdentificationType'
          }, {
            name: 'track',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Track',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.TrackType'
          }]
      }, {
        localName: 'ContactInformationAugmentationType',
        baseTypeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.ContactInformationAugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'contactDSNTelephoneNumber',
            required: true,
            elementName: {
              localPart: 'ContactDSNTelephoneNumber',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'NIEM_Core.FullTelephoneNumberType'
          }]
      }, {
        localName: 'TrackOriginationPointOfContactType',
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
      }],
    elementInfos: [{
        typeInfo: '.TsoaTrackType',
        elementName: 'TsoaTrack'
      }, {
        typeInfo: '.ContactInformationAugmentationType',
        elementName: 'ContactInformationAugmentation',
        substitutionHead: {
          localPart: 'ContactInformationAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }, {
        typeInfo: 'NIEM_Core.IdentificationType',
        elementName: 'OriginatorTrackIdentification'
      }, {
        typeInfo: 'NIEM_Core.TextType',
        elementName: 'ShortName',
        substitutionHead: {
          localPart: 'IdentificationAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }, {
        typeInfo: '.TrackOriginationType',
        elementName: 'TrackOrigination',
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: '.TrackOriginationPointOfContactType',
        elementName: 'TrackOriginationPointOfContact'
      }]
  };
  return {
    TSOA_Track: TSOA_Track
  };
};
if (typeof define === 'function' && define.amd) {
  define([], TSOA_Track_Module_Factory);
}
else {
  var TSOA_Track_Module = TSOA_Track_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.TSOA_Track = TSOA_Track_Module.TSOA_Track;
  }
  else {
    var TSOA_Track = TSOA_Track_Module.TSOA_Track;
  }
}