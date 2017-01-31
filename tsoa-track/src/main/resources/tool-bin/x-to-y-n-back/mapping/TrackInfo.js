var TrackInfo_Module_Factory = function () {
  var TrackInfo = {
    name: 'TrackInfo',
    defaultElementNamespaceURI: 'https:\/\/tsoa.example.mil\/tsoa\/track',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['disa_udop_tracks__1_0_ea', 'NiemCore_TrackInfo', 'NiemProxyXd_TrackInfo', 'NiemMilitaryoperations_TrackInfo', 'NiemStructures_TrackInfo', 'disa_udop_tracks__1_0_lib', 'disa_udop_tracks__1_0_genlib', 'gov_niem_release_niem_domains_cbrn__3'],
    typeInfos: [{
        localName: 'TrackAugmentationType',
        baseTypeInfo: 'NiemStructures_TrackInfo.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'environmentCategoryCode',
            elementName: {
              localPart: 'EnvironmentCategoryCode',
              namespaceURI: 'urn:disa:udop.tracks:1.0:genLib'
            },
            typeInfo: 'disa_udop_tracks__1_0_genlib.EnvironmentCategoryCodeType'
          }, {
            name: 'trackThreat',
            elementName: 'TrackThreat',
            typeInfo: 'NiemMilitaryoperations_TrackInfo.StandardIdentityCodeType'
          }, {
            name: 'trackTacticalTrainingCode',
            elementName: 'TrackTacticalTrainingCode',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityTacticalTrainingCodeType'
          }, {
            name: 'trackScope',
            elementName: 'TrackScope',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityScopeCodeType'
          }, {
            name: 'trackForceCode',
            elementName: 'TrackForceCode',
            typeInfo: 'disa_udop_tracks__1_0_genlib.Short0To99Type'
          }, {
            name: 'motionModelCode',
            elementName: {
              localPart: 'MotionModelCode',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.MotionModelCodeType'
          }, {
            name: 'binaryURI',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'BinaryURI',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
            },
            typeInfo: 'NiemProxyXd_TrackInfo.AnyURI'
          }, {
            name: 'ambiguityReasonText',
            elementName: 'AmbiguityReasonText',
            typeInfo: '.AmbiguityType'
          }, {
            name: 'dataAmplification',
            elementName: {
              localPart: 'DataAmplification',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.DataAmplificationDetailsType'
          }, {
            name: 'trackIdentifiers',
            elementName: 'TrackIdentifiers',
            typeInfo: '.IdentifiersType'
          }, {
            name: 'milstd2525CSIDCCode',
            required: true,
            elementName: {
              localPart: 'MILSTD2525-C-SIDC-Code',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'NiemMilitaryoperations_TrackInfo.MILSTD2525CSIDCType'
          }, {
            name: 'trackRemarksList',
            elementName: 'TrackRemarksList',
            typeInfo: 'disa_udop_tracks__1_0_lib.GeneralRemarksDetailsType'
          }, {
            name: 'trackTargeting',
            elementName: 'TrackTargeting',
            typeInfo: '.TargetingType'
          }, {
            name: 'trackCrossReference',
            elementName: 'TrackCrossReference',
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }, {
            name: 'trackCurrentEventGUID',
            elementName: 'TrackCurrentEventGUID',
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }]
      }, {
        localName: 'BearingBoxType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'BearingBoxType'
        },
        baseTypeInfo: 'NiemCore_TrackInfo.LocationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'bearing',
            required: true,
            elementName: {
              localPart: 'Bearing',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'disa_udop_tracks__1_0_genlib.BearingDegreesType'
          }, {
            name: 'rangeMeasure',
            required: true,
            elementName: {
              localPart: 'RangeMeasure',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType'
          }, {
            name: 'halfWidthMeasure',
            required: true,
            elementName: {
              localPart: 'HalfWidthMeasure',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType'
          }]
      }, {
        localName: 'TargetingType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'targetingAttackMissionInProgress',
            elementName: 'TargetingAttackMissionInProgress',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingAttackMissionTasked',
            elementName: 'TargetingAttackMissionTasked',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingBDAPhase1ReportAvailable',
            elementName: 'TargetingBDAPhase1ReportAvailable',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingBDAPhase2ReportAvailable',
            elementName: 'TargetingBDAPhase2ReportAvailable',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingDMPIAssigned',
            elementName: 'TargetingDMPIAssigned',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingEngaged',
            elementName: 'TargetingEngaged',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingNominationRequested',
            elementName: 'TargetingNominationRequested',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingNominationRequestRejected',
            elementName: 'TargetingNominationRequestRejected',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingOnATO',
            elementName: 'TargetingOnATO',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingTimeCritical',
            elementName: 'TargetingTimeCritical',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingValidated',
            elementName: 'TargetingValidated',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingWeaponAssigned',
            elementName: 'TargetingWeaponAssigned',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }, {
            name: 'targetingWeaponeered',
            elementName: 'TargetingWeaponeered',
            typeInfo: 'NiemProxyXd_TrackInfo.Boolean'
          }]
      }, {
        localName: 'AmbiguityType',
        baseTypeInfo: 'NiemProxyXd_TrackInfo.String',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'isAmbiguityIndicator',
            typeInfo: 'Boolean',
            attributeName: {
              localPart: 'isAmbiguityIndicator',
              namespaceURI: 'https:\/\/tsoa.example.mil\/tsoa\/track'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'EventRawReportTextType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'EventRawReportTextType'
        },
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
        localName: 'EventLocationAugmentationType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'EventLocationAugmentationType'
        },
        baseTypeInfo: 'NiemStructures_TrackInfo.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'angleOfElevationMeasure',
            elementName: {
              localPart: 'AngleOfElevationMeasure',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: '.AngleOfElevationMeasureType'
          }, {
            name: 'areaOfUncertaintyContainmentPercent',
            elementName: {
              localPart: 'AreaOfUncertaintyContainmentPercent',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: '.AreaOfUncertaintyContainmentPercentType'
          }, {
            name: 'quadcode',
            elementName: {
              localPart: 'Quadcode',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }]
      }, {
        localName: 'PositEllipseType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'PositEllipseType'
        },
        baseTypeInfo: 'NiemCore_TrackInfo.LocationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'semiMajorAxis',
            required: true,
            elementName: {
              localPart: 'Semi-MajorAxis',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType'
          }, {
            name: 'semiMinorAxis',
            required: true,
            elementName: {
              localPart: 'Semi-MinorAxis',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType'
          }, {
            name: 'bearing',
            required: true,
            elementName: {
              localPart: 'Bearing',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'disa_udop_tracks__1_0_genlib.BearingDegreesType'
          }]
      }, {
        localName: 'FanType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'FanType'
        },
        baseTypeInfo: 'NiemCore_TrackInfo.LocationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'bearing',
            required: true,
            elementName: {
              localPart: 'Bearing',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'disa_udop_tracks__1_0_genlib.BearingDegreesType'
          }, {
            name: 'minimumRangeMeasure',
            required: true,
            elementName: {
              localPart: 'MinimumRangeMeasure',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType'
          }, {
            name: 'maximumRangeMeasure',
            required: true,
            elementName: {
              localPart: 'MaximumRangeMeasure',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType'
          }, {
            name: 'halfAngleMeasure',
            required: true,
            elementName: {
              localPart: 'HalfAngleMeasure',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'disa_udop_tracks__1_0_genlib.BearingDegreesType'
          }]
      }, {
        localName: 'LineOfBearingType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'LineOfBearingType'
        },
        baseTypeInfo: 'NiemCore_TrackInfo.LocationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'bearing',
            required: true,
            elementName: {
              localPart: 'Bearing',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'disa_udop_tracks__1_0_genlib.BearingDegreesType'
          }, {
            name: 'bearingErrorMeasure',
            required: true,
            elementName: {
              localPart: 'BearingErrorMeasure',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: '.BearingErrorType'
          }, {
            name: 'ambiguityStatusCode',
            required: true,
            elementName: {
              localPart: 'AmbiguityStatusCode',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: '.LineOfBearingAmbiguityStatusCodeType'
          }, {
            name: 'rangeEstimateMeasure',
            elementName: {
              localPart: 'RangeEstimateMeasure',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType'
          }]
      }, {
        localName: 'BearingErrorType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'BearingErrorType'
        },
        baseTypeInfo: 'disa_udop_tracks__1_0_genlib.Degrees180Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'AngleOfElevationMeasureType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'AngleOfElevationMeasureType'
        },
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Float',
            type: 'value'
          }, {
            name: 'measureUnitCode',
            required: true,
            attributeName: {
              localPart: 'measureUnitCode',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            type: 'attribute'
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
        localName: 'AreaOfUncertaintyContainmentPercentType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'AreaOfUncertaintyContainmentPercentType'
        },
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Float',
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
        localName: 'TrackInfoType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:trackInfo',
          localPart: 'TrackInfoType'
        },
        baseTypeInfo: '.C2TrackDetailsType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'unit',
            required: true,
            elementName: {
              localPart: 'Unit',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'NiemMilitaryoperations_TrackInfo.UnitType'
          }, {
            name: 'event',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Event',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'NiemMilitaryoperations_TrackInfo.EventType'
          }]
      }, {
        localName: 'GeneralIdentifierType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'originatorText',
            required: true,
            elementName: {
              localPart: 'OriginatorText',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.OriginatorType'
          }, {
            name: 'originatorKeyText',
            required: true,
            elementName: {
              localPart: 'OriginatorKeyText',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }]
      }, {
        localName: 'IdentifiersType',
        baseTypeInfo: 'NiemCore_TrackInfo.IdentificationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'guid',
            elementName: 'GUID',
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }, {
            name: 'uid',
            elementName: {
              localPart: 'UID',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityUniqueIdentifierDetailsType'
          }, {
            name: 'localTrackNumber',
            elementName: 'LocalTrackNumber',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityOverTheHorizonTrackNumberDetailsType'
          }, {
            name: 'networkIdentifier',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'NetworkIdentifier',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.NetworkIdentifierDetailsType'
          }, {
            name: 'generalIdentifierID',
            elementName: 'GeneralIdentifierID',
            typeInfo: '.GeneralIdentifierType'
          }, {
            name: 'internationalRadioCallSign',
            elementName: 'InternationalRadioCallSign',
            typeInfo: 'disa_udop_tracks__1_0_lib.InternationalRadioCallSignIdentifierType'
          }, {
            name: 'trademark',
            elementName: 'Trademark',
            typeInfo: 'disa_udop_tracks__1_0_lib.TrademarkIdentifierType'
          }, {
            name: 'discreteIdentifier',
            elementName: 'DiscreteIdentifier',
            typeInfo: 'disa_udop_tracks__1_0_genlib.Octal4DigitType'
          }, {
            name: 'unitIdentificationCode',
            elementName: {
              localPart: 'UnitIdentificationCode',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityUniqueIdentificationCodeDetailsType'
          }, {
            name: 'uniqueReferenceText',
            elementName: {
              localPart: 'UniqueReferenceText',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityUniqueReferenceCodeDetailsType'
          }, {
            name: 'midbUnitID',
            elementName: {
              localPart: 'MIDBUnitID',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.MIDBUnitIdType'
          }, {
            name: 'iff',
            elementName: {
              localPart: 'IFF',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.IFFDetailsType'
          }, {
            name: 'entityClassName',
            elementName: {
              localPart: 'EntityClassName',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityClassNameType'
          }, {
            name: 'entityNumberID',
            elementName: {
              localPart: 'EntityNumberID',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityNumberIdentifierType'
          }, {
            name: 'entityType',
            elementName: 'EntityType',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityCategoryType'
          }, {
            name: 'shipControlNumber',
            elementName: 'ShipControlNumber',
            typeInfo: 'disa_udop_tracks__1_0_lib.ShipControlNumberIdentifierType'
          }, {
            name: 'fotcTrackNumber',
            elementName: 'FOTCTrackNumber',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityOverTheHorizonTrackNumberDetailsType'
          }, {
            name: 'receivedTrackNumbers',
            minOccurs: 0,
            collection: true,
            elementName: 'ReceivedTrackNumbers',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityOverTheHorizonTrackNumberDetailsType'
          }, {
            name: 'nickName',
            elementName: 'NickName',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityNickNameType'
          }, {
            name: 'systemTrackNumber',
            elementName: 'SystemTrackNumber',
            typeInfo: 'disa_udop_tracks__1_0_lib.SystemTrackNumberType'
          }]
      }, {
        localName: 'C2TrackDetailsType',
        baseTypeInfo: 'NiemMilitaryoperations_TrackInfo.TrackType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'alertCode',
            elementName: {
              localPart: 'AlertCode',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.AlertCodeType'
          }, {
            name: 'flag',
            elementName: 'Flag',
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityFlagCategoryType'
          }, {
            name: 'relationship',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'Relationship',
              namespaceURI: 'urn:disa:udop.tracks:1.0:lib'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.RelationshipDetailsType'
          }]
      }, {
        localName: 'LineOfBearingAmbiguityStatusCodeType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'LineOfBearingAmbiguityStatusCodeType'
        },
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.LineOfBearingAmbiguityStatusCodeSimpleType',
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
        localName: 'EventAugmentationType',
        typeName: {
          namespaceURI: 'urn:disa:udop.tracks:1.0:event',
          localPart: 'EventAugmentationType'
        },
        baseTypeInfo: 'NiemStructures_TrackInfo.AugmentationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'eventAssociatedGUID',
            elementName: {
              localPart: 'EventAssociatedGUID',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'NiemCore_TrackInfo.IdentificationType'
          }, {
            name: 'eventAmplification',
            elementName: {
              localPart: 'EventAmplification',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'disa_udop_tracks__1_0_ea.EventAmplificationDetailsType'
          }, {
            name: 'eventOwnerEntityUID',
            elementName: {
              localPart: 'EventOwnerEntityUID',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'disa_udop_tracks__1_0_lib.EntityUniqueIdentifierDetailsType'
          }, {
            name: 'eventCrossReference',
            elementName: {
              localPart: 'EventCrossReference',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }, {
            name: 'eventRawReportText',
            elementName: {
              localPart: 'EventRawReportText',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: '.EventRawReportTextType'
          }, {
            name: 'eventContactNumber',
            elementName: {
              localPart: 'EventContactNumber',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            typeInfo: 'NiemProxyXd_TrackInfo.Integer'
          }, {
            name: 'sourceCode',
            typeInfo: '.SourceCodeSimpleType',
            attributeName: {
              localPart: 'sourceCode',
              namespaceURI: 'urn:disa:udop.tracks:1.0:event'
            },
            type: 'attribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'LineOfBearingAmbiguityStatusCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['NON-AMBIGUOUS', 'AMBIGUOUS', 'AMBIGUOUS RESOLVED PORT', 'AMBIGUOUS RESOLVED STBD']
      }, {
        type: 'enumInfo',
        localName: 'SourceCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['observed', 'calculated', 'predicted']
      }],
    elementInfos: [{
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityOverTheHorizonTrackNumberDetailsType',
        elementName: 'FOTCTrackNumber'
      }, {
        typeInfo: '.EventRawReportTextType',
        elementName: {
          localPart: 'EventRawReportText',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingNominationRequested'
      }, {
        typeInfo: '.TrackInfoType',
        elementName: {
          localPart: 'TrackInfo',
          namespaceURI: 'urn:disa:udop.tracks:1.0:trackInfo'
        }
      }, {
        typeInfo: '.TargetingType',
        elementName: 'TrackTargeting'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_ea.EventAmplificationDetailsType',
        elementName: {
          localPart: 'EventAmplification',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: '.IdentifiersType',
        elementName: 'TrackIdentifiers'
      }, {
        typeInfo: '.TrackAugmentationType',
        elementName: 'TrackAugmentation',
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Integer',
        elementName: {
          localPart: 'EventContactNumber',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType',
        elementName: {
          localPart: 'Semi-MinorAxis',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'disa_udop_tracks__1_0_genlib.BearingDegreesType',
        elementName: {
          localPart: 'HalfAngleMeasure',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityTacticalTrainingCodeType',
        elementName: 'TrackTacticalTrainingCode'
      }, {
        typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType',
        elementName: {
          localPart: 'RangeMeasure',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: 'GUID'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingOnATO'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingWeaponeered'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.SystemTrackNumberType',
        elementName: 'SystemTrackNumber'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: 'TrackCrossReference'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.GeneralRemarksDetailsType',
        elementName: 'TrackRemarksList'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityOverTheHorizonTrackNumberDetailsType',
        elementName: 'ReceivedTrackNumbers'
      }, {
        typeInfo: '.EventLocationAugmentationType',
        elementName: {
          localPart: 'EventLocationAugmentation',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        },
        substitutionHead: {
          localPart: 'LocationAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }, {
        typeInfo: '.AreaOfUncertaintyContainmentPercentType',
        elementName: {
          localPart: 'AreaOfUncertaintyContainmentPercent',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'disa_udop_tracks__1_0_genlib.Short0To99Type',
        elementName: 'TrackForceCode'
      }, {
        typeInfo: '.GeneralIdentifierType',
        elementName: 'GeneralIdentifierID'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityScopeCodeType',
        elementName: 'TrackScope'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingTimeCritical'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.ShipControlNumberIdentifierType',
        elementName: 'ShipControlNumber'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingEngaged'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: {
          localPart: 'Quadcode',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingAttackMissionTasked'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingWeaponAssigned'
      }, {
        typeInfo: '.AmbiguityType',
        elementName: 'AmbiguityReasonText'
      }, {
        typeInfo: '.AngleOfElevationMeasureType',
        elementName: {
          localPart: 'AngleOfElevationMeasure',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: 'TrackCurrentEventGUID'
      }, {
        typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType',
        elementName: {
          localPart: 'Semi-MajorAxis',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: '.EventAugmentationType',
        elementName: {
          localPart: 'EventAugmentation',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        },
        substitutionHead: {
          localPart: 'EventAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingNominationRequestRejected'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingAttackMissionInProgress'
      }, {
        typeInfo: '.LineOfBearingAmbiguityStatusCodeType',
        elementName: {
          localPart: 'AmbiguityStatusCode',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityOverTheHorizonTrackNumberDetailsType',
        elementName: 'LocalTrackNumber'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingDMPIAssigned'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityFlagCategoryType',
        elementName: 'Flag'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_genlib.BearingDegreesType',
        elementName: {
          localPart: 'Bearing',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingBDAPhase1ReportAvailable'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityCategoryType',
        elementName: 'EntityType'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.TrademarkIdentifierType',
        elementName: 'Trademark'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityTrackDetailsType',
        elementName: 'TrackType'
      }, {
        typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType',
        elementName: {
          localPart: 'RangeEstimateMeasure',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingBDAPhase2ReportAvailable'
      }, {
        typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType',
        elementName: {
          localPart: 'HalfWidthMeasure',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'NiemMilitaryoperations_TrackInfo.StandardIdentityCodeType',
        elementName: 'TrackThreat'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: {
          localPart: 'EventCrossReference',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'disa_udop_tracks__1_0_genlib.Octal4DigitType',
        elementName: 'DiscreteIdentifier'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Boolean',
        elementName: 'TargetingValidated'
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.InternationalRadioCallSignIdentifierType',
        elementName: 'InternationalRadioCallSign'
      }, {
        typeInfo: 'NiemCore_TrackInfo.IdentificationType',
        elementName: {
          localPart: 'EventAssociatedGUID',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityUniqueIdentifierDetailsType',
        elementName: {
          localPart: 'EventOwnerEntityUID',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: '.BearingErrorType',
        elementName: {
          localPart: 'BearingErrorMeasure',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType',
        elementName: {
          localPart: 'MinimumRangeMeasure',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }, {
        typeInfo: 'disa_udop_tracks__1_0_lib.EntityNickNameType',
        elementName: 'NickName'
      }, {
        typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType',
        elementName: {
          localPart: 'MaximumRangeMeasure',
          namespaceURI: 'urn:disa:udop.tracks:1.0:event'
        }
      }]
  };
  return {
    TrackInfo: TrackInfo
  };
};
if (typeof define === 'function' && define.amd) {
  define([], TrackInfo_Module_Factory);
}
else {
  var TrackInfo_Module = TrackInfo_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.TrackInfo = TrackInfo_Module.TrackInfo;
  }
  else {
    var TrackInfo = TrackInfo_Module.TrackInfo;
  }
}