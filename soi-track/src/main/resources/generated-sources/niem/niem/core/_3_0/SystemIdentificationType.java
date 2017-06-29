
package niem.niem.core._3_0;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
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
 * SystemIdentificationType
 * <p>
 * A data type for a number or code assigned to a system to uniquely identify the system.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "IdentificationType",
    "SystemName"
})
public class SystemIdentificationType {

    /**
     * IdentificationType
     * <p>
     * A data type for a representation of an identity.
     * 
     */
    @JsonProperty("IdentificationType")
    @Valid
    private niem.niem.core._3_0.IdentificationType IdentificationType;
    /**
     * SystemName
     * <p>
     * A name of the kind or the source of a system identifier.
     * 
     */
    @JsonProperty("SystemName")
    @Valid
    private List<Object> SystemName = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemIdentificationType\",\"title\":\"SystemIdentificationType\",\"type\":\"object\",\"description\":\"A data type for a number or code assigned to a system to uniquely identify the system.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.SystemIdentificationType\",\"properties\":{\"IdentificationType\":{\"$ref\":\"IdentificationType.json\"},\"SystemName\":{\"$ref\":\"SystemName.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * IdentificationType
     * <p>
     * A data type for a representation of an identity.
     * 
     * @return
     *     The IdentificationType
     */
    @JsonProperty("IdentificationType")
    public niem.niem.core._3_0.IdentificationType getIdentificationType() {
        return IdentificationType;
    }

    /**
     * IdentificationType
     * <p>
     * A data type for a representation of an identity.
     * 
     * @param IdentificationType
     *     The IdentificationType
     */
    @JsonProperty("IdentificationType")
    public void setIdentificationType(niem.niem.core._3_0.IdentificationType IdentificationType) {
        this.IdentificationType = IdentificationType;
    }

    /**
     * SystemName
     * <p>
     * A name of the kind or the source of a system identifier.
     * 
     * @return
     *     The SystemName
     */
    @JsonProperty("SystemName")
    public List<Object> getSystemName() {
        return SystemName;
    }

    /**
     * SystemName
     * <p>
     * A name of the kind or the source of a system identifier.
     * 
     * @param SystemName
     *     The SystemName
     */
    @JsonProperty("SystemName")
    public void setSystemName(List<Object> SystemName) {
        this.SystemName = SystemName;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("IdentificationType".equals(name)) {
            if (value instanceof niem.niem.core._3_0.IdentificationType) {
                setIdentificationType(((niem.niem.core._3_0.IdentificationType) value));
            } else {
                throw new IllegalArgumentException(("property \"IdentificationType\" is of type \"niem.niem.core._3_0.IdentificationType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("SystemName".equals(name)) {
                if (value instanceof List) {
                    setSystemName(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"SystemName\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        if ("IdentificationType".equals(name)) {
            return getIdentificationType();
        } else {
            if ("SystemName".equals(name)) {
                return getSystemName();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, SystemIdentificationType.NOT_FOUND_VALUE);
        if (SystemIdentificationType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(IdentificationType).append(SystemName).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof SystemIdentificationType) == false) {
            return false;
        }
        SystemIdentificationType rhs = ((SystemIdentificationType) other);
        return new EqualsBuilder().append(IdentificationType, rhs.IdentificationType).append(SystemName, rhs.SystemName).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationID\",\"title\":\"IdentificationID\",\"type\":\"array\",\"description\":\"An identifier.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"string\"}],\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemName\",\"title\":\"SystemName\",\"type\":\"array\",\"description\":\"A name of the kind or the source of a system identifier.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"type\":\"string\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationType\",\"title\":\"IdentificationType\",\"type\":\"object\",\"description\":\"A data type for a representation of an identity.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.IdentificationType\",\"properties\":{\"IdentificationID\":{\"$ref\":\"IdentificationID.json\"},\"IdentificationJurisdiction\":{\"$ref\":\"IdentificationJurisdiction.json\"},\"IdentificationAugmentationPoint\":{\"ShortName\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ShortName.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName\",\"title\":\"LocationCountryName\",\"type\":\"object\",\"description\":\"A name of a country, territory, dependency, or other such geopolitical subdivision of a location.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationCountryName\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationJurisdiction\",\"title\":\"IdentificationJurisdiction\",\"type\":\"array\",\"description\":\"An area, region, or unit where a unique identification is issued.\",\"version\":\"0.4.4\",\"items\":{\"LocationCountry\":{\"LocationCountryName\":{\"$ref\":\"LocationCountryName.json\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.tsoa.track._2_0.ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"IdentificationID.json", "SystemName.json", "../../../../niem/niem-core/3.0/TextType.json", "IdentificationType.json", "LocationCountryName.json", "IdentificationJurisdiction.json", "../../../tsoa/soi/tsoa-track/2.0/ShortName.json"};
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
    public static SystemIdentificationType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, SystemIdentificationType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
