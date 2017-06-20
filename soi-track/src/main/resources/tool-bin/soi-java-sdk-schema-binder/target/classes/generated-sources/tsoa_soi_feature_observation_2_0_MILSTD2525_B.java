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
 * MILSTD2525-B
 * <p>
 * A MILSTD2525-B symbol representation.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value"
})
public class tsoa_soi_feature_observation_2_0_MILSTD2525_B {

    @JsonProperty("value")
    private String value;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#MILSTD2525-B\",\"title\":\"MILSTD2525-B\",\"type\":\"object\",\"description\":\"A MILSTD2525-B symbol representation.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observation_2_0_MILSTD2525_B\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The value
     */
    @JsonProperty("value")
    public String getValue() {
        return value;
    }

    /**
     * 
     * @param value
     *     The value
     */
    @JsonProperty("value")
    public void setValue(String value) {
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
            if (value instanceof String) {
                setValue(((String) value));
            } else {
                throw new IllegalArgumentException(("property \"value\" is of type \"java.lang.String\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, tsoa_soi_feature_observation_2_0_MILSTD2525_B.NOT_FOUND_VALUE);
        if (tsoa_soi_feature_observation_2_0_MILSTD2525_B.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof tsoa_soi_feature_observation_2_0_MILSTD2525_B) == false) {
            return false;
        }
        tsoa_soi_feature_observation_2_0_MILSTD2525_B rhs = ((tsoa_soi_feature_observation_2_0_MILSTD2525_B) other);
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
    public static tsoa_soi_feature_observation_2_0_MILSTD2525_B fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, tsoa_soi_feature_observation_2_0_MILSTD2525_B.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
