
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
 * ObservedObjectMotion
 * <p>
 * A speed and course of an observed object.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "CourseAbstract",
    "SpeedValue"
})
public class ObservedObjectMotion {

    @JsonProperty("CourseAbstract")
    private Object CourseAbstract;
    /**
     * SpeedValue
     * <p>
     * A magnitude of motion (rate of change of position) of an object.
     * 
     */
    @JsonProperty("SpeedValue")
    @Valid
    private List<Object> SpeedValue = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#ObservedObjectMotion\",\"title\":\"ObservedObjectMotion\",\"type\":\"object\",\"description\":\"A speed and course of an observed object.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.ObservedObjectMotion\",\"properties\":{\"CourseAbstract\":{\"CourseAngleDegreesMeasure\":{\"$ref\":\"CourseAngleDegreesMeasure.json\"},\"CourseAngleMeasure\":{\"$ref\":\"CourseAngleMeasure.json\"},\"CourseCode\":{\"$ref\":\"CourseCode.json\"},\"CourseValue\":{\"$ref\":\"CourseValue.json\"}},\"SpeedValue\":{\"$ref\":\"SpeedValue.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The CourseAbstract
     */
    @JsonProperty("CourseAbstract")
    public Object getCourseAbstract() {
        return CourseAbstract;
    }

    /**
     * 
     * @param CourseAbstract
     *     The CourseAbstract
     */
    @JsonProperty("CourseAbstract")
    public void setCourseAbstract(Object CourseAbstract) {
        this.CourseAbstract = CourseAbstract;
    }

    /**
     * SpeedValue
     * <p>
     * A magnitude of motion (rate of change of position) of an object.
     * 
     * @return
     *     The SpeedValue
     */
    @JsonProperty("SpeedValue")
    public List<Object> getSpeedValue() {
        return SpeedValue;
    }

    /**
     * SpeedValue
     * <p>
     * A magnitude of motion (rate of change of position) of an object.
     * 
     * @param SpeedValue
     *     The SpeedValue
     */
    @JsonProperty("SpeedValue")
    public void setSpeedValue(List<Object> SpeedValue) {
        this.SpeedValue = SpeedValue;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("CourseAbstract".equals(name)) {
            if (value instanceof Object) {
                setCourseAbstract(((Object) value));
            } else {
                throw new IllegalArgumentException(("property \"CourseAbstract\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("SpeedValue".equals(name)) {
                if (value instanceof List) {
                    setSpeedValue(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"SpeedValue\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        if ("CourseAbstract".equals(name)) {
            return getCourseAbstract();
        } else {
            if ("SpeedValue".equals(name)) {
                return getSpeedValue();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ObservedObjectMotion.NOT_FOUND_VALUE);
        if (ObservedObjectMotion.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(CourseAbstract).append(SpeedValue).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObservedObjectMotion) == false) {
            return false;
        }
        ObservedObjectMotion rhs = ((ObservedObjectMotion) other);
        return new EqualsBuilder().append(CourseAbstract, rhs.CourseAbstract).append(SpeedValue, rhs.SpeedValue).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMeasureType\",\"title\":\"AngularMeasureType\",\"type\":\"object\",\"description\":\"A data type for the measurement of an angle.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.AngularMeasureType\",\"properties\":{\"AngularDegreeValue\":{\"$ref\":\"AngularDegreeValue.json\"},\"AngularMinuteValue\":{\"$ref\":\"AngularMinuteValue.json\"},\"AngularSecondValue\":{\"$ref\":\"AngularSecondValue.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMinuteValue\",\"title\":\"AngularMinuteValue\",\"type\":\"array\",\"description\":\"A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseCode\",\"title\":\"CourseCode\",\"type\":\"object\",\"description\":\"A designator for the 16 generalized directions (for example: southeast) based on the compass rose.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.CourseCode\",\"properties\":{\"DirectionCodeType\":{\"$ref\":\"../../../../niem/niem-core/3.0/DirectionCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseAngleDegreesMeasure\",\"title\":\"CourseAngleDegreesMeasure\",\"type\":\"object\",\"description\":\"An angular distance measured in degrees of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from \\\"above\\\" the horizontal plane.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.CourseAngleDegreesMeasure\",\"properties\":{\"AngleDegreesMeasure\":{\"$ref\":\"AngleDegreesMeasure.json\"},\"DirectionDatumAbstract\":{\"DirectionDatumCode\":{\"$ref\":\"DirectionDatumCode.json\"}},\"CourseAngleDegreesMeasureAugmentationPoint\":{\"AngularMeasureDecimalValue\":{\"$ref\":\"AngularMeasureDecimalValue.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AngularMeasureDecimalValue\",\"title\":\"AngularMeasureDecimalValue\",\"type\":\"number\",\"description\":\"A decimal value for a measurement of an angle.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.AngularMeasureDecimalValue\",\"properties\":{},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#DirectionCodeType\",\"title\":\"DirectionCodeType\",\"type\":\"object\",\"description\":\"A data type for compass directions.\",\"version\":\"0.4.4\",\"javaType\":\"niem.niem.core._3_0.DirectionCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#DirectionDatumCode\",\"title\":\"DirectionDatumCode\",\"type\":\"object\",\"description\":\"A designator for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.DirectionDatumCode\",\"properties\":{\"DirectionDatumCodeType\":{\"$ref\":\"../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AngleDegreesMeasure\",\"title\":\"AngleDegreesMeasure\",\"type\":\"array\",\"description\":\"An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).\",\"version\":\"0.4.4\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/AngularMeasureType.json\"},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseValue\",\"title\":\"CourseValue\",\"type\":\"object\",\"description\":\"A direction of horizontal motion with respect to true north, measured in degrees.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.CourseValue\",\"properties\":{\"sigmaErrorValue\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#SpeedValue\",\"title\":\"SpeedValue\",\"type\":\"array\",\"description\":\"A magnitude of motion (rate of change of position) of an object.\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"speedUnitCode\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#DirectionDatumCodeType\",\"title\":\"DirectionDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.4\",\"javaType\":\"niem.codes.nga.datum._3_0.DirectionDatumCodeType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularSecondValue\",\"title\":\"AngularSecondValue\",\"type\":\"array\",\"description\":\"A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.4\",\"items\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularDegreeValue\",\"title\":\"AngularDegreeValue\",\"type\":\"array\",\"description\":\"A value that specifies a degree of an angular measure.\",\"version\":\"0.4.4\",\"items\":[{\"type\":\"number\"}],\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseAngleMeasure\",\"title\":\"CourseAngleMeasure\",\"type\":\"object\",\"description\":\"An angular distance of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from \\\"above\\\" the horizontal plane.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.militaryOperations._3_2.CourseAngleMeasure\",\"properties\":{\"AngularMeasureType\":{\"$ref\":\"../../../../niem/niem-core/3.0/AngularMeasureType.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../niem/niem-core/3.0/AngularMeasureType.json", "AngularMinuteValue.json", "CourseCode.json", "CourseAngleDegreesMeasure.json", "AngularMeasureDecimalValue.json", "../../../../niem/niem-core/3.0/DirectionCodeType.json", "DirectionDatumCode.json", "AngleDegreesMeasure.json", "CourseValue.json", "SpeedValue.json", "../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json", "AngularSecondValue.json", "AngularDegreeValue.json", "CourseAngleMeasure.json"};
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
    public static ObservedObjectMotion fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservedObjectMotion.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
