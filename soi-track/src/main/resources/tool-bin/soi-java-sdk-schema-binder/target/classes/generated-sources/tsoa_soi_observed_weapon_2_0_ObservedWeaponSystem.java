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
    "WeaponSystem"
})
public class tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem {

    /**
     * WeaponSystem
     * <p>
     * A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.
     * 
     */
    @JsonProperty("WeaponSystem")
    @Valid
    private niem_domains_militaryOperationsRestricted_3_2_WeaponSystem WeaponSystem;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-weapon/2.0/#ObservedWeaponSystem\",\"title\":\"ObservedWeaponSystem\",\"type\":\"object\",\"description\":\"An observed weapon system.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem\",\"properties\":{\"WeaponSystem\":{\"$ref\":\"../../../../niem/domains/militaryOperationsRestricted/3.2/WeaponSystem.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * WeaponSystem
     * <p>
     * A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.
     * 
     * @return
     *     The WeaponSystem
     */
    @JsonProperty("WeaponSystem")
    public niem_domains_militaryOperationsRestricted_3_2_WeaponSystem getWeaponSystem() {
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
    public void setWeaponSystem(niem_domains_militaryOperationsRestricted_3_2_WeaponSystem WeaponSystem) {
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
        if ("WeaponSystem".equals(name)) {
            if (value instanceof niem_domains_militaryOperationsRestricted_3_2_WeaponSystem) {
                setWeaponSystem(((niem_domains_militaryOperationsRestricted_3_2_WeaponSystem) value));
            } else {
                throw new IllegalArgumentException(("property \"WeaponSystem\" is of type \"niem_domains_militaryOperationsRestricted_3_2_WeaponSystem\", but got "+ value.getClass().toString()));
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
        if ("WeaponSystem".equals(name)) {
            return getWeaponSystem();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem.NOT_FOUND_VALUE);
        if (tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(WeaponSystem).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem) == false) {
            return false;
        }
        tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem rhs = ((tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem) other);
        return new EqualsBuilder().append(WeaponSystem, rhs.WeaponSystem).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"https://metadata.ces.mil/dse/dse_assets/100135658/SubmissionPackage/niem/militaryOperationsRestricted/3.2/#WeaponSystem\",\"title\":\"WeaponSystem\",\"type\":\"object\",\"description\":\"A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperationsRestricted_3_2_WeaponSystem\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/domains/militaryOperationsRestricted/3.2/WeaponSystem.json"};
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
    public static tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, tsoa_soi_observed_weapon_2_0_ObservedWeaponSystem.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
