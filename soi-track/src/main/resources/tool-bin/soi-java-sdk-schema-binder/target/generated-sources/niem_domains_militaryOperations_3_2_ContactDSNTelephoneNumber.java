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
 * ContactDSNTelephoneNumber
 * <p>
 * A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "FullTelephoneNumberType"
})
public class niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber {

    /**
     * FullTelephoneNumberType
     * <p>
     * A data type for a full telephone number.
     * 
     */
    @JsonProperty("FullTelephoneNumberType")
    @Valid
    private niem_niem_core_3_0_FullTelephoneNumberType FullTelephoneNumberType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ContactDSNTelephoneNumber\",\"title\":\"ContactDSNTelephoneNumber\",\"type\":\"object\",\"description\":\"A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber\",\"properties\":{\"FullTelephoneNumberType\":{\"$ref\":\"../../../../niem/niem-core/3.0/FullTelephoneNumberType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * FullTelephoneNumberType
     * <p>
     * A data type for a full telephone number.
     * 
     * @return
     *     The FullTelephoneNumberType
     */
    @JsonProperty("FullTelephoneNumberType")
    public niem_niem_core_3_0_FullTelephoneNumberType getFullTelephoneNumberType() {
        return FullTelephoneNumberType;
    }

    /**
     * FullTelephoneNumberType
     * <p>
     * A data type for a full telephone number.
     * 
     * @param FullTelephoneNumberType
     *     The FullTelephoneNumberType
     */
    @JsonProperty("FullTelephoneNumberType")
    public void setFullTelephoneNumberType(niem_niem_core_3_0_FullTelephoneNumberType FullTelephoneNumberType) {
        this.FullTelephoneNumberType = FullTelephoneNumberType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("FullTelephoneNumberType".equals(name)) {
            if (value instanceof niem_niem_core_3_0_FullTelephoneNumberType) {
                setFullTelephoneNumberType(((niem_niem_core_3_0_FullTelephoneNumberType) value));
            } else {
                throw new IllegalArgumentException(("property \"FullTelephoneNumberType\" is of type \"niem_niem_core_3_0_FullTelephoneNumberType\", but got "+ value.getClass().toString()));
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
        if ("FullTelephoneNumberType".equals(name)) {
            return getFullTelephoneNumberType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber.NOT_FOUND_VALUE);
        if (niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(FullTelephoneNumberType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber) == false) {
            return false;
        }
        niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber rhs = ((niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber) other);
        return new EqualsBuilder().append(FullTelephoneNumberType, rhs.FullTelephoneNumberType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneSuffixID\",\"title\":\"TelephoneSuffixID\",\"type\":\"array\",\"description\":\"An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FullTelephoneNumberType\",\"title\":\"FullTelephoneNumberType\",\"type\":\"object\",\"description\":\"A data type for a full telephone number.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_FullTelephoneNumberType\",\"properties\":{\"TelephoneNumberFullID\":{\"$ref\":\"TelephoneNumberFullID.json\"},\"TelephoneSuffixID\":{\"$ref\":\"TelephoneSuffixID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneNumberFullID\",\"title\":\"TelephoneNumberFullID\",\"type\":\"array\",\"description\":\"A complete telephone number.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"TelephoneSuffixID.json", "../../../../niem/niem-core/3.0/FullTelephoneNumberType.json", "TelephoneNumberFullID.json"};
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
    public static niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
