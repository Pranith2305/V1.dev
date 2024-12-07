export interface StylePattern {
  name: string;
  description: string;
  classes: {
    container: string;
    header: string;
    content: string;
    footer: string;
  };
}

export const stylePatterns: Record<string, StylePattern> = {
  minimal: {
    name: "Minimal",
    description: "Clean and simple design with subtle shadows and borders",
    classes: {
      container: "bg-white dark:bg-gray-900 rounded-lg shadow-sm border",
      header: "p-4 border-b",
      content: "p-4",
      footer: "p-4 border-t"
    }
  },
  modern: {
    name: "Modern",
    description: "Bold design with vibrant colors and smooth transitions",
    classes: {
      container: "bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg",
      header: "p-6 border-b border-gray-100 dark:border-gray-800",
      content: "p-6",
      footer: "p-6 bg-gray-50 dark:bg-gray-800/50 rounded-b-xl"
    }
  },
  glassmorphism: {
    name: "Glassmorphism",
    description: "Modern glass effect with blur and transparency",
    classes: {
      container: "backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-white/20",
      header: "p-6 border-b border-white/10",
      content: "p-6",
      footer: "p-6 bg-white/10 dark:bg-gray-800/10 rounded-b-2xl"
    }
  },
  neumorphism: {
    name: "Neumorphism",
    description: "Soft UI with subtle shadows and depth",
    classes: {
      container: "bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]",
      header: "p-6 border-b border-gray-200 dark:border-gray-700",
      content: "p-6",
      footer: "p-6 bg-gray-50 dark:bg-gray-700/50 rounded-b-2xl"
    }
  }
};