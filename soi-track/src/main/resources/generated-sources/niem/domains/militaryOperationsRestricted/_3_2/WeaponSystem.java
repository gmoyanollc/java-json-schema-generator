
package niem.domains.militaryOperationsRestricted._3_2;

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
 * WeaponSystem
 * <p>
 * A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ItemType"
})
public class WeaponSystem {

    /**
     * ItemType
     * <p>
     * A data type for an article or thing.
     * 
     */
    @JsonProperty("ItemType")
    @Valid
    private niem.niem_core._3_0.ItemType ItemType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"https://metadata.ces.mil/dse/dse_assets/100135658/SubmissionPackage/niem/militaryOperationsRestricted/3.2/#WeaponSystem\",\"title\":\"WeaponSystem\",\"type\":\"object\",\"description\":\"A combination of one or more weapons with all related equipment, materials, services, personnel, and means of delivery and deployment (if applicable) required for self-sufficiency.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperationsRestricted._3_2.WeaponSystem\",\"properties\":{\"ItemType\":{\"$ref\":\"../../../../niem/niem-core/3.0/ItemType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * ItemType
     * <p>
     * A data type for an article or thing.
     * 
     * @return
     *     The ItemType
     */
    @JsonProperty("ItemType")
    public niem.niem_core._3_0.ItemType getItemType() {
        return ItemType;
    }

    /**
     * ItemType
     * <p>
     * A data type for an article or thing.
     * 
     * @param ItemType
     *     The ItemType
     */
    @JsonProperty("ItemType")
    public void setItemType(niem.niem_core._3_0.ItemType ItemType) {
        this.ItemType = ItemType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("ItemType".equals(name)) {
            if (value instanceof niem.niem_core._3_0.ItemType) {
                setItemType(((niem.niem_core._3_0.ItemType) value));
            } else {
                throw new IllegalArgumentException(("property \"ItemType\" is of type \"niem.niem_core._3_0.ItemType\", but got "+ value.getClass().toString()));
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
        if ("ItemType".equals(name)) {
            return getItemType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, WeaponSystem.NOT_FOUND_VALUE);
        if (WeaponSystem.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ItemType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof WeaponSystem) == false) {
            return false;
        }
        WeaponSystem rhs = ((WeaponSystem) other);
        return new EqualsBuilder().append(ItemType, rhs.ItemType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ItemType\",\"title\":\"ItemType\",\"type\":\"object\",\"description\":\"A data type for an article or thing.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ItemType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/niem-core/3.0/ItemType.json", "../../../niem/structures/3.0/ObjectType.json"};
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
    public static WeaponSystem fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, WeaponSystem.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
