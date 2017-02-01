var TSOA_Track_Module_Factory = function () {
  var TSOA_Track = {
    name: 'TSOA_Track',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/',
    defaultAttributeNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/tsoa-track\/2.0\/',
    dependencies: ['gov_niem_release_niem_domains_militaryoperations__3', 'gov_niem_release_niem_structures__3'],
    typeInfos: [{
        localName: 'TsoaTrackType',
        typeName: {
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/tsoa-track\/2.0\/',
          localPart: 'TsoaTrackType'
        },
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'track',
            required: true,
            elementName: 'Track',
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
        typeInfo: '.TsoaTrackType',
        elementName: {
          localPart: 'TsoaTrack',
          namespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/tsoa-track\/2.0\/'
        }
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