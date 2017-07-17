
package niem.domains.militaryOperations._3_2;

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
 * ObservationDateTime
 * <p>
 * A Date Time Group when this object was observed with the given information. Not to be confused with the Publish Time, which indicates when the system published the message.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value"
})
public class ObservationDateTime {

    /**
     * ZuluDateTimeType
     * <p>
     * A data type for a datetime constrained to always be ZULU.
     * 
     */
    @JsonProperty("value")
    @Valid
    private ZuluDateTimeType value;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservationDateTime\",\"title\":\"ObservationDateTime\",\"type\":\"object\",\"description\":\"A Date Time Group when this object was observed with the given information. Not to be confused with the Publish Time, which indicates when the system published the message.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.ObservationDateTime\",\"properties\":{\"value\":{\"$ref\":\"ZuluDateTimeType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * ZuluDateTimeType
     * <p>
     * A data type for a datetime constrained to always be ZULU.
     * 
     * @return
     *     The value
     */
    @JsonProperty("value")
    public ZuluDateTimeType getValue() {
        return value;
    }

    /**
     * ZuluDateTimeType
     * <p>
     * A data type for a datetime constrained to always be ZULU.
     * 
     * @param value
     *     The value
     */
    @JsonProperty("value")
    public void setValue(ZuluDateTimeType value) {
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
            if (value instanceof ZuluDateTimeType) {
                setValue(((ZuluDateTimeType) value));
            } else {
                throw new IllegalArgumentException(("property \"value\" is of type \"niem.domains.militaryOperations._3_2.ZuluDateTimeType\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, ObservationDateTime.NOT_FOUND_VALUE);
        if (ObservationDateTime.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof ObservationDateTime) == false) {
            return false;
        }
        ObservationDateTime rhs = ((ObservationDateTime) other);
        return new EqualsBuilder().append(value, rhs.value).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ZuluDateTimeType\",\"title\":\"ZuluDateTimeType\",\"type\":\"object\",\"description\":\"A data type for a datetime constrained to always be ZULU.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.ZuluDateTimeType\",\"properties\":{\"value\":{\"type\":\"string\",\"format\":\"date-time\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"ZuluDateTimeType.json"};
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
    public static ObservationDateTime fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservationDateTime.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
