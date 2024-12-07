"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { generateComponentCode } from "@/lib/gemini/generate";
import { useToast } from "@/hooks/use-toast";

interface ComponentGeneratorProps {
  onGenerate: (code: string, name: string) => void;
  selectedStyle: string;
}

export function ComponentGenerator({ onGenerate, selectedStyle }: ComponentGeneratorProps) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("component");
  const [hasProps, setHasProps] = useState(false);
  const [props, setProps] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateComponent = async () => {
    if (!name || !description) {
      toast({
        title: "Missing Information",
        description: "Please provide both a name and description for your component.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const code = await generateComponentCode(name, description, selectedStyle, props);
      onGenerate(code, name);
      toast({
        title: "Component Generated",
        description: "Your component has been generated successfully.",
      });
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
    <Card>
      <CardHeader>
        <CardTitle>Generate Component</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Component Name</Label>
          <Input
            id="name"
            placeholder="MyComponent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Describe what your component should do..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Component Type</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="component">Function Component</SelectItem>
              <SelectItem value="page">Page Component</SelectItem>
              <SelectItem value="layout">Layout Component</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={hasProps}
            onCheckedChange={setHasProps}
          />
          <Label>Include Props</Label>
        </div>

        {hasProps && (
          <div className="space-y-2">
            <Label htmlFor="props">Props (name:type, separated by comma)</Label>
            <Textarea
              id="props"
              placeholder="title:string, count:number"
              value={props}
              onChange={(e) => setProps(e.target.value)}
            />
          </div>
        )}

        <Button 
          onClick={generateComponent} 
          className="w-full"
          disabled={isGenerating}
        >
          {isGenerating ? "Generating..." : "Generate Component"}
        </Button>
      </CardContent>
    </Card>
  );
}