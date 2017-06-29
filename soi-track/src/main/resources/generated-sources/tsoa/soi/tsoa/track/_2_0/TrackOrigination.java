
package tsoa.soi.tsoa.track._2_0;

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
public class TrackOrigination {

    /**
     * OriginatorTrackIdentification
     * <p>
     * An originator track indentification.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.
     * 
     */
    @JsonProperty("OriginatorTrackIdentification")
    @Valid
    private tsoa.soi.tsoa.track._2_0.OriginatorTrackIdentification OriginatorTrackIdentification;
    /**
     * SystemIdentification
     * <p>
     * A number or code identification assigned by a system to uniquely identify a person or object.
     * 
     */
    @JsonProperty("SystemIdentification")
    @Valid
    private niem.domains.intelligence._3_2.SystemIdentification SystemIdentification;
    /**
     * TrackOriginationPointOfContact
     * <p>
     * An Track Origination Point-Of-Contact described by its properties.
     * 
     */
    @JsonProperty("TrackOriginationPointOfContact")
    @Valid
    private tsoa.soi.tsoa.track._2_0.TrackOriginationPointOfContact TrackOriginationPointOfContact;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#TrackOrigination\",\"title\":\"TrackOrigination\",\"type\":\"object\",\"description\":\"A track origination.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.tsoa.track._2_0.TrackOrigination\",\"properties\":{\"OriginatorTrackIdentification\":{\"$ref\":\"OriginatorTrackIdentification.json\"},\"SystemIdentification\":{\"$ref\":\"../../../../niem/domains/intelligence/3.2/SystemIdentification.json\"},\"TrackOriginationPointOfContact\":{\"$ref\":\"TrackOriginationPointOfContact.json\"}},\"additionalProperties\":false}", ""};
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
    public tsoa.soi.tsoa.track._2_0.OriginatorTrackIdentification getOriginatorTrackIdentification() {
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
    public void setOriginatorTrackIdentification(tsoa.soi.tsoa.track._2_0.OriginatorTrackIdentification OriginatorTrackIdentification) {
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
    public niem.domains.intelligence._3_2.SystemIdentification getSystemIdentification() {
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
    public void setSystemIdentification(niem.domains.intelligence._3_2.SystemIdentification SystemIdentification) {
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
    public tsoa.soi.tsoa.track._2_0.TrackOriginationPointOfContact getTrackOriginationPointOfContact() {
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
    public void setTrackOriginationPointOfContact(tsoa.soi.tsoa.track._2_0.TrackOriginationPointOfContact TrackOriginationPointOfContact) {
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
            if (value instanceof tsoa.soi.tsoa.track._2_0.OriginatorTrackIdentification) {
                setOriginatorTrackIdentification(((tsoa.soi.tsoa.track._2_0.OriginatorTrackIdentification) value));
            } else {
                throw new IllegalArgumentException(("property \"OriginatorTrackIdentification\" is of type \"tsoa.soi.tsoa.track._2_0.OriginatorTrackIdentification\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("SystemIdentification".equals(name)) {
                if (value instanceof niem.domains.intelligence._3_2.SystemIdentification) {
                    setSystemIdentification(((niem.domains.intelligence._3_2.SystemIdentification) value));
                } else {
                    throw new IllegalArgumentException(("property \"SystemIdentification\" is of type \"niem.domains.intelligence._3_2.SystemIdentification\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("TrackOriginationPointOfContact".equals(name)) {
                    if (value instanceof tsoa.soi.tsoa.track._2_0.TrackOriginationPointOfContact) {
                        setTrackOriginationPointOfContact(((tsoa.soi.tsoa.track._2_0.TrackOriginationPointOfContact) value));
                    } else {
                        throw new IllegalArgumentException(("property \"TrackOriginationPointOfContact\" is of type \"tsoa.soi.tsoa.track._2_0.TrackOriginationPointOfContact\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, TrackOrigination.NOT_FOUND_VALUE);
        if (TrackOrigination.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof TrackOrigination) == false) {
            return false;
        }
        TrackOrigination rhs = ((TrackOrigination) other);
        return new EqualsBuilder().append(OriginatorTrackIdentification, rhs.OriginatorTrackIdentification).append(SystemIdentification, rhs.SystemIdentification).append(TrackOriginationPointOfContact, rhs.TrackOriginationPointOfContact).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemIdentificationType\",\"title\":\"SystemIdentificationType\",\"type\":\"object\",\"description\":\"A data type for a number or code assigned to a system to uniquely identify the system.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.SystemIdentificationType\",\"properties\":{\"IdentificationType\":{\"$ref\":\"IdentificationType.json\"},\"SystemName\":{\"$ref\":\"SystemName.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadio\",\"title\":\"ContactRadio\",\"type\":\"object\",\"description\":\"A method of contacting a person or organization by messages over a radio.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactRadio\",\"properties\":{\"ContactRadioChannelText\":{\"$ref\":\"ContactRadioChannelText.json\"},\"ContactRadioCallSignID\":{\"$ref\":\"ContactRadioCallSignID.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/intelligence/3.2/#SystemIdentification\",\"title\":\"SystemIdentification\",\"type\":\"object\",\"description\":\"A number or code identification assigned by a system to uniquely identify a person or object.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.intelligence._3_2.SystemIdentification\",\"properties\":{\"SystemIdentificationType\":{\"$ref\":\"../../../../niem/niem-core/3.0/SystemIdentificationType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationType\",\"title\":\"IdentificationType\",\"type\":\"object\",\"description\":\"A data type for a representation of an identity.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.IdentificationType\",\"properties\":{\"IdentificationID\":{\"$ref\":\"IdentificationID.json\"},\"IdentificationJurisdiction\":{\"$ref\":\"IdentificationJurisdiction.json\"},\"IdentificationAugmentationPoint\":{\"ShortName\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ShortName.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactEmailID\",\"title\":\"ContactEmailID\",\"type\":\"string\",\"description\":\"An electronic mailing address by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactEmailID\",\"properties\":{},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName\",\"title\":\"LocationCountryName\",\"type\":\"object\",\"description\":\"A name of a country, territory, dependency, or other such geopolitical subdivision of a location.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationCountryName\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInstantMessenger\",\"title\":\"ContactInstantMessenger\",\"type\":\"object\",\"description\":\"A user account for an instant messaging program by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactInstantMessenger\",\"properties\":{\"InstantMessengerServiceName\":{\"$ref\":\"InstantMessengerServiceName.json\"},\"InstantMessengerScreenID\":{\"$ref\":\"InstantMessengerScreenID.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ContactInformationAugmentation\",\"title\":\"ContactInformationAugmentation\",\"type\":\"object\",\"description\":\"A contact information augmentation.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.tsoa.track._2_0.ContactInformationAugmentation\",\"properties\":{\"ContactDSNTelephoneNumber\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityPerson\",\"title\":\"EntityPerson\",\"type\":\"object\",\"description\":\"A person capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.EntityPerson\",\"properties\":{\"PersonDescriptionText\":{\"$ref\":\"PersonDescriptionText.json\"},\"PersonName\":{\"$ref\":\"PersonName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonDescriptionText\",\"title\":\"PersonDescriptionText\",\"type\":\"array\",\"description\":\"A description of a person.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ContactDSNTelephoneNumber\",\"title\":\"ContactDSNTelephoneNumber\",\"type\":\"object\",\"description\":\"A Defense Switched Network (DSN) telephone number for a telecommunications device by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.ContactDSNTelephoneNumber\",\"properties\":{\"FullTelephoneNumberType\":{\"$ref\":\"../../../../niem/niem-core/3.0/FullTelephoneNumberType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FullTelephoneNumberType\",\"title\":\"FullTelephoneNumberType\",\"type\":\"object\",\"description\":\"A data type for a full telephone number.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.FullTelephoneNumberType\",\"properties\":{\"TelephoneNumberFullID\":{\"$ref\":\"TelephoneNumberFullID.json\"},\"TelephoneSuffixID\":{\"$ref\":\"TelephoneSuffixID.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#TrackOriginationPointOfContact\",\"title\":\"TrackOriginationPointOfContact\",\"type\":\"object\",\"description\":\"An Track Origination Point-Of-Contact described by its properties.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.tsoa.track._2_0.TrackOriginationPointOfContact\",\"properties\":{\"ContactInformation\":{\"$ref\":\"../../../../niem/niem-core/3.0/ContactInformation.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemName\",\"title\":\"SystemName\",\"type\":\"array\",\"description\":\"A name of the kind or the source of a system identifier.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#OriginatorTrackIdentification\",\"title\":\"OriginatorTrackIdentification\",\"type\":\"object\",\"description\":\"An originator track indentification.  SOI JTCW connector had mapped UnitTrack.idl/lURN to SOI-Track-datatype/1.x/Track/Identifiers/UniqueReferenceCode. UniqueReferenceCode is mappable to this object.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.tsoa.track._2_0.OriginatorTrackIdentification\",\"properties\":{\"IdentificationType\":{\"$ref\":\"../../../../niem/niem-core/3.0/IdentificationType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactTelephoneNumber\",\"title\":\"ContactTelephoneNumber\",\"type\":\"object\",\"description\":\"A telephone number for a telecommunication device by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactTelephoneNumber\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationName\",\"title\":\"OrganizationName\",\"type\":\"array\",\"description\":\"A name of an organization.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerScreenID\",\"title\":\"InstantMessengerScreenID\",\"type\":\"array\",\"description\":\"An account identifier used to reference a person or organization within an instant messaging system.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneNumberFullID\",\"title\":\"TelephoneNumberFullID\",\"type\":\"array\",\"description\":\"A complete telephone number.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonFullName\",\"title\":\"PersonFullName\",\"type\":\"array\",\"description\":\"A complete name of a person.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationID\",\"title\":\"IdentificationID\",\"type\":\"array\",\"description\":\"An identifier.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInformation\",\"title\":\"ContactInformation\",\"type\":\"array\",\"description\":\"A set of details about how to contact a person or an organization.\",\"version\":\"0.4.4\",\"items\":{\"ContactMeans\":{\"ContactInstantMessenger\":{\"$ref\":\"ContactInstantMessenger.json\"},\"ContactTelephoneNumber\":{\"$ref\":\"ContactTelephoneNumber.json\"},\"ContactRadio\":{\"$ref\":\"ContactRadio.json\"},\"ContactEmailID\":{\"$ref\":\"ContactEmailID.json\"}},\"ContactEntity\":{\"$ref\":\"ContactEntity.json\"},\"ContactInformationAugmentationPoint\":{\"ContactInformationAugmentation\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ContactInformationAugmentation.json\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationAbbreviationText\",\"title\":\"OrganizationAbbreviationText\",\"type\":\"array\",\"description\":\"An abbreviation, acronym, or code for an organization name.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneSuffixID\",\"title\":\"TelephoneSuffixID\",\"type\":\"array\",\"description\":\"An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioCallSignID\",\"title\":\"ContactRadioCallSignID\",\"type\":\"array\",\"description\":\"An identifier of a person using a radio.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerServiceName\",\"title\":\"InstantMessengerServiceName\",\"type\":\"array\",\"description\":\"A name of an instant messaging service.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityOrganization\",\"title\":\"EntityOrganization\",\"type\":\"object\",\"description\":\"An organization capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.EntityOrganization\",\"properties\":{\"OrganizationAbbreviationText\":{\"$ref\":\"OrganizationAbbreviationText.json\"},\"OrganizationName\":{\"$ref\":\"OrganizationName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactEntity\",\"title\":\"ContactEntity\",\"type\":\"array\",\"description\":\"An entity that may be contacted by using the given contact information.\",\"version\":\"0.4.4\",\"items\":{\"EntityRepresentation\":{\"EntityPerson\":{\"$ref\":\"EntityPerson.json\"},\"EntityOrganization\":{\"$ref\":\"EntityOrganization.json\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationJurisdiction\",\"title\":\"IdentificationJurisdiction\",\"type\":\"array\",\"description\":\"An area, region, or unit where a unique identification is issued.\",\"version\":\"0.4.4\",\"items\":{\"LocationCountry\":{\"LocationCountryName\":{\"$ref\":\"LocationCountryName.json\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioChannelText\",\"title\":\"ContactRadioChannelText\",\"type\":\"array\",\"description\":\"A radio channel or frequency within the band.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonName\",\"title\":\"PersonName\",\"type\":\"array\",\"description\":\"A combination of names and/or titles by which a person is known.\",\"version\":\"0.4.4\",\"items\":{\"PersonFullName\":{\"$ref\":\"PersonFullName.json\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.tsoa.track._2_0.ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/niem-core/3.0/SystemIdentificationType.json", "ContactRadio.json", "../../../../niem/domains/intelligence/3.2/SystemIdentification.json", "IdentificationType.json", "ContactEmailID.json", "LocationCountryName.json", "ContactInstantMessenger.json", "../../../tsoa/soi/tsoa-track/2.0/ContactInformationAugmentation.json", "EntityPerson.json", "PersonDescriptionText.json", "../../../../niem/domains/militaryOperations/3.2/ContactDSNTelephoneNumber.json", "../../../../niem/niem-core/3.0/FullTelephoneNumberType.json", "TrackOriginationPointOfContact.json", "SystemName.json", "OriginatorTrackIdentification.json", "ContactTelephoneNumber.json", "OrganizationName.json", "InstantMessengerScreenID.json", "TelephoneNumberFullID.json", "PersonFullName.json", "IdentificationID.json", "../../../../niem/niem-core/3.0/ContactInformation.json", "../../../../niem/niem-core/3.0/TextType.json", "OrganizationAbbreviationText.json", "TelephoneSuffixID.json", "ContactRadioCallSignID.json", "InstantMessengerServiceName.json", "EntityOrganization.json", "ContactEntity.json", "IdentificationJurisdiction.json", "ContactRadioChannelText.json", "PersonName.json", "../../../tsoa/soi/tsoa-track/2.0/ShortName.json"};
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
    public static TrackOrigination fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, TrackOrigination.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
