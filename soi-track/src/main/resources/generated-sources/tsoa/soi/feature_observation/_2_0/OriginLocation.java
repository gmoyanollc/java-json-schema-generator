
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
import niem.niem_core._3_0.LocationHeightMeasureType;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * OriginLocation
 * <p>
 * An origin location measurement.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "AltitudeMeasure",
    "ElevationMeasure",
    "Location2DGeospatialCoordinate"
})
public class OriginLocation {

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
     * AltitudeMeasure
     * <p>
     * A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.
     * 
     */
    @JsonProperty("AltitudeMeasure")
    @Size(max = 16)
    @Valid
    private List<LocationHeightMeasureType> AltitudeMeasure = new ArrayList<LocationHeightMeasureType>();
    /**
     * ElevationMeasure
     * <p>
     * A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.
     * 
     */
    @JsonProperty("ElevationMeasure")
    @Size(max = 16)
    @Valid
    private List<LocationHeightMeasureType> ElevationMeasure = new ArrayList<LocationHeightMeasureType>();
    /**
     * Location2DGeospatialCoordinate
     * <p>
     * A location identified by a latitude and longitude.
     * 
     */
    @JsonProperty("Location2DGeospatialCoordinate")
    @Valid
    private niem.niem_core._3_0.Location2DGeospatialCoordinate Location2DGeospatialCoordinate;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#OriginLocation\",\"title\":\"OriginLocation\",\"type\":\"object\",\"description\":\"An origin location measurement.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.feature_observation._2_0.OriginLocation\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"AltitudeMeasure\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/AltitudeMeasure.json\"},\"ElevationMeasure\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ElevationMeasure.json\"},\"Location2DGeospatialCoordinate\":{\"$ref\":\"../../../../niem/niem-core/3.0/Location2DGeospatialCoordinate.json\"}},\"additionalProperties\":false}", ""};
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
     * AltitudeMeasure
     * <p>
     * A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.
     * 
     * @return
     *     The AltitudeMeasure
     */
    @JsonProperty("AltitudeMeasure")
    public List<LocationHeightMeasureType> getAltitudeMeasure() {
        return AltitudeMeasure;
    }

    /**
     * AltitudeMeasure
     * <p>
     * A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.
     * 
     * @param AltitudeMeasure
     *     The AltitudeMeasure
     */
    @JsonProperty("AltitudeMeasure")
    public void setAltitudeMeasure(List<LocationHeightMeasureType> AltitudeMeasure) {
        this.AltitudeMeasure = AltitudeMeasure;
    }

    /**
     * ElevationMeasure
     * <p>
     * A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.
     * 
     * @return
     *     The ElevationMeasure
     */
    @JsonProperty("ElevationMeasure")
    public List<LocationHeightMeasureType> getElevationMeasure() {
        return ElevationMeasure;
    }

    /**
     * ElevationMeasure
     * <p>
     * A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.
     * 
     * @param ElevationMeasure
     *     The ElevationMeasure
     */
    @JsonProperty("ElevationMeasure")
    public void setElevationMeasure(List<LocationHeightMeasureType> ElevationMeasure) {
        this.ElevationMeasure = ElevationMeasure;
    }

    /**
     * Location2DGeospatialCoordinate
     * <p>
     * A location identified by a latitude and longitude.
     * 
     * @return
     *     The Location2DGeospatialCoordinate
     */
    @JsonProperty("Location2DGeospatialCoordinate")
    public niem.niem_core._3_0.Location2DGeospatialCoordinate getLocation2DGeospatialCoordinate() {
        return Location2DGeospatialCoordinate;
    }

