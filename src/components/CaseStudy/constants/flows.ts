import type { FlowDiagram } from '../types/flow';

export const FLOW_DIAGRAMS: FlowDiagram[] = [
  {
    title: "Elders Flow",
    nodes: [
      {
        id: "start",
        label: "Start",
      },
      {
        id: "user-details",
        label: "User Details",
        children: [
          { id: "birthday", label: "Enter Birthday" },
          { id: "national-id", label: "National ID (Aadhar/SSN)" }
        ]
      },
      {
        id: "registration",
        label: "Registration",
        children: [
          { id: "address", label: "Address details" },
          { id: "family", label: "Add family members" }
        ]
      },
      {
        id: "services",
        label: "Category-Specific Services",
        children: [
          { 
            id: "financial",
            label: "Financial Support",
            children: [
              { id: "pension", label: "Pension" },
              { id: "family-income", label: "Family income" },
              { id: "allowance", label: "Older day allowance" },
              { id: "fundraising", label: "Fundraising" }
            ]
          },
          {
            id: "physical",
            label: "Physical Needs",
            children: [
              { id: "repairs", label: "Home repairs" },
              { id: "devices", label: "Assistive devices" },
              { id: "security", label: "Social security" }
            ]
          },
          {
            id: "health",
            label: "Health Services",
            children: [
              { id: "medical", label: "Medical camp" },
              { id: "vaccination", label: "Vaccination drives" },
              { id: "insurance", label: "Insurance" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Volunteers & Organizations",
    nodes: [
      {
        id: "start",
        label: "Start"
      },
      {
        id: "user-details",
        label: "User Details",
        children: [
          { id: "birthday", label: "Enter Birthday" },
          { id: "user-id", label: "SIN/UID (User ID)" },
          {
            id: "purpose",
            label: "Purpose of Access",
            children: [
              { id: "financial", label: "Financial Support" },
              { id: "volunteering", label: "Volunteering" },
              { id: "events", label: "Event Management" },
              { id: "emergency", label: "Emergency Help" },
              { id: "projects", label: "Projects" }
            ]
          }
        ]
      },
      {
        id: "org-details",
        label: "Organization Details",
        children: [
          { id: "name", label: "Name" },
          { id: "id", label: "Organization ID" },
          { id: "contact", label: "Contact Information" },
          { id: "address", label: "Address" }
        ]
      }
    ]
  }
] as const;