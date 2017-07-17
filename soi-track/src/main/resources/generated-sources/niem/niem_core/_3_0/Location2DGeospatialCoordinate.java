
package niem.niem_core._3_0;

import java.io.IOException;
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
 * Location2DGeospatialCoordinate
 * <p>
 * A location identified by a latitude and longitude.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "GeographicCoordinateLatitude",
    "GeographicCoordinateLongitude"
})
public class Location2DGeospatialCoordinate {

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
     * GeographicCoordinateLatitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Equator.
     * 
     */
    @JsonProperty("GeographicCoordinateLatitude")
    @Valid
    private niem.niem_core._3_0.GeographicCoordinateLatitude GeographicCoordinateLatitude;
    /**
     * GeographicCoordinateLongitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Prime Meridian.
     * 
     */
    @JsonProperty("GeographicCoordinateLongitude")
    @Valid
    private niem.niem_core._3_0.GeographicCoordinateLongitude GeographicCoordinateLongitude;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#Location2DGeospatialCoordinate\",\"title\":\"Location2DGeospatialCoordinate\",\"type\":\"object\",\"description\":\"A location identified by a latitude and longitude.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.Location2DGeospatialCoordinate\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"GeographicCoordinateLatitude\":{\"$ref\":\"GeographicCoordinateLatitude.json\"},\"GeographicCoordinateLongitude\":{\"$ref\":\"GeographicCoordinateLongitude.json\"}},\"additionalProperties\":false}", ""};
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
     * GeographicCoordinateLatitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Equator.
     * 
     * @return
     *     The GeographicCoordinateLatitude
     */
    @JsonProperty("GeographicCoordinateLatitude")
    public niem.niem_core._3_0.GeographicCoordinateLatitude getGeographicCoordinateLatitude() {
        return GeographicCoordinateLatitude;
    }

    /**
     * GeographicCoordinateLatitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Equator.
     * 
     * @param GeographicCoordinateLatitude
     *     The GeographicCoordinateLatitude
     */
    @JsonProperty("GeographicCoordinateLatitude")
    public void setGeographicCoordinateLatitude(niem.niem_core._3_0.GeographicCoordinateLatitude GeographicCoordinateLatitude) {
        this.GeographicCoordinateLatitude = GeographicCoordinateLatitude;
    }

    /**
     * GeographicCoordinateLongitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Prime Meridian.
     * 
     * @return
     *     The GeographicCoordinateLongitude
     */
    @JsonProperty("GeographicCoordinateLongitude")
    public niem.niem_core._3_0.GeographicCoordinateLongitude getGeographicCoordinateLongitude() {
        return GeographicCoordinateLongitude;
    }

    /**
     * GeographicCoordinateLongitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Prime Meridian.
     * 
     * @param GeographicCoordinateLongitude
     *     The GeographicCoordinateLongitude
     */
    @JsonProperty("GeographicCoordinateLongitude")
    public void setGeographicCoordinateLongitude(niem.niem_core._3_0.GeographicCoordinateLongitude GeographicCoordinateLongitude) {
        this.GeographicCoordinateLongitude = GeographicCoordinateLongitude;
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
            if ("GeographicCoordinateLatitude".equals(name)) {
                if (value instanceof niem.niem_core._3_0.GeographicCoordinateLatitude) {
                    setGeographicCoordinateLatitude(((niem.niem_core._3_0.GeographicCoordinateLatitude) value));
                } else {
                    throw new IllegalArgumentException(("property \"GeographicCoordinateLatitude\" is of type \"niem.niem_core._3_0.GeographicCoordinateLatitude\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("GeographicCoordinateLongitude".equals(name)) {
                    if (value instanceof niem.niem_core._3_0.GeographicCoordinateLongitude) {
                        setGeographicCoordinateLongitude(((niem.niem_core._3_0.GeographicCoordinateLongitude) value));
                    } else {
                        throw new IllegalArgumentException(("property \"GeographicCoordinateLongitude\" is of type \"niem.niem_core._3_0.GeographicCoordinateLongitude\", but got "+ value.getClass().toString()));
                    }
                    return true;
                } else {
                    return false;
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
            if ("GeographicCoordinateLatitude".equals(name)) {
                return getGeographicCoordinateLatitude();
            } else {
                if ("GeographicCoordinateLongitude".equals(name)) {
                    return getGeographicCoordinateLongitude();
                } else {
                    return notFoundValue;
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, Location2DGeospatialCoordinate.NOT_FOUND_VALUE);
        if (Location2DGeospatialCoordinate.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(GeographicCoordinateLatitude).append(GeographicCoordinateLongitude).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof Location2DGeospatialCoordinate) == false) {
            return false;
        }
        Location2DGeospatialCoordinate rhs = ((Location2DGeospatialCoordinate) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(GeographicCoordinateLatitude, rhs.GeographicCoordinateLatitude).append(GeographicCoordinateLongitude, rhs.GeographicCoordinateLongitude).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LongitudeDegreeValue\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LatitudeDegreeValue\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLatitude\",\"title\":\"GeographicCoordinateLatitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.GeographicCoordinateLatitude\",\"properties\":{\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLongitude\",\"title\":\"GeographicCoordinateLongitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.GeographicCoordinateLongitude\",\"properties\":{\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"LongitudeDegreeValue.json", "LatitudeDegreeValue.json", "GeographicCoordinateLatitude.json", "../../../niem/structures/3.0/ObjectType.json", "GeographicCoordinateLongitude.json"};
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
    public static Location2DGeospatialCoordinate fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, Location2DGeospatialCoordinate.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
