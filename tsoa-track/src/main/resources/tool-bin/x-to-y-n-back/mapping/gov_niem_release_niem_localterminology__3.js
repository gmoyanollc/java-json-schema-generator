var gov_niem_release_niem_localterminology__3_Module_Factory = function () {
  var gov_niem_release_niem_localterminology__3 = {
    name: 'gov_niem_release_niem_localterminology__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/localTerminology\/3.0\/',
    typeInfos: [{
        localName: 'LocalTerm',
        typeName: null,
        propertyInfos: [{
            name: 'sourceText',
            minOccurs: 0,
            collection: true,
            elementName: 'SourceText'
          }, {
            name: 'term',
            required: true,
            attributeName: {
              localPart: 'term'
            },
            type: 'attribute'
          }, {
            name: 'literal',
            attributeName: {
              localPart: 'literal'
            },
            type: 'attribute'
          }, {
            name: 'definition',
            attributeName: {
              localPart: 'definition'
            },
            type: 'attribute'
          }, {
            name: 'sourceURIs',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'sourceURIs'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        typeInfo: '.LocalTerm',
        elementName: 'LocalTerm'
      }]
  };
  return {
    gov_niem_release_niem_localterminology__3: gov_niem_release_niem_localterminology__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_localterminology__3_Module_Factory);
}
else {
  var gov_niem_release_niem_localterminology__3_Module = gov_niem_release_niem_localterminology__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_localterminology__3 = gov_niem_release_niem_localterminology__3_Module.gov_niem_release_niem_localterminology__3;
  }
  else {
    var gov_niem_release_niem_localterminology__3 = gov_niem_release_niem_localterminology__3_Module.gov_niem_release_niem_localterminology__3;
  }
}