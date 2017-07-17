
package tsoa.soi.observed_platform_system._2_0;

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
 * ObservedPlatformSystem
 * <p>
 * An observed platform system described by its properties.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AugmentationType",
    "PlatformSystem"
})
public class ObservedPlatformSystem {

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
     * PlatformSystem
     * <p>
     * A platform system described by its properties.
     * 
     */
    @JsonProperty("PlatformSystem")
    @Size(max = 16)
    @Valid
    private List<Object> PlatformSystem = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-platform-system/2.0/#ObservedPlatformSystem\",\"title\":\"ObservedPlatformSystem\",\"type\":\"object\",\"description\":\"An observed platform system described by its properties.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_platform_system._2_0.ObservedPlatformSystem\",\"properties\":{\"AugmentationType\":{\"$ref\":\"../../../../niem/structures/3.0/AugmentationType.json\"},\"PlatformSystem\":{\"$ref\":\"PlatformSystem.json\"}},\"additionalProperties\":false}", ""};
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
     * PlatformSystem
     * <p>
     * A platform system described by its properties.
     * 
     * @return
     *     The PlatformSystem
     */
    @JsonProperty("PlatformSystem")
    public List<Object> getPlatformSystem() {
        return PlatformSystem;
    }

    /**
     * PlatformSystem
     * <p>
     * A platform system described by its properties.
     * 
     * @param PlatformSystem
     *     The PlatformSystem
     */
    @JsonProperty("PlatformSystem")
    public void setPlatformSystem(List<Object> PlatformSystem) {
        this.PlatformSystem = PlatformSystem;
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
            if ("PlatformSystem".equals(name)) {
                if (value instanceof List) {
                    setPlatformSystem(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"PlatformSystem\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
            if ("PlatformSystem".equals(name)) {
                return getPlatformSystem();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ObservedPlatformSystem.NOT_FOUND_VALUE);
        if (ObservedPlatformSystem.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AugmentationType).append(PlatformSystem).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObservedPlatformSystem) == false) {
            return false;
        }
        ObservedPlatformSystem rhs = ((ObservedPlatformSystem) other);
        return new EqualsBuilder().append(AugmentationType, rhs.AugmentationType).append(PlatformSystem, rhs.PlatformSystem).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationID\",\"title\":\"IdentificationID\",\"type\":\"array\",\"description\":\"An identifier.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemName\",\"title\":\"SystemName\",\"type\":\"array\",\"description\":\"A name of the kind or the source of a system identifier.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemIdentificationType\",\"title\":\"SystemIdentificationType\",\"type\":\"object\",\"description\":\"A data type for a number or code assigned to a system to uniquely identify the system.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.SystemIdentificationType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"IdentificationID\":{\"$ref\":\"IdentificationID.json\"},\"IdentificationJurisdiction\":{\"$ref\":\"IdentificationJurisdiction.json\"},\"IdentificationAugmentationPoint\":{\"ShortName\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ShortName.json\"}},\"SystemName\":{\"$ref\":\"SystemName.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-platform-system/2.0/#PlatformSystem\",\"title\":\"PlatformSystem\",\"type\":\"array\",\"description\":\"A platform system described by its properties.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"SystemIdentification\":{\"$ref\":\"../../../../niem/domains/intelligence/3.2/SystemIdentification.json\"},\"PlatformStandardIdentityCode\":{\"$ref\":\"PlatformStandardIdentityCode.json\"}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/intelligence/3.2/#SystemIdentification\",\"title\":\"SystemIdentification\",\"type\":\"object\",\"description\":\"A number or code identification assigned by a system to uniquely identify a person or object.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.intelligence._3_2.SystemIdentification\",\"properties\":{\"SystemIdentificationType\":{\"$ref\":\"../../../../niem/niem-core/3.0/SystemIdentificationType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName\",\"title\":\"LocationCountryName\",\"type\":\"object\",\"description\":\"A name of a country, territory, dependency, or other such geopolitical subdivision of a location.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationCountryName\",\"properties\":{\"TextType\":{\"$ref\":\"TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-platform-system/2.0/#PlatformStandardIdentityCode\",\"title\":\"PlatformStandardIdentityCode\",\"type\":\"object\",\"description\":\"A platform Standard Identity Code.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_platform_system._2_0.PlatformStandardIdentityCode\",\"properties\":{\"StandardIdentityCodeType\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/StandardIdentityCodeType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationJurisdiction\",\"title\":\"IdentificationJurisdiction\",\"type\":\"array\",\"description\":\"An area, region, or unit where a unique identification is issued.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"LocationCountry\":{\"LocationCountryName\":{\"$ref\":\"LocationCountryName.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#StandardIdentityCodeType\",\"title\":\"StandardIdentityCodeType\",\"type\":\"object\",\"description\":\"A data type for a code describing the standard identity of a track; codes defined by MIL-STD-2525C.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.StandardIdentityCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#AugmentationType\",\"title\":\"AugmentationType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.AugmentationType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"IdentificationID.json", "../../../tsoa/soi/tsoa-track/2.0/ShortName.json", "SystemName.json", "../../../../niem/niem-core/3.0/SystemIdentificationType.json", "PlatformSystem.json", "../../../../niem/domains/intelligence/3.2/SystemIdentification.json", "LocationCountryName.json", "../../../niem/structures/3.0/ObjectType.json", "PlatformStandardIdentityCode.json", "IdentificationJurisdiction.json", "../../../../niem/niem-core/3.0/TextType.json", "../../../../niem/domains/militaryOperations/3.2/StandardIdentityCodeType.json", "../../../../niem/structures/3.0/AugmentationType.json"};
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
    public static ObservedPlatformSystem fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservedPlatformSystem.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
