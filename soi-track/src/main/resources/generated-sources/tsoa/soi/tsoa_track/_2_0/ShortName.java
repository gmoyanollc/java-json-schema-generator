
package tsoa.soi.tsoa_track._2_0;

import java.io.IOException;
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
 * ShortName
 * <p>
 * A short-name, nick-name for something.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "TextType"
})
public class ShortName {

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     */
    @JsonProperty("TextType")
    @Valid
    private niem.niem_core._3_0.TextType TextType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     * @return
     *     The TextType
     */
    @JsonProperty("TextType")
    public niem.niem_core._3_0.TextType getTextType() {
        return TextType;
    }

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     * @param TextType
     *     The TextType
     */
    @JsonProperty("TextType")
    public void setTextType(niem.niem_core._3_0.TextType TextType) {
        this.TextType = TextType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("TextType".equals(name)) {
            if (value instanceof niem.niem_core._3_0.TextType) {
                setTextType(((niem.niem_core._3_0.TextType) value));
            } else {
                throw new IllegalArgumentException(("property \"TextType\" is of type \"niem.niem_core._3_0.TextType\", but got "+ value.getClass().toString()));
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
        if ("TextType".equals(name)) {
            return getTextType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ShortName.NOT_FOUND_VALUE);
        if (ShortName.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(TextType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ShortName) == false) {
            return false;
        }
        ShortName rhs = ((ShortName) other);
        return new EqualsBuilder().append(TextType, rhs.TextType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/niem-core/3.0/TextType.json"};
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
    public static ShortName fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ShortName.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
