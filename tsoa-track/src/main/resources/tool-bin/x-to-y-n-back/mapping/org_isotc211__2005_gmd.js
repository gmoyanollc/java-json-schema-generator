var org_isotc211__2005_gmd_Module_Factory = function () {
  var org_isotc211__2005_gmd = {
    name: 'org_isotc211__2005_gmd',
    defaultElementNamespaceURI: 'http:\/\/www.isotc211.org\/2005\/gmd',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/1999\/xlink',
    dependencies: ['org_isotc211__2005_gss', 'org_isotc211__2005_gsr', 'org_isotc211__2005_gco', 'org_isotc211__2005_gts'],
    typeInfos: [{
        localName: 'MDGeoreferenceableType',
        typeName: 'MD_Georeferenceable_Type',
        baseTypeInfo: '.MDGridSpatialRepresentationType',
        propertyInfos: [{
            name: 'controlPointAvailability',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'orientationParameterAvailability',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'orientationParameterDescription',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'georeferencedParameters',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.RecordPropertyType'
          }, {
            name: 'parameterCitation',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CICitationPropertyType'
          }]
      }, {
        localName: 'DQAbsoluteExternalPositionalAccuracyType',
        typeName: 'DQ_AbsoluteExternalPositionalAccuracy_Type',
        baseTypeInfo: '.AbstractDQPositionalAccuracyType'
      }, {
        localName: 'MDCoverageContentTypeCodePropertyType',
        typeName: 'MD_CoverageContentTypeCode_PropertyType',
        propertyInfos: [{
            name: 'mdCoverageContentTypeCode',
            required: true,
            elementName: 'MD_CoverageContentTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDSpatialRepresentationPropertyType',
        typeName: 'MD_SpatialRepresentation_PropertyType',
        propertyInfos: [{
            name: 'abstractMDSpatialRepresentation',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractMD_SpatialRepresentation',
            typeInfo: '.AbstractMDSpatialRepresentationType',
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
        localName: 'MDKeywordsPropertyType',
        typeName: 'MD_Keywords_PropertyType',
        propertyInfos: [{
            name: 'mdKeywords',
            required: true,
            elementName: 'MD_Keywords',
            typeInfo: '.MDKeywordsType'
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
        localName: 'CITelephoneType',
        typeName: 'CI_Telephone_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'voice',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'facsimile',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDGeoreferenceablePropertyType',
        typeName: 'MD_Georeferenceable_PropertyType',
        propertyInfos: [{
            name: 'mdGeoreferenceable',
            required: true,
            elementName: 'MD_Georeferenceable',
            typeInfo: '.MDGeoreferenceableType'
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
        localName: 'MDDistributorPropertyType',
        typeName: 'MD_Distributor_PropertyType',
        propertyInfos: [{
            name: 'mdDistributor',
            required: true,
            elementName: 'MD_Distributor',
            typeInfo: '.MDDistributorType'
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
        localName: 'MDScopeCodePropertyType',
        typeName: 'MD_ScopeCode_PropertyType',
        propertyInfos: [{
            name: 'mdScopeCode',
            required: true,
            elementName: 'MD_ScopeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'DQConformanceResultPropertyType',
        typeName: 'DQ_ConformanceResult_PropertyType',
        propertyInfos: [{
            name: 'dqConformanceResult',
            required: true,
            elementName: 'DQ_ConformanceResult',
            typeInfo: '.DQConformanceResultType'
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
        localName: 'CIDateType',
        typeName: 'CI_Date_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'date',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.DatePropertyType'
          }, {
            name: 'dateType',
            required: true,
            typeInfo: '.CIDateTypeCodePropertyType'
          }]
      }, {
        localName: 'MDDistributionPropertyType',
        typeName: 'MD_Distribution_PropertyType',
        propertyInfos: [{
            name: 'mdDistribution',
            required: true,
            elementName: 'MD_Distribution',
            typeInfo: '.MDDistributionType'
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
        localName: 'CIOnlineResourcePropertyType',
        typeName: 'CI_OnlineResource_PropertyType',
        propertyInfos: [{
            name: 'ciOnlineResource',
            required: true,
            elementName: 'CI_OnlineResource',
            typeInfo: '.CIOnlineResourceType'
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
        localName: 'MDImageDescriptionPropertyType',
        typeName: 'MD_ImageDescription_PropertyType',
        propertyInfos: [{
            name: 'mdImageDescription',
            required: true,
            elementName: 'MD_ImageDescription',
            typeInfo: '.MDImageDescriptionType'
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
        localName: 'MDGeometricObjectTypeCodePropertyType',
        typeName: 'MD_GeometricObjectTypeCode_PropertyType',
        propertyInfos: [{
            name: 'mdGeometricObjectTypeCode',
            required: true,
            elementName: 'MD_GeometricObjectTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDMetadataPropertyType',
        typeName: 'MD_Metadata_PropertyType',
        propertyInfos: [{
            name: 'mdMetadata',
            required: true,
            elementName: 'MD_Metadata',
            typeInfo: '.MDMetadataType'
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
        localName: 'MDImageDescriptionType',
        typeName: 'MD_ImageDescription_Type',
        baseTypeInfo: '.MDCoverageDescriptionType',
        propertyInfos: [{
            name: 'illuminationElevationAngle',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'illuminationAzimuthAngle',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'imagingCondition',
            typeInfo: '.MDImagingConditionCodePropertyType'
          }, {
            name: 'imageQualityCode',
            typeInfo: '.MDIdentifierPropertyType'
          }, {
            name: 'cloudCoverPercentage',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'processingLevelCode',
            typeInfo: '.MDIdentifierPropertyType'
          }, {
            name: 'compressionGenerationQuantity',
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }, {
            name: 'triangulationIndicator',
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'radiometricCalibrationDataAvailability',
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'cameraCalibrationInformationAvailability',
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'filmDistortionInformationAvailability',
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'lensDistortionInformationAvailability',
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }]
      }, {
        localName: 'EXGeographicExtentPropertyType',
        typeName: 'EX_GeographicExtent_PropertyType',
        propertyInfos: [{
            name: 'abstractEXGeographicExtent',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractEX_GeographicExtent',
            typeInfo: '.AbstractEXGeographicExtentType',
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
        localName: 'AbstractDQTemporalAccuracyType',
        typeName: 'AbstractDQ_TemporalAccuracy_Type',
        baseTypeInfo: '.AbstractDQElementType'
      }, {
        localName: 'MDProgressCodePropertyType',
        typeName: 'MD_ProgressCode_PropertyType',
        propertyInfos: [{
            name: 'mdProgressCode',
            required: true,
            elementName: 'MD_ProgressCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'DQRelativeInternalPositionalAccuracyType',
        typeName: 'DQ_RelativeInternalPositionalAccuracy_Type',
        baseTypeInfo: '.AbstractDQPositionalAccuracyType'
      }, {
        localName: 'MDContentInformationPropertyType',
        typeName: 'MD_ContentInformation_PropertyType',
        propertyInfos: [{
            name: 'abstractMDContentInformation',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractMD_ContentInformation',
            typeInfo: '.AbstractMDContentInformationType',
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
        localName: 'MDServiceIdentificationPropertyType',
        typeName: 'MD_ServiceIdentification_PropertyType',
        propertyInfos: [{
            name: 'mdServiceIdentification',
            required: true,
            elementName: 'MD_ServiceIdentification',
            typeInfo: '.MDServiceIdentificationType'
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
        localName: 'MDStandardOrderProcessPropertyType',
        typeName: 'MD_StandardOrderProcess_PropertyType',
        propertyInfos: [{
            name: 'mdStandardOrderProcess',
            required: true,
            elementName: 'MD_StandardOrderProcess',
            typeInfo: '.MDStandardOrderProcessType'
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
        localName: 'MDKeywordsType',
        typeName: 'MD_Keywords_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'keyword',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'type',
            typeInfo: '.MDKeywordTypeCodePropertyType'
          }, {
            name: 'thesaurusName',
            typeInfo: '.CICitationPropertyType'
          }]
      }, {
        localName: 'CIDateTypeCodePropertyType',
        typeName: 'CI_DateTypeCode_PropertyType',
        propertyInfos: [{
            name: 'ciDateTypeCode',
            required: true,
            elementName: 'CI_DateTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'CITelephonePropertyType',
        typeName: 'CI_Telephone_PropertyType',
        propertyInfos: [{
            name: 'ciTelephone',
            required: true,
            elementName: 'CI_Telephone',
            typeInfo: '.CITelephoneType'
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
        localName: 'MDRangeDimensionPropertyType',
        typeName: 'MD_RangeDimension_PropertyType',
        propertyInfos: [{
            name: 'mdRangeDimension',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'MD_RangeDimension',
            typeInfo: '.MDRangeDimensionType',
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
        localName: 'DSAssociationType',
        typeName: 'DS_Association_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType'
      }, {
        localName: 'DQTemporalConsistencyPropertyType',
        typeName: 'DQ_TemporalConsistency_PropertyType',
        propertyInfos: [{
            name: 'dqTemporalConsistency',
            required: true,
            elementName: 'DQ_TemporalConsistency',
            typeInfo: '.DQTemporalConsistencyType'
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
        localName: 'CIPresentationFormCodePropertyType',
        typeName: 'CI_PresentationFormCode_PropertyType',
        propertyInfos: [{
            name: 'ciPresentationFormCode',
            required: true,
            elementName: 'CI_PresentationFormCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'LIProcessStepType',
        typeName: 'LI_ProcessStep_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'description',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'rationale',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'dateTime',
            typeInfo: 'org_isotc211__2005_gco.DateTimePropertyType'
          }, {
            name: 'processor',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }, {
            name: 'source',
            minOccurs: 0,
            collection: true,
            typeInfo: '.LISourcePropertyType'
          }]
      }, {
        localName: 'CIDatePropertyType',
        typeName: 'CI_Date_PropertyType',
        propertyInfos: [{
            name: 'ciDate',
            required: true,
            elementName: 'CI_Date',
            typeInfo: '.CIDateType'
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
        localName: 'EXVerticalExtentPropertyType',
        typeName: 'EX_VerticalExtent_PropertyType',
        propertyInfos: [{
            name: 'exVerticalExtent',
            required: true,
            elementName: 'EX_VerticalExtent',
            typeInfo: '.EXVerticalExtentType'
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
        localName: 'MDExtendedElementInformationType',
        typeName: 'MD_ExtendedElementInformation_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'shortName',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'domainCode',
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }, {
            name: 'definition',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'obligation',
            typeInfo: '.MDObligationCodePropertyType'
          }, {
            name: 'condition',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'dataType',
            required: true,
            typeInfo: '.MDDatatypeCodePropertyType'
          }, {
            name: 'maximumOccurrence',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'domainValue',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'parentEntity',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'rule',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'rationale',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'source',
            required: true,
            collection: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }]
      }, {
        localName: 'DSAggregatePropertyType',
        typeName: 'DS_Aggregate_PropertyType',
        propertyInfos: [{
            name: 'abstractDSAggregate',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractDS_Aggregate',
            typeInfo: '.AbstractDSAggregateType',
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
        localName: 'CIContactType',
        typeName: 'CI_Contact_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'phone',
            typeInfo: '.CITelephonePropertyType'
          }, {
            name: 'address',
            typeInfo: '.CIAddressPropertyType'
          }, {
            name: 'onlineResource',
            typeInfo: '.CIOnlineResourcePropertyType'
          }, {
            name: 'hoursOfService',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'contactInstructions',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'EXTemporalExtentPropertyType',
        typeName: 'EX_TemporalExtent_PropertyType',
        propertyInfos: [{
            name: 'exTemporalExtent',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'EX_TemporalExtent',
            typeInfo: '.EXTemporalExtentType',
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
        localName: 'MDSecurityConstraintsType',
        typeName: 'MD_SecurityConstraints_Type',
        baseTypeInfo: '.MDConstraintsType',
        propertyInfos: [{
            name: 'classification',
            required: true,
            typeInfo: '.MDClassificationCodePropertyType'
          }, {
            name: 'userNote',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'classificationSystem',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'handlingDescription',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDGeorectifiedType',
        typeName: 'MD_Georectified_Type',
        baseTypeInfo: '.MDGridSpatialRepresentationType',
        propertyInfos: [{
            name: 'checkPointAvailability',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'checkPointDescription',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'cornerPoints',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gss.GMPointPropertyType'
          }, {
            name: 'centerPoint',
            typeInfo: 'org_isotc211__2005_gss.GMPointPropertyType'
          }, {
            name: 'pointInPixel',
            required: true,
            typeInfo: '.MDPixelOrientationCodePropertyType'
          }, {
            name: 'transformationDimensionDescription',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'transformationDimensionMapping',
            minOccurs: 0,
            maxOccurs: 2,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDSecurityConstraintsPropertyType',
        typeName: 'MD_SecurityConstraints_PropertyType',
        propertyInfos: [{
            name: 'mdSecurityConstraints',
            required: true,
            elementName: 'MD_SecurityConstraints',
            typeInfo: '.MDSecurityConstraintsType'
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
        localName: 'CISeriesType',
        typeName: 'CI_Series_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'issueIdentification',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'page',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDDigitalTransferOptionsPropertyType',
        typeName: 'MD_DigitalTransferOptions_PropertyType',
        propertyInfos: [{
            name: 'mdDigitalTransferOptions',
            required: true,
            elementName: 'MD_DigitalTransferOptions',
            typeInfo: '.MDDigitalTransferOptionsType'
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
        localName: 'DQCompletenessOmissionType',
        typeName: 'DQ_CompletenessOmission_Type',
        baseTypeInfo: '.AbstractDQCompletenessType'
      }, {
        localName: 'AbstractMDContentInformationType',
        typeName: 'AbstractMD_ContentInformation_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType'
      }, {
        localName: 'EXGeographicDescriptionPropertyType',
        typeName: 'EX_GeographicDescription_PropertyType',
        propertyInfos: [{
            name: 'exGeographicDescription',
            required: true,
            elementName: 'EX_GeographicDescription',
            typeInfo: '.EXGeographicDescriptionType'
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
        localName: 'DQScopePropertyType',
        typeName: 'DQ_Scope_PropertyType',
        propertyInfos: [{
            name: 'dqScope',
            required: true,
            elementName: 'DQ_Scope',
            typeInfo: '.DQScopeType'
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
        localName: 'EXBoundingPolygonPropertyType',
        typeName: 'EX_BoundingPolygon_PropertyType',
        propertyInfos: [{
            name: 'exBoundingPolygon',
            required: true,
            elementName: 'EX_BoundingPolygon',
            typeInfo: '.EXBoundingPolygonType'
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
        localName: 'DQQuantitativeAttributeAccuracyPropertyType',
        typeName: 'DQ_QuantitativeAttributeAccuracy_PropertyType',
        propertyInfos: [{
            name: 'dqQuantitativeAttributeAccuracy',
            required: true,
            elementName: 'DQ_QuantitativeAttributeAccuracy',
            typeInfo: '.DQQuantitativeAttributeAccuracyType'
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
        localName: 'MDBrowseGraphicType',
        typeName: 'MD_BrowseGraphic_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'fileName',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'fileDescription',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'fileType',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'EXSpatialTemporalExtentPropertyType',
        typeName: 'EX_SpatialTemporalExtent_PropertyType',
        propertyInfos: [{
            name: 'exSpatialTemporalExtent',
            required: true,
            elementName: 'EX_SpatialTemporalExtent',
            typeInfo: '.EXSpatialTemporalExtentType'
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
        localName: 'LocalisedCharacterStringPropertyType',
        typeName: 'LocalisedCharacterString_PropertyType',
        baseTypeInfo: 'org_isotc211__2005_gco.ObjectReferencePropertyType',
        propertyInfos: [{
            name: 'localisedCharacterString',
            required: true,
            elementName: 'LocalisedCharacterString',
            typeInfo: '.LocalisedCharacterStringType'
          }]
      }, {
        localName: 'MDRepresentativeFractionType',
        typeName: 'MD_RepresentativeFraction_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'denominator',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }]
      }, {
        localName: 'DQNonQuantitativeAttributeAccuracyPropertyType',
        typeName: 'DQ_NonQuantitativeAttributeAccuracy_PropertyType',
        propertyInfos: [{
            name: 'dqNonQuantitativeAttributeAccuracy',
            required: true,
            elementName: 'DQ_NonQuantitativeAttributeAccuracy',
            typeInfo: '.DQNonQuantitativeAttributeAccuracyType'
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
        localName: 'CIResponsiblePartyType',
        typeName: 'CI_ResponsibleParty_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'individualName',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'organisationName',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'positionName',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'contactInfo',
            typeInfo: '.CIContactPropertyType'
          }, {
            name: 'role',
            required: true,
            typeInfo: '.CIRoleCodePropertyType'
          }]
      }, {
        localName: 'DSPlatformType',
        typeName: 'DS_Platform_Type',
        baseTypeInfo: '.DSSeriesType'
      }, {
        localName: 'CICitationPropertyType',
        typeName: 'CI_Citation_PropertyType',
        propertyInfos: [{
            name: 'ciCitation',
            required: true,
            elementName: 'CI_Citation',
            typeInfo: '.CICitationType'
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
        localName: 'CIRoleCodePropertyType',
        typeName: 'CI_RoleCode_PropertyType',
        propertyInfos: [{
            name: 'ciRoleCode',
            required: true,
            elementName: 'CI_RoleCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'DQConceptualConsistencyPropertyType',
        typeName: 'DQ_ConceptualConsistency_PropertyType',
        propertyInfos: [{
            name: 'dqConceptualConsistency',
            required: true,
            elementName: 'DQ_ConceptualConsistency',
            typeInfo: '.DQConceptualConsistencyType'
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
        localName: 'DQQuantitativeResultPropertyType',
        typeName: 'DQ_QuantitativeResult_PropertyType',
        propertyInfos: [{
            name: 'dqQuantitativeResult',
            required: true,
            elementName: 'DQ_QuantitativeResult',
            typeInfo: '.DQQuantitativeResultType'
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
        localName: 'DSPlatformPropertyType',
        typeName: 'DS_Platform_PropertyType',
        propertyInfos: [{
            name: 'dsPlatform',
            required: true,
            elementName: 'DS_Platform',
            typeInfo: '.DSPlatformType'
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
        localName: 'MDResolutionPropertyType',
        typeName: 'MD_Resolution_PropertyType',
        propertyInfos: [{
            name: 'mdResolution',
            required: true,
            elementName: 'MD_Resolution',
            typeInfo: '.MDResolutionType'
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
        localName: 'EXSpatialTemporalExtentType',
        typeName: 'EX_SpatialTemporalExtent_Type',
        baseTypeInfo: '.EXTemporalExtentType',
        propertyInfos: [{
            name: 'spatialExtent',
            required: true,
            collection: true,
            typeInfo: '.EXGeographicExtentPropertyType'
          }]
      }, {
        localName: 'CIAddressType',
        typeName: 'CI_Address_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'deliveryPoint',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'city',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'administrativeArea',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'postalCode',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'country',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'electronicMailAddress',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDPortrayalCatalogueReferenceType',
        typeName: 'MD_PortrayalCatalogueReference_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'portrayalCatalogueCitation',
            required: true,
            collection: true,
            typeInfo: '.CICitationPropertyType'
          }]
      }, {
        localName: 'DSStereoMatePropertyType',
        typeName: 'DS_StereoMate_PropertyType',
        propertyInfos: [{
            name: 'dsStereoMate',
            required: true,
            elementName: 'DS_StereoMate',
            typeInfo: '.DSStereoMateType'
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
        localName: 'MDConstraintsPropertyType',
        typeName: 'MD_Constraints_PropertyType',
        propertyInfos: [{
            name: 'mdConstraints',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'MD_Constraints',
            typeInfo: '.MDConstraintsType',
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
        localName: 'DQDataQualityType',
        typeName: 'DQ_DataQuality_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'scope',
            required: true,
            typeInfo: '.DQScopePropertyType'
          }, {
            name: 'report',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DQElementPropertyType'
          }, {
            name: 'lineage',
            typeInfo: '.LILineagePropertyType'
          }]
      }, {
        localName: 'MDBandType',
        typeName: 'MD_Band_Type',
        baseTypeInfo: '.MDRangeDimensionType',
        propertyInfos: [{
            name: 'maxValue',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'minValue',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'units',
            typeInfo: 'org_isotc211__2005_gco.UomLengthPropertyType'
          }, {
            name: 'peakResponse',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'bitsPerValue',
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }, {
            name: 'toneGradation',
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }, {
            name: 'scaleFactor',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'offset',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }]
      }, {
        localName: 'DQResultPropertyType',
        typeName: 'DQ_Result_PropertyType',
        propertyInfos: [{
            name: 'abstractDQResult',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractDQ_Result',
            typeInfo: '.AbstractDQResultType',
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
        localName: 'DSInitiativeTypeCodePropertyType',
        typeName: 'DS_InitiativeTypeCode_PropertyType',
        propertyInfos: [{
            name: 'dsInitiativeTypeCode',
            required: true,
            elementName: 'DS_InitiativeTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'DQAccuracyOfATimeMeasurementType',
        typeName: 'DQ_AccuracyOfATimeMeasurement_Type',
        baseTypeInfo: '.AbstractDQTemporalAccuracyType'
      }, {
        localName: 'DSSensorPropertyType',
        typeName: 'DS_Sensor_PropertyType',
        propertyInfos: [{
            name: 'dsSensor',
            required: true,
            elementName: 'DS_Sensor',
            typeInfo: '.DSSensorType'
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
        localName: 'CIContactPropertyType',
        typeName: 'CI_Contact_PropertyType',
        propertyInfos: [{
            name: 'ciContact',
            required: true,
            elementName: 'CI_Contact',
            typeInfo: '.CIContactType'
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
        localName: 'PTFreeTextPropertyType',
        typeName: 'PT_FreeText_PropertyType',
        baseTypeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType',
        propertyInfos: [{
            name: 'ptFreeText',
            required: true,
            elementName: 'PT_FreeText',
            typeInfo: '.PTFreeTextType'
          }]
      }, {
        localName: 'MDGeorectifiedPropertyType',
        typeName: 'MD_Georectified_PropertyType',
        propertyInfos: [{
            name: 'mdGeorectified',
            required: true,
            elementName: 'MD_Georectified',
            typeInfo: '.MDGeorectifiedType'
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
        localName: 'EXVerticalExtentType',
        typeName: 'EX_VerticalExtent_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'minimumValue',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'maximumValue',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'verticalCRS',
            required: true,
            typeInfo: 'org_isotc211__2005_gsr.SCCRSPropertyType'
          }]
      }, {
        localName: 'LILineagePropertyType',
        typeName: 'LI_Lineage_PropertyType',
        propertyInfos: [{
            name: 'liLineage',
            required: true,
            elementName: 'LI_Lineage',
            typeInfo: '.LILineageType'
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
        localName: 'PTLocaleContainerPropertyType',
        typeName: 'PT_LocaleContainer_PropertyType',
        propertyInfos: [{
            name: 'ptLocaleContainer',
            required: true,
            elementName: 'PT_LocaleContainer',
            typeInfo: '.PTLocaleContainerType'
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
        localName: 'DQThematicAccuracyPropertyType',
        typeName: 'DQ_ThematicAccuracy_PropertyType',
        propertyInfos: [{
            name: 'abstractDQThematicAccuracy',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractDQ_ThematicAccuracy',
            typeInfo: '.AbstractDQThematicAccuracyType',
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
        localName: 'AbstractMDIdentificationType',
        typeName: 'AbstractMD_Identification_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'citation',
            required: true,
            typeInfo: '.CICitationPropertyType'
          }, {
            name: '_abstract',
            required: true,
            elementName: 'abstract',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'purpose',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'credit',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'status',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDProgressCodePropertyType'
          }, {
            name: 'pointOfContact',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }, {
            name: 'resourceMaintenance',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDMaintenanceInformationPropertyType'
          }, {
            name: 'graphicOverview',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDBrowseGraphicPropertyType'
          }, {
            name: 'resourceFormat',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDFormatPropertyType'
          }, {
            name: 'descriptiveKeywords',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDKeywordsPropertyType'
          }, {
            name: 'resourceSpecificUsage',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDUsagePropertyType'
          }, {
            name: 'resourceConstraints',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDConstraintsPropertyType'
          }, {
            name: 'aggregationInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDAggregateInformationPropertyType'
          }]
      }, {
        localName: 'CountryPropertyType',
        typeName: 'Country_PropertyType',
        propertyInfos: [{
            name: 'country',
            required: true,
            elementName: 'Country',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'EXGeographicBoundingBoxPropertyType',
        typeName: 'EX_GeographicBoundingBox_PropertyType',
        propertyInfos: [{
            name: 'exGeographicBoundingBox',
            required: true,
            elementName: 'EX_GeographicBoundingBox',
            typeInfo: '.EXGeographicBoundingBoxType'
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
        localName: 'MDResolutionType',
        typeName: 'MD_Resolution_Type',
        propertyInfos: [{
            name: 'equivalentScale',
            required: true,
            typeInfo: '.MDRepresentativeFractionPropertyType'
          }, {
            name: 'distance',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.DistancePropertyType'
          }]
      }, {
        localName: 'DQPositionalAccuracyPropertyType',
        typeName: 'DQ_PositionalAccuracy_PropertyType',
        propertyInfos: [{
            name: 'abstractDQPositionalAccuracy',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractDQ_PositionalAccuracy',
            typeInfo: '.AbstractDQPositionalAccuracyType',
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
        localName: 'CIOnLineFunctionCodePropertyType',
        typeName: 'CI_OnLineFunctionCode_PropertyType',
        propertyInfos: [{
            name: 'ciOnLineFunctionCode',
            required: true,
            elementName: 'CI_OnLineFunctionCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDTopicCategoryCodePropertyType',
        typeName: 'MD_TopicCategoryCode_PropertyType',
        propertyInfos: [{
            name: 'mdTopicCategoryCode',
            required: true,
            elementName: 'MD_TopicCategoryCode',
            typeInfo: '.MDTopicCategoryCodeType'
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
        localName: 'DSSeriesPropertyType',
        typeName: 'DS_Series_PropertyType',
        propertyInfos: [{
            name: 'dsSeries',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'DS_Series',
            typeInfo: '.DSSeriesType',
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
        localName: 'PTLocalePropertyType',
        typeName: 'PT_Locale_PropertyType',
        propertyInfos: [{
            name: 'ptLocale',
            required: true,
            elementName: 'PT_Locale',
            typeInfo: '.PTLocaleType'
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
        localName: 'MDIdentifierPropertyType',
        typeName: 'MD_Identifier_PropertyType',
        propertyInfos: [{
            name: 'mdIdentifier',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'MD_Identifier',
            typeInfo: '.MDIdentifierType',
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
        localName: 'DQThematicClassificationCorrectnessPropertyType',
        typeName: 'DQ_ThematicClassificationCorrectness_PropertyType',
        propertyInfos: [{
            name: 'dqThematicClassificationCorrectness',
            required: true,
            elementName: 'DQ_ThematicClassificationCorrectness',
            typeInfo: '.DQThematicClassificationCorrectnessType'
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
        localName: 'DQCompletenessPropertyType',
        typeName: 'DQ_Completeness_PropertyType',
        propertyInfos: [{
            name: 'abstractDQCompleteness',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractDQ_Completeness',
            typeInfo: '.AbstractDQCompletenessType',
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
        localName: 'MDUsageType',
        typeName: 'MD_Usage_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'specificUsage',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'usageDateTime',
            typeInfo: 'org_isotc211__2005_gco.DateTimePropertyType'
          }, {
            name: 'userDeterminedLimitations',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'userContactInfo',
            required: true,
            collection: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }]
      }, {
        localName: 'DQCompletenessCommissionType',
        typeName: 'DQ_CompletenessCommission_Type',
        baseTypeInfo: '.AbstractDQCompletenessType'
      }, {
        localName: 'DSProductionSeriesType',
        typeName: 'DS_ProductionSeries_Type',
        baseTypeInfo: '.DSSeriesType'
      }, {
        localName: 'MDPixelOrientationCodePropertyType',
        typeName: 'MD_PixelOrientationCode_PropertyType',
        propertyInfos: [{
            name: 'mdPixelOrientationCode',
            required: true,
            elementName: 'MD_PixelOrientationCode',
            typeInfo: '.MDPixelOrientationCodeType'
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
        localName: 'MDApplicationSchemaInformationPropertyType',
        typeName: 'MD_ApplicationSchemaInformation_PropertyType',
        propertyInfos: [{
            name: 'mdApplicationSchemaInformation',
            required: true,
            elementName: 'MD_ApplicationSchemaInformation',
            typeInfo: '.MDApplicationSchemaInformationType'
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
        localName: 'MDVectorSpatialRepresentationPropertyType',
        typeName: 'MD_VectorSpatialRepresentation_PropertyType',
        propertyInfos: [{
            name: 'mdVectorSpatialRepresentation',
            required: true,
            elementName: 'MD_VectorSpatialRepresentation',
            typeInfo: '.MDVectorSpatialRepresentationType'
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
        localName: 'MDDataIdentificationType',
        typeName: 'MD_DataIdentification_Type',
        baseTypeInfo: '.AbstractMDIdentificationType',
        propertyInfos: [{
            name: 'spatialRepresentationType',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDSpatialRepresentationTypeCodePropertyType'
          }, {
            name: 'spatialResolution',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDResolutionPropertyType'
          }, {
            name: 'language',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'characterSet',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDCharacterSetCodePropertyType'
          }, {
            name: 'topicCategory',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDTopicCategoryCodePropertyType'
          }, {
            name: 'environmentDescription',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'extent',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EXExtentPropertyType'
          }, {
            name: 'supplementalInformation',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDGeometricObjectsType',
        typeName: 'MD_GeometricObjects_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'geometricObjectType',
            required: true,
            typeInfo: '.MDGeometricObjectTypeCodePropertyType'
          }, {
            name: 'geometricObjectCount',
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }]
      }, {
        localName: 'MDLegalConstraintsPropertyType',
        typeName: 'MD_LegalConstraints_PropertyType',
        propertyInfos: [{
            name: 'mdLegalConstraints',
            required: true,
            elementName: 'MD_LegalConstraints',
            typeInfo: '.MDLegalConstraintsType'
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
        localName: 'DQConceptualConsistencyType',
        typeName: 'DQ_ConceptualConsistency_Type',
        baseTypeInfo: '.AbstractDQLogicalConsistencyType'
      }, {
        localName: 'LocalisedCharacterStringType',
        typeName: 'LocalisedCharacterString_Type',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'id',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'id'
            },
            type: 'attribute'
          }, {
            name: 'locale',
            attributeName: {
              localPart: 'locale'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MDCoverageDescriptionType',
        typeName: 'MD_CoverageDescription_Type',
        baseTypeInfo: '.AbstractMDContentInformationType',
        propertyInfos: [{
            name: 'attributeDescription',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.RecordTypePropertyType'
          }, {
            name: 'contentType',
            required: true,
            typeInfo: '.MDCoverageContentTypeCodePropertyType'
          }, {
            name: 'dimension',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDRangeDimensionPropertyType'
          }]
      }, {
        localName: 'DQEvaluationMethodTypeCodePropertyType',
        typeName: 'DQ_EvaluationMethodTypeCode_PropertyType',
        propertyInfos: [{
            name: 'dqEvaluationMethodTypeCode',
            required: true,
            elementName: 'DQ_EvaluationMethodTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'DQNonQuantitativeAttributeAccuracyType',
        typeName: 'DQ_NonQuantitativeAttributeAccuracy_Type',
        baseTypeInfo: '.AbstractDQThematicAccuracyType'
      }, {
        localName: 'DQAbsoluteExternalPositionalAccuracyPropertyType',
        typeName: 'DQ_AbsoluteExternalPositionalAccuracy_PropertyType',
        propertyInfos: [{
            name: 'dqAbsoluteExternalPositionalAccuracy',
            required: true,
            elementName: 'DQ_AbsoluteExternalPositionalAccuracy',
            typeInfo: '.DQAbsoluteExternalPositionalAccuracyType'
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
        localName: 'MDPortrayalCatalogueReferencePropertyType',
        typeName: 'MD_PortrayalCatalogueReference_PropertyType',
        propertyInfos: [{
            name: 'mdPortrayalCatalogueReference',
            required: true,
            elementName: 'MD_PortrayalCatalogueReference',
            typeInfo: '.MDPortrayalCatalogueReferenceType'
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
        localName: 'DQThematicClassificationCorrectnessType',
        typeName: 'DQ_ThematicClassificationCorrectness_Type',
        baseTypeInfo: '.AbstractDQThematicAccuracyType'
      }, {
        localName: 'DQScopeType',
        typeName: 'DQ_Scope_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'level',
            required: true,
            typeInfo: '.MDScopeCodePropertyType'
          }, {
            name: 'extent',
            typeInfo: '.EXExtentPropertyType'
          }, {
            name: 'levelDescription',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDScopeDescriptionPropertyType'
          }]
      }, {
        localName: 'EXGeographicBoundingBoxType',
        typeName: 'EX_GeographicBoundingBox_Type',
        baseTypeInfo: '.AbstractEXGeographicExtentType',
        propertyInfos: [{
            name: 'westBoundLongitude',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.DecimalPropertyType'
          }, {
            name: 'eastBoundLongitude',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.DecimalPropertyType'
          }, {
            name: 'southBoundLatitude',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.DecimalPropertyType'
          }, {
            name: 'northBoundLatitude',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.DecimalPropertyType'
          }]
      }, {
        localName: 'DSInitiativeType',
        typeName: 'DS_Initiative_Type',
        baseTypeInfo: '.AbstractDSAggregateType'
      }, {
        localName: 'EXBoundingPolygonType',
        typeName: 'EX_BoundingPolygon_Type',
        baseTypeInfo: '.AbstractEXGeographicExtentType',
        propertyInfos: [{
            name: 'polygon',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gss.GMObjectPropertyType'
          }]
      }, {
        localName: 'PTLocaleType',
        typeName: 'PT_Locale_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'languageCode',
            required: true,
            typeInfo: '.LanguageCodePropertyType'
          }, {
            name: 'country',
            typeInfo: '.CountryPropertyType'
          }, {
            name: 'characterEncoding',
            required: true,
            typeInfo: '.MDCharacterSetCodePropertyType'
          }]
      }, {
        localName: 'MDMediumFormatCodePropertyType',
        typeName: 'MD_MediumFormatCode_PropertyType',
        propertyInfos: [{
            name: 'mdMediumFormatCode',
            required: true,
            elementName: 'MD_MediumFormatCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'CISeriesPropertyType',
        typeName: 'CI_Series_PropertyType',
        propertyInfos: [{
            name: 'ciSeries',
            required: true,
            elementName: 'CI_Series',
            typeInfo: '.CISeriesType'
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
        localName: 'AbstractDQElementType',
        typeName: 'AbstractDQ_Element_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'nameOfMeasure',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'measureIdentification',
            typeInfo: '.MDIdentifierPropertyType'
          }, {
            name: 'measureDescription',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'evaluationMethodType',
            typeInfo: '.DQEvaluationMethodTypeCodePropertyType'
          }, {
            name: 'evaluationMethodDescription',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'evaluationProcedure',
            typeInfo: '.CICitationPropertyType'
          }, {
            name: 'dateTime',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.DateTimePropertyType'
          }, {
            name: 'result',
            required: true,
            maxOccurs: 2,
            collection: true,
            typeInfo: '.DQResultPropertyType'
          }]
      }, {
        localName: 'AbstractRSReferenceSystemType',
        typeName: 'AbstractRS_ReferenceSystem_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            required: true,
            typeInfo: '.RSIdentifierPropertyType'
          }, {
            name: 'domainOfValidity',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EXExtentPropertyType'
          }]
      }, {
        localName: 'MDImagingConditionCodePropertyType',
        typeName: 'MD_ImagingConditionCode_PropertyType',
        propertyInfos: [{
            name: 'mdImagingConditionCode',
            required: true,
            elementName: 'MD_ImagingConditionCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'CIResponsiblePartyPropertyType',
        typeName: 'CI_ResponsibleParty_PropertyType',
        propertyInfos: [{
            name: 'ciResponsibleParty',
            required: true,
            elementName: 'CI_ResponsibleParty',
            typeInfo: '.CIResponsiblePartyType'
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
        localName: 'MDObligationCodePropertyType',
        typeName: 'MD_ObligationCode_PropertyType',
        propertyInfos: [{
            name: 'mdObligationCode',
            required: true,
            elementName: 'MD_ObligationCode',
            typeInfo: '.MDObligationCodeType'
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
        localName: 'LanguageCodePropertyType',
        typeName: 'LanguageCode_PropertyType',
        propertyInfos: [{
            name: 'languageCode',
            required: true,
            elementName: 'LanguageCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'AbstractDQPositionalAccuracyType',
        typeName: 'AbstractDQ_PositionalAccuracy_Type',
        baseTypeInfo: '.AbstractDQElementType'
      }, {
        localName: 'MDMaintenanceFrequencyCodePropertyType',
        typeName: 'MD_MaintenanceFrequencyCode_PropertyType',
        propertyInfos: [{
            name: 'mdMaintenanceFrequencyCode',
            required: true,
            elementName: 'MD_MaintenanceFrequencyCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'LISourceType',
        typeName: 'LI_Source_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'description',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'scaleDenominator',
            typeInfo: '.MDRepresentativeFractionPropertyType'
          }, {
            name: 'sourceReferenceSystem',
            typeInfo: '.MDReferenceSystemPropertyType'
          }, {
            name: 'sourceCitation',
            typeInfo: '.CICitationPropertyType'
          }, {
            name: 'sourceExtent',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EXExtentPropertyType'
          }, {
            name: 'sourceStep',
            minOccurs: 0,
            collection: true,
            typeInfo: '.LIProcessStepPropertyType'
          }]
      }, {
        localName: 'MDMediumPropertyType',
        typeName: 'MD_Medium_PropertyType',
        propertyInfos: [{
            name: 'mdMedium',
            required: true,
            elementName: 'MD_Medium',
            typeInfo: '.MDMediumType'
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
        localName: 'MDAggregateInformationType',
        typeName: 'MD_AggregateInformation_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'aggregateDataSetName',
            typeInfo: '.CICitationPropertyType'
          }, {
            name: 'aggregateDataSetIdentifier',
            typeInfo: '.MDIdentifierPropertyType'
          }, {
            name: 'associationType',
            required: true,
            typeInfo: '.DSAssociationTypeCodePropertyType'
          }, {
            name: 'initiativeType',
            typeInfo: '.DSInitiativeTypeCodePropertyType'
          }]
      }, {
        localName: 'DQTemporalConsistencyType',
        typeName: 'DQ_TemporalConsistency_Type',
        baseTypeInfo: '.AbstractDQTemporalAccuracyType'
      }, {
        localName: 'DSStereoMateType',
        typeName: 'DS_StereoMate_Type',
        baseTypeInfo: '.DSOtherAggregateType'
      }, {
        localName: 'RSIdentifierType',
        typeName: 'RS_Identifier_Type',
        baseTypeInfo: '.MDIdentifierType',
        propertyInfos: [{
            name: 'codeSpace',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'version',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'DQQuantitativeResultType',
        typeName: 'DQ_QuantitativeResult_Type',
        baseTypeInfo: '.AbstractDQResultType',
        propertyInfos: [{
            name: 'valueType',
            typeInfo: 'org_isotc211__2005_gco.RecordTypePropertyType'
          }, {
            name: 'valueUnit',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.UnitOfMeasurePropertyType'
          }, {
            name: 'errorStatistic',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'value',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.RecordPropertyType'
          }]
      }, {
        localName: 'DQCompletenessCommissionPropertyType',
        typeName: 'DQ_CompletenessCommission_PropertyType',
        propertyInfos: [{
            name: 'dqCompletenessCommission',
            required: true,
            elementName: 'DQ_CompletenessCommission',
            typeInfo: '.DQCompletenessCommissionType'
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
        localName: 'DQElementPropertyType',
        typeName: 'DQ_Element_PropertyType',
        propertyInfos: [{
            name: 'abstractDQElement',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractDQ_Element',
            typeInfo: '.AbstractDQElementType',
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
        localName: 'MDGridSpatialRepresentationType',
        typeName: 'MD_GridSpatialRepresentation_Type',
        baseTypeInfo: '.AbstractMDSpatialRepresentationType',
        propertyInfos: [{
            name: 'numberOfDimensions',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }, {
            name: 'axisDimensionProperties',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDDimensionPropertyType'
          }, {
            name: 'cellGeometry',
            required: true,
            typeInfo: '.MDCellGeometryCodePropertyType'
          }, {
            name: 'transformationParameterAvailability',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }]
      }, {
        localName: 'MDCoverageDescriptionPropertyType',
        typeName: 'MD_CoverageDescription_PropertyType',
        propertyInfos: [{
            name: 'mdCoverageDescription',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'MD_CoverageDescription',
            typeInfo: '.MDCoverageDescriptionType',
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
        localName: 'MDDataIdentificationPropertyType',
        typeName: 'MD_DataIdentification_PropertyType',
        propertyInfos: [{
            name: 'mdDataIdentification',
            required: true,
            elementName: 'MD_DataIdentification',
            typeInfo: '.MDDataIdentificationType'
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
        localName: 'DQRelativeInternalPositionalAccuracyPropertyType',
        typeName: 'DQ_RelativeInternalPositionalAccuracy_PropertyType',
        propertyInfos: [{
            name: 'dqRelativeInternalPositionalAccuracy',
            required: true,
            elementName: 'DQ_RelativeInternalPositionalAccuracy',
            typeInfo: '.DQRelativeInternalPositionalAccuracyType'
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
        localName: 'MDRestrictionCodePropertyType',
        typeName: 'MD_RestrictionCode_PropertyType',
        propertyInfos: [{
            name: 'mdRestrictionCode',
            required: true,
            elementName: 'MD_RestrictionCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDTopologyLevelCodePropertyType',
        typeName: 'MD_TopologyLevelCode_PropertyType',
        propertyInfos: [{
            name: 'mdTopologyLevelCode',
            required: true,
            elementName: 'MD_TopologyLevelCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDIdentificationPropertyType',
        typeName: 'MD_Identification_PropertyType',
        propertyInfos: [{
            name: 'abstractMDIdentification',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractMD_Identification',
            typeInfo: '.AbstractMDIdentificationType',
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
        localName: 'DSOtherAggregatePropertyType',
        typeName: 'DS_OtherAggregate_PropertyType',
        propertyInfos: [{
            name: 'dsOtherAggregate',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'DS_OtherAggregate',
            typeInfo: '.DSOtherAggregateType',
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
        localName: 'MDUsagePropertyType',
        typeName: 'MD_Usage_PropertyType',
        propertyInfos: [{
            name: 'mdUsage',
            required: true,
            elementName: 'MD_Usage',
            typeInfo: '.MDUsageType'
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
        localName: 'LILineageType',
        typeName: 'LI_Lineage_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'statement',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'processStep',
            minOccurs: 0,
            collection: true,
            typeInfo: '.LIProcessStepPropertyType'
          }, {
            name: 'source',
            minOccurs: 0,
            collection: true,
            typeInfo: '.LISourcePropertyType'
          }]
      }, {
        localName: 'MDRepresentativeFractionPropertyType',
        typeName: 'MD_RepresentativeFraction_PropertyType',
        propertyInfos: [{
            name: 'mdRepresentativeFraction',
            required: true,
            elementName: 'MD_RepresentativeFraction',
            typeInfo: '.MDRepresentativeFractionType'
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
        localName: 'DQAccuracyOfATimeMeasurementPropertyType',
        typeName: 'DQ_AccuracyOfATimeMeasurement_PropertyType',
        propertyInfos: [{
            name: 'dqAccuracyOfATimeMeasurement',
            required: true,
            elementName: 'DQ_AccuracyOfATimeMeasurement',
            typeInfo: '.DQAccuracyOfATimeMeasurementType'
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
        localName: 'MDMediumNameCodePropertyType',
        typeName: 'MD_MediumNameCode_PropertyType',
        propertyInfos: [{
            name: 'mdMediumNameCode',
            required: true,
            elementName: 'MD_MediumNameCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'AbstractDQThematicAccuracyType',
        typeName: 'AbstractDQ_ThematicAccuracy_Type',
        baseTypeInfo: '.AbstractDQElementType'
      }, {
        localName: 'MDDistributionType',
        typeName: 'MD_Distribution_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'distributionFormat',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDFormatPropertyType'
          }, {
            name: 'distributor',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDDistributorPropertyType'
          }, {
            name: 'transferOptions',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDDigitalTransferOptionsPropertyType'
          }]
      }, {
        localName: 'MDCharacterSetCodePropertyType',
        typeName: 'MD_CharacterSetCode_PropertyType',
        propertyInfos: [{
            name: 'mdCharacterSetCode',
            required: true,
            elementName: 'MD_CharacterSetCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'LIProcessStepPropertyType',
        typeName: 'LI_ProcessStep_PropertyType',
        propertyInfos: [{
            name: 'liProcessStep',
            required: true,
            elementName: 'LI_ProcessStep',
            typeInfo: '.LIProcessStepType'
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
        localName: 'EXExtentType',
        typeName: 'EX_Extent_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'description',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'geographicElement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EXGeographicExtentPropertyType'
          }, {
            name: 'temporalElement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EXTemporalExtentPropertyType'
          }, {
            name: 'verticalElement',
            minOccurs: 0,
            collection: true,
            typeInfo: '.EXVerticalExtentPropertyType'
          }]
      }, {
        localName: 'MDDatatypeCodePropertyType',
        typeName: 'MD_DatatypeCode_PropertyType',
        propertyInfos: [{
            name: 'mdDatatypeCode',
            required: true,
            elementName: 'MD_DatatypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDSpatialRepresentationTypeCodePropertyType',
        typeName: 'MD_SpatialRepresentationTypeCode_PropertyType',
        propertyInfos: [{
            name: 'mdSpatialRepresentationTypeCode',
            required: true,
            elementName: 'MD_SpatialRepresentationTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDDistributorType',
        typeName: 'MD_Distributor_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'distributorContact',
            required: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }, {
            name: 'distributionOrderProcess',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDStandardOrderProcessPropertyType'
          }, {
            name: 'distributorFormat',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDFormatPropertyType'
          }, {
            name: 'distributorTransferOptions',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDDigitalTransferOptionsPropertyType'
          }]
      }, {
        localName: 'EXExtentPropertyType',
        typeName: 'EX_Extent_PropertyType',
        propertyInfos: [{
            name: 'exExtent',
            required: true,
            elementName: 'EX_Extent',
            typeInfo: '.EXExtentType'
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
        localName: 'DSSensorType',
        typeName: 'DS_Sensor_Type',
        baseTypeInfo: '.DSSeriesType'
      }, {
        localName: 'DQFormatConsistencyType',
        typeName: 'DQ_FormatConsistency_Type',
        baseTypeInfo: '.AbstractDQLogicalConsistencyType'
      }, {
        localName: 'DQQuantitativeAttributeAccuracyType',
        typeName: 'DQ_QuantitativeAttributeAccuracy_Type',
        baseTypeInfo: '.AbstractDQThematicAccuracyType'
      }, {
        localName: 'MDIdentifierType',
        typeName: 'MD_Identifier_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'authority',
            typeInfo: '.CICitationPropertyType'
          }, {
            name: 'code',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDMetadataType',
        typeName: 'MD_Metadata_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'fileIdentifier',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'language',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'characterSet',
            typeInfo: '.MDCharacterSetCodePropertyType'
          }, {
            name: 'parentIdentifier',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'hierarchyLevel',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDScopeCodePropertyType'
          }, {
            name: 'hierarchyLevelName',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'contact',
            required: true,
            collection: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }, {
            name: 'dateStamp',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.DatePropertyType'
          }, {
            name: 'metadataStandardName',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'metadataStandardVersion',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'dataSetURI',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'locale',
            minOccurs: 0,
            collection: true,
            typeInfo: '.PTLocalePropertyType'
          }, {
            name: 'spatialRepresentationInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDSpatialRepresentationPropertyType'
          }, {
            name: 'referenceSystemInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDReferenceSystemPropertyType'
          }, {
            name: 'metadataExtensionInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDMetadataExtensionInformationPropertyType'
          }, {
            name: 'identificationInfo',
            required: true,
            collection: true,
            typeInfo: '.MDIdentificationPropertyType'
          }, {
            name: 'contentInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDContentInformationPropertyType'
          }, {
            name: 'distributionInfo',
            typeInfo: '.MDDistributionPropertyType'
          }, {
            name: 'dataQualityInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DQDataQualityPropertyType'
          }, {
            name: 'portrayalCatalogueInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDPortrayalCatalogueReferencePropertyType'
          }, {
            name: 'metadataConstraints',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDConstraintsPropertyType'
          }, {
            name: 'applicationSchemaInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDApplicationSchemaInformationPropertyType'
          }, {
            name: 'metadataMaintenance',
            typeInfo: '.MDMaintenanceInformationPropertyType'
          }, {
            name: 'series',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DSAggregatePropertyType'
          }, {
            name: 'describes',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DSDataSetPropertyType'
          }, {
            name: 'propertyType',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.ObjectReferencePropertyType'
          }, {
            name: 'featureType',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.ObjectReferencePropertyType'
          }, {
            name: 'featureAttribute',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.ObjectReferencePropertyType'
          }]
      }, {
        localName: 'AbstractDQCompletenessType',
        typeName: 'AbstractDQ_Completeness_Type',
        baseTypeInfo: '.AbstractDQElementType'
      }, {
        localName: 'MDMetadataExtensionInformationType',
        typeName: 'MD_MetadataExtensionInformation_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'extensionOnLineResource',
            typeInfo: '.CIOnlineResourcePropertyType'
          }, {
            name: 'extendedElementInformation',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDExtendedElementInformationPropertyType'
          }]
      }, {
        localName: 'DSAssociationTypeCodePropertyType',
        typeName: 'DS_AssociationTypeCode_PropertyType',
        propertyInfos: [{
            name: 'dsAssociationTypeCode',
            required: true,
            elementName: 'DS_AssociationTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'DSAssociationPropertyType',
        typeName: 'DS_Association_PropertyType',
        propertyInfos: [{
            name: 'dsAssociation',
            required: true,
            elementName: 'DS_Association',
            typeInfo: '.DSAssociationType'
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
        localName: 'DSProductionSeriesPropertyType',
        typeName: 'DS_ProductionSeries_PropertyType',
        propertyInfos: [{
            name: 'dsProductionSeries',
            required: true,
            elementName: 'DS_ProductionSeries',
            typeInfo: '.DSProductionSeriesType'
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
        localName: 'DQCompletenessOmissionPropertyType',
        typeName: 'DQ_CompletenessOmission_PropertyType',
        propertyInfos: [{
            name: 'dqCompletenessOmission',
            required: true,
            elementName: 'DQ_CompletenessOmission',
            typeInfo: '.DQCompletenessOmissionType'
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
        localName: 'DSOtherAggregateType',
        typeName: 'DS_OtherAggregate_Type',
        baseTypeInfo: '.AbstractDSAggregateType'
      }, {
        localName: 'DQTopologicalConsistencyType',
        typeName: 'DQ_TopologicalConsistency_Type',
        baseTypeInfo: '.AbstractDQLogicalConsistencyType'
      }, {
        localName: 'MDFormatType',
        typeName: 'MD_Format_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'version',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'amendmentNumber',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'specification',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'fileDecompressionTechnique',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'formatDistributor',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDDistributorPropertyType'
          }]
      }, {
        localName: 'AbstractDSAggregateType',
        typeName: 'AbstractDS_Aggregate_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'composedOf',
            required: true,
            collection: true,
            typeInfo: '.DSDataSetPropertyType'
          }, {
            name: 'seriesMetadata',
            required: true,
            collection: true,
            typeInfo: '.MDMetadataPropertyType'
          }, {
            name: 'subset',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DSAggregatePropertyType'
          }, {
            name: 'superset',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DSAggregatePropertyType'
          }]
      }, {
        localName: 'MDDimensionNameTypeCodePropertyType',
        typeName: 'MD_DimensionNameTypeCode_PropertyType',
        propertyInfos: [{
            name: 'mdDimensionNameTypeCode',
            required: true,
            elementName: 'MD_DimensionNameTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDDigitalTransferOptionsType',
        typeName: 'MD_DigitalTransferOptions_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'unitsOfDistribution',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'transferSize',
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'onLine',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CIOnlineResourcePropertyType'
          }, {
            name: 'offLine',
            typeInfo: '.MDMediumPropertyType'
          }]
      }, {
        localName: 'DSDataSetPropertyType',
        typeName: 'DS_DataSet_PropertyType',
        propertyInfos: [{
            name: 'dsDataSet',
            required: true,
            elementName: 'DS_DataSet',
            typeInfo: '.DSDataSetType'
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
        localName: 'DQTemporalValidityPropertyType',
        typeName: 'DQ_TemporalValidity_PropertyType',
        propertyInfos: [{
            name: 'dqTemporalValidity',
            required: true,
            elementName: 'DQ_TemporalValidity',
            typeInfo: '.DQTemporalValidityType'
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
        localName: 'PTFreeTextType',
        typeName: 'PT_FreeText_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'textGroup',
            required: true,
            collection: true,
            typeInfo: '.LocalisedCharacterStringPropertyType'
          }]
      }, {
        localName: 'MDGridSpatialRepresentationPropertyType',
        typeName: 'MD_GridSpatialRepresentation_PropertyType',
        propertyInfos: [{
            name: 'mdGridSpatialRepresentation',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'MD_GridSpatialRepresentation',
            typeInfo: '.MDGridSpatialRepresentationType',
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
        localName: 'MDScopeDescriptionType',
        typeName: 'MD_ScopeDescription_Type',
        propertyInfos: [{
            name: 'attributes',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.ObjectReferencePropertyType'
          }, {
            name: 'features',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.ObjectReferencePropertyType'
          }, {
            name: 'featureInstances',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.ObjectReferencePropertyType'
          }, {
            name: 'attributeInstances',
            required: true,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.ObjectReferencePropertyType'
          }, {
            name: 'dataset',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'other',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'DQDataQualityPropertyType',
        typeName: 'DQ_DataQuality_PropertyType',
        propertyInfos: [{
            name: 'dqDataQuality',
            required: true,
            elementName: 'DQ_DataQuality',
            typeInfo: '.DQDataQualityType'
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
        localName: 'MDKeywordTypeCodePropertyType',
        typeName: 'MD_KeywordTypeCode_PropertyType',
        propertyInfos: [{
            name: 'mdKeywordTypeCode',
            required: true,
            elementName: 'MD_KeywordTypeCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDReferenceSystemType',
        typeName: 'MD_ReferenceSystem_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'referenceSystemIdentifier',
            typeInfo: '.RSIdentifierPropertyType'
          }]
      }, {
        localName: 'MDVectorSpatialRepresentationType',
        typeName: 'MD_VectorSpatialRepresentation_Type',
        baseTypeInfo: '.AbstractMDSpatialRepresentationType',
        propertyInfos: [{
            name: 'topologyLevel',
            typeInfo: '.MDTopologyLevelCodePropertyType'
          }, {
            name: 'geometricObjects',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDGeometricObjectsPropertyType'
          }]
      }, {
        localName: 'MDFeatureCatalogueDescriptionPropertyType',
        typeName: 'MD_FeatureCatalogueDescription_PropertyType',
        propertyInfos: [{
            name: 'mdFeatureCatalogueDescription',
            required: true,
            elementName: 'MD_FeatureCatalogueDescription',
            typeInfo: '.MDFeatureCatalogueDescriptionType'
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
        localName: 'MDGeometricObjectsPropertyType',
        typeName: 'MD_GeometricObjects_PropertyType',
        propertyInfos: [{
            name: 'mdGeometricObjects',
            required: true,
            elementName: 'MD_GeometricObjects',
            typeInfo: '.MDGeometricObjectsType'
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
        localName: 'DQConformanceResultType',
        typeName: 'DQ_ConformanceResult_Type',
        baseTypeInfo: '.AbstractDQResultType',
        propertyInfos: [{
            name: 'specification',
            required: true,
            typeInfo: '.CICitationPropertyType'
          }, {
            name: 'explanation',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'pass',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }]
      }, {
        localName: 'DQGriddedDataPositionalAccuracyPropertyType',
        typeName: 'DQ_GriddedDataPositionalAccuracy_PropertyType',
        propertyInfos: [{
            name: 'dqGriddedDataPositionalAccuracy',
            required: true,
            elementName: 'DQ_GriddedDataPositionalAccuracy',
            typeInfo: '.DQGriddedDataPositionalAccuracyType'
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
        localName: 'EXTemporalExtentType',
        typeName: 'EX_TemporalExtent_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'extent',
            required: true,
            typeInfo: 'org_isotc211__2005_gts.TMPrimitivePropertyType'
          }]
      }, {
        localName: 'MDStandardOrderProcessType',
        typeName: 'MD_StandardOrderProcess_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'fees',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'plannedAvailableDateTime',
            typeInfo: 'org_isotc211__2005_gco.DateTimePropertyType'
          }, {
            name: 'orderingInstructions',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'turnaround',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDBrowseGraphicPropertyType',
        typeName: 'MD_BrowseGraphic_PropertyType',
        propertyInfos: [{
            name: 'mdBrowseGraphic',
            required: true,
            elementName: 'MD_BrowseGraphic',
            typeInfo: '.MDBrowseGraphicType'
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
        localName: 'MDDimensionType',
        typeName: 'MD_Dimension_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'dimensionName',
            required: true,
            typeInfo: '.MDDimensionNameTypeCodePropertyType'
          }, {
            name: 'dimensionSize',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }, {
            name: 'resolution',
            typeInfo: 'org_isotc211__2005_gco.MeasurePropertyType'
          }]
      }, {
        localName: 'MDBandPropertyType',
        typeName: 'MD_Band_PropertyType',
        propertyInfos: [{
            name: 'mdBand',
            required: true,
            elementName: 'MD_Band',
            typeInfo: '.MDBandType'
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
        localName: 'MDApplicationSchemaInformationType',
        typeName: 'MD_ApplicationSchemaInformation_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            required: true,
            typeInfo: '.CICitationPropertyType'
          }, {
            name: 'schemaLanguage',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'constraintLanguage',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'schemaAscii',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'graphicsFile',
            typeInfo: 'org_isotc211__2005_gco.BinaryPropertyType'
          }, {
            name: 'softwareDevelopmentFile',
            typeInfo: 'org_isotc211__2005_gco.BinaryPropertyType'
          }, {
            name: 'softwareDevelopmentFileFormat',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDExtendedElementInformationPropertyType',
        typeName: 'MD_ExtendedElementInformation_PropertyType',
        propertyInfos: [{
            name: 'mdExtendedElementInformation',
            required: true,
            elementName: 'MD_ExtendedElementInformation',
            typeInfo: '.MDExtendedElementInformationType'
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
        localName: 'MDFormatPropertyType',
        typeName: 'MD_Format_PropertyType',
        propertyInfos: [{
            name: 'mdFormat',
            required: true,
            elementName: 'MD_Format',
            typeInfo: '.MDFormatType'
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
        localName: 'CICitationType',
        typeName: 'CI_Citation_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'title',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'alternateTitle',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'date',
            required: true,
            collection: true,
            typeInfo: '.CIDatePropertyType'
          }, {
            name: 'edition',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'editionDate',
            typeInfo: 'org_isotc211__2005_gco.DatePropertyType'
          }, {
            name: 'identifier',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDIdentifierPropertyType'
          }, {
            name: 'citedResponsibleParty',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }, {
            name: 'presentationForm',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CIPresentationFormCodePropertyType'
          }, {
            name: 'series',
            typeInfo: '.CISeriesPropertyType'
          }, {
            name: 'otherCitationDetails',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'collectiveTitle',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'isbn',
            elementName: 'ISBN',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'issn',
            elementName: 'ISSN',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDFeatureCatalogueDescriptionType',
        typeName: 'MD_FeatureCatalogueDescription_Type',
        baseTypeInfo: '.AbstractMDContentInformationType',
        propertyInfos: [{
            name: 'complianceCode',
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'language',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'includedWithDataset',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }, {
            name: 'featureTypes',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.GenericNamePropertyType'
          }, {
            name: 'featureCatalogueCitation',
            required: true,
            collection: true,
            typeInfo: '.CICitationPropertyType'
          }]
      }, {
        localName: 'RSReferenceSystemPropertyType',
        typeName: 'RS_ReferenceSystem_PropertyType',
        propertyInfos: [{
            name: 'abstractRSReferenceSystem',
            required: true,
            elementName: 'AbstractRS_ReferenceSystem',
            typeInfo: '.AbstractRSReferenceSystemType'
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
        localName: 'MDMaintenanceInformationType',
        typeName: 'MD_MaintenanceInformation_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'maintenanceAndUpdateFrequency',
            required: true,
            typeInfo: '.MDMaintenanceFrequencyCodePropertyType'
          }, {
            name: 'dateOfNextUpdate',
            typeInfo: 'org_isotc211__2005_gco.DatePropertyType'
          }, {
            name: 'userDefinedMaintenanceFrequency',
            typeInfo: 'org_isotc211__2005_gts.TMPeriodDurationPropertyType'
          }, {
            name: 'updateScope',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDScopeCodePropertyType'
          }, {
            name: 'updateScopeDescription',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDScopeDescriptionPropertyType'
          }, {
            name: 'maintenanceNote',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'contact',
            minOccurs: 0,
            collection: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }]
      }, {
        localName: 'DQFormatConsistencyPropertyType',
        typeName: 'DQ_FormatConsistency_PropertyType',
        propertyInfos: [{
            name: 'dqFormatConsistency',
            required: true,
            elementName: 'DQ_FormatConsistency',
            typeInfo: '.DQFormatConsistencyType'
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
        localName: 'DQTemporalValidityType',
        typeName: 'DQ_TemporalValidity_Type',
        baseTypeInfo: '.AbstractDQTemporalAccuracyType'
      }, {
        localName: 'DSInitiativePropertyType',
        typeName: 'DS_Initiative_PropertyType',
        propertyInfos: [{
            name: 'dsInitiative',
            required: true,
            elementName: 'DS_Initiative',
            typeInfo: '.DSInitiativeType'
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
        localName: 'MDScopeDescriptionPropertyType',
        typeName: 'MD_ScopeDescription_PropertyType',
        propertyInfos: [{
            name: 'mdScopeDescription',
            required: true,
            elementName: 'MD_ScopeDescription',
            typeInfo: '.MDScopeDescriptionType'
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
        localName: 'CIAddressPropertyType',
        typeName: 'CI_Address_PropertyType',
        propertyInfos: [{
            name: 'ciAddress',
            required: true,
            elementName: 'CI_Address',
            typeInfo: '.CIAddressType'
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
        localName: 'MDCellGeometryCodePropertyType',
        typeName: 'MD_CellGeometryCode_PropertyType',
        propertyInfos: [{
            name: 'mdCellGeometryCode',
            required: true,
            elementName: 'MD_CellGeometryCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'MDServiceIdentificationType',
        typeName: 'MD_ServiceIdentification_Type',
        baseTypeInfo: '.AbstractMDIdentificationType'
      }, {
        localName: 'URLPropertyType',
        typeName: 'URL_PropertyType',
        propertyInfos: [{
            name: 'url',
            required: true,
            elementName: 'URL'
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
        localName: 'LISourcePropertyType',
        typeName: 'LI_Source_PropertyType',
        propertyInfos: [{
            name: 'liSource',
            required: true,
            elementName: 'LI_Source',
            typeInfo: '.LISourceType'
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
        localName: 'MDLegalConstraintsType',
        typeName: 'MD_LegalConstraints_Type',
        baseTypeInfo: '.MDConstraintsType',
        propertyInfos: [{
            name: 'accessConstraints',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDRestrictionCodePropertyType'
          }, {
            name: 'useConstraints',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDRestrictionCodePropertyType'
          }, {
            name: 'otherConstraints',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'DSDataSetType',
        typeName: 'DS_DataSet_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'has',
            required: true,
            collection: true,
            typeInfo: '.MDMetadataPropertyType'
          }, {
            name: 'partOf',
            minOccurs: 0,
            collection: true,
            typeInfo: '.DSAggregatePropertyType'
          }]
      }, {
        localName: 'PTLocaleContainerType',
        typeName: 'PT_LocaleContainer_Type',
        propertyInfos: [{
            name: 'description',
            required: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'locale',
            required: true,
            typeInfo: '.PTLocalePropertyType'
          }, {
            name: 'date',
            required: true,
            collection: true,
            typeInfo: '.CIDatePropertyType'
          }, {
            name: 'responsibleParty',
            required: true,
            collection: true,
            typeInfo: '.CIResponsiblePartyPropertyType'
          }, {
            name: 'localisedString',
            required: true,
            collection: true,
            typeInfo: '.LocalisedCharacterStringPropertyType'
          }]
      }, {
        localName: 'MDDistributionUnitsPropertyType',
        typeName: 'MD_DistributionUnits_PropertyType',
        propertyInfos: [{
            name: 'mdDistributionUnits',
            required: true,
            elementName: 'MD_DistributionUnits',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'AbstractDQLogicalConsistencyType',
        typeName: 'AbstractDQ_LogicalConsistency_Type',
        baseTypeInfo: '.AbstractDQElementType'
      }, {
        localName: 'RSIdentifierPropertyType',
        typeName: 'RS_Identifier_PropertyType',
        propertyInfos: [{
            name: 'rsIdentifier',
            required: true,
            elementName: 'RS_Identifier',
            typeInfo: '.RSIdentifierType'
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
        localName: 'DQTopologicalConsistencyPropertyType',
        typeName: 'DQ_TopologicalConsistency_PropertyType',
        propertyInfos: [{
            name: 'dqTopologicalConsistency',
            required: true,
            elementName: 'DQ_TopologicalConsistency',
            typeInfo: '.DQTopologicalConsistencyType'
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
        localName: 'MDRangeDimensionType',
        typeName: 'MD_RangeDimension_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'sequenceIdentifier',
            typeInfo: 'org_isotc211__2005_gco.MemberNamePropertyType'
          }, {
            name: 'descriptor',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDMaintenanceInformationPropertyType',
        typeName: 'MD_MaintenanceInformation_PropertyType',
        propertyInfos: [{
            name: 'mdMaintenanceInformation',
            required: true,
            elementName: 'MD_MaintenanceInformation',
            typeInfo: '.MDMaintenanceInformationType'
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
        localName: 'DQGriddedDataPositionalAccuracyType',
        typeName: 'DQ_GriddedDataPositionalAccuracy_Type',
        baseTypeInfo: '.AbstractDQPositionalAccuracyType'
      }, {
        localName: 'DQLogicalConsistencyPropertyType',
        typeName: 'DQ_LogicalConsistency_PropertyType',
        propertyInfos: [{
            name: 'abstractDQLogicalConsistency',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractDQ_LogicalConsistency',
            typeInfo: '.AbstractDQLogicalConsistencyType',
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
        localName: 'AbstractDQResultType',
        typeName: 'AbstractDQ_Result_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType'
      }, {
        localName: 'AbstractMDSpatialRepresentationType',
        typeName: 'AbstractMD_SpatialRepresentation_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType'
      }, {
        localName: 'MDClassificationCodePropertyType',
        typeName: 'MD_ClassificationCode_PropertyType',
        propertyInfos: [{
            name: 'mdClassificationCode',
            required: true,
            elementName: 'MD_ClassificationCode',
            typeInfo: 'org_isotc211__2005_gco.CodeListValueType'
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
        localName: 'DQDomainConsistencyPropertyType',
        typeName: 'DQ_DomainConsistency_PropertyType',
        propertyInfos: [{
            name: 'dqDomainConsistency',
            required: true,
            elementName: 'DQ_DomainConsistency',
            typeInfo: '.DQDomainConsistencyType'
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
        localName: 'MDDimensionPropertyType',
        typeName: 'MD_Dimension_PropertyType',
        propertyInfos: [{
            name: 'mdDimension',
            required: true,
            elementName: 'MD_Dimension',
            typeInfo: '.MDDimensionType'
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
        localName: 'MDMediumType',
        typeName: 'MD_Medium_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'name',
            typeInfo: '.MDMediumNameCodePropertyType'
          }, {
            name: 'density',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.RealPropertyType'
          }, {
            name: 'densityUnits',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'volumes',
            typeInfo: 'org_isotc211__2005_gco.IntegerPropertyType'
          }, {
            name: 'mediumFormat',
            minOccurs: 0,
            collection: true,
            typeInfo: '.MDMediumFormatCodePropertyType'
          }, {
            name: 'mediumNote',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'AbstractEXGeographicExtentType',
        typeName: 'AbstractEX_GeographicExtent_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'extentTypeCode',
            typeInfo: 'org_isotc211__2005_gco.BooleanPropertyType'
          }]
      }, {
        localName: 'EXGeographicDescriptionType',
        typeName: 'EX_GeographicDescription_Type',
        baseTypeInfo: '.AbstractEXGeographicExtentType',
        propertyInfos: [{
            name: 'geographicIdentifier',
            required: true,
            typeInfo: '.MDIdentifierPropertyType'
          }]
      }, {
        localName: 'MDMetadataExtensionInformationPropertyType',
        typeName: 'MD_MetadataExtensionInformation_PropertyType',
        propertyInfos: [{
            name: 'mdMetadataExtensionInformation',
            required: true,
            elementName: 'MD_MetadataExtensionInformation',
            typeInfo: '.MDMetadataExtensionInformationType'
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
        localName: 'CIOnlineResourceType',
        typeName: 'CI_OnlineResource_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'linkage',
            required: true,
            typeInfo: '.URLPropertyType'
          }, {
            name: 'protocol',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'applicationProfile',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'name',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'description',
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }, {
            name: 'function',
            typeInfo: '.CIOnLineFunctionCodePropertyType'
          }]
      }, {
        localName: 'DQTemporalAccuracyPropertyType',
        typeName: 'DQ_TemporalAccuracy_PropertyType',
        propertyInfos: [{
            name: 'abstractDQTemporalAccuracy',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'AbstractDQ_TemporalAccuracy',
            typeInfo: '.AbstractDQTemporalAccuracyType',
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
        localName: 'MDConstraintsType',
        typeName: 'MD_Constraints_Type',
        baseTypeInfo: 'org_isotc211__2005_gco.AbstractObjectType',
        propertyInfos: [{
            name: 'useLimitation',
            minOccurs: 0,
            collection: true,
            typeInfo: 'org_isotc211__2005_gco.CharacterStringPropertyType'
          }]
      }, {
        localName: 'MDReferenceSystemPropertyType',
        typeName: 'MD_ReferenceSystem_PropertyType',
        propertyInfos: [{
            name: 'mdReferenceSystem',
            required: true,
            elementName: 'MD_ReferenceSystem',
            typeInfo: '.MDReferenceSystemType'
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
        localName: 'DSSeriesType',
        typeName: 'DS_Series_Type',
        baseTypeInfo: '.AbstractDSAggregateType'
      }, {
        localName: 'MDAggregateInformationPropertyType',
        typeName: 'MD_AggregateInformation_PropertyType',
        propertyInfos: [{
            name: 'mdAggregateInformation',
            required: true,
            elementName: 'MD_AggregateInformation',
            typeInfo: '.MDAggregateInformationType'
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
        localName: 'DQDomainConsistencyType',
        typeName: 'DQ_DomainConsistency_Type',
        baseTypeInfo: '.AbstractDQLogicalConsistencyType'
      }, {
        type: 'enumInfo',
        localName: 'MDTopicCategoryCodeType',
        values: ['farming', 'biota', 'boundaries', 'climatologyMeteorologyAtmosphere', 'economy', 'elevation', 'environment', 'geoscientificInformation', 'health', 'imageryBaseMapsEarthCover', 'intelligenceMilitary', 'inlandWaters', 'location', 'oceans', 'planningCadastre', 'society', 'structure', 'transportation', 'utilitiesCommunication']
      }, {
        type: 'enumInfo',
        localName: 'MDPixelOrientationCodeType',
        values: ['center', 'lowerLeft', 'lowerRight', 'upperRight', 'upperLeft']
      }, {
        type: 'enumInfo',
        localName: 'MDObligationCodeType',
        values: ['mandatory', 'optional', 'conditional']
      }],
    elementInfos: [{
        typeInfo: '.AbstractDQResultType',
        elementName: 'AbstractDQ_Result'
      }, {
        typeInfo: '.EXSpatialTemporalExtentType',
        elementName: 'EX_SpatialTemporalExtent',
        substitutionHead: 'EX_TemporalExtent'
      }, {
        typeInfo: '.AbstractRSReferenceSystemType',
        elementName: 'AbstractRS_ReferenceSystem'
      }, {
        typeInfo: '.MDKeywordsType',
        elementName: 'MD_Keywords'
      }, {
        typeInfo: '.MDObligationCodeType',
        elementName: 'MD_ObligationCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.DQAbsoluteExternalPositionalAccuracyType',
        elementName: 'DQ_AbsoluteExternalPositionalAccuracy',
        substitutionHead: 'AbstractDQ_PositionalAccuracy'
      }, {
        typeInfo: '.DSDataSetType',
        elementName: 'DS_DataSet'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_ProgressCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.LIProcessStepType',
        elementName: 'LI_ProcessStep'
      }, {
        typeInfo: '.MDMetadataType',
        elementName: 'MD_Metadata'
      }, {
        typeInfo: '.EXTemporalExtentType',
        elementName: 'EX_TemporalExtent'
      }, {
        typeInfo: '.DSOtherAggregateType',
        elementName: 'DS_OtherAggregate',
        substitutionHead: 'AbstractDS_Aggregate'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_TopologyLevelCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_CellGeometryCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_MaintenanceFrequencyCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.MDGridSpatialRepresentationType',
        elementName: 'MD_GridSpatialRepresentation',
        substitutionHead: 'AbstractMD_SpatialRepresentation'
      }, {
        typeInfo: '.MDGeoreferenceableType',
        elementName: 'MD_Georeferenceable',
        substitutionHead: 'MD_GridSpatialRepresentation'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_DistributionUnits',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.CIDateType',
        elementName: 'CI_Date'
      }, {
        typeInfo: '.MDImageDescriptionType',
        elementName: 'MD_ImageDescription',
        substitutionHead: 'MD_CoverageDescription'
      }, {
        typeInfo: '.DSSensorType',
        elementName: 'DS_Sensor',
        substitutionHead: 'DS_Series'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'LanguageCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'CI_PresentationFormCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'DS_InitiativeTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.MDGeorectifiedType',
        elementName: 'MD_Georectified',
        substitutionHead: 'MD_GridSpatialRepresentation'
      }, {
        typeInfo: '.MDMetadataExtensionInformationType',
        elementName: 'MD_MetadataExtensionInformation'
      }, {
        typeInfo: '.DQConformanceResultType',
        elementName: 'DQ_ConformanceResult',
        substitutionHead: 'AbstractDQ_Result'
      }, {
        typeInfo: '.EXExtentType',
        elementName: 'EX_Extent'
      }, {
        typeInfo: '.DSPlatformType',
        elementName: 'DS_Platform',
        substitutionHead: 'DS_Series'
      }, {
        typeInfo: '.DQFormatConsistencyType',
        elementName: 'DQ_FormatConsistency',
        substitutionHead: 'AbstractDQ_LogicalConsistency'
      }, {
        typeInfo: '.DSSeriesType',
        elementName: 'DS_Series',
        substitutionHead: 'AbstractDS_Aggregate'
      }, {
        typeInfo: '.CITelephoneType',
        elementName: 'CI_Telephone'
      }, {
        typeInfo: '.AbstractDQCompletenessType',
        elementName: 'AbstractDQ_Completeness',
        substitutionHead: 'AbstractDQ_Element'
      }, {
        typeInfo: '.CISeriesType',
        elementName: 'CI_Series'
      }, {
        typeInfo: '.MDCoverageDescriptionType',
        elementName: 'MD_CoverageDescription',
        substitutionHead: 'AbstractMD_ContentInformation'
      }, {
        typeInfo: '.AbstractDQTemporalAccuracyType',
        elementName: 'AbstractDQ_TemporalAccuracy',
        substitutionHead: 'AbstractDQ_Element'
      }, {
        typeInfo: '.DQQuantitativeResultType',
        elementName: 'DQ_QuantitativeResult',
        substitutionHead: 'AbstractDQ_Result'
      }, {
        typeInfo: '.MDGeometricObjectsType',
        elementName: 'MD_GeometricObjects'
      }, {
        typeInfo: '.AbstractMDContentInformationType',
        elementName: 'AbstractMD_ContentInformation'
      }, {
        typeInfo: '.DQQuantitativeAttributeAccuracyType',
        elementName: 'DQ_QuantitativeAttributeAccuracy',
        substitutionHead: 'AbstractDQ_ThematicAccuracy'
      }, {
        typeInfo: '.EXVerticalExtentType',
        elementName: 'EX_VerticalExtent'
      }, {
        typeInfo: '.LISourceType',
        elementName: 'LI_Source'
      }, {
        typeInfo: '.MDBrowseGraphicType',
        elementName: 'MD_BrowseGraphic'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_DimensionNameTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.DSStereoMateType',
        elementName: 'DS_StereoMate',
        substitutionHead: 'DS_OtherAggregate'
      }, {
        typeInfo: '.EXBoundingPolygonType',
        elementName: 'EX_BoundingPolygon',
        substitutionHead: 'AbstractEX_GeographicExtent'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'CI_RoleCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_SpatialRepresentationTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.AbstractDQThematicAccuracyType',
        elementName: 'AbstractDQ_ThematicAccuracy',
        substitutionHead: 'AbstractDQ_Element'
      }, {
        typeInfo: '.CIAddressType',
        elementName: 'CI_Address'
      }, {
        typeInfo: '.MDExtendedElementInformationType',
        elementName: 'MD_ExtendedElementInformation'
      }, {
        typeInfo: '.CICitationType',
        elementName: 'CI_Citation'
      }, {
        typeInfo: '.MDAggregateInformationType',
        elementName: 'MD_AggregateInformation'
      }, {
        typeInfo: '.MDPixelOrientationCodeType',
        elementName: 'MD_PixelOrientationCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.DQNonQuantitativeAttributeAccuracyType',
        elementName: 'DQ_NonQuantitativeAttributeAccuracy',
        substitutionHead: 'AbstractDQ_ThematicAccuracy'
      }, {
        typeInfo: '.MDMediumType',
        elementName: 'MD_Medium'
      }, {
        typeInfo: '.MDBandType',
        elementName: 'MD_Band',
        substitutionHead: 'MD_RangeDimension'
      }, {
        typeInfo: '.EXGeographicDescriptionType',
        elementName: 'EX_GeographicDescription',
        substitutionHead: 'AbstractEX_GeographicExtent'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'CI_DateTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.DQThematicClassificationCorrectnessType',
        elementName: 'DQ_ThematicClassificationCorrectness',
        substitutionHead: 'AbstractDQ_ThematicAccuracy'
      }, {
        typeInfo: '.DQGriddedDataPositionalAccuracyType',
        elementName: 'DQ_GriddedDataPositionalAccuracy',
        substitutionHead: 'AbstractDQ_PositionalAccuracy'
      }, {
        typeInfo: '.CIResponsiblePartyType',
        elementName: 'CI_ResponsibleParty'
      }, {
        typeInfo: '.MDReferenceSystemType',
        elementName: 'MD_ReferenceSystem'
      }, {
        typeInfo: '.DQConceptualConsistencyType',
        elementName: 'DQ_ConceptualConsistency',
        substitutionHead: 'AbstractDQ_LogicalConsistency'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_ClassificationCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.MDFeatureCatalogueDescriptionType',
        elementName: 'MD_FeatureCatalogueDescription',
        substitutionHead: 'AbstractMD_ContentInformation'
      }, {
        typeInfo: '.DSInitiativeType',
        elementName: 'DS_Initiative',
        substitutionHead: 'AbstractDS_Aggregate'
      }, {
        typeInfo: '.DQCompletenessCommissionType',
        elementName: 'DQ_CompletenessCommission',
        substitutionHead: 'AbstractDQ_Completeness'
      }, {
        typeInfo: '.MDRepresentativeFractionType',
        elementName: 'MD_RepresentativeFraction'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'DS_AssociationTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.AbstractEXGeographicExtentType',
        elementName: 'AbstractEX_GeographicExtent'
      }, {
        typeInfo: '.MDTopicCategoryCodeType',
        elementName: 'MD_TopicCategoryCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_KeywordTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.MDDigitalTransferOptionsType',
        elementName: 'MD_DigitalTransferOptions'
      }, {
        typeInfo: '.MDUsageType',
        elementName: 'MD_Usage'
      }, {
        typeInfo: '.CIContactType',
        elementName: 'CI_Contact'
      }, {
        typeInfo: '.DQScopeType',
        elementName: 'DQ_Scope'
      }, {
        typeInfo: '.MDApplicationSchemaInformationType',
        elementName: 'MD_ApplicationSchemaInformation'
      }, {
        typeInfo: '.MDStandardOrderProcessType',
        elementName: 'MD_StandardOrderProcess'
      }, {
        typeInfo: '.MDConstraintsType',
        elementName: 'MD_Constraints'
      }, {
        typeInfo: '.AbstractMDIdentificationType',
        elementName: 'AbstractMD_Identification'
      }, {
        typeInfo: '.DSAssociationType',
        elementName: 'DS_Association'
      }, {
        typeInfo: '.DQCompletenessOmissionType',
        elementName: 'DQ_CompletenessOmission',
        substitutionHead: 'AbstractDQ_Completeness'
      }, {
        typeInfo: '.MDIdentifierType',
        elementName: 'MD_Identifier'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_CharacterSetCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.MDDataIdentificationType',
        elementName: 'MD_DataIdentification',
        substitutionHead: 'AbstractMD_Identification'
      }, {
        typeInfo: '.PTLocaleContainerType',
        elementName: 'PT_LocaleContainer'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'Country',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.DQTopologicalConsistencyType',
        elementName: 'DQ_TopologicalConsistency',
        substitutionHead: 'AbstractDQ_LogicalConsistency'
      }, {
        typeInfo: '.MDDistributorType',
        elementName: 'MD_Distributor'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_MediumFormatCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.DQRelativeInternalPositionalAccuracyType',
        elementName: 'DQ_RelativeInternalPositionalAccuracy',
        substitutionHead: 'AbstractDQ_PositionalAccuracy'
      }, {
        typeInfo: '.DQAccuracyOfATimeMeasurementType',
        elementName: 'DQ_AccuracyOfATimeMeasurement',
        substitutionHead: 'AbstractDQ_TemporalAccuracy'
      }, {
        typeInfo: '.CIOnlineResourceType',
        elementName: 'CI_OnlineResource'
      }, {
        typeInfo: '.MDRangeDimensionType',
        elementName: 'MD_RangeDimension'
      }, {
        typeInfo: '.MDServiceIdentificationType',
        elementName: 'MD_ServiceIdentification',
        substitutionHead: 'AbstractMD_Identification'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_RestrictionCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.LocalisedCharacterStringType',
        elementName: 'LocalisedCharacterString',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.MDPortrayalCatalogueReferenceType',
        elementName: 'MD_PortrayalCatalogueReference'
      }, {
        typeInfo: '.LILineageType',
        elementName: 'LI_Lineage'
      }, {
        typeInfo: '.DQDataQualityType',
        elementName: 'DQ_DataQuality'
      }, {
        elementName: 'URL'
      }, {
        typeInfo: '.MDLegalConstraintsType',
        elementName: 'MD_LegalConstraints',
        substitutionHead: 'MD_Constraints'
      }, {
        typeInfo: '.MDDistributionType',
        elementName: 'MD_Distribution'
      }, {
        typeInfo: '.PTLocaleType',
        elementName: 'PT_Locale'
      }, {
        typeInfo: '.MDResolutionType',
        elementName: 'MD_Resolution'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_GeometricObjectTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_ScopeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'CI_OnLineFunctionCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_MediumNameCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.DQTemporalValidityType',
        elementName: 'DQ_TemporalValidity',
        substitutionHead: 'AbstractDQ_TemporalAccuracy'
      }, {
        typeInfo: '.MDDimensionType',
        elementName: 'MD_Dimension'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_ImagingConditionCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.AbstractDSAggregateType',
        elementName: 'AbstractDS_Aggregate'
      }, {
        typeInfo: '.AbstractMDSpatialRepresentationType',
        elementName: 'AbstractMD_SpatialRepresentation'
      }, {
        typeInfo: '.AbstractDQElementType',
        elementName: 'AbstractDQ_Element'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'DQ_EvaluationMethodTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.MDVectorSpatialRepresentationType',
        elementName: 'MD_VectorSpatialRepresentation',
        substitutionHead: 'AbstractMD_SpatialRepresentation'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_CoverageContentTypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.PTFreeTextType',
        elementName: 'PT_FreeText'
      }, {
        typeInfo: '.EXGeographicBoundingBoxType',
        elementName: 'EX_GeographicBoundingBox',
        substitutionHead: 'AbstractEX_GeographicExtent'
      }, {
        typeInfo: '.MDSecurityConstraintsType',
        elementName: 'MD_SecurityConstraints',
        substitutionHead: 'MD_Constraints'
      }, {
        typeInfo: '.DSProductionSeriesType',
        elementName: 'DS_ProductionSeries',
        substitutionHead: 'DS_Series'
      }, {
        typeInfo: '.DQTemporalConsistencyType',
        elementName: 'DQ_TemporalConsistency',
        substitutionHead: 'AbstractDQ_TemporalAccuracy'
      }, {
        typeInfo: '.AbstractDQLogicalConsistencyType',
        elementName: 'AbstractDQ_LogicalConsistency',
        substitutionHead: 'AbstractDQ_Element'
      }, {
        typeInfo: '.RSIdentifierType',
        elementName: 'RS_Identifier',
        substitutionHead: 'MD_Identifier'
      }, {
        typeInfo: '.AbstractDQPositionalAccuracyType',
        elementName: 'AbstractDQ_PositionalAccuracy',
        substitutionHead: 'AbstractDQ_Element'
      }, {
        typeInfo: '.DQDomainConsistencyType',
        elementName: 'DQ_DomainConsistency',
        substitutionHead: 'AbstractDQ_LogicalConsistency'
      }, {
        typeInfo: 'org_isotc211__2005_gco.CodeListValueType',
        elementName: 'MD_DatatypeCode',
        substitutionHead: {
          localPart: 'CharacterString',
          namespaceURI: 'http:\/\/www.isotc211.org\/2005\/gco'
        }
      }, {
        typeInfo: '.MDMaintenanceInformationType',
        elementName: 'MD_MaintenanceInformation'
      }, {
        typeInfo: '.MDScopeDescriptionType',
        elementName: 'MD_ScopeDescription'
      }, {
        typeInfo: '.MDFormatType',
        elementName: 'MD_Format'
      }]
  };
  return {
    org_isotc211__2005_gmd: org_isotc211__2005_gmd
  };
};
if (typeof define === 'function' && define.amd) {
  define([], org_isotc211__2005_gmd_Module_Factory);
}
else {
  var org_isotc211__2005_gmd_Module = org_isotc211__2005_gmd_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.org_isotc211__2005_gmd = org_isotc211__2005_gmd_Module.org_isotc211__2005_gmd;
  }
  else {
    var org_isotc211__2005_gmd = org_isotc211__2005_gmd_Module.org_isotc211__2005_gmd;
  }
}