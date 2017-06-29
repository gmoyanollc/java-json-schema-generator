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
    "GeographicCoordinateLatitude",
    "GeographicCoordinateLongitude"
})
public class niem_niem_core_3_0_Location2DGeospatialCoordinate {

    /**
     * GeographicCoordinateLatitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Equator.
     * 
     */
    @JsonProperty("GeographicCoordinateLatitude")
    @Valid
    private niem_niem_core_3_0_GeographicCoordinateLatitude GeographicCoordinateLatitude;
    /**
     * GeographicCoordinateLongitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Prime Meridian.
     * 
     */
    @JsonProperty("GeographicCoordinateLongitude")
    @Valid
    private niem_niem_core_3_0_GeographicCoordinateLongitude GeographicCoordinateLongitude;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#Location2DGeospatialCoordinate\",\"title\":\"Location2DGeospatialCoordinate\",\"type\":\"object\",\"description\":\"A location identified by a latitude and longitude.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_Location2DGeospatialCoordinate\",\"properties\":{\"GeographicCoordinateLatitude\":{\"$ref\":\"GeographicCoordinateLatitude.json\"},\"GeographicCoordinateLongitude\":{\"$ref\":\"GeographicCoordinateLongitude.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * GeographicCoordinateLatitude
     * <p>
     * A measurement of the angular distance between a point on the Earth and the Equator.
     * 
     * @return
     *     The GeographicCoordinateLatitude
     */
    @JsonProperty("GeographicCoordinateLatitude")
    public niem_niem_core_3_0_GeographicCoordinateLatitude getGeographicCoordinateLatitude() {
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
    public void setGeographicCoordinateLatitude(niem_niem_core_3_0_GeographicCoordinateLatitude GeographicCoordinateLatitude) {
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
    public niem_niem_core_3_0_GeographicCoordinateLongitude getGeographicCoordinateLongitude() {
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
    public void setGeographicCoordinateLongitude(niem_niem_core_3_0_GeographicCoordinateLongitude GeographicCoordinateLongitude) {
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
        if ("GeographicCoordinateLatitude".equals(name)) {
            if (value instanceof niem_niem_core_3_0_GeographicCoordinateLatitude) {
                setGeographicCoordinateLatitude(((niem_niem_core_3_0_GeographicCoordinateLatitude) value));
            } else {
                throw new IllegalArgumentException(("property \"GeographicCoordinateLatitude\" is of type \"niem_niem_core_3_0_GeographicCoordinateLatitude\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("GeographicCoordinateLongitude".equals(name)) {
                if (value instanceof niem_niem_core_3_0_GeographicCoordinateLongitude) {
                    setGeographicCoordinateLongitude(((niem_niem_core_3_0_GeographicCoordinateLongitude) value));
                } else {
                    throw new IllegalArgumentException(("property \"GeographicCoordinateLongitude\" is of type \"niem_niem_core_3_0_GeographicCoordinateLongitude\", but got "+ value.getClass().toString()));
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

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_niem_core_3_0_Location2DGeospatialCoordinate.NOT_FOUND_VALUE);
        if (niem_niem_core_3_0_Location2DGeospatialCoordinate.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(GeographicCoordinateLatitude).append(GeographicCoordinateLongitude).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_niem_core_3_0_Location2DGeospatialCoordinate) == false) {
            return false;
        }
        niem_niem_core_3_0_Location2DGeospatialCoordinate rhs = ((niem_niem_core_3_0_Location2DGeospatialCoordinate) other);
        return new EqualsBuilder().append(GeographicCoordinateLatitude, rhs.GeographicCoordinateLatitude).append(GeographicCoordinateLongitude, rhs.GeographicCoordinateLongitude).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLongitude\",\"title\":\"GeographicCoordinateLongitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_GeographicCoordinateLongitude\",\"properties\":{\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLatitude\",\"title\":\"GeographicCoordinateLatitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_GeographicCoordinateLatitude\",\"properties\":{\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LatitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LongitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"GeographicCoordinateLongitude.json", "GeographicCoordinateLatitude.json", "LatitudeDegreeValue.json", "LongitudeDegreeValue.json"};
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
    public static niem_niem_core_3_0_Location2DGeospatialCoordinate fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_niem_core_3_0_Location2DGeospatialCoordinate.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
