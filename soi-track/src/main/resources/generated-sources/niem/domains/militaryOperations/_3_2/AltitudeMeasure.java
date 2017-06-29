
package niem.domains.militaryOperations._3_2;

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
 * AltitudeMeasure
 * <p>
 * A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "LocationHeightMeasureType"
})
public class AltitudeMeasure {

    /**
     * LocationHeightMeasureType
     * <p>
     * A data type for a measurement of the height of a location relative to a reference point.
     * 
     */
    @JsonProperty("LocationHeightMeasureType")
    @Valid
    private niem.niem.core._3_0.LocationHeightMeasureType LocationHeightMeasureType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AltitudeMeasure\",\"title\":\"AltitudeMeasure\",\"type\":\"object\",\"description\":\"A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.AltitudeMeasure\",\"properties\":{\"LocationHeightMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * LocationHeightMeasureType
     * <p>
     * A data type for a measurement of the height of a location relative to a reference point.
     * 
     * @return
     *     The LocationHeightMeasureType
     */
    @JsonProperty("LocationHeightMeasureType")
    public niem.niem.core._3_0.LocationHeightMeasureType getLocationHeightMeasureType() {
        return LocationHeightMeasureType;
    }

    /**
     * LocationHeightMeasureType
     * <p>
     * A data type for a measurement of the height of a location relative to a reference point.
     * 
     * @param LocationHeightMeasureType
     *     The LocationHeightMeasureType
     */
    @JsonProperty("LocationHeightMeasureType")
    public void setLocationHeightMeasureType(niem.niem.core._3_0.LocationHeightMeasureType LocationHeightMeasureType) {
        this.LocationHeightMeasureType = LocationHeightMeasureType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("LocationHeightMeasureType".equals(name)) {
            if (value instanceof niem.niem.core._3_0.LocationHeightMeasureType) {
                setLocationHeightMeasureType(((niem.niem.core._3_0.LocationHeightMeasureType) value));
            } else {
                throw new IllegalArgumentException(("property \"LocationHeightMeasureType\" is of type \"niem.niem.core._3_0.LocationHeightMeasureType\", but got "+ value.getClass().toString()));
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
        if ("LocationHeightMeasureType".equals(name)) {
            return getLocationHeightMeasureType();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, AltitudeMeasure.NOT_FOUND_VALUE);
        if (AltitudeMeasure.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(LocationHeightMeasureType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof AltitudeMeasure) == false) {
            return false;
        }
        AltitudeMeasure rhs = ((AltitudeMeasure) other);
        return new EqualsBuilder().append(LocationHeightMeasureType, rhs.LocationHeightMeasureType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightVerticalDatumText\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightMeasureType\",\"title\":\"LocationHeightMeasureType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the height of a location relative to a reference point.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightMeasureType\",\"properties\":{\"LocationHeightVerticalDatum\":{\"LocationHeightVerticalDatumCode\":{\"$ref\":\"LocationHeightVerticalDatumCode.json\"},\"LocationHeightVerticalDatumText\":{\"$ref\":\"LocationHeightVerticalDatumText.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem.codes.nga.datum._3_0.VerticalDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"LocationHeightVerticalDatumText.json", "../../../../niem/niem-core/3.0/LocationHeightMeasureType.json", "../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json", "LocationHeightVerticalDatumCode.json"};
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
    public static AltitudeMeasure fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, AltitudeMeasure.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
