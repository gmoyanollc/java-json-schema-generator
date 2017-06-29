
package niem.niem.core._3_0;

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
 * GeographicCoordinateLongitude
 * <p>
 * A measurement of the angular distance between a point on the Earth and the Prime Meridian.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "LongitudeDegreeValue"
})
public class GeographicCoordinateLongitude {

    /**
     * LongitudeDegreeValue
     * <p>
     * A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).
     * 
     */
    @JsonProperty("LongitudeDegreeValue")
    @Valid
    private niem.niem.core._3_0.LongitudeDegreeValue LongitudeDegreeValue;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLongitude\",\"title\":\"GeographicCoordinateLongitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.GeographicCoordinateLongitude\",\"properties\":{\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * LongitudeDegreeValue
     * <p>
     * A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).
     * 
     * @return
     *     The LongitudeDegreeValue
     */
    @JsonProperty("LongitudeDegreeValue")
    public niem.niem.core._3_0.LongitudeDegreeValue getLongitudeDegreeValue() {
        return LongitudeDegreeValue;
    }

    /**
     * LongitudeDegreeValue
     * <p>
     * A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).
     * 
     * @param LongitudeDegreeValue
     *     The LongitudeDegreeValue
     */
    @JsonProperty("LongitudeDegreeValue")
    public void setLongitudeDegreeValue(niem.niem.core._3_0.LongitudeDegreeValue LongitudeDegreeValue) {
        this.LongitudeDegreeValue = LongitudeDegreeValue;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("LongitudeDegreeValue".equals(name)) {
            if (value instanceof niem.niem.core._3_0.LongitudeDegreeValue) {
                setLongitudeDegreeValue(((niem.niem.core._3_0.LongitudeDegreeValue) value));
            } else {
                throw new IllegalArgumentException(("property \"LongitudeDegreeValue\" is of type \"niem.niem.core._3_0.LongitudeDegreeValue\", but got "+ value.getClass().toString()));
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
        if ("LongitudeDegreeValue".equals(name)) {
            return getLongitudeDegreeValue();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, GeographicCoordinateLongitude.NOT_FOUND_VALUE);
        if (GeographicCoordinateLongitude.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(LongitudeDegreeValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof GeographicCoordinateLongitude) == false) {
            return false;
        }
        GeographicCoordinateLongitude rhs = ((GeographicCoordinateLongitude) other);
        return new EqualsBuilder().append(LongitudeDegreeValue, rhs.LongitudeDegreeValue).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LongitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"LongitudeDegreeValue.json"};
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
    public static GeographicCoordinateLongitude fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, GeographicCoordinateLongitude.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
