
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
 * EntityPerson
 * <p>
 * A person capable of bearing legal rights and responsibilities.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "PersonDescriptionText",
    "PersonName"
})
public class EntityPerson {

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
     * PersonDescriptionText
     * <p>
     * A description of a person.
     * 
     */
    @JsonProperty("PersonDescriptionText")
    @Size(max = 16)
    @Valid
    private List<String> PersonDescriptionText = new ArrayList<String>();
    /**
     * PersonName
     * <p>
     * A combination of names and/or titles by which a person is known.
     * 
     */
    @JsonProperty("PersonName")
    @Size(max = 16)
    @Valid
    private List<Object> PersonName = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityPerson\",\"title\":\"EntityPerson\",\"type\":\"object\",\"description\":\"A person capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.EntityPerson\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"PersonDescriptionText\":{\"$ref\":\"PersonDescriptionText.json\"},\"PersonName\":{\"$ref\":\"PersonName.json\"}},\"additionalProperties\":false}", ""};
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
     * PersonDescriptionText
     * <p>
     * A description of a person.
     * 
     * @return
     *     The PersonDescriptionText
     */
    @JsonProperty("PersonDescriptionText")
    public List<String> getPersonDescriptionText() {
        return PersonDescriptionText;
    }

    /**
     * PersonDescriptionText
     * <p>
     * A description of a person.
     * 
     * @param PersonDescriptionText
     *     The PersonDescriptionText
     */
    @JsonProperty("PersonDescriptionText")
    public void setPersonDescriptionText(List<String> PersonDescriptionText) {
        this.PersonDescriptionText = PersonDescriptionText;
    }

    /**
     * PersonName
     * <p>
     * A combination of names and/or titles by which a person is known.
     * 
     * @return
     *     The PersonName
     */
    @JsonProperty("PersonName")
    public List<Object> getPersonName() {
        return PersonName;
    }

    /**
     * PersonName
     * <p>
     * A combination of names and/or titles by which a person is known.
     * 
     * @param PersonName
     *     The PersonName
     */
    @JsonProperty("PersonName")
    public void setPersonName(List<Object> PersonName) {
        this.PersonName = PersonName;
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
            if ("PersonDescriptionText".equals(name)) {
                if (value instanceof List) {
                    setPersonDescriptionText(((List<String> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"PersonDescriptionText\" is of type \"java.util.List<java.lang.String>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("PersonName".equals(name)) {
                    if (value instanceof List) {
                        setPersonName(((List<Object> ) value));
                    } else {
                        throw new IllegalArgumentException(("property \"PersonName\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
            if ("PersonDescriptionText".equals(name)) {
                return getPersonDescriptionText();
            } else {
                if ("PersonName".equals(name)) {
                    return getPersonName();
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
        Object value = declaredPropertyOrNotFound(name, EntityPerson.NOT_FOUND_VALUE);
        if (EntityPerson.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(PersonDescriptionText).append(PersonName).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof EntityPerson) == false) {
            return false;
        }
        EntityPerson rhs = ((EntityPerson) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(PersonDescriptionText, rhs.PersonDescriptionText).append(PersonName, rhs.PersonName).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonDescriptionText\",\"title\":\"PersonDescriptionText\",\"type\":\"array\",\"description\":\"A description of a person.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#ProperNameTextType\",\"title\":\"ProperNameTextType\",\"type\":\"object\",\"description\":\"A data type for a word or phrase by which a person or thing is known, referred, or addressed.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.ProperNameTextType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonFullName\",\"title\":\"PersonFullName\",\"type\":\"array\",\"description\":\"A complete name of a person.\",\"version\":\"0.4.5\",\"items\":{\"ProperNameTextType\":{\"$ref\":\"ProperNameTextType.json\"}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonName\",\"title\":\"PersonName\",\"type\":\"array\",\"description\":\"A combination of names and/or titles by which a person is known.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"PersonFullName\":{\"$ref\":\"PersonFullName.json\"}},\"maxItems\":16,\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"PersonDescriptionText.json", "ProperNameTextType.json", "PersonFullName.json", "../../../niem/structures/3.0/ObjectType.json", "PersonName.json"};
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
    public static EntityPerson fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, EntityPerson.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
