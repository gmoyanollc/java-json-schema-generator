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
 * EntityOrganization
 * <p>
 * An organization capable of bearing legal rights and responsibilities.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "OrganizationAbbreviationText",
    "OrganizationName"
})
public class niem_niem_core_3_0_EntityOrganization {

    /**
     * OrganizationAbbreviationText
     * <p>
     * An abbreviation, acronym, or code for an organization name.
     * 
     */
    @JsonProperty("OrganizationAbbreviationText")
    @Valid
    private List<Object> OrganizationAbbreviationText = new ArrayList<Object>();
    /**
     * OrganizationName
     * <p>
     * A name of an organization.
     * 
     */
    @JsonProperty("OrganizationName")
    @Valid
    private List<Object> OrganizationName = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EntityOrganization\",\"title\":\"EntityOrganization\",\"type\":\"object\",\"description\":\"An organization capable of bearing legal rights and responsibilities.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_EntityOrganization\",\"properties\":{\"OrganizationAbbreviationText\":{\"$ref\":\"OrganizationAbbreviationText.json\"},\"OrganizationName\":{\"$ref\":\"OrganizationName.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * OrganizationAbbreviationText
     * <p>
     * An abbreviation, acronym, or code for an organization name.
     * 
     * @return
     *     The OrganizationAbbreviationText
     */
    @JsonProperty("OrganizationAbbreviationText")
    public List<Object> getOrganizationAbbreviationText() {
        return OrganizationAbbreviationText;
    }

    /**
     * OrganizationAbbreviationText
     * <p>
     * An abbreviation, acronym, or code for an organization name.
     * 
     * @param OrganizationAbbreviationText
     *     The OrganizationAbbreviationText
     */
    @JsonProperty("OrganizationAbbreviationText")
    public void setOrganizationAbbreviationText(List<Object> OrganizationAbbreviationText) {
        this.OrganizationAbbreviationText = OrganizationAbbreviationText;
    }

    /**
     * OrganizationName
     * <p>
     * A name of an organization.
     * 
     * @return
     *     The OrganizationName
     */
    @JsonProperty("OrganizationName")
    public List<Object> getOrganizationName() {
        return OrganizationName;
    }

    /**
     * OrganizationName
     * <p>
     * A name of an organization.
     * 
     * @param OrganizationName
     *     The OrganizationName
     */
    @JsonProperty("OrganizationName")
    public void setOrganizationName(List<Object> OrganizationName) {
        this.OrganizationName = OrganizationName;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("OrganizationAbbreviationText".equals(name)) {
            if (value instanceof List) {
                setOrganizationAbbreviationText(((List<Object> ) value));
            } else {
                throw new IllegalArgumentException(("property \"OrganizationAbbreviationText\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("OrganizationName".equals(name)) {
                if (value instanceof List) {
                    setOrganizationName(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"OrganizationName\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        if ("OrganizationAbbreviationText".equals(name)) {
            return getOrganizationAbbreviationText();
        } else {
            if ("OrganizationName".equals(name)) {
                return getOrganizationName();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_niem_core_3_0_EntityOrganization.NOT_FOUND_VALUE);
        if (niem_niem_core_3_0_EntityOrganization.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(OrganizationAbbreviationText).append(OrganizationName).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_niem_core_3_0_EntityOrganization) == false) {
            return false;
        }
        niem_niem_core_3_0_EntityOrganization rhs = ((niem_niem_core_3_0_EntityOrganization) other);
        return new EqualsBuilder().append(OrganizationAbbreviationText, rhs.OrganizationAbbreviationText).append(OrganizationName, rhs.OrganizationName).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationName\",\"title\":\"OrganizationName\",\"type\":\"array\",\"description\":\"A name of an organization.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#OrganizationAbbreviationText\",\"title\":\"OrganizationAbbreviationText\",\"type\":\"array\",\"description\":\"An abbreviation, acronym, or code for an organization name.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"OrganizationName.json", "OrganizationAbbreviationText.json"};
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
    public static niem_niem_core_3_0_EntityOrganization fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_niem_core_3_0_EntityOrganization.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
