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
 * Observer
 * <p>
 * An entity that becomes aware of things through senses.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "ObserverAugmentationPoint"
})
public class niem_domains_militaryOperationsRestricted_3_2_Observer {

    @JsonProperty("ObserverAugmentationPoint")
    private Object ObserverAugmentationPoint;
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"https://metadata.ces.mil/dse/dse_assets/100135658/SubmissionPackage/niem/militaryOperationsRestricted/3.2/#Observer\",\"title\":\"Observer\",\"type\":\"object\",\"description\":\"An entity that becomes aware of things through senses.\",\"version\":\"0.4.4\",\"javaType\":\"niem_domains_militaryOperationsRestricted_3_2_Observer\",\"properties\":{\"ObserverAugmentationPoint\":{\"ObserverIdentification\":{\"$ref\":\"../../../../tsoa/soi/feature-observer/2.0/ObserverIdentification.json\"},\"ObserverPointOfContact\":{\"$ref\":\"../../../../tsoa/soi/feature-observer/2.0/ObserverPointOfContact.json\"}}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * 
     * @return
     *     The ObserverAugmentationPoint
     */
    @JsonProperty("ObserverAugmentationPoint")
    public Object getObserverAugmentationPoint() {
        return ObserverAugmentationPoint;
    }

    /**
     * 
     * @param ObserverAugmentationPoint
     *     The ObserverAugmentationPoint
     */
    @JsonProperty("ObserverAugmentationPoint")
    public void setObserverAugmentationPoint(Object ObserverAugmentationPoint) {
        this.ObserverAugmentationPoint = ObserverAugmentationPoint;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("ObserverAugmentationPoint".equals(name)) {
            if (value instanceof Object) {
                setObserverAugmentationPoint(((Object) value));
            } else {
                throw new IllegalArgumentException(("property \"ObserverAugmentationPoint\" is of type \"java.lang.Object\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            return false;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("ObserverAugmentationPoint".equals(name)) {
            return getObserverAugmentationPoint();
        } else {
            return notFoundValue;
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, niem_domains_militaryOperationsRestricted_3_2_Observer.NOT_FOUND_VALUE);
        if (niem_domains_militaryOperationsRestricted_3_2_Observer.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(ObserverAugmentationPoint).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof niem_domains_militaryOperationsRestricted_3_2_Observer) == false) {
            return false;
        }
        niem_domains_militaryOperationsRestricted_3_2_Observer rhs = ((niem_domains_militaryOperationsRestricted_3_2_Observer) other);
        return new EqualsBuilder().append(ObserverAugmentationPoint, rhs.ObserverAugmentationPoint).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observer/2.0/#ObserverIdentification\",\"title\":\"ObserverIdentification\",\"type\":\"object\",\"description\":\"An observer identification described by its properties.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observer_2_0_ObserverIdentification\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/feature-observer/2.0/#ObserverPointOfContact\",\"title\":\"ObserverPointOfContact\",\"type\":\"object\",\"description\":\"An observer Point-Of-Contact described by its properties.\",\"version\":\"0.4.4\",\"javaType\":\"tsoa_soi_feature_observer_2_0_ObserverPointOfContact\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"../../../../tsoa/soi/feature-observer/2.0/ObserverIdentification.json", "../../../../tsoa/soi/feature-observer/2.0/ObserverPointOfContact.json"};
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
    public static niem_domains_militaryOperationsRestricted_3_2_Observer fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, niem_domains_militaryOperationsRestricted_3_2_Observer.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
