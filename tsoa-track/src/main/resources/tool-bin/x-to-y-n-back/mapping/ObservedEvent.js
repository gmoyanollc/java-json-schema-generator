var ObservedEvent_Module_Factory = function () {
  var ObservedEvent = {
    name: 'ObservedEvent',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'gov_niem_release_niem_domains_militaryoperations__3'],
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
            minOccurs: 0,
            collection: true,
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
    ObservedEvent: ObservedEvent
  };
};
if (typeof define === 'function' && define.amd) {
  define([], ObservedEvent_Module_Factory);
}
else {
  var ObservedEvent_Module = ObservedEvent_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.ObservedEvent = ObservedEvent_Module.ObservedEvent;
  }
  else {
    var ObservedEvent = ObservedEvent_Module.ObservedEvent;
  }
}