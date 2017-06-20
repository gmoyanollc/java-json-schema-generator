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
 * ContactInformationAugmentation
 * <p>
 * A contact information augmentation.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ContactDSNTelephoneNumber"
})
public class tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation {

    /**
     * ContactDSNTelephoneNumber
     * <p>
     * A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.
     * 
     */
    @JsonProperty("ContactDSNTelephoneNumber")
    @Valid
    private niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber ContactDSNTelephoneNumber;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ContactInformationAugmentation\",\"title\":\"ContactInformationAugmentation\",\"type\":\"object\",\"description\":\"A contact information augmentation.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation\",\"properties\":{\"ContactDSNTelephoneNumber\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * ContactDSNTelephoneNumber
     * <p>
     * A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.
     * 
     * @return
     *     The ContactDSNTelephoneNumber
     */
    @JsonProperty("ContactDSNTelephoneNumber")
    public niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber getContactDSNTelephoneNumber() {
        return ContactDSNTelephoneNumber;
    }

    /**
     * ContactDSNTelephoneNumber
     * <p>
     * A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.
     * 
     * @param ContactDSNTelephoneNumber
     *     The ContactDSNTelephoneNumber
     */
    @JsonProperty("ContactDSNTelephoneNumber")
    public void setContactDSNTelephoneNumber(niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber ContactDSNTelephoneNumber) {
        this.ContactDSNTelephoneNumber = ContactDSNTelephoneNumber;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("ContactDSNTelephoneNumber".equals(name)) {
            if (value instanceof niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber) {
                setContactDSNTelephoneNumber(((niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber) value));
            } else {
                throw new IllegalArgumentException(("property \"ContactDSNTelephoneNumber\" is of type \"niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber\", but got "+ value.getClass().toString()));
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
        if ("ContactDSNTelephoneNumber".equals(name)) {
            return getContactDSNTelephoneNumber();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation.NOT_FOUND_VALUE);
        if (tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ContactDSNTelephoneNumber).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation) == false) {
            return false;
        }
        tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation rhs = ((tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation) other);
        return new EqualsBuilder().append(ContactDSNTelephoneNumber, rhs.ContactDSNTelephoneNumber).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneSuffixID\",\"title\":\"TelephoneSuffixID\",\"type\":\"array\",\"description\":\"An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ContactDSNTelephoneNumber\",\"title\":\"ContactDSNTelephoneNumber\",\"type\":\"object\",\"description\":\"A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber\",\"properties\":{\"FullTelephoneNumberType\":{\"$ref\":\"../../../../niem/niem-core/3.0/FullTelephoneNumberType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FullTelephoneNumberType\",\"title\":\"FullTelephoneNumberType\",\"type\":\"object\",\"description\":\"A data type for a full telephone number.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_FullTelephoneNumberType\",\"properties\":{\"TelephoneNumberFullID\":{\"$ref\":\"TelephoneNumberFullID.json\"},\"TelephoneSuffixID\":{\"$ref\":\"TelephoneSuffixID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneNumberFullID\",\"title\":\"TelephoneNumberFullID\",\"type\":\"array\",\"description\":\"A complete telephone number.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"TelephoneSuffixID.json", "../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json", "../../../../niem/niem-core/3.0/FullTelephoneNumberType.json", "TelephoneNumberFullID.json"};
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
    public static tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
