import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateComponentCode(
  name: string,
  description: string,
  style: string,
  props?: string
) {
  const prompt = `Create a React component named ${name} with these requirements:
- Description: ${description}
- Style: ${style}
${props ? `- Props: ${props}` : ''}
- Use Tailwind CSS for styling
- Include TypeScript types
- Make it beautiful and production-ready
- Include "use client" directive
- Follow React best practices`;

  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content || '';
}