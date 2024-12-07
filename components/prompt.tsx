"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { generateComponentCode } from "@/lib/gemini/generate";
import { examplePrompts } from "@/lib/gemini/prompts";
import { Wand2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PromptProps {
  onGenerate: (code: string, name: string) => void;
}

export function Prompt({ onGenerate }: PromptProps) {
  const { toast } = useToast();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Empty Prompt",
        description: "Please describe the component you want to generate.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const componentName = prompt.split(" ")[0].replace(/[^a-zA-Z]/g, "");
      const code = await generateComponentCode(
        componentName,
        prompt,
        "modern",
        undefined
      );
      onGenerate(code, componentName);
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Failed to generate component. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-4 space-y-6">
      <div className="space-y-4">
        <Textarea
          className="min-h-[200px] resize-none font-mono text-sm"
          placeholder="Describe your component in detail..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button 
          className="w-full"
          onClick={handleGenerate}
          disabled={isGenerating}
        >
          <Wand2 className="mr-2 h-4 w-4" />
          {isGenerating ? "Generating..." : "Generate Component"}
        </Button>
      </div>

      {/* <Card className="p-4">
        <h3 className="text-sm font-medium mb-3">Example Prompts</h3>
        <ul className="space-y-2">
          {examplePrompts.map((example, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className="w-full justify-start text-left h-auto p-2 font-normal"
                onClick={() => setPrompt(example)}
              >
                {example}
              </Button>
            </li>
          ))}
        </ul>
      </Card> */}
    </div>
  );
}