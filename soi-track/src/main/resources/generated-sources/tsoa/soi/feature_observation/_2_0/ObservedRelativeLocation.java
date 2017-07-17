
package tsoa.soi.feature_observation._2_0;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import javax.validation.Valid;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * ObservedRelativeLocation
 * <p>
 * A relative location measurement.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "RelativeLocation"
})
public class ObservedRelativeLocation {

    /**
     * ObjectType
     * <p>
     * 
     * 
     */
    @JsonProperty("ObjectType")
    @Valid
    private niem.structures._3_0.ObjectType ObjectType;
    /**
     * RelativeLocation
     * <p>
     * A set of information describing the location of an object (i.e., radiation measurement instrument, radiation detector, or measured item) or a radiation source relative to a reference point (Origin).
     * 
     */
    @JsonProperty("RelativeLocation")
    @Size(max = 16)
    @Valid
    private List<Object> RelativeLocation = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#ObservedRelativeLocation\",\"title\":\"ObservedRelativeLocation\",\"type\":\"object\",\"description\":\"A relative location measurement.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.feature_observation._2_0.ObservedRelativeLocation\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"RelativeLocation\":{\"$ref\":\"../../../../niem/domains/cbrn/3.2/RelativeLocation.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * ObjectType
     * <p>
     * 
     * 
     * @return
     *     The ObjectType
     */
    @JsonProperty("ObjectType")
    public niem.structures._3_0.ObjectType getObjectType() {
        return ObjectType;
    }

    /**
     * ObjectType
     * <p>
     * 
     * 
     * @param ObjectType
     *     The ObjectType
     */
    @JsonProperty("ObjectType")
    public void setObjectType(niem.structures._3_0.ObjectType ObjectType) {
        this.ObjectType = ObjectType;
    }

    /**
     * RelativeLocation
     * <p>
     * A set of information describing the location of an object (i.e., radiation measurement instrument, radiation detector, or measured item) or a radiation source relative to a reference point (Origin).
     * 
     * @return
     *     The RelativeLocation
     */
    @JsonProperty("RelativeLocation")
    public List<Object> getRelativeLocation() {
        return RelativeLocation;
    }

