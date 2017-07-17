
package tsoa.soi.observed_event._2_0;

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
 * ObservedEvent
 * <p>
 * An observed event.
 * 
 */
@JsonInclude(JsonInclude.Include.NON_NULL)
@Generated("org.jsonschema2pojo")
@JsonPropertyOrder({
    "AugmentationType",
    "Event"
})
public class ObservedEvent {

    /**
     * AugmentationType
     * <p>
     * 
     * 
     */
    @JsonProperty("AugmentationType")
    @Valid
    private niem.structures._3_0.AugmentationType AugmentationType;
    /**
     * Event
     * <p>
     * An existance of a process or object at a location during a time interval.
     * 
     */
    @JsonProperty("Event")
    @Size(max = 16)
    @Valid
    private List<Object> Event = new ArrayList<Object>();
    protected final static Object NOT_FOUND_VALUE = new Object();
    private final static String[] schemaArray = new String[] {"{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/observed-event/2.0/#ObservedEvent\",\"title\":\"ObservedEvent\",\"type\":\"object\",\"description\":\"An observed event.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.observed_event._2_0.ObservedEvent\",\"properties\":{\"AugmentationType\":{\"$ref\":\"../../../../niem/structures/3.0/AugmentationType.json\"},\"Event\":{\"$ref\":\"../../../../niem/domains/militaryOperations/3.2/Event.json\"}},\"additionalProperties\":false}", ""};
    public static String schemaHash;

    /**
     * AugmentationType
     * <p>
     * 
     * 
     * @return
     *     The AugmentationType
     */
    @JsonProperty("AugmentationType")
    public niem.structures._3_0.AugmentationType getAugmentationType() {
        return AugmentationType;
    }

    /**
     * AugmentationType
     * <p>
     * 
     * 
     * @param AugmentationType
     *     The AugmentationType
     */
    @JsonProperty("AugmentationType")
    public void setAugmentationType(niem.structures._3_0.AugmentationType AugmentationType) {
        this.AugmentationType = AugmentationType;
    }

    /**
     * Event
     * <p>
     * An existance of a process or object at a location during a time interval.
     * 
     * @return
     *     The Event
     */
    @JsonProperty("Event")
    public List<Object> getEvent() {
        return Event;
    }

