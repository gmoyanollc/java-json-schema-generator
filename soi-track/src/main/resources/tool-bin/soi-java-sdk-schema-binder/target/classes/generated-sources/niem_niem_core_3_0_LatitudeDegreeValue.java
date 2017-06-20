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
 * LatitudeDegreeValue
 * <p>
 * A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "value",
    "id",
    "ref",
    "metadata",
    "relationshipMetadata"
})
public class niem_niem_core_3_0_LatitudeDegreeValue {

    @JsonProperty("value")
    private Object value;
    @JsonProperty("id")
    private Object id;
    @JsonProperty("ref")
    private Object ref;
    @JsonProperty("metadata")
    private Object metadata;
    @JsonProperty("relationshipMetadata")
    private Object relationshipMetadata;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LatitudeDegreeValue\",\"title\":\"LatitudeDegreeValue\",\"type\":\"object\",\"description\":\"A value that specifies the degree of a latitude. The value comes from a restricted range between -90 (inclusive) and +90 (inclusive).\",\"version\":\"0.4.4\",\"javaType\":\"niem_niem_core_3_0_LatitudeDegreeValue\",\"properties\":{\"value\":{\"value\":{\"type\":\"string\"}},\"id\":{\"value\":{\"type\":\"string\"}},\"ref\":{\"value\":{\"type\":\"string\"}},\"metadata\":{\"value\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"value\":{\"type\":\"string\"}}},\"additionalProperties\":false}", ""};
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

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("value".equals(name)) {
            return getValue();
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

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_niem_core_3_0_LatitudeDegreeValue.NOT_FOUND_VALUE);
        if (niem_niem_core_3_0_LatitudeDegreeValue.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(value).append(id).append(ref).append(metadata).append(relationshipMetadata).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_niem_core_3_0_LatitudeDegreeValue) == false) {
            return false;
        }
        niem_niem_core_3_0_LatitudeDegreeValue rhs = ((niem_niem_core_3_0_LatitudeDegreeValue) other);
        return new EqualsBuilder().append(value, rhs.value).append(id, rhs.id).append(ref, rhs.ref).append(metadata, rhs.metadata).append(relationshipMetadata, rhs.relationshipMetadata).isEquals();
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
    public static niem_niem_core_3_0_LatitudeDegreeValue fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_niem_core_3_0_LatitudeDegreeValue.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
