
package niem.domains.cbrn._3_2;

import java.io.IOException;
import javax.annotation.Generated;
import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Size;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * Angle180Type
 * <p>
 * A data type for an angle measure where the units are decimal degrees and the values range from +180.0 to -180.0.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value",
    "unitsText"
})
public class Angle180Type {

    /**
     * http://www.w3.org/TR/xmlschema-2/#decimal
     * 
     */
    @JsonProperty("value")
    @DecimalMin("-2147483648")
    @DecimalMax("2147483647")
    private Double value;
    /**
     * http://www.w3.org/TR/xmlschema-2/#normalizedString
     * 
     */
    @JsonProperty("unitsText")
    @Size(max = 128)
    private String unitsText;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#Angle180Type\",\"title\":\"Angle180Type\",\"type\":\"object\",\"description\":\"A data type for an angle measure where the units are decimal degrees and the values range from +180.0 to -180.0.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.Angle180Type\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648},\"unitsText\":{\"type\":\"string\",\"description\":\"http://www.w3.org/TR/xmlschema-2/#normalizedString\",\"maxLength\":128}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * http://www.w3.org/TR/xmlschema-2/#decimal
     * 
     * @return
     *     The value
     */
    @JsonProperty("value")
    public Double getValue() {
        return value;
    }

    /**
     * http://www.w3.org/TR/xmlschema-2/#decimal
     * 
     * @param value
     *     The value
     */
    @JsonProperty("value")
    public void setValue(Double value) {
        this.value = value;
    }

    /**
     * http://www.w3.org/TR/xmlschema-2/#normalizedString
     * 
     * @return
     *     The unitsText
     */
    @JsonProperty("unitsText")
    public String getUnitsText() {
        return unitsText;
    }

    /**
     * http://www.w3.org/TR/xmlschema-2/#normalizedString
     * 
     * @param unitsText
     *     The unitsText
     */
    @JsonProperty("unitsText")
    public void setUnitsText(String unitsText) {
        this.unitsText = unitsText;
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
            if (value instanceof Double) {
                setValue(((Double) value));
            } else {
                throw new IllegalArgumentException(("property \"value\" is of type \"java.lang.Double\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("unitsText".equals(name)) {
                if (value instanceof String) {
                    setUnitsText(((String) value));
                } else {
                    throw new IllegalArgumentException(("property \"unitsText\" is of type \"java.lang.String\", but got "+ value.getClass().toString()));
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
        if ("value".equals(name)) {
            return getValue();
        } else {
            if ("unitsText".equals(name)) {
                return getUnitsText();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, Angle180Type.NOT_FOUND_VALUE);
        if (Angle180Type.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(value).append(unitsText).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof Angle180Type) == false) {
            return false;
        }
        Angle180Type rhs = ((Angle180Type) other);
        return new EqualsBuilder().append(value, rhs.value).append(unitsText, rhs.unitsText).isEquals();
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
    public static Angle180Type fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, Angle180Type.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
