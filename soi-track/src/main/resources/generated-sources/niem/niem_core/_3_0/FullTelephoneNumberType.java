
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
 * FullTelephoneNumberType
 * <p>
 * A data type for a full telephone number.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "TelephoneNumberFullID",
    "TelephoneSuffixID"
})
public class FullTelephoneNumberType {

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
     * TelephoneNumberFullID
     * <p>
     * A complete telephone number.
     * 
     */
    @JsonProperty("TelephoneNumberFullID")
    @Size(max = 16)
    @Valid
    private List<String> TelephoneNumberFullID = new ArrayList<String>();
    /**
     * TelephoneSuffixID
     * <p>
     * An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.
     * 
     */
    @JsonProperty("TelephoneSuffixID")
    @Size(max = 16)
    @Valid
    private List<String> TelephoneSuffixID = new ArrayList<String>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#FullTelephoneNumberType\",\"title\":\"FullTelephoneNumberType\",\"type\":\"object\",\"description\":\"A data type for a full telephone number.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.FullTelephoneNumberType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"TelephoneNumberFullID\":{\"$ref\":\"TelephoneNumberFullID.json\"},\"TelephoneSuffixID\":{\"$ref\":\"TelephoneSuffixID.json\"}},\"additionalProperties\":false}", ""};
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
     * TelephoneNumberFullID
     * <p>
     * A complete telephone number.
     * 
     * @return
     *     The TelephoneNumberFullID
     */
    @JsonProperty("TelephoneNumberFullID")
    public List<String> getTelephoneNumberFullID() {
        return TelephoneNumberFullID;
    }

    /**
     * TelephoneNumberFullID
     * <p>
     * A complete telephone number.
     * 
     * @param TelephoneNumberFullID
     *     The TelephoneNumberFullID
     */
    @JsonProperty("TelephoneNumberFullID")
    public void setTelephoneNumberFullID(List<String> TelephoneNumberFullID) {
        this.TelephoneNumberFullID = TelephoneNumberFullID;
    }

    /**
     * TelephoneSuffixID
     * <p>
     * An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.
     * 
     * @return
     *     The TelephoneSuffixID
     */
    @JsonProperty("TelephoneSuffixID")
    public List<String> getTelephoneSuffixID() {
        return TelephoneSuffixID;
    }

    /**
     * TelephoneSuffixID
     * <p>
     * An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.
     * 
     * @param TelephoneSuffixID
     *     The TelephoneSuffixID
     */
    @JsonProperty("TelephoneSuffixID")
    public void setTelephoneSuffixID(List<String> TelephoneSuffixID) {
        this.TelephoneSuffixID = TelephoneSuffixID;
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
            if ("TelephoneNumberFullID".equals(name)) {
                if (value instanceof List) {
                    setTelephoneNumberFullID(((List<String> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"TelephoneNumberFullID\" is of type \"java.util.List<java.lang.String>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("TelephoneSuffixID".equals(name)) {
                    if (value instanceof List) {
                        setTelephoneSuffixID(((List<String> ) value));
                    } else {
                        throw new IllegalArgumentException(("property \"TelephoneSuffixID\" is of type \"java.util.List<java.lang.String>\", but got "+ value.getClass().toString()));
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
            if ("TelephoneNumberFullID".equals(name)) {
                return getTelephoneNumberFullID();
            } else {
                if ("TelephoneSuffixID".equals(name)) {
                    return getTelephoneSuffixID();
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
        Object value = declaredPropertyOrNotFound(name, FullTelephoneNumberType.NOT_FOUND_VALUE);
        if (FullTelephoneNumberType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(TelephoneNumberFullID).append(TelephoneSuffixID).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof FullTelephoneNumberType) == false) {
            return false;
        }
        FullTelephoneNumberType rhs = ((FullTelephoneNumberType) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(TelephoneNumberFullID, rhs.TelephoneNumberFullID).append(TelephoneSuffixID, rhs.TelephoneSuffixID).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneSuffixID\",\"title\":\"TelephoneSuffixID\",\"type\":\"array\",\"description\":\"An additional sequence of numbers to be entered after a call connects to be directed to the appropriate place.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TelephoneNumberFullID\",\"title\":\"TelephoneNumberFullID\",\"type\":\"array\",\"description\":\"A complete telephone number.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"TelephoneSuffixID.json", "TelephoneNumberFullID.json", "../../../niem/structures/3.0/ObjectType.json"};
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
    public static FullTelephoneNumberType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, FullTelephoneNumberType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
