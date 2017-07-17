
package tsoa.soi.observed_military_unit._2_0;

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
 * ObservedMilitaryUnit
 * <p>
 * An observed military unit described by its properties.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AugmentationType",
    "Unit"
})
public class ObservedMilitaryUnit {

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
     * Unit
     * <p>
     * A military element whose structure is prescribed by competent authority.
     * 
     */
    @JsonProperty("Unit")
    @Size(max = 16)
    @Valid
    private List<Object> Unit = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-military-unit/2.0/#ObservedMilitaryUnit\",\"title\":\"ObservedMilitaryUnit\",\"type\":\"object\",\"description\":\"An observed military unit described by its properties.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_military_unit._2_0.ObservedMilitaryUnit\",\"properties\":{\"AugmentationType\":{\"$ref\":\"../../../../niem/structures/3.0/AugmentationType.json\"},\"Unit\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/Unit.json\"}},\"additionalProperties\":false}", ""};
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
     * Unit
     * <p>
     * A military element whose structure is prescribed by competent authority.
     * 
     * @return
     *     The Unit
     */
    @JsonProperty("Unit")
    public List<Object> getUnit() {
        return Unit;
    }

    /**
     * Unit
     * <p>
     * A military element whose structure is prescribed by competent authority.
     * 
     * @param Unit
     *     The Unit
     */
    @JsonProperty("Unit")
    public void setUnit(List<Object> Unit) {
        this.Unit = Unit;
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
            if ("Unit".equals(name)) {
                if (value instanceof List) {
                    setUnit(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"Unit\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
            if ("Unit".equals(name)) {
                return getUnit();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ObservedMilitaryUnit.NOT_FOUND_VALUE);
        if (ObservedMilitaryUnit.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AugmentationType).append(Unit).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObservedMilitaryUnit) == false) {
            return false;
        }
        ObservedMilitaryUnit rhs = ((ObservedMilitaryUnit) other);
        return new EqualsBuilder().append(AugmentationType, rhs.AugmentationType).append(Unit, rhs.Unit).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#UnitName\",\"title\":\"UnitName\",\"type\":\"array\",\"description\":\"A character string assigned to represent a unit name.\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#UnitShortName\",\"title\":\"UnitShortName\",\"type\":\"array\",\"description\":\"A name used to create derived names and for display with military symbols.\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-military-unit/2.0/#UnitReferenceNumber\",\"title\":\"UnitReferenceNumber\",\"type\":\"object\",\"description\":\"A Unit Reference Number (URN).\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_military_unit._2_0.UnitReferenceNumber\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"UnitReferenceNumberID\":{\"$ref\":\"../../../../niem/domains/militaryOperationsRestricted/3.2/UnitReferenceNumberID.json\"}},\"additionalProperties\":false}", "{\"id\":\"https://metadata.ces.mil/dse/dse_assets/100135658/SubmissionPackage/niem/militaryOperationsRestricted/3.2/#UnitReferenceNumberID\",\"title\":\"UnitReferenceNumberID\",\"type\":\"array\",\"description\":\"An identifier specifying the Unit Reference Number (URN) used by units to uniquely identify friendly military units, broadcast networks, and multicast groups.\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"integer\",\"null\"]},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#UnitTypeCodeText\",\"title\":\"UnitTypeCodeText\",\"type\":\"array\",\"description\":\"A Joint Chiefs of Staff developed and assigned code, consisting of five characters that uniquely identify a \\\"type unit.\\\"\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#AugmentationType\",\"title\":\"AugmentationType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.AugmentationType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#Unit\",\"title\":\"Unit\",\"type\":\"array\",\"description\":\"A military element whose structure is prescribed by competent authority.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"UnitName\":{\"$ref\":\"UnitName.json\"},\"UnitShortName\":{\"$ref\":\"UnitShortName.json\"},\"UnitTypeCodeText\":{\"$ref\":\"UnitTypeCodeText.json\"},\"UnitAugmentationPoint\":{\"UnitReferenceNumber\":{\"$ref\":\"../../../../tsoa/soi/observed-military-unit/2.0/UnitReferenceNumber.json\"}}},\"maxItems\":16,\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"UnitName.json", "UnitShortName.json", "../../../../tsoa/soi/observed-military-unit/2.0/UnitReferenceNumber.json", "../../../../niem/domains/militaryOperationsRestricted/3.2/UnitReferenceNumberID.json", "UnitTypeCodeText.json", "../../../../niem/structures/3.0/ObjectType.json", "../../../../niem/structures/3.0/AugmentationType.json", "../../../../niem/domains/militaryOperations/3.2/Unit.json"};
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
    public static ObservedMilitaryUnit fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservedMilitaryUnit.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
