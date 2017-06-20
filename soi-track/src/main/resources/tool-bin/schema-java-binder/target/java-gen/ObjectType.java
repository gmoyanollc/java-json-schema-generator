import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * ObjectType
 * <p>
 * 
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "id",
    "ref",
    "metadata",
    "relationshipMetadata"
})
public class ObjectType {

    @JsonProperty("id")
    private Object id;
    @JsonProperty("ref")
    private Object ref;
    @JsonProperty("metadata")
    private Object metadata;
    @JsonProperty("relationshipMetadata")
    private Object relationshipMetadata;

    @JsonProperty("id")
    public Object getId() {
        return id;
    }

    @JsonProperty("id")
    public void setId(Object id) {
        this.id = id;
    }

    @JsonProperty("ref")
    public Object getRef() {
        return ref;
    }

    @JsonProperty("ref")
    public void setRef(Object ref) {
        this.ref = ref;
    }

    @JsonProperty("metadata")
    public Object getMetadata() {
        return metadata;
    }

    @JsonProperty("metadata")
    public void setMetadata(Object metadata) {
        this.metadata = metadata;
    }

    @JsonProperty("relationshipMetadata")
    public Object getRelationshipMetadata() {
        return relationshipMetadata;
    }

    @JsonProperty("relationshipMetadata")
    public void setRelationshipMetadata(Object relationshipMetadata) {
        this.relationshipMetadata = relationshipMetadata;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
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
        if ((other instanceof ObjectType) == false) {
            return false;
        }
        ObjectType rhs = ((ObjectType) other);
        return new EqualsBuilder().append(id, rhs.id).append(ref, rhs.ref).append(metadata, rhs.metadata).append(relationshipMetadata, rhs.relationshipMetadata).isEquals();
    }

}
