
package niem.domains.cbrn._3_2;

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
 * DistanceType
 * <p>
 * A data type for a distance measure where the units are meters (m) and the values may not be negative.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "undefined",
    "id",
    "ref",
    "metadata",
    "relationshipMetadata",
    "unitsText"
})
public class DistanceType {

    @JsonProperty("undefined")
    private Double undefined;
    @JsonProperty("id")
    @Size(max = 128)
    private String id;
    @JsonProperty("ref")
    @Size(max = 128)
    private String ref;
    @JsonProperty("metadata")
    @Valid
    private List<Object> metadata = new ArrayList<Object>();
    @JsonProperty("relationshipMetadata")
    @Valid
    private List<Object> relationshipMetadata = new ArrayList<Object>();
    @JsonProperty("unitsText")
    @Size(max = 128)
    private String unitsText;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/domains/cbrn/3.2/#DistanceType\",\"title\":\"DistanceType\",\"type\":\"object\",\"description\":\"A data type for a distance measure where the units are meters (m) and the values may not be negative.\",\"version\":\"0.4.5\",\"javaType\":\"niem.domains.cbrn._3_2.DistanceType\",\"properties\":{\"undefined\":{\"type\":[\"number\",\"null\"]},\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}},\"unitsText\":{\"type\":[\"string\",\"null\"],\"maxLength\":128}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The undefined
     */
    @JsonProperty("undefined")
    public Double getUndefined() {
        return undefined;
    }

    /**
     * 
     * @param undefined
     *     The undefined
     */
    @JsonProperty("undefined")
    public void setUndefined(Double undefined) {
        this.undefined = undefined;
    }

    /**
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
     * @param id
     *     The id
     */
    @JsonProperty("id")
    public void setId(String id) {
        this.id = id;
    }

    /**
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
     * @param ref
     *     The ref
     */
    @JsonProperty("ref")
    public void setRef(String ref) {
        this.ref = ref;
    }

    /**
     * 
     * @return
     *     The metadata
     */
    @JsonProperty("metadata")
    public List<Object> getMetadata() {
        return metadata;
    }

    /**
     * 
     * @param metadata
     *     The metadata
     */
    @JsonProperty("metadata")
    public void setMetadata(List<Object> metadata) {
        this.metadata = metadata;
    }

    /**
     * 
     * @return
     *     The relationshipMetadata
     */
    @JsonProperty("relationshipMetadata")
    public List<Object> getRelationshipMetadata() {
        return relationshipMetadata;
    }

    /**
     * 
     * @param relationshipMetadata
     *     The relationshipMetadata
     */
    @JsonProperty("relationshipMetadata")
    public void setRelationshipMetadata(List<Object> relationshipMetadata) {
        this.relationshipMetadata = relationshipMetadata;
    }

    /**
     * 
     * @return
     *     The unitsText
     */
    @JsonProperty("unitsText")
    public String getUnitsText() {
        return unitsText;
    }

    /**
     * 
     * @param unitsText
     *     The unitsText
     */
    @JsonProperty("unitsText")
    public void setUnitsText(String unitsText) {
        this.unitsText = unitsText;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("undefined".equals(name)) {
            if (value instanceof Double) {
                setUndefined(((Double) value));
            } else {
                throw new IllegalArgumentException(("property \"undefined\" is of type \"java.lang.Double\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
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
                        if (value instanceof List) {
                            setMetadata(((List<Object> ) value));
                        } else {
                            throw new IllegalArgumentException(("property \"metadata\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
                        }
                        return true;
                    } else {
                        if ("relationshipMetadata".equals(name)) {
                            if (value instanceof List) {
                                setRelationshipMetadata(((List<Object> ) value));
                            } else {
                                throw new IllegalArgumentException(("property \"relationshipMetadata\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
                            }
                            return true;
                        } else {
                            if ("unitsText".equals(name)) {
                                if (value instanceof String) {
                                    setUnitsText(((String) value));
                                } else {
                                    throw new IllegalArgumentException(("property \"unitsText\" is of type \"java.lang.String\", but got "+ value.getClass().toString()));
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
        if ("undefined".equals(name)) {
            return getUndefined();
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
                            if ("unitsText".equals(name)) {
                                return getUnitsText();
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
        Object value = declaredPropertyOrNotFound(name, DistanceType.NOT_FOUND_VALUE);
        if (DistanceType.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(undefined).append(id).append(ref).append(metadata).append(relationshipMetadata).append(unitsText).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof DistanceType) == false) {
            return false;
        }
        DistanceType rhs = ((DistanceType) other);
        return new EqualsBuilder().append(undefined, rhs.undefined).append(id, rhs.id).append(ref, rhs.ref).append(metadata, rhs.metadata).append(relationshipMetadata, rhs.relationshipMetadata).append(unitsText, rhs.unitsText).isEquals();
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
    public static DistanceType fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, DistanceType.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
