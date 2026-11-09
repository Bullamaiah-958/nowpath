import type { CourseModule } from './courses'

export type FullSyllabusModule = CourseModule & { handsOn: string[] }

export const itsmFullSyllabus: FullSyllabusModule[] = [
    {
        "title":  "ServiceNow Overview, Introduction and ITSM/ITIL Processes",
        "topics":  [
                       "Introduction of ServiceNow",
                       "What is ServiceNow?",
                       "History of ServiceNow",
                       "Introduction to ServiceNow products",
                       "ServiceNow Versions",
                       "What is ServiceNow instance?",
                       "Why and Who can use Service Now",
                       "Concept of Cloud Computing in Service Now",
                       "Introduction to ITIL foundation",
                       "Helpful Portals, Releases",
                       "Features and Architecture of servicenow",
                       "ITIL Lifecycle",
                       "Service Strategy",
                       "Service Design",
                       "Service Transition",
                       "Service Operation",
                       "Continual Service Improvement",
                       "Overview of how ServiceNow ITSM modules have evolved with AI enabled features (Overview)"
                   ],
        "handsOn":  [
                        "Getting a developer instance from ServiceNow developer site"
                    ]
    },
    {
        "title":  "Next Experience UI",
        "topics":  [
                       "Next Experience User Interface",
                       "User Profile",
                       "Instance Personalization (Preferences)",
                       "Configuring theme of Next Experience UI",
                       "Purpose of Impersonate User",
                       "Purpose of Elevate Role",
                       "What is UI15 and UI16?",
                       "How to switch to UI16?",
                       "Exploring the switch to UI16 and back to Next Experience UI",
                       "Configuring landing pages"
                   ],
        "handsOn":  [
                        "Exploring Next Experience Banner Frame"
                    ]
    },
    {
        "title":  "User Administration",
        "topics":  [
                       "Introduction to User Administration",
                       "Creating Users",
                       "Working with Roles",
                       "Assign roles to Users and Groups",
                       "Delegating roles",
                       "Creating Department and Company",
                       "Creating Countries and Locations",
                       "Creating groups",
                       "Users and Departments",
                       "Concept of delegation",
                       "Customizing user profile",
                       "Roles \u0026 group membership"
                   ],
        "handsOn":  [
                        "Creating users, groups,roles"
                    ]
    },
    {
        "title":  "Tables, Form, Dictionary",
        "topics":  [
                       "Introduction to Table",
                       "Types of Tables in ServiceNow - core vs custom",
                       "Creating Table",
                       "Personalizing form and Table Layout",
                       "Form layout/form design/Form builder",
                       "Dot walking / Dependancy",
                       "Auto number",
                       "Creating Section",
                       "View",
                       "Dictionary Entries",
                       "Dictionary Overrides",
                       "Reference Qualifiers",
                       "Related Lists"
                   ],
        "handsOn":  [
                        "Configuring a new form view using form layout and form design"
                    ]
    },
    {
        "title":  "Creating an Application, ACL",
        "topics":  [
                       "Creating Application, Module",
                       "Designing an Application",
                       "Scoped Applications",
                       "What is access control?",
                       "Access Control List",
                       "ACL Definition - Permission requirements",
                       "System created access controls",
                       "ACL Definition - Rule Types",
                       "Create Read, Write and Create ACL on table and field level",
                       "Write ACL Scripts",
                       "Concept of privileged system admin",
                       "CRUD operations",
                       "ACL execution flow"
                   ],
        "handsOn":  [
                        "Creating an access control rule to grant data permissions"
                    ]
    },
    {
        "title":  "Import sets \u0026 Update Sets",
        "topics":  [
                       "What are import sets?",
                       "Import set table",
                       "Transform maps",
                       "Coalesce fields",
                       "Data sources,",
                       "XML import",
                       "Transform maps,",
                       "Scheduled data import",
                       "Import sets",
                       "Data load automation",
                       "Introduction to Update Sets",
                       "Creating an Update Set",
                       "Update Sets Administration",
                       "Create New Local Update Sets",
                       "Working with Retrieved Update Sets",
                       "Preview and Commit Update Sets",
                       "Merge Update Set",
                       "Retrieve Update set in another Instance",
                       "Migrating Update Sets",
                       "Merge Update Sets",
                       "Back Out Changes from Target Instance"
                   ],
        "handsOn":  [
                        "Preparing for a data import, creating an import set table and transform map, transform multiple imports, clean up import data"
                    ]
    },
    {
        "title":  "Service Level Management",
        "topics":  [
                       "Introduction to Service Level Management (SLM)",
                       "Types of SLAs - SLA, OLA and UC",
                       "Understand Existing SLA Definition",
                       "Creating New SLA Definition",
                       "SLA Properties",
                       "Attach SLA to Tasks",
                       "SLA Targets",
                       "Schedule SLA Definitions",
                       "Importance of Retroactive Start and Pause",
                       "SLA Calculation",
                       "Tracking of SLA Definition"
                   ],
        "handsOn":  [
                        "Creating a new SLA definition and scheduling SLA definitions"
                    ]
    },
    {
        "title":  "Email Notifications, Reports_Dashboards, Assignment rules",
        "topics":  [
                       "Introduction to System notifications",
                       "Purpose of Email Notifications",
                       "Define notification",
                       "Email logs",
                       "Preview Notification",
                       "Defining a Template",
                       "Introduction to SMTP and POP mail servers",
                       "Notifications on Event is fired",
                       "Notifications on Triggered",
                       "Trigger email on event",
                       "Email Subscription",
                       "Working with Notification Email Scripts",
                       "About Dashboards",
                       "Creating Dashboards",
                       "Dashboards Widgets, guages",
                       "Homepages,Interactive filters",
                       "Dashboards Tabs",
                       "Dashboard Creation with Example",
                       "Introduction to Reports",
                       "Types of Reports",
                       "Creating New Report",
                       "Reports add to Dashboard",
                       "Report Sharing",
                       "Scheduling Reports",
                       "Assignment rules",
                       "Assignment Lookup rules"
                   ],
        "handsOn":  [
                        "Cretings notification, reports,dashboards, assignment automation"
                    ]
    },
    {
        "title":  "Service Catalog Management",
        "topics":  [
                       "Introduction to Service Catalog",
                       "Configure Service Catalogs",
                       "Configure Categories",
                       "Create Catalog Item",
                       "Adding Service Catalog to Service Portal",
                       "Catalog builder",
                       "Working with Cascade Variable",
                       "Working with single-row Variable Sets",
                       "Working with multi-row Variable Sets",
                       "Working with User Criteria",
                       "Create RITM and catalog task",
                       "Introduction of Workflow",
                       "Record Producers",
                       "Order Guides"
                   ],
        "handsOn":  [
                        "Creating a catalog item, adding variables to the item and testing, creating a record producer and catalog builder"
                    ]
    },
    {
        "title":  "Workflow/ Flow designer",
        "topics":  [
                       "Overview of workflow",
                       "Workflow Editor/ designing workflow",
                       "Attaching Workflow to Catalog item",
                       "Overview of flow designer",
                       "Getting started with flows",
                       "Architecture Overview",
                       "Flows",
                       "Action Designer",
                       "Transform Functions",
                       "User Access to Flow Designer",
                       "Change a flow or action\u0027s default title",
                       "Creating flow and ataching to catalog item"
                   ],
        "handsOn":  [
                        "Creating flows and workflows and observing the difference"
                    ]
    },
    {
        "title":  "Capstone project on service catalog",
        "topics":  [
                       "Creating of 7 business catalog",
                       "Creating workflows",
                       "Creating flows",
                       "Creating UI and backend by flow and workflow",
                       "Validating",
                       "Testing and moving to next environment by using different PDI\u0027s"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "JavaScript",
        "topics":  [
                       "Intro and String Methods and Class",
                       "functions ,Conditions, Loops and Jump statements",
                       "Array and Regular Expressions nd objects Operators"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "ServiceNow Scripting Ui Policy \u0026 Data policy",
        "topics":  [
                       "Introduction to scripting",
                       "When should you script?",
                       "How do you script? Syntax editor",
                       "Cliend side vs server side scripting",
                       "Ui Policies",
                       "Data policies"
                   ],
        "handsOn":  [
                        "Writing and testing data policies,Ui policies"
                    ]
    },
    {
        "title":  "Client Side Script",
        "topics":  [
                       "Client script OverView",
                       "Client scripting - onLoad",
                       "Client scripting - onSubmit",
                       "Client scripting - onChange",
                       "Client scripting - onCellEdit",
                       "Client side APIs - g_form and g_user"
                   ],
        "handsOn":  [
                        "Writing and testing client scripts, writing and testing scripts using g_form and g_user APIs"
                    ]
    },
    {
        "title":  "Server side script \u0026 BackGround Script",
        "topics":  [
                       "Introduction to Glide Record API",
                       "Steps to code a new Glide Record query",
                       "Working with Glide Aggregate API",
                       "Working with Glide DataTime API",
                       "How to confirm the records returned?",
                       "Working with addEncodedQuery()",
                       "Updating records on another table",
                       "Introduction to Glide System API",
                       "Glide System- User methods",
                       "Glide System- System methods",
                       "Glide System- Date and Time methods"
                   ],
        "handsOn":  [
                        "Writing and testings background scripts, fix scripts with server side API\u0027s"
                    ]
    },
    {
        "title":  "Business Rules \u0026 Script includes",
        "topics":  [
                       "Business Rules Overview",
                       "When business rules execute",
                       "When business rules execute - Before Query",
                       "When business rules execute - Display",
                       "When business rules execute - Before",
                       "When business rules execute - After",
                       "When business rules execute - Async",
                       "Business rule trigger",
                       "Server-side global variables",
                       "What is a Script Include?",
                       "Types of Script Includes",
                       "Classless Script Includes",
                       "Calling a script include client side using GlideAjax"
                   ],
        "handsOn":  [
                        "Writing and testing business rules, using current and previous objects, using Display"
                    ]
    },
    {
        "title":  "Email Scripts Scheduled Jobs UI actions Reference qualifiers",
        "topics":  [
                       "Email Script Overview",
                       "Calling Email Script in Notification",
                       "Overview of scheduled jobs",
                       "Automatically generate and distribute a report",
                       "Generate a record",
                       "Run a Script automatical (Ondemand, Weekly, Monthly etc.,)",
                       "UI actions: client vs server",
                       "Reference Qualifiers - simple, dynamic, advanced"
                   ],
        "handsOn":  [
                        "Writing and testing Email scripts, Scheduled jobs"
                    ]
    },
    {
        "title":  "ITSM",
        "topics":  [
                       "Incident Management",
                       "Problem Management",
                       "Change Management",
                       "Request Management",
                       "Knowledge Management",
                       "Asset management",
                       "Configuration managent"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "CMDB",
        "topics":  [
                       "CMDB Overview",
                       "CI class Manager / Attributes",
                       "Class Modeling",
                       "CI relationships \u0026 relation types",
                       "CI downgrading",
                       "CI upgrading",
                       "CI switch",
                       "Asset vs CI"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "Integration \u0026 integration Hub Fundamentals REST/SOAP",
        "topics":  [
                       "Integration Methods",
                       "Rest Integration",
                       "Authentication Methods",
                       "Inbound",
                       "Outbound",
                       "Bidirectional",
                       "Overview of IntegrationHub and its benefits",
                       "Creating connections and endpoints",
                       "Integration Flow Designer"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "CUSTOMER SERVICE MANAGEMENT (CSM)",
        "topics":  [
                       "CSM Overview",
                       "Who Use ServiceNow CSM",
                       "CSM Terminology",
                       "Plugins",
                       "Tables In CSM",
                       "Relationship among CSM table",
                       "Case management Overview",
                       "Creation Of Cases \u0026 Case Life Cycle",
                       "Configure chat/Virtual Agent",
                       "CSM Agent Workspace",
                       "Live Implementation with real time Scenarios",
                       "Assignment workbench \u0026 advaced work assignment",
                       "Case and Account Escaltion"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "HRSD (Human Resource Service Delivery)",
        "topics":  [
                       "HRSD Overview",
                       "Understarding HR Service Management",
                       "Human Resources getting started",
                       "HR Implementation Guide",
                       "Roles",
                       "Pre-Installations With Hrsd Plug-in",
                       "Configure HR Service Management",
                       "Automated HR Processes",
                       "Human Resources administration",
                       "HR Skills management",
                       "Create an HR Assignment rule",
                       "HR Catalog management",
                       "Create or Modify an Hr Profile",
                       "HR Profile",
                       "HR Survey",
                       "Human resources knowledge management",
                       "HR case, Create an HR Case, Sumit a case from the HR Catalogue, Approve an HR case",
                       "Escalate an HR case",
                       "Manage HR case By category",
                       "use the HR Manager Dashboard",
                       "Monitor HR on Boarding",
                       "HR Case SLAs",
                       "Self- Service HR Portral"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "UI Builder",
        "topics":  [
                       "Introduction of UI Builder",
                       "What is UI Builder",
                       "Overview",
                       "New Experience",
                       "Configure UI Builder",
                       "New Page",
                       "Variants",
                       "Data visualization",
                       "Data Resources",
                       "Working with Templates"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "Now Assist AI",
        "topics":  [
                       "Introduction to Generative AI in ServiceNow",
                       "2. Now Assist Essentials",
                       "3. Now Assist Products \u0026 Skills",
                       "4. Generative AI Controller",
                       "5. Now Assist Skill Kit",
                       "6. AI Search + Virtual Agent",
                       "7. Security \u0026 Governance"
                   ],
        "handsOn":  [

                    ]
    },
    {
        "title":  "Projects, Resume Preparation and Mock Interviews",
        "topics":  [
                       "Projects (Agile methodology)",
                       "IPC Implementation",
                       "Service catalog implementation",
                       "Resume preparation",
                       "Mock Interviews"
                   ],
        "handsOn":  [

                    ]
    }
]
