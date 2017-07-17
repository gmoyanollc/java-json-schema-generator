
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
 * ContactRadio
 * <p>
 * A method of contacting a person or organization by messages over a radio.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "ContactRadioChannelText",
    "ContactRadioCallSignID"
})
public class ContactRadio {

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
     * ContactRadioChannelText
     * <p>
     * A radio channel or frequency within the band.
     * 
     */
    @JsonProperty("ContactRadioChannelText")
    @Size(max = 16)
    @Valid
    private List<String> ContactRadioChannelText = new ArrayList<String>();
    /**
     * ContactRadioCallSignID
     * <p>
     * An identifier of a person using a radio.
     * 
     */
    @JsonProperty("ContactRadioCallSignID")
    @Size(max = 16)
    @Valid
    private List<String> ContactRadioCallSignID = new ArrayList<String>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadio\",\"title\":\"ContactRadio\",\"type\":\"object\",\"description\":\"A method of contacting a person or organization by messages over a radio.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ContactRadio\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"ContactRadioChannelText\":{\"$ref\":\"ContactRadioChannelText.json\"},\"ContactRadioCallSignID\":{\"$ref\":\"ContactRadioCallSignID.json\"}},\"additionalProperties\":false}", ""};
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
     * ContactRadioChannelText
     * <p>
     * A radio channel or frequency within the band.
     * 
     * @return
     *     The ContactRadioChannelText
     */
    @JsonProperty("ContactRadioChannelText")
    public List<String> getContactRadioChannelText() {
        return ContactRadioChannelText;
    }

    /**
     * ContactRadioChannelText
     * <p>
     * A radio channel or frequency within the band.
     * 
     * @param ContactRadioChannelText
     *     The ContactRadioChannelText
     */
    @JsonProperty("ContactRadioChannelText")
    public void setContactRadioChannelText(List<String> ContactRadioChannelText) {
        this.ContactRadioChannelText = ContactRadioChannelText;
    }

    /**
     * ContactRadioCallSignID
     * <p>
     * An identifier of a person using a radio.
     * 
     * @return
     *     The ContactRadioCallSignID
     */
    @JsonProperty("ContactRadioCallSignID")
    public List<String> getContactRadioCallSignID() {
        return ContactRadioCallSignID;
    }

    /**
     * ContactRadioCallSignID
     * <p>
     * An identifier of a person using a radio.
     * 
     * @param ContactRadioCallSignID
     *     The ContactRadioCallSignID
     */
    @JsonProperty("ContactRadioCallSignID")
    public void setContactRadioCallSignID(List<String> ContactRadioCallSignID) {
        this.ContactRadioCallSignID = ContactRadioCallSignID;
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
            if ("ContactRadioChannelText".equals(name)) {
                if (value instanceof List) {
                    setContactRadioChannelText(((List<String> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"ContactRadioChannelText\" is of type \"java.util.List<java.lang.String>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("ContactRadioCallSignID".equals(name)) {
                    if (value instanceof List) {
                        setContactRadioCallSignID(((List<String> ) value));
                    } else {
                        throw new IllegalArgumentException(("property \"ContactRadioCallSignID\" is of type \"java.util.List<java.lang.String>\", but got "+ value.getClass().toString()));
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
            if ("ContactRadioChannelText".equals(name)) {
                return getContactRadioChannelText();
            } else {
                if ("ContactRadioCallSignID".equals(name)) {
                    return getContactRadioCallSignID();
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
        Object value = declaredPropertyOrNotFound(name, ContactRadio.NOT_FOUND_VALUE);
        if (ContactRadio.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(ContactRadioChannelText).append(ContactRadioCallSignID).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ContactRadio) == false) {
            return false;
        }
        ContactRadio rhs = ((ContactRadio) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(ContactRadioChannelText, rhs.ContactRadioChannelText).append(ContactRadioCallSignID, rhs.ContactRadioCallSignID).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioChannelText\",\"title\":\"ContactRadioChannelText\",\"type\":\"array\",\"description\":\"A radio channel or frequency within the band.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioCallSignID\",\"title\":\"ContactRadioCallSignID\",\"type\":\"array\",\"description\":\"An identifier of a person using a radio.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"ContactRadioChannelText.json", "ContactRadioCallSignID.json", "../../../niem/structures/3.0/ObjectType.json"};
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
    public static ContactRadio fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ContactRadio.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
