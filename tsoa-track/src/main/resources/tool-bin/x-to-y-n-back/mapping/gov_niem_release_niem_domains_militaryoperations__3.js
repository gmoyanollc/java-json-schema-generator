var gov_niem_release_niem_domains_militaryoperations__3_Module_Factory = function () {
  var gov_niem_release_niem_domains_militaryoperations__3 = {
    name: 'gov_niem_release_niem_domains_militaryoperations__3',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['gov_niem_release_niem_codes_nga_datum__3', 'TSOA_Track.NIEM_Core.OGC_GML', 'gov_niem_release_niem_structures__3', 'TSOA_Track.NIEM_Core', 'gov_niem_release_niem_proxy_xsd__3'],
    typeInfos: [{
        localName: 'ObservedObjectLocationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'observedObject2DGeospatialCoordinate',
            minOccurs: 0,
            collection: true,
            elementName: 'ObservedObject2DGeospatialCoordinate',
            typeInfo: 'TSOA_Track.NIEM_Core.Location2DGeospatialCoordinateType'
          }, {
            name: 'altitudeMeasure',
            minOccurs: 0,
            collection: true,
            elementName: 'AltitudeMeasure',
            typeInfo: 'TSOA_Track.NIEM_Core.LocationHeightMeasureType'
          }, {
            name: 'elevationMeasure',
            minOccurs: 0,
            collection: true,
            elementName: 'ElevationMeasure',
            typeInfo: 'TSOA_Track.NIEM_Core.LocationHeightMeasureType'
          }, {
            name: 'observedObjectLocationAugmentationPoint',
            mixed: false,
            allowDom: false,
            elementName: 'ObservedObjectLocationAugmentationPoint',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'SpeedValueType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
            type: 'value'
          }, {
            name: 'speedUnitCode',
            typeInfo: 'Token',
            attributeName: {
              localPart: 'speedUnitCode',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
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
        localName: 'WGS84LocationPointType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'point',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'Point',
              namespaceURI: 'http:\/\/www.opengis.net\/gml\/3.2'
            },
            typeInfo: 'TSOA_Track.NIEM_Core.OGC_GML.PointType'
          }]
      }, {
        localName: 'ZuluDateTimeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'DateTime',
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
        localName: 'StandardIdentityCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.StandardIdentityCodeSimpleType',
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
        localName: 'MILSTD2525DSIDCType',
        typeName: 'MILSTD2525-D-SIDC-Type',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'milstd2525DSIDCPart1Code',
            minOccurs: 0,
            collection: true,
            elementName: 'MILSTD2525-D-SIDC-Part1Code',
            typeInfo: '.MILSTD2525DSIDCPartType'
          }, {
            name: 'milstd2525DSIDCPart2Code',
            minOccurs: 0,
            collection: true,
            elementName: 'MILSTD2525-D-SIDC-Part2Code',
            typeInfo: '.MILSTD2525DSIDCPartType'
          }, {
            name: 'milstd2525DSIDCPart3Code',
            minOccurs: 0,
            collection: true,
            elementName: 'MILSTD2525-D-SIDC-Part3Code',
            typeInfo: '.MILSTD2525DSIDCPartType'
          }, {
            name: 'milstd2525DSIDCAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'MILSTD2525-D-SIDC-AugmentationPoint',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'MILSTD2525BSIDCType',
        typeName: 'MILSTD2525-B-SIDC-Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Token',
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
        localName: 'OPEXCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.OPEXCodeSimpleType',
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
        localName: 'UnitNameType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Token',
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
        localName: 'MILSTD2525CSIDCType',
        typeName: 'MILSTD2525-C-SIDC-Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Token',
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
        localName: 'SensorType',
        baseTypeInfo: 'TSOA_Track.NIEM_Core.ItemType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'sensorIdentification',
            minOccurs: 0,
            collection: true,
            elementName: 'SensorIdentification',
            typeInfo: 'TSOA_Track.NIEM_Core.IdentificationType'
          }]
      }, {
        localName: 'UnitTypeCodeTextType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Token',
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
        localName: 'UnitType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'unitName',
            minOccurs: 0,
            collection: true,
            elementName: 'UnitName',
            typeInfo: '.UnitNameType'
          }, {
            name: 'unitShortName',
            minOccurs: 0,
            collection: true,
            elementName: 'UnitShortName',
            typeInfo: '.UnitShortNameType'
          }, {
            name: 'unitTypeCodeText',
            minOccurs: 0,
            collection: true,
            elementName: 'UnitTypeCodeText',
            typeInfo: '.UnitTypeCodeTextType'
          }, {
            name: 'unitAugmentationPoint',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'UnitAugmentationPoint',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'MILSTD2525DSIDCPartType',
        typeName: 'MILSTD2525-D-SIDC-PartType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'UnsignedInt',
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
        localName: 'MissionType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'missionName',
            minOccurs: 0,
            collection: true,
            elementName: 'MissionName',
            typeInfo: 'gov_niem_release_niem_proxy_xsd__3.String'
          }]
      }, {
        localName: 'Degree360Type',
        baseTypeInfo: 'TSOA_Track.NIEM_Core.Degree360Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'sigmaErrorValue',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'sigmaErrorValue',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'WGS84LocationCylinderType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'wgs84LocationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'WGS84LocationPoint',
            typeInfo: '.WGS84LocationPointType'
          }]
      }, {
        localName: 'MotionType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'courseAbstract',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'CourseAbstract',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'speedValue',
            minOccurs: 0,
            collection: true,
            elementName: 'SpeedValue',
            typeInfo: '.SpeedValueType'
          }]
      }, {
        localName: 'ObservationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'observedObjectLocation',
            elementName: 'ObservedObjectLocation',
            typeInfo: '.ObservedObjectLocationType'
          }, {
            name: 'observedObjectMotion',
            elementName: 'ObservedObjectMotion',
            typeInfo: '.MotionType'
          }, {
            name: 'observationDateTime',
            required: true,
            elementName: 'ObservationDateTime',
            typeInfo: '.ZuluDateTimeType'
          }, {
            name: 'observationOPEXCode',
            elementName: 'ObservationOPEXCode',
            typeInfo: '.OPEXCodeType'
          }, {
            name: 'observedObjectSymbolAbstract',
            mixed: false,
            allowDom: false,
            elementName: 'ObservedObjectSymbolAbstract',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'observationAugmentationPoint',
            mixed: false,
            allowDom: false,
            elementName: 'ObservationAugmentationPoint',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'EventType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'eventIdentification',
            minOccurs: 0,
            collection: true,
            elementName: 'EventIdentification',
            typeInfo: 'TSOA_Track.NIEM_Core.IdentificationType'
          }, {
            name: 'eventValidityDateTimeRange',
            minOccurs: 0,
            collection: true,
            elementName: 'EventValidityDateTimeRange',
            typeInfo: 'TSOA_Track.NIEM_Core.DateRangeType'
          }, {
            name: 'eventAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'EventAugmentationPoint',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'CourseAngleDegreesMeasureType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'angleDegreesMeasure',
            minOccurs: 0,
            collection: true,
            elementName: 'AngleDegreesMeasure',
            typeInfo: 'TSOA_Track.NIEM_Core.AngularMeasureType'
          }, {
            name: 'directionDatumAbstract',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'DirectionDatumAbstract',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'courseAngleDegreesMeasureAugmentationPoint',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'CourseAngleDegreesMeasureAugmentationPoint',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'UnitShortNameType',
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
        localName: 'TrackType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'trackIdentification',
            minOccurs: 0,
            collection: true,
            elementName: 'TrackIdentification',
            typeInfo: 'TSOA_Track.NIEM_Core.IdentificationType'
          }, {
            name: 'trackAugmentationPoint',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'TrackAugmentationPoint',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        type: 'enumInfo',
        localName: 'StandardIdentityCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['ASSUMED FRIEND', 'UNKNOWN', 'FRIEND', 'FAKER', 'HOSTILE', 'JOKER', 'NEUTRAL', 'SUSPECT']
      }, {
        type: 'enumInfo',
        localName: 'OPEXCodeSimpleType',
        baseTypeInfo: 'Token',
        values: ['EXERCISE', 'OPERATIONS', 'SIMULATION', 'TEST']
      }],
    elementInfos: [{
        typeInfo: 'TSOA_Track.NIEM_Core.DateRangeType',
        elementName: 'EventValidityDateTimeRange'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.AngularMeasureType',
        elementName: 'CourseAngleMeasure',
        substitutionHead: 'CourseAbstract'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.IdentificationType',
        elementName: 'TrackIdentification'
      }, {
        typeInfo: 'AnyType',
        elementName: 'UnitAugmentationPoint'
      }, {
        typeInfo: 'gov_niem_release_niem_codes_nga_datum__3.DirectionDatumCodeType',
        elementName: 'DirectionDatumCode',
        substitutionHead: 'DirectionDatumAbstract'
      }, {
        typeInfo: 'AnyType',
        elementName: 'TrackAugmentationPoint'
      }, {
        typeInfo: '.UnitShortNameType',
        elementName: 'UnitShortName'
      }, {
        typeInfo: '.MILSTD2525DSIDCType',
        elementName: 'MILSTD2525-D-SIDC'
      }, {
        typeInfo: '.OPEXCodeType',
        elementName: 'ObservationOPEXCode'
      }, {
        typeInfo: '.StandardIdentityCodeType',
        elementName: 'ObservedObjectStandardIdentityCode',
        substitutionHead: 'ObservedObjectStandardIdentityCodeAbstract'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.DirectionCodeType',
        elementName: 'CourseCode',
        substitutionHead: 'CourseAbstract'
      }, {
        typeInfo: 'gov_niem_release_niem_proxy_xsd__3.String',
        elementName: 'MissionName'
      }, {
        typeInfo: 'AnyType',
        elementName: 'CourseAbstract'
      }, {
        typeInfo: '.ZuluDateTimeType',
        elementName: 'ObservationDateTime'
      }, {
        typeInfo: '.ObservationType',
        elementName: 'Observation'
      }, {
        typeInfo: 'AnyType',
        elementName: 'MILSTD2525-D-SIDC-AugmentationPoint'
      }, {
        typeInfo: '.MotionType',
        elementName: 'ObservedObjectMotion'
      }, {
        typeInfo: 'AnyType',
        elementName: 'CourseAngleDegreesMeasureAugmentationPoint'
      }, {
        typeInfo: 'AnyType',
        elementName: 'EventCategoryAbstract'
      }, {
        typeInfo: 'AnyType',
        elementName: 'ObservedObjectSymbolAbstract'
      }, {
        typeInfo: 'AnyType',
        elementName: 'ObservedObjectLocationAugmentationPoint'
      }, {
        typeInfo: '.MissionType',
        elementName: 'Mission'
      }, {
        typeInfo: 'gov_niem_release_niem_proxy_xsd__3.Decimal',
        elementName: 'AngularMeasureDecimalValue',
        substitutionHead: 'CourseAngleDegreesMeasureAugmentationPoint'
      }, {
        typeInfo: '.ObservedObjectLocationType',
        elementName: 'ObservedObjectLocation'
      }, {
        typeInfo: 'AnyType',
        elementName: 'ObservedObjectStandardIdentityCodeAbstract'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.Location2DGeospatialCoordinateType',
        elementName: 'ObservedObject2DGeospatialCoordinate'
      }, {
        typeInfo: '.UnitNameType',
        elementName: 'UnitName'
      }, {
        typeInfo: 'AnyType',
        elementName: 'ObservationAugmentationPoint'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.LocationHeightMeasureType',
        elementName: 'AltitudeMeasure'
      }, {
        typeInfo: '.MILSTD2525DSIDCPartType',
        elementName: 'MILSTD2525-D-SIDC-Part1Code'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.AngularMeasureType',
        elementName: 'AngleDegreesMeasure'
      }, {
        typeInfo: '.CourseAngleDegreesMeasureType',
        elementName: 'CourseAngleDegreesMeasure',
        substitutionHead: 'CourseAbstract'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.IdentificationType',
        elementName: 'EventIdentification'
      }, {
        typeInfo: '.UnitTypeCodeTextType',
        elementName: 'UnitTypeCodeText'
      }, {
        typeInfo: '.WGS84LocationCylinderType',
        elementName: 'WGS84LocationCylinder',
        substitutionHead: {
          localPart: 'LocationGeospatialCoordinate',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
        }
      }, {
        typeInfo: 'AnyType',
        elementName: 'DirectionDatumAbstract'
      }, {
        typeInfo: '.UnitType',
        elementName: 'Unit'
      }, {
        typeInfo: '.MILSTD2525DSIDCPartType',
        elementName: 'MILSTD2525-D-SIDC-Part2Code'
      }, {
        typeInfo: '.MILSTD2525CSIDCType',
        elementName: 'MILSTD2525-C-SIDC-Code'
      }, {
        typeInfo: '.MILSTD2525DSIDCPartType',
        elementName: 'MILSTD2525-D-SIDC-Part3Code'
      }, {
        typeInfo: 'AnyType',
        elementName: 'EventAugmentationPoint'
      }, {
        typeInfo: '.WGS84LocationPointType',
        elementName: 'WGS84LocationPoint'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.IdentificationType',
        elementName: 'SensorIdentification'
      }, {
        typeInfo: '.Degree360Type',
        elementName: 'CourseValue',
        substitutionHead: 'CourseAbstract'
      }, {
        typeInfo: '.SensorType',
        elementName: 'Sensor'
      }, {
        typeInfo: '.SpeedValueType',
        elementName: 'SpeedValue'
      }, {
        typeInfo: '.MILSTD2525BSIDCType',
        elementName: 'MILSTD2525-B-SIDC-Code'
      }, {
        typeInfo: '.TrackType',
        elementName: 'Track'
      }, {
        typeInfo: '.EventType',
        elementName: 'Event'
      }, {
        typeInfo: 'TSOA_Track.NIEM_Core.LocationHeightMeasureType',
        elementName: 'ElevationMeasure'
      }]
  };
  return {
    gov_niem_release_niem_domains_militaryoperations__3: gov_niem_release_niem_domains_militaryoperations__3
  };
};
if (typeof define === 'function' && define.amd) {
  define([], gov_niem_release_niem_domains_militaryoperations__3_Module_Factory);
}
else {
  var gov_niem_release_niem_domains_militaryoperations__3_Module = gov_niem_release_niem_domains_militaryoperations__3_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.gov_niem_release_niem_domains_militaryoperations__3 = gov_niem_release_niem_domains_militaryoperations__3_Module.gov_niem_release_niem_domains_militaryoperations__3;
  }
  else {
    var gov_niem_release_niem_domains_militaryoperations__3 = gov_niem_release_niem_domains_militaryoperations__3_Module.gov_niem_release_niem_domains_militaryoperations__3;
  }
}