import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * LocationCountryName
 * <p>
 * A name of a country, territory, dependency, or other such geopolitical subdivision of a location.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "value"
})
public class LocationCountryName {

    @JsonProperty("value")
    private Object value;

    @JsonProperty("value")
    public Object getValue() {
        return value;
    }

    @JsonProperty("value")
    public void setValue(Object value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(value).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof LocationCountryName) == false) {
            return false;
        }
        LocationCountryName rhs = ((LocationCountryName) other);
        return new EqualsBuilder().append(value, rhs.value).isEquals();
    }

}
