
package tsoa.soi.tsoa_track._2_0;

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
public class ContactInformationAugmentation {

    /**
     * ContactDSNTelephoneNumber
     * <p>
     * A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.
     * 
     */
    @JsonProperty("ContactDSNTelephoneNumber")
    @Valid
    private niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber ContactDSNTelephoneNumber;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ContactInformationAugmentation\",\"title\":\"ContactInformationAugmentation\",\"type\":\"object\",\"description\":\"A contact information augmentation.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.ContactInformationAugmentation\",\"properties\":{\"ContactDSNTelephoneNumber\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json\"}},\"additionalProperties\":false}", ""};
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
    public niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber getContactDSNTelephoneNumber() {
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
    public void setContactDSNTelephoneNumber(niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber ContactDSNTelephoneNumber) {
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
            if (value instanceof niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber) {
                setContactDSNTelephoneNumber(((niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber) value));
            } else {
                throw new IllegalArgumentException(("property \"ContactDSNTelephoneNumber\" is of type \"niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, ContactInformationAugmentation.NOT_FOUND_VALUE);
        if (ContactInformationAugmentation.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof ContactInformationAugmentation) == false) {
            return false;
        }
        ContactInformationAugmentation rhs = ((ContactInformationAugmentation) other);
        return new EqualsBuilder().append(ContactDSNTelephoneNumber, rhs.ContactDSNTelephoneNumber).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FullTelephoneNumberType\",\"title\":\"FullTelephoneNumberType\",\"type\":\"object\",\"description\":\"A data type for a full telephone number.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.FullTelephoneNumberType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"TelephoneNumberFullID\":{\"$ref\":\"TelephoneNumberFullID.json\"},\"TelephoneSuffixID\":{\"$ref\":\"TelephoneSuffixID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneSuffixID\",\"title\":\"TelephoneSuffixID\",\"type\":\"array\",\"description\":\"An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneNumberFullID\",\"title\":\"TelephoneNumberFullID\",\"type\":\"array\",\"description\":\"A complete telephone number.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ContactDSNTelephoneNumber\",\"title\":\"ContactDSNTelephoneNumber\",\"type\":\"object\",\"description\":\"A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber\",\"properties\":{\"FullTelephoneNumberType\":{\"$ref\":\"../../../../niem/niem-core/3.0/FullTelephoneNumberType.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/niem-core/3.0/FullTelephoneNumberType.json", "TelephoneSuffixID.json", "TelephoneNumberFullID.json", "../../../niem/structures/3.0/ObjectType.json", "../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json"};
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
    public static ContactInformationAugmentation fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ContactInformationAugmentation.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
