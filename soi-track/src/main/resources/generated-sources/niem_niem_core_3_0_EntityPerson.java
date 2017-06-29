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
 * EntityPerson
 * <p>
 * A person capable of bearing legal rights and responsibilities.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "PersonDescriptionText",
    "PersonName"
})
public class niem_niem_core_3_0_EntityPerson {

    /**
     * PersonDescriptionText
     * <p>
     * A description of a person.
     * 
     */
    @JsonProperty("PersonDescriptionText")
    @Valid
    private List<Object> PersonDescriptionText = new ArrayList<Object>();
    /**
     * PersonName
     * <p>
     * A combination of names and/or titles by which a person is known.
     * 
     */
    @JsonProperty("PersonName")
    @Valid
    private List<Object> PersonName = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityPerson\",\"title\":\"EntityPerson\",\"type\":\"object\",\"description\":\"A person capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_EntityPerson\",\"properties\":{\"PersonDescriptionText\":{\"$ref\":\"PersonDescriptionText.json\"},\"PersonName\":{\"$ref\":\"PersonName.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * PersonDescriptionText
     * <p>
     * A description of a person.
     * 
     * @return
     *     The PersonDescriptionText
     */
    @JsonProperty("PersonDescriptionText")
    public List<Object> getPersonDescriptionText() {
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
    public void setPersonDescriptionText(List<Object> PersonDescriptionText) {
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
        if ("PersonDescriptionText".equals(name)) {
            if (value instanceof List) {
                setPersonDescriptionText(((List<Object> ) value));
            } else {
                throw new IllegalArgumentException(("property \"PersonDescriptionText\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
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

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_niem_core_3_0_EntityPerson.NOT_FOUND_VALUE);
        if (niem_niem_core_3_0_EntityPerson.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(PersonDescriptionText).append(PersonName).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_niem_core_3_0_EntityPerson) == false) {
            return false;
        }
        niem_niem_core_3_0_EntityPerson rhs = ((niem_niem_core_3_0_EntityPerson) other);
        return new EqualsBuilder().append(PersonDescriptionText, rhs.PersonDescriptionText).append(PersonName, rhs.PersonName).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonDescriptionText\",\"title\":\"PersonDescriptionText\",\"type\":\"array\",\"description\":\"A description of a person.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonName\",\"title\":\"PersonName\",\"type\":\"array\",\"description\":\"A combination of names and/or titles by which a person is known.\",\"version\":\"0.4.4\",\"items\":{\"PersonFullName\":{\"$ref\":\"PersonFullName.json\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#PersonFullName\",\"title\":\"PersonFullName\",\"type\":\"array\",\"description\":\"A complete name of a person.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"PersonDescriptionText.json", "PersonName.json", "PersonFullName.json"};
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
    public static niem_niem_core_3_0_EntityPerson fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_niem_core_3_0_EntityPerson.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
