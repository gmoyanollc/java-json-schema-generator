
package niem.domains.cbrn._3_2;

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
 * RelativeLocationInclinationValue
 * <p>
 * A vertical bearing angle with respect to the horizontal plane from a reference point (Origin) to an object (i.e., instrument, detector, or item) or a nuclide. Its value is the angle subtended by a straight line, running from the center of the reference point to the center of the object or nuclide, and a projection of that line onto the horizontal plane. The angle range is from "-90.0" to "+90.0" degrees. A value of zero implies the center of the object or nuclide is at the same altitude or elevation as the reference point; positive values imply the object or nuclide is higher than the reference point; negative values imply the object or nuclide is lower than the reference point.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value"
})
public class RelativeLocationInclinationValue {

    /**
     * Angle90Type
     * <p>
     * A data type for an inclination measure where the units are decimal degrees and the values range from +90.0 to -90.0.
     * 
     */
    @JsonProperty("value")
    @Valid
    private Angle90Type value;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#RelativeLocationInclinationValue\",\"title\":\"RelativeLocationInclinationValue\",\"type\":\"object\",\"description\":\"A vertical bearing angle with respect to the horizontal plane from a reference point (Origin) to an object (i.e., instrument, detector, or item) or a nuclide. Its value is the angle subtended by a straight line, running from the center of the reference point to the center of the object or nuclide, and a projection of that line onto the horizontal plane. The angle range is from \\\"-90.0\\\" to \\\"+90.0\\\" degrees. A value of zero implies the center of the object or nuclide is at the same altitude or elevation as the reference point; positive values imply the object or nuclide is higher than the reference point; negative values imply the object or nuclide is lower than the reference point.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.RelativeLocationInclinationValue\",\"properties\":{\"value\":{\"$ref\":\"Angle90Type.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * Angle90Type
     * <p>
     * A data type for an inclination measure where the units are decimal degrees and the values range from +90.0 to -90.0.
     * 
     * @return
     *     The value
     */
    @JsonProperty("value")
    public Angle90Type getValue() {
        return value;
    }

    /**
     * Angle90Type
     * <p>
     * A data type for an inclination measure where the units are decimal degrees and the values range from +90.0 to -90.0.
     * 
     * @param value
     *     The value
     */
    @JsonProperty("value")
    public void setValue(Angle90Type value) {
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
            if (value instanceof Angle90Type) {
                setValue(((Angle90Type) value));
            } else {
                throw new IllegalArgumentException(("property \"value\" is of type \"niem.domains.cbrn._3_2.Angle90Type\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, RelativeLocationInclinationValue.NOT_FOUND_VALUE);
        if (RelativeLocationInclinationValue.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof RelativeLocationInclinationValue) == false) {
            return false;
        }
        RelativeLocationInclinationValue rhs = ((RelativeLocationInclinationValue) other);
        return new EqualsBuilder().append(value, rhs.value).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#Angle90Type\",\"title\":\"Angle90Type\",\"type\":\"object\",\"description\":\"A data type for an inclination measure where the units are decimal degrees and the values range from +90.0 to -90.0.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.Angle90Type\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648},\"unitsText\":{\"type\":\"string\",\"description\":\"http://www.w3.org/TR/xmlschema-2/#normalizedString\",\"maxLength\":128}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"Angle90Type.json"};
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
    public static RelativeLocationInclinationValue fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, RelativeLocationInclinationValue.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
