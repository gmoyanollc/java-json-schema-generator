import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyDescription;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;


/**
 * ShortName
 * <p>
 * A short-name, nick-name for something.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
    "TextType"
})
public class ShortName {

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     */
    @JsonProperty("TextType")
    @JsonPropertyDescription("A data type for a character string.")
    private TextType textType;

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     */
    @JsonProperty("TextType")
    public TextType getTextType() {
        return textType;
    }

    /**
     * TextType
     * <p>
     * A data type for a character string.
     * 
     */
    @JsonProperty("TextType")
    public void setTextType(TextType textType) {
        this.textType = textType;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(textType).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ShortName) == false) {
            return false;
        }
        ShortName rhs = ((ShortName) other);
        return new EqualsBuilder().append(textType, rhs.textType).isEquals();
    }

}
