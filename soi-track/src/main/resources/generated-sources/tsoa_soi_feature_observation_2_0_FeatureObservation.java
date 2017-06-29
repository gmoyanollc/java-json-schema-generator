import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import javax.validation.Valid;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * FeatureObservation
 * <p>
 * A feature observation of something.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "Observation"
})
public class tsoa_soi_feature_observation_2_0_FeatureObservation {

    /**
     * Observation
     * <p>
     * A time, location and information of an observation.
     * 
     */
    @JsonProperty("Observation")
    @Valid
    private List<Object> Observation = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#FeatureObservation\",\"title\":\"FeatureObservation\",\"type\":\"object\",\"description\":\"A feature observation of something.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observation_2_0_FeatureObservation\",\"properties\":{\"Observation\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/Observation.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * Observation
     * <p>
     * A time, location and information of an observation.
     * 
     * @return
     *     The Observation
     */
    @JsonProperty("Observation")
    public List<Object> getObservation() {
        return Observation;
    }

    /**
     * Observation
     * <p>
     * A time, location and information of an observation.
     * 
     * @param Observation
     *     The Observation
     */
    @JsonProperty("Observation")
    public void setObservation(List<Object> Observation) {
        this.Observation = Observation;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("Observation".equals(name)) {
            if (value instanceof List) {
                setObservation(((List<Object> ) value));
            } else {
                throw new IllegalArgumentException(("property \"Observation\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            return false;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("Observation".equals(name)) {
            return getObservation();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, tsoa_soi_feature_observation_2_0_FeatureObservation.NOT_FOUND_VALUE);
        if (tsoa_soi_feature_observation_2_0_FeatureObservation.NOT_FOUND_VALUE!= value) {
            return ((T) value);
        } else {
            throw new IllegalArgumentException((("property \""+ name)+"\" is not defined"));
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public void set(String name, Object value) {
        if (!declaredProperty(name, value)) {
            throw new IllegalArgumentException((("property \""+ name)+"\" is not defined"));
        }
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(Observation).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof tsoa_soi_feature_observation_2_0_FeatureObservation) == false) {
            return false;
        }
        tsoa_soi_feature_observation_2_0_FeatureObservation rhs = ((tsoa_soi_feature_observation_2_0_FeatureObservation) other);
        return new EqualsBuilder().append(Observation, rhs.Observation).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservedObject2DGeospatialCoordinate\",\"title\":\"ObservedObject2DGeospatialCoordinate\",\"type\":\"array\",\"description\":\"A latitude and longitude of an observed object.\",\"version\":\"0.4.4\",\"items\":{\"Location2DGeospatialCoordinateType\":{\"$ref\":\"../../../../niem/niem-core/3.0/Location2DGeospatialCoordinateType.json\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#Observation\",\"title\":\"Observation\",\"type\":\"array\",\"description\":\"A time, location and information of an observation.\",\"version\":\"0.4.4\",\"items\":{\"ObservedObjectLocation\":{\"$ref\":\"ObservedObjectLocation.json\"},\"ObservedObjectMotion\":{\"$ref\":\"ObservedObjectMotion.json\"},\"ObservationDateTime\":{\"$ref\":\"ObservationDateTime.json\"},\"ObservationOPEXCode\":{\"$ref\":\"ObservationOPEXCode.json\"},\"ObservedObjectSymbolAbstract\":{\"MILSTD2525-C\":{\"$ref\":\"../../../../tsoa/soi/feature-observation/2.0/MILSTD2525-C.json\"},\"MILSTD2525-D\":{\"$ref\":\"../../../../tsoa/soi/feature-observation/2.0/MILSTD2525-D.json\"},\"MILSTD2525-B\":{\"$ref\":\"../../../../tsoa/soi/feature-observation/2.0/MILSTD2525-B.json\"}},\"ObservationAugmentationPoint\":{\"SpatialEnvironmentCode\":{\"$ref\":\"../../../../tsoa/soi/feature-observation/2.0/SpatialEnvironmentCode.json\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseCode\",\"title\":\"CourseCode\",\"type\":\"object\",\"description\":\"A designator for the 16 generalized directions (for example: southeast) based on the compass rose.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_CourseCode\",\"properties\":{\"DirectionCodeType\":{\"$ref\":\"../../../../niem/niem-core/3.0/DirectionCodeType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMinuteValue\",\"title\":\"AngularMinuteValue\",\"type\":\"array\",\"description\":\"A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservedObjectLocation\",\"title\":\"ObservedObjectLocation\",\"type\":\"object\",\"description\":\"A location of an observed object.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ObservedObjectLocation\",\"properties\":{\"ObservedObject2DGeospatialCoordinate\":{\"$ref\":\"ObservedObject2DGeospatialCoordinate.json\"},\"AltitudeMeasure\":{\"$ref\":\"AltitudeMeasure.json\"},\"ElevationMeasure\":{\"$ref\":\"ElevationMeasure.json\"},\"ObservedObjectLocationAugmentationPoint\":{\"ObservedRelativeLocation\":{\"$ref\":\"../../../../tsoa/soi/feature-observation/2.0/ObservedRelativeLocation.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLatitude\",\"title\":\"GeographicCoordinateLatitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_GeographicCoordinateLatitude\",\"properties\":{\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ElevationMeasure\",\"title\":\"ElevationMeasure\",\"type\":\"object\",\"description\":\"A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ElevationMeasure\",\"properties\":{\"LocationHeightMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservedObjectMotion\",\"title\":\"ObservedObjectMotion\",\"type\":\"object\",\"description\":\"A speed and course of an observed object.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ObservedObjectMotion\",\"properties\":{\"CourseAbstract\":{\"CourseAngleDegreesMeasure\":{\"$ref\":\"CourseAngleDegreesMeasure.json\"},\"CourseAngleMeasure\":{\"$ref\":\"CourseAngleMeasure.json\"},\"CourseCode\":{\"$ref\":\"CourseCode.json\"},\"CourseValue\":{\"$ref\":\"CourseValue.json\"}},\"SpeedValue\":{\"$ref\":\"SpeedValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem_codes_nga_datum_3_0_VerticalDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#MILSTD2525-D\",\"title\":\"MILSTD2525-D\",\"type\":\"object\",\"description\":\"A MILSTD2525-D symbol representation\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observation_2_0_MILSTD2525_D\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AngleDegreesMeasure\",\"title\":\"AngleDegreesMeasure\",\"type\":\"array\",\"description\":\"An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).\",\"version\":\"0.4.4\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/AngularMeasureType.json\"},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseAngleMeasure\",\"title\":\"CourseAngleMeasure\",\"type\":\"object\",\"description\":\"An angular distance of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from \\\"above\\\" the horizontal plane.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_CourseAngleMeasure\",\"properties\":{\"AngularMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/AngularMeasureType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/maritime/3.2/#USMTFEnvironmentCategoryCodeType\",\"title\":\"USMTFEnvironmentCategoryCodeType\",\"type\":\"object\",\"description\":\"A data type for a USMTF-defined force-threat designator code used in combination with threat codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_maritime_3_2_USMTFEnvironmentCategoryCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularSecondValue\",\"title\":\"AngularSecondValue\",\"type\":\"array\",\"description\":\"A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#MILSTD2525-C\",\"title\":\"MILSTD2525-C\",\"type\":\"object\",\"description\":\"A MILSTD2525-C symbol representation\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observation_2_0_MILSTD2525_C\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularDegreeValue\",\"title\":\"AngularDegreeValue\",\"type\":\"array\",\"description\":\"A value that specifies a degree of an angular measure.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"number\"}],\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#SpatialEnvironmentCode\",\"title\":\"SpatialEnvironmentCode\",\"type\":\"object\",\"description\":\"A spatial environment Code.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode\",\"properties\":{\"USMTFEnvironmentCategoryCodeType\":{\"$ref\":\"../../../../niem/domains/maritime/3.2/USMTFEnvironmentCategoryCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AngularMeasureDecimalValue\",\"title\":\"AngularMeasureDecimalValue\",\"type\":\"number\",\"description\":\"A decimal value for a measurement of an angle.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_AngularMeasureDecimalValue\",\"properties\":{},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseAngleDegreesMeasure\",\"title\":\"CourseAngleDegreesMeasure\",\"type\":\"object\",\"description\":\"An angular distance measured in degrees of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from \\\"above\\\" the horizontal plane.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure\",\"properties\":{\"AngleDegreesMeasure\":{\"$ref\":\"AngleDegreesMeasure.json\"},\"DirectionDatumAbstract\":{\"DirectionDatumCode\":{\"$ref\":\"DirectionDatumCode.json\"}},\"CourseAngleDegreesMeasureAugmentationPoint\":{\"AngularMeasureDecimalValue\":{\"$ref\":\"AngularMeasureDecimalValue.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LocationHeightVerticalDatumText\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AltitudeMeasure\",\"title\":\"AltitudeMeasure\",\"type\":\"object\",\"description\":\"A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_AltitudeMeasure\",\"properties\":{\"LocationHeightMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseValue\",\"title\":\"CourseValue\",\"type\":\"object\",\"description\":\"A direction of horizontal motion with respect to true north, measured in degrees.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_CourseValue\",\"properties\":{\"sigmaErrorValue\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#ObservedRelativeLocation\",\"title\":\"ObservedRelativeLocation\",\"type\":\"object\",\"description\":\"A relative location measurement.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observation_2_0_ObservedRelativeLocation\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLongitude\",\"title\":\"GeographicCoordinateLongitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_GeographicCoordinateLongitude\",\"properties\":{\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LatitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#Location2DGeospatialCoordinateType\",\"title\":\"Location2DGeospatialCoordinateType\",\"type\":\"object\",\"description\":\"A data type for a location identified by latitude and longitude.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_Location2DGeospatialCoordinateType\",\"properties\":{\"GeographicCoordinateLatitude\":{\"$ref\":\"GeographicCoordinateLatitude.json\"},\"GeographicCoordinateLongitude\":{\"$ref\":\"GeographicCoordinateLongitude.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#DirectionDatumCode\",\"title\":\"DirectionDatumCode\",\"type\":\"object\",\"description\":\"A designator for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_DirectionDatumCode\",\"properties\":{\"DirectionDatumCodeType\":{\"$ref\":\"../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservationDateTime\",\"title\":\"ObservationDateTime\",\"type\":\"object\",\"description\":\"A Date Time Group when this object was observed with the given information. Not to be confused with the Publish Time, which indicates when the system published the message.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ObservationDateTime\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#MILSTD2525-B\",\"title\":\"MILSTD2525-B\",\"type\":\"object\",\"description\":\"A MILSTD2525-B symbol representation.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observation_2_0_MILSTD2525_B\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#DirectionDatumCodeType\",\"title\":\"DirectionDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.4\",\"javaType\":\"niem_codes_nga_datum_3_0_DirectionDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservationOPEXCode\",\"title\":\"ObservationOPEXCode\",\"type\":\"object\",\"description\":\"A designator specifying whether observation was a part of an operation, exercise or simulation.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ObservationOPEXCode\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#DirectionCodeType\",\"title\":\"DirectionCodeType\",\"type\":\"object\",\"description\":\"A data type for compass directions.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_DirectionCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightMeasureType\",\"title\":\"LocationHeightMeasureType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the height of a location relative to a reference point.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LocationHeightMeasureType\",\"properties\":{\"LocationHeightVerticalDatum\":{\"LocationHeightVerticalDatumCode\":{\"$ref\":\"LocationHeightVerticalDatumCode.json\"},\"LocationHeightVerticalDatumText\":{\"$ref\":\"LocationHeightVerticalDatumText.json\"}}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#SpeedValue\",\"title\":\"SpeedValue\",\"type\":\"array\",\"description\":\"A magnitude of motion (rate of change of position) of an object.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"speedUnitCode\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LongitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMeasureType\",\"title\":\"AngularMeasureType\",\"type\":\"object\",\"description\":\"A data type for the measurement of an angle.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_AngularMeasureType\",\"properties\":{\"AngularDegreeValue\":{\"$ref\":\"AngularDegreeValue.json\"},\"AngularMinuteValue\":{\"$ref\":\"AngularMinuteValue.json\"},\"AngularSecondValue\":{\"$ref\":\"AngularSecondValue.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"ObservedObject2DGeospatialCoordinate.json", "../../../../niem/domains/militaryOperations/3.2/Observation.json", "CourseCode.json", "AngularMinuteValue.json", "ObservedObjectLocation.json", "GeographicCoordinateLatitude.json", "ElevationMeasure.json", "ObservedObjectMotion.json", "../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json", "../../../../tsoa/soi/feature-observation/2.0/MILSTD2525-D.json", "AngleDegreesMeasure.json", "CourseAngleMeasure.json", "../../../../niem/domains/maritime/3.2/USMTFEnvironmentCategoryCodeType.json", "AngularSecondValue.json", "../../../../tsoa/soi/feature-observation/2.0/MILSTD2525-C.json", "AngularDegreeValue.json", "../../../../tsoa/soi/feature-observation/2.0/SpatialEnvironmentCode.json", "AngularMeasureDecimalValue.json", "CourseAngleDegreesMeasure.json", "LocationHeightVerticalDatumText.json", "AltitudeMeasure.json", "CourseValue.json", "../../../../tsoa/soi/feature-observation/2.0/ObservedRelativeLocation.json", "GeographicCoordinateLongitude.json", "LatitudeDegreeValue.json", "../../../../niem/niem-core/3.0/Location2DGeospatialCoordinateType.json", "DirectionDatumCode.json", "ObservationDateTime.json", "../../../../tsoa/soi/feature-observation/2.0/MILSTD2525-B.json", "../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json", "ObservationOPEXCode.json", "../../../../niem/niem-core/3.0/DirectionCodeType.json", "../../../../niem/niem-core/3.0/LocationHeightMeasureType.json", "SpeedValue.json", "LocationHeightVerticalDatumCode.json", "LongitudeDegreeValue.json", "../../../../niem/niem-core/3.0/AngularMeasureType.json"};
    }

    public static String getSchema() {
        String schemaString = new String();
        for(String schema : schemaArray)
{
 schemaString = schemaString.concat(schema); 
}
        return schemaString;
    }

    /**
     * Create an instance of this class from a JSON string.
     * 
     * @param s
     *     The JSON data.
     * @return
     *     Returns an instance of this class.
     */
    public static tsoa_soi_feature_observation_2_0_FeatureObservation fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, tsoa_soi_feature_observation_2_0_FeatureObservation.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
