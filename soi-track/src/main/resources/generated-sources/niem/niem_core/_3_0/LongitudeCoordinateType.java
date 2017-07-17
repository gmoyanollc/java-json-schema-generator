
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
 * LongitudeCoordinateType
 * <p>
 * A data type for a measurement of the angular distance between a point on the Earth and the Prime Meridian.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "LongitudeDegreeValue"
})
public class LongitudeCoordinateType {

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
     * LongitudeDegreeValue
     * <p>
     * A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).
     * 
     */
    @JsonProperty("LongitudeDegreeValue")
    @Valid
    private niem.niem_core._3_0.LongitudeDegreeValue LongitudeDegreeValue;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeCoordinateType\",\"title\":\"LongitudeCoordinateType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LongitudeCoordinateType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}", ""};
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
     * LongitudeDegreeValue
     * <p>
     * A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).
     * 
     * @return
     *     The LongitudeDegreeValue
     */
    @JsonProperty("LongitudeDegreeValue")
    public niem.niem_core._3_0.LongitudeDegreeValue getLongitudeDegreeValue() {
        return LongitudeDegreeValue;
    }

    /**
     * LongitudeDegreeValue
     * <p>
     * A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).
     * 
     * @param LongitudeDegreeValue
     *     The LongitudeDegreeValue
     */
    @JsonProperty("LongitudeDegreeValue")
    public void setLongitudeDegreeValue(niem.niem_core._3_0.LongitudeDegreeValue LongitudeDegreeValue) {
        this.LongitudeDegreeValue = LongitudeDegreeValue;
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
            if ("LongitudeDegreeValue".equals(name)) {
                if (value instanceof niem.niem_core._3_0.LongitudeDegreeValue) {
                    setLongitudeDegreeValue(((niem.niem_core._3_0.LongitudeDegreeValue) value));
                } else {
                    throw new IllegalArgumentException(("property \"LongitudeDegreeValue\" is of type \"niem.niem_core._3_0.LongitudeDegreeValue\", but got "+ value.getClass().toString()));
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
            if ("LongitudeDegreeValue".equals(name)) {
                return getLongitudeDegreeValue();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, LongitudeCoordinateType.NOT_FOUND_VALUE);
        if (LongitudeCoordinateType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(LongitudeDegreeValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof LongitudeCoordinateType) == false) {
            return false;
        }
        LongitudeCoordinateType rhs = ((LongitudeCoordinateType) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(LongitudeDegreeValue, rhs.LongitudeDegreeValue).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LongitudeDegreeValue\",\"properties\":{\"value\":{\"type\":[\"number\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"LongitudeDegreeValue.json", "../../../niem/structures/3.0/ObjectType.json"};
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
    public static LongitudeCoordinateType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, LongitudeCoordinateType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
