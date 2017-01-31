var org_isotc211__2005_gts_Module_Factory = function () {
  var org_isotc211__2005_gts = {
    name: 'org_isotc211__2005_gts',
    defaultElementNamespaceURI: 'http:\/\/www.isotc211.org\/2005\/gts',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    dependencies: ['net_opengis_gml_v_3_2_1'],
    typeInfos: [{
        localName: 'TMPrimitivePropertyType',
        typeName: 'TM_Primitive_PropertyType',
        propertyInfos: [{
            name: 'abstractTimePrimitive',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'AbstractTimePrimitive',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'net_opengis_gml_v_3_2_1.AbstractTimePrimitiveType',
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
      }, {
        localName: 'TMPeriodDurationPropertyType',
        typeName: 'TM_PeriodDuration_PropertyType',
        propertyInfos: [{
            name: 'tmPeriodDuration',
            required: true,
            elementName: 'TM_PeriodDuration',
            typeInfo: 'Duration'
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
          }]
      }],
    elementInfos: [{
        typeInfo: 'Duration',
        elementName: 'TM_PeriodDuration'
      }]
  };
  return {
    org_isotc211__2005_gts: org_isotc211__2005_gts
  };
};
if (typeof define === 'function' && define.amd) {
  define([], org_isotc211__2005_gts_Module_Factory);
}
else {
  var org_isotc211__2005_gts_Module = org_isotc211__2005_gts_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.org_isotc211__2005_gts = org_isotc211__2005_gts_Module.org_isotc211__2005_gts;
  }
  else {
    var org_isotc211__2005_gts = org_isotc211__2005_gts_Module.org_isotc211__2005_gts;
  }
}