    /**
     * Event
     * <p>
     * An existance of a process or object at a location during a time interval.
     * 
     * @param Event
     *     The Event
     */
    @JsonProperty("Event")
    public void setEvent(List<Object> Event) {
        this.Event = Event;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected boolean declaredProperty(String name, Object value) {
        if ("AugmentationType".equals(name)) {
            if (value instanceof niem.structures._3_0.AugmentationType) {
                setAugmentationType(((niem.structures._3_0.AugmentationType) value));
            } else {
                throw new IllegalArgumentException(("property \"AugmentationType\" is of type \"niem.structures._3_0.AugmentationType\", but got "+ value.getClass().toString()));
            }
            return true;
        } else {
            if ("Event".equals(name)) {
                if (value instanceof List) {
                    setEvent(((List<Object> ) value));
                } else {
                    throw new IllegalArgumentException(("property \"Event\" is of type \"java.util.List<java.lang.Object>\", but got "+ value.getClass().toString()));
                }
                return true;
            } else {
                return false;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    protected Object declaredPropertyOrNotFound(String name, Object notFoundValue) {
        if ("AugmentationType".equals(name)) {
            return getAugmentationType();
        } else {
            if ("Event".equals(name)) {
                return getEvent();
            } else {
                return notFoundValue;
            }
        }
    }

    @SuppressWarnings({
        "unchecked"
    })
    public<T >T get(String name) {
        Object value = declaredPropertyOrNotFound(name, ObservedEvent.NOT_FOUND_VALUE);
        if (ObservedEvent.NOT_FOUND_VALUE!= value) {
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
        return new HashCodeBuilder().append(AugmentationType).append(Event).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof ObservedEvent) == false) {
            return false;
        }
        ObservedEvent rhs = ((ObservedEvent) other);
        return new EqualsBuilder().append(AugmentationType, rhs.AugmentationType).append(Event, rhs.Event).isEquals();
    }

    public static String[] getReferenceSchemaArray() {
        return new String[] {"{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationID\",\"title\":\"IdentificationID\",\"type\":\"array\",\"description\":\"An identifier.\",\"version\":\"0.4.5\",\"items\":{\"type\":\"string\",\"maxLength\":128},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationType\",\"title\":\"IdentificationType\",\"type\":\"object\",\"description\":\"A data type for a representation of an identity.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.IdentificationType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"IdentificationID\":{\"$ref\":\"IdentificationID.json\"},\"IdentificationJurisdiction\":{\"$ref\":\"IdentificationJurisdiction.json\"},\"IdentificationAugmentationPoint\":{\"ShortName\":{\"$ref\":\"../../../tsoa/soi/tsoa-track/2.0/ShortName.json\"}}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://mcsc.usmc.mil/mc2sa/tsoa/soi/tsoa-track/2.0/#ShortName\",\"title\":\"ShortName\",\"type\":\"object\",\"description\":\"A short-name, nick-name for something.\",\"version\":\"0.4.5\",\"javaType\":\"tsoa.soi.tsoa_track._2_0.ShortName\",\"properties\":{\"TextType\":{\"$ref\":\"../../../../niem/niem-core/3.0/TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#DateTime\",\"title\":\"DateTime\",\"type\":\"object\",\"description\":\"A full date and time.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.DateTime\",\"properties\":{\"type\":[\"object\",\"null\"]},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#EventValidityDateTimeRange\",\"title\":\"EventValidityDateTimeRange\",\"type\":\"array\",\"description\":\"A start and stop time of the Event.\",\"version\":\"0.4.5\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/DateRangeType.json\"},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#Event\",\"title\":\"Event\",\"type\":\"array\",\"description\":\"An existance of a process or object at a location during a time interval.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../../niem/structures/3.0/ObjectType.json\"},\"EventIdentification\":{\"$ref\":\"EventIdentification.json\"},\"EventValidityDateTimeRange\":{\"$ref\":\"EventValidityDateTimeRange.json\"}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#LocationCountryName\",\"title\":\"LocationCountryName\",\"type\":\"object\",\"description\":\"A name of a country, territory, dependency, or other such geopolitical subdivision of a location.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.LocationCountryName\",\"properties\":{\"TextType\":{\"$ref\":\"TextType.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#ObjectType\",\"title\":\"ObjectType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.ObjectType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16},\"relationshipMetadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"},\"maxItems\":16}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#StartDate\",\"title\":\"StartDate\",\"type\":\"array\",\"description\":\"A date on which something begins.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"DateRepresentation\":{\"DateTime\":{\"$ref\":\"DateTime.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#IdentificationJurisdiction\",\"title\":\"IdentificationJurisdiction\",\"type\":\"array\",\"description\":\"An area, region, or unit where a unique identification is issued.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"LocationCountry\":{\"LocationCountryName\":{\"$ref\":\"LocationCountryName.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#TextType\",\"title\":\"TextType\",\"type\":\"object\",\"description\":\"A data type for a character string.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.TextType\",\"properties\":{\"value\":{\"type\":\"string\"}},\"additionalProperties\":false}", "{\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#EndDate\",\"title\":\"EndDate\",\"type\":\"array\",\"description\":\"An end date.\",\"version\":\"0.4.5\",\"items\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"DateRepresentation\":{\"DateTime\":{\"$ref\":\"DateTime.json\"}}},\"maxItems\":16,\"additionalItems\":false}", "{\"id\":\"http://release.niem.gov/niem/domains/militaryOperations/3.2/#EventIdentification\",\"title\":\"EventIdentification\",\"type\":\"array\",\"description\":\"An identification of an event.\",\"version\":\"0.4.5\",\"items\":{\"$ref\":\"../../../../niem/niem-core/3.0/IdentificationType.json\"},\"maxItems\":16,\"additionalItems\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/niem-core/3.0/#DateRangeType\",\"title\":\"DateRangeType\",\"type\":\"object\",\"description\":\"A data type for a range of dates.\",\"version\":\"0.4.5\",\"javaType\":\"niem.niem_core._3_0.DateRangeType\",\"properties\":{\"ObjectType\":{\"$ref\":\"../../../niem/structures/3.0/ObjectType.json\"},\"StartDate\":{\"$ref\":\"StartDate.json\"},\"EndDate\":{\"$ref\":\"EndDate.json\"}},\"additionalProperties\":false}", "{\"$schema\":\"http://json-schema.org/draft-04/schema#\",\"id\":\"http://release.niem.gov/niem/structures/3.0/#AugmentationType\",\"title\":\"AugmentationType\",\"type\":\"object\",\"description\":\"\",\"version\":\"0.4.5\",\"javaType\":\"niem.structures._3_0.AugmentationType\",\"properties\":{\"id\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"ref\":{\"type\":[\"string\",\"null\"],\"maxLength\":128},\"metadata\":{\"type\":\"array\",\"item\":{\"type\":\"string\"}}},\"additionalProperties\":false}"};
    }

    public static String[] getReferenceArray() {
        return new String[] {"IdentificationID.json", "../../../../niem/niem-core/3.0/IdentificationType.json", "../../../tsoa/soi/tsoa-track/2.0/ShortName.json", "DateTime.json", "EventValidityDateTimeRange.json", "../../../../niem/domains/militaryOperations/3.2/Event.json", "LocationCountryName.json", "../../../niem/structures/3.0/ObjectType.json", "StartDate.json", "IdentificationJurisdiction.json", "../../../../niem/niem-core/3.0/TextType.json", "EndDate.json", "EventIdentification.json", "../../../../niem/niem-core/3.0/DateRangeType.json", "../../../../niem/structures/3.0/AugmentationType.json"};
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
    public static ObservedEvent fromString(String s) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(s, ObservedEvent.class);
        } catch (IOException _x) {
            return null;
        }
    }

}
