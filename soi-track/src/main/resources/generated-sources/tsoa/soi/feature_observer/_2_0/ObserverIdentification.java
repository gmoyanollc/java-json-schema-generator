
package tsoa.soi.feature_observer._2_0;

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
 * ObserverIdentification
 * <p>
 * An observer identification described by its properties.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "SystemIdentification"
})
public class ObserverIdentification {

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
     * SystemIdentification
     * <p>
     * A number or code identification assigned by a system to uniquely identify a person or object.
     * 
     */
    @JsonProperty("SystemIdentification")
    @Valid
    private niem.domains.intelligence._3_2.SystemIdentification SystemIdentification;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observer/2.0/#ObserverIdentification\",\"title\":\"ObserverIdentification\",\"type\":\"object\",\"description\":\"An observer identification described by its properties.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.feature_observer._2_0.ObserverIdentification\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"SystemIdentification\":{\"$ref\":\"../../../../niem/domains/intelligence/3.2/SystemIdentification.json\"}},\"additionalProperties\":false}", ""};
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
     * SystemIdentification
     * <p>
     * A number or code identification assigned by a system to uniquely identify a person or object.
     * 
     * @return
     *     The SystemIdentification
     */
    @JsonProperty("SystemIdentification")
    public niem.domains.intelligence._3_2.SystemIdentification getSystemIdentification() {
        return SystemIdentification;
    }

    /**
     * SystemIdentification
     * <p>
     * A number or code identification assigned by a system to uniquely identify a person or object.
     * 
     * @param SystemIdentification
     *     The SystemIdentification
     */
    @JsonProperty("SystemIdentification")
    public void setSystemIdentification(niem.domains.intelligence._3_2.SystemIdentification SystemIdentification) {
        this.SystemIdentification = SystemIdentification;
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
            if ("SystemIdentification".equals(name)) {
                if (value instanceof niem.domains.intelligence._3_2.SystemIdentification) {
                    setSystemIdentification(((niem.domains.intelligence._3_2.SystemIdentification) value));
                } else {
                    throw new IllegalArgumentException(("property \"SystemIdentification\" is of type \"niem.domains.intelligence._3_2.SystemIdentification\", but got "+ value.getClass().toString()));
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
            if ("SystemIdentification".equals(name)) {
                return getSystemIdentification();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ObserverIdentification.NOT_FOUND_VALUE);
        if (ObserverIdentification.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(SystemIdentification).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObserverIdentification) == false) {
            return false;
        }
        ObserverIdentification rhs = ((ObserverIdentification) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(SystemIdentification, rhs.SystemIdentification).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationID\",\"title\":\"IdentificationID\",\"type\":\"array\",\"description\":\"An identifier.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationJurisdiction\",\"title\":\"IdentificationJurisdiction\",\"type\":\"array\",\"description\":\"An area, region, or unit where a unique identification is issued.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"LocationCountry\":{\"LocationCountryName\":{\"$ref\":\"LocationCountryName.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemName\",\"title\":\"SystemName\",\"type\":\"array\",\"description\":\"A name of the kind or the source of a system identifier.\",\"version\":\"0.4.5\",\"items\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#SystemIdentificationType\",\"title\":\"SystemIdentificationType\",\"type\":\"object\",\"description\":\"A data type for a number or code assigned to a system to uniquely identify the system.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.SystemIdentificationType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"IdentificationID\":{\"$ref\":\"IdentificationID.json\"},\"IdentificationJurisdiction\":{\"$ref\":\"IdentificationJurisdiction.json\"},\"IdentificationAugmentationPoint\":{\"ShortName\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ShortName.json\"}},\"SystemName\":{\"$ref\":\"SystemName.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/intelligence/3.2/#SystemIdentification\",\"title\":\"SystemIdentification\",\"type\":\"object\",\"description\":\"A number or code identification assigned by a system to uniquely identify a person or object.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.intelligence._3_2.SystemIdentification\",\"properties\":{\"SystemIdentificationType\":{\"$ref\":\"../../../../niem/niem-core/3.0/SystemIdentificationType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName\",\"title\":\"LocationCountryName\",\"type\":\"object\",\"description\":\"A name of a country, territory, dependency, or other such geopolitical subdivision of a location.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationCountryName\",\"properties\":{\"TextType\":{\"$ref\":\"TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"IdentificationID.json", "../../../tsoa/soi/tsoa-track/2.0/ShortName.json", "IdentificationJurisdiction.json", "SystemName.json", "../../../../niem/niem-core/3.0/TextType.json", "../../../../niem/niem-core/3.0/SystemIdentificationType.json", "../../../../niem/domains/intelligence/3.2/SystemIdentification.json", "LocationCountryName.json", "../../../niem/structures/3.0/ObjectType.json"};
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
    public static ObserverIdentification fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObserverIdentification.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
