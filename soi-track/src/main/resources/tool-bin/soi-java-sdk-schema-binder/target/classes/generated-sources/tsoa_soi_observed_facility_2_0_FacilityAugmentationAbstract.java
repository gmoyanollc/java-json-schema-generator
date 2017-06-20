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
 * FacilityAugmentationAbstract
 * <p>
 * 
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "FacilityAllegianceCountryAbstract"
})
public class tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract {

    @JsonProperty("FacilityAllegianceCountryAbstract")
    private Object FacilityAllegianceCountryAbstract;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-facility/2.0/#FacilityAugmentationAbstract\",\"title\":\"FacilityAugmentationAbstract\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract\",\"properties\":{\"FacilityAllegianceCountryAbstract\":{\"FacilityAllegianceCountryCode\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/FacilityAllegianceCountryCode.json\"}}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The FacilityAllegianceCountryAbstract
     */
    @JsonProperty("FacilityAllegianceCountryAbstract")
    public Object getFacilityAllegianceCountryAbstract() {
        return FacilityAllegianceCountryAbstract;
    }

    /**
     * 
     * @param FacilityAllegianceCountryAbstract
     *     The FacilityAllegianceCountryAbstract
     */
    @JsonProperty("FacilityAllegianceCountryAbstract")
    public void setFacilityAllegianceCountryAbstract(Object FacilityAllegianceCountryAbstract) {
        this.FacilityAllegianceCountryAbstract = FacilityAllegianceCountryAbstract;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("FacilityAllegianceCountryAbstract".equals(name)) {
            if (value instanceof Object) {
                setFacilityAllegianceCountryAbstract(((Object) value));
            } else {
                throw new IllegalArgumentException(("property \"FacilityAllegianceCountryAbstract\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
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
        if ("FacilityAllegianceCountryAbstract".equals(name)) {
            return getFacilityAllegianceCountryAbstract();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract.NOT_FOUND_VALUE);
        if (tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(FacilityAllegianceCountryAbstract).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract) == false) {
            return false;
        }
        tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract rhs = ((tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract) other);
        return new EqualsBuilder().append(FacilityAllegianceCountryAbstract, rhs.FacilityAllegianceCountryAbstract).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_genc/3.0/#CountryAlpha3CodeType\",\"title\":\"CountryAlpha3CodeType\",\"type\":\"string\",\"description\":\"A data type for three-character country codes.\",\"version\":\"0.4.4\",\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#FacilityAllegianceCountryCode\",\"title\":\"FacilityAllegianceCountryCode\",\"type\":\"object\",\"description\":\"A designator for a country to which a facility owes its allegiance.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_FacilityAllegianceCountryCode\",\"properties\":{\"CountryAlpha3CodeType\":{\"$ref\":\"../../../../niem/codes/nga_genc/3.0/CountryAlpha3CodeType.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/codes/nga_genc/3.0/CountryAlpha3CodeType.json", "../../../../niem/domains/militaryOperations/3.2/FacilityAllegianceCountryCode.json"};
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
    public static tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, tsoa_soi_observed_facility_2_0_FacilityAugmentationAbstract.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
