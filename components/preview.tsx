"use client";

import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PreviewProps {
  code: string;
  componentName: string;
}

export function Preview({ code, componentName }: PreviewProps) {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    toast({
      title: "Copied to clipboard",
      description: "The component code has been copied to your clipboard.",
    });
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${componentName || "component"}.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-full flex flex-col bg-muted/5">
      <div className="border-b p-4 flex items-center justify-between">
        <h2 className="text-sm font-medium">
          {componentName ? `${componentName}.tsx` : "Preview"}
        </h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            disabled={!code}
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={downloadCode}
            disabled={!code}
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-auto bg-background font-mono">
        {code ? (
          <pre className="p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{code}</code>
          </pre>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Generated code will appear here
          </div>
        )}
      </div>
    </div>
  );
}