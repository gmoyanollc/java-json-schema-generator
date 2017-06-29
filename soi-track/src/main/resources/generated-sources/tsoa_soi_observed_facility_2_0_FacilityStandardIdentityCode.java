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
 * FacilityStandardIdentityCode
 * <p>
 * A Facility Standard Identity Code.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "StandardIdentityCodeType"
})
public class tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode {

    /**
     * StandardIdentityCodeType
     * <p>
     * A data type for a code describing the standard identity of a track; codes defined by MIL-STD-2525C.
     * 
     */
    @JsonProperty("StandardIdentityCodeType")
    @Valid
    private niem_domains_militaryOperations_3_2_StandardIdentityCodeType StandardIdentityCodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-facility/2.0/#FacilityStandardIdentityCode\",\"title\":\"FacilityStandardIdentityCode\",\"type\":\"object\",\"description\":\"A Facility Standard Identity Code.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode\",\"properties\":{\"StandardIdentityCodeType\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/StandardIdentityCodeType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * StandardIdentityCodeType
     * <p>
     * A data type for a code describing the standard identity of a track; codes defined by MIL-STD-2525C.
     * 
     * @return
     *     The StandardIdentityCodeType
     */
    @JsonProperty("StandardIdentityCodeType")
    public niem_domains_militaryOperations_3_2_StandardIdentityCodeType getStandardIdentityCodeType() {
        return StandardIdentityCodeType;
    }

    /**
     * StandardIdentityCodeType
     * <p>
     * A data type for a code describing the standard identity of a track; codes defined by MIL-STD-2525C.
     * 
     * @param StandardIdentityCodeType
     *     The StandardIdentityCodeType
     */
    @JsonProperty("StandardIdentityCodeType")
    public void setStandardIdentityCodeType(niem_domains_militaryOperations_3_2_StandardIdentityCodeType StandardIdentityCodeType) {
        this.StandardIdentityCodeType = StandardIdentityCodeType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("StandardIdentityCodeType".equals(name)) {
            if (value instanceof niem_domains_militaryOperations_3_2_StandardIdentityCodeType) {
                setStandardIdentityCodeType(((niem_domains_militaryOperations_3_2_StandardIdentityCodeType) value));
            } else {
                throw new IllegalArgumentException(("property \"StandardIdentityCodeType\" is of type \"niem_domains_militaryOperations_3_2_StandardIdentityCodeType\", but got "+ value.getClass().toString()));
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
        if ("StandardIdentityCodeType".equals(name)) {
            return getStandardIdentityCodeType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode.NOT_FOUND_VALUE);
        if (tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(StandardIdentityCodeType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode) == false) {
            return false;
        }
        tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode rhs = ((tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode) other);
        return new EqualsBuilder().append(StandardIdentityCodeType, rhs.StandardIdentityCodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#StandardIdentityCodeType\",\"title\":\"StandardIdentityCodeType\",\"type\":\"object\",\"description\":\"A data type for a code describing the standard identity of a track; codes defined by MIL-STD-2525C.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_StandardIdentityCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/domains/militaryOperations/3.2/StandardIdentityCodeType.json"};
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
    public static tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, tsoa_soi_observed_facility_2_0_FacilityStandardIdentityCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
