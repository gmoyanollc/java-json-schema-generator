
package tsoa.soi.observed_weapon._2_0;

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
 * ObservedWeaponSystem
 * <p>
 * An observed weapon system.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AugmentationType",
    "WeaponSystem"
})
public class ObservedWeaponSystem {

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
     * WeaponSystem
     * <p>
     * A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.
     * 
     */
    @JsonProperty("WeaponSystem")
    @Valid
    private niem.domains.militaryOperationsRestricted._3_2.WeaponSystem WeaponSystem;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-weapon/2.0/#ObservedWeaponSystem\",\"title\":\"ObservedWeaponSystem\",\"type\":\"object\",\"description\":\"An observed weapon system.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_weapon._2_0.ObservedWeaponSystem\",\"properties\":{\"AugmentationType\":{\"$ref\":\"../../../../niem/structures/3.0/AugmentationType.json\"},\"WeaponSystem\":{\"$ref\":\"../../../../niem/domains/militaryOperationsRestricted/3.2/WeaponSystem.json\"}},\"additionalProperties\":false}", ""};
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
     * WeaponSystem
     * <p>
     * A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.
     * 
     * @return
     *     The WeaponSystem
     */
    @JsonProperty("WeaponSystem")
    public niem.domains.militaryOperationsRestricted._3_2.WeaponSystem getWeaponSystem() {
        return WeaponSystem;
    }

    /**
     * WeaponSystem
     * <p>
     * A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.
     * 
     * @param WeaponSystem
     *     The WeaponSystem
     */
    @JsonProperty("WeaponSystem")
    public void setWeaponSystem(niem.domains.militaryOperationsRestricted._3_2.WeaponSystem WeaponSystem) {
        this.WeaponSystem = WeaponSystem;
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
            if ("WeaponSystem".equals(name)) {
                if (value instanceof niem.domains.militaryOperationsRestricted._3_2.WeaponSystem) {
                    setWeaponSystem(((niem.domains.militaryOperationsRestricted._3_2.WeaponSystem) value));
                } else {
                    throw new IllegalArgumentException(("property \"WeaponSystem\" is of type \"niem.domains.militaryOperationsRestricted._3_2.WeaponSystem\", but got "+ value.getClass().toString()));
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
            if ("WeaponSystem".equals(name)) {
                return getWeaponSystem();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ObservedWeaponSystem.NOT_FOUND_VALUE);
        if (ObservedWeaponSystem.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AugmentationType).append(WeaponSystem).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObservedWeaponSystem) == false) {
            return false;
        }
        ObservedWeaponSystem rhs = ((ObservedWeaponSystem) other);
        return new EqualsBuilder().append(AugmentationType, rhs.AugmentationType).append(WeaponSystem, rhs.WeaponSystem).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ItemType\",\"title\":\"ItemType\",\"type\":\"object\",\"description\":\"A data type for an article or thing.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ItemType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"https://metadata.ces.mil/dse/dse_assets/100135658/SubmissionPackage/niem/militaryOperationsRestricted/3.2/#WeaponSystem\",\"title\":\"WeaponSystem\",\"type\":\"object\",\"description\":\"A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperationsRestricted._3_2.WeaponSystem\",\"properties\":{\"ItemType\":{\"$ref\":\"../../../../niem/niem-core/3.0/ItemType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#AugmentationType\",\"title\":\"AugmentationType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.AugmentationType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/niem-core/3.0/ItemType.json", "../../../../niem/domains/militaryOperationsRestricted/3.2/WeaponSystem.json", "../../../niem/structures/3.0/ObjectType.json", "../../../../niem/structures/3.0/AugmentationType.json"};
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
    public static ObservedWeaponSystem fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservedWeaponSystem.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
