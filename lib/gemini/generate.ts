import { geminiModel } from "./client";
import { createComponentPrompt } from "./prompts"; // Updated import to match the new prompt function
import { componentTypes } from "../prompts/component-types";
import { stylePatterns } from "../prompts/style-patterns";

export async function generateComponentCode(
  name: string,
  description: string,
  type: keyof typeof componentTypes = "card",
  style: keyof typeof stylePatterns = "modern",
  props?: string,
  features?: string[]
): Promise<string> {
  try {
    // Generate the component-specific prompt
    const prompt = createComponentPrompt(name, description, style, props);

    // Add features to the prompt if provided
    if (features && features.length > 0) {
      prompt.parts.push({
        text: `Features: ${features.join(", ")}`
      });
    }

    // Send the generated prompt to the geminiModel for content generation
    const result = await geminiModel.generateContent(prompt.parts);
    const response = await result.response;
    const code = response.text().trim();

    // Ensure the "use client" directive is included at the top
    if (!code.startsWith('"use client"')) {
      return `"use client";\n\n${code}`;
    }

    return code;
  } catch (error) {
    console.error("Error generating component:", error);
    throw new Error("Failed to generate component code");
  }
}
