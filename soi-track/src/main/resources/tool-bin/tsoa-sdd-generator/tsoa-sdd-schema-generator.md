\<Document Number provided by CM\>
<p align="center">
**Tactical Service-Oriented Architecture
Combat Operations Center
Command and Control
Software Package XXXX**

**Software Design Description**

image here

**Prepared By:**

**SPAWAR Systems Center, Atlantic**

**P.O. Box 190022**

**North Charleston, South Carolina 29419-9022**
</p>
Distribution Statement C: Distribution authorized to U.S. Government Agencies and their contractors for administrative or operational use as of 17 May 2017. Other requests for this document shall be referred to Marine Corps Systems Command, PM, MC3, PdM, MC2S.

Destruction Notice: For unclassified, limited documents, destroy by any method that will prevent disclosure of contents or reconstruction of the documents

\newpage

image here

**Tactical Service-Oriented Architecture
Combat Operations Center
Command and Control
Software Package XXXX**

**Software Design Description**

**Submitted By:**

**\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
**\<Name, Organization\>
\<Position (if available)\>

**Reviewed By**:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
\<Name, Organization\>
\<Position (if available)\>

**Approved By**:

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
\<Name, Organization\>

\<Position (if available)\>

**Record of Changes**

\***A** - ADDED **M** - MODIFIED **D** - DELETED

|Revision Identifier|Date|Figure, Table or Paragraph Number|A

M

D|Title or Brief Description|Change Request Number|
|:------------------|:---|:--------------------------------|:--|:-------------------------|:--------------------|
|.01|||A

M

D|Initial Document||
|||||||
|||||||

**Table of Contents**