    /**
     * Location2DGeospatialCoordinate
     * <p>
     * A location identified by a latitude and longitude.
     * 
     * @param Location2DGeospatialCoordinate
     *     The Location2DGeospatialCoordinate
     */
    @JsonProperty("Location2DGeospatialCoordinate")
    public void setLocation2DGeospatialCoordinate(niem.niem_core._3_0.Location2DGeospatialCoordinate Location2DGeospatialCoordinate) {
        this.Location2DGeospatialCoordinate = Location2DGeospatialCoordinate;
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
            if ("AltitudeMeasure".equals(name)) {
                if (value instanceof List) {
                    setAltitudeMeasure(((List<LocationHeightMeasureType> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"AltitudeMeasure\" is of type \"java.util.List<niem.niem_core._3_0.LocationHeightMeasureType>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("ElevationMeasure".equals(name)) {
                    if (value instanceof List) {
                        setElevationMeasure(((List<LocationHeightMeasureType> ) value));
                    } else {
                        throw new IllegalArgumentException(("property \"ElevationMeasure\" is of type \"java.util.List<niem.niem_core._3_0.LocationHeightMeasureType>\", but got "+ value.getClass().toString()));
                    }
                    return true;
                } else {
                    if ("Location2DGeospatialCoordinate".equals(name)) {
                        if (value instanceof niem.niem_core._3_0.Location2DGeospatialCoordinate) {
                            setLocation2DGeospatialCoordinate(((niem.niem_core._3_0.Location2DGeospatialCoordinate) value));
                        } else {
                            throw new IllegalArgumentException(("property \"Location2DGeospatialCoordinate\" is of type \"niem.niem_core._3_0.Location2DGeospatialCoordinate\", but got "+ value.getClass().toString()));
                        }
                        return true;
                    } else {
                        return false;
                    }
                }
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
            if ("AltitudeMeasure".equals(name)) {
                return getAltitudeMeasure();
            } else {
                if ("ElevationMeasure".equals(name)) {
                    return getElevationMeasure();
                } else {
                    if ("Location2DGeospatialCoordinate".equals(name)) {
                        return getLocation2DGeospatialCoordinate();
                    } else {
                        return notFoundValue;
                    }
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, OriginLocation.NOT_FOUND_VALUE);
        if (OriginLocation.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(AltitudeMeasure).append(ElevationMeasure).append(Location2DGeospatialCoordinate).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof OriginLocation) == false) {
            return false;
        }
        OriginLocation rhs = ((OriginLocation) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(AltitudeMeasure, rhs.AltitudeMeasure).append(ElevationMeasure, rhs.ElevationMeasure).append(Location2DGeospatialCoordinate, rhs.Location2DGeospatialCoordinate).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightMeasureType\",\"title\":\"LocationHeightMeasureType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the height of a location relative to a reference point.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightMeasureType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"MeasureValue\":{\"MeasurePoint\":{\"$ref\":\"MeasurePoint.json\"}},\"MeasureUnit\":{\"AngleUnit\":{\"$ref\":\"../../../niem/domains/maritime/3.2/AngleUnit.json\"},\"LengthUnitCode\":{\"$ref\":\"LengthUnitCode.json\"}},\"LocationHeightVerticalDatum\":{\"LocationHeightVerticalDatumCode\":{\"$ref\":\"LocationHeightVerticalDatumCode.json\"},\"LocationHeightVerticalDatumText\":{\"$ref\":\"LocationHeightVerticalDatumText.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#Location2DGeospatialCoordinate\",\"title\":\"Location2DGeospatialCoordinate\",\"type\":\"object\",\"description\":\"A location identified by a latitude and longitude.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.Location2DGeospatialCoordinate\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"GeographicCoordinateLatitude\":{\"$ref\":\"GeographicCoordinateLatitude.json\"},\"GeographicCoordinateLongitude\":{\"$ref\":\"GeographicCoordinateLongitude.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LengthUnitCode\",\"title\":\"LengthUnitCode\",\"type\":\"object\",\"description\":\"A unit of measure of a length value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LengthUnitCode\",\"properties\":{\"LengthCodeType\":{\"$ref\":\"../../../niem/codes/unece_rec20/3.0/LengthCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightVerticalDatumText\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/maritime/3.2/#AngleUnit\",\"title\":\"AngleUnit\",\"type\":\"object\",\"description\":\"A data concept for a unit of measure of an angle value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.maritime._3_2.AngleUnit\",\"properties\":{\"value\":{\"$ref\":\"../../../niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LatitudeDegreeValue\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AltitudeMeasure\",\"title\":\"AltitudeMeasure\",\"type\":\"array\",\"description\":\"A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.\",\"version\":\"0.4.5\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLatitude\",\"title\":\"GeographicCoordinateLatitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.GeographicCoordinateLatitude\",\"properties\":{\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.nga_datum._3_0.VerticalDatumCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLongitude\",\"title\":\"GeographicCoordinateLongitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.GeographicCoordinateLongitude\",\"properties\":{\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#MeasurePoint\",\"title\":\"MeasurePoint\",\"type\":\"object\",\"description\":\"A data concept for a measurement value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.MeasurePoint\",\"properties\":{\"MeasureValue\":{\"MeasureIntegerValue\":{\"value\":{\"type\":[\"integer\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LongitudeDegreeValue\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ElevationMeasure\",\"title\":\"ElevationMeasure\",\"type\":\"array\",\"description\":\"A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.\",\"version\":\"0.4.5\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/unece_rec20/3.0/#LengthCodeType\",\"title\":\"LengthCodeType\",\"type\":\"object\",\"description\":\"A data type for units of measurements for a length value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.unece_rec20._3_0.LengthCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json", "../../../../niem/niem-core/3.0/Location2DGeospatialCoordinate.json", "LengthUnitCode.json", "LocationHeightVerticalDatumText.json", "../../../niem/domains/maritime/3.2/AngleUnit.json", "LatitudeDegreeValue.json", "../../../../niem/domains/militaryOperations/3.2/AltitudeMeasure.json", "GeographicCoordinateLatitude.json", "../../../niem/structures/3.0/ObjectType.json", "../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json", "GeographicCoordinateLongitude.json", "LocationHeightVerticalDatumCode.json", "MeasurePoint.json", "LongitudeDegreeValue.json", "../../../niem-core/3.0/TextType.json", "../../../../niem/domains/militaryOperations/3.2/ElevationMeasure.json", "../../../niem/codes/unece_rec20/3.0/LengthCodeType.json"};
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
    public static OriginLocation fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, OriginLocation.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
