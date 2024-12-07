"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Prompt } from "@/components/prompt";
import { Preview } from "@/components/preview";
import { Toaster } from "@/components/ui/toaster";
import CreateButton from "@/components/createButton";

export default function Home() {
  const [generatedCode, setGeneratedCode] = useState("");
  const [componentName, setComponentName] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex">
        <div className="w-[400px] border-r bg-muted/10">
          <Prompt 
            onGenerate={(code, name) => {
              setGeneratedCode(code);
              setComponentName(name);
            }}
          />
        </div>
        <div className="flex-1">
          <Preview code={generatedCode} componentName={componentName} />
        </div>
      </main>
      <Toaster />
    </div>
  );
}