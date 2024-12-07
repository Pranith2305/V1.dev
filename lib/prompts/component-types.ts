export interface ComponentType {
  name: string;
  description: string;
  features: string[];
}

export const componentTypes: Record<string, ComponentType> = {
  form: {
    name: "Form Component",
    description: "Interactive form with validation and submission handling",
    features: [
      "Input validation",
      "Error messages",
      "Loading states",
      "Success feedback",
      "Accessibility features"
    ]
  },
  card: {
    name: "Card Component",
    description: "Content container with flexible layout options",
    features: [
      "Image handling",
      "Content sections",
      "Action buttons",
      "Hover effects",
      "Responsive design"
    ]
  },
  navigation: {
    name: "Navigation Component",
    description: "Navigation structure with mobile responsiveness",
    features: [
      "Mobile menu",
      "Dropdown support",
      "Active states",
      "Breadcrumbs",
      "Search integration"
    ]
  },
  dashboard: {
    name: "Dashboard Component",
    description: "Data visualization and management interface",
    features: [
      "Stats display",
      "Charts/graphs",
      "Data tables",
      "Filters",
      "Export options"
    ]
  },
  modal: {
    name: "Modal Component",
    description: "Overlay dialog with focus management",
    features: [
      "Focus trap",
      "Keyboard handling",
      "Backdrop click",
      "Animation",
      "Close button"
    ]
  }
};