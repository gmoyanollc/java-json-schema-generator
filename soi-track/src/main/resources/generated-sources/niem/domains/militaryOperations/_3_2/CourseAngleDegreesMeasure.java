
package niem.domains.militaryOperations._3_2;

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
import niem.niem_core._3_0.AngularMeasureType;
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
    "ObjectType",
    "AngleDegreesMeasure",
    "DirectionDatumAbstract",
    "CourseAngleDegreesMeasureAugmentationPoint"
})
public class CourseAngleDegreesMeasure {

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
     * AngleDegreesMeasure
     * <p>
     * An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).
     * 
     */
    @JsonProperty("AngleDegreesMeasure")
    @Size(max = 16)
    @Valid
    private List<AngularMeasureType> AngleDegreesMeasure = new ArrayList<AngularMeasureType>();
    @JsonProperty("DirectionDatumAbstract")
    private Object DirectionDatumAbstract;
    @JsonProperty("CourseAngleDegreesMeasureAugmentationPoint")
    private Object CourseAngleDegreesMeasureAugmentationPoint;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#CourseAngleDegreesMeasure\",\"title\":\"CourseAngleDegreesMeasure\",\"type\":\"object\",\"description\":\"An angular distance measured in degrees of a direction from a chosen reference direction. The measured and reference directions are located in the horizontal plane, and the value of the angle is positive in a clockwise direction as viewed from \\\"above\\\" the horizontal plane.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.CourseAngleDegreesMeasure\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"AngleDegreesMeasure\":{\"$ref\":\"AngleDegreesMeasure.json\"},\"DirectionDatumAbstract\":{\"DirectionDatumCode\":{\"$ref\":\"DirectionDatumCode.json\"}},\"CourseAngleDegreesMeasureAugmentationPoint\":{\"AngularMeasureDecimalValue\":{\"$ref\":\"AngularMeasureDecimalValue.json\"}}},\"additionalProperties\":false}", ""};
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
     * AngleDegreesMeasure
     * <p>
     * An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).
     * 
     * @return
     *     The AngleDegreesMeasure
     */
    @JsonProperty("AngleDegreesMeasure")
    public List<AngularMeasureType> getAngleDegreesMeasure() {
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
    public void setAngleDegreesMeasure(List<AngularMeasureType> AngleDegreesMeasure) {
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
        if ("ObjectType".equals(name)) {
            if (value instanceof niem.structures._3_0.ObjectType) {
                setObjectType(((niem.structures._3_0.ObjectType) value));
            } else {
                throw new IllegalArgumentException(("property \"ObjectType\" is of type \"niem.structures._3_0.ObjectType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("AngleDegreesMeasure".equals(name)) {
                if (value instanceof List) {
                    setAngleDegreesMeasure(((List<AngularMeasureType> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"AngleDegreesMeasure\" is of type \"java.util.List<niem.niem_core._3_0.AngularMeasureType>\", but got "+ value.getClass().toString()));
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
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("ObjectType".equals(name)) {
            return getObjectType();
        } else {
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
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, CourseAngleDegreesMeasure.NOT_FOUND_VALUE);
        if (CourseAngleDegreesMeasure.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(AngleDegreesMeasure).append(DirectionDatumAbstract).append(CourseAngleDegreesMeasureAugmentationPoint).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof CourseAngleDegreesMeasure) == false) {
            return false;
        }
        CourseAngleDegreesMeasure rhs = ((CourseAngleDegreesMeasure) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(AngleDegreesMeasure, rhs.AngleDegreesMeasure).append(DirectionDatumAbstract, rhs.DirectionDatumAbstract).append(CourseAngleDegreesMeasureAugmentationPoint, rhs.CourseAngleDegreesMeasureAugmentationPoint).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AngularMeasureDecimalValue\",\"title\":\"AngularMeasureDecimalValue\",\"type\":\"object\",\"description\":\"A decimal value for a measurement of an angle.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.AngularMeasureDecimalValue\",\"properties\":{\"type\":[\"number\",\"null\"]},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#AngleDegreesMeasure\",\"title\":\"AngleDegreesMeasure\",\"type\":\"array\",\"description\":\"An angle in two dimensions measured in degrees (the angle between two half-lines terminating at the same point).\",\"version\":\"0.4.5\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/AngularMeasureType.json\"},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularDegreeValue\",\"title\":\"AngularDegreeValue\",\"type\":\"array\",\"description\":\"A value that specifies a degree of an angular measure.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"number\",\"maximum\":2147483647,\"minimum\":-2147483648},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/codes/nga_datum/3.0/#DirectionDatumCodeType\",\"title\":\"DirectionDatumCodeType\",\"type\":\"object\",\"description\":\"A data type for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.5\",\"javaType\":\"niem.codes.nga_datum._3_0.DirectionDatumCodeType\",\"properties\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMinuteValue\",\"title\":\"AngularMinuteValue\",\"type\":\"array\",\"description\":\"A value that specifies a minute of a degree. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#DirectionDatumCode\",\"title\":\"DirectionDatumCode\",\"type\":\"object\",\"description\":\"A designator for a reference direction as determined by the means by which it is established (e.g., by the direction of a geographic or magnetic pole of the Earth).\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.militaryOperations._3_2.DirectionDatumCode\",\"properties\":{\"DirectionDatumCodeType\":{\"$ref\":\"../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularSecondValue\",\"title\":\"AngularSecondValue\",\"type\":\"array\",\"description\":\"A value that specifies a second of a minute. The value comes from a restricted range of 0 (inclusive) to 60 (exclusive).\",\"version\":\"0.4.5\",\"items\":{\"undefined\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#AngularMeasureType\",\"title\":\"AngularMeasureType\",\"type\":\"object\",\"description\":\"A data type for the measurement of an angle.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.AngularMeasureType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"AngularDegreeValue\":{\"$ref\":\"AngularDegreeValue.json\"},\"AngularMinuteValue\":{\"$ref\":\"AngularMinuteValue.json\"},\"AngularSecondValue\":{\"$ref\":\"AngularSecondValue.json\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"AngularMeasureDecimalValue.json", "AngleDegreesMeasure.json", "AngularDegreeValue.json", "../../../../niem/codes/nga_datum/3.0/DirectionDatumCodeType.json", "AngularMinuteValue.json", "DirectionDatumCode.json", "../../../niem/structures/3.0/ObjectType.json", "AngularSecondValue.json", "../../../../niem/niem-core/3.0/AngularMeasureType.json"};
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
    public static CourseAngleDegreesMeasure fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, CourseAngleDegreesMeasure.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
