
package niem.domains.cbrn._3_2;

import java.io.IOException;
import javax.annotation.Generated;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * RelativeLocationAzimuthValue
 * <p>
 * A horizontal bearing angle with respect to True North from a reference point (Origin) to an object (i.e., instrument, detector, or item) or a nuclide. Its value is the angle subtended by the projection onto the horizontal plane of a straight line from the reference point to the center of the object or nuclide, and a line extending in the forward direction from the reference point. The angle range is from "-180.0" to "+180.0" degrees. A value of zero implies the center of the object or nuclide's body is aligned directly in front of the reference point; positive values imply the object or nuclide is to the right of the reference point; negative values imply the object or nuclide is to the left of the reference point.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value",
    "unitsText",
    "id",
    "ref",
    "metadata",
    "relationshipMetadata"
})
public class RelativeLocationAzimuthValue {

    @JsonProperty("value")
    private Object value;
    @JsonProperty("unitsText")
    private Object unitsText;
    @JsonProperty("id")
    private Object id;
    @JsonProperty("ref")
    private Object ref;
    @JsonProperty("metadata")
    private Object metadata;
    @JsonProperty("relationshipMetadata")
    private Object relationshipMetadata;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#RelativeLocationAzimuthValue\",\"title\":\"RelativeLocationAzimuthValue\",\"type\":\"object\",\"description\":\"A horizontal bearing angle with respect to True North from a reference point (Origin) to an object (i.e., instrument, detector, or item) or a nuclide. Its value is the angle subtended by the projection onto the horizontal plane of a straight line from the reference point to the center of the object or nuclide, and a line extending in the forward direction from the reference point. The angle range is from \\\"-180.0\\\" to \\\"+180.0\\\" degrees. A value of zero implies the center of the object or nuclide's body is aligned directly in front of the reference point; positive values imply the object or nuclide is to the right of the reference point; negative values imply the object or nuclide is to the left of the reference point.\",\"version\":\"0.4.4\",\"javaType\":\"niem.domains.cbrn._3_2.RelativeLocationAzimuthValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"unitsText\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The value
     */
    @JsonProperty("value")
    public Object getValue() {
        return value;
    }

    /**
     * 
     * @param value
     *     The value
     */
    @JsonProperty("value")
    public void setValue(Object value) {
        this.value = value;
    }

    /**
     * 
     * @return
     *     The unitsText
     */
    @JsonProperty("unitsText")
    public Object getUnitsText() {
        return unitsText;
    }

    /**
     * 
     * @param unitsText
     *     The unitsText
     */
    @JsonProperty("unitsText")
    public void setUnitsText(Object unitsText) {
        this.unitsText = unitsText;
    }

    /**
     * 
     * @return
     *     The id
     */
    @JsonProperty("id")
    public Object getId() {
        return id;
    }

    /**
     * 
     * @param id
     *     The id
     */
    @JsonProperty("id")
    public void setId(Object id) {
        this.id = id;
    }

    /**
     * 
     * @return
     *     The ref
     */
    @JsonProperty("ref")
    public Object getRef() {
        return ref;
    }

    /**
     * 
     * @param ref
     *     The ref
     */
    @JsonProperty("ref")
    public void setRef(Object ref) {
        this.ref = ref;
    }

    /**
     * 
     * @return
     *     The metadata
     */
    @JsonProperty("metadata")
    public Object getMetadata() {
        return metadata;
    }

    /**
     * 
     * @param metadata
     *     The metadata
     */
    @JsonProperty("metadata")
    public void setMetadata(Object metadata) {
        this.metadata = metadata;
    }

    /**
     * 
     * @return
     *     The relationshipMetadata
     */
    @JsonProperty("relationshipMetadata")
    public Object getRelationshipMetadata() {
        return relationshipMetadata;
    }

    /**
     * 
     * @param relationshipMetadata
     *     The relationshipMetadata
     */
    @JsonProperty("relationshipMetadata")
    public void setRelationshipMetadata(Object relationshipMetadata) {
        this.relationshipMetadata = relationshipMetadata;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("value".equals(name)) {
            if (value instanceof Object) {
                setValue(((Object) value));
            } else {
                throw new IllegalArgumentException(("property \"value\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("unitsText".equals(name)) {
                if (value instanceof Object) {
                    setUnitsText(((Object) value));
                } else {
                    throw new IllegalArgumentException(("property \"unitsText\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("id".equals(name)) {
                    if (value instanceof Object) {
                        setId(((Object) value));
                    } else {
                        throw new IllegalArgumentException(("property \"id\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                    }
                    return true;
                } else {
                    if ("ref".equals(name)) {
                        if (value instanceof Object) {
                            setRef(((Object) value));
                        } else {
                            throw new IllegalArgumentException(("property \"ref\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                        }
                        return true;
                    } else {
                        if ("metadata".equals(name)) {
                            if (value instanceof Object) {
                                setMetadata(((Object) value));
                            } else {
                                throw new IllegalArgumentException(("property \"metadata\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                            }
                            return true;
                        } else {
                            if ("relationshipMetadata".equals(name)) {
                                if (value instanceof Object) {
                                    setRelationshipMetadata(((Object) value));
                                } else {
                                    throw new IllegalArgumentException(("property \"relationshipMetadata\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
                                }
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("value".equals(name)) {
            return getValue();
        } else {
            if ("unitsText".equals(name)) {
                return getUnitsText();
            } else {
                if ("id".equals(name)) {
                    return getId();
                } else {
                    if ("ref".equals(name)) {
                        return getRef();
                    } else {
                        if ("metadata".equals(name)) {
                            return getMetadata();
                        } else {
                            if ("relationshipMetadata".equals(name)) {
                                return getRelationshipMetadata();
                            } else {
                                return notFoundValue;
                            }
                        }
                    }
                }
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, RelativeLocationAzimuthValue.NOT_FOUND_VALUE);
        if (RelativeLocationAzimuthValue.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(value).append(unitsText).append(id).append(ref).append(metadata).append(relationshipMetadata).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof RelativeLocationAzimuthValue) == false) {
            return false;
        }
        RelativeLocationAzimuthValue rhs = ((RelativeLocationAzimuthValue) other);
        return new EqualsBuilder().append(value, rhs.value).append(unitsText, rhs.unitsText).append(id, rhs.id).append(ref, rhs.ref).append(metadata, rhs.metadata).append(relationshipMetadata, rhs.relationshipMetadata).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] { };
    }

    public static String[] getReferenceArray() {
        return new String[] { };
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
    public static RelativeLocationAzimuthValue fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, RelativeLocationAzimuthValue.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
