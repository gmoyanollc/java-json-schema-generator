
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
public class LocationHeightVerticalDatumCode {

    /**
     * VerticalDatumCodeType
     * <p>
     * A data type for vertical datum codes.
     * 
     */
    @JsonProperty("VerticalDatumCodeType")
    @Valid
    private niem.codes.nga_datum._3_0.VerticalDatumCodeType VerticalDatumCodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}", ""};
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
    public niem.codes.nga_datum._3_0.VerticalDatumCodeType getVerticalDatumCodeType() {
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
    public void setVerticalDatumCodeType(niem.codes.nga_datum._3_0.VerticalDatumCodeType VerticalDatumCodeType) {
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
            if (value instanceof niem.codes.nga_datum._3_0.VerticalDatumCodeType) {
                setVerticalDatumCodeType(((niem.codes.nga_datum._3_0.VerticalDatumCodeType) value));
            } else {
                throw new IllegalArgumentException(("property \"VerticalDatumCodeType\" is of type \"niem.codes.nga_datum._3_0.VerticalDatumCodeType\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, LocationHeightVerticalDatumCode.NOT_FOUND_VALUE);
        if (LocationHeightVerticalDatumCode.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof LocationHeightVerticalDatumCode) == false) {
            return false;
        }
        LocationHeightVerticalDatumCode rhs = ((LocationHeightVerticalDatumCode) other);
        return new EqualsBuilder().append(VerticalDatumCodeType, rhs.VerticalDatumCodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.nga_datum._3_0.VerticalDatumCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}"};
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
    public static LocationHeightVerticalDatumCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, LocationHeightVerticalDatumCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
