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
 * DirectionDatumCode
 * <p>
 * A designator for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "DirectionDatumCodeType"
})
public class niem_domains_militaryOperations_3_2_DirectionDatumCode {

    /**
     * DirectionDatumCodeType
     * <p>
     * A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).
     * 
     */
    @JsonProperty("DirectionDatumCodeType")
    @Valid
    private niem_codes_nga_datum_3_0_DirectionDatumCodeType DirectionDatumCodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#DirectionDatumCode\",\"title\":\"DirectionDatumCode\",\"type\":\"object\",\"description\":\"A designator for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_DirectionDatumCode\",\"properties\":{\"DirectionDatumCodeType\":{\"$ref\":\"../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * DirectionDatumCodeType
     * <p>
     * A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).
     * 
     * @return
     *     The DirectionDatumCodeType
     */
    @JsonProperty("DirectionDatumCodeType")
    public niem_codes_nga_datum_3_0_DirectionDatumCodeType getDirectionDatumCodeType() {
        return DirectionDatumCodeType;
    }

    /**
     * DirectionDatumCodeType
     * <p>
     * A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).
     * 
     * @param DirectionDatumCodeType
     *     The DirectionDatumCodeType
     */
    @JsonProperty("DirectionDatumCodeType")
    public void setDirectionDatumCodeType(niem_codes_nga_datum_3_0_DirectionDatumCodeType DirectionDatumCodeType) {
        this.DirectionDatumCodeType = DirectionDatumCodeType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("DirectionDatumCodeType".equals(name)) {
            if (value instanceof niem_codes_nga_datum_3_0_DirectionDatumCodeType) {
                setDirectionDatumCodeType(((niem_codes_nga_datum_3_0_DirectionDatumCodeType) value));
            } else {
                throw new IllegalArgumentException(("property \"DirectionDatumCodeType\" is of type \"niem_codes_nga_datum_3_0_DirectionDatumCodeType\", but got "+ value.getClass().toString()));
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
        if ("DirectionDatumCodeType".equals(name)) {
            return getDirectionDatumCodeType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_domains_militaryOperations_3_2_DirectionDatumCode.NOT_FOUND_VALUE);
        if (niem_domains_militaryOperations_3_2_DirectionDatumCode.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(DirectionDatumCodeType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_domains_militaryOperations_3_2_DirectionDatumCode) == false) {
            return false;
        }
        niem_domains_militaryOperations_3_2_DirectionDatumCode rhs = ((niem_domains_militaryOperations_3_2_DirectionDatumCode) other);
        return new EqualsBuilder().append(DirectionDatumCodeType, rhs.DirectionDatumCodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#DirectionDatumCodeType\",\"title\":\"DirectionDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.4\",\"javaType\":\"niem_codes_nga_datum_3_0_DirectionDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json"};
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
    public static niem_domains_militaryOperations_3_2_DirectionDatumCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_domains_militaryOperations_3_2_DirectionDatumCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
