
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
 * MeasurePoint
 * <p>
 * A data concept for a measurement value.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "MeasureValue"
})
public class MeasurePoint {

    @JsonProperty("MeasureValue")
    private Object MeasureValue;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#MeasurePoint\",\"title\":\"MeasurePoint\",\"type\":\"object\",\"description\":\"A data concept for a measurement value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.MeasurePoint\",\"properties\":{\"MeasureValue\":{\"MeasureIntegerValue\":{\"value\":{\"type\":[\"integer\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}}}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The MeasureValue
     */
    @JsonProperty("MeasureValue")
    public Object getMeasureValue() {
        return MeasureValue;
    }

    /**
     * 
     * @param MeasureValue
     *     The MeasureValue
     */
    @JsonProperty("MeasureValue")
    public void setMeasureValue(Object MeasureValue) {
        this.MeasureValue = MeasureValue;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("MeasureValue".equals(name)) {
            if (value instanceof Object) {
                setMeasureValue(((Object) value));
            } else {
                throw new IllegalArgumentException(("property \"MeasureValue\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
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
        if ("MeasureValue".equals(name)) {
            return getMeasureValue();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, MeasurePoint.NOT_FOUND_VALUE);
        if (MeasurePoint.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(MeasureValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof MeasurePoint) == false) {
            return false;
        }
        MeasurePoint rhs = ((MeasurePoint) other);
        return new EqualsBuilder().append(MeasureValue, rhs.MeasureValue).isEquals();
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
    public static MeasurePoint fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, MeasurePoint.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
