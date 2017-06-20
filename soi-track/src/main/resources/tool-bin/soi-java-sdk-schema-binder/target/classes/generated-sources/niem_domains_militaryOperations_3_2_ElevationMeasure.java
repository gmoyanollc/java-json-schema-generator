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
 * ElevationMeasure
 * <p>
 * A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "LocationHeightMeasureType"
})
public class niem_domains_militaryOperations_3_2_ElevationMeasure {

    /**
     * LocationHeightMeasureType
     * <p>
     * A data type for a measurement of the height of a location relative to a reference point.
     * 
     */
    @JsonProperty("LocationHeightMeasureType")
    @Valid
    private niem_niem_core_3_0_LocationHeightMeasureType LocationHeightMeasureType;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ElevationMeasure\",\"title\":\"ElevationMeasure\",\"type\":\"object\",\"description\":\"A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_ElevationMeasure\",\"properties\":{\"LocationHeightMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"}},\"additionalProperties\":false}", ""};
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
    public niem_niem_core_3_0_LocationHeightMeasureType getLocationHeightMeasureType() {
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
    public void setLocationHeightMeasureType(niem_niem_core_3_0_LocationHeightMeasureType LocationHeightMeasureType) {
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
            if (value instanceof niem_niem_core_3_0_LocationHeightMeasureType) {
                setLocationHeightMeasureType(((niem_niem_core_3_0_LocationHeightMeasureType) value));
            } else {
                throw new IllegalArgumentException(("property \"LocationHeightMeasureType\" is of type \"niem_niem_core_3_0_LocationHeightMeasureType\", but got "+ value.getClass().toString()));
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
        Object value = declaredPropertyOrNotFound(name, niem_domains_militaryOperations_3_2_ElevationMeasure.NOT_FOUND_VALUE);
        if (niem_domains_militaryOperations_3_2_ElevationMeasure.NOT_FOUND_VALUE!= value) {
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
        if ((other instanceof niem_domains_militaryOperations_3_2_ElevationMeasure) == false) {
            return false;
        }
        niem_domains_militaryOperations_3_2_ElevationMeasure rhs = ((niem_domains_militaryOperations_3_2_ElevationMeasure) other);
        return new EqualsBuilder().append(LocationHeightMeasureType, rhs.LocationHeightMeasureType).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem_codes_nga_datum_3_0_VerticalDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LocationHeightVerticalDatumText\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightMeasureType\",\"title\":\"LocationHeightMeasureType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the height of a location relative to a reference point.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LocationHeightMeasureType\",\"properties\":{\"LocationHeightVerticalDatum\":{\"LocationHeightVerticalDatumCode\":{\"$ref\":\"LocationHeightVerticalDatumCode.json\"},\"LocationHeightVerticalDatumText\":{\"$ref\":\"LocationHeightVerticalDatumText.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json", "LocationHeightVerticalDatumText.json", "../../../../niem/niem-core/3.0/LocationHeightMeasureType.json", "LocationHeightVerticalDatumCode.json"};
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
    public static niem_domains_militaryOperations_3_2_ElevationMeasure fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_domains_militaryOperations_3_2_ElevationMeasure.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
