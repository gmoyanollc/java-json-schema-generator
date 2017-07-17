
package tsoa.soi.observed_facility._2_0;

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
 * ObservedFacility
 * <p>
 * An observed facility described by its properties.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AugmentationType",
    "Facility"
})
public class ObservedFacility {

    /**
     * AugmentationType
     * <p>
     * 
     * 
     */
    @JsonProperty("AugmentationType")
    @Valid
    private niem.structures._3_0.AugmentationType AugmentationType;
    /**
     * Facility
     * <p>
     * A building, place, or structure that provides a particular service.
     * 
     */
    @JsonProperty("Facility")
    @Size(max = 16)
    @Valid
    private List<Object> Facility = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-facility/2.0/#ObservedFacility\",\"title\":\"ObservedFacility\",\"type\":\"object\",\"description\":\"An observed facility described by its properties.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_facility._2_0.ObservedFacility\",\"properties\":{\"AugmentationType\":{\"$ref\":\"../../../../niem/structures/3.0/AugmentationType.json\"},\"Facility\":{\"$ref\":\"../../../../niem/niem-core/3.0/Facility.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * AugmentationType
     * <p>
     * 
     * 
     * @return
     *     The AugmentationType
     */
    @JsonProperty("AugmentationType")
    public niem.structures._3_0.AugmentationType getAugmentationType() {
        return AugmentationType;
    }

    /**
     * AugmentationType
     * <p>
     * 
     * 
     * @param AugmentationType
     *     The AugmentationType
     */
    @JsonProperty("AugmentationType")
    public void setAugmentationType(niem.structures._3_0.AugmentationType AugmentationType) {
        this.AugmentationType = AugmentationType;
    }

    /**
     * Facility
     * <p>
     * A building, place, or structure that provides a particular service.
     * 
     * @return
     *     The Facility
     */
    @JsonProperty("Facility")
    public List<Object> getFacility() {
        return Facility;
    }

    /**
     * Facility
     * <p>
     * A building, place, or structure that provides a particular service.
     * 
     * @param Facility
     *     The Facility
     */
    @JsonProperty("Facility")
    public void setFacility(List<Object> Facility) {
        this.Facility = Facility;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("AugmentationType".equals(name)) {
            if (value instanceof niem.structures._3_0.AugmentationType) {
                setAugmentationType(((niem.structures._3_0.AugmentationType) value));
            } else {
                throw new IllegalArgumentException(("property \"AugmentationType\" is of type \"niem.structures._3_0.AugmentationType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("Facility".equals(name)) {
                if (value instanceof List) {
                    setFacility(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"Facility\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        if ("AugmentationType".equals(name)) {
            return getAugmentationType();
        } else {
            if ("Facility".equals(name)) {
                return getFacility();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ObservedFacility.NOT_FOUND_VALUE);
        if (ObservedFacility.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AugmentationType).append(Facility).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObservedFacility) == false) {
            return false;
        }
        ObservedFacility rhs = ((ObservedFacility) other);
        return new EqualsBuilder().append(AugmentationType, rhs.AugmentationType).append(Facility, rhs.Facility).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationID\",\"title\":\"IdentificationID\",\"type\":\"array\",\"description\":\"An identifier.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FacilityIdentification\",\"title\":\"FacilityIdentification\",\"type\":\"array\",\"description\":\"An identification assigned to a facility.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"IdentificationID\":{\"$ref\":\"IdentificationID.json\"},\"IdentificationJurisdiction\":{\"$ref\":\"IdentificationJurisdiction.json\"},\"IdentificationAugmentationPoint\":{\"ShortName\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ShortName.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_genc/3.0/#CountryAlpha3CodeType\",\"title\":\"CountryAlpha3CodeType\",\"type\":\"object\",\"description\":\"A data type for three-character country codes.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.nga_genc._3_0.CountryAlpha3CodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName\",\"title\":\"LocationCountryName\",\"type\":\"object\",\"description\":\"A name of a country, territory, dependency, or other such geopolitical subdivision of a location.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationCountryName\",\"properties\":{\"TextType\":{\"$ref\":\"TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-facility/2.0/#FacilityStandardIdentityCode\",\"title\":\"FacilityStandardIdentityCode\",\"type\":\"object\",\"description\":\"A Facility Standard Identity Code.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_facility._2_0.FacilityStandardIdentityCode\",\"properties\":{\"StandardIdentityCodeType\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/StandardIdentityCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#FacilityAllegianceCountryCode\",\"title\":\"FacilityAllegianceCountryCode\",\"type\":\"object\",\"description\":\"A designator for a country to which a facility owes its allegiance.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.FacilityAllegianceCountryCode\",\"properties\":{\"CountryAlpha3CodeType\":{\"$ref\":\"../../../../niem/codes/nga_genc/3.0/CountryAlpha3CodeType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationJurisdiction\",\"title\":\"IdentificationJurisdiction\",\"type\":\"array\",\"description\":\"An area, region, or unit where a unique identification is issued.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"LocationCountry\":{\"LocationCountryName\":{\"$ref\":\"LocationCountryName.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FacilityName\",\"title\":\"FacilityName\",\"type\":\"array\",\"description\":\"A name of a facility.\",\"version\":\"0.4.5\",\"items\":{\"TextType\":{\"$ref\":\"TextType.json\"}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#StandardIdentityCodeType\",\"title\":\"StandardIdentityCodeType\",\"type\":\"object\",\"description\":\"A data type for a code describing the standard identity of a track; codes defined by MIL-STD-2525C.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.StandardIdentityCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-facility/2.0/#FacilityAugmentationAbstract\",\"title\":\"FacilityAugmentationAbstract\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_facility._2_0.FacilityAugmentationAbstract\",\"properties\":{\"AugmentationType\":{\"$ref\":\"../../../../niem/structures/3.0/AugmentationType.json\"},\"FacilityAllegianceCountryAbstract\":{\"FacilityAllegianceCountryCode\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/FacilityAllegianceCountryCode.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#AugmentationType\",\"title\":\"AugmentationType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.AugmentationType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#Facility\",\"title\":\"Facility\",\"type\":\"array\",\"description\":\"A building, place, or structure that provides a particular service.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"FacilityIdentification\":{\"$ref\":\"FacilityIdentification.json\"},\"FacilityName\":{\"$ref\":\"FacilityName.json\"},\"FacilityAugmentationPoint\":{\"FacilityAugmentationAbstract\":{\"$ref\":\"../../../tsoa/soi/observed-facility/2.0/FacilityAugmentationAbstract.json\"},\"FacilityStandardIdentityCode\":{\"$ref\":\"../../../tsoa/soi/observed-facility/2.0/FacilityStandardIdentityCode.json\"}}},\"maxItems\":16,\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"IdentificationID.json", "../../../tsoa/soi/tsoa-track/2.0/ShortName.json", "FacilityIdentification.json", "../../../../niem/codes/nga_genc/3.0/CountryAlpha3CodeType.json", "LocationCountryName.json", "../../../niem/structures/3.0/ObjectType.json", "../../../tsoa/soi/observed-facility/2.0/FacilityStandardIdentityCode.json", "../../../../niem/domains/militaryOperations/3.2/FacilityAllegianceCountryCode.json", "IdentificationJurisdiction.json", "TextType.json", "FacilityName.json", "../../../../niem/domains/militaryOperations/3.2/StandardIdentityCodeType.json", "../../../tsoa/soi/observed-facility/2.0/FacilityAugmentationAbstract.json", "../../../../niem/structures/3.0/AugmentationType.json", "../../../../niem/niem-core/3.0/Facility.json"};
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
    public static ObservedFacility fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservedFacility.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