**[1Introduction 1](#__RefHeading__1199_1523409203)**

[1.1Scope 1](#__RefHeading__1201_1523409203)

[1.2Identification 1](#__RefHeading__1203_1523409203)

[1.3System Overview 2](#__RefHeading__1205_1523409203)

[1.4Document Overview 2](#__RefHeading__1207_1523409203)

**[2Reference Documents 1](#__RefHeading__1209_1523409203)**

**[3Design Considerations 1](#__RefHeading__1211_1523409203)**

[3.1Assumption and Dependencies 1](#__RefHeading__1213_1523409203)

[3.2General Constraints 1](#__RefHeading__1215_1523409203)

[3.3Goals and Guidelines 2](#__RefHeading__1217_1523409203)

[3.4Development Methods 2](#__RefHeading__1219_1523409203)

**[4Components 1](#__RefHeading__1221_1523409203)**

**[5System Architecture 1](#__RefHeading__1223_1523409203)**

[5.1Subsystem Architecture 1](#__RefHeading__1225_1523409203)

**[6Detailed System Design 1](#__RefHeading__1227_1523409203)**

[6.1Classification 1](#__RefHeading__1229_1523409203)

[6.2Definition 1](#__RefHeading__1231_1523409203)

[6.3Responsibilities 1](#__RefHeading__1233_1523409203)

[6.4Constraints 1](#__RefHeading__1235_1523409203)

[6.5Composition 1](#__RefHeading__1237_1523409203)

[6.6Uses/Interactions 1](#__RefHeading__1239_1523409203)

[6.7Resources 2](#__RefHeading__1241_1523409203)

[6.8Processing 2](#__RefHeading__1243_1523409203)

[6.9Interface/Exports 2](#__RefHeading__1245_1523409203)

**[7Traceability 1](#__RefHeading__1247_1523409203)**

**[8Notes 1](#__RefHeading__1249_1523409203)**

**List of Tables**

**List of Figures**

Introduction
============

1.  

\<Provide the Scope of this document.\>

1.  

This is the Software Design Description (SDD) for \<Software Name/Version\>.

**Table 1‑1 Configuration Management (CM) Identification**

||
|**CM Official Name**|\<To be completed by CM representative\>|
|**CM Acronym**|\<To be completed by CM representative\>|
|**Version Number**|\<To be completed by CM representative\>|
|**Increment Number**|\<To be completed by CM representative\>|
|**Material Provider**

**Name/Address**|SPAWAR Systems Center Atlantic

Code 53160, Bldg. 198
PO Box 190022 
North Charleston SC 29419-9022|

1.  

The TSOA is a collection of software components that comply with the Marine Air Ground Task Force (MAGTF) Command and Control (C2) Software Architecture and, when composed for a system, provides C2 and Situational Awareness capabilities. When the TSOA is fully fielded, the end-state is an end-to-end software C2 system that supports the seamless flow of data on the battlefield, focusing on C2 platforms as the center of data integration. This provides Marines a software architecture that can quickly adapt to the mission in order to ensure an efficient and effective traversing of the Observe, Orient, Decide and Act (OODA) Loop. An example of this heightened efficiency is the ability to tailor the flow and presentation of data for a commander and his staff, supporting both their Standard Operating Procedures (SOPs) and decision making heuristics. The underlying software architecture is scalable and tailorable due to its basis in software engineering Best Practices such as Service-Oriented Architecture (SOA). TSOA entails a truly interoperable Marine Corps C2 capability that is relevant across the full range of military operations, from Major Theater War to Policing Actions to Humanitarian Assistance and Disaster Relief operations.

In order to meet evolving operational C2 needs, MAGTF C2 Systems Applications (MC2SA) will employ a SOA approach in acquiring and designing services that will not only provide the Ground Combat Element (GCE) the ability to link services together, but also the ability to easily add new services. TSOA goals are to:

-   -   -   

1.  

\<Summarize the contents of this document, stating its purpose, intended audience, etc. as deemed appropriate.\>

1.  

This section lists the number, title, revision, and date of all documents referenced in this plan. This section also identifies the source of all documents not available through normal government stocking activities.

**Table 2‑2 Reference Documents**

**Document Number**

**Document Title**

**Revision/Date**

.

1.  

\<This section should describe many of the issues that need to be addressed or resolved before attempting to devise a complete design solution.\>

1.  

\<Describe any assumptions or dependencies regarding the software and its use. These may concern such issues as:

-   -   -   -   -   

1.  

\<Describe any global limitations or constraints that have a significant impact on the design of the system's software (and describe the associated impact). Such constraints may be imposed by any of the following (the list is not exhaustive):

-   -   -   -   -   -   -   -   -   -   -   -   -   -   

1.  

\<Describe any goals, guidelines, principles, or priorities that dominate or embody the design of the system's software. Such goals might be:

-   -   -   

\<For each such goal or guideline, unless it is implicitly obvious, describe the reason for its desirability. Feel free to state and describe each goal in its own subsection if you wish.\>

1.  

\<Briefly describe the method or approach used for this software design. If one or more formal/published methods were adopted or adapted, then include a reference to a more detailed description of these methods. If several methods were seriously considered, then each such method should be mentioned, along with a brief explanation of why all or part of it was used or not used.\>

1.  

\<List all the software components that the application depends on and that are not found in the standard hosting environment. The components function in the application should also be described.\>

1.  

\<This section should provide a high-level overview of how the functionality and responsibilities of the system were partitioned and then assigned to subsystems or components. Do not go into too much detail about the individual components themselves (there is a subsequent section for detailed component descriptions). The main purpose here is to gain a general understanding of how and why the system was decomposed, and how the individual parts work together to provide the desired functionality.

At the top-most level, describe the major responsibilities that the software must undertake and the various roles the system (or portions of the system) must play. Describe how the system was broken down into its components/subsystems (identifying each top-level component/subsystem as well as the roles/responsibilities assigned to it). Describe how the higher-level components collaborate with each other in order to achieve the required results. Do not forget to provide some sort of rationale for choosing this particular decomposition of the system (perhaps discussing other proposed decompositions and why they were rejected). Feel free to make use of design patterns, either in describing parts of the architecture (in pattern format), or for referring to the elements of the architecture that employ them.

If there are any diagrams, models, flowcharts, documented scenarios or use-cases of the system behavior and/or structure, they may be included here (unless you feel they are complex enough to merit being placed in the Detailed System Design section). Diagrams that describe a particular component or subsystem should be included within the particular subsection that describes that component or subsystem.\>

1.  

\<If a particular component is one which merits a more detailed discussion than what was presented in the System Architecture section, provide that more detailed discussion in a subsection of the System Architecture* *section (or, it may even be more appropriate to describe the component in its own design document). If necessary, describe how the component was further divided into subcomponents, and the relationships and interactions between the subcomponents (similar to what was done for top-level components in the System Architecture* *section).

If any subcomponents are also deemed to merit further discussion, then describe them in a separate subsection of this section (and in a similar fashion). Proceed to go into as many levels/subsections of discussion as needed in order for the reader to gain a high-level understanding of the entire system or subsystem (but remember to leave the gory details for the Detailed System Design section).

If this component is very large and/or complex, you may want to consider documenting its design in a separate document and simply including a reference to it in this section. If this is the option you choose, the design document for this component should have an organizational format that is very similar (if not identical to) this document.\>

1.  

\<Most components described in the System Architecture* *section will require a more detailed discussion. Other lower-level components and subcomponents may need to be described as well. Each subsection of this section will refer to or contain a detailed description of a system software component. The discussion provided should cover each of software component listed below.\>

1.  

\<Insert the kind of component, such as a subsystem, module, class, package, function, file, etc.\>

1.  

\<Insert the specific purpose and semantic meaning of the component. This may need to refer back to the requirements specification.\>

1.  

\<List the primary responsibilities and/or behavior of this component. What does this component accomplish? What roles does it play? What kinds of services does it provide to its clients? For some components, this may need to refer back to the requirements specification.\>

1.  

\<List any relevant assumptions, limitations, or constraints for this component. This should include constraints on timing, storage, or component state, and might include rules for interacting with this component (encompassing preconditions, postconditions, invariants, other constraints on input or output values and local or global values, data formats and data access, synchronization, exceptions, etc.)\>

1.  

\<Insert a description of the use and meaning of the subcomponents that are a part of this component.\>

1.  

\<Insert a description of this component’s collaborations with other components. What other components is this entity used by? What other components does this entity use (this would include any side-effects this entity might have on other parts of the system)? This concerns the method of interaction as well as the interaction itself. Object-oriented designs should include a description of any known or anticipated subclasses, superclasses, and metaclasses.\>

1.  

\<Insert a description of any and all resources that are managed, affected, or required by this entity. Resources are entities external to the design, such as memory, processors, printers, databases, or a software library. This should include a discussion of any possible race conditions and/or deadlock situations, and how they might be resolved.\>

1.  

\<Insert a description of precisely how this component goes about performing the duties necessary to fulfill its responsibilities. This should encompass a description of any algorithms used, changes of state, relevant time or space complexity, concurrency, methods of creation, initialization, and cleanup, and handling of exceptional conditions.\>

1.  

\<List the set of services (resources, data, types, constants, subroutines, and exceptions) that provided by this component. The precise definition or declaration of each such element should be present, along with comments or annotations describing the meanings of values, parameters, etc. For each service element described, include a description (or provide a reference) of its important software component attributes (Classification, Definition, Responsibilities, Constraints, Composition, Uses, Resources, Processing, and Interface).\>

\<Much of the information that appears in this section is not necessarily expected to be kept separate from the source code. In fact, much of the information can be gleaned from the source itself (especially if it is adequately commented). This section should not copy or reproduce information that can be easily obtained from reading the source code (this would be an unwanted and unnecessary duplication of effort and would be very difficult to keep up-to-date). It is recommended that most of this information be contained in the source (with appropriate comments for each component, subsystem, module, and subroutine). Hence, it is expected that this section will largely consist of references to or excerpts of annotated diagrams and source code. Any referenced diagrams or source code excerpts should be provided at any design reviews.\>

1.  

\<This section should map design elements in the SDD to the requirement or User Story it satisfies.\>

**Table 7‑3: Traceability**

**User Story ID (Forge ID)**

**Title**

**Description**

**Vendor**

**Verification Method**

**CSC**

**SDD Paragraph**

artf\<xxxxx\>

\<user story title\>

\<user story description\>

\<verification method\>

\<CSC\>

\<paragraph\>

artf\<xxxxx\>

\<user story title\>

\<user story description\>

\<verification method\>

\<CSC\>

\<paragraph\>

artf\<xxxxx\>

\<user story title\>

\<user story description\>

\<verification method\>

\<CSC\>

\<paragraph\>

1.  

\<This section is for additional design/architecture considerations poorly aligned with the previous sections.\>

1.  

|Term|Definition|
|:---|:---------|
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||
|||


