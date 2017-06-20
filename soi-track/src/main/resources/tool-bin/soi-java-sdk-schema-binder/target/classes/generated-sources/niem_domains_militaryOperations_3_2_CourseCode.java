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
 * CourseCode
 * <p>
 * A designator for the 16 generalized directions (for example: southeast) based on the compass rose.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "DirectionCodeType"
})
public class niem_domains_militaryOperations_3_2_CourseCode {

    /**
     * DirectionCodeType
     * <p>
     * A data type for compass directions.
     * 
     */
    @JsonProperty("DirectionCodeType")
    @Valid
    private niem_niem_core_3_0_DirectionCodeType DirectionCodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseCode\",\"title\":\"CourseCode\",\"type\":\"object\",\"description\":\"A designator for the 16 generalized directions (for example: southeast) based on the compass rose.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_CourseCode\",\"properties\":{\"DirectionCodeType\":{\"$ref\":\"../../../../niem/niem-core/3.0/DirectionCodeType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * DirectionCodeType
     * <p>
     * A data type for compass directions.
     * 
     * @return
     *     The DirectionCodeType
     */
    @JsonProperty("DirectionCodeType")
    public niem_niem_core_3_0_DirectionCodeType getDirectionCodeType() {
        return DirectionCodeType;
    }

    /**
     * DirectionCodeType
     * <p>
     * A data type for compass directions.
     * 
     * @param DirectionCodeType
     *     The DirectionCodeType
     */
    @JsonProperty("DirectionCodeType")
    public void setDirectionCodeType(niem_niem_core_3_0_DirectionCodeType DirectionCodeType) {
        this.DirectionCodeType = DirectionCodeType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("DirectionCodeType".equals(name)) {
            if (value instanceof niem_niem_core_3_0_DirectionCodeType) {
                setDirectionCodeType(((niem_niem_core_3_0_DirectionCodeType) value));
            } else {
                throw new IllegalArgumentException(("property \"DirectionCodeType\" is of type \"niem_niem_core_3_0_DirectionCodeType\", but got "+ value.getClass().toString()));
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
        if ("DirectionCodeType".equals(name)) {
            return getDirectionCodeType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_domains_militaryOperations_3_2_CourseCode.NOT_FOUND_VALUE);
        if (niem_domains_militaryOperations_3_2_CourseCode.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(DirectionCodeType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_domains_militaryOperations_3_2_CourseCode) == false) {
            return false;
        }
        niem_domains_militaryOperations_3_2_CourseCode rhs = ((niem_domains_militaryOperations_3_2_CourseCode) other);
        return new EqualsBuilder().append(DirectionCodeType, rhs.DirectionCodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#DirectionCodeType\",\"title\":\"DirectionCodeType\",\"type\":\"object\",\"description\":\"A data type for compass directions.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_DirectionCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/niem-core/3.0/DirectionCodeType.json"};
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
    public static niem_domains_militaryOperations_3_2_CourseCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_domains_militaryOperations_3_2_CourseCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
