
package niem.niem_core._3_0;

import java.io.IOException;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * LocationHeightVerticalDatumText
 * <p>
 * A vertical datum system used to designate the reference point for a height measurement.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "type",
    "maxLength"
})
public class LocationHeightVerticalDatumText {

    @JsonProperty("type")
    private Object type;
    @JsonProperty("maxLength")
    private Object maxLength;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightVerticalDatumText\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The type
     */
    @JsonProperty("type")
    public Object getType() {
        return type;
    }

    /**
     * 
     * @param type
     *     The type
     */
    @JsonProperty("type")
    public void setType(Object type) {
        this.type = type;
    }

    /**
     * 
     * @return
     *     The maxLength
     */
    @JsonProperty("maxLength")
    public Object getMaxLength() {
        return maxLength;
    }

    /**
     * 
     * @param maxLength
     *     The maxLength
     */
    @JsonProperty("maxLength")
    public void setMaxLength(Object maxLength) {
        this.maxLength = maxLength;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("type".equals(name)) {
            if (value instanceof Object) {
                setType(((Object) value));
            } else {
                throw new IllegalArgumentException(("property \"type\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("maxLength".equals(name)) {
                if (value instanceof Object) {
                    setMaxLength(((Object) value));
                } else {
                    throw new IllegalArgumentException(("property \"maxLength\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
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
        if ("type".equals(name)) {
            return getType();
        } else {
            if ("maxLength".equals(name)) {
                return getMaxLength();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, LocationHeightVerticalDatumText.NOT_FOUND_VALUE);
        if (LocationHeightVerticalDatumText.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(type).append(maxLength).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof LocationHeightVerticalDatumText) == false) {
            return false;
        }
        LocationHeightVerticalDatumText rhs = ((LocationHeightVerticalDatumText) other);
        return new EqualsBuilder().append(type, rhs.type).append(maxLength, rhs.maxLength).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] { };
    }

    public static String[] getReferenceArray() {
        return new String[] { };
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
    public static LocationHeightVerticalDatumText fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, LocationHeightVerticalDatumText.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
