
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
 * ContactRadio
 * <p>
 * A method of contacting a person or organization by messages over a radio.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ContactRadioChannelText",
    "ContactRadioCallSignID"
})
public class ContactRadio {

    /**
     * ContactRadioChannelText
     * <p>
     * A radio channel or frequency within the band.
     * 
     */
    @JsonProperty("ContactRadioChannelText")
    @Valid
    private List<Object> ContactRadioChannelText = new ArrayList<Object>();
    /**
     * ContactRadioCallSignID
     * <p>
     * An identifier of a person using a radio.
     * 
     */
    @JsonProperty("ContactRadioCallSignID")
    @Valid
    private List<Object> ContactRadioCallSignID = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadio\",\"title\":\"ContactRadio\",\"type\":\"object\",\"description\":\"A method of contacting a person or organization by messages over a radio.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.ContactRadio\",\"properties\":{\"ContactRadioChannelText\":{\"$ref\":\"ContactRadioChannelText.json\"},\"ContactRadioCallSignID\":{\"$ref\":\"ContactRadioCallSignID.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * ContactRadioChannelText
     * <p>
     * A radio channel or frequency within the band.
     * 
     * @return
     *     The ContactRadioChannelText
     */
    @JsonProperty("ContactRadioChannelText")
    public List<Object> getContactRadioChannelText() {
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
    public void setContactRadioChannelText(List<Object> ContactRadioChannelText) {
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
    public List<Object> getContactRadioCallSignID() {
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
    public void setContactRadioCallSignID(List<Object> ContactRadioCallSignID) {
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
        if ("ContactRadioChannelText".equals(name)) {
            if (value instanceof List) {
                setContactRadioChannelText(((List<Object> ) value));
            } else {
                throw new IllegalArgumentException(("property \"ContactRadioChannelText\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("ContactRadioCallSignID".equals(name)) {
                if (value instanceof List) {
                    setContactRadioCallSignID(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"ContactRadioCallSignID\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        return new HashCodeBuilder().append(ContactRadioChannelText).append(ContactRadioCallSignID).toHashCode();
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
        return new EqualsBuilder().append(ContactRadioChannelText, rhs.ContactRadioChannelText).append(ContactRadioCallSignID, rhs.ContactRadioCallSignID).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioCallSignID\",\"title\":\"ContactRadioCallSignID\",\"type\":\"array\",\"description\":\"An identifier of a person using a radio.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ContactRadioChannelText\",\"title\":\"ContactRadioChannelText\",\"type\":\"array\",\"description\":\"A radio channel or frequency within the band.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"ContactRadioCallSignID.json", "ContactRadioChannelText.json"};
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
