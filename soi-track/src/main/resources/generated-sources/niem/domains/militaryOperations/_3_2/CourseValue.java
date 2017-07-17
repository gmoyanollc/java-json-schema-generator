
package niem.domains.militaryOperations._3_2;

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
 * CourseValue
 * <p>
 * A direction of horizontal motion with respect to true north, measured in degrees.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "sigmaErrorValue"
})
public class CourseValue {

    @JsonProperty("sigmaErrorValue")
    private Double sigmaErrorValue;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseValue\",\"title\":\"CourseValue\",\"type\":\"object\",\"description\":\"A direction of horizontal motion with respect to true north, measured in degrees.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.CourseValue\",\"properties\":{\"sigmaErrorValue\":{\"type\":[\"number\",\"null\"]}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The sigmaErrorValue
     */
    @JsonProperty("sigmaErrorValue")
    public Double getSigmaErrorValue() {
        return sigmaErrorValue;
    }

    /**
     * 
     * @param sigmaErrorValue
     *     The sigmaErrorValue
     */
    @JsonProperty("sigmaErrorValue")
    public void setSigmaErrorValue(Double sigmaErrorValue) {
        this.sigmaErrorValue = sigmaErrorValue;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("sigmaErrorValue".equals(name)) {
            if (value instanceof Double) {
                setSigmaErrorValue(((Double) value));
            } else {
                throw new IllegalArgumentException(("property \"sigmaErrorValue\" is of type \"java.lang.Double\", but got "+ value.getClass().toString()));
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
        if ("sigmaErrorValue".equals(name)) {
            return getSigmaErrorValue();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, CourseValue.NOT_FOUND_VALUE);
        if (CourseValue.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(sigmaErrorValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof CourseValue) == false) {
            return false;
        }
        CourseValue rhs = ((CourseValue) other);
        return new EqualsBuilder().append(sigmaErrorValue, rhs.sigmaErrorValue).isEquals();
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
    public static CourseValue fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, CourseValue.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
