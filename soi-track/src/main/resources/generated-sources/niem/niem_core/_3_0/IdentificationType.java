
package niem.niem_core._3_0;

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
 * IdentificationType
 * <p>
 * A data type for a representation of an identity.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "IdentificationID",
    "IdentificationJurisdiction",
    "IdentificationAugmentationPoint"
})
public class IdentificationType {

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
     * IdentificationID
     * <p>
     * An identifier.
     * 
     */
    @JsonProperty("IdentificationID")
    @Size(max = 16)
    @Valid
    private List<String> IdentificationID = new ArrayList<String>();
    /**
     * IdentificationJurisdiction
     * <p>
     * An area, region, or unit where a unique identification is issued.
     * 
     */
    @JsonProperty("IdentificationJurisdiction")
    @Size(max = 16)
    @Valid
    private List<Object> IdentificationJurisdiction = new ArrayList<Object>();
    @JsonProperty("IdentificationAugmentationPoint")
    private Object IdentificationAugmentationPoint;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationType\",\"title\":\"IdentificationType\",\"type\":\"object\",\"description\":\"A data type for a representation of an identity.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.IdentificationType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"IdentificationID\":{\"$ref\":\"IdentificationID.json\"},\"IdentificationJurisdiction\":{\"$ref\":\"IdentificationJurisdiction.json\"},\"IdentificationAugmentationPoint\":{\"ShortName\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ShortName.json\"}}},\"additionalProperties\":false}", ""};
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
     * IdentificationID
     * <p>
     * An identifier.
     * 
     * @return
     *     The IdentificationID
     */
    @JsonProperty("IdentificationID")
    public List<String> getIdentificationID() {
        return IdentificationID;
    }

    /**
     * IdentificationID
     * <p>
     * An identifier.
     * 
     * @param IdentificationID
     *     The IdentificationID
     */
    @JsonProperty("IdentificationID")
    public void setIdentificationID(List<String> IdentificationID) {
        this.IdentificationID = IdentificationID;
    }

    /**
     * IdentificationJurisdiction
     * <p>
     * An area, region, or unit where a unique identification is issued.
     * 
     * @return
     *     The IdentificationJurisdiction
     */
    @JsonProperty("IdentificationJurisdiction")
    public List<Object> getIdentificationJurisdiction() {
        return IdentificationJurisdiction;
    }

    /**
     * IdentificationJurisdiction
     * <p>
     * An area, region, or unit where a unique identification is issued.
     * 
     * @param IdentificationJurisdiction
     *     The IdentificationJurisdiction
     */
    @JsonProperty("IdentificationJurisdiction")
    public void setIdentificationJurisdiction(List<Object> IdentificationJurisdiction) {
        this.IdentificationJurisdiction = IdentificationJurisdiction;
    }

    /**
     * 
     * @return
     *     The IdentificationAugmentationPoint
     */
    @JsonProperty("IdentificationAugmentationPoint")
    public Object getIdentificationAugmentationPoint() {
        return IdentificationAugmentationPoint;
    }

    /**
     * 
     * @param IdentificationAugmentationPoint
     *     The IdentificationAugmentationPoint
     */
    @JsonProperty("IdentificationAugmentationPoint")
    public void setIdentificationAugmentationPoint(Object IdentificationAugmentationPoint) {
        this.IdentificationAugmentationPoint = IdentificationAugmentationPoint;
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
            if ("IdentificationID".equals(name)) {
                if (value instanceof List) {
                    setIdentificationID(((List<String> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"IdentificationID\" is of type \"java.util.List<java.lang.String>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("IdentificationJurisdiction".equals(name)) {
                    if (value instanceof List) {
                        setIdentificationJurisdiction(((List<Object> ) value));
                    } else {
                        throw new IllegalArgumentException(("property \"IdentificationJurisdiction\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
                    }
                    return true;
                } else {
                    if ("IdentificationAugmentationPoint".equals(name)) {
                        if (value instanceof Object) {
                            setIdentificationAugmentationPoint(((Object) value));
                        } else {
                            throw new IllegalArgumentException(("property \"IdentificationAugmentationPoint\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                        }
                        return true;
                    } else {
                        return false;
                    }
                }
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
            if ("IdentificationID".equals(name)) {
                return getIdentificationID();
            } else {
                if ("IdentificationJurisdiction".equals(name)) {
                    return getIdentificationJurisdiction();
                } else {
                    if ("IdentificationAugmentationPoint".equals(name)) {
                        return getIdentificationAugmentationPoint();
                    } else {
                        return notFoundValue;
                    }
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, IdentificationType.NOT_FOUND_VALUE);
        if (IdentificationType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(IdentificationID).append(IdentificationJurisdiction).append(IdentificationAugmentationPoint).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof IdentificationType) == false) {
            return false;
        }
        IdentificationType rhs = ((IdentificationType) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(IdentificationID, rhs.IdentificationID).append(IdentificationJurisdiction, rhs.IdentificationJurisdiction).append(IdentificationAugmentationPoint, rhs.IdentificationAugmentationPoint).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationID\",\"title\":\"IdentificationID\",\"type\":\"array\",\"description\":\"An identifier.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationJurisdiction\",\"title\":\"IdentificationJurisdiction\",\"type\":\"array\",\"description\":\"An area, region, or unit where a unique identification is issued.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"LocationCountry\":{\"LocationCountryName\":{\"$ref\":\"LocationCountryName.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName\",\"title\":\"LocationCountryName\",\"type\":\"object\",\"description\":\"A name of a country, territory, dependency, or other such geopolitical subdivision of a location.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationCountryName\",\"properties\":{\"TextType\":{\"$ref\":\"TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"IdentificationID.json", "../../../tsoa/soi/tsoa-track/2.0/ShortName.json", "IdentificationJurisdiction.json", "../../../../niem/niem-core/3.0/TextType.json", "LocationCountryName.json", "../../../niem/structures/3.0/ObjectType.json"};
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
    public static IdentificationType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, IdentificationType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
