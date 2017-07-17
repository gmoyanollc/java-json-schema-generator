
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
 * MILSTD2525-B
 * <p>
 * A MILSTD2525-B symbol representation.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "MILSTD2525-B-SIDC-Code"
})
public class MILSTD2525_B {

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
     * MILSTD2525-B-SIDC-Code
     * <p>
     * A symbol identification code, an alphanumeric code based on a database structure that provides the minimum elements required to construct the basic icon and/or a complete symbol. Also called SIDC.
     * 
     */
    @JsonProperty("MILSTD2525-B-SIDC-Code")
    @Size(max = 16)
    @Valid
    private List<Object> MILSTD2525BSIDCCode = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#MILSTD2525-B\",\"title\":\"MILSTD2525-B\",\"type\":\"object\",\"description\":\"A MILSTD2525-B symbol representation.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.feature_observation._2_0.MILSTD2525_B\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"MILSTD2525-B-SIDC-Code\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/MILSTD2525-B-SIDC-Code.json\"}},\"additionalProperties\":false}", ""};
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
     * MILSTD2525-B-SIDC-Code
     * <p>
     * A symbol identification code, an alphanumeric code based on a database structure that provides the minimum elements required to construct the basic icon and/or a complete symbol. Also called SIDC.
     * 
     * @return
     *     The MILSTD2525BSIDCCode
     */
    @JsonProperty("MILSTD2525-B-SIDC-Code")
    public List<Object> getMILSTD2525BSIDCCode() {
        return MILSTD2525BSIDCCode;
    }

    /**
     * MILSTD2525-B-SIDC-Code
     * <p>
     * A symbol identification code, an alphanumeric code based on a database structure that provides the minimum elements required to construct the basic icon and/or a complete symbol. Also called SIDC.
     * 
     * @param MILSTD2525BSIDCCode
     *     The MILSTD2525-B-SIDC-Code
     */
    @JsonProperty("MILSTD2525-B-SIDC-Code")
    public void setMILSTD2525BSIDCCode(List<Object> MILSTD2525BSIDCCode) {
        this.MILSTD2525BSIDCCode = MILSTD2525BSIDCCode;
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
            if ("MILSTD2525-B-SIDC-Code".equals(name)) {
                if (value instanceof List) {
                    setMILSTD2525BSIDCCode(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"MILSTD2525-B-SIDC-Code\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
            if ("MILSTD2525-B-SIDC-Code".equals(name)) {
                return getMILSTD2525BSIDCCode();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, MILSTD2525_B.NOT_FOUND_VALUE);
        if (MILSTD2525_B.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(MILSTD2525BSIDCCode).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof MILSTD2525_B) == false) {
            return false;
        }
        MILSTD2525_B rhs = ((MILSTD2525_B) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(MILSTD2525BSIDCCode, rhs.MILSTD2525BSIDCCode).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#MILSTD2525-B-SIDC-Code\",\"title\":\"MILSTD2525-B-SIDC-Code\",\"type\":\"array\",\"description\":\"A symbol identification code, an alphanumeric code based on a database structure that provides the minimum elements required to construct the basic icon and/or a complete symbol. Also called SIDC.\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/domains/militaryOperations/3.2/MILSTD2525-B-SIDC-Code.json", "../../../../niem/structures/3.0/ObjectType.json"};
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
    public static MILSTD2525_B fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, MILSTD2525_B.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