    /**
     * RelativeLocation
     * <p>
     * A set of information describing the location of an object (i.e., radiation measurement instrument, radiation detector, or measured item) or a radiation source relative to a reference point (Origin).
     * 
     * @param RelativeLocation
     *     The RelativeLocation
     */
    @JsonProperty("RelativeLocation")
    public void setRelativeLocation(List<Object> RelativeLocation) {
        this.RelativeLocation = RelativeLocation;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("ObjectType".equals(name)) {
            if (value instanceof niem.structures._3_0.ObjectType) {
                setObjectType(((niem.structures._3_0.ObjectType) value));
            } else {
                throw new IllegalArgumentException(("property \"ObjectType\" is of type \"niem.structures._3_0.ObjectType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("RelativeLocation".equals(name)) {
                if (value instanceof List) {
                    setRelativeLocation(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"RelativeLocation\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                return false;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("ObjectType".equals(name)) {
            return getObjectType();
        } else {
            if ("RelativeLocation".equals(name)) {
                return getRelativeLocation();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ObservedRelativeLocation.NOT_FOUND_VALUE);
        if (ObservedRelativeLocation.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(RelativeLocation).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObservedRelativeLocation) == false) {
            return false;
        }
        ObservedRelativeLocation rhs = ((ObservedRelativeLocation) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(RelativeLocation, rhs.RelativeLocation).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#RemarksComplexObjectType\",\"title\":\"RemarksComplexObjectType\",\"type\":\"object\",\"description\":\"A data type providing a Remark via inheritance to applicable Types.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.RemarksComplexObjectType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#RelativeLocationAzimuthValue\",\"title\":\"RelativeLocationAzimuthValue\",\"type\":\"object\",\"description\":\"A horizontal bearing angle with respect to True North from a reference point (Origin) to an object (i.e., instrument, detector, or item) or a nuclide. Its value is the angle subtended by the projection onto the horizontal plane of a straight line from the reference point to the center of the object or nuclide, and a line extending in the forward direction from the reference point. The angle range is from \\\"-180.0\\\" to \\\"+180.0\\\" degrees. A value of zero implies the center of the object or nuclide's body is aligned directly in front of the reference point; positive values imply the object or nuclide is to the right of the reference point; negative values imply the object or nuclide is to the left of the reference point.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.RelativeLocationAzimuthValue\",\"properties\":{\"value\":{\"$ref\":\"Angle180Type.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LengthUnitCode\",\"title\":\"LengthUnitCode\",\"type\":\"object\",\"description\":\"A unit of measure of a length value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LengthUnitCode\",\"properties\":{\"LengthCodeType\":{\"$ref\":\"../../../niem/codes/unece_rec20/3.0/LengthCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/maritime/3.2/#AngleUnit\",\"title\":\"AngleUnit\",\"type\":\"object\",\"description\":\"A data concept for a unit of measure of an angle value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.maritime._3_2.AngleUnit\",\"properties\":{\"value\":{\"$ref\":\"../../../niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LatitudeDegreeValue\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AltitudeMeasure\",\"title\":\"AltitudeMeasure\",\"type\":\"array\",\"description\":\"A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.\",\"version\":\"0.4.5\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLongitude\",\"title\":\"GeographicCoordinateLongitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.GeographicCoordinateLongitude\",\"properties\":{\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#DistanceValue\",\"title\":\"DistanceValue\",\"type\":\"object\",\"description\":\"A scalar distance between the center of an object (i.e., instrument, detector, or item) or nuclide and the center of a reference point (Origin).\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.DistanceValue\",\"properties\":{\"unitsText\":{\"type\":[\"string\",\"null\"]}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#MeasurePoint\",\"title\":\"MeasurePoint\",\"type\":\"object\",\"description\":\"A data concept for a measurement value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.MeasurePoint\",\"properties\":{\"MeasureValue\":{\"MeasureIntegerValue\":{\"value\":{\"type\":[\"integer\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ElevationMeasure\",\"title\":\"ElevationMeasure\",\"type\":\"array\",\"description\":\"A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.\",\"version\":\"0.4.5\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/unece_rec20/3.0/#LengthCodeType\",\"title\":\"LengthCodeType\",\"type\":\"object\",\"description\":\"A data type for units of measurements for a length value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.unece_rec20._3_0.LengthCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#Angle180Type\",\"title\":\"Angle180Type\",\"type\":\"object\",\"description\":\"A data type for an angle measure where the units are decimal degrees and the values range from +180.0 to -180.0.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.Angle180Type\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648},\"unitsText\":{\"type\":\"string\",\"description\":\"http://www.w3.org/TR/xmlschema-2/#normalizedString\",\"maxLength\":128}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightMeasureType\",\"title\":\"LocationHeightMeasureType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the height of a location relative to a reference point.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightMeasureType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"MeasureValue\":{\"MeasurePoint\":{\"$ref\":\"MeasurePoint.json\"}},\"MeasureUnit\":{\"AngleUnit\":{\"$ref\":\"../../../niem/domains/maritime/3.2/AngleUnit.json\"},\"LengthUnitCode\":{\"$ref\":\"LengthUnitCode.json\"}},\"LocationHeightVerticalDatum\":{\"LocationHeightVerticalDatumCode\":{\"$ref\":\"LocationHeightVerticalDatumCode.json\"},\"LocationHeightVerticalDatumText\":{\"$ref\":\"LocationHeightVerticalDatumText.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#Location2DGeospatialCoordinate\",\"title\":\"Location2DGeospatialCoordinate\",\"type\":\"object\",\"description\":\"A location identified by a latitude and longitude.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.Location2DGeospatialCoordinate\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"GeographicCoordinateLatitude\":{\"$ref\":\"GeographicCoordinateLatitude.json\"},\"GeographicCoordinateLongitude\":{\"$ref\":\"GeographicCoordinateLongitude.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#RelativeLocation\",\"title\":\"RelativeLocation\",\"type\":\"array\",\"description\":\"A set of information describing the location of an object (i.e., radiation measurement instrument, radiation detector, or measured item) or a radiation source relative to a reference point (Origin).\",\"version\":\"0.4.5\",\"items\":{\"RemarksComplexObjectType\":{\"$ref\":\"RemarksComplexObjectType.json\"},\"RelativeLocationAzimuthValue\":{\"$ref\":\"RelativeLocationAzimuthValue.json\"},\"RelativeLocationInclinationValue\":{\"$ref\":\"RelativeLocationInclinationValue.json\"},\"DistanceValue\":{\"$ref\":\"DistanceValue.json\"},\"Origin\":{\"$ref\":\"Origin.json\"}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightVerticalDatumText\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLatitude\",\"title\":\"GeographicCoordinateLatitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.GeographicCoordinateLatitude\",\"properties\":{\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#Origin\",\"title\":\"Origin\",\"type\":\"object\",\"description\":\"A definition of an origin in a relative location coordinate system. The coordinates of a point in the relative location system are defined based on this origin.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.Origin\",\"properties\":{\"OriginAugmentationPoint\":{\"OriginLocation\":{\"$ref\":\"../../../../tsoa/soi/feature-observation/2.0/OriginLocation.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.nga_datum._3_0.VerticalDatumCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#Angle90Type\",\"title\":\"Angle90Type\",\"type\":\"object\",\"description\":\"A data type for an inclination measure where the units are decimal degrees and the values range from +90.0 to -90.0.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.Angle90Type\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648},\"unitsText\":{\"type\":\"string\",\"description\":\"http://www.w3.org/TR/xmlschema-2/#normalizedString\",\"maxLength\":128}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LongitudeDegreeValue\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#RelativeLocationInclinationValue\",\"title\":\"RelativeLocationInclinationValue\",\"type\":\"object\",\"description\":\"A vertical bearing angle with respect to the horizontal plane from a reference point (Origin) to an object (i.e., instrument, detector, or item) or a nuclide. Its value is the angle subtended by a straight line, running from the center of the reference point to the center of the object or nuclide, and a projection of that line onto the horizontal plane. The angle range is from \\\"-90.0\\\" to \\\"+90.0\\\" degrees. A value of zero implies the center of the object or nuclide is at the same altitude or elevation as the reference point; positive values imply the object or nuclide is higher than the reference point; negative values imply the object or nuclide is lower than the reference point.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.RelativeLocationInclinationValue\",\"properties\":{\"value\":{\"$ref\":\"Angle90Type.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#OriginLocation\",\"title\":\"OriginLocation\",\"type\":\"object\",\"description\":\"An origin location measurement.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.feature_observation._2_0.OriginLocation\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"AltitudeMeasure\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/AltitudeMeasure.json\"},\"ElevationMeasure\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ElevationMeasure.json\"},\"Location2DGeospatialCoordinate\":{\"$ref\":\"../../../../niem/niem-core/3.0/Location2DGeospatialCoordinate.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"RemarksComplexObjectType.json", "RelativeLocationAzimuthValue.json", "LengthUnitCode.json", "../../../niem/domains/maritime/3.2/AngleUnit.json", "LatitudeDegreeValue.json", "../../../../niem/domains/militaryOperations/3.2/AltitudeMeasure.json", "GeographicCoordinateLongitude.json", "LocationHeightVerticalDatumCode.json", "DistanceValue.json", "MeasurePoint.json", "../../../niem-core/3.0/TextType.json", "../../../../niem/domains/militaryOperations/3.2/ElevationMeasure.json", "../../../niem/codes/unece_rec20/3.0/LengthCodeType.json", "Angle180Type.json", "../../../../niem/niem-core/3.0/LocationHeightMeasureType.json", "../../../../niem/niem-core/3.0/Location2DGeospatialCoordinate.json", "../../../../niem/domains/cbrn/3.2/RelativeLocation.json", "LocationHeightVerticalDatumText.json", "GeographicCoordinateLatitude.json", "Origin.json", "../../../niem/structures/3.0/ObjectType.json", "../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json", "Angle90Type.json", "LongitudeDegreeValue.json", "RelativeLocationInclinationValue.json", "../../../../tsoa/soi/feature-observation/2.0/OriginLocation.json"};
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
    public static ObservedRelativeLocation fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservedRelativeLocation.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
