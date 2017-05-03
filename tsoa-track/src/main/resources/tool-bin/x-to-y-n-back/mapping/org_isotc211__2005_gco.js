var org_isotc211__2005_gco_Module_Factory = function () {
  var org_isotc211__2005_gco = {
    name: 'org_isotc211__2005_gco',
    defaultElementNamespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    dependencies: ['NIEM_Core_OGC_GML'],
    typeInfos: [{
        localName: 'BinaryType',
        typeName: 'Binary_Type',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'src',
            attributeName: {
              localPart: 'src'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MultiplicityRangeType',
        typeName: 'MultiplicityRange_Type',
        baseTypeInfo: '.AbstractObjectType',
        propertyInfos: [{
            name: 'lower',
            required: true,
            typeInfo: '.IntegerPropertyType'
          }, {
            name: 'upper',
            required: true,
            typeInfo: '.UnlimitedIntegerPropertyType'
          }]
      }, {
        localName: 'UomAreaPropertyType',
        typeName: 'UomArea_PropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UnitDefinition',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'NIEM_Core_OGC_GML.UnitDefinitionType',
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
        localName: 'AbstractObjectType',
        typeName: 'AbstractObject_Type',
        propertyInfos: [{
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'uuid',
            attributeName: {
              localPart: 'uuid'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomScalePropertyType',
        typeName: 'UomScale_PropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UnitDefinition',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'NIEM_Core_OGC_GML.UnitDefinitionType',
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
        localName: 'UomAnglePropertyType',
        typeName: 'UomAngle_PropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UnitDefinition',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'NIEM_Core_OGC_GML.UnitDefinitionType',
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
        localName: 'DecimalPropertyType',
        typeName: 'Decimal_PropertyType',
        propertyInfos: [{
            name: 'decimal',
            required: true,
            elementName: 'Decimal',
            typeInfo: 'Decimal'
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
      }, {
        localName: 'TypeNameType',
        typeName: 'TypeName_Type',
        baseTypeInfo: '.AbstractObjectType',
        propertyInfos: [{
            name: 'aName',
            required: true,
            typeInfo: '.CharacterStringPropertyType'
          }]
      }, {
        localName: 'UomLengthPropertyType',
        typeName: 'UomLength_PropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UnitDefinition',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'NIEM_Core_OGC_GML.UnitDefinitionType',
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
        localName: 'MemberNameType',
        typeName: 'MemberName_Type',
        baseTypeInfo: '.AbstractObjectType',
        propertyInfos: [{
            name: 'aName',
            required: true,
            typeInfo: '.CharacterStringPropertyType'
          }, {
            name: 'attributeType',
            required: true,
            typeInfo: '.TypeNamePropertyType'
          }]
      }, {
        localName: 'IntegerPropertyType',
        typeName: 'Integer_PropertyType',
        propertyInfos: [{
            name: 'integer',
            required: true,
            elementName: 'Integer',
            typeInfo: 'Integer'
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
      }, {
        localName: 'DistancePropertyType',
        typeName: 'Distance_PropertyType',
        propertyInfos: [{
            name: 'distance',
            required: true,
            elementName: 'Distance',
            typeInfo: 'NIEM_Core_OGC_GML.LengthType'
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
      }, {
        localName: 'RecordTypeType',
        typeName: 'RecordType_Type',
        propertyInfos: [{
            name: 'value',
            type: 'value'
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
        localName: 'MultiplicityPropertyType',
        typeName: 'Multiplicity_PropertyType',
        propertyInfos: [{
            name: 'multiplicity',
            required: true,
            elementName: 'Multiplicity',
            typeInfo: '.MultiplicityType'
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
        localName: 'NumberPropertyType',
        typeName: 'Number_PropertyType',
        propertyInfos: [{
            name: 'real',
            required: true,
            elementName: 'Real',
            typeInfo: 'Double'
          }, {
            name: 'decimal',
            required: true,
            elementName: 'Decimal',
            typeInfo: 'Decimal'
          }, {
            name: 'integer',
            required: true,
            elementName: 'Integer',
            typeInfo: 'Integer'
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
      }, {
        localName: 'BinaryPropertyType',
        typeName: 'Binary_PropertyType',
        propertyInfos: [{
            name: 'binary',
            required: true,
            elementName: 'Binary',
            typeInfo: '.BinaryType'
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
      }, {
        localName: 'UnlimitedIntegerType',
        typeName: 'UnlimitedInteger_Type',
        propertyInfos: [{
            name: 'value',
            typeInfo: 'NonNegativeInteger',
            type: 'value'
          }, {
            name: 'isInfinite',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isInfinite'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'CodeListValueType',
        typeName: 'CodeListValue_Type',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'codeList',
            required: true,
            attributeName: {
              localPart: 'codeList'
            },
            type: 'attribute'
          }, {
            name: 'codeListValue',
            required: true,
            attributeName: {
              localPart: 'codeListValue'
            },
            type: 'attribute'
          }, {
            name: 'codeSpace',
            attributeName: {
              localPart: 'codeSpace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'UomVolumePropertyType',
        typeName: 'UomVolume_PropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UnitDefinition',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'NIEM_Core_OGC_GML.UnitDefinitionType',
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
        localName: 'RecordTypePropertyType',
        typeName: 'RecordType_PropertyType',
        propertyInfos: [{
            name: 'recordType',
            required: true,
            elementName: 'RecordType',
            typeInfo: '.RecordTypeType'
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
      }, {
        localName: 'ScalePropertyType',
        typeName: 'Scale_PropertyType',
        propertyInfos: [{
            name: 'scale',
            required: true,
            elementName: 'Scale',
            typeInfo: 'NIEM_Core_OGC_GML.ScaleType'
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
      }, {
        localName: 'MemberNamePropertyType',
        typeName: 'MemberName_PropertyType',
        propertyInfos: [{
            name: 'memberName',
            required: true,
            elementName: 'MemberName',
            typeInfo: '.MemberNameType'
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
        localName: 'BooleanPropertyType',
        typeName: 'Boolean_PropertyType',
        propertyInfos: [{
            name: '_boolean',
            required: true,
            elementName: 'Boolean',
            typeInfo: 'Boolean'
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
      }, {
        localName: 'UnitOfMeasurePropertyType',
        typeName: 'UnitOfMeasure_PropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UnitDefinition',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'NIEM_Core_OGC_GML.UnitDefinitionType',
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
        localName: 'LocalNamePropertyType',
        typeName: 'LocalName_PropertyType',
        propertyInfos: [{
            name: 'localName',
            required: true,
            elementName: 'LocalName',
            typeInfo: 'NIEM_Core_OGC_GML.CodeType'
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
      }, {
        localName: 'MultiplicityRangePropertyType',
        typeName: 'MultiplicityRange_PropertyType',
        propertyInfos: [{
            name: 'multiplicityRange',
            required: true,
            elementName: 'MultiplicityRange',
            typeInfo: '.MultiplicityRangeType'
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
        localName: 'DatePropertyType',
        typeName: 'Date_PropertyType',
        propertyInfos: [{
            name: 'date',
            required: true,
            elementName: 'Date'
          }, {
            name: 'dateTime',
            required: true,
            elementName: 'DateTime',
            typeInfo: 'DateTime'
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
      }, {
        localName: 'RealPropertyType',
        typeName: 'Real_PropertyType',
        propertyInfos: [{
            name: 'real',
            required: true,
            elementName: 'Real',
            typeInfo: 'Double'
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
      }, {
        localName: 'MultiplicityType',
        typeName: 'Multiplicity_Type',
        baseTypeInfo: '.AbstractObjectType',
        propertyInfos: [{
            name: 'range',
            required: true,
            collection: true,
            typeInfo: '.MultiplicityRangePropertyType'
          }]
      }, {
        localName: 'DateTimePropertyType',
        typeName: 'DateTime_PropertyType',
        propertyInfos: [{
            name: 'dateTime',
            required: true,
            elementName: 'DateTime',
            typeInfo: 'DateTime'
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
      }, {
        localName: 'ObjectReferencePropertyType',
        typeName: 'ObjectReference_PropertyType',
        propertyInfos: [{
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
        localName: 'RecordPropertyType',
        typeName: 'Record_PropertyType',
        propertyInfos: [{
            name: 'record',
            required: true,
            elementName: 'Record',
            typeInfo: 'AnyType'
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
        localName: 'LengthPropertyType',
        typeName: 'Length_PropertyType',
        propertyInfos: [{
            name: 'length',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'Length',
            typeInfo: 'NIEM_Core_OGC_GML.LengthType',
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
          }]
      }, {
        localName: 'UomVelocityPropertyType',
        typeName: 'UomVelocity_PropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UnitDefinition',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'NIEM_Core_OGC_GML.UnitDefinitionType',
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
        localName: 'MeasurePropertyType',
        typeName: 'Measure_PropertyType',
        propertyInfos: [{
            name: 'measure',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'Measure',
            typeInfo: 'NIEM_Core_OGC_GML.MeasureType',
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
          }]
      }, {
        localName: 'GenericNamePropertyType',
        typeName: 'GenericName_PropertyType',
        propertyInfos: [{
            name: 'abstractGenericName',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractGenericName',
            typeInfo: 'NIEM_Core_OGC_GML.CodeType',
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
          }]
      }, {
        localName: 'UomTimePropertyType',
        typeName: 'UomTime_PropertyType',
        propertyInfos: [{
            name: 'unitDefinition',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: {
              localPart: 'UnitDefinition',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'NIEM_Core_OGC_GML.UnitDefinitionType',
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
        localName: 'TypeNamePropertyType',
        typeName: 'TypeName_PropertyType',
        propertyInfos: [{
            name: 'typeName',
            required: true,
            elementName: 'TypeName',
            typeInfo: '.TypeNameType'
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
        localName: 'UnlimitedIntegerPropertyType',
        typeName: 'UnlimitedInteger_PropertyType',
        propertyInfos: [{
            name: 'unlimitedInteger',
            required: true,
            elementName: 'UnlimitedInteger',
            typeInfo: '.UnlimitedIntegerType'
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
      }, {
        localName: 'AnglePropertyType',
        typeName: 'Angle_PropertyType',
        propertyInfos: [{
            name: 'angle',
            required: true,
            elementName: 'Angle',
            typeInfo: 'NIEM_Core_OGC_GML.AngleType'
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
      }, {
        localName: 'CharacterStringPropertyType',
        typeName: 'CharacterString_PropertyType',
        propertyInfos: [{
            name: 'characterString',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'CharacterString',
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
          }]
      }, {
        localName: 'ScopedNamePropertyType',
        typeName: 'ScopedName_PropertyType',
        propertyInfos: [{
            name: 'scopedName',
            required: true,
            elementName: 'ScopedName',
            typeInfo: 'NIEM_Core_OGC_GML.CodeType'
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
        typeInfo: '.AbstractObjectType',
        elementName: 'AbstractObject'
      }, {
        typeInfo: '.UnlimitedIntegerType',
        elementName: 'UnlimitedInteger'
      }, {
        typeInfo: '.MultiplicityType',
        elementName: 'Multiplicity'
      }, {
        elementName: 'Date'
      }, {
        typeInfo: '.BinaryType',
        elementName: 'Binary'
      }, {
        typeInfo: '.MultiplicityRangeType',
        elementName: 'MultiplicityRange'
      }, {
        typeInfo: 'Double',
        elementName: 'Real'
      }, {
        typeInfo: '.RecordTypeType',
        elementName: 'RecordType'
      }, {
        typeInfo: 'NIEM_Core_OGC_GML.CodeType',
        elementName: 'AbstractGenericName'
      }, {
        typeInfo: 'Integer',
        elementName: 'Integer'
      }, {
        elementName: 'CharacterString'
      }, {
        typeInfo: 'AnyType',
        elementName: 'Record'
      }, {
        typeInfo: 'NIEM_Core_OGC_GML.AngleType',
        elementName: 'Angle',
        substitutionHead: 'Measure'
      }, {
        typeInfo: 'Boolean',
        elementName: 'Boolean'
      }, {
        typeInfo: 'NIEM_Core_OGC_GML.ScaleType',
        elementName: 'Scale',
        substitutionHead: 'Measure'
      }, {
        typeInfo: 'NIEM_Core_OGC_GML.MeasureType',
        elementName: 'Measure'
      }, {
        typeInfo: 'NIEM_Core_OGC_GML.LengthType',
        elementName: 'Length',
        substitutionHead: 'Measure'
      }, {
        typeInfo: '.MemberNameType',
        elementName: 'MemberName'
      }, {
        typeInfo: 'DateTime',
        elementName: 'DateTime'
      }, {
        typeInfo: 'NIEM_Core_OGC_GML.CodeType',
        elementName: 'LocalName',
        substitutionHead: 'AbstractGenericName'
      }, {
        typeInfo: 'NIEM_Core_OGC_GML.LengthType',
        elementName: 'Distance',
        substitutionHead: 'Length'
      }, {
        typeInfo: 'Decimal',
        elementName: 'Decimal'
      }, {
        typeInfo: '.TypeNameType',
        elementName: 'TypeName'
      }, {
        typeInfo: 'NIEM_Core_OGC_GML.CodeType',
        elementName: 'ScopedName',
        substitutionHead: 'AbstractGenericName'
      }]
  };
  return {
    org_isotc211__2005_gco: org_isotc211__2005_gco
  };
};
if (typeof define === 'function' && define.amd) {
  define([], org_isotc211__2005_gco_Module_Factory);
}
else {
  var org_isotc211__2005_gco_Module = org_isotc211__2005_gco_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.org_isotc211__2005_gco = org_isotc211__2005_gco_Module.org_isotc211__2005_gco;
  }
  else {
    var org_isotc211__2005_gco = org_isotc211__2005_gco_Module.org_isotc211__2005_gco;
  }
}