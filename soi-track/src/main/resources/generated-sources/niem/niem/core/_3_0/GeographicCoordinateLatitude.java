
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
 * GeographicCoordinateLatitude
 * <p>
 * A measurement of the angular distance between a point on the Earth and the Equator.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "LatitudeDegreeValue"
})
public class GeographicCoordinateLatitude {

    /**
     * LatitudeDegreeValue
     * <p>
     * A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).
     * 
     */
    @JsonProperty("LatitudeDegreeValue")
    @Valid
    private niem.niem.core._3_0.LatitudeDegreeValue LatitudeDegreeValue;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLatitude\",\"title\":\"GeographicCoordinateLatitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.GeographicCoordinateLatitude\",\"properties\":{\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * LatitudeDegreeValue
     * <p>
     * A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).
     * 
     * @return
     *     The LatitudeDegreeValue
     */
    @JsonProperty("LatitudeDegreeValue")
    public niem.niem.core._3_0.LatitudeDegreeValue getLatitudeDegreeValue() {
        return LatitudeDegreeValue;
    }

    /**
     * LatitudeDegreeValue
     * <p>
     * A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).
     * 
     * @param LatitudeDegreeValue
     *     The LatitudeDegreeValue
     */
    @JsonProperty("LatitudeDegreeValue")
    public void setLatitudeDegreeValue(niem.niem.core._3_0.LatitudeDegreeValue LatitudeDegreeValue) {
        this.LatitudeDegreeValue = LatitudeDegreeValue;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("LatitudeDegreeValue".equals(name)) {
            if (value instanceof niem.niem.core._3_0.LatitudeDegreeValue) {
                setLatitudeDegreeValue(((niem.niem.core._3_0.LatitudeDegreeValue) value));
            } else {
                throw new IllegalArgumentException(("property \"LatitudeDegreeValue\" is of type \"niem.niem.core._3_0.LatitudeDegreeValue\", but got "+ value.getClass().toString()));
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
        if ("LatitudeDegreeValue".equals(name)) {
            return getLatitudeDegreeValue();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, GeographicCoordinateLatitude.NOT_FOUND_VALUE);
        if (GeographicCoordinateLatitude.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(LatitudeDegreeValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof GeographicCoordinateLatitude) == false) {
            return false;
        }
        GeographicCoordinateLatitude rhs = ((GeographicCoordinateLatitude) other);
        return new EqualsBuilder().append(LatitudeDegreeValue, rhs.LatitudeDegreeValue).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LatitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"LatitudeDegreeValue.json"};
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
    public static GeographicCoordinateLatitude fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, GeographicCoordinateLatitude.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
