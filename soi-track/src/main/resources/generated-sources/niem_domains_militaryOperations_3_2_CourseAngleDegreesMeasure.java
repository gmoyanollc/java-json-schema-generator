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
 * CourseAngleDegreesMeasure
 * <p>
 * An angular distance measured in degrees of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from "above" the horizontal plane.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AngleDegreesMeasure",
    "DirectionDatumAbstract",
    "CourseAngleDegreesMeasureAugmentationPoint"
})
public class niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure {

    /**
     * AngleDegreesMeasure
     * <p>
     * An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).
     * 
     */
    @JsonProperty("AngleDegreesMeasure")
    @Valid
    private List<niem_niem_core_3_0_AngularMeasureType> AngleDegreesMeasure = new ArrayList<niem_niem_core_3_0_AngularMeasureType>();
    @JsonProperty("DirectionDatumAbstract")
    private Object DirectionDatumAbstract;
    @JsonProperty("CourseAngleDegreesMeasureAugmentationPoint")
    private Object CourseAngleDegreesMeasureAugmentationPoint;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseAngleDegreesMeasure\",\"title\":\"CourseAngleDegreesMeasure\",\"type\":\"object\",\"description\":\"An angular distance measured in degrees of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from \\\"above\\\" the horizontal plane.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure\",\"properties\":{\"AngleDegreesMeasure\":{\"$ref\":\"AngleDegreesMeasure.json\"},\"DirectionDatumAbstract\":{\"DirectionDatumCode\":{\"$ref\":\"DirectionDatumCode.json\"}},\"CourseAngleDegreesMeasureAugmentationPoint\":{\"AngularMeasureDecimalValue\":{\"$ref\":\"AngularMeasureDecimalValue.json\"}}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * AngleDegreesMeasure
     * <p>
     * An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).
     * 
     * @return
     *     The AngleDegreesMeasure
     */
    @JsonProperty("AngleDegreesMeasure")
    public List<niem_niem_core_3_0_AngularMeasureType> getAngleDegreesMeasure() {
        return AngleDegreesMeasure;
    }

    /**
     * AngleDegreesMeasure
     * <p>
     * An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).
     * 
     * @param AngleDegreesMeasure
     *     The AngleDegreesMeasure
     */
    @JsonProperty("AngleDegreesMeasure")
    public void setAngleDegreesMeasure(List<niem_niem_core_3_0_AngularMeasureType> AngleDegreesMeasure) {
        this.AngleDegreesMeasure = AngleDegreesMeasure;
    }

    /**
     * 
     * @return
     *     The DirectionDatumAbstract
     */
    @JsonProperty("DirectionDatumAbstract")
    public Object getDirectionDatumAbstract() {
        return DirectionDatumAbstract;
    }

    /**
     * 
     * @param DirectionDatumAbstract
     *     The DirectionDatumAbstract
     */
    @JsonProperty("DirectionDatumAbstract")
    public void setDirectionDatumAbstract(Object DirectionDatumAbstract) {
        this.DirectionDatumAbstract = DirectionDatumAbstract;
    }

    /**
     * 
     * @return
     *     The CourseAngleDegreesMeasureAugmentationPoint
     */
    @JsonProperty("CourseAngleDegreesMeasureAugmentationPoint")
    public Object getCourseAngleDegreesMeasureAugmentationPoint() {
        return CourseAngleDegreesMeasureAugmentationPoint;
    }

    /**
     * 
     * @param CourseAngleDegreesMeasureAugmentationPoint
     *     The CourseAngleDegreesMeasureAugmentationPoint
     */
    @JsonProperty("CourseAngleDegreesMeasureAugmentationPoint")
    public void setCourseAngleDegreesMeasureAugmentationPoint(Object CourseAngleDegreesMeasureAugmentationPoint) {
        this.CourseAngleDegreesMeasureAugmentationPoint = CourseAngleDegreesMeasureAugmentationPoint;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("AngleDegreesMeasure".equals(name)) {
            if (value instanceof List) {
                setAngleDegreesMeasure(((List<niem_niem_core_3_0_AngularMeasureType> ) value));
            } else {
                throw new IllegalArgumentException(("property \"AngleDegreesMeasure\" is of type \"java.util.List<niem_niem_core_3_0_AngularMeasureType>\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("DirectionDatumAbstract".equals(name)) {
                if (value instanceof Object) {
                    setDirectionDatumAbstract(((Object) value));
                } else {
                    throw new IllegalArgumentException(("property \"DirectionDatumAbstract\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("CourseAngleDegreesMeasureAugmentationPoint".equals(name)) {
                    if (value instanceof Object) {
                        setCourseAngleDegreesMeasureAugmentationPoint(((Object) value));
                    } else {
                        throw new IllegalArgumentException(("property \"CourseAngleDegreesMeasureAugmentationPoint\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
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
        if ("AngleDegreesMeasure".equals(name)) {
            return getAngleDegreesMeasure();
        } else {
            if ("DirectionDatumAbstract".equals(name)) {
                return getDirectionDatumAbstract();
            } else {
                if ("CourseAngleDegreesMeasureAugmentationPoint".equals(name)) {
                    return getCourseAngleDegreesMeasureAugmentationPoint();
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
        Object value = declaredPropertyOrNotFound(name, niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure.NOT_FOUND_VALUE);
        if (niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AngleDegreesMeasure).append(DirectionDatumAbstract).append(CourseAngleDegreesMeasureAugmentationPoint).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure) == false) {
            return false;
        }
        niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure rhs = ((niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure) other);
        return new EqualsBuilder().append(AngleDegreesMeasure, rhs.AngleDegreesMeasure).append(DirectionDatumAbstract, rhs.DirectionDatumAbstract).append(CourseAngleDegreesMeasureAugmentationPoint, rhs.CourseAngleDegreesMeasureAugmentationPoint).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMinuteValue\",\"title\":\"AngularMinuteValue\",\"type\":\"array\",\"description\":\"A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AngleDegreesMeasure\",\"title\":\"AngleDegreesMeasure\",\"type\":\"array\",\"description\":\"An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).\",\"version\":\"0.4.4\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/AngularMeasureType.json\"},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#DirectionDatumCode\",\"title\":\"DirectionDatumCode\",\"type\":\"object\",\"description\":\"A designator for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_DirectionDatumCode\",\"properties\":{\"DirectionDatumCodeType\":{\"$ref\":\"../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularSecondValue\",\"title\":\"AngularSecondValue\",\"type\":\"array\",\"description\":\"A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMeasureType\",\"title\":\"AngularMeasureType\",\"type\":\"object\",\"description\":\"A data type for the measurement of an angle.\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_AngularMeasureType\",\"properties\":{\"AngularDegreeValue\":{\"$ref\":\"AngularDegreeValue.json\"},\"AngularMinuteValue\":{\"$ref\":\"AngularMinuteValue.json\"},\"AngularSecondValue\":{\"$ref\":\"AngularSecondValue.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularDegreeValue\",\"title\":\"AngularDegreeValue\",\"type\":\"array\",\"description\":\"A value that specifies a degree of an angular measure.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"number\"}],\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#DirectionDatumCodeType\",\"title\":\"DirectionDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.4\",\"javaType\":\"niem_codes_nga_datum_3_0_DirectionDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AngularMeasureDecimalValue\",\"title\":\"AngularMeasureDecimalValue\",\"type\":\"number\",\"description\":\"A decimal value for a measurement of an angle.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperations_3_2_AngularMeasureDecimalValue\",\"properties\":{},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"AngularMinuteValue.json", "AngleDegreesMeasure.json", "DirectionDatumCode.json", "AngularSecondValue.json", "../../../../niem/niem-core/3.0/AngularMeasureType.json", "AngularDegreeValue.json", "../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json", "AngularMeasureDecimalValue.json"};
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
    public static niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_domains_militaryOperations_3_2_CourseAngleDegreesMeasure.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
