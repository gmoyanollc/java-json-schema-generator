
package tsoa.soi.feature.observation._2_0;

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
 * OriginLocation
 * <p>
 * An origin location measurement.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AltitudeMeasure",
    "ElevationMeasure",
    "Location2DGeospatialCoordinate"
})
public class OriginLocation {

    /**
     * AltitudeMeasure
     * <p>
     * A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.
     * 
     */
    @JsonProperty("AltitudeMeasure")
    @Valid
    private niem.domains.militaryOperations._3_2.AltitudeMeasure AltitudeMeasure;
    /**
     * ElevationMeasure
     * <p>
     * A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.
     * 
     */
    @JsonProperty("ElevationMeasure")
    @Valid
    private niem.domains.militaryOperations._3_2.ElevationMeasure ElevationMeasure;
    /**
     * Location2DGeospatialCoordinate
     * <p>
     * A location identified by a latitude and longitude.
     * 
     */
    @JsonProperty("Location2DGeospatialCoordinate")
    @Valid
    private niem.niem.core._3_0.Location2DGeospatialCoordinate Location2DGeospatialCoordinate;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#OriginLocation\",\"title\":\"OriginLocation\",\"type\":\"object\",\"description\":\"An origin location measurement.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.feature.observation._2_0.OriginLocation\",\"properties\":{\"AltitudeMeasure\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/AltitudeMeasure.json\"},\"ElevationMeasure\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/ElevationMeasure.json\"},\"Location2DGeospatialCoordinate\":{\"$ref\":\"../../../../niem/niem-core/3.0/Location2DGeospatialCoordinate.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * AltitudeMeasure
     * <p>
     * A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.
     * 
     * @return
     *     The AltitudeMeasure
     */
    @JsonProperty("AltitudeMeasure")
    public niem.domains.militaryOperations._3_2.AltitudeMeasure getAltitudeMeasure() {
        return AltitudeMeasure;
    }

    /**
     * AltitudeMeasure
     * <p>
     * A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.
     * 
     * @param AltitudeMeasure
     *     The AltitudeMeasure
     */
    @JsonProperty("AltitudeMeasure")
    public void setAltitudeMeasure(niem.domains.militaryOperations._3_2.AltitudeMeasure AltitudeMeasure) {
        this.AltitudeMeasure = AltitudeMeasure;
    }

    /**
     * ElevationMeasure
     * <p>
     * A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.
     * 
     * @return
     *     The ElevationMeasure
     */
    @JsonProperty("ElevationMeasure")
    public niem.domains.militaryOperations._3_2.ElevationMeasure getElevationMeasure() {
        return ElevationMeasure;
    }

    /**
     * ElevationMeasure
     * <p>
     * A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.
     * 
     * @param ElevationMeasure
     *     The ElevationMeasure
     */
    @JsonProperty("ElevationMeasure")
    public void setElevationMeasure(niem.domains.militaryOperations._3_2.ElevationMeasure ElevationMeasure) {
        this.ElevationMeasure = ElevationMeasure;
    }

    /**
     * Location2DGeospatialCoordinate
     * <p>
     * A location identified by a latitude and longitude.
     * 
     * @return
     *     The Location2DGeospatialCoordinate
     */
    @JsonProperty("Location2DGeospatialCoordinate")
    public niem.niem.core._3_0.Location2DGeospatialCoordinate getLocation2DGeospatialCoordinate() {
        return Location2DGeospatialCoordinate;
    }

