var org_isotc211__2005_gsr_Module_Factory = function () {
  var org_isotc211__2005_gsr = {
    name: 'org_isotc211__2005_gsr',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    dependencies: ['net_opengis_gml_v_3_2_1'],
    typeInfos: [{
        localName: 'SCCRSPropertyType',
        typeName: {
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gsr',
          localPart: 'SC_CRS_PropertyType'
        },
        propertyInfos: [{
            name: 'abstractCRS',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractCRS',
            typeInfo: 'net_opengis_gml_v_3_2_1.AbstractCRSType',
            type: 'elementRef'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason',
              namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
            },
            type: 'attribute'
          }, {
            name: 'uuidref',
            attributeName: {
              localPart: 'uuidref'
            },
            type: 'attribute'
          }, {
            name: 'type',
            type: 'attribute'
          }, {
            name: 'href',
            type: 'attribute'
          }, {
            name: 'role',
            type: 'attribute'
          }, {
            name: 'arcrole',
            type: 'attribute'
          }, {
            name: 'title',
            type: 'attribute'
          }, {
            name: 'show',
            values: ['new', 'replace', 'embed', 'other', 'none'],
            type: 'attribute'
          }, {
            name: 'actuate',
            values: ['onLoad', 'onRequest', 'other', 'none'],
            type: 'attribute'
          }]
      }],
    elementInfos: []
  };
  return {
    org_isotc211__2005_gsr: org_isotc211__2005_gsr
  };
};
if (typeof define === 'function' && define.amd) {
  define([], org_isotc211__2005_gsr_Module_Factory);
}
else {
  var org_isotc211__2005_gsr_Module = org_isotc211__2005_gsr_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.org_isotc211__2005_gsr = org_isotc211__2005_gsr_Module.org_isotc211__2005_gsr;
  }
  else {
    var org_isotc211__2005_gsr = org_isotc211__2005_gsr_Module.org_isotc211__2005_gsr;
  }
}