
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
 * RelativeLocationAzimuthValue
 * <p>
 * A horizontal bearing angle with respect to True North from a reference point (Origin) to an object (i.e., instrument, detector, or item) or a nuclide. Its value is the angle subtended by the projection onto the horizontal plane of a straight line from the reference point to the center of the object or nuclide, and a line extending in the forward direction from the reference point. The angle range is from "-180.0" to "+180.0" degrees. A value of zero implies the center of the object or nuclide's body is aligned directly in front of the reference point; positive values imply the object or nuclide is to the right of the reference point; negative values imply the object or nuclide is to the left of the reference point.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value"
})
public class RelativeLocationAzimuthValue {

    /**
     * Angle180Type
     * <p>
     * A data type for an angle measure where the units are decimal degrees and the values range from +180.0 to -180.0.
     * 
     */
    @JsonProperty("value")
    @Valid
    private Angle180Type value;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#RelativeLocationAzimuthValue\",\"title\":\"RelativeLocationAzimuthValue\",\"type\":\"object\",\"description\":\"A horizontal bearing angle with respect to True North from a reference point (Origin) to an object (i.e., instrument, detector, or item) or a nuclide. Its value is the angle subtended by the projection onto the horizontal plane of a straight line from the reference point to the center of the object or nuclide, and a line extending in the forward direction from the reference point. The angle range is from \\\"-180.0\\\" to \\\"+180.0\\\" degrees. A value of zero implies the center of the object or nuclide's body is aligned directly in front of the reference point; positive values imply the object or nuclide is to the right of the reference point; negative values imply the object or nuclide is to the left of the reference point.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.RelativeLocationAzimuthValue\",\"properties\":{\"value\":{\"$ref\":\"Angle180Type.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * Angle180Type
     * <p>
     * A data type for an angle measure where the units are decimal degrees and the values range from +180.0 to -180.0.
     * 
     * @return
     *     The value
     */
    @JsonProperty("value")
    public Angle180Type getValue() {
        return value;
    }

    /**
     * Angle180Type
     * <p>
     * A data type for an angle measure where the units are decimal degrees and the values range from +180.0 to -180.0.
     * 
     * @param value
     *     The value
     */
    @JsonProperty("value")
    public void setValue(Angle180Type value) {
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
            if (value instanceof Angle180Type) {
                setValue(((Angle180Type) value));
            } else {
                throw new IllegalArgumentException(("property \"value\" is of type \"niem.domains.cbrn._3_2.Angle180Type\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, RelativeLocationAzimuthValue.NOT_FOUND_VALUE);
        if (RelativeLocationAzimuthValue.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof RelativeLocationAzimuthValue) == false) {
            return false;
        }
        RelativeLocationAzimuthValue rhs = ((RelativeLocationAzimuthValue) other);
        return new EqualsBuilder().append(value, rhs.value).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#Angle180Type\",\"title\":\"Angle180Type\",\"type\":\"object\",\"description\":\"A data type for an angle measure where the units are decimal degrees and the values range from +180.0 to -180.0.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.Angle180Type\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648},\"unitsText\":{\"type\":\"string\",\"description\":\"http://www.w3.org/TR/xmlschema-2/#normalizedString\",\"maxLength\":128}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"Angle180Type.json"};
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
    public static RelativeLocationAzimuthValue fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, RelativeLocationAzimuthValue.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
