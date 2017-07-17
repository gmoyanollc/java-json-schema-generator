
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
 * UnitReferenceNumber
 * <p>
 * A Unit Reference Number (URN).
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "UnitReferenceNumberID"
})
public class UnitReferenceNumber {

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
     * UnitReferenceNumberID
     * <p>
     * An identifier specifying the Unit Reference Number (URN) used by units to uniquely identify friendly military units, broadcast networks, and multicast groups.
     * 
     */
    @JsonProperty("UnitReferenceNumberID")
    @Size(max = 16)
    @Valid
    private List<Object> UnitReferenceNumberID = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-military-unit/2.0/#UnitReferenceNumber\",\"title\":\"UnitReferenceNumber\",\"type\":\"object\",\"description\":\"A Unit Reference Number (URN).\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_military_unit._2_0.UnitReferenceNumber\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"UnitReferenceNumberID\":{\"$ref\":\"../../../../niem/domains/militaryOperationsRestricted/3.2/UnitReferenceNumberID.json\"}},\"additionalProperties\":false}", ""};
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
     * UnitReferenceNumberID
     * <p>
     * An identifier specifying the Unit Reference Number (URN) used by units to uniquely identify friendly military units, broadcast networks, and multicast groups.
     * 
     * @return
     *     The UnitReferenceNumberID
     */
    @JsonProperty("UnitReferenceNumberID")
    public List<Object> getUnitReferenceNumberID() {
        return UnitReferenceNumberID;
    }

    /**
     * UnitReferenceNumberID
     * <p>
     * An identifier specifying the Unit Reference Number (URN) used by units to uniquely identify friendly military units, broadcast networks, and multicast groups.
     * 
     * @param UnitReferenceNumberID
     *     The UnitReferenceNumberID
     */
    @JsonProperty("UnitReferenceNumberID")
    public void setUnitReferenceNumberID(List<Object> UnitReferenceNumberID) {
        this.UnitReferenceNumberID = UnitReferenceNumberID;
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
            if ("UnitReferenceNumberID".equals(name)) {
                if (value instanceof List) {
                    setUnitReferenceNumberID(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"UnitReferenceNumberID\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
            if ("UnitReferenceNumberID".equals(name)) {
                return getUnitReferenceNumberID();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, UnitReferenceNumber.NOT_FOUND_VALUE);
        if (UnitReferenceNumber.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(UnitReferenceNumberID).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof UnitReferenceNumber) == false) {
            return false;
        }
        UnitReferenceNumber rhs = ((UnitReferenceNumber) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(UnitReferenceNumberID, rhs.UnitReferenceNumberID).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"https://metadata.ces.mil/dse/dse_assets/100135658/SubmissionPackage/niem/militaryOperationsRestricted/3.2/#UnitReferenceNumberID\",\"title\":\"UnitReferenceNumberID\",\"type\":\"array\",\"description\":\"An identifier specifying the Unit Reference Number (URN) used by units to uniquely identify friendly military units, broadcast networks, and multicast groups.\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"integer\",\"null\"]},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/domains/militaryOperationsRestricted/3.2/UnitReferenceNumberID.json", "../../../../niem/structures/3.0/ObjectType.json"};
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
    public static UnitReferenceNumber fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, UnitReferenceNumber.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
