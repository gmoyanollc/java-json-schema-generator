
package niem.niem_core._3_0;

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
 * LatitudeCoordinateType
 * <p>
 * A data type for a measurement of the angular distance between a point on the Earth and the Equator.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "LatitudeDegreeValue"
})
public class LatitudeCoordinateType {

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
     * LatitudeDegreeValue
     * <p>
     * A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).
     * 
     */
    @JsonProperty("LatitudeDegreeValue")
    @Valid
    private niem.niem_core._3_0.LatitudeDegreeValue LatitudeDegreeValue;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeCoordinateType\",\"title\":\"LatitudeCoordinateType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LatitudeCoordinateType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", ""};
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
     * LatitudeDegreeValue
     * <p>
     * A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).
     * 
     * @return
     *     The LatitudeDegreeValue
     */
    @JsonProperty("LatitudeDegreeValue")
    public niem.niem_core._3_0.LatitudeDegreeValue getLatitudeDegreeValue() {
        return LatitudeDegreeValue;
    }

    /**
     * LatitudeDegreeValue
     * <p>
     * A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).
     * 
     * @param LatitudeDegreeValue
     *     The LatitudeDegreeValue
     */
    @JsonProperty("LatitudeDegreeValue")
    public void setLatitudeDegreeValue(niem.niem_core._3_0.LatitudeDegreeValue LatitudeDegreeValue) {
        this.LatitudeDegreeValue = LatitudeDegreeValue;
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
            if ("LatitudeDegreeValue".equals(name)) {
                if (value instanceof niem.niem_core._3_0.LatitudeDegreeValue) {
                    setLatitudeDegreeValue(((niem.niem_core._3_0.LatitudeDegreeValue) value));
                } else {
                    throw new IllegalArgumentException(("property \"LatitudeDegreeValue\" is of type \"niem.niem_core._3_0.LatitudeDegreeValue\", but got "+ value.getClass().toString()));
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
            if ("LatitudeDegreeValue".equals(name)) {
                return getLatitudeDegreeValue();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, LatitudeCoordinateType.NOT_FOUND_VALUE);
        if (LatitudeCoordinateType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(LatitudeDegreeValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof LatitudeCoordinateType) == false) {
            return false;
        }
        LatitudeCoordinateType rhs = ((LatitudeCoordinateType) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(LatitudeDegreeValue, rhs.LatitudeDegreeValue).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LatitudeDegreeValue\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"LatitudeDegreeValue.json", "../../../niem/structures/3.0/ObjectType.json"};
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
    public static LatitudeCoordinateType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, LatitudeCoordinateType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
