var disa_udop_tracks__1_0_ea_Module_Factory = function () {
  var disa_udop_tracks__1_0_ea = {
    name: 'disa_udop_tracks__1_0_ea',
    defaultElementNamespaceURI: 'urn:disa:udop.tracks:1.0:ea',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['NiemStructures_TrackInfo', 'NiemProxyXd_TrackInfo', 'disa_udop_tracks__1_0_genlib'],
    typeInfos: [{
        localName: 'RadioDirectionFindingRFCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.MeasureUnitCodeSimpleType',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }, {
            name: 'metadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }, {
            name: 'relationshipMetadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }]
      }, {
        localName: 'EventSourceFreeFormTextType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }, {
            name: 'metadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }, {
            name: 'relationshipMetadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }]
      }, {
        localName: 'EventSourceVerifiedCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.EventSourceVerifiedCodeSimpleType',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }, {
            name: 'metadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }, {
            name: 'relationshipMetadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }]
      }, {
        localName: 'EventSourceSensorVerifiedCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.EventSourceSensorVerifiedCodeSimpleType',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }, {
            name: 'metadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }, {
            name: 'relationshipMetadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }]
      }, {
        localName: 'EventSourceCategoryType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'eventSourceVerifiedCode',
            required: true,
            elementName: 'EventSourceVerifiedCode',
            typeInfo: '.EventSourceVerifiedCodeType'
          }, {
            name: 'eventSourceFreeFormText',
            required: true,
            elementName: 'EventSourceFreeFormText',
            typeInfo: '.EventSourceFreeFormTextType'
          }]
      }, {
        localName: 'EventSensorCategoryType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'eventSourceSensorVerifiedCode',
            required: true,
            elementName: 'EventSourceSensorVerifiedCode',
            typeInfo: '.EventSourceSensorVerifiedCodeType'
          }, {
            name: 'eventSourceSensorFreeFormText',
            required: true,
            elementName: 'EventSourceSensorFreeFormText',
            typeInfo: '.EventSourceSensorFreeFormTextType'
          }]
      }, {
        localName: 'EventSourceSensorFreeFormTextType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            type: 'attribute'
          }, {
            name: 'ref',
            typeInfo: 'IDREF',
            type: 'attribute'
          }, {
            name: 'metadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }, {
            name: 'relationshipMetadata',
            typeInfo: 'IDREFS',
            type: 'attribute'
          }]
      }, {
        localName: 'EventAmplificationDetailsType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'rdfrfCode',
            elementName: 'RDFRFCode',
            typeInfo: '.RadioDirectionFindingRFCodeType'
          }, {
            name: 'sensorCode',
            elementName: 'SensorCode',
            typeInfo: '.EventSensorCategoryType'
          }, {
            name: 'sourceCode',
            elementName: 'SourceCode',
            typeInfo: '.EventSourceCategoryType'
          }, {
            name: 'sourceReportNumber',
            elementName: 'SourceReportNumber',
            typeInfo: 'NiemProxyXd_TrackInfo.Int'
          }]
      }, {
        type: 'enumInfo',
        localName: 'MeasureUnitCodeSimpleType',
        values: ['HZ', 'KHZ', 'MHZ', 'GHZ']
      }, {
        type: 'enumInfo',
        localName: 'EventSourceSensorVerifiedCodeSimpleType',
        values: ['TRAM', 'SONACT', 'ACSONO', 'VDSACT', 'ADS', 'AQS13', 'ASQ10', 'ASQ81', 'BATHY', 'BEDF', 'CABUOY', 'WIZARD', 'CDF', 'CASS', 'CATAS', 'DATAS', 'DPSONA', 'DPSONP', 'DICASS', 'DIFAR', 'ES', 'XBT', 'FDS', 'FLIR', 'SRN25', 'WRN6', 'HFDF', 'IFF', 'IR', 'IRDS', 'IUSS', 'IUSS1', 'IUSS2', 'ISAR', 'LFA', 'LOFAR', 'LLLTV', 'MAD', 'NOD', 'OTR', 'OBDF', 'SONPAS', 'PASONO', 'VDSPAS', 'PHOTO', 'RADAR', 'RDF', 'ROTHR', 'SONAR', 'SELOR', 'WSN5', 'SLAR', 'SUBTA', 'STASS', 'TARPS', 'TACTAS', 'TASS', 'SRN19', 'UNK', 'VLAD', 'VISUAL']
      }, {
        type: 'enumInfo',
        localName: 'EventSourceVerifiedCodeSimpleType',
        values: ['ACTFIX', 'CD', 'BTMB', 'BB', 'CASREP', 'WIZARD', 'CPA', 'CZ', 'DR', 'DP', 'ELINT', 'EST', 'EER', 'FTA', 'FNOC', 'GCCS', 'LOB', 'LOCATR', 'MERCO', 'MSCMR', 'PURPLE', 'MOVREP', 'MCDR', 'MCJR', 'JA', 'JD', 'JH', 'JI', 'JN', 'JO', 'JR', 'JS', 'NTDS', 'OSIS', 'OTR', 'OWN', 'OSWEX', 'PASFIX', 'PLRS', 'FIX', 'PFA', 'COOK', 'SKED', 'SELOR', 'PR', 'SUBN', 'TSES', 'TACE', 'TBC', 'UNK', 'USMER', 'WXRPT', 'WMO']
      }],
    elementInfos: [{
        typeInfo: 'disa_udop_tracks__1_0_genlib.BearingDegreesType',
        elementName: 'Course',
        substitutionHead: {
          localPart: 'CourseAbstract',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: '.EventSensorCategoryType',
        elementName: 'SensorCode'
      }, {
        typeInfo: '.EventSourceSensorFreeFormTextType',
        elementName: 'EventSourceSensorFreeFormText'
      }, {
        typeInfo: '.RadioDirectionFindingRFCodeType',
        elementName: 'RDFRFCode'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Int',
        elementName: 'SourceReportNumber'
      }, {
        typeInfo: '.EventSourceVerifiedCodeType',
        elementName: 'EventSourceVerifiedCode'
      }, {
        typeInfo: '.EventSourceFreeFormTextType',
        elementName: 'EventSourceFreeFormText'
      }, {
        typeInfo: '.EventSourceSensorVerifiedCodeType',
        elementName: 'EventSourceSensorVerifiedCode'
      }, {
        typeInfo: '.EventSourceCategoryType',
        elementName: 'SourceCode'
      }]
  };
  return {
    disa_udop_tracks__1_0_ea: disa_udop_tracks__1_0_ea
  };
};
if (typeof define === 'function' && define.amd) {
  define([], disa_udop_tracks__1_0_ea_Module_Factory);
}
else {
  var disa_udop_tracks__1_0_ea_Module = disa_udop_tracks__1_0_ea_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.disa_udop_tracks__1_0_ea = disa_udop_tracks__1_0_ea_Module.disa_udop_tracks__1_0_ea;
  }
  else {
    var disa_udop_tracks__1_0_ea = disa_udop_tracks__1_0_ea_Module.disa_udop_tracks__1_0_ea;
  }
}