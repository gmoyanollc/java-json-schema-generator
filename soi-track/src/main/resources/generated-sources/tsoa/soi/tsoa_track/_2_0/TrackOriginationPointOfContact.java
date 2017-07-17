
package tsoa.soi.tsoa_track._2_0;

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
 * TrackOriginationPointOfContact
 * <p>
 * An Track Origination Point-Of-Contact described by its properties.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "ContactInformation"
})
public class TrackOriginationPointOfContact {

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
     * ContactInformation
     * <p>
     * A set of details about how to contact a person or an organization.
     * 
     */
    @JsonProperty("ContactInformation")
    @Size(max = 16)
    @Valid
    private List<Object> ContactInformation = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#TrackOriginationPointOfContact\",\"title\":\"TrackOriginationPointOfContact\",\"type\":\"object\",\"description\":\"An Track Origination Point-Of-Contact described by its properties.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.TrackOriginationPointOfContact\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"ContactInformation\":{\"$ref\":\"../../../../niem/niem-core/3.0/ContactInformation.json\"}},\"additionalProperties\":false}", ""};
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
        if ("ObjectType".equals(name)) {
            if (value instanceof niem.structures._3_0.ObjectType) {
                setObjectType(((niem.structures._3_0.ObjectType) value));
            } else {
                throw new IllegalArgumentException(("property \"ObjectType\" is of type \"niem.structures._3_0.ObjectType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
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
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("ObjectType".equals(name)) {
            return getObjectType();
        } else {
            if ("ContactInformation".equals(name)) {
                return getContactInformation();
            } else {
                return notFoundValue;
            }
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
        return new HashCodeBuilder().append(ObjectType).append(ContactInformation).toHashCode();
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
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(ContactInformation, rhs.ContactInformation).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneSuffixID\",\"title\":\"TelephoneSuffixID\",\"type\":\"array\",\"description\":\"An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityOrganization\",\"title\":\"EntityOrganization\",\"type\":\"object\",\"description\":\"An organization capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.EntityOrganization\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"OrganizationAbbreviationText\":{\"$ref\":\"OrganizationAbbreviationText.json\"},\"OrganizationName\":{\"$ref\":\"OrganizationName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioChannelText\",\"title\":\"ContactRadioChannelText\",\"type\":\"array\",\"description\":\"A radio channel or frequency within the band.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationAbbreviationText\",\"title\":\"OrganizationAbbreviationText\",\"type\":\"array\",\"description\":\"An abbreviation, acronym, or code for an organization name.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactTelephoneNumber\",\"title\":\"ContactTelephoneNumber\",\"type\":\"object\",\"description\":\"A telephone number for a telecommunication device by which a person or organization may be contacted.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ContactTelephoneNumber\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityPerson\",\"title\":\"EntityPerson\",\"type\":\"object\",\"description\":\"A person capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.EntityPerson\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"PersonDescriptionText\":{\"$ref\":\"PersonDescriptionText.json\"},\"PersonName\":{\"$ref\":\"PersonName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactEntity\",\"title\":\"ContactEntity\",\"type\":\"array\",\"description\":\"An entity that may be contacted by using the given contact information.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"EntityRepresentation\":{\"EntityPerson\":{\"$ref\":\"EntityPerson.json\"},\"EntityOrganization\":{\"$ref\":\"EntityOrganization.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ContactInformationAugmentation\",\"title\":\"ContactInformationAugmentation\",\"type\":\"object\",\"description\":\"A contact information augmentation.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.ContactInformationAugmentation\",\"properties\":{\"ContactDSNTelephoneNumber\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadio\",\"title\":\"ContactRadio\",\"type\":\"object\",\"description\":\"A method of contacting a person or organization by messages over a radio.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ContactRadio\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"ContactRadioChannelText\":{\"$ref\":\"ContactRadioChannelText.json\"},\"ContactRadioCallSignID\":{\"$ref\":\"ContactRadioCallSignID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonDescriptionText\",\"title\":\"PersonDescriptionText\",\"type\":\"array\",\"description\":\"A description of a person.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FullTelephoneNumberType\",\"title\":\"FullTelephoneNumberType\",\"type\":\"object\",\"description\":\"A data type for a full telephone number.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.FullTelephoneNumberType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"TelephoneNumberFullID\":{\"$ref\":\"TelephoneNumberFullID.json\"},\"TelephoneSuffixID\":{\"$ref\":\"TelephoneSuffixID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationName\",\"title\":\"OrganizationName\",\"type\":\"array\",\"description\":\"A name of an organization.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ProperNameTextType\",\"title\":\"ProperNameTextType\",\"type\":\"object\",\"description\":\"A data type for a word or phrase by which a person or thing is known, referred, or addressed.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ProperNameTextType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneNumberFullID\",\"title\":\"TelephoneNumberFullID\",\"type\":\"array\",\"description\":\"A complete telephone number.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioCallSignID\",\"title\":\"ContactRadioCallSignID\",\"type\":\"array\",\"description\":\"An identifier of a person using a radio.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonFullName\",\"title\":\"PersonFullName\",\"type\":\"array\",\"description\":\"A complete name of a person.\",\"version\":\"0.4.5\",\"items\":{\"ProperNameTextType\":{\"$ref\":\"ProperNameTextType.json\"}},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerServiceName\",\"title\":\"InstantMessengerServiceName\",\"type\":\"array\",\"description\":\"A name of an instant messaging service.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInformation\",\"title\":\"ContactInformation\",\"type\":\"array\",\"description\":\"A set of details about how to contact a person or an organization.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"ContactMeans\":{\"ContactInstantMessenger\":{\"$ref\":\"ContactInstantMessenger.json\"},\"ContactTelephoneNumber\":{\"$ref\":\"ContactTelephoneNumber.json\"},\"ContactRadio\":{\"$ref\":\"ContactRadio.json\"},\"ContactEmailID\":{\"$ref\":\"ContactEmailID.json\"}},\"ContactEntity\":{\"$ref\":\"ContactEntity.json\"},\"ContactInformationAugmentationPoint\":{\"ContactInformationAugmentation\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ContactInformationAugmentation.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactEmailID\",\"title\":\"ContactEmailID\",\"type\":\"object\",\"description\":\"An electronic mailing address by which a person or organization may be contacted.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ContactEmailID\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonName\",\"title\":\"PersonName\",\"type\":\"array\",\"description\":\"A combination of names and/or titles by which a person is known.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"PersonFullName\":{\"$ref\":\"PersonFullName.json\"}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ContactDSNTelephoneNumber\",\"title\":\"ContactDSNTelephoneNumber\",\"type\":\"object\",\"description\":\"A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber\",\"properties\":{\"FullTelephoneNumberType\":{\"$ref\":\"../../../../niem/niem-core/3.0/FullTelephoneNumberType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerScreenID\",\"title\":\"InstantMessengerScreenID\",\"type\":\"array\",\"description\":\"An account identifier used to reference a person or organization within an instant messaging system.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInstantMessenger\",\"title\":\"ContactInstantMessenger\",\"type\":\"object\",\"description\":\"A user account for an instant messaging program by which a person or organization may be contacted.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ContactInstantMessenger\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"InstantMessengerServiceName\":{\"$ref\":\"InstantMessengerServiceName.json\"},\"InstantMessengerScreenID\":{\"$ref\":\"InstantMessengerScreenID.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"TelephoneSuffixID.json", "EntityOrganization.json", "ContactRadioChannelText.json", "OrganizationAbbreviationText.json", "ContactTelephoneNumber.json", "EntityPerson.json", "ContactEntity.json", "../../../niem/structures/3.0/ObjectType.json", "../../../tsoa/soi/tsoa-track/2.0/ContactInformationAugmentation.json", "ContactRadio.json", "PersonDescriptionText.json", "../../../../niem/niem-core/3.0/FullTelephoneNumberType.json", "OrganizationName.json", "ProperNameTextType.json", "TelephoneNumberFullID.json", "ContactRadioCallSignID.json", "PersonFullName.json", "InstantMessengerServiceName.json", "../../../../niem/niem-core/3.0/ContactInformation.json", "ContactEmailID.json", "PersonName.json", "../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json", "InstantMessengerScreenID.json", "ContactInstantMessenger.json"};
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
