"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface StyleSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function StyleSelector({ value, onChange }: StyleSelectorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Style Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={value} onValueChange={onChange} className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="minimal" id="minimal" />
            <Label htmlFor="minimal">Minimal & Clean</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="modern" id="modern" />
            <Label htmlFor="modern">Modern & Bold</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="glassmorphism" id="glassmorphism" />
            <Label htmlFor="glassmorphism">Glassmorphism</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="neumorphism" id="neumorphism" />
            <Label htmlFor="neumorphism">Neumorphism</Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
}