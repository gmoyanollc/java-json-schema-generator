
package niem.domains.maritime._3_2;

import java.io.IOException;
import javax.annotation.Generated;
import javax.validation.Valid;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.ObjectMapper;
import niem.niem_core._3_0.TextType;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * AngleUnit
 * <p>
 * A data concept for a unit of measure of an angle value.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value"
})
public class AngleUnit {

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     */
    @JsonProperty("value")
    @Valid
    private TextType value;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/maritime/3.2/#AngleUnit\",\"title\":\"AngleUnit\",\"type\":\"object\",\"description\":\"A data concept for a unit of measure of an angle value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.maritime._3_2.AngleUnit\",\"properties\":{\"value\":{\"$ref\":\"../../../niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     * @return
     *     The value
     */
    @JsonProperty("value")
    public TextType getValue() {
        return value;
    }

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     * @param value
     *     The value
     */
    @JsonProperty("value")
    public void setValue(TextType value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("value".equals(name)) {
            if (value instanceof TextType) {
                setValue(((TextType) value));
            } else {
                throw new IllegalArgumentException(("property \"value\" is of type \"niem.niem_core._3_0.TextType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            return false;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("value".equals(name)) {
            return getValue();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, AngleUnit.NOT_FOUND_VALUE);
        if (AngleUnit.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(value).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof AngleUnit) == false) {
            return false;
        }
        AngleUnit rhs = ((AngleUnit) other);
        return new EqualsBuilder().append(value, rhs.value).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../niem-core/3.0/TextType.json"};
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
    public static AngleUnit fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, AngleUnit.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
