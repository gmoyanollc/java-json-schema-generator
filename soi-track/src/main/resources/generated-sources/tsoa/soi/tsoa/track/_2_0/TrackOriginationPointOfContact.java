
package tsoa.soi.tsoa.track._2_0;

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
 * TrackOriginationPointOfContact
 * <p>
 * An Track Origination Point-Of-Contact described by its properties.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ContactInformation"
})
public class TrackOriginationPointOfContact {

    /**
     * ContactInformation
     * <p>
     * A set of details about how to contact a person or an organization.
     * 
     */
    @JsonProperty("ContactInformation")
    @Valid
    private List<Object> ContactInformation = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#TrackOriginationPointOfContact\",\"title\":\"TrackOriginationPointOfContact\",\"type\":\"object\",\"description\":\"An Track Origination Point-Of-Contact described by its properties.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.tsoa.track._2_0.TrackOriginationPointOfContact\",\"properties\":{\"ContactInformation\":{\"$ref\":\"../../../../niem/niem-core/3.0/ContactInformation.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * ContactInformation
     * <p>
     * A set of details about how to contact a person or an organization.
     * 
     * @return
     *     The ContactInformation
     */
    @JsonProperty("ContactInformation")
    public List<Object> getContactInformation() {
        return ContactInformation;
    }