    /**
     * Location2DGeospatialCoordinate
     * <p>
     * A location identified by a latitude and longitude.
     * 
     * @param Location2DGeospatialCoordinate
     *     The Location2DGeospatialCoordinate
     */
    @JsonProperty("Location2DGeospatialCoordinate")
    public void setLocation2DGeospatialCoordinate(niem.niem.core._3_0.Location2DGeospatialCoordinate Location2DGeospatialCoordinate) {
        this.Location2DGeospatialCoordinate = Location2DGeospatialCoordinate;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("AltitudeMeasure".equals(name)) {
            if (value instanceof niem.domains.militaryOperations._3_2.AltitudeMeasure) {
                setAltitudeMeasure(((niem.domains.militaryOperations._3_2.AltitudeMeasure) value));
            } else {
                throw new IllegalArgumentException(("property \"AltitudeMeasure\" is of type \"niem.domains.militaryOperations._3_2.AltitudeMeasure\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("ElevationMeasure".equals(name)) {
                if (value instanceof niem.domains.militaryOperations._3_2.ElevationMeasure) {
                    setElevationMeasure(((niem.domains.militaryOperations._3_2.ElevationMeasure) value));
                } else {
                    throw new IllegalArgumentException(("property \"ElevationMeasure\" is of type \"niem.domains.militaryOperations._3_2.ElevationMeasure\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("Location2DGeospatialCoordinate".equals(name)) {
                    if (value instanceof niem.niem.core._3_0.Location2DGeospatialCoordinate) {
                        setLocation2DGeospatialCoordinate(((niem.niem.core._3_0.Location2DGeospatialCoordinate) value));
                    } else {
                        throw new IllegalArgumentException(("property \"Location2DGeospatialCoordinate\" is of type \"niem.niem.core._3_0.Location2DGeospatialCoordinate\", but got "+ value.getClass().toString()));
                    }
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("AltitudeMeasure".equals(name)) {
            return getAltitudeMeasure();
        } else {
            if ("ElevationMeasure".equals(name)) {
                return getElevationMeasure();
            } else {
                if ("Location2DGeospatialCoordinate".equals(name)) {
                    return getLocation2DGeospatialCoordinate();
                } else {
                    return notFoundValue;
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, OriginLocation.NOT_FOUND_VALUE);
        if (OriginLocation.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AltitudeMeasure).append(ElevationMeasure).append(Location2DGeospatialCoordinate).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof OriginLocation) == false) {
            return false;
        }
        OriginLocation rhs = ((OriginLocation) other);
        return new EqualsBuilder().append(AltitudeMeasure, rhs.AltitudeMeasure).append(ElevationMeasure, rhs.ElevationMeasure).append(Location2DGeospatialCoordinate, rhs.Location2DGeospatialCoordinate).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AltitudeMeasure\",\"title\":\"AltitudeMeasure\",\"type\":\"object\",\"description\":\"A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.AltitudeMeasure\",\"properties\":{\"LocationHeightMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#Location2DGeospatialCoordinate\",\"title\":\"Location2DGeospatialCoordinate\",\"type\":\"object\",\"description\":\"A location identified by a latitude and longitude.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.Location2DGeospatialCoordinate\",\"properties\":{\"GeographicCoordinateLatitude\":{\"$ref\":\"GeographicCoordinateLatitude.json\"},\"GeographicCoordinateLongitude\":{\"$ref\":\"GeographicCoordinateLongitude.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightVerticalDatumText\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightMeasureType\",\"title\":\"LocationHeightMeasureType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the height of a location relative to a reference point.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightMeasureType\",\"properties\":{\"LocationHeightVerticalDatum\":{\"LocationHeightVerticalDatumCode\":{\"$ref\":\"LocationHeightVerticalDatumCode.json\"},\"LocationHeightVerticalDatumText\":{\"$ref\":\"LocationHeightVerticalDatumText.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LongitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem.codes.nga.datum._3_0.VerticalDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLatitude\",\"title\":\"GeographicCoordinateLatitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.GeographicCoordinateLatitude\",\"properties\":{\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LatitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLongitude\",\"title\":\"GeographicCoordinateLongitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.GeographicCoordinateLongitude\",\"properties\":{\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ElevationMeasure\",\"title\":\"ElevationMeasure\",\"type\":\"object\",\"description\":\"A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.ElevationMeasure\",\"properties\":{\"LocationHeightMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/domains/militaryOperations/3.2/AltitudeMeasure.json", "../../../../niem/niem-core/3.0/Location2DGeospatialCoordinate.json", "LocationHeightVerticalDatumText.json", "../../../../niem/niem-core/3.0/LocationHeightMeasureType.json", "LongitudeDegreeValue.json", "../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json", "LocationHeightVerticalDatumCode.json", "GeographicCoordinateLatitude.json", "LatitudeDegreeValue.json", "GeographicCoordinateLongitude.json", "../../../../niem/domains/militaryOperations/3.2/ElevationMeasure.json"};
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
    public static OriginLocation fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, OriginLocation.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
