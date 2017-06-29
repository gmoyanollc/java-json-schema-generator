
package niem.domains.militaryOperations._3_2;

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
 * ObservedObjectLocation
 * <p>
 * A location of an observed object.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObservedObject2DGeospatialCoordinate",
    "AltitudeMeasure",
    "ElevationMeasure",
    "ObservedObjectLocationAugmentationPoint"
})
public class ObservedObjectLocation {

    /**
     * ObservedObject2DGeospatialCoordinate
     * <p>
     * A latitude and longitude of an observed object.
     * 
     */
    @JsonProperty("ObservedObject2DGeospatialCoordinate")
    @Valid
    private List<Object> ObservedObject2DGeospatialCoordinate = new ArrayList<Object>();
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
    @JsonProperty("ObservedObjectLocationAugmentationPoint")
    private Object ObservedObjectLocationAugmentationPoint;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservedObjectLocation\",\"title\":\"ObservedObjectLocation\",\"type\":\"object\",\"description\":\"A location of an observed object.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.ObservedObjectLocation\",\"properties\":{\"ObservedObject2DGeospatialCoordinate\":{\"$ref\":\"ObservedObject2DGeospatialCoordinate.json\"},\"AltitudeMeasure\":{\"$ref\":\"AltitudeMeasure.json\"},\"ElevationMeasure\":{\"$ref\":\"ElevationMeasure.json\"},\"ObservedObjectLocationAugmentationPoint\":{\"ObservedRelativeLocation\":{\"$ref\":\"../../../../tsoa/soi/feature-observation/2.0/ObservedRelativeLocation.json\"}}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * ObservedObject2DGeospatialCoordinate
     * <p>
     * A latitude and longitude of an observed object.
     * 
     * @return
     *     The ObservedObject2DGeospatialCoordinate
     */
    @JsonProperty("ObservedObject2DGeospatialCoordinate")
    public List<Object> getObservedObject2DGeospatialCoordinate() {
        return ObservedObject2DGeospatialCoordinate;
    }

    /**
     * ObservedObject2DGeospatialCoordinate
     * <p>
     * A latitude and longitude of an observed object.
     * 
     * @param ObservedObject2DGeospatialCoordinate
     *     The ObservedObject2DGeospatialCoordinate
     */
    @JsonProperty("ObservedObject2DGeospatialCoordinate")
    public void setObservedObject2DGeospatialCoordinate(List<Object> ObservedObject2DGeospatialCoordinate) {
        this.ObservedObject2DGeospatialCoordinate = ObservedObject2DGeospatialCoordinate;
    }

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
     * 
     * @return
     *     The ObservedObjectLocationAugmentationPoint
     */
    @JsonProperty("ObservedObjectLocationAugmentationPoint")
    public Object getObservedObjectLocationAugmentationPoint() {
        return ObservedObjectLocationAugmentationPoint;
    }

