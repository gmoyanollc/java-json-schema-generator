var TSOA_Track_Module_Factory = function () {
  var TSOA_Track = {
    name: 'TSOA_Track',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/tsoa-track\/2.0\/',
    defaultAttributeNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/tsoa-track\/2.0\/',
    dependencies: ['NIEM_Core', 'gov_niem_release_niem_structures__3', 'gov_niem_release_niem_domains_militaryoperations__3'],
    typeInfos: [{
        localName: 'TsoaTrackType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'track',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Track',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.TrackType'
          }, {
            name: 'tsoaID',
            typeInfo: 'Token',
            type: 'attribute'
          }, {
            name: 'tsoaURI',
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        typeInfo: 'NIEM_Core.TextType',
        elementName: 'ShortName',
        substitutionHead: {
          localPart: 'IdentificationAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }, {
        typeInfo: 'NIEM_Core.IdentificationType',
        elementName: 'TrackIdentification'
      }, {
        typeInfo: '.TsoaTrackType',
        elementName: 'TsoaTrack'
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