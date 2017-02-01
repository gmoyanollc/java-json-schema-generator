var org_isotc211__2005_gss_Module_Factory = function () {
  var org_isotc211__2005_gss = {
    name: 'org_isotc211__2005_gss',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    dependencies: ['net_opengis_gml_v_3_2_1'],
    typeInfos: [{
        localName: 'GMPointPropertyType',
        typeName: {
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gss',
          localPart: 'GM_Point_PropertyType'
        },
        propertyInfos: [{
            name: 'point',
            required: true,
            elementName: 'Point',
            typeInfo: 'net_opengis_gml_v_3_2_1.PointType'
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
      }, {
        localName: 'GMObjectPropertyType',
        typeName: {
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gss',
          localPart: 'GM_Object_PropertyType'
        },
        propertyInfos: [{
            name: 'abstractGeometry',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractGeometry',
            typeInfo: 'net_opengis_gml_v_3_2_1.AbstractGeometryType',
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
    org_isotc211__2005_gss: org_isotc211__2005_gss
  };
};
if (typeof define === 'function' && define.amd) {
  define([], org_isotc211__2005_gss_Module_Factory);
}
else {
  var org_isotc211__2005_gss_Module = org_isotc211__2005_gss_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.org_isotc211__2005_gss = org_isotc211__2005_gss_Module.org_isotc211__2005_gss;
  }
  else {
    var org_isotc211__2005_gss = org_isotc211__2005_gss_Module.org_isotc211__2005_gss;
  }
}