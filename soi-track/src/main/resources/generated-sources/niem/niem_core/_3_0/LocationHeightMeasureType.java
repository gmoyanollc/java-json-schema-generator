
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
 * LocationHeightMeasureType
 * <p>
 * A data type for a measurement of the height of a location relative to a reference point.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "MeasureValue",
    "MeasureUnit",
    "LocationHeightVerticalDatum"
})
public class LocationHeightMeasureType {

    /**
     * ObjectType
     * <p>
     * 
     * 
     */
    @JsonProperty("ObjectType")
    @Valid
    private niem.structures._3_0.ObjectType ObjectType;
    @JsonProperty("MeasureValue")
    private Object MeasureValue;
    @JsonProperty("MeasureUnit")
    private Object MeasureUnit;
    @JsonProperty("LocationHeightVerticalDatum")
    private Object LocationHeightVerticalDatum;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightMeasureType\",\"title\":\"LocationHeightMeasureType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the height of a location relative to a reference point.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightMeasureType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"MeasureValue\":{\"MeasurePoint\":{\"$ref\":\"MeasurePoint.json\"}},\"MeasureUnit\":{\"AngleUnit\":{\"$ref\":\"../../../niem/domains/maritime/3.2/AngleUnit.json\"},\"LengthUnitCode\":{\"$ref\":\"LengthUnitCode.json\"}},\"LocationHeightVerticalDatum\":{\"LocationHeightVerticalDatumCode\":{\"$ref\":\"LocationHeightVerticalDatumCode.json\"},\"LocationHeightVerticalDatumText\":{\"$ref\":\"LocationHeightVerticalDatumText.json\"}}},\"additionalProperties\":false}", ""};
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
     * 
     * @return
     *     The MeasureValue
     */
    @JsonProperty("MeasureValue")
    public Object getMeasureValue() {
        return MeasureValue;
    }

    /**
     * 
     * @param MeasureValue
     *     The MeasureValue
     */
    @JsonProperty("MeasureValue")
    public void setMeasureValue(Object MeasureValue) {
        this.MeasureValue = MeasureValue;
    }

    /**
     * 
     * @return
     *     The MeasureUnit
     */
    @JsonProperty("MeasureUnit")
    public Object getMeasureUnit() {
        return MeasureUnit;
    }

    /**
     * 
     * @param MeasureUnit
     *     The MeasureUnit
     */
    @JsonProperty("MeasureUnit")
    public void setMeasureUnit(Object MeasureUnit) {
        this.MeasureUnit = MeasureUnit;
    }

    /**
     * 
     * @return
     *     The LocationHeightVerticalDatum
     */
    @JsonProperty("LocationHeightVerticalDatum")
    public Object getLocationHeightVerticalDatum() {
        return LocationHeightVerticalDatum;
    }

    /**
     * 
     * @param LocationHeightVerticalDatum
     *     The LocationHeightVerticalDatum
     */
    @JsonProperty("LocationHeightVerticalDatum")
    public void setLocationHeightVerticalDatum(Object LocationHeightVerticalDatum) {
        this.LocationHeightVerticalDatum = LocationHeightVerticalDatum;
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
            if ("MeasureValue".equals(name)) {
                if (value instanceof Object) {
                    setMeasureValue(((Object) value));
                } else {
                    throw new IllegalArgumentException(("property \"MeasureValue\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("MeasureUnit".equals(name)) {
                    if (value instanceof Object) {
                        setMeasureUnit(((Object) value));
                    } else {
                        throw new IllegalArgumentException(("property \"MeasureUnit\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                    }
                    return true;
                } else {
                    if ("LocationHeightVerticalDatum".equals(name)) {
                        if (value instanceof Object) {
                            setLocationHeightVerticalDatum(((Object) value));
                        } else {
                            throw new IllegalArgumentException(("property \"LocationHeightVerticalDatum\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
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
            if ("MeasureValue".equals(name)) {
                return getMeasureValue();
            } else {
                if ("MeasureUnit".equals(name)) {
                    return getMeasureUnit();
                } else {
                    if ("LocationHeightVerticalDatum".equals(name)) {
                        return getLocationHeightVerticalDatum();
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
        Object value = declaredPropertyOrNotFound(name, LocationHeightMeasureType.NOT_FOUND_VALUE);
        if (LocationHeightMeasureType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(MeasureValue).append(MeasureUnit).append(LocationHeightVerticalDatum).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof LocationHeightMeasureType) == false) {
            return false;
        }
        LocationHeightMeasureType rhs = ((LocationHeightMeasureType) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(MeasureValue, rhs.MeasureValue).append(MeasureUnit, rhs.MeasureUnit).append(LocationHeightVerticalDatum, rhs.LocationHeightVerticalDatum).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#MeasurePoint\",\"title\":\"MeasurePoint\",\"type\":\"object\",\"description\":\"A data concept for a measurement value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.MeasurePoint\",\"properties\":{\"MeasureValue\":{\"MeasureIntegerValue\":{\"value\":{\"type\":[\"integer\",\"null\"],\"description\":\"http://www.w3.org/TR/xmlschema-2/#decimal\",\"maximum\":2147483647,\"minimum\":-2147483648}}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LengthUnitCode\",\"title\":\"LengthUnitCode\",\"type\":\"object\",\"description\":\"A unit of measure of a length value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LengthUnitCode\",\"properties\":{\"LengthCodeType\":{\"$ref\":\"../../../niem/codes/unece_rec20/3.0/LengthCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationHeightVerticalDatumText\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/maritime/3.2/#AngleUnit\",\"title\":\"AngleUnit\",\"type\":\"object\",\"description\":\"A data concept for a unit of measure of an angle value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.maritime._3_2.AngleUnit\",\"properties\":{\"value\":{\"$ref\":\"../../../niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/unece_rec20/3.0/#LengthCodeType\",\"title\":\"LengthCodeType\",\"type\":\"object\",\"description\":\"A data type for units of measurements for a length value.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.unece_rec20._3_0.LengthCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.nga_datum._3_0.VerticalDatumCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"LocationHeightVerticalDatumCode.json", "MeasurePoint.json", "../../../niem-core/3.0/TextType.json", "LengthUnitCode.json", "LocationHeightVerticalDatumText.json", "../../../niem/domains/maritime/3.2/AngleUnit.json", "../../../niem/codes/unece_rec20/3.0/LengthCodeType.json", "../../../niem/structures/3.0/ObjectType.json", "../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json"};
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
    public static LocationHeightMeasureType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, LocationHeightMeasureType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
