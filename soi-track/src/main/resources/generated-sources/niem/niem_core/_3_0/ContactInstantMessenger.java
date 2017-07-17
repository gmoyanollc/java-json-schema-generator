
package niem.niem_core._3_0;

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
 * ContactInstantMessenger
 * <p>
 * A user account for an instant messaging program by which a person or organization may be contacted.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "InstantMessengerServiceName",
    "InstantMessengerScreenID"
})
public class ContactInstantMessenger {

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
     * InstantMessengerServiceName
     * <p>
     * A name of an instant messaging service.
     * 
     */
    @JsonProperty("InstantMessengerServiceName")
    @Size(max = 16)
    @Valid
    private List<String> InstantMessengerServiceName = new ArrayList<String>();
    /**
     * InstantMessengerScreenID
     * <p>
     * An account identifier used to reference a person or organization within an instant messaging system.
     * 
     */
    @JsonProperty("InstantMessengerScreenID")
    @Size(max = 16)
    @Valid
    private List<String> InstantMessengerScreenID = new ArrayList<String>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInstantMessenger\",\"title\":\"ContactInstantMessenger\",\"type\":\"object\",\"description\":\"A user account for an instant messaging program by which a person or organization may be contacted.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ContactInstantMessenger\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"InstantMessengerServiceName\":{\"$ref\":\"InstantMessengerServiceName.json\"},\"InstantMessengerScreenID\":{\"$ref\":\"InstantMessengerScreenID.json\"}},\"additionalProperties\":false}", ""};
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
     * InstantMessengerServiceName
     * <p>
     * A name of an instant messaging service.
     * 
     * @return
     *     The InstantMessengerServiceName
     */
    @JsonProperty("InstantMessengerServiceName")
    public List<String> getInstantMessengerServiceName() {
        return InstantMessengerServiceName;
    }

    /**
     * InstantMessengerServiceName
     * <p>
     * A name of an instant messaging service.
     * 
     * @param InstantMessengerServiceName
     *     The InstantMessengerServiceName
     */
    @JsonProperty("InstantMessengerServiceName")
    public void setInstantMessengerServiceName(List<String> InstantMessengerServiceName) {
        this.InstantMessengerServiceName = InstantMessengerServiceName;
    }

    /**
     * InstantMessengerScreenID
     * <p>
     * An account identifier used to reference a person or organization within an instant messaging system.
     * 
     * @return
     *     The InstantMessengerScreenID
     */
    @JsonProperty("InstantMessengerScreenID")
    public List<String> getInstantMessengerScreenID() {
        return InstantMessengerScreenID;
    }

    /**
     * InstantMessengerScreenID
     * <p>
     * An account identifier used to reference a person or organization within an instant messaging system.
     * 
     * @param InstantMessengerScreenID
     *     The InstantMessengerScreenID
     */
    @JsonProperty("InstantMessengerScreenID")
    public void setInstantMessengerScreenID(List<String> InstantMessengerScreenID) {
        this.InstantMessengerScreenID = InstantMessengerScreenID;
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
            if ("InstantMessengerServiceName".equals(name)) {
                if (value instanceof List) {
                    setInstantMessengerServiceName(((List<String> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"InstantMessengerServiceName\" is of type \"java.util.List<java.lang.String>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("InstantMessengerScreenID".equals(name)) {
                    if (value instanceof List) {
                        setInstantMessengerScreenID(((List<String> ) value));
                    } else {
                        throw new IllegalArgumentException(("property \"InstantMessengerScreenID\" is of type \"java.util.List<java.lang.String>\", but got "+ value.getClass().toString()));
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
        if ("ObjectType".equals(name)) {
            return getObjectType();
        } else {
            if ("InstantMessengerServiceName".equals(name)) {
                return getInstantMessengerServiceName();
            } else {
                if ("InstantMessengerScreenID".equals(name)) {
                    return getInstantMessengerScreenID();
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
        Object value = declaredPropertyOrNotFound(name, ContactInstantMessenger.NOT_FOUND_VALUE);
        if (ContactInstantMessenger.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(InstantMessengerServiceName).append(InstantMessengerScreenID).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ContactInstantMessenger) == false) {
            return false;
        }
        ContactInstantMessenger rhs = ((ContactInstantMessenger) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(InstantMessengerServiceName, rhs.InstantMessengerServiceName).append(InstantMessengerScreenID, rhs.InstantMessengerScreenID).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerServiceName\",\"title\":\"InstantMessengerServiceName\",\"type\":\"array\",\"description\":\"A name of an instant messaging service.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerScreenID\",\"title\":\"InstantMessengerScreenID\",\"type\":\"array\",\"description\":\"An account identifier used to reference a person or organization within an instant messaging system.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"InstantMessengerServiceName.json", "../../../niem/structures/3.0/ObjectType.json", "InstantMessengerScreenID.json"};
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
    public static ContactInstantMessenger fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ContactInstantMessenger.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
