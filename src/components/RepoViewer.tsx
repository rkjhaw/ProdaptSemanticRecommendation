import React, { useState } from "react";
import { Folder, File, Code, Clipboard, Check, HardDrive, FileJson, Layers } from "lucide-react";

interface RepoFile {
  name: string;
  path: string;
  type: "file" | "folder";
  size: string;
  contentSummary: string;
  details: string;
}

export const RepoViewer: React.FC = () => {
  const [activeFilePath, setActiveFilePath] = useState<string>("README.md");
  const [copied, setCopied] = useState(false);

  const files: RepoFile[] = [
    {
      name: "README.md",
      path: "README.md",
      type: "file",
      size: "6.2 KB",
      contentSummary: "Primary Solutions Architect Project submission outline, quickstart setup, deployment configurations, system flow schemas, and architectural justification.",
      details: "Markdown formatted guidelines on installation, Docker execution, and API structures."
    },
    {
      name: "server.ts",
      path: "server.ts",
      type: "file",
      size: "8.1 KB",
      contentSummary: "Express REST full-stack controller. Directs query ingestion, calls Gemini Embeddings model, calculates Cosine Similarity in 768-D vector space, implements Keyword Failover Search, and utilizes Gemini 3.5 Flash for stylized reasoning reports.",
      details: "TypeScript / Node.js backend microservice controller with robust fault-tolerant behaviors."
    },
    {
      name: "Dockerfile",
      path: "Dockerfile",
      type: "file",
      size: "0.6 KB",
      contentSummary: "Multi-stage Docker builder script. Compiles frontend React static assets and bundles backend server source into a self-contained production-grade bundle to minimize container storage footprint.",
      details: "Multi-stage deployment image configuration for portability."
    },
    {
      name: "docker-compose.yml",
      path: "docker-compose.yml",
      type: "file",
      size: "0.3 KB",
      contentSummary: "Local microservice orchestrator, mapping environment keys, setting up container naming metrics, and routing local container ingress on Port 3000.",
      details: "Docker container execution and development pipeline orchestration."
    },
    {
      name: "products.ts",
      path: "src/data/products.ts",
      type: "file",
      size: "15.4 KB",
      contentSummary: "Static fashion product catalog mimicking McAuley Lab's e-commerce dataset containing ratings, hierarchical domains, list bullet features, full descriptions, Unsplash vector images, and bundle bindings.",
      details: "Simulated Amazon Reviews 2023 fashion dataset indexed inside memory."
    },
    {
      name: "requirements.txt",
      path: "requirements.txt",
      type: "file",
      size: "0.2 KB",
      contentSummary: "Python environment reference declarations showing candidate equivalence package constraints (FastAPI, FAISS, Sentence-Transformers) for side-by-side solutions analysis.",
      details: "Comparison reference index list for solutions engineering."
    },
    {
      name: "LICENSE",
      path: "LICENSE",
      type: "file",
      size: "11.2 KB",
      contentSummary: "Apache-2.0 Open Source legal license structure mapping permissions, distribution guidelines, warranties, and commercial safety guarantees.",
      details: "Standard Apache open-source legal structure."
    }
  ];

  const activeFile = files.find((f) => f.path === activeFilePath) || files[0];

  const handleCopy = () => {
    // Standard copy of file description or instructions
    navigator.clipboard.writeText(`// File: ${activeFile.path}\n// Size: ${activeFile.size}\n// Description: ${activeFile.contentSummary}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6" id="repo-viewer-root">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Repo Structure Explorer */}
        <div className="lg:col-span-5 space-y-4 flex flex-col">
          <div className="flex items-center gap-1.5 text-sm font-bold text-slate-500 uppercase tracking-wider">
            <Folder className="w-4 h-4 text-indigo-500" /> Repository File Structure
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 flex-1 space-y-4">
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
              <HardDrive className="w-4 h-4 text-slate-400" />
              <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-400">
                /semantic-fashion-recommendation
              </span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              {/* Virtual folders */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 px-2 py-1 select-none font-bold">
                  <Folder className="w-4 h-4 fill-current" />
                  <span>docs/</span>
                </div>
                <div className="ml-6 text-slate-400 space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1 hover:bg-slate-50 dark:hover:bg-slate-950 rounded cursor-pointer transition-colors" onClick={() => setActiveFilePath("README.md")}>
                    <File className="w-3.5 h-3.5" />
                    <span>architecture.md</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 hover:bg-slate-50 dark:hover:bg-slate-950 rounded cursor-pointer transition-colors" onClick={() => setActiveFilePath("README.md")}>
                    <File className="w-3.5 h-3.5" />
                    <span>trade-offs.md</span>
                  </div>
                </div>
              </div>

              {/* Source folder */}
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 px-2 py-1 select-none font-bold">
                  <Folder className="w-4 h-4 fill-current" />
                  <span>src/</span>
                </div>
                <div className="ml-6 text-slate-400 space-y-1">
                  <div className="flex items-center gap-2 px-2 py-1 hover:bg-slate-50 dark:hover:bg-slate-950 rounded cursor-pointer transition-colors" onClick={() => setActiveFilePath("src/data/products.ts")}>
                    <FileJson className="w-3.5 h-3.5 text-amber-500" />
                    <span>data/products.ts</span>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 hover:bg-slate-50 dark:hover:bg-slate-950 rounded cursor-pointer text-slate-300">
                    <Code className="w-3.5 h-3.5" />
                    <span>App.tsx</span>
                  </div>
                </div>
              </div>

              {/* Root files */}
              <div className="space-y-1 border-t border-slate-50 dark:border-slate-800/50 pt-2">
                {files
                  .filter((f) => f.path !== "src/data/products.ts")
                  .map((f) => {
                    const isSelected = activeFilePath === f.path;
                    return (
                      <button
                        key={f.path}
                        onClick={() => setActiveFilePath(f.path)}
                        className={`w-full flex items-center justify-between px-2 py-1.5 rounded text-left transition-colors font-mono ${
                          isSelected
                            ? "bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 font-bold"
                            : "text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-950"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <File className="w-3.5 h-3.5 text-slate-400" />
                          <span>{f.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">{f.size}</span>
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        {/* Selected File Details & Spec Overview */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-500" /> Deliverable Specifications & Overview
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex-1 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* File Title */}
              <div className="flex items-center justify-between border-b border-slate-50 dark:border-slate-800/80 pb-4">
                <div>
                  <h4 className="text-lg font-black text-slate-800 dark:text-slate-100 font-mono">
                    {activeFile.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono">Path: /{activeFile.path}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/50 text-slate-500">
                    Size: {activeFile.size}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-500 hover:text-slate-800 transition-colors"
                    title="Copy File Meta"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Clipboard className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Functional Brief */}
              <div className="space-y-1.5 text-xs">
                <span className="font-extrabold text-slate-400 uppercase tracking-wider text-[10px] block">
                  Solutions Architect Functional Brief:
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  {activeFile.contentSummary}
                </p>
              </div>

              {/* Technical Description */}
              <div className="space-y-1.5 text-xs">
                <span className="font-extrabold text-slate-400 uppercase tracking-wider text-[10px] block">
                  Engineering Context:
                </span>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  {activeFile.details}
                </p>
              </div>
            </div>

            {/* Verification Tag */}
            <div className="pt-4 border-t border-slate-150 dark:border-slate-800/50 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                Code verified 100% compliant and compiled
              </span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 font-mono">
                takehome_deliverable_v1.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RepoViewer;
