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
 * LocationHeightVerticalDatumCode
 * <p>
 * A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "VerticalDatumCodeType"
})
public class niem_niem_core_3_0_LocationHeightVerticalDatumCode {

    /**
     * VerticalDatumCodeType
     * <p>
     * A data type for vertical datum codes.
     * 
     */
    @JsonProperty("VerticalDatumCodeType")
    @Valid
    private niem_codes_nga_datum_3_0_VerticalDatumCodeType VerticalDatumCodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * VerticalDatumCodeType
     * <p>
     * A data type for vertical datum codes.
     * 
     * @return
     *     The VerticalDatumCodeType
     */
    @JsonProperty("VerticalDatumCodeType")
    public niem_codes_nga_datum_3_0_VerticalDatumCodeType getVerticalDatumCodeType() {
        return VerticalDatumCodeType;
    }

    /**
     * VerticalDatumCodeType
     * <p>
     * A data type for vertical datum codes.
     * 
     * @param VerticalDatumCodeType
     *     The VerticalDatumCodeType
     */
    @JsonProperty("VerticalDatumCodeType")
    public void setVerticalDatumCodeType(niem_codes_nga_datum_3_0_VerticalDatumCodeType VerticalDatumCodeType) {
        this.VerticalDatumCodeType = VerticalDatumCodeType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("VerticalDatumCodeType".equals(name)) {
            if (value instanceof niem_codes_nga_datum_3_0_VerticalDatumCodeType) {
                setVerticalDatumCodeType(((niem_codes_nga_datum_3_0_VerticalDatumCodeType) value));
            } else {
                throw new IllegalArgumentException(("property \"VerticalDatumCodeType\" is of type \"niem_codes_nga_datum_3_0_VerticalDatumCodeType\", but got "+ value.getClass().toString()));
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
        if ("VerticalDatumCodeType".equals(name)) {
            return getVerticalDatumCodeType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_niem_core_3_0_LocationHeightVerticalDatumCode.NOT_FOUND_VALUE);
        if (niem_niem_core_3_0_LocationHeightVerticalDatumCode.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(VerticalDatumCodeType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_niem_core_3_0_LocationHeightVerticalDatumCode) == false) {
            return false;
        }
        niem_niem_core_3_0_LocationHeightVerticalDatumCode rhs = ((niem_niem_core_3_0_LocationHeightVerticalDatumCode) other);
        return new EqualsBuilder().append(VerticalDatumCodeType, rhs.VerticalDatumCodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem_codes_nga_datum_3_0_VerticalDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json"};
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
    public static niem_niem_core_3_0_LocationHeightVerticalDatumCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_niem_core_3_0_LocationHeightVerticalDatumCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