    /**
     * ContactInformation
     * <p>
     * A set of details about how to contact a person or an organization.
     * 
     * @param ContactInformation
     *     The ContactInformation
     */
    @JsonProperty("ContactInformation")
    public void setContactInformation(List<Object> ContactInformation) {
        this.ContactInformation = ContactInformation;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("ContactInformation".equals(name)) {
            if (value instanceof List) {
                setContactInformation(((List<Object> ) value));
            } else {
                throw new IllegalArgumentException(("property \"ContactInformation\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        if ("ContactInformation".equals(name)) {
            return getContactInformation();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, TrackOriginationPointOfContact.NOT_FOUND_VALUE);
        if (TrackOriginationPointOfContact.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ContactInformation).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof TrackOriginationPointOfContact) == false) {
            return false;
        }
        TrackOriginationPointOfContact rhs = ((TrackOriginationPointOfContact) other);
        return new EqualsBuilder().append(ContactInformation, rhs.ContactInformation).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadio\",\"title\":\"ContactRadio\",\"type\":\"object\",\"description\":\"A method of contacting a person or organization by messages over a radio.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactRadio\",\"properties\":{\"ContactRadioChannelText\":{\"$ref\":\"ContactRadioChannelText.json\"},\"ContactRadioCallSignID\":{\"$ref\":\"ContactRadioCallSignID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInformation\",\"title\":\"ContactInformation\",\"type\":\"array\",\"description\":\"A set of details about how to contact a person or an organization.\",\"version\":\"0.4.4\",\"items\":{\"ContactMeans\":{\"ContactInstantMessenger\":{\"$ref\":\"ContactInstantMessenger.json\"},\"ContactTelephoneNumber\":{\"$ref\":\"ContactTelephoneNumber.json\"},\"ContactRadio\":{\"$ref\":\"ContactRadio.json\"},\"ContactEmailID\":{\"$ref\":\"ContactEmailID.json\"}},\"ContactEntity\":{\"$ref\":\"ContactEntity.json\"},\"ContactInformationAugmentationPoint\":{\"ContactInformationAugmentation\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ContactInformationAugmentation.json\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactEmailID\",\"title\":\"ContactEmailID\",\"type\":\"string\",\"description\":\"An electronic mailing address by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactEmailID\",\"properties\":{},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInstantMessenger\",\"title\":\"ContactInstantMessenger\",\"type\":\"object\",\"description\":\"A user account for an instant messaging program by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactInstantMessenger\",\"properties\":{\"InstantMessengerServiceName\":{\"$ref\":\"InstantMessengerServiceName.json\"},\"InstantMessengerScreenID\":{\"$ref\":\"InstantMessengerScreenID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationAbbreviationText\",\"title\":\"OrganizationAbbreviationText\",\"type\":\"array\",\"description\":\"An abbreviation, acronym, or code for an organization name.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ContactInformationAugmentation\",\"title\":\"ContactInformationAugmentation\",\"type\":\"object\",\"description\":\"A contact information augmentation.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.tsoa.track._2_0.ContactInformationAugmentation\",\"properties\":{\"ContactDSNTelephoneNumber\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityPerson\",\"title\":\"EntityPerson\",\"type\":\"object\",\"description\":\"A person capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.EntityPerson\",\"properties\":{\"PersonDescriptionText\":{\"$ref\":\"PersonDescriptionText.json\"},\"PersonName\":{\"$ref\":\"PersonName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonDescriptionText\",\"title\":\"PersonDescriptionText\",\"type\":\"array\",\"description\":\"A description of a person.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ContactDSNTelephoneNumber\",\"title\":\"ContactDSNTelephoneNumber\",\"type\":\"object\",\"description\":\"A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber\",\"properties\":{\"FullTelephoneNumberType\":{\"$ref\":\"../../../../niem/niem-core/3.0/FullTelephoneNumberType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FullTelephoneNumberType\",\"title\":\"FullTelephoneNumberType\",\"type\":\"object\",\"description\":\"A data type for a full telephone number.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.FullTelephoneNumberType\",\"properties\":{\"TelephoneNumberFullID\":{\"$ref\":\"TelephoneNumberFullID.json\"},\"TelephoneSuffixID\":{\"$ref\":\"TelephoneSuffixID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneSuffixID\",\"title\":\"TelephoneSuffixID\",\"type\":\"array\",\"description\":\"An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioCallSignID\",\"title\":\"ContactRadioCallSignID\",\"type\":\"array\",\"description\":\"An identifier of a person using a radio.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerServiceName\",\"title\":\"InstantMessengerServiceName\",\"type\":\"array\",\"description\":\"A name of an instant messaging service.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactTelephoneNumber\",\"title\":\"ContactTelephoneNumber\",\"type\":\"object\",\"description\":\"A telephone number for a telecommunication device by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactTelephoneNumber\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityOrganization\",\"title\":\"EntityOrganization\",\"type\":\"object\",\"description\":\"An organization capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.EntityOrganization\",\"properties\":{\"OrganizationAbbreviationText\":{\"$ref\":\"OrganizationAbbreviationText.json\"},\"OrganizationName\":{\"$ref\":\"OrganizationName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationName\",\"title\":\"OrganizationName\",\"type\":\"array\",\"description\":\"A name of an organization.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactEntity\",\"title\":\"ContactEntity\",\"type\":\"array\",\"description\":\"An entity that may be contacted by using the given contact information.\",\"version\":\"0.4.4\",\"items\":{\"EntityRepresentation\":{\"EntityPerson\":{\"$ref\":\"EntityPerson.json\"},\"EntityOrganization\":{\"$ref\":\"EntityOrganization.json\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerScreenID\",\"title\":\"InstantMessengerScreenID\",\"type\":\"array\",\"description\":\"An account identifier used to reference a person or organization within an instant messaging system.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneNumberFullID\",\"title\":\"TelephoneNumberFullID\",\"type\":\"array\",\"description\":\"A complete telephone number.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioChannelText\",\"title\":\"ContactRadioChannelText\",\"type\":\"array\",\"description\":\"A radio channel or frequency within the band.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonName\",\"title\":\"PersonName\",\"type\":\"array\",\"description\":\"A combination of names and/or titles by which a person is known.\",\"version\":\"0.4.4\",\"items\":{\"PersonFullName\":{\"$ref\":\"PersonFullName.json\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonFullName\",\"title\":\"PersonFullName\",\"type\":\"array\",\"description\":\"A complete name of a person.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"ContactRadio.json", "../../../../niem/niem-core/3.0/ContactInformation.json", "ContactEmailID.json", "ContactInstantMessenger.json", "OrganizationAbbreviationText.json", "../../../tsoa/soi/tsoa-track/2.0/ContactInformationAugmentation.json", "EntityPerson.json", "PersonDescriptionText.json", "../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json", "../../../../niem/niem-core/3.0/FullTelephoneNumberType.json", "TelephoneSuffixID.json", "ContactRadioCallSignID.json", "InstantMessengerServiceName.json", "ContactTelephoneNumber.json", "EntityOrganization.json", "OrganizationName.json", "ContactEntity.json", "InstantMessengerScreenID.json", "TelephoneNumberFullID.json", "ContactRadioChannelText.json", "PersonName.json", "PersonFullName.json"};
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
    public static TrackOriginationPointOfContact fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, TrackOriginationPointOfContact.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
