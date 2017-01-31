var NiemCore_TrackInfo_Module_Factory = function () {
  var NiemCore_TrackInfo = {
    name: 'NiemCore_TrackInfo',
    defaultElementNamespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/',
    defaultAttributeNamespaceURI: 'http:\/\/release.niem.gov\/niem\/structures\/3.0\/',
    dependencies: ['gov_niem_release_niem_codes_nga_datum__3', 'NiemStructures_TrackInfo', 'NiemProxyXd_TrackInfo', 'gov_niem_release_niem_codes_unece_rec20__3'],
    typeInfos: [{
        localName: 'DirectionCodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: '.DirectionCodeSimpleType',
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
        localName: 'LongitudeDegreeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
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
        localName: 'StatusType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'statusCommentText',
            minOccurs: 0,
            collection: true,
            elementName: 'StatusCommentText',
            typeInfo: '.TextType'
          }]
      }, {
        localName: 'Location3DGeospatialCoordinateType',
        baseTypeInfo: '.Location2DGeospatialCoordinateType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'locationHeight',
            required: true,
            mixed: false,
            allowDom: false,
            elementName: 'LocationHeight',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AngularMeasureType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'angularDegreeValue',
            minOccurs: 0,
            collection: true,
            elementName: 'AngularDegreeValue',
            typeInfo: 'NiemProxyXd_TrackInfo.Integer'
          }, {
            name: 'angularMinuteValue',
            minOccurs: 0,
            collection: true,
            elementName: 'AngularMinuteValue',
            typeInfo: '.AngularMinuteType'
          }, {
            name: 'angularSecondValue',
            minOccurs: 0,
            collection: true,
            elementName: 'AngularSecondValue',
            typeInfo: '.AngularSecondType'
          }, {
            name: 'angularMeasureAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'AngularMeasureAugmentationPoint',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'LongitudeCoordinateType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'longitudeDegreeValue',
            elementName: 'LongitudeDegreeValue',
            typeInfo: '.LongitudeDegreeType'
          }]
      }, {
        localName: 'LatitudeCoordinateType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'latitudeDegreeValue',
            elementName: 'LatitudeDegreeValue',
            typeInfo: '.LatitudeDegreeType'
          }]
      }, {
        localName: 'ItemType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ContactInformationType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'contactMeans',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'ContactMeans',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AngularSecondType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
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
        localName: 'MeasureType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'measureValue',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'MeasureValue',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }, {
            name: 'measureUnit',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'MeasureUnit',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'IdentificationType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'identificationID',
            minOccurs: 0,
            collection: true,
            elementName: 'IdentificationID',
            typeInfo: 'NiemProxyXd_TrackInfo.String'
          }, {
            name: 'identificationAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'IdentificationAugmentationPoint',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'LocationHeightMeasureType',
        baseTypeInfo: '.MeasureType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'locationHeightVerticalDatum',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'LocationHeightVerticalDatum',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'Degree360Type',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
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
        localName: 'ProperNameTextType',
        baseTypeInfo: '.TextType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'DateType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'dateRepresentation',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'DateRepresentation',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'AngularMinuteType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
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
        localName: 'DateRangeType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'startDate',
            minOccurs: 0,
            collection: true,
            elementName: 'StartDate',
            typeInfo: '.DateType'
          }, {
            name: 'endDate',
            minOccurs: 0,
            collection: true,
            elementName: 'EndDate',
            typeInfo: '.DateType'
          }]
      }, {
        localName: 'FacilityType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'facilityName',
            minOccurs: 0,
            collection: true,
            elementName: 'FacilityName',
            typeInfo: '.ProperNameTextType'
          }, {
            name: 'facilityLocation',
            minOccurs: 0,
            collection: true,
            elementName: 'FacilityLocation',
            typeInfo: '.LocationType'
          }]
      }, {
        localName: 'Location2DGeospatialCoordinateType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'geographicCoordinateLatitude',
            required: true,
            elementName: 'GeographicCoordinateLatitude',
            typeInfo: '.LatitudeCoordinateType'
          }, {
            name: 'geographicCoordinateLongitude',
            required: true,
            elementName: 'GeographicCoordinateLongitude',
            typeInfo: '.LongitudeCoordinateType'
          }, {
            name: 'location2DGeospatialCoordinateAugmentationPoint',
            minOccurs: 0,
            collection: true,
            elementName: 'Location2DGeospatialCoordinateAugmentationPoint',
            typeInfo: 'AnyType'
          }]
      }, {
        localName: 'TelephoneNumberType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TextType',
        baseTypeInfo: 'NiemProxyXd_TrackInfo.String',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'LocationType',
        baseTypeInfo: 'NiemStructures_TrackInfo.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'locationGeospatialCoordinate',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            elementName: 'LocationGeospatialCoordinate',
            typeInfo: 'AnyType',
            type: 'elementRef'
          }]
      }, {
        localName: 'LatitudeDegreeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'value',
            typeInfo: 'Decimal',
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
        type: 'enumInfo',
        localName: 'DirectionCodeSimpleType',
        values: ['E', 'ENE', 'ESE', 'N', 'NE', 'NNE', 'NNW', 'NW', 'S', 'SE', 'SSE', 'SSW', 'SW', 'W', 'WNW', 'WSW']
      }],
    elementInfos: [{
        typeInfo: 'AnyType',
        elementName: 'LocationHeightVerticalDatum'
      }, {
        typeInfo: '.LongitudeDegreeType',
        elementName: 'LongitudeDegreeValue'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Integer',
        elementName: 'MeasureIntegerValue',
        substitutionHead: 'MeasurePoint'
      }, {
        typeInfo: '.TelephoneNumberType',
        elementName: 'ContactTelephoneNumber',
        substitutionHead: 'ContactMeans'
      }, {
        typeInfo: 'gov_niem_release_niem_codes_unece_rec20__3.LengthCodeType',
        elementName: 'LengthUnitCode',
        substitutionHead: 'MeasureUnit'
      }, {
        typeInfo: '.FacilityType',
        elementName: 'Facility'
      }, {
        typeInfo: '.DateType',
        elementName: 'StartDate'
      }, {
        typeInfo: 'AnyType',
        elementName: 'MeasureValue'
      }, {
        typeInfo: '.StatusType',
        elementName: 'Status'
      }, {
        typeInfo: '.LatitudeCoordinateType',
        elementName: 'GeographicCoordinateLatitude'
      }, {
        typeInfo: 'AnyType',
        elementName: 'IdentificationAugmentationPoint'
      }, {
        typeInfo: 'AnyType',
        elementName: 'AngularMeasureAugmentationPoint'
      }, {
        typeInfo: '.Location3DGeospatialCoordinateType',
        elementName: 'Location3DGeospatialCoordinate',
        substitutionHead: 'LocationGeospatialCoordinate'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.String',
        elementName: 'IdentificationID'
      }, {
        typeInfo: '.DateType',
        elementName: 'EndDate'
      }, {
        typeInfo: '.AngularMinuteType',
        elementName: 'AngularMinuteValue'
      }, {
        typeInfo: '.AngularSecondType',
        elementName: 'AngularSecondValue'
      }, {
        typeInfo: '.TextType',
        elementName: 'StatusCommentText'
      }, {
        typeInfo: '.LocationHeightMeasureType',
        elementName: 'LocationElevation',
        substitutionHead: 'LocationHeight'
      }, {
        typeInfo: 'AnyType',
        elementName: 'ContactMeans'
      }, {
        typeInfo: 'AnyType',
        elementName: 'LocationAugmentationPoint'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.Integer',
        elementName: 'AngularDegreeValue'
      }, {
        typeInfo: 'AnyType',
        elementName: 'MeasureUnit'
      }, {
        typeInfo: 'AnyType',
        elementName: 'MeasurePoint',
        substitutionHead: 'MeasureValue'
      }, {
        typeInfo: 'AnyType',
        elementName: 'Location2DGeospatialCoordinateAugmentationPoint'
      }, {
        typeInfo: '.TextType',
        elementName: 'LocationHeightVerticalDatumText',
        substitutionHead: 'LocationHeightVerticalDatum'
      }, {
        typeInfo: 'AnyType',
        elementName: 'DateRepresentation'
      }, {
        typeInfo: '.ContactInformationType',
        elementName: 'ContactInformation'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.DateTime',
        elementName: 'DateTime',
        substitutionHead: 'DateRepresentation'
      }, {
        typeInfo: '.ProperNameTextType',
        elementName: 'FacilityName'
      }, {
        typeInfo: 'AnyType',
        elementName: 'LocationGeospatialCoordinate'
      }, {
        typeInfo: 'AnyType',
        elementName: 'LocationHeight'
      }, {
        typeInfo: '.Location2DGeospatialCoordinateType',
        elementName: 'Location2DGeospatialCoordinate',
        substitutionHead: 'LocationGeospatialCoordinate'
      }, {
        typeInfo: '.LongitudeCoordinateType',
        elementName: 'GeographicCoordinateLongitude'
      }, {
        typeInfo: 'gov_niem_release_niem_codes_nga_datum__3.VerticalDatumCodeType',
        elementName: 'LocationHeightVerticalDatumCode',
        substitutionHead: 'LocationHeightVerticalDatum'
      }, {
        typeInfo: '.LocationType',
        elementName: 'FacilityLocation'
      }, {
        typeInfo: 'NiemProxyXd_TrackInfo.AnyURI',
        elementName: 'BinaryURI'
      }, {
        typeInfo: '.LatitudeDegreeType',
        elementName: 'LatitudeDegreeValue'
      }]
  };
  return {
    NiemCore_TrackInfo: NiemCore_TrackInfo
  };
};
if (typeof define === 'function' && define.amd) {
  define([], NiemCore_TrackInfo_Module_Factory);
}
else {
  var NiemCore_TrackInfo_Module = NiemCore_TrackInfo_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.NiemCore_TrackInfo = NiemCore_TrackInfo_Module.NiemCore_TrackInfo;
  }
  else {
    var NiemCore_TrackInfo = NiemCore_TrackInfo_Module.NiemCore_TrackInfo;
  }
}