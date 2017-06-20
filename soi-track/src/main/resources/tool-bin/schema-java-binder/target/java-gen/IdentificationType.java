import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyDescription;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * IdentificationType
 * <p>
 * A data type for a representation of an identity.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "IdentificationID",
    "IdentificationAugmentationPoint"
})
public class IdentificationType {

    /**
     * IdentificationID
     * <p>
     * An identifier.
     * 
     */
    @JsonProperty("IdentificationID")
    @JsonPropertyDescription("An identifier.")
    private List<Object> identificationID = new ArrayList<Object>();
    @JsonProperty("IdentificationAugmentationPoint")
    private Object identificationAugmentationPoint;

    /**
     * IdentificationID
     * <p>
     * An identifier.
     * 
     */
    @JsonProperty("IdentificationID")
    public List<Object> getIdentificationID() {
        return identificationID;
    }

    /**
     * IdentificationID
     * <p>
     * An identifier.
     * 
     */
    @JsonProperty("IdentificationID")
    public void setIdentificationID(List<Object> identificationID) {
        this.identificationID = identificationID;
    }

    @JsonProperty("IdentificationAugmentationPoint")
    public Object getIdentificationAugmentationPoint() {
        return identificationAugmentationPoint;
    }

    @JsonProperty("IdentificationAugmentationPoint")
    public void setIdentificationAugmentationPoint(Object identificationAugmentationPoint) {
        this.identificationAugmentationPoint = identificationAugmentationPoint;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(identificationID).append(identificationAugmentationPoint).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof IdentificationType) == false) {
            return false;
        }
        IdentificationType rhs = ((IdentificationType) other);
        return new EqualsBuilder().append(identificationID, rhs.identificationID).append(identificationAugmentationPoint, rhs.identificationAugmentationPoint).isEquals();
    }

}
