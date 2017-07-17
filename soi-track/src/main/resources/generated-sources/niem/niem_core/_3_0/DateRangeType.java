
package niem.niem_core._3_0;

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
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * DateRangeType
 * <p>
 * A data type for a range of dates.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObjectType",
    "StartDate",
    "EndDate"
})
public class DateRangeType {

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
     * StartDate
     * <p>
     * A date on which something begins.
     * 
     */
    @JsonProperty("StartDate")
    @Size(max = 16)
    @Valid
    private List<Object> StartDate = new ArrayList<Object>();
    /**
     * EndDate
     * <p>
     * An end date.
     * 
     */
    @JsonProperty("EndDate")
    @Size(max = 16)
    @Valid
    private List<Object> EndDate = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#DateRangeType\",\"title\":\"DateRangeType\",\"type\":\"object\",\"description\":\"A data type for a range of dates.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.DateRangeType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"StartDate\":{\"$ref\":\"StartDate.json\"},\"EndDate\":{\"$ref\":\"EndDate.json\"}},\"additionalProperties\":false}", ""};
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
     * StartDate
     * <p>
     * A date on which something begins.
     * 
     * @return
     *     The StartDate
     */
    @JsonProperty("StartDate")
    public List<Object> getStartDate() {
        return StartDate;
    }

    /**
     * StartDate
     * <p>
     * A date on which something begins.
     * 
     * @param StartDate
     *     The StartDate
     */
    @JsonProperty("StartDate")
    public void setStartDate(List<Object> StartDate) {
        this.StartDate = StartDate;
    }

    /**
     * EndDate
     * <p>
     * An end date.
     * 
     * @return
     *     The EndDate
     */
    @JsonProperty("EndDate")
    public List<Object> getEndDate() {
        return EndDate;
    }

    /**
     * EndDate
     * <p>
     * An end date.
     * 
     * @param EndDate
     *     The EndDate
     */
    @JsonProperty("EndDate")
    public void setEndDate(List<Object> EndDate) {
        this.EndDate = EndDate;
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
            if ("StartDate".equals(name)) {
                if (value instanceof List) {
                    setStartDate(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"StartDate\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("EndDate".equals(name)) {
                    if (value instanceof List) {
                        setEndDate(((List<Object> ) value));
                    } else {
                        throw new IllegalArgumentException(("property \"EndDate\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
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
        if ("ObjectType".equals(name)) {
            return getObjectType();
        } else {
            if ("StartDate".equals(name)) {
                return getStartDate();
            } else {
                if ("EndDate".equals(name)) {
                    return getEndDate();
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
        Object value = declaredPropertyOrNotFound(name, DateRangeType.NOT_FOUND_VALUE);
        if (DateRangeType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObjectType).append(StartDate).append(EndDate).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof DateRangeType) == false) {
            return false;
        }
        DateRangeType rhs = ((DateRangeType) other);
        return new EqualsBuilder().append(ObjectType, rhs.ObjectType).append(StartDate, rhs.StartDate).append(EndDate, rhs.EndDate).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#StartDate\",\"title\":\"StartDate\",\"type\":\"array\",\"description\":\"A date on which something begins.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"DateRepresentation\":{\"DateTime\":{\"$ref\":\"DateTime.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#DateTime\",\"title\":\"DateTime\",\"type\":\"object\",\"description\":\"A full date and time.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.DateTime\",\"properties\":{\"type\":[\"object\",\"null\"]},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EndDate\",\"title\":\"EndDate\",\"type\":\"array\",\"description\":\"An end date.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"DateRepresentation\":{\"DateTime\":{\"$ref\":\"DateTime.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"StartDate.json", "DateTime.json", "EndDate.json", "../../../niem/structures/3.0/ObjectType.json"};
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
    public static DateRangeType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, DateRangeType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
