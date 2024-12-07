import { Boxes } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-muted/5">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Boxes className="h-6 w-6" />
          <h1 className="text-lg font-semibold">V1.DEV</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <a 
            href="https://github.com/Pranith2305/V1.dev" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}