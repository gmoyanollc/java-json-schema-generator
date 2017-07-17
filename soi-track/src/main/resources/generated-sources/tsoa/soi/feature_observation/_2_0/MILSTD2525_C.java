
package tsoa.soi.feature_observation._2_0;

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
 * MILSTD2525-C
 * <p>
 * A MILSTD2525-C symbol representation
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "MILSTD2525-C-SIDC-Code"
})
public class MILSTD2525_C {

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
     * MILSTD2525-C-SIDC-Code
     * <p>
     * A symbol identification code, an alphanumeric code based on a database structure that provides the minimum elements required to construct the basic icon and/or a complete symbol. Also called SIDC.
     * 
     */
    @JsonProperty("MILSTD2525-C-SIDC-Code")
    @Size(max = 16)
    @Valid
    private List<Object> MILSTD2525CSIDCCode = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#MILSTD2525-C\",\"title\":\"MILSTD2525-C\",\"type\":\"object\",\"description\":\"A MILSTD2525-C symbol representation\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.feature_observation._2_0.MILSTD2525_C\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"MILSTD2525-C-SIDC-Code\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/MILSTD2525-C-SIDC-Code.json\"}},\"additionalProperties\":false}", ""};
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
     * MILSTD2525-C-SIDC-Code
     * <p>
     * A symbol identification code, an alphanumeric code based on a database structure that provides the minimum elements required to construct the basic icon and/or a complete symbol. Also called SIDC.
     * 
     * @return
     *     The MILSTD2525CSIDCCode
     */
    @JsonProperty("MILSTD2525-C-SIDC-Code")
    public List<Object> getMILSTD2525CSIDCCode() {
        return MILSTD2525CSIDCCode;
    }

    /**
     * MILSTD2525-C-SIDC-Code
     * <p>
     * A symbol identification code, an alphanumeric code based on a database structure that provides the minimum elements required to construct the basic icon and/or a complete symbol. Also called SIDC.
     * 
     * @param MILSTD2525CSIDCCode
     *     The MILSTD2525-C-SIDC-Code
     */
    @JsonProperty("MILSTD2525-C-SIDC-Code")
    public void setMILSTD2525CSIDCCode(List<Object> MILSTD2525CSIDCCode) {
        this.MILSTD2525CSIDCCode = MILSTD2525CSIDCCode;
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
            if ("MILSTD2525-C-SIDC-Code".equals(name)) {
                if (value instanceof List) {
                    setMILSTD2525CSIDCCode(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"MILSTD2525-C-SIDC-Code\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        if ("ObjectType".equals(name)) {
            return getObjectType();
        } else {
            if ("MILSTD2525-C-SIDC-Code".equals(name)) {
                return getMILSTD2525CSIDCCode();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, MILSTD2525_C.NOT_FOUND_VALUE);
        if (MILSTD2525_C.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(MILSTD2525CSIDCCode).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof MILSTD2525_C) == false) {
            return false;
        }
        MILSTD2525_C rhs = ((MILSTD2525_C) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(MILSTD2525CSIDCCode, rhs.MILSTD2525CSIDCCode).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#MILSTD2525-C-SIDC-Code\",\"title\":\"MILSTD2525-C-SIDC-Code\",\"type\":\"array\",\"description\":\"A symbol identification code, an alphanumeric code based on a database structure that provides the minimum elements required to construct the basic icon and/or a complete symbol. Also called SIDC.\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/domains/militaryOperations/3.2/MILSTD2525-C-SIDC-Code.json", "../../../../niem/structures/3.0/ObjectType.json"};
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
    public static MILSTD2525_C fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, MILSTD2525_C.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
