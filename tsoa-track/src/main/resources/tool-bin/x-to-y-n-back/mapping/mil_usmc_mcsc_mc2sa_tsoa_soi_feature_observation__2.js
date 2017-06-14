var mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2_Module_Factory = function () {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2 = {
    name: 'mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2',
    defaultElementNamespaceURI: 'http:\/\/mcsc.usmc.mil\/mc2sa\/tsoa\/soi\/feature-observation\/2.0\/',
    dependencies: ['gov_niem_release_niem_structures__3', 'gov_niem_release_niem_domains_cbrn__3', 'gov_niem_release_niem_domains_maritime__3', 'NIEM_Core', 'gov_niem_release_niem_domains_militaryoperations__3'],
    typeInfos: [{
        localName: 'MILSTD2525DType',
        typeName: 'MILSTD2525-D-Type',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'milstd2525DSIDC',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'MILSTD2525-D-SIDC',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.MILSTD2525DSIDCType'
          }]
      }, {
        localName: 'MILSTD2525CType',
        typeName: 'MILSTD2525-C-Type',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'milstd2525CSIDCCode',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'MILSTD2525-C-SIDC-Code',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.MILSTD2525CSIDCType'
          }]
      }, {
        localName: 'OriginLocationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'altitudeMeasure',
            elementName: {
              localPart: 'AltitudeMeasure',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'NIEM_Core.LocationHeightMeasureType'
          }, {
            name: 'elevationMeasure',
            elementName: {
              localPart: 'ElevationMeasure',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'NIEM_Core.LocationHeightMeasureType'
          }, {
            name: 'location2DGeospatialCoordinate',
            elementName: {
              localPart: 'Location2DGeospatialCoordinate',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/niem-core\/3.0\/'
            },
            typeInfo: 'NIEM_Core.Location2DGeospatialCoordinateType'
          }]
      }, {
        localName: 'MILSTD2525BType',
        typeName: 'MILSTD2525-B-Type',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'milstd2525BSIDCCode',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'MILSTD2525-B-SIDC-Code',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.MILSTD2525BSIDCType'
          }]
      }, {
        localName: 'FeatureObservationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'observation',
            required: true,
            collection: true,
            elementName: {
              localPart: 'Observation',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
            },
            typeInfo: 'gov_niem_release_niem_domains_militaryoperations__3.ObservationType'
          }]
      }, {
        localName: 'ObservedRelativeLocationType',
        baseTypeInfo: 'gov_niem_release_niem_structures__3.ObjectType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'relativeLocation',
            minOccurs: 0,
            collection: true,
            elementName: {
              localPart: 'RelativeLocation',
              namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cbrn\/3.2\/'
            },
            typeInfo: 'gov_niem_release_niem_domains_cbrn__3.RelativeLocationType'
          }]
      }],
    elementInfos: [{
        typeInfo: '.MILSTD2525DType',
        elementName: 'MILSTD2525-D',
        substitutionHead: {
          localPart: 'ObservedObjectSymbolAbstract',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: '.FeatureObservationType',
        elementName: 'FeatureObservation',
        substitutionHead: {
          localPart: 'TrackAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: '.MILSTD2525BType',
        elementName: 'MILSTD2525-B',
        substitutionHead: {
          localPart: 'ObservedObjectSymbolAbstract',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: '.MILSTD2525CType',
        elementName: 'MILSTD2525-C',
        substitutionHead: {
          localPart: 'ObservedObjectSymbolAbstract',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: '.OriginLocationType',
        elementName: 'OriginLocation',
        substitutionHead: {
          localPart: 'OriginAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/cbrn\/3.2\/'
        }
      }, {
        typeInfo: 'gov_niem_release_niem_domains_maritime__3.USMTFEnvironmentCategoryCodeType',
        elementName: 'SpatialEnvironmentCode',
        substitutionHead: {
          localPart: 'ObservationAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }, {
        typeInfo: '.ObservedRelativeLocationType',
        elementName: 'ObservedRelativeLocation',
        substitutionHead: {
          localPart: 'ObservedObjectLocationAugmentationPoint',
          namespaceURI: 'http:\/\/release.niem.gov\/niem\/domains\/militaryOperations\/3.2\/'
        }
      }]
  };
  return {
    mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2: mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2
  };
};
if (typeof define === 'function' && define.amd) {
  define([], mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2_Module_Factory);
}
else {
  var mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2_Module = mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2;
  }
  else {
    var mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2 = mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2_Module.mil_usmc_mcsc_mc2sa_tsoa_soi_feature_observation__2;
  }
}