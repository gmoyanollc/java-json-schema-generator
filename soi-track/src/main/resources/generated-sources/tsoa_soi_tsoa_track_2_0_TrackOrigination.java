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
 * TrackOrigination
 * <p>
 * A track origination.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "OriginatorTrackIdentification",
    "SystemIdentification",
    "TrackOriginationPointOfContact"
})
public class tsoa_soi_tsoa_track_2_0_TrackOrigination {

    /**
     * OriginatorTrackIdentification
     * <p>
     * An originator track indentification.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.
     * 
     */
    @JsonProperty("OriginatorTrackIdentification")
    @Valid
    private tsoa_soi_tsoa_track_2_0_OriginatorTrackIdentification OriginatorTrackIdentification;
    /**
     * SystemIdentification
     * <p>
     * A number or code identification assigned by a system to uniquely identify a person or object.
     * 
     */
    @JsonProperty("SystemIdentification")
    @Valid
    private niem_domains_intelligence_3_2_SystemIdentification SystemIdentification;
    /**
     * TrackOriginationPointOfContact
     * <p>
     * An Track Origination Point-Of-Contact described by its properties.
     * 
     */
    @JsonProperty("TrackOriginationPointOfContact")
    @Valid
    private tsoa_soi_tsoa_track_2_0_TrackOriginationPointOfContact TrackOriginationPointOfContact;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#TrackOrigination\",\"title\":\"TrackOrigination\",\"type\":\"object\",\"description\":\"A track origination.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_tsoa_track_2_0_TrackOrigination\",\"properties\":{\"OriginatorTrackIdentification\":{\"$ref\":\"OriginatorTrackIdentification.json\"},\"SystemIdentification\":{\"$ref\":\"../../../../niem/domains/intelligence/3.2/SystemIdentification.json\"},\"TrackOriginationPointOfContact\":{\"$ref\":\"TrackOriginationPointOfContact.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * OriginatorTrackIdentification
     * <p>
     * An originator track indentification.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.
     * 
     * @return
     *     The OriginatorTrackIdentification
     */
    @JsonProperty("OriginatorTrackIdentification")
    public tsoa_soi_tsoa_track_2_0_OriginatorTrackIdentification getOriginatorTrackIdentification() {
        return OriginatorTrackIdentification;
    }

    /**
     * OriginatorTrackIdentification
     * <p>
     * An originator track indentification.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.
     * 
     * @param OriginatorTrackIdentification
     *     The OriginatorTrackIdentification
     */
    @JsonProperty("OriginatorTrackIdentification")
    public void setOriginatorTrackIdentification(tsoa_soi_tsoa_track_2_0_OriginatorTrackIdentification OriginatorTrackIdentification) {
        this.OriginatorTrackIdentification = OriginatorTrackIdentification;
    }

    /**
     * SystemIdentification
     * <p>
     * A number or code identification assigned by a system to uniquely identify a person or object.
     * 
     * @return
     *     The SystemIdentification
     */
    @JsonProperty("SystemIdentification")
    public niem_domains_intelligence_3_2_SystemIdentification getSystemIdentification() {
        return SystemIdentification;
    }

    /**
     * SystemIdentification
     * <p>
     * A number or code identification assigned by a system to uniquely identify a person or object.
     * 
     * @param SystemIdentification
     *     The SystemIdentification
     */
    @JsonProperty("SystemIdentification")
    public void setSystemIdentification(niem_domains_intelligence_3_2_SystemIdentification SystemIdentification) {
        this.SystemIdentification = SystemIdentification;
    }

    /**
     * TrackOriginationPointOfContact
     * <p>
     * An Track Origination Point-Of-Contact described by its properties.
     * 
     * @return
     *     The TrackOriginationPointOfContact
     */
    @JsonProperty("TrackOriginationPointOfContact")
    public tsoa_soi_tsoa_track_2_0_TrackOriginationPointOfContact getTrackOriginationPointOfContact() {
        return TrackOriginationPointOfContact;
    }

