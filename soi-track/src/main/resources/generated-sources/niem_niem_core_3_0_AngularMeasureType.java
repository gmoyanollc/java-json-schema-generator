import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
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
 * AngularMeasureType
 * <p>
 * A data type for the measurement of an angle.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AngularDegreeValue",
    "AngularMinuteValue",
    "AngularSecondValue"
})
public class niem_niem_core_3_0_AngularMeasureType {

    /**
     * AngularDegreeValue
     * <p>
     * A value that specifies a degree of an angular measure.
     * 
     */
    @JsonProperty("AngularDegreeValue")
    @Valid
    private List<Object> AngularDegreeValue = new ArrayList<Object>();
    /**
     * AngularMinuteValue
     * <p>
     * A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).
     * 
     */
    @JsonProperty("AngularMinuteValue")
    @Valid
    private List<Object> AngularMinuteValue = new ArrayList<Object>();
    /**
     * AngularSecondValue
     * <p>
     * A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).
     * 
     */
    @JsonProperty("AngularSecondValue")
    @Valid
    private List<Object> AngularSecondValue = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMeasureType\",\"title\":\"AngularMeasureType\",\"type\":\"object\",\"description\":\"A data type for the measurement of an angle.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_AngularMeasureType\",\"properties\":{\"AngularDegreeValue\":{\"$ref\":\"AngularDegreeValue.json\"},\"AngularMinuteValue\":{\"$ref\":\"AngularMinuteValue.json\"},\"AngularSecondValue\":{\"$ref\":\"AngularSecondValue.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * AngularDegreeValue
     * <p>
     * A value that specifies a degree of an angular measure.
     * 
     * @return
     *     The AngularDegreeValue
     */
    @JsonProperty("AngularDegreeValue")
    public List<Object> getAngularDegreeValue() {
        return AngularDegreeValue;
    }

    /**
     * AngularDegreeValue
     * <p>
     * A value that specifies a degree of an angular measure.
     * 
     * @param AngularDegreeValue
     *     The AngularDegreeValue
     */
    @JsonProperty("AngularDegreeValue")
    public void setAngularDegreeValue(List<Object> AngularDegreeValue) {
        this.AngularDegreeValue = AngularDegreeValue;
    }

    /**
     * AngularMinuteValue
     * <p>
     * A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).
     * 
     * @return
     *     The AngularMinuteValue
     */
    @JsonProperty("AngularMinuteValue")
    public List<Object> getAngularMinuteValue() {
        return AngularMinuteValue;
    }

    /**
     * AngularMinuteValue
     * <p>
     * A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).
     * 
     * @param AngularMinuteValue
     *     The AngularMinuteValue
     */
    @JsonProperty("AngularMinuteValue")
    public void setAngularMinuteValue(List<Object> AngularMinuteValue) {
        this.AngularMinuteValue = AngularMinuteValue;
    }

    /**
     * AngularSecondValue
     * <p>
     * A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).
     * 
     * @return
     *     The AngularSecondValue
     */
    @JsonProperty("AngularSecondValue")
    public List<Object> getAngularSecondValue() {
        return AngularSecondValue;
    }

    /**
     * AngularSecondValue
     * <p>
     * A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).
     * 
     * @param AngularSecondValue
     *     The AngularSecondValue
     */
    @JsonProperty("AngularSecondValue")
    public void setAngularSecondValue(List<Object> AngularSecondValue) {
        this.AngularSecondValue = AngularSecondValue;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("AngularDegreeValue".equals(name)) {
            if (value instanceof List) {
                setAngularDegreeValue(((List<Object> ) value));
            } else {
                throw new IllegalArgumentException(("property \"AngularDegreeValue\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("AngularMinuteValue".equals(name)) {
                if (value instanceof List) {
                    setAngularMinuteValue(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"AngularMinuteValue\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("AngularSecondValue".equals(name)) {
                    if (value instanceof List) {
                        setAngularSecondValue(((List<Object> ) value));
                    } else {
                        throw new IllegalArgumentException(("property \"AngularSecondValue\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
                    }
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("AngularDegreeValue".equals(name)) {
            return getAngularDegreeValue();
        } else {
            if ("AngularMinuteValue".equals(name)) {
                return getAngularMinuteValue();
            } else {
                if ("AngularSecondValue".equals(name)) {
                    return getAngularSecondValue();
                } else {
                    return notFoundValue;
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_niem_core_3_0_AngularMeasureType.NOT_FOUND_VALUE);
        if (niem_niem_core_3_0_AngularMeasureType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AngularDegreeValue).append(AngularMinuteValue).append(AngularSecondValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_niem_core_3_0_AngularMeasureType) == false) {
            return false;
        }
        niem_niem_core_3_0_AngularMeasureType rhs = ((niem_niem_core_3_0_AngularMeasureType) other);
        return new EqualsBuilder().append(AngularDegreeValue, rhs.AngularDegreeValue).append(AngularMinuteValue, rhs.AngularMinuteValue).append(AngularSecondValue, rhs.AngularSecondValue).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMinuteValue\",\"title\":\"AngularMinuteValue\",\"type\":\"array\",\"description\":\"A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularSecondValue\",\"title\":\"AngularSecondValue\",\"type\":\"array\",\"description\":\"A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularDegreeValue\",\"title\":\"AngularDegreeValue\",\"type\":\"array\",\"description\":\"A value that specifies a degree of an angular measure.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"number\"}],\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"AngularMinuteValue.json", "AngularSecondValue.json", "AngularDegreeValue.json"};
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
    public static niem_niem_core_3_0_AngularMeasureType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_niem_core_3_0_AngularMeasureType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
