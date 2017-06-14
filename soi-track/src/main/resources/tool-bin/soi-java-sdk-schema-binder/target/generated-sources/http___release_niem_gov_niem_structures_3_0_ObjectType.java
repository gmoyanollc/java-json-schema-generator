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
 * ObjectType
 * <p>
 *  :-) documentation extracted from xml schema!
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "id",
    "ref",
    "metadata",
    "relationshipMetadata"
})
public class http___release_niem_gov_niem_structures_3_0_ObjectType {

    /**
     * 
     * <p>
     * 
     * 
     */
    @JsonProperty("id")
    private String id;
    /**
     * 
     * <p>
     * 
     * 
     */
    @JsonProperty("ref")
    private String ref;
    /**
     * 
     * <p>
     * 
     * 
     */
    @JsonProperty("metadata")
    private String metadata;
    /**
     * 
     * <p>
     * 
     * 
     */
    @JsonProperty("relationshipMetadata")
    private String relationshipMetadata;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\" :-) documentation extracted from xml schema!\",\"version\":\"0.4.0\",\"javaType\":\"http___release_niem_gov_niem_structures_3_0_ObjectType\",\"properties\":{\"id\":{\"id\":\"\",\"title\":\"\",\"type\":\"string\",\"description\":\"\",\"version\":\"\"},\"ref\":{\"id\":\"\",\"title\":\"\",\"type\":\"string\",\"description\":\"\",\"version\":\"\"},\"metadata\":{\"id\":\"\",\"title\":\"\",\"type\":\"string\",\"description\":\"\",\"version\":\"\"},\"relationshipMetadata\":{\"id\":\"\",\"title\":\"\",\"type\":\"string\",\"description\":\"\",\"version\":\"\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * <p>
     * 
     * 
     * @return
     *     The id
     */
    @JsonProperty("id")
    public String getId() {
        return id;
    }

    /**
     * 
     * <p>
     * 
     * 
     * @param id
     *     The id
     */
    @JsonProperty("id")
    public void setId(String id) {
        this.id = id;
    }

    /**
     * 
     * <p>
     * 
     * 
     * @return
     *     The ref
     */
    @JsonProperty("ref")
    public String getRef() {
        return ref;
    }

    /**
     * 
     * <p>
     * 
     * 
     * @param ref
     *     The ref
     */
    @JsonProperty("ref")
    public void setRef(String ref) {
        this.ref = ref;
    }

    /**
     * 
     * <p>
     * 
     * 
     * @return
     *     The metadata
     */
    @JsonProperty("metadata")
    public String getMetadata() {
        return metadata;
    }

    /**
     * 
     * <p>
     * 
     * 
     * @param metadata
     *     The metadata
     */
    @JsonProperty("metadata")
    public void setMetadata(String metadata) {
        this.metadata = metadata;
    }

    /**
     * 
     * <p>
     * 
     * 
     * @return
     *     The relationshipMetadata
     */
    @JsonProperty("relationshipMetadata")
    public String getRelationshipMetadata() {
        return relationshipMetadata;
    }

    /**
     * 
     * <p>
     * 
     * 
     * @param relationshipMetadata
     *     The relationshipMetadata
     */
    @JsonProperty("relationshipMetadata")
    public void setRelationshipMetadata(String relationshipMetadata) {
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
        if ("id".equals(name)) {
            if (value instanceof String) {
                setId(((String) value));
            } else {
                throw new IllegalArgumentException(("property \"id\" is of type \"java.lang.String\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("ref".equals(name)) {
                if (value instanceof String) {
                    setRef(((String) value));
                } else {
                    throw new IllegalArgumentException(("property \"ref\" is of type \"java.lang.String\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                if ("metadata".equals(name)) {
                    if (value instanceof String) {
                        setMetadata(((String) value));
                    } else {
                        throw new IllegalArgumentException(("property \"metadata\" is of type \"java.lang.String\", but got "+ value.getClass().toString()));
                    }
                    return true;
                } else {
                    if ("relationshipMetadata".equals(name)) {
                        if (value instanceof String) {
                            setRelationshipMetadata(((String) value));
                        } else {
                            throw new IllegalArgumentException(("property \"relationshipMetadata\" is of type \"java.lang.String\", but got "+ value.getClass().toString()));
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

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, http___release_niem_gov_niem_structures_3_0_ObjectType.NOT_FOUND_VALUE);
        if (http___release_niem_gov_niem_structures_3_0_ObjectType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(id).append(ref).append(metadata).append(relationshipMetadata).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof http___release_niem_gov_niem_structures_3_0_ObjectType) == false) {
            return false;
        }
        http___release_niem_gov_niem_structures_3_0_ObjectType rhs = ((http___release_niem_gov_niem_structures_3_0_ObjectType) other);
        return new EqualsBuilder().append(id, rhs.id).append(ref, rhs.ref).append(metadata, rhs.metadata).append(relationshipMetadata, rhs.relationshipMetadata).isEquals();
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
    public static http___release_niem_gov_niem_structures_3_0_ObjectType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, http___release_niem_gov_niem_structures_3_0_ObjectType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
