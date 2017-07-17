
package niem.niem_core._3_0;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import javax.validation.Valid;
import javax.validation.constraints.Size;
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
    "ObjectType",
    "AngularDegreeValue",
    "AngularMinuteValue",
    "AngularSecondValue"
})
public class AngularMeasureType {

    /**
     * ObjectType
     * <p>
     * 
     * 
     */
    @JsonProperty("ObjectType")
    @Valid
    private niem.structures._3_0.ObjectType ObjectType;
    /**
     * AngularDegreeValue
     * <p>
     * A value that specifies a degree of an angular measure.
     * 
     */
    @JsonProperty("AngularDegreeValue")
    @Size(max = 16)
    @Valid
    private List<Double> AngularDegreeValue = new ArrayList<Double>();
    /**
     * AngularMinuteValue
     * <p>
     * A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).
     * 
     */
    @JsonProperty("AngularMinuteValue")
    @Size(max = 16)
    @Valid
    private List<Object> AngularMinuteValue = new ArrayList<Object>();
    /**
     * AngularSecondValue
     * <p>
     * A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).
     * 
     */
    @JsonProperty("AngularSecondValue")
    @Size(max = 16)
    @Valid
    private List<Object> AngularSecondValue = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMeasureType\",\"title\":\"AngularMeasureType\",\"type\":\"object\",\"description\":\"A data type for the measurement of an angle.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.AngularMeasureType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"AngularDegreeValue\":{\"$ref\":\"AngularDegreeValue.json\"},\"AngularMinuteValue\":{\"$ref\":\"AngularMinuteValue.json\"},\"AngularSecondValue\":{\"$ref\":\"AngularSecondValue.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * ObjectType
     * <p>
     * 
     * 
     * @return
     *     The ObjectType
     */
    @JsonProperty("ObjectType")
    public niem.structures._3_0.ObjectType getObjectType() {
        return ObjectType;
    }

    /**
     * ObjectType
     * <p>
     * 
     * 
     * @param ObjectType
     *     The ObjectType
     */
    @JsonProperty("ObjectType")
    public void setObjectType(niem.structures._3_0.ObjectType ObjectType) {
        this.ObjectType = ObjectType;
    }

    /**
     * AngularDegreeValue
     * <p>
     * A value that specifies a degree of an angular measure.
     * 
     * @return
     *     The AngularDegreeValue
     */
    @JsonProperty("AngularDegreeValue")
    public List<Double> getAngularDegreeValue() {
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
    public void setAngularDegreeValue(List<Double> AngularDegreeValue) {
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
        if ("ObjectType".equals(name)) {
            if (value instanceof niem.structures._3_0.ObjectType) {
                setObjectType(((niem.structures._3_0.ObjectType) value));
            } else {
                throw new IllegalArgumentException(("property \"ObjectType\" is of type \"niem.structures._3_0.ObjectType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("AngularDegreeValue".equals(name)) {
                if (value instanceof List) {
                    setAngularDegreeValue(((List<Double> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"AngularDegreeValue\" is of type \"java.util.List<java.lang.Double>\", but got "+ value.getClass().toString()));
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
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("ObjectType".equals(name)) {
            return getObjectType();
        } else {
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
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, AngularMeasureType.NOT_FOUND_VALUE);
        if (AngularMeasureType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(AngularDegreeValue).append(AngularMinuteValue).append(AngularSecondValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof AngularMeasureType) == false) {
            return false;
        }
        AngularMeasureType rhs = ((AngularMeasureType) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(AngularDegreeValue, rhs.AngularDegreeValue).append(AngularMinuteValue, rhs.AngularMinuteValue).append(AngularSecondValue, rhs.AngularSecondValue).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularDegreeValue\",\"title\":\"AngularDegreeValue\",\"type\":\"array\",\"description\":\"A value that specifies a degree of an angular measure.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"number\",\"maximum\":2147483647,\"minimum\":-2147483648},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMinuteValue\",\"title\":\"AngularMinuteValue\",\"type\":\"array\",\"description\":\"A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularSecondValue\",\"title\":\"AngularSecondValue\",\"type\":\"array\",\"description\":\"A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"AngularDegreeValue.json", "AngularMinuteValue.json", "../../../niem/structures/3.0/ObjectType.json", "AngularSecondValue.json"};
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
    public static AngularMeasureType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, AngularMeasureType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
