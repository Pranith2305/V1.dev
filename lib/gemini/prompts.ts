export const systemPrompt = ``;

export const createComponentPrompt = (
  name: string,
  description: string,
  style: string,
  props?: string
) => ({
  parts: [
    {
      text: systemPrompt,
    },
    {
      text: `Create a React component with these specifications:
Component Name: ${name}
Description: ${description}
Style Theme: ${style}
${props ? `Props: ${props}` : ''}

Requirements:
- Must include "use client" directive
- Implement proper TypeScript types
- Use Tailwind CSS for styling
- Ensure responsive design
- Add hover and focus states
- Include loading states if needed
- Handle edge cases
- Add proper aria-labels
- Optimize for accessibility

The component should be production-ready and follow all best practices.`
    }
  ]
});

export const examplePrompts = [
  "Create a modern product card with image, title, price, and add to cart button",
  "Build a responsive navigation bar with mobile menu and dark mode toggle",
  "Design a user profile section with avatar, stats, and activity feed",
  "Make a file upload component with drag and drop support",
  "Create a dashboard stats grid with animated counters",
];