var TSOA_Track.NIEM_Core.OGC_GML_Module_Factory = function () {
  var TSOA_Track.NIEM_Core.OGC_GML = {
    name: 'TSOA_Track.NIEM_Core.OGC_GML',
    defaultElementNamespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    typeInfos: [{
        localName: 'PointType',
        baseTypeInfo: '.AbstractGeometricPrimitiveType',
        propertyInfos: [{
            name: 'pos',
            required: true,
            typeInfo: '.DirectPositionType'
          }, {
            name: 'coordinates',
            required: true,
            typeInfo: '.CoordinatesType'
          }]
      }, {
        localName: 'GenericMetaDataType',
        baseTypeInfo: '.AbstractMetaDataType'
      }, {
        localName: 'CodeWithAuthorityType',
        baseTypeInfo: '.CodeType'
      }, {
        localName: 'AbstractGMLType',
        propertyInfos: [{
            name: 'metaDataProperty',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MetaDataPropertyType'
          }, {
            name: 'description',
            typeInfo: '.StringOrRefType'
          }, {
            name: 'descriptionReference',
            typeInfo: '.ReferenceType'
          }, {
            name: 'identifier',
            typeInfo: '.CodeWithAuthorityType'
          }, {
            name: 'name',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CodeType'
          }, {
            name: 'id',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MetaDataPropertyType',
        propertyInfos: [{
            name: 'abstractMetaData',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractMetaData',
            typeInfo: '.AbstractMetaDataType',
            type: 'elementRef'
          }, {
            name: 'about',
            attributeName: {
              localPart: 'about'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
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
        localName: 'AbstractGeometricPrimitiveType',
        baseTypeInfo: '.AbstractGeometryType'
      }, {
        localName: 'AbstractMetaDataType',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            type: 'elementRefs'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DirectPositionType',
        propertyInfos: [{
            name: 'value',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'Double'
            },
            type: 'value'
          }, {
            name: 'srsName',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'NCName'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'NCName'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'StringOrRefType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
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
        localName: 'AbstractGeometryType',
        baseTypeInfo: '.AbstractGMLType',
        propertyInfos: [{
            name: 'srsName',
            attributeName: {
              localPart: 'srsName'
            },
            type: 'attribute'
          }, {
            name: 'srsDimension',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'srsDimension'
            },
            type: 'attribute'
          }, {
            name: 'axisLabels',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'NCName'
            },
            attributeName: {
              localPart: 'axisLabels'
            },
            type: 'attribute'
          }, {
            name: 'uomLabels',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'NCName'
            },
            attributeName: {
              localPart: 'uomLabels'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CoordinatesType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'decimal',
            attributeName: {
              localPart: 'decimal'
            },
            type: 'attribute'
          }, {
            name: 'cs',
            attributeName: {
              localPart: 'cs'
            },
            type: 'attribute'
          }, {
            name: 'ts',
            attributeName: {
              localPart: 'ts'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ReferenceType',
        propertyInfos: [{
            name: 'owns',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'owns'
            },
            type: 'attribute'
          }, {
            name: 'nilReason',
            typeInfo: {
              type: 'list'
            },
            attributeName: {
              localPart: 'nilReason'
            },
            type: 'attribute'
          }, {
            name: 'remoteSchema',
            attributeName: {
              localPart: 'remoteSchema',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
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
        localName: 'CodeType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'codeSpace',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }],
    elementInfos: [{
        typeInfo: '.GenericMetaDataType',
        elementName: 'GenericMetaData',
        substitutionHead: 'AbstractMetaData'
      }]
  };
  return {
    TSOA_Track.NIEM_Core.OGC_GML: TSOA_Track.NIEM_Core.OGC_GML
  };
};
if (typeof define === 'function' && define.amd) {
  define([], TSOA_Track.NIEM_Core.OGC_GML_Module_Factory);
}
else {
  var TSOA_Track.NIEM_Core.OGC_GML_Module = TSOA_Track.NIEM_Core.OGC_GML_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.TSOA_Track.NIEM_Core.OGC_GML = TSOA_Track.NIEM_Core.OGC_GML_Module.TSOA_Track.NIEM_Core.OGC_GML;
  }
  else {
    var TSOA_Track.NIEM_Core.OGC_GML = TSOA_Track.NIEM_Core.OGC_GML_Module.TSOA_Track.NIEM_Core.OGC_GML;
  }
}