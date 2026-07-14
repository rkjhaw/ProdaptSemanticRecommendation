import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  if (!content) return null;

  // Split content by lines
  const lines = content.split("\n");
  let insideList = false;
  const renderedElements: React.ReactNode[] = [];

  const parseInlineStyles = (text: string) => {
    // Basic bold parsing: **text** -> <strong>text</strong>
    const parts = text.split(/\*\*([\s\S]*?)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} className="font-semibold text-gray-900 dark:text-white">{part}</strong>;
      }
      return part;
    });
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    // Headers
    if (trimmed.startsWith("### ")) {
      if (insideList) {
        insideList = false;
      }
      renderedElements.push(
        <h4 key={`h3-${idx}`} className="text-lg font-bold text-slate-800 dark:text-slate-100 mt-5 mb-2 leading-tight">
          {parseInlineStyles(trimmed.slice(4))}
        </h4>
      );
      return;
    }

    if (trimmed.startsWith("## ")) {
      if (insideList) {
        insideList = false;
      }
      renderedElements.push(
        <h3 key={`h2-${idx}`} className="text-xl font-bold text-slate-800 dark:text-slate-100 mt-6 mb-3 border-b border-slate-200 dark:border-slate-800 pb-1 leading-tight">
          {parseInlineStyles(trimmed.slice(3))}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith("# ")) {
      if (insideList) {
        insideList = false;
      }
      renderedElements.push(
        <h2 key={`h1-${idx}`} className="text-2xl font-black text-slate-900 dark:text-white mt-8 mb-4 leading-tight">
          {parseInlineStyles(trimmed.slice(2))}
        </h2>
      );
      return;
    }

    // Bullet points
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      const listContent = trimmed.slice(2);
      renderedElements.push(
        <li key={`li-${idx}`} className="ml-5 list-disc text-sm text-slate-600 dark:text-slate-300 mb-1.5 leading-relaxed">
          {parseInlineStyles(listContent)}
        </li>
      );
      return;
    }

    // Numbered lists
    if (/^\d+\.\s/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s(.*)/);
      if (match) {
        renderedElements.push(
          <li key={`ol-${idx}`} className="ml-5 list-decimal text-sm text-slate-600 dark:text-slate-300 mb-1.5 leading-relaxed">
            {parseInlineStyles(match[2])}
          </li>
        );
        return;
      }
    }

    // Empty lines
    if (trimmed === "") {
      insideList = false;
      renderedElements.push(<div key={`empty-${idx}`} className="h-2" />);
      return;
    }

    // Regular paragraphs
    renderedElements.push(
      <p key={`p-${idx}`} className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
        {parseInlineStyles(trimmed)}
      </p>
    );
  });

  return <div className="space-y-1 font-sans">{renderedElements}</div>;
};
export default MarkdownRenderer;
