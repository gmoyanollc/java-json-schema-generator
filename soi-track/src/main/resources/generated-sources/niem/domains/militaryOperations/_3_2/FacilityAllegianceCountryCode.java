
package niem.domains.militaryOperations._3_2;

import java.io.IOException;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * FacilityAllegianceCountryCode
 * <p>
 * A designator for a country to which a facility owes its allegiance.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "CountryAlpha3CodeType"
})
public class FacilityAllegianceCountryCode {

    /**
     * CountryAlpha3CodeType
     * <p>
     * A data type for three-character country codes.
     * 
     */
    @JsonProperty("CountryAlpha3CodeType")
    private String CountryAlpha3CodeType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#FacilityAllegianceCountryCode\",\"title\":\"FacilityAllegianceCountryCode\",\"type\":\"object\",\"description\":\"A designator for a country to which a facility owes its allegiance.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.FacilityAllegianceCountryCode\",\"properties\":{\"CountryAlpha3CodeType\":{\"$ref\":\"../../../../niem/codes/nga_genc/3.0/CountryAlpha3CodeType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * CountryAlpha3CodeType
     * <p>
     * A data type for three-character country codes.
     * 
     * @return
     *     The CountryAlpha3CodeType
     */
    @JsonProperty("CountryAlpha3CodeType")
    public String getCountryAlpha3CodeType() {
        return CountryAlpha3CodeType;
    }

    /**
     * CountryAlpha3CodeType
     * <p>
     * A data type for three-character country codes.
     * 
     * @param CountryAlpha3CodeType
     *     The CountryAlpha3CodeType
     */
    @JsonProperty("CountryAlpha3CodeType")
    public void setCountryAlpha3CodeType(String CountryAlpha3CodeType) {
        this.CountryAlpha3CodeType = CountryAlpha3CodeType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("CountryAlpha3CodeType".equals(name)) {
            if (value instanceof String) {
                setCountryAlpha3CodeType(((String) value));
            } else {
                throw new IllegalArgumentException(("property \"CountryAlpha3CodeType\" is of type \"java.lang.String\", but got "+ value.getClass().toString()));
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
        if ("CountryAlpha3CodeType".equals(name)) {
            return getCountryAlpha3CodeType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, FacilityAllegianceCountryCode.NOT_FOUND_VALUE);
        if (FacilityAllegianceCountryCode.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(CountryAlpha3CodeType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof FacilityAllegianceCountryCode) == false) {
            return false;
        }
        FacilityAllegianceCountryCode rhs = ((FacilityAllegianceCountryCode) other);
        return new EqualsBuilder().append(CountryAlpha3CodeType, rhs.CountryAlpha3CodeType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_genc/3.0/#CountryAlpha3CodeType\",\"title\":\"CountryAlpha3CodeType\",\"type\":\"string\",\"description\":\"A data type for three-character country codes.\",\"version\":\"0.4.4\",\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/codes/nga_genc/3.0/CountryAlpha3CodeType.json"};
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
    public static FacilityAllegianceCountryCode fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, FacilityAllegianceCountryCode.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
