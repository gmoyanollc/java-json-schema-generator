
package niem.niem_core._3_0;

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
 * LengthUnitCode
 * <p>
 * A unit of measure of a length value.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "LengthCodeType"
})
public class LengthUnitCode {

    /**
     * LengthCodeType
     * <p>
     * A data type for units of measurements for a length value.
     * 
     */
    @JsonProperty("LengthCodeType")
    @Valid
    private niem.codes.unece_rec20._3_0.LengthCodeType LengthCodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LengthUnitCode\",\"title\":\"LengthUnitCode\",\"type\":\"object\",\"description\":\"A unit of measure of a length value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LengthUnitCode\",\"properties\":{\"LengthCodeType\":{\"$ref\":\"../../../niem/codes/unece_rec20/3.0/LengthCodeType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * LengthCodeType
     * <p>
     * A data type for units of measurements for a length value.
     * 
     * @return
     *     The LengthCodeType
     */
    @JsonProperty("LengthCodeType")
    public niem.codes.unece_rec20._3_0.LengthCodeType getLengthCodeType() {
        return LengthCodeType;
    }

    /**
     * LengthCodeType
     * <p>
     * A data type for units of measurements for a length value.
     * 
     * @param LengthCodeType
     *     The LengthCodeType
     */
    @JsonProperty("LengthCodeType")
    public void setLengthCodeType(niem.codes.unece_rec20._3_0.LengthCodeType LengthCodeType) {
        this.LengthCodeType = LengthCodeType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("LengthCodeType".equals(name)) {
            if (value instanceof niem.codes.unece_rec20._3_0.LengthCodeType) {
                setLengthCodeType(((niem.codes.unece_rec20._3_0.LengthCodeType) value));
            } else {
                throw new IllegalArgumentException(("property \"LengthCodeType\" is of type \"niem.codes.unece_rec20._3_0.LengthCodeType\", but got "+ value.getClass().toString()));
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
        if ("LengthCodeType".equals(name)) {
            return getLengthCodeType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, LengthUnitCode.NOT_FOUND_VALUE);
        if (LengthUnitCode.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(LengthCodeType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof LengthUnitCode) == false) {
            return false;
        }
        LengthUnitCode rhs = ((LengthUnitCode) other);
        return new EqualsBuilder().append(LengthCodeType, rhs.LengthCodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/unece_rec20/3.0/#LengthCodeType\",\"title\":\"LengthCodeType\",\"type\":\"object\",\"description\":\"A data type for units of measurements for a length value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.unece_rec20._3_0.LengthCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../niem/codes/unece_rec20/3.0/LengthCodeType.json"};
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
    public static LengthUnitCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, LengthUnitCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
