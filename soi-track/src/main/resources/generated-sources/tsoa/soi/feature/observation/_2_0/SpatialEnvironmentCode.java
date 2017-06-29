
package tsoa.soi.feature.observation._2_0;

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
 * SpatialEnvironmentCode
 * <p>
 * A spatial environment Code.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "USMTFEnvironmentCategoryCodeType"
})
public class SpatialEnvironmentCode {

    /**
     * USMTFEnvironmentCategoryCodeType
     * <p>
     * A data type for a USMTF-defined force-threat designator code used in combination with threat codes.
     * 
     */
    @JsonProperty("USMTFEnvironmentCategoryCodeType")
    @Valid
    private niem.domains.maritime._3_2.USMTFEnvironmentCategoryCodeType USMTFEnvironmentCategoryCodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#SpatialEnvironmentCode\",\"title\":\"SpatialEnvironmentCode\",\"type\":\"object\",\"description\":\"A spatial environment Code.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.feature.observation._2_0.SpatialEnvironmentCode\",\"properties\":{\"USMTFEnvironmentCategoryCodeType\":{\"$ref\":\"../../../../niem/domains/maritime/3.2/USMTFEnvironmentCategoryCodeType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * USMTFEnvironmentCategoryCodeType
     * <p>
     * A data type for a USMTF-defined force-threat designator code used in combination with threat codes.
     * 
     * @return
     *     The USMTFEnvironmentCategoryCodeType
     */
    @JsonProperty("USMTFEnvironmentCategoryCodeType")
    public niem.domains.maritime._3_2.USMTFEnvironmentCategoryCodeType getUSMTFEnvironmentCategoryCodeType() {
        return USMTFEnvironmentCategoryCodeType;
    }

    /**
     * USMTFEnvironmentCategoryCodeType
     * <p>
     * A data type for a USMTF-defined force-threat designator code used in combination with threat codes.
     * 
     * @param USMTFEnvironmentCategoryCodeType
     *     The USMTFEnvironmentCategoryCodeType
     */
    @JsonProperty("USMTFEnvironmentCategoryCodeType")
    public void setUSMTFEnvironmentCategoryCodeType(niem.domains.maritime._3_2.USMTFEnvironmentCategoryCodeType USMTFEnvironmentCategoryCodeType) {
        this.USMTFEnvironmentCategoryCodeType = USMTFEnvironmentCategoryCodeType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("USMTFEnvironmentCategoryCodeType".equals(name)) {
            if (value instanceof niem.domains.maritime._3_2.USMTFEnvironmentCategoryCodeType) {
                setUSMTFEnvironmentCategoryCodeType(((niem.domains.maritime._3_2.USMTFEnvironmentCategoryCodeType) value));
            } else {
                throw new IllegalArgumentException(("property \"USMTFEnvironmentCategoryCodeType\" is of type \"niem.domains.maritime._3_2.USMTFEnvironmentCategoryCodeType\", but got "+ value.getClass().toString()));
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
        if ("USMTFEnvironmentCategoryCodeType".equals(name)) {
            return getUSMTFEnvironmentCategoryCodeType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, SpatialEnvironmentCode.NOT_FOUND_VALUE);
        if (SpatialEnvironmentCode.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(USMTFEnvironmentCategoryCodeType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof SpatialEnvironmentCode) == false) {
            return false;
        }
        SpatialEnvironmentCode rhs = ((SpatialEnvironmentCode) other);
        return new EqualsBuilder().append(USMTFEnvironmentCategoryCodeType, rhs.USMTFEnvironmentCategoryCodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/maritime/3.2/#USMTFEnvironmentCategoryCodeType\",\"title\":\"USMTFEnvironmentCategoryCodeType\",\"type\":\"object\",\"description\":\"A data type for a USMTF-defined force-threat designator code used in combination with threat codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.maritime._3_2.USMTFEnvironmentCategoryCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/domains/maritime/3.2/USMTFEnvironmentCategoryCodeType.json"};
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
    public static SpatialEnvironmentCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, SpatialEnvironmentCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