    /**
     * 
     * @param ObservedObjectLocationAugmentationPoint
     *     The ObservedObjectLocationAugmentationPoint
     */
    @JsonProperty("ObservedObjectLocationAugmentationPoint")
    public void setObservedObjectLocationAugmentationPoint(Object ObservedObjectLocationAugmentationPoint) {
        this.ObservedObjectLocationAugmentationPoint = ObservedObjectLocationAugmentationPoint;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("ObservedObject2DGeospatialCoordinate".equals(name)) {
            if (value instanceof List) {
                setObservedObject2DGeospatialCoordinate(((List<Object> ) value));
            } else {
                throw new IllegalArgumentException(("property \"ObservedObject2DGeospatialCoordinate\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
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
                    if ("ObservedObjectLocationAugmentationPoint".equals(name)) {
                        if (value instanceof Object) {
                            setObservedObjectLocationAugmentationPoint(((Object) value));
                        } else {
                            throw new IllegalArgumentException(("property \"ObservedObjectLocationAugmentationPoint\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
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
        if ("ObservedObject2DGeospatialCoordinate".equals(name)) {
            return getObservedObject2DGeospatialCoordinate();
        } else {
            if ("AltitudeMeasure".equals(name)) {
                return getAltitudeMeasure();
            } else {
                if ("ElevationMeasure".equals(name)) {
                    return getElevationMeasure();
                } else {
                    if ("ObservedObjectLocationAugmentationPoint".equals(name)) {
                        return getObservedObjectLocationAugmentationPoint();
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
        Object value = declaredPropertyOrNotFound(name, ObservedObjectLocation.NOT_FOUND_VALUE);
        if (ObservedObjectLocation.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObservedObject2DGeospatialCoordinate).append(AltitudeMeasure).append(ElevationMeasure).append(ObservedObjectLocationAugmentationPoint).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObservedObjectLocation) == false) {
            return false;
        }
        ObservedObjectLocation rhs = ((ObservedObjectLocation) other);
        return new EqualsBuilder().append(ObservedObject2DGeospatialCoordinate, rhs.ObservedObject2DGeospatialCoordinate).append(AltitudeMeasure, rhs.AltitudeMeasure).append(ElevationMeasure, rhs.ElevationMeasure).append(ObservedObjectLocationAugmentationPoint, rhs.ObservedObjectLocationAugmentationPoint).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AltitudeMeasure\",\"title\":\"AltitudeMeasure\",\"type\":\"object\",\"description\":\"A vertical elevation of an object above a surface (as sea level or land) of a planet or natural satellite.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.AltitudeMeasure\",\"properties\":{\"LocationHeightMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LongitudeDegreeValue\",\"title\":\"LongitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a longitude. The value comes from a restricted range between -180 (inclusive) and +180 (exclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LongitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservedObject2DGeospatialCoordinate\",\"title\":\"ObservedObject2DGeospatialCoordinate\",\"type\":\"array\",\"description\":\"A latitude and longitude of an observed object.\",\"version\":\"0.4.4\",\"items\":{\"Location2DGeospatialCoordinateType\":{\"$ref\":\"../../../../niem/niem-core/3.0/Location2DGeospatialCoordinateType.json\"}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightMeasureType\",\"title\":\"LocationHeightMeasureType\",\"type\":\"object\",\"description\":\"A data type for a measurement of the height of a location relative to a reference point.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightMeasureType\",\"properties\":{\"LocationHeightVerticalDatum\":{\"LocationHeightVerticalDatumCode\":{\"$ref\":\"LocationHeightVerticalDatumCode.json\"},\"LocationHeightVerticalDatumText\":{\"$ref\":\"LocationHeightVerticalDatumText.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observation/2.0/#ObservedRelativeLocation\",\"title\":\"ObservedRelativeLocation\",\"type\":\"object\",\"description\":\"A relative location measurement.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa.soi.feature.observation._2_0.ObservedRelativeLocation\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLatitude\",\"title\":\"GeographicCoordinateLatitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Equator.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.GeographicCoordinateLatitude\",\"properties\":{\"LatitudeDegreeValue\":{\"$ref\":\"LatitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumCode\",\"title\":\"LocationHeightVerticalDatumCode\",\"type\":\"object\",\"description\":\"A code that describes the relationship of a two- or three-dimensional coordinate system to the shape of the Earth.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightVerticalDatumCode\",\"properties\":{\"VerticalDatumCodeType\":{\"$ref\":\"../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#GeographicCoordinateLongitude\",\"title\":\"GeographicCoordinateLongitude\",\"type\":\"object\",\"description\":\"A measurement of the angular distance between a point on the Earth and the Prime Meridian.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.GeographicCoordinateLongitude\",\"properties\":{\"LongitudeDegreeValue\":{\"$ref\":\"LongitudeDegreeValue.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#Location2DGeospatialCoordinateType\",\"title\":\"Location2DGeospatialCoordinateType\",\"type\":\"object\",\"description\":\"A data type for a location identified by latitude and longitude.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.Location2DGeospatialCoordinateType\",\"properties\":{\"GeographicCoordinateLatitude\":{\"$ref\":\"GeographicCoordinateLatitude.json\"},\"GeographicCoordinateLongitude\":{\"$ref\":\"GeographicCoordinateLongitude.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ElevationMeasure\",\"title\":\"ElevationMeasure\",\"type\":\"object\",\"description\":\"A height above a fixed reference point, most commonly a reference geoid, a mathematical model of the Earth's sea level as an equipotential gravitational surface.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.ElevationMeasure\",\"properties\":{\"LocationHeightMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/LocationHeightMeasureType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationHeightVerticalDatumText\",\"title\":\"LocationHeightVerticalDatumText\",\"type\":\"object\",\"description\":\"A vertical datum system used to designate the reference point for a height measurement.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LocationHeightVerticalDatumText\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#VerticalDatumCodeType\",\"title\":\"VerticalDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for vertical datum codes.\",\"version\":\"0.4.4\",\"javaType\":\"niem.codes.nga.datum._3_0.VerticalDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.LatitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"AltitudeMeasure.json", "LongitudeDegreeValue.json", "ObservedObject2DGeospatialCoordinate.json", "../../../../niem/niem-core/3.0/LocationHeightMeasureType.json", "../../../../tsoa/soi/feature-observation/2.0/ObservedRelativeLocation.json", "GeographicCoordinateLatitude.json", "LocationHeightVerticalDatumCode.json", "GeographicCoordinateLongitude.json", "../../../../niem/niem-core/3.0/Location2DGeospatialCoordinateType.json", "ElevationMeasure.json", "LocationHeightVerticalDatumText.json", "../../../niem/codes/nga_datum/3.0/VerticalDatumCodeType.json", "LatitudeDegreeValue.json"};
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
    public static ObservedObjectLocation fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservedObjectLocation.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
