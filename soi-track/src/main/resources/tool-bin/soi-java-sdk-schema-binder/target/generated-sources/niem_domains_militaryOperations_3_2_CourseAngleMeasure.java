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
 * CourseAngleMeasure
 * <p>
 * An angular distance of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from "above" the horizontal plane.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AngularMeasureType"
})
public class niem_domains_militaryOperations_3_2_CourseAngleMeasure {

    /**
     * AngularMeasureType
     * <p>
     * A data type for the measurement of an angle.
     * 
     */
    @JsonProperty("AngularMeasureType")
    @Valid
    private niem_niem_core_3_0_AngularMeasureType AngularMeasureType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseAngleMeasure\",\"title\":\"CourseAngleMeasure\",\"type\":\"object\",\"description\":\"An angular distance of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from \\\"above\\\" the horizontal plane.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_CourseAngleMeasure\",\"properties\":{\"AngularMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/AngularMeasureType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * AngularMeasureType
     * <p>
     * A data type for the measurement of an angle.
     * 
     * @return
     *     The AngularMeasureType
     */
    @JsonProperty("AngularMeasureType")
    public niem_niem_core_3_0_AngularMeasureType getAngularMeasureType() {
        return AngularMeasureType;
    }

    /**
     * AngularMeasureType
     * <p>
     * A data type for the measurement of an angle.
     * 
     * @param AngularMeasureType
     *     The AngularMeasureType
     */
    @JsonProperty("AngularMeasureType")
    public void setAngularMeasureType(niem_niem_core_3_0_AngularMeasureType AngularMeasureType) {
        this.AngularMeasureType = AngularMeasureType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("AngularMeasureType".equals(name)) {
            if (value instanceof niem_niem_core_3_0_AngularMeasureType) {
                setAngularMeasureType(((niem_niem_core_3_0_AngularMeasureType) value));
            } else {
                throw new IllegalArgumentException(("property \"AngularMeasureType\" is of type \"niem_niem_core_3_0_AngularMeasureType\", but got "+ value.getClass().toString()));
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
        if ("AngularMeasureType".equals(name)) {
            return getAngularMeasureType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_domains_militaryOperations_3_2_CourseAngleMeasure.NOT_FOUND_VALUE);
        if (niem_domains_militaryOperations_3_2_CourseAngleMeasure.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AngularMeasureType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_domains_militaryOperations_3_2_CourseAngleMeasure) == false) {
            return false;
        }
        niem_domains_militaryOperations_3_2_CourseAngleMeasure rhs = ((niem_domains_militaryOperations_3_2_CourseAngleMeasure) other);
        return new EqualsBuilder().append(AngularMeasureType, rhs.AngularMeasureType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMinuteValue\",\"title\":\"AngularMinuteValue\",\"type\":\"array\",\"description\":\"A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularSecondValue\",\"title\":\"AngularSecondValue\",\"type\":\"array\",\"description\":\"A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMeasureType\",\"title\":\"AngularMeasureType\",\"type\":\"object\",\"description\":\"A data type for the measurement of an angle.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_AngularMeasureType\",\"properties\":{\"AngularDegreeValue\":{\"$ref\":\"AngularDegreeValue.json\"},\"AngularMinuteValue\":{\"$ref\":\"AngularMinuteValue.json\"},\"AngularSecondValue\":{\"$ref\":\"AngularSecondValue.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularDegreeValue\",\"title\":\"AngularDegreeValue\",\"type\":\"array\",\"description\":\"A value that specifies a degree of an angular measure.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"number\"}],\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"AngularMinuteValue.json", "AngularSecondValue.json", "../../../../niem/niem-core/3.0/AngularMeasureType.json", "AngularDegreeValue.json"};
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
    public static niem_domains_militaryOperations_3_2_CourseAngleMeasure fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_domains_militaryOperations_3_2_CourseAngleMeasure.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
