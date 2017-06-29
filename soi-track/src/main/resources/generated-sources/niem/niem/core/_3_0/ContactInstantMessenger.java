
package niem.niem.core._3_0;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
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
 * ContactInstantMessenger
 * <p>
 * A user account for an instant messaging program by which a person or organization may be contacted.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "InstantMessengerServiceName",
    "InstantMessengerScreenID"
})
public class ContactInstantMessenger {

    /**
     * InstantMessengerServiceName
     * <p>
     * A name of an instant messaging service.
     * 
     */
    @JsonProperty("InstantMessengerServiceName")
    @Valid
    private List<Object> InstantMessengerServiceName = new ArrayList<Object>();
    /**
     * InstantMessengerScreenID
     * <p>
     * An account identifier used to reference a person or organization within an instant messaging system.
     * 
     */
    @JsonProperty("InstantMessengerScreenID")
    @Valid
    private List<Object> InstantMessengerScreenID = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactInstantMessenger\",\"title\":\"ContactInstantMessenger\",\"type\":\"object\",\"description\":\"A user account for an instant messaging program by which a person or organization may be contacted.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactInstantMessenger\",\"properties\":{\"InstantMessengerServiceName\":{\"$ref\":\"InstantMessengerServiceName.json\"},\"InstantMessengerScreenID\":{\"$ref\":\"InstantMessengerScreenID.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * InstantMessengerServiceName
     * <p>
     * A name of an instant messaging service.
     * 
     * @return
     *     The InstantMessengerServiceName
     */
    @JsonProperty("InstantMessengerServiceName")
    public List<Object> getInstantMessengerServiceName() {
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
    public void setInstantMessengerServiceName(List<Object> InstantMessengerServiceName) {
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
    public List<Object> getInstantMessengerScreenID() {
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
    public void setInstantMessengerScreenID(List<Object> InstantMessengerScreenID) {
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
        if ("InstantMessengerServiceName".equals(name)) {
            if (value instanceof List) {
                setInstantMessengerServiceName(((List<Object> ) value));
            } else {
                throw new IllegalArgumentException(("property \"InstantMessengerServiceName\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("InstantMessengerScreenID".equals(name)) {
                if (value instanceof List) {
                    setInstantMessengerScreenID(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"InstantMessengerScreenID\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        return new HashCodeBuilder().append(InstantMessengerServiceName).append(InstantMessengerScreenID).toHashCode();
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
        return new EqualsBuilder().append(InstantMessengerServiceName, rhs.InstantMessengerServiceName).append(InstantMessengerScreenID, rhs.InstantMessengerScreenID).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerServiceName\",\"title\":\"InstantMessengerServiceName\",\"type\":\"array\",\"description\":\"A name of an instant messaging service.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#InstantMessengerScreenID\",\"title\":\"InstantMessengerScreenID\",\"type\":\"array\",\"description\":\"An account identifier used to reference a person or organization within an instant messaging system.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"InstantMessengerServiceName.json", "InstantMessengerScreenID.json"};
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