    /**
     * TrackOriginationPointOfContact
     * <p>
     * An Track Origination Point-Of-Contact described by its properties.
     * 
     * @param TrackOriginationPointOfContact
     *     The TrackOriginationPointOfContact
     */
    @JsonProperty("TrackOriginationPointOfContact")
    public void setTrackOriginationPointOfContact(tsoa_soi_tsoa_track_2_0_TrackOriginationPointOfContact TrackOriginationPointOfContact) {
        this.TrackOriginationPointOfContact = TrackOriginationPointOfContact;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("OriginatorTrackIdentification".equals(name)) {
            if (value instanceof tsoa_soi_tsoa_track_2_0_OriginatorTrackIdentification) {
                setOriginatorTrackIdentification(((tsoa_soi_tsoa_track_2_0_OriginatorTrackIdentification) value));
            } else {
                throw new IllegalArgumentException(("property \"OriginatorTrackIdentification\" is of type \"tsoa_soi_tsoa_track_2_0_OriginatorTrackIdentification\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("SystemIdentification".equals(name)) {
                if (value instanceof niem_domains_intelligence_3_2_SystemIdentification) {
                    setSystemIdentification(((niem_domains_intelligence_3_2_SystemIdentification) value));
                } else {
                    throw new IllegalArgumentException(("property \"SystemIdentification\" is of type \"niem_domains_intelligence_3_2_SystemIdentification\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("TrackOriginationPointOfContact".equals(name)) {
                    if (value instanceof tsoa_soi_tsoa_track_2_0_TrackOriginationPointOfContact) {
                        setTrackOriginationPointOfContact(((tsoa_soi_tsoa_track_2_0_TrackOriginationPointOfContact) value));
                    } else {
                        throw new IllegalArgumentException(("property \"TrackOriginationPointOfContact\" is of type \"tsoa_soi_tsoa_track_2_0_TrackOriginationPointOfContact\", but got "+ value.getClass().toString()));
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
        if ("OriginatorTrackIdentification".equals(name)) {
            return getOriginatorTrackIdentification();
        } else {
            if ("SystemIdentification".equals(name)) {
                return getSystemIdentification();
            } else {
                if ("TrackOriginationPointOfContact".equals(name)) {
                    return getTrackOriginationPointOfContact();
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
        Object value = declaredPropertyOrNotFound(name, tsoa_soi_tsoa_track_2_0_TrackOrigination.NOT_FOUND_VALUE);
        if (tsoa_soi_tsoa_track_2_0_TrackOrigination.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(OriginatorTrackIdentification).append(SystemIdentification).append(TrackOriginationPointOfContact).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof tsoa_soi_tsoa_track_2_0_TrackOrigination) == false) {
            return false;
        }
        tsoa_soi_tsoa_track_2_0_TrackOrigination rhs = ((tsoa_soi_tsoa_track_2_0_TrackOrigination) other);
        return new EqualsBuilder().append(OriginatorTrackIdentification, rhs.OriginatorTrackIdentification).append(SystemIdentification, rhs.SystemIdentification).append(TrackOriginationPointOfContact, rhs.TrackOriginationPointOfContact).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName\",\"title\":\"LocationCountryName\",\"type\":\"object\",\"description\":\"A name of a country, territory, dependency, or other such geopolitical subdivision of a location.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LocationCountryName\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactEmailID\",\"title\":\"ContactEmailID\",\"type\":\"string\",\"description\":\"An electronic mailing address by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_ContactEmailID\",\"properties\":{},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ContactDSNTelephoneNumber\",\"title\":\"ContactDSNTelephoneNumber\",\"type\":\"object\",\"description\":\"A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ContactDSNTelephoneNumber\",\"properties\":{\"FullTelephoneNumberType\":{\"$ref\":\"../../../../niem/niem-core/3.0/FullTelephoneNumberType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonDescriptionText\",\"title\":\"PersonDescriptionText\",\"type\":\"array\",\"description\":\"A description of a person.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityOrganization\",\"title\":\"EntityOrganization\",\"type\":\"object\",\"description\":\"An organization capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_EntityOrganization\",\"properties\":{\"OrganizationAbbreviationText\":{\"$ref\":\"OrganizationAbbreviationText.json\"},\"OrganizationName\":{\"$ref\":\"OrganizationName.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ContactInformationAugmentation\",\"title\":\"ContactInformationAugmentation\",\"type\":\"object\",\"description\":\"A contact information augmentation.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_tsoa_track_2_0_ContactInformationAugmentation\",\"properties\":{\"ContactDSNTelephoneNumber\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemIdentificationType\",\"title\":\"SystemIdentificationType\",\"type\":\"object\",\"description\":\"A data type for a number or code assigned to a system to uniquely identify the system.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_SystemIdentificationType\",\"properties\":{\"IdentificationType\":{\"$ref\":\"IdentificationType.json\"},\"SystemName\":{\"$ref\":\"SystemName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemName\",\"title\":\"SystemName\",\"type\":\"array\",\"description\":\"A name of the kind or the source of a system identifier.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#OriginatorTrackIdentification\",\"title\":\"OriginatorTrackIdentification\",\"type\":\"object\",\"description\":\"An originator track indentification.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_tsoa_track_2_0_OriginatorTrackIdentification\",\"properties\":{\"IdentificationType\":{\"$ref\":\"../../../../niem/niem-core/3.0/IdentificationType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationName\",\"title\":\"OrganizationName\",\"type\":\"array\",\"description\":\"A name of an organization.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FullTelephoneNumberType\",\"title\":\"FullTelephoneNumberType\",\"type\":\"object\",\"description\":\"A data type for a full telephone number.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_FullTelephoneNumberType\",\"properties\":{\"TelephoneNumberFullID\":{\"$ref\":\"TelephoneNumberFullID.json\"},\"TelephoneSuffixID\":{\"$ref\":\"TelephoneSuffixID.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInstantMessenger\",\"title\":\"ContactInstantMessenger\",\"type\":\"object\",\"description\":\"A user account for an instant messaging program by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_ContactInstantMessenger\",\"properties\":{\"InstantMessengerServiceName\":{\"$ref\":\"InstantMessengerServiceName.json\"},\"InstantMessengerScreenID\":{\"$ref\":\"InstantMessengerScreenID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerScreenID\",\"title\":\"InstantMessengerScreenID\",\"type\":\"array\",\"description\":\"An account identifier used to reference a person or organization within an instant messaging system.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneNumberFullID\",\"title\":\"TelephoneNumberFullID\",\"type\":\"array\",\"description\":\"A complete telephone number.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityPerson\",\"title\":\"EntityPerson\",\"type\":\"object\",\"description\":\"A person capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_EntityPerson\",\"properties\":{\"PersonDescriptionText\":{\"$ref\":\"PersonDescriptionText.json\"},\"PersonName\":{\"$ref\":\"PersonName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonFullName\",\"title\":\"PersonFullName\",\"type\":\"array\",\"description\":\"A complete name of a person.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationID\",\"title\":\"IdentificationID\",\"type\":\"array\",\"description\":\"An identifier.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#TrackOriginationPointOfContact\",\"title\":\"TrackOriginationPointOfContact\",\"type\":\"object\",\"description\":\"An Track Origination Point-Of-Contact described by its properties.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_tsoa_track_2_0_TrackOriginationPointOfContact\",\"properties\":{\"ContactInformation\":{\"$ref\":\"../../../../niem/niem-core/3.0/ContactInformation.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInformation\",\"title\":\"ContactInformation\",\"type\":\"array\",\"description\":\"A set of details about how to contact a person or an organization.\",\"version\":\"0.4.4\",\"items\":{\"ContactMeans\":{\"ContactInstantMessenger\":{\"$ref\":\"ContactInstantMessenger.json\"},\"ContactTelephoneNumber\":{\"$ref\":\"ContactTelephoneNumber.json\"},\"ContactRadio\":{\"$ref\":\"ContactRadio.json\"},\"ContactEmailID\":{\"$ref\":\"ContactEmailID.json\"}},\"ContactEntity\":{\"$ref\":\"ContactEntity.json\"},\"ContactInformationAugmentationPoint\":{\"ContactInformationAugmentation\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ContactInformationAugmentation.json\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationAbbreviationText\",\"title\":\"OrganizationAbbreviationText\",\"type\":\"array\",\"description\":\"An abbreviation, acronym, or code for an organization name.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_tsoa_track_2_0_ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactTelephoneNumber\",\"title\":\"ContactTelephoneNumber\",\"type\":\"object\",\"description\":\"A telephone number for a telecommunication device by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_ContactTelephoneNumber\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadio\",\"title\":\"ContactRadio\",\"type\":\"object\",\"description\":\"A method of contacting a person or organization by messages over a radio.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_ContactRadio\",\"properties\":{\"ContactRadioChannelText\":{\"$ref\":\"ContactRadioChannelText.json\"},\"ContactRadioCallSignID\":{\"$ref\":\"ContactRadioCallSignID.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneSuffixID\",\"title\":\"TelephoneSuffixID\",\"type\":\"array\",\"description\":\"An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioCallSignID\",\"title\":\"ContactRadioCallSignID\",\"type\":\"array\",\"description\":\"An identifier of a person using a radio.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/intelligence/3.2/#SystemIdentification\",\"title\":\"SystemIdentification\",\"type\":\"object\",\"description\":\"A number or code identification assigned by a system to uniquely identify a person or object.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_intelligence_3_2_SystemIdentification\",\"properties\":{\"SystemIdentificationType\":{\"$ref\":\"../../../../niem/niem-core/3.0/SystemIdentificationType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerServiceName\",\"title\":\"InstantMessengerServiceName\",\"type\":\"array\",\"description\":\"A name of an instant messaging service.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactEntity\",\"title\":\"ContactEntity\",\"type\":\"array\",\"description\":\"An entity that may be contacted by using the given contact information.\",\"version\":\"0.4.4\",\"items\":{\"EntityRepresentation\":{\"EntityPerson\":{\"$ref\":\"EntityPerson.json\"},\"EntityOrganization\":{\"$ref\":\"EntityOrganization.json\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationJurisdiction\",\"title\":\"IdentificationJurisdiction\",\"type\":\"array\",\"description\":\"An area, region, or unit where a unique identification is issued.\",\"version\":\"0.4.4\",\"items\":{\"LocationCountry\":{\"LocationCountryName\":{\"$ref\":\"LocationCountryName.json\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationType\",\"title\":\"IdentificationType\",\"type\":\"object\",\"description\":\"A data type for a representation of an identity.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_IdentificationType\",\"properties\":{\"IdentificationID\":{\"$ref\":\"IdentificationID.json\"},\"IdentificationJurisdiction\":{\"$ref\":\"IdentificationJurisdiction.json\"},\"IdentificationAugmentationPoint\":{\"ShortName\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ShortName.json\"}}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioChannelText\",\"title\":\"ContactRadioChannelText\",\"type\":\"array\",\"description\":\"A radio channel or frequency within the band.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonName\",\"title\":\"PersonName\",\"type\":\"array\",\"description\":\"A combination of names and/or titles by which a person is known.\",\"version\":\"0.4.4\",\"items\":{\"PersonFullName\":{\"$ref\":\"PersonFullName.json\"}},\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"LocationCountryName.json", "ContactEmailID.json", "../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json", "PersonDescriptionText.json", "EntityOrganization.json", "../../../tsoa/soi/tsoa-track/2.0/ContactInformationAugmentation.json", "../../../../niem/niem-core/3.0/SystemIdentificationType.json", "SystemName.json", "../../../../niem/niem-core/3.0/TextType.json", "OriginatorTrackIdentification.json", "OrganizationName.json", "../../../../niem/niem-core/3.0/FullTelephoneNumberType.json", "ContactInstantMessenger.json", "InstantMessengerScreenID.json", "TelephoneNumberFullID.json", "EntityPerson.json", "PersonFullName.json", "IdentificationID.json", "TrackOriginationPointOfContact.json", "../../../../niem/niem-core/3.0/ContactInformation.json", "OrganizationAbbreviationText.json", "../../../tsoa/soi/tsoa-track/2.0/ShortName.json", "ContactTelephoneNumber.json", "ContactRadio.json", "TelephoneSuffixID.json", "ContactRadioCallSignID.json", "../../../../niem/domains/intelligence/3.2/SystemIdentification.json", "InstantMessengerServiceName.json", "ContactEntity.json", "IdentificationJurisdiction.json", "IdentificationType.json", "ContactRadioChannelText.json", "PersonName.json"};
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
    public static tsoa_soi_tsoa_track_2_0_TrackOrigination fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, tsoa_soi_tsoa_track_2_0_TrackOrigination.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
