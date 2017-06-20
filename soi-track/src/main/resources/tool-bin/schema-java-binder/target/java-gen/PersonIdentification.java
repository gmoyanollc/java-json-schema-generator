import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyDescription;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * PersonIdentification
 * <p>
 * An identification enumerator that represents a PERSON.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "IdentificationType"
})
public class PersonIdentification {

    /**
     * IdentificationType
     * <p>
     * A data type for a representation of an identity.
     * 
     */
    @JsonProperty("IdentificationType")
    @JsonPropertyDescription("A data type for a representation of an identity.")
    private IdentificationType identificationType;

    /**
     * IdentificationType
     * <p>
     * A data type for a representation of an identity.
     * 
     */
    @JsonProperty("IdentificationType")
    public IdentificationType getIdentificationType() {
        return identificationType;
    }

    /**
     * IdentificationType
     * <p>
     * A data type for a representation of an identity.
     * 
     */
    @JsonProperty("IdentificationType")
    public void setIdentificationType(IdentificationType identificationType) {
        this.identificationType = identificationType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(identificationType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof PersonIdentification) == false) {
            return false;
        }
        PersonIdentification rhs = ((PersonIdentification) other);
        return new EqualsBuilder().append(identificationType, rhs.identificationType).isEquals();
    }

}
