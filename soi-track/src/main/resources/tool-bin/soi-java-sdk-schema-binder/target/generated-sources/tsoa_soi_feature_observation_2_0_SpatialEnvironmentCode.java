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
public class tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode {

    /**
     * USMTFEnvironmentCategoryCodeType
     * <p>
     * A data type for a USMTF-defined force-threat designator code used in combination with threat codes.
     * 
     */
    @JsonProperty("USMTFEnvironmentCategoryCodeType")
    @Valid
    private niem_domains_maritime_3_2_USMTFEnvironmentCategoryCodeType USMTFEnvironmentCategoryCodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#SpatialEnvironmentCode\",\"title\":\"SpatialEnvironmentCode\",\"type\":\"object\",\"description\":\"A spatial environment Code.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode\",\"properties\":{\"USMTFEnvironmentCategoryCodeType\":{\"$ref\":\"../../../../niem/domains/maritime/3.2/USMTFEnvironmentCategoryCodeType.json\"}},\"additionalProperties\":false}", ""};
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
    public niem_domains_maritime_3_2_USMTFEnvironmentCategoryCodeType getUSMTFEnvironmentCategoryCodeType() {
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
    public void setUSMTFEnvironmentCategoryCodeType(niem_domains_maritime_3_2_USMTFEnvironmentCategoryCodeType USMTFEnvironmentCategoryCodeType) {
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
            if (value instanceof niem_domains_maritime_3_2_USMTFEnvironmentCategoryCodeType) {
                setUSMTFEnvironmentCategoryCodeType(((niem_domains_maritime_3_2_USMTFEnvironmentCategoryCodeType) value));
            } else {
                throw new IllegalArgumentException(("property \"USMTFEnvironmentCategoryCodeType\" is of type \"niem_domains_maritime_3_2_USMTFEnvironmentCategoryCodeType\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode.NOT_FOUND_VALUE);
        if (tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode) == false) {
            return false;
        }
        tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode rhs = ((tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode) other);
        return new EqualsBuilder().append(USMTFEnvironmentCategoryCodeType, rhs.USMTFEnvironmentCategoryCodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/maritime/3.2/#USMTFEnvironmentCategoryCodeType\",\"title\":\"USMTFEnvironmentCategoryCodeType\",\"type\":\"object\",\"description\":\"A data type for a USMTF-defined force-threat designator code used in combination with threat codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_maritime_3_2_USMTFEnvironmentCategoryCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
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
    public static tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, tsoa_soi_feature_observation_2_0_SpatialEnvironmentCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
