
package tsoa.soi.observed_facility._2_0;

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
 * FacilityAugmentationAbstract
 * <p>
 * 
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AugmentationType",
    "FacilityAllegianceCountryAbstract"
})
public class FacilityAugmentationAbstract {

    /**
     * AugmentationType
     * <p>
     * 
     * 
     */
    @JsonProperty("AugmentationType")
    @Valid
    private niem.structures._3_0.AugmentationType AugmentationType;
    @JsonProperty("FacilityAllegianceCountryAbstract")
    private Object FacilityAllegianceCountryAbstract;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-facility/2.0/#FacilityAugmentationAbstract\",\"title\":\"FacilityAugmentationAbstract\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_facility._2_0.FacilityAugmentationAbstract\",\"properties\":{\"AugmentationType\":{\"$ref\":\"../../../../niem/structures/3.0/AugmentationType.json\"},\"FacilityAllegianceCountryAbstract\":{\"FacilityAllegianceCountryCode\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/FacilityAllegianceCountryCode.json\"}}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * AugmentationType
     * <p>
     * 
     * 
     * @return
     *     The AugmentationType
     */
    @JsonProperty("AugmentationType")
    public niem.structures._3_0.AugmentationType getAugmentationType() {
        return AugmentationType;
    }

    /**
     * AugmentationType
     * <p>
     * 
     * 
     * @param AugmentationType
     *     The AugmentationType
     */
    @JsonProperty("AugmentationType")
    public void setAugmentationType(niem.structures._3_0.AugmentationType AugmentationType) {
        this.AugmentationType = AugmentationType;
    }

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
        if ("AugmentationType".equals(name)) {
            if (value instanceof niem.structures._3_0.AugmentationType) {
                setAugmentationType(((niem.structures._3_0.AugmentationType) value));
            } else {
                throw new IllegalArgumentException(("property \"AugmentationType\" is of type \"niem.structures._3_0.AugmentationType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
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
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("AugmentationType".equals(name)) {
            return getAugmentationType();
        } else {
            if ("FacilityAllegianceCountryAbstract".equals(name)) {
                return getFacilityAllegianceCountryAbstract();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, FacilityAugmentationAbstract.NOT_FOUND_VALUE);
        if (FacilityAugmentationAbstract.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AugmentationType).append(FacilityAllegianceCountryAbstract).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof FacilityAugmentationAbstract) == false) {
            return false;
        }
        FacilityAugmentationAbstract rhs = ((FacilityAugmentationAbstract) other);
        return new EqualsBuilder().append(AugmentationType, rhs.AugmentationType).append(FacilityAllegianceCountryAbstract, rhs.FacilityAllegianceCountryAbstract).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#FacilityAllegianceCountryCode\",\"title\":\"FacilityAllegianceCountryCode\",\"type\":\"object\",\"description\":\"A designator for a country to which a facility owes its allegiance.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.FacilityAllegianceCountryCode\",\"properties\":{\"CountryAlpha3CodeType\":{\"$ref\":\"../../../../niem/codes/nga_genc/3.0/CountryAlpha3CodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_genc/3.0/#CountryAlpha3CodeType\",\"title\":\"CountryAlpha3CodeType\",\"type\":\"object\",\"description\":\"A data type for three-character country codes.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.nga_genc._3_0.CountryAlpha3CodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#AugmentationType\",\"title\":\"AugmentationType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.AugmentationType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/domains/militaryOperations/3.2/FacilityAllegianceCountryCode.json", "../../../../niem/codes/nga_genc/3.0/CountryAlpha3CodeType.json", "../../../../niem/structures/3.0/AugmentationType.json"};
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
    public static FacilityAugmentationAbstract fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, FacilityAugmentationAbstract.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
