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
 * DistanceValue
 * <p>
 * A scalar distance between the center of an object (i.e., instrument, detector, or item) or nuclide and the center of a reference point (Origin).
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "unitsText"
})
public class niem_domains_cbrn_3_2_DistanceValue {

    @JsonProperty("unitsText")
    private Object unitsText;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#DistanceValue\",\"title\":\"DistanceValue\",\"type\":\"object\",\"description\":\"A scalar distance between the center of an object (i.e., instrument, detector, or item) or nuclide and the center of a reference point (Origin).\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_cbrn_3_2_DistanceValue\",\"properties\":{\"unitsText\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The unitsText
     */
    @JsonProperty("unitsText")
    public Object getUnitsText() {
        return unitsText;
    }

    /**
     * 
     * @param unitsText
     *     The unitsText
     */
    @JsonProperty("unitsText")
    public void setUnitsText(Object unitsText) {
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
        if ("unitsText".equals(name)) {
            if (value instanceof Object) {
                setUnitsText(((Object) value));
            } else {
                throw new IllegalArgumentException(("property \"unitsText\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
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
        if ("unitsText".equals(name)) {
            return getUnitsText();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_domains_cbrn_3_2_DistanceValue.NOT_FOUND_VALUE);
        if (niem_domains_cbrn_3_2_DistanceValue.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(unitsText).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_domains_cbrn_3_2_DistanceValue) == false) {
            return false;
        }
        niem_domains_cbrn_3_2_DistanceValue rhs = ((niem_domains_cbrn_3_2_DistanceValue) other);
        return new EqualsBuilder().append(unitsText, rhs.unitsText).isEquals();
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
    public static niem_domains_cbrn_3_2_DistanceValue fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_domains_cbrn_3_2_DistanceValue.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
