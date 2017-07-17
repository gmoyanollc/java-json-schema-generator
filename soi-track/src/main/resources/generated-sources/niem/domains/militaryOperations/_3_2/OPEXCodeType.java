
package niem.domains.militaryOperations._3_2;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * OPEXCodeType
 * <p>
 * A data type for the operational status of an event.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value"
})
public class OPEXCodeType {

    /**
     * http://www.w3.org/TR/xmlschema-2/#normalizedString
     * 
     */
    @JsonProperty("value")
    private OPEXCodeType.Value value;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#OPEXCodeType\",\"title\":\"OPEXCodeType\",\"type\":\"object\",\"description\":\"A data type for the operational status of an event.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.OPEXCodeType\",\"properties\":{\"value\":{\"type\":\"string\",\"description\":\"http://www.w3.org/TR/xmlschema-2/#normalizedString\",\"enum\":[\"EXERCISE\",\"OPERATIONS\",\"SIMULATION\",\"TEST\"]}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * http://www.w3.org/TR/xmlschema-2/#normalizedString
     * 
     * @return
     *     The value
     */
    @JsonProperty("value")
    public OPEXCodeType.Value getValue() {
        return value;
    }

    /**
     * http://www.w3.org/TR/xmlschema-2/#normalizedString
     * 
     * @param value
     *     The value
     */
    @JsonProperty("value")
    public void setValue(OPEXCodeType.Value value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("value".equals(name)) {
            if (value instanceof OPEXCodeType.Value) {
                setValue(((OPEXCodeType.Value) value));
            } else {
                throw new IllegalArgumentException(("property \"value\" is of type \"niem.domains.militaryOperations._3_2.OPEXCodeType.Value\", but got "+ value.getClass().toString()));
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
        if ("value".equals(name)) {
            return getValue();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, OPEXCodeType.NOT_FOUND_VALUE);
        if (OPEXCodeType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(value).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof OPEXCodeType) == false) {
            return false;
        }
        OPEXCodeType rhs = ((OPEXCodeType) other);
        return new EqualsBuilder().append(value, rhs.value).isEquals();
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
    public static OPEXCodeType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, OPEXCodeType.class);
        } catch (IOException _x) {
            return null;
        }
    }

    @Generated("org.jsonschema2pojo")
    public static enum Value {

        EXERCISE("EXERCISE"),
        OPERATIONS("OPERATIONS"),
        SIMULATION("SIMULATION"),
        TEST("TEST");
        private final String value;
        private final static Map<String, OPEXCodeType.Value> CONSTANTS = new HashMap<String, OPEXCodeType.Value>();

        static {
            for (OPEXCodeType.Value c: values()) {
                CONSTANTS.put(c.value, c);
            }
        }

        private Value(String value) {
            this.value = value;
        }

        @JsonValue
        @Override
        public String toString() {
            return this.value;
        }

        @JsonCreator
        public static OPEXCodeType.Value fromValue(String value) {
            OPEXCodeType.Value constant = CONSTANTS.get(value);
            if (constant == null) {
                throw new IllegalArgumentException(value);
            } else {
                return constant;
            }
        }

    }

}
