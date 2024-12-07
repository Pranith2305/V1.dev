import { systemPrompt } from './system-prompt';
import { componentTypes, type ComponentType } from './component-types';
import { stylePatterns, type StylePattern } from './style-patterns';

interface PromptOptions {
  componentName: string;
  description: string;
  type: keyof typeof componentTypes;
  style: keyof typeof stylePatterns;
  props?: string;
  features?: string[];
}

export function generatePrompt({
  componentName,
  description,
  type,
  style,
  props,
  features = []
}: PromptOptions) {
  const componentType = componentTypes[type];
  const stylePattern = stylePatterns[style];
  
  const combinedFeatures = [
    ...new Set([
      ...componentType.features,
      ...features
    ])
  ];

  return {
    parts: [
      {
        text: systemPrompt
      },
      {
        text: `Create a React component with these specifications:

Component Name: ${componentName}
Base Type: ${componentType.name}
Description: ${description}
Style Theme: ${stylePattern.name}
${props ? `Props: ${props}` : ''}

Required Features:
${combinedFeatures.map(feature => `- ${feature}`).join('\n')}

Style Classes Reference:
${Object.entries(stylePattern.classes)
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n')}

Additional Requirements:
- Must include "use client" directive
- Use shadcn/ui components where appropriate
- Implement all accessibility features
- Include proper TypeScript types
- Handle all loading and error states
- Implement responsive design
- Add proper documentation
- Include proper test coverage considerations

Generate only the component code without any additional text or explanations.`
      }
    ]
  };
}